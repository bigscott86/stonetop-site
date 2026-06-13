# Anatomy of a Stonetop Character Sheet

A data-model specification for building a digital character creator / sheet for a
home Stonetop campaign. This documents **every field and section a printed
Stonetop playbook contains**, which fields are shared across all playbooks, and
which are playbook-specific.

> **How Stonetop sheets are laid out.** A PC's "character sheet" *is* their
> **playbook** — a double-sided sheet folded into a little booklet. The **front
> page** holds identity/customization choices (Background, Instinct, Appearance,
> Origin, name). The **back page** holds the mechanical block (Stats, HP, Armor,
> XP, Level, Damage, debilities, Moves, Special possessions). Each PC also gets at
> least one **insert** (a separate double-sided half-sheet): everyone gets the
> **Inventory** insert; some playbooks/choices add a playbook-specific insert.
> (See "Your character," p. 50–51, and "Playbooks & Inserts," p. 104, 140–141.)

> **Important correction to the brief.** Stonetop, like its parent system Dungeon
> World, uses **SIX stats, not seven**: STR, DEX, CON, INT, WIS, CHA. There is no
> seventh stat. Also, Stonetop does **not** use Dungeon World's fixed "Bonds"
> list. Relationships are established through the **Introductions** procedure
> (questions that name NPCs and other PCs) and tracked ad hoc; a few moves grant
> temporary **Rapport** pools rather than a permanent bonds section. These points
> are reflected below and called out where relevant.

---

## Common sheet sections

These appear on **every** standard playbook (Blessed p. 105/122–123, Fox,
Heavy p. 116, Judge p. 120, Lightbearer p. 124–125, Marshal p. 124–125,
Ranger, Seeker, Would-be Hero p. 138–139). Verified against the printed sheets
and the "Your character" reference (p. 50–51).

### Front page (identity & customization)

| Field | Holds | Shape | Notes |
|---|---|---|---|
| **Name** | The character's name. Printed as a fill-in: "I am called ___." | text | Each playbook suggests names per origin; player may free-type. (p. 105, 125) |
| **Pronouns** | Character pronouns. | text | Not a boxed field on the sheet; collected during Introductions ("introduce yourself by name, pronouns, background, origin, and appearance," p. 140). Worth storing as a field. |
| **Background** | One of **three** background options listed per playbook (radio/choose-1). Defines backstory, role in the village, and grants a benefit (a unique move, a bonus playbook move, or a special possession). | single-select (enum) + derived benefit | The benefit a background grants must be applied automatically. Background options are unique per playbook (e.g., Blessed: Initiate / Raised by Wolves / Vessel, p. 105; Marshal: Scion / Penitent / Luminary / Authority…, p. 125). (p. 50) |
| **Instinct** (the "drive") | One of several listed options describing how the PC tends to behave. This is Stonetop's "drive" field. | single-select (enum), editable/free-text | If you demonstrate it or struggle against it in play, you **mark XP** at end of session. Can be changed at Level Up or any time. Examples — Blessed: Delight / Detachment / Nurture / Preservation / Reverence (p. 105); Marshal: Authority / Caution / Drive / Honor / Ruthlessness (p. 125). "Drive" is literally one Marshal Instinct option. (p. 50) |
| **Appearance / Look** | A set of checkbox descriptors (eyes, build, clothing, etc.), choose-some, plus free-text. Purely flavor, no mechanics. | multi-select tags + free text | Categories differ per playbook (e.g., Marshal: stalwart / experienced / sober / grizzled; clear voice / resonant voice / rumbling voice; worn brow / grim set jaw / knowing smile; badge of office / topknot & symbols / timeworn gear, p. 125). |
| **Place of origin** | Where the PC (or their family) came from — choose 1 from a playbook-specific list. Each origin supplies a name list. | single-select (enum) | Default to "Stonetop" if unsure. Drives the suggested name list. (p. 51) |

### Front-page world-building prompts (per playbook)

Each playbook front/back includes a block of **fiction-defining prompts** (e.g.,
Blessed "Place of origin and name," Judge "The Chronicle" p. 120, Lightbearer
"Praise the day" p. 124, Heavy "A history of violence" p. 116, Would-be Hero
"Fear & anger" p. 140). These are checkbox/choose-N lists that establish setting
details and tie the PC to NPCs.

