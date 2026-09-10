# Stonetop Site — Project Guide

An interactive, player-facing website for a home **Stonetop** tabletop-RPG campaign.
The concept: the book's hand-drawn **2D map of Stonetop**, where **each place is a
clickable pin** opening a "room" of the campaign (characters, rules, townsfolk, recaps, the
wider world). The village map *is* the menu. (The original three.js 3D village was replaced
by the 2D book map on 2026-09-09; the Vicinity / World's End maps are the planned next step.) Built for a small home group; one player is the DM, the others are players.

> This file is the working brief for anyone (human or Claude) picking the project up.
> It documents how things work today, a known bug, and the requested roadmap.

---

## How to run / test locally

There is **no build step** — it's plain static files.

```bash
cd "stonetop-site"
python3 -m http.server 8732
# then open http://127.0.0.1:8732/
```

Serve over HTTP rather than opening `index.html` via `file://` — the Firebase sync layer
and some browsers' image/clipboard handling misbehave under the file protocol.

Quick JS syntax check of the inline script:
```bash
awk '/^<script>$/{f=1;next} /^<\/script>$/{f=0} f' index.html > /tmp/check.js && node --check /tmp/check.js
```

---

## Files

| File | What it is |
|------|------------|
| `index.html` | **Everything** — HTML, CSS, and ~1,900 lines of inline JS in one file. This is the whole app. |
| `map-stonetop.jpg` | **The village map the app loads** (2600×2009, ~790 KB). Web copy of `Map 1 - Stonetop - 8-5 x 11.jpg`: converted CMYK→sRGB through the embedded ICC profile (see Gotchas), downscaled, JPEG q72. |
| `Map 1/2/3 - … - 8-5 x 11.jpg` | 600 dpi print masters of the book's three maps (Stonetop, The Vicinity, The World's End; 6600×5100, 5–6 MB each, **CMYK**), uploaded by a collaborator on 2026-09-09. Not loaded by the app — derive web copies from them. |
| `registerpage1.png` / `registerpage2.png` | Screenshots of the DM's townsfolk register (30 NPCs: name, age, occupation, traits, alive/dead). Not used by the app yet — candidate seed data for the Common House people list / relationship graph. |
| `Handout_-_*.pdf`, `Playbook_-_Steading_(spreads).pdf` | Player handouts uploaded through the GitHub web UI on 2026-09-09 (which bypasses the `*.pdf` gitignore rule). Not used by the app. Netlify serves everything in the repo, so anything committed here is public. |
| `netlify.toml` | Sets the MIME header for `.js`. Site deploys to Netlify as static files. |
| `Books/` (gitignored, local only) | The rulebooks: `Book_I_-_Stonetop_(single_pages).pdf` (614 pp; PDF page = book page) and `Book_II_-_The_Wider_World_and_Other_Wonders_(single_pages).pdf` (602 pp, has a PDF outline), plus spreads versions and the original zip. Copyrighted — never commit or deploy. Extract text with PyMuPDF (`fitz`) in a scratch venv; `docs/gameplay-assist.md` is the survey of tool-worthy mechanics. |
| `Book_I_-_Stonetop_(spreads).pdf` | Older root-level copy of Book I (gitignored). Source for the `docs/` guides. |
| `moves.js` | Hand-summarised extra rules appended to `window.RULES` (24 entries: follower, expedition and homefront moves from Book I pp.76–85, plus the Die of Fate) and `window.TABLES` (weather by season p.325, night p.335, perilous travel p.323) for the Watchtower's roll buttons. Entries with `live:` show numbers computed from the Village Sheet (`ruleLive`). |
| `townsfolk.js` | `window.TOWNSFOLK` — the DM's 30-NPC register transcribed from `registerpage1/2.png` (name, age, sex, occupation, traits, alive/dead). Imported into the relationship map. Campaign data, not rules. |
| `gear.js` | Hand-transcribed `window.GEAR` — the Inventory insert's common items (p.95/p.142, ~50) and the special items (pp.96–97, ~55) with `load` (0 small / 1 ◆ / 2 ◆◆ / `'other'` not carried), tags, Value, hour/use `pips`, and `ammo` states. Powers Pack & Closet. |
| `playbooks.js` | Generated `window.PBDATA` — complete per-playbook data (moves, possessions, resources, invocations, arcana, follower inserts) for all 9 playbooks, extracted from Book I pp.103–146. Loaded before the inline script; powers the character creator's checklists. Regenerate from `/tmp/pb/*.json` if re-extracting. |
| `map-vicinity.jpg` / `map-world.jpg` | Map art (~3.4 MB JPEGs each) for the Watchtower route-drawing feature. Loaded lazily by `<img>` only when the Chart Your Course tab opens — kept as external files (NOT inlined) to keep `index.html` small. |
| `docs/` | Rules guides distilled from the rulebook (pp. 1–165) to drive the interactive features. See `docs/README.md`. |
| `docs/design-plan.md` | The visual-consistency plan (2026-09-10): design rules, screenshot audit, token/type/spacing/component spec, and a 7-phase execution order. Follow its checklist for any new UI. |
| `docs/gameplay-assist.md` | Survey of the two rulebooks for tool-worthy mechanics, with page refs and a suggested build order. |
| `README.md` | Currently just a title. |
| `CLAUDE.md` | This file. |

