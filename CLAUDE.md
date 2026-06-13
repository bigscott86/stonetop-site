# Stonetop Site — Project Guide

An interactive, player-facing website for a home **Stonetop** tabletop-RPG campaign.
The concept: a stylized 3D village where **each building is a clickable "room"** of the
campaign (characters, rules, townsfolk, recaps, the wider world). The village map *is*
the menu. Built for a small home group; one player is the DM, the others are players.

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

Do **not** open `index.html` directly via `file://` — browsers can block the `.glb`
model load under the file protocol. Always serve over HTTP.

Quick JS syntax check of the inline script:
```bash
awk '/^<script>$/{f=1;next} /^<\/script>$/{f=0} f' index.html > /tmp/check.js && node --check /tmp/check.js
```

---

## Files

| File | What it is |
|------|------------|
| `index.html` | **Everything** — HTML, CSS, and ~500 lines of inline JS in one file. This is the whole app. |
| `GLTFLoader.js` | Stock three.js GLTFLoader, legacy global/UMD build. Vendored dependency — do not edit. Pinned to the three.js **r128** era. |
| `village.glb` | The 3D village model (~12 MB), exported from Blender. Plain glTF 2.0, **no** Draco/meshopt compression. |
| `dither.png` | Texture used by the retro dithering shader. |
| `netlify.toml` | Sets correct MIME headers for `.glb` and `.js`. Site deploys to Netlify as static files. |
| `Book_I_-_Stonetop_(spreads).pdf` | The Stonetop Book I rulebook (~36 MB, spreads layout: each PDF page = 2 book pages). Source for the `docs/` guides. |
| `playbooks.js` | Generated `window.PBDATA` — complete per-playbook data (moves, possessions, resources, invocations, arcana, follower inserts) for all 9 playbooks, extracted from Book I pp.103–146. Loaded before the inline script; powers the character creator's checklists. Regenerate from `/tmp/pb/*.json` if re-extracting. |
| `docs/` | Rules guides distilled from the rulebook (pp. 1–165) to drive the interactive features. See `docs/README.md`. |
| `README.md` | Currently just a title. |
| `CLAUDE.md` | This file. |

three.js **r128** is loaded from a CDN in `index.html`; `GLTFLoader.js` attaches
`THREE.GLTFLoader` to it. The pairing is correct — don't bump one without the other.

---

## Architecture (index.html)

All JS runs inside a single `DOMContentLoaded` handler, so everything lives in one
closure (no globals leak; functions like `openBuilding` are not reachable from the
console). Rough layout by section:

1. **`BLDGS` data object** (~line 376) — maps each building's mesh name to its display
   info: `title`, `sub`, `icon`, and seed content (`npcs:[{name,role}]`, `notes:""`).
2. **Scene / camera / renderer** — three.js scene, `PerspectiveCamera`, WebGL renderer.
3. **Dither post-process** (~line 431) — renders the scene to a render target, then a
   fullscreen `ShaderMaterial` quantizes it to a two-tone dithered look (the signature
   visual style). Driven by `dMat.uniforms`.
4. **`buildPlaceholder()`** (~line 471) — builds a village out of plain boxes. **Note:**
   currently only `autoLoadGLB()` is called on startup; the placeholder is a dev
   fallback that is *not* wired to the GLB error path. If the GLB ever fails to load,
   nothing clickable appears (see "Gotchas").
5. **Controls** — orbit-style camera. Arrow keys / WASD rotate & zoom; mouse position
   adds a subtle tilt/pan. State lives in the `ctrl` object.
6. **Raycasting** (~line 572) — `named(obj)` walks an object's parent chain looking for a
   name present in `BLDGS`. Hover shows a label; click opens the matching modal.
7. **Modals** — three kinds:
   - **Shrine modal** ("The Stone" / *How to Play*) — rich, hardcoded rules content with
     tabs. Opened by clicking `Mesh_Shrine`.
   - **Smithy modal** ("The Smithy" / *Classes & Characters*) — the playbook browser.
     Opened by clicking `Mesh_Forge`.
   - **Building modal** — the generic, **editable** panel used by every other building.
8. **Render loop** (`animate`) — renders scene → render target → dither pass to screen.

### Building → content mapping (`BLDGS`)

| Mesh name | Building | Section | Modal |
|-----------|----------|---------|-------|
| `Mesh_Forge` | The Smithy | Classes & Characters | Smithy (rich, special) |
| `Mesh_Shrine` | The Stone | How to Play | Shrine (rich, special) |
| `Mesh_Longhouse` | The Common House | Townsfolk & Relationships | **Editable** |
| `Mesh_Barrow` | The Granary | The Homefront | **Editable** |
| `Mesh_Market` | The Stables | Travel Info | **Editable** |
| `Mesh_Watchtower` | The Watchtower | The Wider World | **Editable** |
| `Mesh_Well` | The Chronicle | Session Recaps | **Editable** (log labeled "The Chronicle") |

The GLB does contain nodes named `Mesh_Forge`, `Mesh_Shrine`, `Mesh_Barrow`,
`Mesh_Market`, `Mesh_Watchtower`, `Mesh_Well`, `Mesh_Longhouse` — these are parent
nodes; the actual geometry meshes are children, which is why `named()` walks up the
parent chain to find the clickable building.

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

### 1. NPC relationship node graph — ✅ BUILT
An interactive graph opened from the **Common House** building panel (🕸 Relationship Map
button). Nodes are **NPCs and player characters** (PC nodes link to the roster via `pcId`,
so they show the live character name); drag to arrange, click a node to rename/note/connect/
delete, and connect two nodes to draw a **labeled relationship edge** (edge label click →
edit/DELETE). Built with absolutely-positioned node chips over an SVG edge layer (pointer-event
drag). Stored **string-encoded** in `store.graph = {data, _t}` (whole-doc last-write-wins —
sidesteps Firebase array issues), synced via targeted `pushGraph()` / `mergeGraph()`, and
live-refreshes from remote unless you're mid-drag (`graphSyncRefresh`). Model + sync unit-tested;
live Firebase round-trip verified on the `graph` path. Opening from the Common House keeps that
building's People/Notes editor intact.

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
- **Palette:** bg `rgba(8,6,4,.92)`; borders `#3a2e1e` / `#2a2018`; body text `#a89070`;
  headings `#d4b896`; accent `#8b6940`; muted `#5a4e3e`. Font: Georgia serif.
- **`.spanel` visibility is class-driven and the class name is shared across all three
  modals.** Any code that toggles `.spanel`/`.stab`/`.sstab` must be **scoped to its own
  modal** — the global-query pattern is exactly what causes the Stone→Smithy bug above.
- **three.js is pinned to r128.** The vendored `GLTFLoader.js` matches that era. Don't
  upgrade one in isolation. A future modernization could move to ES-module three.js +
  importmap, but that's out of scope for now.
- **GLB load has no visible fallback.** `autoLoadGLB()`'s error path only
  `console.warn`s; `buildPlaceholder()` exists but isn't wired to it. If the model fails,
  the village is empty and nothing is clickable.
- **Deploy:** static files to Netlify. Changes are local until deployed.

## Deployment setup (one shared screen, today)

Decided with the user: during sessions everyone looks at **one shared screen** (DM's
laptop), and **anyone can edit anything** (trusted home group, no per-edit permissions).
That's why `localStorage` is acceptable *today* — roadmap item 3 generalizes it to
multiple devices.