| Field | Holds | Shape | Notes |
|---|---|---|---|
| **World/lore prompts** | Playbook-specific choose-N checklists fleshing out the PC's place in the world. | list of `{prompt, options[], chosen[]}` | Content is entirely playbook-specific; store generically. |
| **Introductions / relationships** | Answers to relationship questions that name NPCs and other PCs ("Whose heart do you hope to win?", "Who is counting on you?", "Which one of you is my closest, truest friend?"). | list of free-text relationship entries (often referencing an NPC or PC id) | This replaces Dungeon World's "Bonds." No fixed bond slots. (Introductions, p. 140; Would-be Hero p. 140.) |

### Back page (the mechanical block)

| Field | Holds | Shape | Notes |
|---|---|---|---|
| **Stats (×6)** | The six ability scores, each with a **labeled modifier box**: Strength (STR), Dexterity (DEX), Constitution (CON), Intelligence (INT), Wisdom (WIS), Charisma (CHA). | 6 × signed integer (modifier) | Assigned at creation from a fixed array. Standard playbooks assign **+2, +1, +1, +0, +0, -1** (e.g., Blessed p. 122). The Would-be Hero is weaker: **+1, +0, +0, +0, +0, -1** (p. 138). Stats cap around +3 via advances. The boxed number on the sheet **is** the modifier (Stonetop uses the modifier directly, no separate 3–18 score). |
| **Debilities** | Per-stat debility flags (named labels under each stat): **weakened** (STR), **dazed/staggered** (DEX… actual label per stat), **miserable** (CHA), etc. When a stat is debilitated you roll that stat with **disadvantage**. | 6 booleans (one per stat) | Labels printed under the stat boxes. Would-be Hero shows weakened / dazed / miserable, etc. (p. 138). |
| **Damage die** | The PC's base damage die. | enum (d4 / d6 / d8 …) | Would-be Hero starts **d6** (p. 138); Blessed starts **d4** (p. 122). Can be increased by advances. |
| **HP / Max HP** | Current hit points and the maximum (printed as "HP (max 16)" on standard sheets). | integer current + integer max | Max is printed/derived (commonly 16; Would-be Hero "max 16" too, p. 138). Max can rise via advances (+4). |
| **Armor** | Current armor value. | integer (often a single box) | Derived from worn gear + moves; tracked as a box on the sheet. |
| **XP** | Experience points (a row/track of boxes). | integer / checkbox track | Marked via Instinct, failures (roll 6-), end-of-session questions, and certain moves. Spent to Level Up. |
| **Level** | Current character level. | integer | A small box. Spending XP raises it and unlocks advances. |
| **Moves** | The PC's moves. Each playbook lists **starting moves** (some fixed, some "+ N of your choice") and a menu of **selectable / advanced moves** (checkbox to take). Some advanced moves are gated by level (e.g., "Requires level 6+") or by other moves, and replace an existing move. | list of move objects, each with a "taken" checkbox | E.g., Would-be Hero: "You start with Anger is a Gift, Potential for Greatness, and 2 other moves of your choice" (p. 138). Asterisked moves trigger a one-time effect (Would-be Hero crosses off "Would-be," p. 139). Store: id, name, text, taken (bool), requires (level/move), replaces. |
| **Special possessions** | Starting gear/relationships, chosen from a "Pick N" checklist (e.g., "Pick 2"). Items can themselves have sub-choices and can grant followers, tools that confer advantage, armor, etc. | multi-select checklist with nested options | Would-be Hero "Special possessions (Pick 2)" includes a dog follower w/ stat block, smithy, a personal token w/ sub-pick, a leather cuirass (1 armor), etc. (p. 139). Blessed has its own list (p. 122–123). |

---

## Playbook-specific sections

Beyond the common block, each playbook adds bespoke tracks/pools — usually a
named resource pool plus, often, a dedicated **insert**.