There are no external JS dependencies any more — three.js, the vendored `GLTFLoader.js`,
`village.glb` and `dither.png` were removed with the 3D village (still in git history before
2026-09-09). The Firebase SDK is injected at runtime only when sync is configured.

---

## Architecture (index.html)

All JS runs inside a single `DOMContentLoaded` handler, so everything lives in one
closure (no globals leak; functions like `openBuilding` are not reachable from the
console). Rough layout by section:

1. **`BLDGS` data object** (~line 400) — maps each place's **data key** (still the old
   mesh names such as `Mesh_Longhouse`, because they key the stored/synced data) to its
   display info: `title`, `sub`, `icon`, `desc`, the **pin position `x`/`y` as a percentage
   of the map image**, and seed content (`npcs:[{name,role}]`, `notes:""`).
2. **Village map engine** (`//  VILLAGE MAP (2D)` section, right after `BLDGS`) — `#map`
   fills the viewport; `#map-inner` is sized to the image's natural pixels and moved with
   `translate()+scale()`. State lives in `MV` (`w,h,s,fit,min,tx,ty`): `fit` is the cover
   scale (fills the screen), `min` can be lower on portrait screens (zoom out to the full
   map width), max is `fit*MAX_ZOOM`. The initial view centres on `FOCUS` (the village, not
   the fields). `layoutMap()` runs on load/resize; `applyView()` clamps and writes the
   transform plus the `--inv` counter-scale.
3. **Pins** — `buildPins()` creates one `.pin` per `BLDGS` entry at `left/top = x%/y%`
   inside `#map-inner`, counter-scaled with `--inv` so badges stay 32 px on screen at any
   zoom. Hover shows `#hl` (section name + blurb). Click → `openPlace(k)`: Stone →
   `openShrine()`, Smithy → `openSmithy()`, everything else → `openBuilding(k)`.
4. **Input** — pointer events on `#map` (mouse, touch, pen; `touch-action:none`): drag
   pans (a press that moves more than 5 px is a drag, never a click), wheel/trackpad and
   two-finger pinch zoom about the cursor, double-click zooms in. Clicking empty map closes
   the three main modals, as the 3D version did.
5. **Placement mode** — press **P** with no modal open and no input focused: the cursor
   becomes a crosshair and each click prints `x:…, y:…` (percent) into the bottom hint,
   the console, and the clipboard. Use it to position pins, then paste into `BLDGS`.
6. **Loading** — the `#load` screen fades once `map-stonetop.jpg` has loaded. A failed
   load shows an error message on it instead of a blank page.
7. **Modals** — three kinds:
   - **Shrine modal** ("The Stone" / *How to Play*) — rich, hardcoded rules content with
     tabs. Opened by clicking `Mesh_Shrine`.
   - **Smithy modal** ("The Smithy" / *Classes & Characters*) — the playbook browser.
     Opened by clicking `Mesh_Forge`.
   - **Building modal** — the generic, **editable** panel used by every other building.

### Building → content mapping (`BLDGS`)

| Data key | Building | Section | Modal |
|-----------|----------|---------|-------|
| `Mesh_Forge` | The Smithy | Classes & Characters | Smithy (rich, special) |
| `Mesh_Shrine` | The Stone | How to Play | Shrine (rich, special) |
| `Mesh_Longhouse` | The Common House | Townsfolk & Relationships | **Editable** |
| `Mesh_Barrow` | The Granary | The Homefront | **Editable** |
| `Mesh_Market` | The Stables | Travel Info | **Editable** + 🎒 Pack & Closet button |
| `Mesh_Watchtower` | The Watchtower | The Wider World | **Editable** |
| `Mesh_Well` | The Chronicle | Session Recaps | **Editable** (log labeled "The Chronicle") |

