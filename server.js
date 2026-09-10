#!/usr/bin/env node
// Stonetop LAN server — serves the site and syncs the shared store over your own network.
//
//   node server.js            (or double-click run-server.command on a Mac)
//
// Everyone on the same Wi-Fi opens the address it prints. Every change any device makes is
// saved to data/store.json on this machine and pushed live to every other device. No accounts,
// no internet needed, nothing that expires. The site uses this automatically when it is served
// from here; served from Netlify it falls back to Firebase as before.
//
// Zero dependencies — Node 18 or newer.
'use strict';
const http = require('http'), fs = require('fs'), path = require('path'), os = require('os');
const ROOT = __dirname;
const PORT = parseInt(process.env.PORT, 10) || 8732;
const DATA = path.join(ROOT, 'data'), FILE = path.join(DATA, 'store.json');

let store = {};
try { store = JSON.parse(fs.readFileSync(FILE, 'utf8')) || {}; } catch (_) {}

// ── persistence (atomic write, debounced) ────────────────────────────────────
let saveTimer = null;
function persist() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      fs.mkdirSync(DATA, { recursive: true });
      const tmp = FILE + '.tmp';
      fs.writeFileSync(tmp, JSON.stringify(store));
      fs.renameSync(tmp, FILE);
    } catch (e) { console.error('  ! could not save data/store.json:', e.message); }
  }, 150);
}

// ── live updates: every connected page gets the whole store after each change ──
const clients = new Set();
function broadcast() {
  const frame = 'data: ' + JSON.stringify(store) + '\n\n';
  for (const res of clients) { try { res.write(frame); } catch (_) {} }
}
setInterval(() => { for (const res of clients) { try { res.write(': ping\n\n'); } catch (_) {} } }, 25000);

// ── store paths, mirroring the subset of Firebase's API the site uses ───────
function node(segs, create) {
  let n = store;
  for (const s of segs) {
    if (n[s] == null || typeof n[s] !== 'object') { if (!create) return undefined; n[s] = {}; }
    n = n[s];
  }
  return n;
}
function setPath(segs, val) {                 // ref.set(value)
  if (!segs.length) { store = (val && typeof val === 'object') ? val : {}; return; }
  const parent = node(segs.slice(0, -1), true), k = segs[segs.length - 1];
  if (val === null || val === undefined) delete parent[k]; else parent[k] = val;
}
function updatePath(segs, obj) {              // ref.update({...}): replace each given child
  const n = segs.length ? node(segs, true) : store;
  for (const k of Object.keys(obj || {})) { if (obj[k] === null) delete n[k]; else n[k] = obj[k]; }
}

// ── http ─────────────────────────────────────────────────────────────────────
const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json',
  '.md': 'text/plain; charset=utf-8', '.pdf': 'application/pdf', '.ico': 'image/x-icon', '.webp': 'image/webp' };
function readBody(req) {
  return new Promise((resolve, reject) => {
    let b = ''; req.on('data', c => { b += c; if (b.length > 30e6) req.destroy(); });
    req.on('end', () => resolve(b)); req.on('error', reject);
  });
}
function json(res, code, obj) { res.writeHead(code, { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }); res.end(JSON.stringify(obj)); }

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, 'http://local');
  const p = url.pathname;

  if (p === '/api/ping') return json(res, 200, { ok: true, name: 'stonetop-lan', clients: clients.size });

  if (p === '/api/events') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-store', 'Connection': 'keep-alive' });
    res.write('retry: 2000\n\n');
    res.write('data: ' + JSON.stringify(store) + '\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }

  if (p === '/api/store' || p.startsWith('/api/store/')) {
    const segs = p.slice('/api/store'.length).split('/').filter(Boolean).map(decodeURIComponent);
    if (req.method === 'GET') { const n = segs.length ? node(segs, false) : store; return json(res, 200, n === undefined ? null : n); }
    if (req.method === 'PUT' || req.method === 'PATCH') {
      let body;
      try { body = JSON.parse((await readBody(req)) || 'null'); } catch (_) { return json(res, 400, { error: 'bad json' }); }
      if (req.method === 'PUT') setPath(segs, body); else updatePath(segs, body);
      persist(); broadcast();
      return json(res, 200, { ok: true });
    }
    res.writeHead(405); return res.end();
  }

  // static files (the site itself); never the rulebooks, the data file, or git internals
  let file = decodeURIComponent(p);
  if (file === '/') file = '/index.html';
  if (file.includes('..') || /^\/(Books|data|node_modules|\.git)(\/|$)/.test(file)) { res.writeHead(403); return res.end('forbidden'); }
  const abs = path.join(ROOT, file);
  fs.stat(abs, (err, st) => {
    if (err || !st.isFile()) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(abs).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    fs.createReadStream(abs).pipe(res);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const ips = [];
  for (const list of Object.values(os.networkInterfaces())) for (const i of list || []) if (i.family === 'IPv4' && !i.internal) ips.push(i.address);
  console.log('\n  Stonetop is up. On this machine:  http://localhost:' + PORT);
  if (ips.length) { console.log('  On your Wi-Fi, open one of these on any phone or laptop:'); ips.forEach(ip => console.log('    http://' + ip + ':' + PORT)); }
  console.log('    http://' + os.hostname().replace(/\.local$/, '') + '.local:' + PORT + '   (Macs and iPhones)');
  console.log('\n  Shared data lives in data/store.json. Keep this window open while you play. Ctrl+C stops it.\n');
});