| Playbook | Extra track / pool (on playbook) | Insert (separate half-sheet) | Notes |
|---|---|---|---|
| **The Blessed** | **Stock** (a "sacred pouch" resource) and **max Stock**; remarkable traits of the pouch. Many Blessed moves spend Stock. | **Initiates of Danu** insert (if Initiate background, p. 145): tracks 4 named initiate-followers, each with HP, Armor, moves to pick, Cost, and a **Loyalty** track; plus "Order Followers" / "Strengthen Your Bond" rules. | Stock pool + sacred-pouch traits are core Blessed bookkeeping. (p. 122; insert p. 145.) |
| **The Fox** | Tricks / signature moves; no large dedicated pool. | Generic follower/agenda insert (p. 147). | — |
| **The Heavy** | A **Storm Markings** major-arcanum insert if the **Storm-marked** background is chosen (Appendix D, Book II p. 540). | Generic insert (p. 147) otherwise. | History-of-violence prompts on front (p. 116). |
| **The Judge** | **The Chronicle** (a defined physical archive location with chosen pros/cons, mapped on the steading playbook). | Generic insert (p. 147). | Chronicle is a structured location object. (p. 120.) |
| **The Lightbearer** | **Invocations**: known light-magic invocations, each toggled lit/unlit; "Each time you mark an Invocation, learn 1 new Invocation." | **Invocations** insert (p. 146): the list of invocations (Bath of Healing Light, Blinding Light, Cleansing Light, Cold Light of Day, Go Back to the Shadow, Hold Back the Darkness, etc.), each a checkbox/ongoing toggle. | Core Lightbearer mechanic. (p. 124; insert p. 146.) |
| **The Marshal** | **Crew**: a half-dozen-strong group treated as a follower, with shared HP / Armor / Damage, Tags, Instinct, Cost, individual named members, and a **Loyalty** track. | **Crew** insert (p. 144): HP / Armor / Damage boxes, Tags, Instinct (pick 1), Cost (Loyalty track), up to several named Individuals, and "Order Followers / Strengthen Your Bond" rules. | (p. 124; insert p. 144.) |
| **The Ranger** | **Animal Companion** (if the companion move is taken): a beast follower with Type, HP, Armor, Damage, Instinct, Cost (Loyalty), and pickable training tags. | **Animal Companion** insert (p. 143): Type (Bird/Critter/Brute/Predator/Steed…), HP, Armor, Damage, Instinct, Cost/Loyalty, plus "Order Followers / Strengthen Your Bond / Loyal to the End" rules. | (insert p. 143.) |
| **The Seeker** | Starts with a **major arcanum** (determined by background) — an artifact with its own rules. | **Major Arcanum** insert (see p. 60; full list Appendix D, Book II p. 540). | Arcana are modeled as their own item/insert objects. |
| **The Would-be Hero** | **Potential for Greatness**: a 6-box track of one-time level-up boosts (each tagged with "at level ___" — e.g., +1 to a stat, +4 max HP, damage die to d8). Plus **Resolve** (from Anger is a Gift) and **Rapport** pools from certain moves. Front page also has "Would-be" crossed off when an asterisked move first fires. | Generic follower/agenda insert (p. 147). | (p. 138–139.) |

### Inserts that any PC may gain (state changes)

