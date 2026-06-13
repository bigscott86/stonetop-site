# Player Characters (PCs): Creation & Character-Wide Mechanics

This is a reference for the **"Getting Started / Create Characters"** chapter of *Stonetop* Book I (book pp. 15–33). It describes how the heroes of the village are made and the mechanics that apply to every PC. Stat/HP/XP/level rules are formally defined a little later in the book (pp. 50–55), and are summarized here where the creation flow needs them; those are flagged as out-of-range.

> **Premise of every PC:** the players play **the heroes of a small, isolated village** — Stonetop. Every PC is exceptional but **not super-human**; they all call Stonetop home (or close enough). (p. 16, p. 51)

---

## 1. The character-creation procedure (done together, session 1)

Character creation is **not** done solo before play. It happens **together, as a group, during the first session.** Players may skim the playbooks beforehand but should hold ideas lightly and **not make hard decisions in advance.** (pp. 16, 20, 51)

The session-1 flow the book lays out:

1. **Get ready** — GM prep and printing of playbooks, the Stonetop steading playbook, Setting Overview, Moves & Gear handout, arcana cards, GM playbook. (pp. 16–17)
2. **Review the setting** — everyone reads the Setting Overview (10–15 min) and asks questions. (p. 17)
3. **Set expectations** — agree on the players' agenda/principles; GM agenda is to *portray a rich and mysterious world, punctuate their lives with adventure, play to find out what happens.* (p. 17)
4. **Discuss tone and content** — establish **excluded** vs **veiled** content (recorded on the steading playbook's Content section). Anyone can call for content to be excluded/veiled at any time; if one wants to *veil* and another to *exclude*, it is **excluded**. (pp. 18–19)
5. **Create characters** — the heart of this doc; see the ordered sub-steps below. (pp. 20–27)
6. **Intro the PCs** — round-based introductions (steps numbered in the playbooks). (pp. 22–31)
7. **Let spring burst forth** — the most hopeful PC rolls **Seasons Change** (`roll +Fortunes`, +1) to seed the first adventure's plot hook. (pp. 32–33)
8. **After the session** — GM organizes notes, identifies threats, keeps an "I wonder…" list, plans the first adventure. (p. 33)

The **Create characters + Intro the PCs** rounds proceed in this numbered order (the step numbers are printed on the back of each playbook):

- **Pick a playbook** (one each, no duplicates) and hand out the playbook + inserts. (p. 20)
- Each player **works through their playbook front-to-back**, making choices (background, instinct, appearance, origin/name, stats, moves, special possessions), filling the **left column of the back page**, and then **stops at "Introductions."** (pp. 20–21, 25)
- **Step 1 — Vital info:** each PC introduces themselves by **name, pronouns, background (and playbook if unclear), origin, and appearance**, then fields questions keyed to their playbook + background. (pp. 22–25)
- **Step 2 — Special possessions:** each PC shares their special possessions and **how they earn their keep / contribute to the village**. Includes: *"Can you read and write?"* (pp. 26–27)
- **Step 3 — World building:** each PC describes the choices in the **left column of their back page**, fleshing out the world (gods, history, threats). (pp. 28–29)
- **Steps 4 & 5 — NPC connections:** each PC answers questions tying themselves to **named NPCs of Stonetop** (new NPCs get a name + occupation + trait). Then check marriage/family status. (pp. 30–31)
- **Steps 6 & 7 — PC connections:** players ask each other relationship questions ("Which one of you…?"); whoever answers "me" gets written into a **bond/relationship line**. (p. 31)
- **Step 8 — Homes:** add a point of interest for **each PC's home** on the steading playbook map. (p. 31)

> **→ Website note:** Model creation as an **ordered, resumable wizard** with these exact step keys, not a free-form sheet. Steps 4–8 are *group/relationship* steps that reference other PCs and shared village data, so the data model needs a campaign/table scope, not just per-character scope.

---

## 2. Choosing a playbook (one each) and a background

- There are **nine standard playbooks** (Blessed, Fox, Heavy, Judge, Lightbearer, Marshal, Ranger, Seeker, Would-be Hero). **No doubling up — each player picks a different playbook.** (pp. 20, 50–51)
- The playbook is a **template**: it defines the PC's **background, instinct, appearance, place of origin & name, stats, playbook moves, and special possessions**, plus damage die, HP/armor/XP/level boxes, world-building prompts, and the introductions procedure. (p. 50)
- **Background:** each playbook offers a **choice of three backgrounds**. The chosen background tells how the PC became exceptional and **defines their role in the village**. Each background grants **one or more benefits** (a unique move, a bonus playbook move, a special possession, etc.). Some backgrounds say **"go mark this now"** — meaning mark the indicated move/option/possession immediately so it isn't forgotten. (pp. 20–21, 50)
- **Special exceptions to "live in Stonetop":** the **Blessed with the *Raised by Wolves* background** and the **Lightbearer with the *Itinerant Mystic* background** may live outside, but still keep close ties and visit often. (p. 21)
- **Instinct:** describes how the PC tends to behave. Choose one from the playbook (or another / make one up if experienced). It can change in play. It is an **XP trigger** — see Drives below. (pp. 20, 50–51)

> **→ Website note:** Store **playbook** as an enum of the nine; **background** as an enum of *that playbook's three* (each background carries its own granted move/possession effects, so model it as a typed choice, not free text). Enforce **uniqueness of playbook** across the table. Store **instinct** as text (default from a playbook list, editable, changeable mid-campaign).

---

## 3. Stats — the array, the six stats, and modifiers

> Formally defined on book p. 52 (sheet 26), just outside the 15–33 range, but required for creation.

- **There are six stats.** Each is referenced by a **three-letter abbreviation**. (p. 52)
- **Starting array:** most playbooks distribute **+2, +1, +1, +0, +0, −1** across the six stats, assigned as the player wishes. (p. 52)
  - **Exception:** the **Would-be Hero** starts with **worse stats**, offset by their **Potential for Greatness** move. (p. 52)
- The stats **are already modifiers** — there is no separate score-to-modifier table. The number you assign (+2, +1, +0, −1, etc.) is exactly what you add when a move says **`roll + [STAT]`** (roll **2d6** + stat: **10+** = full success, **7–9** = partial, **6−** = miss). (p. 21, p. 52)
- Stats can later be raised via the **Improved Stat** / **Superior Stat** playbook moves (book pp. 106–107). (p. 52)

| Stat | Abbr. | Governs | Key rolls |
|------|-------|---------|-----------|
| Strength | STR | physical power and using it | Clash; Defy Danger with raw might/power |
| Dexterity | DEX | grace, fine motor control | Let Fly; Defy Danger with speed/agility/finesse |
| Intelligence | INT | memory, learning, quick thinking | Know Things; Defy Danger via expertise / clever plan |
| Wisdom | WIS | intuition, self-control, awareness | Seek Insight; Defy Danger with willpower/senses |
| Constitution | CON | stamina, grit, endurance | Defend; Defy Danger by holding steady / enduring |
| Charisma | CHA | charm, connection, reading others | Persuade; Defy Danger socially |

> **Note — there is no "seventh" PC stat.** The book is explicit: **six** stats. **Fortunes** and **Prosperity** (used in *Seasons Change* and in piercing values) are **steading (village) stats** on the Stonetop steading playbook, **not** PC stats. (pp. 21, 32, 52)

> **→ Website note:** Represent stats as six signed integers initialized from the array **+2/+1/+1/+0/+0/−1** (validate the multiset at creation; allow a per-playbook override for the Would-be Hero). Persist the value as the modifier directly. Do **not** add a Fortunes/Prosperity field to the PC — those belong to a separate **steading** record.

---

## 4. Name, look (appearance), pronouns, place of origin

- **Name:** each playbook+origin supplies a **name list**. Lists are **suggestions** for a cohesive feel, not requirements; extra names live in the steading playbook (book p. 154) or invent your own. (pp. 20, 51)
- **Place of origin:** Stonetop is home to every PC, but the **family's original origin** can be elsewhere. Each playbook lists obvious origins; **if unsure, pick Stonetop.** Origin also drives the name list. (p. 51)
- **Appearance ("look"):** pick from playbook options **or make something up**. Purely to help visualize — **no mechanical effect**; can change in play. (pp. 20–21, 51)
- **Pronouns:** explicitly declared as part of the **Vital info** introduction (alongside name, background, origin, appearance). (p. 22)

> **→ Website note:** name (string, suggestions selectable), pronouns (string/enum, free-entry allowed), appearance (multi-select from playbook list **plus** free text), origin (enum from playbook list defaulting to Stonetop, and it gates the suggested name list). None of these need mechanical effects.

---

## 5. HP, armor, and load / encumbrance

### Hit points (HP)
- HP = **how much fight you've got left.** **Start with current HP = max HP**, as printed on the playbook. (p. 53)
- Lose HP when damaged; at 0 HP you're out of the action and may be dying. Regain via moves like **Recover** / **Make Camp**, never above max. (p. 53)
- **No HP per level**, and **you do not add CON to HP.** (p. 53)

### Damage
- Your **damage die is set by your playbook, not your weapon** (Heavy = 1d10, Lightbearer = 1d4). Some "weapons of war" add **+1 damage**. **You do not add STR/DEX to damage.** (pp. 20, 52–53)

### Armor
- Armor **reduces damage taken** (3 damage vs 1 armor → lose 2 HP). Based on **currently equipped gear**, **0 by default.** (pp. 20–21, 53)
- **"n armor"** items (e.g. "1 armor", "2 armor") **do not stack** — use the highest. **"+1 armor"** items **do stack** (with each other and with "n armor"). **0–1 typical, 2 tough, 3 = best a starting PC can get.** (pp. 20–21, 53)

### Load / encumbrance
- Items marked with a load icon count against **load**. PCs don't define inventory at creation — they choose it when they first **Outfit** for an expedition. (pp. 21, 54)
- Carry limits by load level: **up to 3 (light), up to 6 (normal), up to 9 (heavy).** (p. 21)
- Items **without** a load icon are either **small** (no load cost, but you carry only ~4 of each per expedition) or things not carried on the person. (p. 21)

> **→ Website note:** Store **maxHP** (from playbook, immutable per level) and **currentHP** (initialized equal to maxHP). Store **damageDie** as a playbook-derived enum. Compute **armor** from equipped gear with the **two-rule stacking logic** ("n armor" = max, "+x armor" = additive). Treat **inventory/load as an expedition-time concern**, not a creation field; the load-limit tiers (3/6/9) are a derived check, not a stored array.

---

## 6. Bonds / relationships (with PCs, NPCs, and the village)

Stonetop replaces a single "Bonds" list with **several relationship rounds**, all written during introductions:

- **PC↔NPC connections (steps 4 & 5):** each PC answers questions naming **NPCs of Stonetop** (e.g., who they protect, who wants them dead, family ties). New NPCs are recorded with **name + occupation + trait** on the steading playbook. (pp. 30–31)
- **PC↔PC connections (steps 6 & 7):** a player reads a "Which one of you…?" prompt; whoever says **"me"** is **written into the bond line** on the asking PC's playbook. Repeat/pass until everyone has passed. (A two-player variant reframes these as either/or questions.) (p. 31)
- **Homes (step 8):** each PC's home becomes a **point of interest** tied to family/neighbors on the village map. (p. 31)

**What they do mechanically:** these relationships are primarily **fiction and world-building** — they weave the PCs into the village, generate NPCs, and seed threats/tensions the GM will use. (Specific bond-driven mechanics live in individual playbooks, out of range.) (pp. 28–31)

> **→ Website note:** Model **NPCs as first-class campaign records** (name, occupation, trait, home/point-of-interest, links to PCs). Model **PC↔PC bonds as directed edges** between PC records, each with a prompt-derived label. Both reference the shared **campaign/table** scope, so creation cannot be fully per-character.

---

## 7. Drives — the instinct (XP triggers)

Stonetop's "drive" mechanic is the **instinct** (plus other per-session XP triggers):

- Each session, a PC **marks XP** if they **demonstrate their instinct in play, or struggle against it.** (pp. 20, 48/51)
- Instinct is chosen at creation, can be **changed any time it feels right** (and is prompted at each **Level Up**). (p. 51)
- Other XP sources: rolling a **6−** on a move (unless the move says otherwise) marks XP, plus the **End of Session** move and any move that says to mark XP. (pp. 21, 53)

> **→ Website note:** Store **instinct** as editable text. The per-session "demonstrated/struggled against instinct" check is an **End-of-Session UI prompt**, not a creation field — but the field must exist at creation to drive it later.

---

## 8. Advancement / leveling (PC level)

> Level/XP rules are on book pp. 53–55 (sheets 26–27), just past the 15–33 range, but they're what the Drives/instinct feed into.

- **XP:** start with **0**. Mark XP on a **6−** roll, via **End of Session**, or when a move says so. *"Mark XP"* = one tick in the XP box. (p. 53)
- **Spending XP:** once you have enough, spend it to either **Burn Brightly** (book p. 231) or **Level Up** (book p. 81). (p. 53)
- **Level:** start at **level 1.** When you mark **XP equal to 6 + (2 × current level)**, you may take downtime and **Level Up.** Each level costs **2 more XP** than the last; **no maximum level.** (p. 54)
- **What leveling gets you:** **a new move from your playbook** each level. At **level 6** you unlock the playbook's **most potent moves.** Notably: **no extra HP per level** and **no stat bump from leveling itself** (stat increases come only from the **Improved/Superior Stat** moves you may choose). New PCs joining an ongoing game **still start at level 1.** (pp. 52, 53–54)

> **→ Website note:** Track `xp` and `level`. The level-up threshold is the formula **6 + 2·level** (recompute, don't hardcode). Leveling adds a **playbook move** to a moves list; it does **not** modify HP and does **not** auto-bump stats.

---

## 9. Death / Last Breath / debilities

- **Debilities** (book p. 52, just out of range) — three of them, each imposing **disadvantage** on two stats; marked when a move/GM says so; cleared by moves like **Recover** / **Make Camp**:
  - **Weakened** — disadvantage on **STR / DEX**
  - **Dazed** — disadvantage on **INT / WIS**
  - **Miserable** — disadvantage on **CON / CHA**
- **Disadvantage** = roll an extra die and **drop the highest** (usually 3d6 keep worst); **advantage** drops the lowest. (pp. 21, 52)
- **Running out of HP** puts you out of the action and possibly dying (p. 53). The full **Last Breath / death move and its consequences are defined later in the book (out of the 15–33 range)** and are not specified in the Getting Started chapter.

> **→ Website note:** Model **debilities as three booleans** that programmatically apply **roll disadvantage** to their stat pairs. Provide a clear-debilities action tied to Recover/Make Camp.

---

## 10. Introductions / tying PCs to Stonetop

- Every PC **lives in Stonetop** (or is closely tied to it), with only the two named playbook/background exceptions. (pp. 21, 51)
- The **Vital info → Special possessions → World building → NPC connections → PC connections → Homes** rounds exist specifically to **embed each PC in the village**: their role/livelihood, the gods and history they assert, the NPCs they're bound to, and where they live. (pp. 22–31)
- Players are coached to **pay attention, ask & answer questions honestly, and play off each other** during introductions. (p. 22)
- Closing question for every player: **"What excites you most about playing your character?"** — the GM works the answer into the first adventure. (p. 33)

> **→ Website note:** The introduction answers are mostly **narrative fields** (livelihood, literacy, world facts, family status, "what excites you"). They're worth capturing as free-text notes attached to the PC and surfaced to the GM, even though they carry no direct mechanics.

---

### Out-of-range items defined elsewhere in the book
The Getting Started chapter **uses** but does not fully define these; they live in **"Playing the Game" (book pp. 50–55)** and beyond:
- The **six stats**, the **+2/+1/+1/+0/+0/−1 array**, and roll mechanics (p. 52).
- **HP**, **damage die**, **armor stacking**, **XP**, **level / Level-Up formula**, **debilities** (pp. 52–55).
- **Last Breath / death** consequences (later than p. 55; not in range).
- Per-playbook **moves, special possessions, and bond-specific mechanics** (playbooks begin at book p. 103).
- **Improved Stat / Superior Stat** (book pp. 106–107); **Burn Brightly** (p. 231); **Recover** (p. 328) / **Make Camp** (p. 334); **End of Session** (p. 232).

---

Source: Stonetop Book I, "Getting Started / Create Characters" (pp. 15–33).
