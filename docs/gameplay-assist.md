# Gameplay assistance survey — what the books support

Written 2026-09-09 after reading **Book I: Stonetop** (614 pp.) and **Book II: The Wider World and
Other Wonders** (602 pp.) end to end for mechanics a table tool can help with. Page numbers are
Book I book pages unless marked "Book II PDF p.N".

**Scope decided by the group:** no more character-sheet work (paper sheets + physical dice stay).
Focus on **inventory and stores** first, then any other mechanic that is tracked over time, looked
up mid-play, rolled on a table, or computed.

**Constraint that shapes everything:** the site is one shared screen (DM's laptop) synced to
every device, with no private views. Anything the book treats as a GM secret (threats, danger HP,
unrevealed arcana, love letters, place secrets) needs a "GM screen" mode before it goes in the
app. See section G.

---

## A. Inventory and stores (the priority)

### A1. Pack & Closet — the Inventory insert, digitised — ✅ BUILT 2026-09-09 (Stables panel; see CLAUDE.md)
The book tracks only two things per PC: **current inventory** (what's on your person) and
**special possessions** (pp.86, 90). Everything else is "a whole house full of belongings" you
don't track. So the tool is two layers:

- **The Closet** (persistent): special possessions from the playbook, things gained in play,
  arcana, and "Other things" you own but don't carry (a herd of goats, an anvil) (p.90). Items
  with `uses` are finite (Vahid's books & scrolls, 5 uses, p.90).
- **The Pack** (per expedition): when you **Outfit** (p.77, 306) you mark load boxes on items or
  on "Undefined". Load bands: **up to 3 = light** (quick & quiet), **4–6 = normal**, **7–9 =
  heavy** (noisy, slow, hot, quick to tire), **10+ or anything very heavy = overloaded** (GM sets
  consequences) (p.87). **Small items** don't count toward load; mark **4 + Prosperity** of them
  (p.88). **Supplies**: each box holds **4 + Prosperity uses**; spend for Recover, Make Camp,
  extra small items, or 1 use per person per day to eat (a **mess kit** feeds up to 4 per use)
  (p.89, 304). **Provisions** from Forage substitute 1-for-1 but spoil (p.89). **Have What You
  Need** converts an Undefined mark into a specific item you "could have had all along" (p.78,
  88, 326). Loot picked up in the field adds marks and can change your load band on the spot
  (p.87, 326–327). **Back home**: clear the marks, keep the possessions (p.89).
- **Catalogue**: ~40 common items (p.95) and ~35 special items (pp.96–97) with tags, load, Value,
  and ammo states (`plenty left → low ammo → all out`). Tag glossary on p.94.

Live numbers (Prosperity) should come from the Village Sheet so supply uses and small-item counts
update themselves. Shared, synced, per PC. This is the tool the user's "inventory and closet"
request maps to.

### A2. Party loot ledger
What was found, who is carrying it, its Value (0–4), and whether it's identified. Artifacts run
Value 1 (mundane special item) to 2–4 (magical/rare); an ignorant seller values them 0–1
(pp.428–437). Tags: beautiful, fireproof, implanted, indestructible, loud, magical, terrifying
(p.437). Transfers between PCs change both packs' load bands (p.87). Extends the Village Sheet's
Treasury.

### A3. Village stores — Surplus ledger
Surplus starts at 1, no cap, 1 Surplus = Value 2 (p.509, 542). It moves by rule every season
(summer +1d4−1, autumn +1d4, winter −(1d4+Population)) and by trade, hunting, and seasonal gains
(pp.516–523). Today it's a bare stepper; a dated ledger with a source label makes the running total
auditable and lets the Seasons Change runner (B1) write entries.

### A4. Arcana & treasures chest (progressive reveal)
Book II has **64 minor arcana** (App. C, PDF pp.508–539) and **18 major arcana** (App. D,
pp.540–575). Each minor arcanum is a two-sided card: the **front** is the found object, its tags,
and the **unlock requirements**; the **back** is the name, a move with 10+/7–9/6− results, and
usually a tracked resource (Heat, Strain, Charges, Ire, …) drawn as pips. Major arcana are inserts
with a 3–5 box progress track, moves that unlock as it fills, and a list of 8–9 escalating
**Consequences**. Book I pp.438–447 covers how they're handed out.

Tool: a shared list of held arcana with a generic counter widget (n of max), a checkbox track, and
a **revealed** flag so the back side stays hidden until unlocked. The back side is a GM secret by
design, so this needs section G.

### A5. Trade & Barter helper
Roll **+Prosperity − item Value**, disadvantage in winter (p.83, 91–93, 540–542). Value tiers:
0 ≈ purse of coppers / 1 silver / a favor; 1 ≈ handful of silver / a season of unskilled labour;
2 ≈ purse of silver / 1 gold / 1 Surplus / a cartload of trade goods; 3 ≈ handful of gold / a
trained horse; 4 ≈ purse of gold. 1 purse ≈ 10 handfuls ≈ 100 coins. Every Book II settlement has
its own three-tier goods list (commonly available with Value, special items rolled against local
Prosperity, services and favours) and named trade partners (e.g. Stonetop ↔ Gordin's Delve for
metal and tools, Marshedge for textiles, herbs, glass).

---

## B. The village over time

### B1. Seasons Change runner
The biggest gap against the current static Village Sheet: it has no notion of time. The move
(pp.516–523; summary p.84–85, p.32) names who rolls each season (spring: most hopeful; summer:
most content; autumn: most determined; winter: weariest), rolls **+Fortunes**, and has a different
result table per season. Summer generates **1d4−1 Surplus**, autumn's harvest adds **1d4**, winter
consumes **1d4 + Population** (hamlet 1d2+Pop, town 2d6+Pop, p.509–510); a shortfall zeroes
Surplus, drops Fortunes by 1, and forces a pick (Population −1, lose a resource, an NPC dies, a PC
dies/leaves/retires). Six named **seasonal gains** (Population boom, Tor's blessing, Unexpected
bounty, Trade opportunity, Interesting news, Valuable insight, pp.518–520). **Fortunes resets to +1
each season, or +0 if Malcontent** (p.508, 513). A guided runner rolls, applies the math to the
sheet, logs to the Surplus ledger, and records the gain chosen.

### B2. Homefront moves and multi-season plans
Nine player moves with real numbers (pp.524–541): Bolster (hold 1–3 Preparation), Deploy (+Defenses),
Muster (Fortunes −1, +Population), Pull Together (+Population, spend time/Surplus/materiel),
Requisition (+Fortunes; on 6− Fortunes −1, p.308), Make a Plan (GM checklist from an 11-item
menu), Meet with Disaster (Fortunes −1), Return Triumphant (clear a steading debility or +1
Fortunes, p.339), Level Up (6 + 2×level XP, only at home). Tool: add them to the Rules Lookup, and
give the Village Sheet generic **Plan checklists** with "season N of N" progress plus a Muster
active flag.

### B3. Content guidelines — ✅ BUILT 2026-09-10 (Village Sheet)
Excluded / Veiled lists live on the steading playbook by rule (pp.18–19). Two editable lists on the
Village Sheet, visible to all on purpose.

---

## C. Expeditions

### C1. Chart a Course checklist
The GM writes tick-box **Requirements** (go via X first, wait until, need a guide/map, "at least N
days + supplies", bring ___) and **Challenges** (perilous, risk getting lost, treacherous terrain,
grueling, draws attention) and the book says to put the list "someplace public" (pp.302–303).
Nestable 2–3 legs deep. Natural home: the Watchtower, next to the route maps.

### C2. Expedition supply tracker
Party size + mess kit + live Prosperity → uses per day (1–4 people: 1 use/day with a kit; 5–8: 2;
9–12: 3) (p.304). Decrement on days travelled, Make Camp (p.334), Recover (p.328, heals
4 + Prosperity), Forage (p.336: +WIS, disadvantage in winter, 1d6 uses of provisions per pick).
Deprivation escalates to Defy Danger then debilities (p.335). A cart or pack animal carrying a
Surplus of supplies removes the need to count meals (p.304).

### C3. Roll tables — ✅ weather / night / perilous travel / Die of Fate BUILT 2026-09-10 (Watchtower → Leaving Stonetop; Book II region tables still to do)
All fully specified in Book I: **weather** by season (six 1d6 tables, p.325), **night
occurrences** (1d6, p.335), **perilous-travel danger die** (1d6, p.323), **Die of Fate** (p.42,
201). Book II adds a 1d12 **terrain** table and a 1d6 **discoveries** table with sub-tables for
every region (Ferrier's Fen, Great Wood, Steplands, Ruined Tower, …; roughly 20–30 tables
book-wide), plus **waystone** and **Makers' Road** encounter tables (Book II PDF pp.478–479,
270–273).

### C4. Save the route drawings
Existing gap: Watchtower strokes are per-browser and lost on reload. Store canvas data in the
synced store.

### C5. Wider World lookup on the maps
Book II settlements open with an identical block: size, Population/Prosperity/Defenses, trade
partners and goods, resources; regions have Impressions by season, a travel section, terrain and
discovery tables, dangers. Travel times are stated where they matter (Barrier Pass "five days
north via the Highway", Ruined Tower "a long day's march", the bluff path "10–15 minutes").
Player-safe lore is gated explicitly in only some entries ("Everyone from Stonetop knows / One
might know / Very few know", e.g. Ruined Tower PDF p.333, Things Below p.415), so each place needs
a hand-picked public excerpt. Secrets, hooks, and stat blocks stay GM-only (section G). Pins on the
Vicinity and World's End maps would follow the village-map pattern.

---

## D. Combat and harm

### D1. Harm calculators and healing card — ✅ healing moves with live Recover number BUILT 2026-09-10 (Stone lookup); damage calculators still to do
Damage by severity: bruises d4, nasty wounds d6, broken bones d8, death/dismemberment d10
(p.239, 383), with hazard tags (ignores armor, 1/3 piercing + messy, forceful, +2 damage,
advantage/disadvantage). Several attackers on one foe: roll the best die **+1 per additional
attacker** (p.239, 414). `n piercing` ignores n armor; "ignores armor" zeroes it; "lose n HP" is
never reduced (p.239). A healing card reading live Prosperity: **Recover = 4 + Prosperity** once
per damage cycle (p.246), **Make Camp** = ½ max HP or clear a debility, bedroll +1d6 (p.248),
**Convalesce** = full HP and all debilities after days of rest (p.249), **Death's Door** (p.245).

### D2. Danger tracker (GM)
No initiative; foes only take an attack on specific triggers (p.409). Track each foe's HP/armor/
tags, **groups** abstracted as one member's stats with +1 damage and armor per outnumber multiple
(20 crinwin vs 6 = 3:1 → +2, recalculated as they fall, p.416), **spirits** with manifest vs true
HP (p.413). Must be GM-only.

### D3. Builders (GM prep)
Step tables exist for **monsters** (HP by organisation 3/6/12, size and quality modifiers, armor
by material 0–4, damage die d6/d8/d10, pp.392–405), **followers** (HP 3/6/9, armor 0–4, damage
d4–d8, seven cost types, tag lists, pp.476–479), **NPCs** (name lists by culture, impressions,
instinct, pp.453–459), **flora** (five 1d12 tables, Book II PDF pp.461–463), and **artifacts**
(a 1d12 chain of about 13 tables ending in a minor/major arcanum template, Book II pp.498–507).

---

## E. People

### E1. Followers on the People list
Follower block: tags, HP, armor, damage, instinct, **cost**, **Loyalty 0–3** (pp.460–461).
Paying the cost grants +1 Loyalty; spend 1 Loyalty to make a follower overcome fear or act
against instinct (p.464). **Order Followers**: +1 with a relevant tag, +2 if also exceptional,
disadvantage if a tag hinders (p.462). Group followers share Loyalty and pool Recover/Seek
Insight/Defend (pp.470–473). Add optional follower fields and Loyalty pips to Common House rows,
linked to a PC.

### E2. NPC register import and generator — ✅ import BUILT 2026-09-10 (relationship map)
The DM's 30-NPC register (name, age, occupation, traits, alive/dead) can seed the People list and
the relationship graph. Name lists by culture and the NPC trait list live in the steading playbook
(already in `docs/npcs.md`), which supports a "random townsfolk" button.

---

## F. Threats and session rituals (GM)

### F1. Threat tracker
A threat has a name, one of **8 types** (Affliction, Beast, Institution, MacGuffin, Rabble,
Magical entity, Villain, Wildcard), an instinct "to …", a description, an optional **impending
doom** with **2–4 grim portents** (checkboxes), stakes questions, and custom moves; it sits on the
**Homefront / Nearby / Distant** tracker (pp.277–298), with a between-session update checklist
(p.298). Each type has its own GM move list (pp.284–287). Spoiler content: GM-only.

### F2. Session rituals — ✅ End of Session template BUILT 2026-09-10 (Chronicle); checklists still to do
**End of Session** (p.573): XP for instinct and a changed relationship, plus one per "yes" to four
questions (learned about the world; defeated a threat; improved standing with neighbours; made or
progressed a lasting improvement). A guided version writes a structured Chronicle entry. Also the
**start-of-session** checklist (p.581), the **between-sessions bookkeeping** list (p.576), and a
shared **follow-ups** list (p.574).

### F3. Rules Lookup expansion — ✅ moves BUILT 2026-09-10 (24 entries); GM moves, exploration moves, tag glossaries still to do
Missing from `window.RULES` today: the four healing/expedition moves, Recover/Make Camp/Convalesce
detail, the nine Homefront moves, the expedition moves (Chart a Course, Outfit, Requisition, Have
What You Need, Struggle as One, Keep Company, Forage, Return Triumphant), the town moves Ask
Around / Carouse / Recruit (Book II, near-verbatim per settlement), the 13 GM moves (p.178) and 13
principles (p.192), the 7 exploration moves (pp.317–321, 352–354), gear and monster tag glossaries
(p.94, 395–399), and the light-source table (p.349).

---

## G. Cross-cutting: a "GM screen" mode
Threats, danger HP, unrevealed arcana backs, place secrets, and love letters (pp.568–569) all need
to be hidden from the shared screen. Proposal: a per-browser GM flag (set once on the DM's laptop
or phone, stored locally) that renders GM-only fields; the shared display and player devices never
set it. Data still lives in the same synced store. This is a curtain, not security, which is fine
for a trusted home group and should be documented as such.

---

## Suggested build order
1. **Pack & Closet** (A1) with the item catalogue, then the loot ledger (A2).
2. **Seasons Change runner** (B1) and Surplus ledger (A3) on the Village Sheet.
3. **Expedition kit** on the Watchtower: Chart a Course (C1), supply tracker (C2), roll tables (C3),
   saved routes (C4).
4. **Rules Lookup expansion** (F3) and the healing/harm card (D1).
5. **GM screen mode** (G), then the arcana chest (A4), threat tracker (F1), danger tracker (D2).
6. **Followers and NPC import** (E1, E2), session rituals (F2), Wider World pins (C5).

## Data to extract into `playbooks.js`-style JSON
| Data | Where | Approx. size |
|------|-------|--------------|
| Common + special items with tags, load, Value, ammo | Book I pp.95–97 | ~75 items |
| Gear tag glossary, light sources | pp.94, 349 | ~30 terms |
| Value/coin table | pp.92–93, 542 | 5 tiers |
| Seasons Change tables + 6 gains + size tiers + debilities | pp.508–523 | 4 seasons, 6 gains, 4 tiers |
| Homefront, expedition, healing move texts | pp.245–249, 302–339, 524–541 | ~22 moves |
| Weather, night, perilous-travel, Forage, Die of Fate tables | pp.42, 201, 323, 325, 335–336 | ~10 tables |
| Harm severity + hazard tags; monster/follower build tables | pp.239, 383, 392–405, 476–479 | ~12 tables |
| GM moves, principles, threat types + type moves, exploration moves | pp.178, 192, 284–287, 317–321 | 13 + 13 + 8 types (~90 moves) + 7 |
| Threat template + 16 worked examples (seed data) | pp.278–297 | 16 |
| Follower examples, cost list, tag lists | pp.460–461, 476–479 | 4 blocks, 7 costs, ~40 tags |
| Minor arcana (front/back, resource, move) | Book II PDF pp.508–539 | 64 |
| Major arcana (track, moves, consequences) | Book II PDF pp.540–575 | 18 |
| Flora samples + generator tables; artifact-creation tables | Book II PDF pp.458–463, 498–507 | 7 + 5 tables; ~13 tables |
| Settlement blocks, trade goods, travel times, public lore | Book II gazetteer, ~55 entries | 300–500 goods lines |
| Region terrain/discovery tables | Book II per region | ~20–30 tables |