These are taken only when triggered (usually via the **Death's Door** move). They
replace/augment the PC's sheet while active. Model as optional attachable
sub-sheets:

- **Ghost** (p. 148–149): Instinct, Terrible Purpose (choose 1), Unliving/Disembodied moves, and a **Consequences** track (Rodynsdaughter, Breakdown, Death's Visage, etc.). Ends with "The Final Consequence."
- **Revenant** (p. 150–151): Instinct, Terrible Purpose, moves, and a Consequences track. Same shape as Ghost.
- **Thrall** (p. 152–153): "Your master," Impulse (choose-N), moves (Favor, Urges, Dark Succor…), and a **Marks** track (A Festering Rot, Child of the Deeps, Deathmask, etc.).

### Out of scope (not PC sheets)

PDF pages 78–81 (book pp. 154–161) are the **Steading playbook** — the *village
of Stonetop itself* (Size, Population, Fortunes, Surplus, Prosperity, Defenses,
Debilities, Places of Interest, Steading Improvements, common **Assets** with
Silver/Gold purse tracks). It is a shared group sheet, not an individual
character sheet, so it is excluded from the model below.

---

## → Proposed data model

A concrete JSON shape for a `character` object the website can store. Stat values
are signed modifiers. Playbook-specific data lives in a generic `playbookData`
map plus typed optional blocks, so adding a new playbook doesn't require schema
changes.

```jsonc
{
  "id": "uuid",
  "playbook": "blessed",        // enum: blessed | fox | heavy | judge | lightbearer | marshal | ranger | seeker | wouldBeHero

  // --- Identity (front page) ---
  "name": "string",
  "pronouns": "string",
  "background": "string",       // one of the playbook's 3 background ids
  "instinct": "string",         // the "drive"; enum id OR free text
  "appearance": ["string"],     // chosen look descriptor tags
  "appearanceNotes": "string",  // free-text
  "origin": "string",           // place-of-origin id (default "stonetop")

  // --- Core stats (SIX, signed modifiers) ---
  "stats": {
    "STR": 0, "DEX": 0, "CON": 0, "INT": 0, "WIS": 0, "CHA": 0
  },
  "debilities": {               // true = stat rolled at disadvantage
    "STR": false, "DEX": false, "CON": false,
    "INT": false, "WIS": false, "CHA": false
  },

  // --- Vitals & progression (back page) ---
  "damageDie": "d6",            // enum: d4 | d6 | d8 | d10
  "hp": 16,
  "maxHp": 16,
  "armor": 0,
  "xp": 0,
  "level": 1,

  // --- Moves ---
  "moves": [
    {
      "id": "anger-is-a-gift",
      "name": "Anger is a Gift",
      "taken": true,
      "starting": true,         // granted at creation
      "requires": null,         // e.g. { "level": 6 } or { "move": "i-get-knocked-down" }
      "replaces": null          // id of a move this one supersedes
    }
  ],

  // --- Gear ---
  "specialPossessions": ["string"],   // chosen "Pick N" possession ids (may include sub-choices)
  "inventory": {                      // the Inventory insert (everyone has this)
    "outfit": ["string"],             // worn/carried; affects load
    "heavyLoad": false,               // flagged when over capacity
    "smallItems": ["string"],
    "possessionsItemsLoot": ["string"],
    "coin": { "gold": 0 }             // "Prosperity" / coin tracking
  },

  // --- Relationships (replaces DW "bonds") ---
  "relationships": [
    { "with": "npc-or-pc-id-or-name", "note": "string" }
  ],

  // --- World-building prompt answers (per playbook) ---
  "worldPrompts": [
    { "prompt": "string", "chosen": ["string"], "notes": "string" }
  ],

  // --- Playbook-specific blocks (only the relevant ones are populated) ---
  "playbookData": {
    "blessed": {
      "stock": 0,
      "maxStock": 3,
      "sacredPouchTraits": ["string"]
    },
    "lightbearer": {
      "invocations": [
        { "id": "bath-of-healing-light", "name": "Bath of Healing Light", "active": false }
      ]
    },
    "wouldBeHero": {
      "resolve": 0,
      "potentialForGreatness": [          // the 6-box track
        { "boon": "string", "marked": false, "atLevel": null }
      ],
      "rapport": [ { "with": "string", "amount": 0 } ]
    },
    "seeker": { "arcana": ["arcanum-id"] },
    "heavy":  { "stormMarked": false, "arcana": ["storm-markings"] }
  },

  // --- Followers / companions / crew (insert-backed) ---
  "followers": [
    {
      "kind": "animalCompanion",   // animalCompanion | crew | initiates | follower
      "name": "string",
      "type": "string",            // e.g. Ranger companion type, or Crew tags
      "hp": 0, "armor": 0, "damage": "d6",
      "instinct": "string",
      "tags": ["string"],
      "cost": "string",
      "loyalty": 0,                // 0–3 track on the inserts
      "moves": ["string"],
      "members": ["string"]        // for the Marshal's Crew: named individuals
    }
  ],

  // --- Optional state-change inserts (Death's Door results) ---
  "stateInsert": null,             // null | "ghost" | "revenant" | "thrall"
  "stateInsertData": {
    "instinct": "string",
    "purposeOrImpulse": ["string"],
    "moves": ["string"],
    "consequencesOrMarks": [        // the consequence/marks track
      { "id": "string", "name": "string", "marked": false }
    ]
  }
}
```

**Modeling notes for the developer**

- **Six stats, stored as signed modifiers** — do not build a 3–18 score system.
  Validate against the playbook's starting array and a per-stat cap (≈ +3).
- **`background` and `instinct` should drive derived effects.** A background may
  auto-grant a move, a possession, or a stat tweak; surface those when chosen.
- **`moves` should enforce `requires`/`replaces`** at the UI level (gate advanced
  moves by level/prereq; hide or strike the replaced move).
- **XP/Level** is a track: XP is spent to increment `level`, which unlocks the
  next set of selectable/advanced moves.
- **Relationships replace bonds.** Don't render fixed bond slots; render the
  Introductions questions and let players add free-form relationship entries.
- **Inserts are sub-sheets.** Inventory is universal; companion/crew/initiates
  and the Ghost/Revenant/Thrall blocks are optional attachable objects, which is
  why they live in `followers[]`, `playbookData`, and `stateInsert*` rather than
  flat fields.

---

Source: Stonetop Book I, playbook sheets/inserts (pp. 141–163).
