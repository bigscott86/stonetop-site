# Design plan — making the site look better and cleaner

Written 2026-09-10 from a screenshot audit of every panel (map, Stone, Smithy, Common House,
Village Sheet, Watchtower, Chronicle, Relationship Map, Pack & Closet) at 1500×1000 and phone
size. The goal is not a new look. The parchment-and-ink identity already works. The goal is to
make everything obey the same rules so it reads as one product.

---

## 1. The rules we will follow

These are the design principles the plan is built on. Each later section applies them.

1. **One component per job.** A button is a button everywhere. Tabs are tabs everywhere. No
   panel invents its own control.
2. **Hierarchy through a type scale, not through decoration.** Five sizes, three weights of
   emphasis (colour, tracking, size). Nothing else.
3. **A 4 px spacing grid.** Every padding, gap, and margin is 4, 8, 12, 16, 24, 32, or 48 px.
4. **Contrast you can read at the table.** Body and hint text at 4.5:1 or better against its
   background. Decorative text may go lower, but never text that carries information.
5. **Alignment to a shared frame.** All modals are the same size and sit in the same place, so
   the eye never re-learns the layout.
6. **One accent colour, used for one meaning.** The gold (#8b6940 / #d4b896) means "active or
   primary". Red-brown means "destructive". Nothing else gets colour.
7. **Ink, not emoji.** Icons are single-colour line drawings in the same palette as the map.
8. **Proximity.** Controls sit next to the thing they act on. Section titles sit closer to their
   content than to the section above.
9. **Every view has an empty state** that says what the view is for and what to do first.
10. **Feedback for every action**: hover, focus ring, pressed, and the existing "Saved ✓".
11. **Restraint in motion.** One duration (240 ms) and one easing for everything that moves;
    respect `prefers-reduced-motion`.
12. **Touch first at the table.** Anything tappable is at least 40×40 px on phones.

---

## 2. Audit findings (what breaks the rules today)

| # | Finding | Where | Rule |
|---|---------|-------|------|
| 1 | Modals use four different sizes (80/80, 80/84, 84/86, 88/86 percent) and three header layouts: single-line title (Stone, Smithy, Village), big emoji above a two-line title with lots of dead space (building panels), title plus a tool row (graph). | all modals | 5 |
| 2 | Colour emoji (🏠 🗼 📜 🎒 🕸 🏘 ⚒ 🌾 🐴) in map pins, titles, and buttons clash with the ink aesthetic; the Smithy's playbook grid already uses clean line icons, which is the right pattern. | map, building headers, tool buttons | 7 |
| 3 | Panels are 92–96 % opaque over a light parchment, so map lines show through behind text as visual noise. | every modal | 2, 4 |
| 4 | At least five button styles: filled gold (`.sm-btn-go`), outlined (`.cc-btn`), pack (`.pk-btn`), whiteboard tools (`.wt-tool`), dotted "+ Add" buttons, plus the edit toggle. | everywhere | 1 |
| 5 | Three tab styles: Stone tabs (`.stab`), Watchtower's two nested tab rows, Pack tabs (`.pk-tab`); the graph uses buttons where tabs would be expected. | Stone, Watchtower, Pack | 1 |
| 6 | Muted text (#5a4e3e on near-black) is about 3:1 and is used for hints, meta lines, and helper copy that people actually need to read. | all panels | 4 |
| 7 | Type sizes are ad hoc: 9, 10, 11, 12, 12.5, 13, 13.5, 14, 15, 16, 18, 20 px with tracking from 0.5 to 8 px. | all panels | 2 |
| 8 | Paddings vary per panel (18/24, 20/28, 28/32) and section gaps are inconsistent. | all panels | 3 |
| 9 | Empty Chronicle and empty People sections show only two dotted buttons; a new player does not learn what the panel is for. | Chronicle, Common House, Stables | 9 |
| 10 | Building headers spend ~120 px of height on an icon and two lines before content starts; on a phone that is a third of the screen. | building panels | 8, 12 |
| 11 | Buttons have hover states but no visible keyboard focus. | everywhere | 10 |
| 12 | The sync status text sits directly on the parchment at 9 px and is hard to read. | map corner | 4 |
| 13 | The map has no brand mark or place list; the only navigation is the pins, which is a problem for small phones and for screen readers. | map | 12 |
| 14 | Rules Lookup category chips are 9 px; Village Sheet stat labels are 10 px with wide tracking. | Stone, Village | 2, 12 |

What already works and should be kept: the palette, Georgia, letter-spaced small-caps labels
with a hairline rule, the map showing through around (not behind) panels, the pin badges with
haloed labels, the stepper controls, the "Saved ✓" flash, and the Smithy's line-icon grid.

---

## 3. The design system (the spec everything migrates to)

### 3.1 Colour tokens
Defined once as CSS custom properties on `:root`. Names, not hex values, are used in rules.

| Token | Value | Use |
|-------|-------|-----|
| `--ink-0` | `#0d0a06` | panel background (opaque) |
| `--ink-1` | `#15110a` | cards, inputs, chips |
| `--ink-2` | `#1f1810` | hover surfaces |
| `--line-0` | `#2a2018` | hairlines, dividers |
| `--line-1` | `#3a2e1e` | control borders |
| `--text-0` | `#e8d6a8` | display titles |
| `--text-1` | `#d4b896` | headings, active labels |
| `--text-2` | `#a89070` | body |
| `--text-3` | `#907e66` | hints and meta (**raised from #5a4e3e; 5.0:1 on `--ink-0`**) |
| `--text-4` | `#5a4e3e` | decoration only: rules, inactive glyphs |
| `--accent` | `#8b6940` | primary buttons, active tab underline |
| `--accent-text` | `#a8875e` | gold *text* (section labels, links); 5.9:1 on `--ink-0` |
| `--accent-hi` | `#d4b896` | accent hover, focus ring |
| `--danger` | `#a8654e` | delete, destructive hover |
| `--parchment` | `#f3e6c4` | label halos on the map |
| `--dim` | `rgba(0,0,0,.55)` | modal backdrop |

### 3.2 Type scale
Georgia for everything (it is the identity). Five sizes only.

| Role | Size / line | Tracking | Case | Colour |
|------|-------------|----------|------|--------|
| Display (modal title) | 18 / 1.2 | 3 px | caps | `--text-1` |
| Heading (section) | 15 / 1.3 | 0 | title | `--text-1` |
| Body | 14 / 1.6 | 0 | — | `--text-2` |
| Meta (hints, sub-lines, chip text) | 12 / 1.5 | 0.5 px | — | `--text-3` |
| Label (small caps) | 11 / 1 | 2 px | caps | `--text-3`, active `--text-1` |

Prose blocks (the Stone's guide tabs) get `max-width: 72ch`.

### 3.3 Spacing and shape
- Scale: `--s1: 4px; --s2: 8px; --s3: 12px; --s4: 16px; --s5: 24px; --s6: 32px; --s7: 48px`.
- Modal padding `--s5` `--s6`; section gap `--s5`; row gap `--s2`; control padding `--s2 --s3`.
- Radius: 2 px on everything (ink drawings are not rounded).
- Shadow: one, `0 12px 40px rgba(0,0,0,.5)`, on the modal box only.

### 3.4 Components

- **Modal shell** — `.modal` (fixed, centred), `.modal-box` (width `min(1280px, 88vw)`, height
  `min(860px, 88vh)`, phone: 96/94), opaque `--ink-0`, one shadow; backdrop `--dim` with
  `backdrop-filter: blur(3px)` so the map recedes instead of showing through the text.
  `.modal-head`: one row, 56 px tall: [icon 20 px] [Display title] [subtitle as Label]
  [actions on the right] [close]. Optional second row for tabs. `.modal-body`: scrollable, padded.
- **Buttons** — four variants sharing one base (Label type, 36 px tall, 40 px on touch):
  `.btn-primary` (filled `--accent`, ink text), `.btn` (outlined `--line-1`, text `--text-2`),
  `.btn-ghost` (no border, for toolbars), `.btn-danger` (outlined, `--danger` on hover).
  All get `:focus-visible { outline: 2px solid var(--accent-hi); outline-offset: 2px }`.
- **Tabs** — `.tabs` (row under the header, Label type, active = `--text-1` with a 2 px
  `--accent` underline) and `.seg` (segmented control for in-content switches like Vicinity /
  Wider World and Pack / Closet).
- **Chips** — `.chip` for filters (Rules Lookup categories) at Meta size, 28 px tall.
- **Inputs** — `.field` (label above, input below), `.input`, `.select`, `.textarea`: `--ink-1`
  background, `--line-1` border, `--accent` on focus. Steppers keep the current design, sized to
  the grid.
- **Lists** — `.row` (hairline-separated, 40 px min height) used by People, Notes, Places,
  Closet, Pack items. `.card` for roster and rules cards.
- **Section header** — `.sec` (Label + hairline), margin `--s5 0 --s3`.
- **Empty state** — `.empty`: one line of Body copy plus the primary action, centred.
- **Status pill** — sync state with a dot, `--ink-1` background, Label type.
- **Icons** — an inline SVG sprite of about 16 single-stroke symbols (stone, longhouse, forge,
  granary, stables, tower, scroll, pack, key, web, village, pin, edit, close, plus, dice) in
  `currentColor`, used at 16/20/24 px. Replaces every emoji.

---

## 4. The plan, in order

> **Status 2026-09-10:** phases 1–6 built in one pass (tokens, shell, controls, sprite icons,
> map overlays, empty states, type pass, Watchtower segmented control); phase 7 responsive rules
> are in and the headless screenshot/contrast checks pass. Remaining: a phone pass on each panel
> with real thumbs at the table, and the "done when" checks below re-run after future features.

Each phase is one commit and leaves the site working. Later phases depend on earlier ones.

### Phase 1 — Tokens and global rules (half a session)
- Add the `:root` token block, the type-scale classes, focus rings, reduced-motion rule.
- Replace hex values in existing CSS with tokens (mechanical find-and-replace; no layout change).
- Raise muted text to `--text-3` wherever it carries information.
- **Done when:** no hex colour appears outside the token block; a keyboard tab shows a ring.

### Phase 2 — One modal shell (one session)
- Introduce `.modal*` classes and migrate the six modals to them (Stone, Smithy, building,
  Graph, Village, Pack). Same size and position everywhere; opaque panel; blurred backdrop.
- Rebuild the building header as a single row (icon, title, subtitle, Edit toggle, tool
  buttons); this also fixes the phone height problem.
- **Done when:** opening any two panels in turn shows the same frame; nothing shows through.

### Phase 3 — Controls (one session)
- Add the shared button, tab, segmented, chip, input, row, section, and empty-state classes.
- Migrate panels one by one, keeping old class names as aliases in CSS so JS need not change
  in the same commit: Stone, Smithy, building panels, Watchtower tools, Village, Graph tools,
  Pack. Remove the aliases at the end.
- Write the empty-state copy for Chronicle, People, Notes, Stables, Graph, Closet, roster.
- **Done when:** the CSS has one definition per control and every panel uses it.

### Phase 4 — Icons (half a session)
- Draw the SVG sprite in the map's line weight; wire map pins, modal headers, and buttons to it.
- Remove all emoji from markup and data (`BLDGS.icon` becomes an icon id).
- **Done when:** a search for emoji code points in `index.html` finds nothing.

### Phase 5 — Map screen (half a session)
- Brand mark top-left ("Stonetop", campaign name as Label). Sync status becomes a pill.
- A small **Places** button that opens a list of the seven pins (keyboard and phone
  navigation; also a legend). Hint bar restyled as Meta on a translucent ink strip.
- Pin badges use the sprite; labels keep the halo.
- **Done when:** every place is reachable by keyboard and from the list on a 390 px phone.

### Phase 6 — Content polish (one session)
- Type pass: apply the scale to the Stone's prose, rules cards, roster cards, Village Sheet.
- Density: consistent row heights and card padding; prose measure; chip sizes.
- Watchtower: merge the nested tab rows into tabs + segmented control.
- **Done when:** the audit table in section 2 has no open items.

### Phase 7 — Responsive and QA (half a session)
- Phone layouts for each modal (single column, full-width controls, 40 px targets).
- Run the headless screenshot harness at 1500×1000 and 390×844 for every panel; check
  contrast with a script; fix regressions.
- Update CLAUDE.md conventions with the token and component names.

Total: about five sessions. Phases 1–3 carry most of the visible improvement.

---

## 5. Decisions for the group

1. **Opaque panels with a blurred backdrop** versus the current see-through panels. The plan
   assumes opaque; it is the single biggest legibility win.
2. **Line icons instead of emoji.** The plan assumes yes. If the emoji are liked, they should at
   least be rendered in one style (a monochrome emoji font), but that is a weaker fix.
3. **A Places list on the map.** Adds a second way to navigate. Recommended for phones.
4. **Keep Georgia everywhere** versus adding a second face for UI labels. The plan keeps Georgia;
   one family is part of the identity and avoids a web-font download.

## 6. Checklist for any new feature after this
- Uses `.modal*`, `.btn*`, `.tabs`/`.seg`, `.field`, `.row`, `.sec`, `.empty`, sprite icons.
- Only token colours; only the five type roles; only grid spacing.
- Has an empty state and a phone layout; every action gives feedback.
