# Stonetop Rules Guides — index

Reference guides distilled from **Stonetop, Book I** (pages 1–165), written to drive the
website's interactive features. Each file is a faithful rules reference **plus** short
`→ Website note:` callouts connecting the rules to what we're building.

> Source PDF: `../Book_I_-_Stonetop_(spreads).pdf`. These guides cover **pp. 1–165**
> (Welcome → Getting Started → Playing the Game → Playbooks & Inserts). The deeper
> systems (full NPC/Follower stats p.449+, Running the Game p.167+, Threats, Sites,
> etc.) are out of scope here and are flagged where relevant.

## The guides

| File | Covers | Book pages |
|------|--------|-----------|
| [rules.md](rules.md) | Core rules: the conversation, moves & triggers, rolling 2d6+stat, the six stats, all basic moves, combat, harm/healing, XP & advancement, gear, the steading | 35–101 |
| [classes.md](classes.md) | All 9 playbooks (classes): concept, three backgrounds, starting stats/HP, signature moves, gear, special mechanics | 103–140 |
| [class-sheet-setup.md](class-sheet-setup.md) | Anatomy of a character sheet → a concrete **JSON data model** for a digital character | 141–163 |
| [pcs.md](pcs.md) | PC creation procedure & character-wide mechanics (stats array, HP, armor, load, bonds, drives, leveling, death) | 15–33 |
| [npcs.md](npcs.md) | The village & its people, NPC record format, neighboring settlements, regional name lists, mapping to the relationship graph | 7–13, 162–165 |

## Key facts to build against (cross-cutting)

- **Six stats**, not seven: **STR, DEX, CON, INT, WIS, CHA** (Stonetop Book I p. 52).
- **Standard starting array:** `+2, +1, +1, +0, +0, −1`, placed by the player. The
  **Would-be Hero** is the deliberate exception (`+1, +0, +0, +0, +0, −1`, offset by its
  growth move). See [classes.md](classes.md) / [pcs.md](pcs.md).
- **No fixed "Bonds" list.** Relationships come from the session-1 **Introductions**
  procedure plus temporary **Rapport** pools — model them as a `relationships[]` array,
  not a fixed bond field. See [class-sheet-setup.md](class-sheet-setup.md).
- **Fortunes / Prosperity are *steading* (village) stats**, not PC stats. Don't put them
  on the character model. See [pcs.md](pcs.md).
- The 9 playbooks (book order): **Blessed (p.105), Fox (p.109), Heavy (p.113),
  Judge (p.117), Lightbearer (p.121), Marshal (p.125), Ranger (p.129), Seeker (p.133),
  Would-be Hero (p.137).** One per character, no duplicates; each opens with a choice of
  **three backgrounds**.

## How these map to the website roadmap

See [../CLAUDE.md](../CLAUDE.md) for the full project state. The roadmap features and the
guides that inform them:

- **Player character creation** (The Smithy) → build the flow from [pcs.md](pcs.md)
  (the ordered creation steps), the data model in
  [class-sheet-setup.md](class-sheet-setup.md), and the per-playbook content in
  [classes.md](classes.md). The existing `spb-*` playbook browser in `index.html` is the
  anchor; [classes.md](classes.md) is the content source to flesh it out.
- **NPC relationship node graph** → [npcs.md](npcs.md) gives the record format
  (`name / pronouns / home / occupation / traits, relations`) for nodes and "relations"
  for edges, plus regional **name lists** usable for a name generator.
- **Rules reference in-app** (e.g. The Stone / How to Play) → [rules.md](rules.md) is the
  canonical text to surface; the existing Shrine modal already holds rules content.
- **Shared sync (free DB)** → these guides define the *shapes* (character, NPC, relation)
  that the synced store needs to hold.