The `Mesh_*` names are historical (they were the 3D model's node names) but they are the
**keys of the stored/synced data** (`stonetop_v1` in localStorage, `campaigns/<id>/store` in
Firebase), so keep them even though there is no mesh any more. Where each pin sits on the
drawing: Stone = the standing stone; Common House = the big longhouse north-east of it;
Smithy = the open-sided shed east of the Stone (the book calls this the Pavilion of the
Gods); Chronicle = the well-head south-west of the Stone; Watchtower = the north gate;
Granary = the hut by the western fields; Stables = the walled compound at the south-east.

---

## Feature: in-session content editor (built)

Clicking an editable building opens a panel with an **✎ Edit** toggle (top-left). In
edit mode anyone can:

- **People** — add/remove rows of `name` + `role`.
- **Notes / The Chronicle** — add/remove free-text entries, each auto-stamped with the
  current date (newest first). On the Chronicle these read as session recaps.

Everything **auto-saves on each keystroke/structural change** to the browser's
`localStorage` (a faint "Saved ✓" flashes). View mode renders it cleanly.

### Data model

- `localStorage` key: **`stonetop_v1`** — a JSON object keyed by mesh name.
- Per building: `{ npcs: [{name, role}], log: [{ts, text}] }`.
- `content(k)` returns the stored object if present, else a read-only default derived
  from `BLDGS[k]` (seeds `npcs` and folds `notes` into one log entry). `editable(k)`
  lazily creates the writable copy on first edit. So defaults show until first edit,
  after which the store "owns" that building.

### Key functions (index.html)

`openBuilding(k)` → `renderBuilding()` (builds the panel HTML) → `bindBuilding()` (wires
edit handlers; field edits update the store **without** re-rendering to preserve input
focus; only add/remove and the Edit toggle re-render). `saveStore()` persists +
`flashSaved()`.

### Persistence

By default data lives in the browser's `localStorage`. The **shared-sync layer**
(roadmap item 3, now built) syncs it across devices once `FIREBASE_CONFIG` is set —
see that section and [docs/sync-setup.md](docs/sync-setup.md). Until then, clearing
browser data wipes local edits.

---

## Feature: Seasons Change runner + Surplus ledger (Village Sheet, built 2026-09-10)
The steading doc gains `season` (`spring|summer|autumn|winter`), `year`, and `ledger[]`
(`{ts, season, year, delta, text}`, newest first). The **Season** section (top of the sheet) has
a segmented season control, a year stepper, and **Run Seasons Change → <next season>**, which
opens an inline runner (`SR` state, `renderSeasonRunner`, `srCompute`, `srApply`). Every roll
step has a Roll button *and* a number input, because the table rolls physical dice: spring/autumn
roll +Fortunes (10+ one gain; 7–9 one gain + a threat; 6− threats abound), summer rolls +Fortunes
(10+ two gains; 7–9 one) and 1d4−1 Surplus, autumn adds a 1d4 harvest, winter rolls 1d4+Population
consumption with the shortfall rule (Surplus → 0, Meet with Disaster, a winter consequence pick,
and the "GM picks instead" list when Fortunes would fall below −1), then a second +Fortunes roll
with the 7–9/6− extra consumption. The preview shows every line and the resulting stats before
**Apply & record** writes them: Surplus/Population/debilities updated, Fortunes reset to +1 (or +0
if Malcontent), season advanced, year +1 when winter turns to spring, and a ledger entry with the
net Surplus delta. The Surplus stepper and a manual "Add" row also write ledger entries
(`ledgerAdd`). Verified through a full year in headless Chrome.

## Feature: Expedition kit (Watchtower → Chart Your Course, built 2026-09-10)
- **The plan** (`renderPlan`/`bindPlan`, stored as `store.Mesh_Watchtower.course` =
  `{dest, reqs:[{t,done}], risks:[{t,done}], party, messKit, days}`): destination, tick-box
  Requirements and Challenges lists (Chart a Course, p.302), and a **supply calculator** — uses
  per day = party (or ⌈party/4⌉ with a mess kit, p.304) × days, compared with what everyone's
  Pack & Closet actually carries (`partySupplies()` sums carried supply boxes at 4+Prosperity
  uses each, minus spent pips, plus provisions). `applyRemote` now keeps extra per-building keys
  (`Object.assign`) so `course` survives a sync.
- **Route drawings persist**: each canvas saves a PNG data URL after every stroke and on Clear
  (`routesSave`) into `store.routes = {data: JSON {vic, world}, _t}`, synced whole-doc LWW via
  `pushRoutes` (debounced) and **excluded from `pushRemote()`'s whole-store update** so the big
  strings aren't re-sent on every keystroke. `setupCanvas` redraws the stored image scaled to
  the current canvas (`canvas._loadRoute`); `routesSyncRefresh` redraws on remote change unless
  someone is mid-stroke. Known limit: strokes are relative to the canvas box, so a device with a
  very different panel aspect ratio sees them slightly offset from the map.
- The Watchtower remembers its outer tab (`wtTab`) and map tab (`mtTab`) across re-renders.

## Feature: GM screen, threat tracker, fight tracker, arcana chest (built 2026-09-10)
- **GM screen** is a per-device curtain, not security: `localStorage.stonetop_gm='1'` (toggled
  from the last row of the Places list, `#gm-toggle`; `isGM()/setGM()/applyGM()`), which puts
  class `gm` on `<body>`. Anything with class `gm-only` is hidden unless the body has `gm`
  (`body:not(.gm) .gm-only{display:none!important}`). The brand shows "GM screen on". All GM
  data still syncs to every device — the docs and UI say so.
- **Threat tracker** (Watchtower → Threats tab, `gm-only`; Book I pp.277–298): `store.threats`
  is a per-id collection like characters (`setThreat/delThreat/pushThreat/mergeThreats`).
  A threat = `{id, name, type, tracker (homefront|nearby|distant), instinct, desc, doom,
  portents:[{t,done}], stakes, moves, resolved}`. Cards are grouped by tracker; the open card
  (`thOpen`) is an inline form and shows the type's GM move list from `window.THREAT_TYPES`
  (`gm.js`, which also adds GM moves / principles / threat write-up to the Rules Lookup under
  the "GM" chip).
- **Fight tracker** (the Stone → Fight tab, `gm-only`; pp.406–420): `store.fight` whole-doc LWW
  (`FT`, `renderFight/bindFight`, `pushFight/mergeFight`): foes with HP/armor steppers, damage
  and tags, down at 0 HP, a group-maths line (outnumbering bonus per multiple past 1:1), notes.
- **Arcana chest** (Stables → Arcana chest; Book II App. C/D via `arcana.js` =
  `window.ARCANA {minor:[64], major:[18]}`, generated by the scratch assemble script from
  subagent transcriptions — spot-check a card against the book before trusting a number):
  `store.arcana` per-id collection; an item = `{id, ref:'minor-N'|'major-N'|'', kind, custom?,
  holder, revealed, counter, track[], marks[], reqs[], notes}`. Everyone sees the **front**
  (found-as name, description, tags, the unlock requirements as a checklist, a major's innate
  effect and progress track); the **back** (true name, moves, resource pips, consequences)
  renders only when `revealed` or on a GM device, where it is boxed as "GM only — not yet
  revealed". GM actions (`#arcana-actions`, `gm-only`): add from the book (a select over all 82)
  or a custom item with editable front/back; Reveal/Hide; remove. Holder is a roster character
  or "the party".

## Map pins with notes on the Vicinity / World's End maps (built 2026-09-10)
Watchtower → Chart Your Course: each map's toolbar has a **Pin** tool; with it active, a click or
tap on the map drops a pin (`addWPin`) and opens its card (`openWPin`: name with a datalist of
Book II place names from `window.WORLD_PLACES` in `moves.js`, a notes box, Done, Delete). Pins are
stored as **percentages of the rendered map image** (`imgBox()` computes the object-fit:contain
box), so they stay on the right spot on any screen; `store.wpins = {data: JSON {vic:[…],
world:[…]}, _t}` is whole-doc LWW with a targeted push (`pushWPins`) and `wpinsSyncRefresh`.
Pins sit in `.wt-pins` above the drawing canvas; clicking one opens its card in any tool mode.

## Village map page, ink-and-parchment pass (2026-09-10)
The map screen's chrome is now drawn in the map's own materials rather than the panels' dark UI:
a title **cartouche** (`#brand`, parchment with a double ink border, showing season and year and
a "GM screen on" line when set), parchment-and-ink **pin badges** with plaque labels that invert
on hover, parchment chips for the Places button, hint strip and sync pill, a **vignette frame**
(`#map-frame`) darkening the edges with a hairline inner border, and a **compass rose**
(`#compass`, inline SVG, bottom-left). Modals stay dark; only the map layer uses parchment.

## Map atmosphere (built 2026-09-10)
- **Season tint:** `applySeason()` reads the Village Sheet's `season`/`year`, puts
  `season-<name>` on `<body>` and writes "Spring · year 2" into `#brand-season`. `#map-tint`
  (inside `#map-inner`, so it pans and zooms with the parchment) is a multiply-blended colour
  layer per season; winter also desaturates `#map-img`. Re-applied after `saveSteading()` and
  after every remote merge, so the whole table's screens change colour when the season turns.
- **Settle-in:** `revealMap()` starts with the loading fade (+250 ms after the image loads),
  eases the view from 1.07× the fitted scale down to the fit over 2.6 s, fades pins in with a
  delay, stops the moment the user drags or zooms (`mapTouched`), and is skipped under
  `prefers-reduced-motion`.

## Small features (2026-09-10)
- **Chronicle → "+ End of session"** (edit mode) adds a recap pre-filled with `EOS_TEMPLATE`: the
  four End of Session XP questions (p.573) as `[ ]` boxes, the instinct/relationship prompt, and
  a wishes line.
- **Village Sheet → Content guidelines**: `excluded` / `veiled` textareas (pp.18–19) in the
  steading doc.
- **Relationship map**: selecting a node dims everyone who isn't connected to it (`.dim` on chips,
  lines and labels; cleared by `closePop`); the **Find** box centres the first name match as you
  type (`.hit` flash) and Enter opens them.
- Map pins are `<button>`s (Enter/Space opens the place); favicon + `theme-color`; sync pill says
  "offline · saved here" instead of "sync error".

## Feature: Pack & Closet — per-character inventory (built 2026-09-09)

Opened from the **Stables** panel (🎒 Pack & Closet). Implements the book's Inventory insert
(Book I p.142; rules pp.77–79, 86–90; item lists pp.95–97) without touching the character
sheet, which the group keeps on paper.

- **Login:** type a character's name (roster names autocomplete; exact or unique-prefix match,
  case-insensitive). A character may set an optional **PIN** (stored as a djb2 hash in their
  inventory doc — a curtain, not security). Log out returns to the login screen; closing the
  modal keeps you logged in for the session.
- **Pack tab** = the current expedition: a 10-segment load meter with the book's bands (light
  ≤3, normal 4–6, heavy 7–9, overloaded 10+); three Supplies rows, each a ◆ with **4 +
  Prosperity** use-pips (Prosperity read live from the Village Sheet via `prosperity()`, minus
  1 if the steading is Lacking); Undefined ◆ stepper with a **Have What You Need** picker that
  converts a mark into any unmarked common or closet item (or "Something else…", which creates
  a closet item); Provisions uses; every common load item by category with ◆/◆◆ toggles,
  hour/use pips and ammo state cyclers; the character's closet items with load; **+ Found
  something** (adds loot to the closet and marks it); small items with the 4 + Prosperity
  allowance and their own Undefined; **Back home** clears every mark and keeps the closet.
- **Closet tab** = special possessions and loot: editable rows (name, tags, load select
  including "other thing", Value 0–4, finite uses), **Import from character sheet** (pulls the
  roster character's `possessions[]` names, deduped), and a picker over the special items list.
  "Other things" (load `'other'`) are listed but never markable.
- **Storage / sync:** `store.inventory[<charId>] = { data: <JSON string>, _t }` — string-encoded
  like characters, merged per id last-write-wins (`mergeInventory`), pushed targeted to
  `inventory/<id>` (`pushInv`). `packSyncRefresh()` re-renders on remote change unless an
  input/select in the panel has focus. Key functions: `openPack`, `renderPackLogin`,
  `renderPack` → `renderPackTab` / `renderClosetTab` → `bindPack`, `pkTotal`, `pkBand`.
- Verified end to end in headless Chrome (login, bands at 4/6/8/10, pips, ammo, Have What You
  Need, loot, import, PIN wrong/right, Back home, two characters' packs independent).

## ✅ FIXED BUG: viewing The Stone used to wipe the Smithy (and building) panels

**Symptom (historical):** Open **The Stone** (Shrine), then **The Smithy** — the
Smithy's content appeared blank. No data was ever lost; it was a CSS visibility bug.

**Root cause:** all modals share the class `.spanel` (only `.spanel.active` is
visible), and `openShrine()` + the shrine tab handler reset panels with a
**document-wide** `querySelectorAll('.spanel')`, stripping `active` off the Smithy's
`#sm-playbooks` and the editable `#building-panel`. `openSmithy()` never re-asserted it.

**Fix (applied):** the shrine's `.spanel`/`.stab` queries are now scoped via
`shrineModal.querySelectorAll(...)` (in `openShrine()` and the shrine tab handler);
`openSmithy()` re-asserts `active` on `#sm-playbooks`; `openBuilding()` defensively
re-asserts `active` on `#building-panel`. **Lesson encoded in Conventions below: always
scope `.spanel`/`.stab` toggling to its own modal.**

---

## Rules reference (docs/)

The `docs/` folder holds guides distilled from **Stonetop Book I, pp. 1–165**, to drive
the features below. Start at [docs/README.md](docs/README.md). Files: `rules.md`,
`classes.md`, `class-sheet-setup.md`, `pcs.md`, `npcs.md`.

Cross-cutting facts to build against (verified from the book):
- **Six** stats: **STR, DEX, CON, INT, WIS, CHA** (p. 52) — *not* seven.
- Standard starting array `+2,+1,+1,+0,+0,−1` (Would-be Hero is the exception).
- No fixed "Bonds" list — relationships come from session-1 **Introductions** + temporary
  **Rapport**; model as a `relationships[]` array.
- **Fortunes/Prosperity are steading (village) stats**, not PC stats.
- 9 playbooks, one per character, each with a choice of **three backgrounds**.

## Roadmap (requested features)

### 1. NPC relationship node graph — ✅ BUILT (force layout + register import 2026-09-10)
An interactive graph opened from the **Common House** building panel (🕸 Relationship Map
button). Nodes are **NPCs and player characters** (PC nodes link to the roster via `pcId`, so they
show the live character name). Built with absolutely-positioned node chips over an SVG edge layer
inside `#graph-world`, a wrapper that carries the **pan/zoom transform** (`gView` = `{s,tx,ty}`;
drag the background to pan, wheel to zoom, ⤢ Fit zooms to everyone).
- **Force layout** (`gTick`): every node repels every other (inverse-square, x-stretched ×1.7 so
  wide chips spread sideways, plus a hard push under 95 px), each edge is a spring (rest length
  160), and everything drifts gently to the canvas centre (weaker for unconnected nodes). It
  runs with a cooling `gAlpha` and stops when still, then **saves positions**. It reheats on add /
  delete / connect / import / ⚡ Tidy up, and at low heat while you drag so neighbours make room.
- **Pins:** a node you drag becomes **pinned** (`n.pin`, 📌 on the chip) and the simulation never
  moves it again; the popover's Unpin or ⚡ Tidy up (unpins all) releases it. This is how manual
  arrangement and auto-organising coexist.
- **Townsfolk register import** (⇩ button): `townsfolk.js` holds the DM's 30-NPC register
  (`window.TOWNSFOLK`: name, age, sex, occupation, traits, status). Import adds anyone not already
  on the map by name (case-insensitive), with occupation as the chip subtitle, traits/age/sex in
  the popover, and dead NPCs dashed with a † (`n.dead`, toggled by a "deceased" checkbox).
- Click a node to rename / note / connect / delete. Connect two nodes to draw an edge; the
  new link's card opens at once, and connecting an already-linked pair reopens the existing
  link instead of duplicating it. **Edges carry a short `label` (shown on the line) and a
  longer `note` (the history).** Clicking the label opens an edge card (`openEdgePop`, reusing
  `#g-pop` with class `edge`): label input, history textarea, Done, Delete link. Edges with a
  history get a small dot after the label and a hover tooltip; `gSelEdge` tracks the selected
  edge and the card follows it through pan/zoom/simulation. Escape closes any card. Stored **string-encoded** in `store.graph = {data, _t}`
  (whole-doc last-write-wins), synced via `pushGraph()` / `mergeGraph()`. `graphSyncRefresh`
  ignores the echo of our own write (`gLastSaved`) and defers real remote changes until the map
  is still (`gPendingRemote`), so a settling simulation never fights an incoming snapshot.
- Verified in headless Chrome: 32 nodes settle with zero overlapping chips, fit/zoom/pan, drag →
  pinned → saved, connect flow, tidy clears pins, re-import adds no duplicates.

### 2. Player character creation — ✅ BUILT
A character creator/editor lives in **The Smithy** modal, above the existing playbook
reference browser.
- **Roster** (`#sm-roster-list`) lists all campaign characters (name, playbook,
  background, player, level); click to edit, ✕ to delete. "+ New Character" creates one.
- **Editor** (`#sm-editor` overlay) follows the book's structure: player/name/pronouns,
  playbook (auto-sets damage die, max HP, instinct suggestions, and starting-move/gear
  hints from `PBX`), background (from `SPBS[pb].bgs`), instinct (datalist), appearance,
  origin, the **six stats** as steppers with live array validation (`+2/+1/+1/+0/+0/−1`,
  or the Would-Be Hero's `+1/+0/+0/+0/+0/−1`), debilities (3 → stat-pair disadvantage),
  vitals (HP/maxHP/armor/damage die/level/XP, with the `6+2·level` level-up hint), moves
  list, special-possessions list, bonds, and notes.
- **Data sources:** `docs/pcs.md` (creation flow + mechanics), `docs/class-sheet-setup.md`
  (the `character` JSON model), `docs/classes.md` (per-playbook HP/die/instincts/moves).
- **Storage / sync:** characters live in `store.characters`, a collection keyed by id.
  Each entry is **`{ data: <character JSON string>, _t, deleted }`** — the character is
  **string-encoded** specifically to dodge Firebase's empty-array stripping / array→object
  coercion (verified live: an empty `moves[]` round-trips intact). Merge is **per-id
  last-write-wins with tombstones** (`mergeCharacters`), so multiple players creating
  characters on different devices at the same table never clobber each other. Pushes are
  **targeted** to `characters/<id>` (`pushChar`), not whole-store. Merge logic unit-tested
  (6 cases) + live SDK round-trip against the real DB.
- **Deepened sheet (v2):** moves and special possessions are now **rulebook-accurate
  checklists** driven by `playbooks.js` (`window.PBDATA`): starting moves pre-checked and
  tagged, level-6 moves badged, each with a one-line gist; "Pick N" possession lists with a
  live picked-count; plus per-playbook **Resources & Tracks** (Stock, Resolve, Diligence,
  Potential for Greatness, etc.), **Invocations** (Lightbearer), **Arcana** (Seeker), and a
  generic **Followers & Companions** sub-form (covers Crew / Animal Companion / Initiates /
  dogs, with the relevant insert's note shown as a hint). Free-text "custom/homebrew" rows
  remain for anything off-list. Stat & resource steppers update in place (no scroll jump).
- **Editor data model additions:** `moves[]`/`possessions[]`/`invocations[]`/`arcana[]` are
  arrays of selected names; `resources` is `{key:count}`; `followers[]` are
  `{name,hp,armor,damage,loyalty,notes}`. Changing playbook re-seeds starting moves + vitals
  via `seedPlaybook()`. Backward compatible with v1 free-text characters. Model unit-tested
  against the real PBDATA (seed, toggle, Hero array, no dangling starting moves).
- **State inserts (done):** a "Death's Door / State" section lets a PC become **Ghost /
  Revenant / Thrall** (`window.STATES` in `playbooks.js`, from Book I pp.148–153) — each
  with its instinct, Terrible Purpose/Impulse choices, moves, and Consequences/Marks track
  as checklists. Stored in `stateInsert` + `stateData`.
- **Still not modeled:** full per-arcanum/invocation rules *text* (names + gists only).

### 4. The Steading (village) sheet — ✅ BUILT
A shared, editable **Village Sheet** opened from the **Granary** ("Homefront") panel
(🏘 Village Sheet button). Driven by `window.STEADING` in `playbooks.js` (Stonetop steading
playbook, Book I pp.154–161): editable name/size/population; the five steading **stats** as
steppers (Surplus, Fortunes, Population, Prosperity, Defenses) seeded to their book starting
values; Grievances/Debilities; Defenses; an editable **Places of Interest** list (seeded with
Stonetop's); the full **Steading Improvements** checklist (17, with gist + cost); a **Treasury**
(silver/gold); an **Assets** reference + notes. Stored string-encoded in `store.steading` and
synced (whole-doc last-write-wins via `pushSteading`/`mergeSteading`; refresh skips while a field
is focused). Model + sync unit-tested; live Firebase round-trip verified on the `steading` path.

### 5. In-app rules lookup (the Stone) — ✅ BUILT (expanded 2026-09-10 to 47 entries; Recover/Outfit/Trade/Requisition/Seasons show live Village Sheet numbers; the dice roller has a Die of Fate button)
The Stone (Shrine) modal now opens on a searchable **Lookup** tab (the hand-written The
Game / Moves / Combat tabs remain). Driven by `window.RULES` in `playbooks.js` (23 entries
from Book I: 10 basic moves with trigger + 10+/7–9/6– results, 4 special moves, the 6 stats,
3 core mechanics). Live text search across title/trigger/text/results + category chips
(`renderRules`/`buildRuleUI`). Read-only reference, no sync needed.

### 6. Watchtower route maps — ✅ BUILT (ported from collaborator; 2026-09-10: the Leaving Stonetop tab ends with "Roll at the table" — weather by season, the night, perilous travel, Die of Fate — from `window.TABLES`, bound by `bindTables()`)
Clicking the **Watchtower** opens two tabs: **Leaving Stonetop** (expedition-prep rules
text, `wtLeaving`) and **Chart Your Course** (`wtChart`) — a Vicinity / Wider World map
view where players draw routes. Each map is an `<img>` (`map-vicinity.jpg` / `map-world.jpg`)
with a `<canvas>` overlay and Pen / Eraser / color / Clear tools (`wtMapPanel`,
`bindWhiteboards`, `setupCanvas`; mouse + touch, so it works on phones). Per-canvas tool/color
state in `wtState`. Wired via a `Mesh_Watchtower` branch in `renderBuilding`.
- **Origin/caveats:** this came from a non-coding collaborator's export (sent via Drive). His
  file was a 9 MB single doc with the maps inlined as base64 and one corrupted CSS line
  (`#load`). Per the user, only the route tool was ported (cleanly) onto `main`; the maps were
  extracted to external `.jpg` files. His other extras (3D hover labels + embedded font,
  3-tone dither shader, a "Wishing Well" dice building, a Stables expeditions tab) were **not**
  ported. **Drawings are NOT synced or persisted** — they're per-session, per-browser canvas
  strokes (clearing the tab or reloading loses them). Persisting/syncing routes would be a
  follow-up (e.g. store canvas `toDataURL` in `store`). The higher-res `Map 2 - The Vicinity`
  / `Map 3 - The World_s End` print masters pushed on 2026-09-09 differ from the current
  `map-vicinity.jpg` / `map-world.jpg` and can replace them (convert CMYK→sRGB first, see
  Gotchas). Longer term the three maps could nest: village → vicinity → wider world.

### 3. Shared sync across all computers — ✅ LIVE
Implemented as a **Firebase Realtime Database** layer in `index.html`, and **the real
database is configured and verified**:
`FIREBASE_CONFIG = { databaseURL: "https://stone-7ed10-default-rtdb.firebaseio.com" }`.
For RTDB with open rules, `databaseURL` alone is a sufficient config (no apiKey needed
— that's only for Auth). Connectivity was verified end-to-end: REST read/write/delete,
plus an SDK round-trip (v10.12.2, same databaseURL-only config the page uses) against
`campaigns/stonetop/store`; test records were cleaned up afterward. Setting
`FIREBASE_CONFIG = null` reverts to localStorage-only (grey "this device only" dot).
Setup walkthrough for reference: **[docs/sync-setup.md](docs/sync-setup.md)**.

How it works:
- SDK (compat/CDN builds, v10.12.2) is injected at runtime **only if** config is set —
  no build step, zero cost when dormant.
- Data path: `campaigns/<CAMPAIGN_ID>/store` (CAMPAIGN_ID default `'stonetop'`).
- `saveStore()` stamps the edited building with a `_t` timestamp, saves to
  localStorage, and `pushRemote()`s the whole store via `ref.update()` (per-key merge).
- `applyRemote()` merges incoming snapshots with **per-building last-write-wins**
  (`_t` comparison), restores empty arrays Firebase strips (`npcs`/`log` → `[]`),
  caches to localStorage, and live-refreshes an open panel **unless in edit mode**
  (to preserve input focus).
- First snapshot merges remote→local, then pushes local (so a device's offline edits
  survive). Sync status dot states: grey local / amber connecting / green synced /
  red error.
- localStorage remains the offline cache; red dot = edits still save locally.
- Security model: open read/write rules under `campaigns/*` — URL-as-shared-secret,
  fine for a home game, documented honestly in sync-setup.md. Upgrade path: Firebase
  anonymous auth.
- Merge logic is unit-tested (5 cases: empty store, older-remote loses, newer-remote
  wins, stripped-array restore, missing-key keeps local).
- **Future features (graph, characters) should store their data in this same `store`
  object** so they get sync for free — extend per-building or add new top-level keys,
  and keep stamping `_t`.

---

## Conventions & gotchas

- **Single file.** App logic is inline in `index.html`. Match the existing terse,
  `var`-based, semicolon-dense style when editing JS there.
- **Design system (2026-09-10, see `docs/design-plan.md`).** All colours, spacing and sizes are
  CSS custom properties in the `:root` block at the top of the stylesheet — never write a raw
  hex or pixel value in a rule. Surfaces `--ink-0/1/2`, hairlines `--line-0/1`, text
  `--text-0…4` (`--text-3` is the darkest colour allowed for text that carries information;
  `--text-4` is decoration only), `--accent` for fills/borders and `--accent-text` for gold text,
  `--danger`, spacing `--s1…--s7` (4 px grid), `--ctl` control height, `--dur`/`--ease` motion.
  Shared components: `.modal / .modal-backdrop / .modal-box / .modal-close / .modal-head /
  .modal-title / .modal-sub / .modal-actions / .modal-hint / .modal-tabs / .modal-body[.panes]`
  (every panel uses the same frame), buttons `.btn` (+ `.btn-primary`, `.btn-danger`,
  `.btn-icon`, dashed add buttons), `.tabs .tab` (row under a header), `.seg .seg-btn`
  (in-content switch), `.chip`, inputs `.input`, `.sec` section headers, `.row`, `.empty`,
  `.hint`, `.label`. Older per-feature class names (`.cc-btn`, `.pk-btn`, `.stab`, `.sstab`,
  `.pk-tab`, `.cc-in`, `.pk-in`, `.badd`…) are grouped onto those shared rules as aliases — reuse
  the shared class on anything new. Font: Georgia only. Five type roles: display 18/3px caps,
  heading 15, body 14/1.6, meta 12, label 11/2px caps.
- **Icons are an inline SVG sprite** (`<symbol id="i-…">` at the top of `<body>`; ~25 single-stroke
  24×24 glyphs). Use `ico('name')` in JS or `<svg class="ic"><use href="#i-name"/></svg>` in
  markup. **No emoji anywhere** — `BLDGS[k].icon` is a sprite id (`stone`, `longhouse`, `forge`,
  `granary`, `stables`, `tower`, `scroll`).
- **Map overlays:** `#brand` (top-left), `#places` (top-right button + list built from `BLDGS` by
  `buildPlaces()`, the keyboard/phone way to open a place), `#inst` hint strip, `#sync-dot` pill.
  Pin labels hide when zoomed out below 70 % of the fitted scale (`#map.far`).
- **Building panel header:** one row — icon + title + subtitle on the left, `#building-actions`
  (Edit toggle, feature buttons, "Saved ✓") on the right; `renderBuilding()` writes the actions
  into the header, not the panel body.
- **`.spanel` visibility is class-driven and the class name is shared across all three
  modals.** Any code that toggles `.spanel`/`.stab`/`.sstab` must be **scoped to its own
  modal** — the global-query pattern is exactly what causes the Stone→Smithy bug above.
- **Map image colour.** The print masters are **CMYK JPEGs with an embedded ICC profile**.
  A naive CMYK→RGB conversion (Pillow `.convert('RGB')`) comes out yellow-green; convert
  through the profile (Pillow `ImageCms.profileToProfile(..., createProfile('sRGB'))`, or
  macOS `sips`) before downscaling. Target ~2600 px wide, JPEG q≈72, under 1 MB.
- **Pin coordinates are percentages of the image**, so they survive re-encoding at any
  resolution as long as the image isn't cropped. Read them with placement mode (P).
- **Pointer capture.** While a pointer is pressed on `#map`, events retarget to `#map`, so
  pins are hit-tested (`pinAt`) only on the initial `pointerdown` and on plain hover.
- **The P hotkey** is ignored while any `[id$="-modal"].open` exists or an input is focused —
  keep new modal ids ending in `-modal` so that guard keeps working.
- **Deploy:** static files to Netlify. Changes are local until deployed.

## Deployment setup (one shared screen, today)

Decided with the user: during sessions everyone looks at **one shared screen** (DM's
laptop), and **anyone can edit anything** (trusted home group, no per-edit permissions).
That's why `localStorage` is acceptable *today* — roadmap item 3 generalizes it to
multiple devices.
