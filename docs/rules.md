# Stonetop — Core Rules Reference

A faithful reference for the **"Playing the Game"** chapter of *Stonetop* Book I (pp. 35–101). Page citations like (p. 52) refer to the printed book. This document is for developers building the campaign website; **→ Website note:** callouts flag rules that map to site data or features.

---

## The Conversation & Fiction-First Play

You play Stonetop by talking to each other (p. 36). The GM says something, the players respond, you ask each other questions, refer to the rules, roll dice, and talk about what the results mean. You take turns talking, but not formally — you talk over each other, interrupt, and suggest, as in any conversation.

The goal of this conversation is to create **the fiction**: the shared imaginary reality in which the characters exist and act (p. 36). When details start to matter, you talk them out and come to agreement.

**Who's responsible for what (p. 36):**
- **Players** are responsible for their **player character (PC)** — what they say and do, how they feel, their background. You speak in your PC's voice and say what your PC does.
- **The GM** is responsible for everything else: the world, terrain, weather, monsters, hazards, **non-player characters (NPCs)**, what happened before the PCs arrived, and what happens after they leave. The GM curates what is and isn't true about the world at large.

### Your Agenda (player) (p. 37)
- Portray a compelling character
- Engage with the fictional world
- Play to find out what happens

This is not a game you play to win, or to optimize a character. **The GM's agenda** (p. 37): portray a rich, mysterious world; punctuate the PCs' lives with adventure; play to find out what happens.

### The Flow of Play (p. 38)
The GM establishes the situation (where you are, who's there, what's going on), then says something to provoke action or increase tension and asks, **"What do you do?"**

If you…
- …need more information, ask for it.
- …**trigger a player move**, follow the move's procedures.
- …do anything else, the GM says what happens.

If you ignore an established danger, or you trigger a move and roll a 6 or less, the GM says what bad thing happens. The process then repeats. There are **no formal turns**, not even during fights; the GM moves the spotlight around, but it's okay to interject politely.

Play shifts between **scenes** (a specific place and time, moment-by-moment) and **loose play** (zoomed out, over time and space) (p. 38).

---

## Moves & Triggers

A **move** is a little bit of rules that shapes the conversation and the fiction (p. 38). Moves come in types:
- **Basic moves** — shared by all PCs (pp. 70–73).
- **Special / peripheral moves** — always in play, triggered by specific circumstances (p. 74).
- **Playbook moves**, **insert moves**, **arcanum moves**, and **custom moves** for specific situations.

### Triggers (p. 39)
Each move has a **trigger** that says when the move kicks in. The trigger is almost always **fictional**: you describe your character doing something that matches the trigger, and the rest of the move resolves it.

Two key principles:
- **"To do it, you have to do it."** Saying "I Clash" isn't enough — the GM will ask what that looks like.
- **"If you do it, you have to do it."** If you describe an action that matches a trigger and you carry on, you make the move (you can back out before committing).

Everyone watches for moves and must **agree** that the action is plausible and the trigger is genuinely met (e.g., elbowing a foe doesn't trigger Clash if he's 12 feet tall and out of reach, made of iron, or distracted and not actually fighting) (p. 39).

---

## Rolling

"Roll +STAT" means: **roll two six-sided dice (2d6), add them together, and add the named stat** (p. 40). Stats range from **-1 to +3**.

### Outcome Bands (p. 41)
- **10+** — a **strong hit** (full success), the best you can hope for.
- **7–9** — a **weak hit**: you get only some of what you wanted, or get it with a cost.
- **6−** — a **miss**:
  - You **mark XP** (p. 53), unless the move says otherwise.
  - The GM says what happens, and it will be bad.

A 6− doesn't always mean you screwed up — it means something bad happens that your PC won't like. A few moves specify their own 6− results; otherwise, on a 6− mark XP and prepare for the worst. If a move doesn't have you roll, it just tells you what happens.

### Advantage / Disadvantage (pp. 40, 74)
- **Advantage:** roll an extra die and discard the **lowest**.
- **Disadvantage:** roll an extra die and discard the **highest**.
- Having both on the same roll cancels out — roll normally.
- On a **damage roll** with advantage/disadvantage, roll the main die twice and keep the higher/lower, then add bonus dice.

Advantage/disadvantage normally stems from a move or condition; the GM can apply it ad hoc but is encouraged to do so rarely.

### Hold and Spend (p. 41)
Some moves tell you to "hold X currency" (e.g., **Readiness**, **Preparation**, **Acumen**, **Power**, **Loyalty**). Note how much you hold and spend it as the move describes. Spending held currency lets you do something now or later, even if it interrupts play or would normally trigger a move. Always say what spending it looks like in the fiction.

### The Die of Fate (p. 43)
When the GM wants the fates to decide but no move applies, they may ask for the **Die of Fate**: roll a **d6** straight (no modifiers). High is good, low is bad.

**→ Website note:** A dice roller needs 2d6 + a selected stat modifier, advantage/disadvantage support (extra die, drop high/low), outcome banding (10+ / 7–9 / 6−), an automatic "mark XP on a 6−" prompt, and a separate single-d6 Die of Fate mode.

---

## The Stats

Each PC has **six stats** (p. 52), each abbreviated with three letters; rules text uses the abbreviations. Each stat ranges from **-1 to +3**.

| Stat | Name | What it covers | Typical uses |
|------|------|----------------|--------------|
| **STR** | Strength | Physical power and ability to use it | Clash; Defy Danger with might/power |
| **DEX** | Dexterity | Grace and fine motor control | Let Fly; Defy Danger with speed/agility/finesse |
| **CON** | Constitution | Stamina, grit, determination, endurance | Defend; Defy Danger by holding steady / enduring |
| **INT** | Intelligence | Memory, learning, quick thinking | Know Things; Defy Danger via expertise / clever plan |
| **WIS** | Wisdom | Intuition, self-control, awareness | Seek Insight; Defy Danger with willpower/senses |
| **CHA** | Charisma | Charm, connection, reading others | Persuade; Defy Danger socially |

**Starting stats (p. 52):** most playbooks distribute **+2, +1, +1, +0, +0, −1** across the six stats. (The Would-be Hero starts with worse stats but offsets this via *Potential for Greatness*.) Stats can be raised later via the **Improved Stat** or **Superior Stat** playbook moves.

**→ Website note:** The character creator needs the six stats with -1…+3 range and a standard-array assignment of +2/+1/+1/+0/+0/−1, plus support for stat-boosting moves.

---

## Basic Moves (pp. 70–73)

These are the most commonly triggered moves, shared by all PCs. (Page references in each entry point to the move's full detail later in the book.)

### AID (p. 212)
When you help someone who has not yet rolled, the GM picks 1:
- They can accomplish more than they could alone
- They gain advantage on their roll

Either way, you are exposed to any risk, cost, or consequence associated with their roll.

### CLASH (p. 214)
When you fight in melee or close quarters, roll **+STR**:
- **10+:** your maneuver works as expected (deal your damage) and **pick 1**:
  - Avoid, prevent, or counter your enemy's attack
  - Strike hard and fast, for **1d6 extra damage**, but suffer your enemy's attack
- **7–9:** your maneuver works, mostly (deal your damage), but you suffer your enemy's attack.

### DEFEND (p. 216)
When you take up a defensive stance or jump in to protect others, roll **+CON**:
- **10+:** hold **3 Readiness** (or **4** if you bear a shield)
- **7–9:** hold **1 Readiness** (or **2** with a shield)

Spend Readiness 1-for-1 to:
- Suffer an attack's damage/effects instead of your ward
- Halve an attack's effect or damage
- Draw all attention from your ward to yourself
- Strike back at an attacker (deal your damage, with disadvantage)

When you go on the offense, cease to focus on defense, or the threat passes, lose any Readiness you hold.

### DEFY DANGER (p. 210)
When danger looms, the stakes are high, and you do something chancy, check if another move applies. If not, roll:
- **+STR** to power through or test your might
- **+DEX** to employ speed, agility, or finesse
- **+CON** to endure or hold steady
- **+INT** to apply expertise or enact a clever plan
- **+WIS** to exert willpower or rely on your senses
- **+CHA** to charm, bluff, impress, or fit in

**10+:** you pull it off as well as one could hope. **7–9:** you can do it, but the GM presents a lesser success, a cost, or a consequence (and maybe a choice between them, or a chance to back down).

### INTERFERE (p. 218)
When you try to foil another PC's action and neither of you backs down, roll using the same stat options as Defy Danger (+STR / +DEX / +CON / +INT / +WIS / +CHA, per approach).
- **10+:** they pick 1 below.
- **7–9:** they pick 1 below, but you are left off-balance, exposed, or otherwise vulnerable.
  - Do it anyway, but with disadvantage on their (next) roll
  - Relent, change course, or otherwise allow their move to be foiled

### KNOW THINGS (p. 220)
When you consult your accumulated knowledge, roll **+INT**:
- **10+:** the GM tells you something interesting *and useful* about the topic.
- **7–9:** the GM tells you something interesting — it's on you to make it useful.

Either way, the GM might ask "how do you know this?"

### LET FLY (p. 222)
When you take an **easy** shot with a ranged weapon, just **deal your damage**.
If the shot is tricky or you're under pressure, first roll **+DEX**:
- **10+:** clear shot, deal your damage.
- **7–9:** pick 1:
  - Deal your damage, but deplete your ammo (mark the next status by your weapon; don't pick this if your weapon lacks such statuses)
  - Hold steady and wait for a clear shot; when the moment arrives (GM's call), deal your damage
  - Move to get a clear shot — exposing yourself to danger or giving up some advantage (GM says how) — then deal your damage
  - Rush the shot and deal your damage, leading to a cost or complication of the GM's choice

### PERSUADE (vs. NPCs) (p. 224)
When you press or entice an NPC, say what you want them to do (or not do). If they have reason to resist, roll **+CHA**:
- **10+:** they either do as you want or reveal the easiest way to convince them.
- **7–9:** they reveal something you can do to convince them, though it'll likely be costly, tricky, or distasteful.

### PERSUADE (vs. PCs) (p. 226)
When you press or entice a PC and they resist, ask their player: "Could I possibly get you to do this, yes or no?" If "no," let it drop. If "yes," roll **+CHA**:
- **10+:** they mark XP if they do what you want; if they don't, they must say how you could convince them.
- **7–9:** they mark XP if they do what you want (but can refuse or make a counter-offer).

### SEEK INSIGHT (p. 228)
When you study a situation or person, looking to the GM for insight, roll **+WIS**:
- **10+:** ask **3** questions from the list below.
- **7–9:** ask **1**.

Either way, take advantage on your next move to act on the answers.
- What happened here recently?
- What is about to happen?
- What should I be on the lookout for?
- What here is useful or valuable to me?
- Who or what is really in control here?
- What here is not what it appears to be?

**→ Website note:** Each basic move is data with a trigger, an optional roll stat, and structured 10+/7–9/6− outcomes (with pick-lists where applicable). A "moves browser" or quick-reference panel could render these directly.

---

## Special / Peripheral Moves (pp. 74–75)

Always in play; they affect other moves or trigger under specific circumstances.

- **ADVANTAGE / DISADVANTAGE (p. 230):** see [Rolling](#rolling) above.
- **BURN BRIGHTLY (p. 231):** When you have enough XP to Level Up (6 + twice your current level), you may **spend 2 XP after any roll to add +1** to that roll (max +1 per roll).
- **END OF SESSION (p. 232):** see [Advancement & End of Session](#advancement--end-of-session).
- **DEATH'S DOOR (p. 245):** When you are dying, you glimpse the **Last Door** and the **Lady of Crows** (describe them), then roll **+nothing**:
  - **10+:** wrest yourself back — return to **1 HP**, but say how your brush with death has marked you.
  - **7–9:** the Lady waves you off — you're no longer dying but you're **out of the action**.
  - **6−:** your time has come; choose 1: make one last move as if you rolled a **12+**, then step through the Last Door; **refuse to go** and gain the **Revenant** or **Ghost** insert; or call on one of the **Things Below** by name and beseech it to intercede, gaining the **Thrall** insert.

**→ Website note:** Death's Door is a roll with no stat modifier (2d6 only). A roller should support a "+0/no stat" mode.

---

## Combat

Stonetop has **no initiative and no rounds** (p. 38). Combat runs through the same conversational flow as everything else.

**The GM, dice, and moves (p. 42):** The GM normally **doesn't roll dice and doesn't trigger moves**. A monster may "leap at you, claws out," but the GM doesn't roll to see if it hits — they ask **"What do you do?"** Your response (duck, twist away and stab, raise your shield) usually triggers a move, and that move's result determines whether the monster's attack lands. If you ignore the threat, the GM confirms you understand and then tells you what bad thing happens.

### Fictional Positioning (p. 42)
The actions you can take and the moves you trigger are governed by **fictional positioning** — the sum of established fictional details: your traits, equipment (in hand vs. stowed), position relative to foes/allies/hazards/cover, what you can see/hear/sense, what you're focused on, your momentum/footing/balance/emotional state, and how you describe your approach.

In Stonetop, fictional positioning does **not** grant flat +1/−1 bonuses for "easy" or "hard" tasks. Instead it affects: how much of a spot you're in before "What do you do?"; whether an action is feasible; whether a move triggers at all; what's required to attempt something; which move triggers; how great the risks are; the scope a single move can accomplish; and (rarely) whether you roll with advantage/disadvantage.

### PC vs. PC (p. 42)
Conflict between PCs is handled with **Persuade**, **Seek Insight**, and **Interfere**. When a move targets or might be objected to by another PC, slow down and give that player a chance to respond. The GM has final say on who triggers which moves and in what order.

### Fighting Fairly / Fighting Many
Fights are **not balanced** to the PCs (p. 49) — putting a monster in front of you doesn't mean the GM thinks you can beat it, and an "easy" foe can still go sideways on bad dice. Judge your chances, avoid fights you can't handle, and be willing to flee. A single **group** follower (or foe) with the *group* tag represents multiple individuals who share stats and often act as one (p. 64).

**→ Website note:** No turn-tracker or initiative system is needed. Combat-related data the site cares about: PC/follower/foe **damage die, HP, armor**, and weapon **tags** (range, piercing, forceful, etc.).

---

## Harm, Healing & Conditions

### Damage (p. 52)
Your playbook lists a **damage die**, independent of your weapon (e.g., the Heavy deals 1d10, the Lightbearer 1d4). It reflects how dangerous *you* are; the weapon is just a tool. Some weapons of war deal "+1 damage." Some moves override your damage die. **You do not add STR or DEX to damage.**

### Hit Points (HP) (p. 52)
HP represents how much fight you have left. Start play with current HP = max HP (per your playbook). You lose HP when you take damage; at **0 HP** you're out of the action and might be dying. You regain HP via moves like **Recover** and **Make Camp**, but never above your max. **You do not gain HP per level, nor add CON to HP.**

### Armor (p. 52)
Armor reduces damage taken (3 damage − 1 armor = 2 HP lost). Armor is based on equipped gear. **"n armor" doesn't stack** (use the higher); **"+1 armor" does stack.** Default 0; 0–1 is typical, 2 is tough, 3 is the best at start of play.

### Debilities (p. 52)
A move or the GM may tell you to "mark a debility." There are three:
- **Weakened** — fatigued, tired, sluggish, shaky. **Disadvantage on +STR or +DEX**.
- **Dazed** — out of it, befuddled, not thinking clearly. **Disadvantage on +INT or +WIS**.
- **Miserable** — greatly distressed, angry, unwell, in pain. **Disadvantage on +CON or +CHA**.

Debilities both reflect and dictate the fiction. They last until a move (e.g., **Recover**, **Make Camp**, **Convalesce**) or the GM clears them.

### Healing & Recovery Moves
- **RECOVER (p. 328):** When you catch your breath and tend to what ails you, expend **1 use of supplies** and recover **HP equal to 4 + Prosperity** (Stonetop's steading Prosperity). You can't gain this again until you take more damage. To tend a debility or problematic wound, say how; the GM says whether it's handled or what's required.
- **MAKE CAMP (p. 334):** When you rest in an unsafe area, answer the GM's questions about the campsite; each party member consumes **1 use of supplies or provisions** (a mess kit lets 1 use feed up to four). If you eat, drink, and get a few hours' sleep, **pick 1**: regain HP equal to **½ your max**, or **clear a debility**. A peaceful/comfortable rest also grants advantage on your next roll. (A Bedroll grants +1d6 HP when you Make Camp.)
- **CONVALESCE (p. 249):** Rest a few days in safety and comfort to set HP to max and clear all debilities. Rest a few weeks under a healer's care to heal problematic wounds that can heal. Permanent injuries mean you either retire or Make a Plan to adapt.
- **STRUGGLE AS ONE (p. 328):** When you Defy Danger as a **group**, set the party's approach and each roll +STAT per Defy Danger: **6−** you're in a spot (GM describes or asks); **7–9** you pull your weight; **10+** you do well enough to get someone else out of a spot if you can say how. If you roll 6− but someone saves you, **don't mark XP**.

**→ Website note:** Recover and Make Camp depend on the steading's **Prosperity** and a tracked **supplies** count, so HP/supply tracking should reference shared steading state.

---

## Advancement & End of Session

### XP (p. 53)
You start with no XP. You **mark XP** (a tick mark, +1 total) when you:
- Roll a 6− on a move (unless the move says otherwise),
- As part of the **End of Session** move, and
- When another move says so.

Once you have enough XP, spend it to **Burn Brightly** (p. 231) or **Level Up** (p. 81).

### Level & Leveling Up (pp. 54, 81)
You start at **level 1**. When you have **XP ≥ 6 + twice your current level**, you can take downtime and **LEVEL UP**:
1. Subtract (6 + twice your current level) from your XP.
2. Increase your level by 1.
3. Choose a new move from your playbook (or an unlocked insert class).
4. **Blessed / sacred pouch:** at an even new level, increase max **Stock** by 1.
5. **Lightbearer / Invoke the Sun God:** at an even new level, choose a new invocation.
6. Review your **Instinct** and **Appearance**; change anything that no longer fits.

Each Level Up grants a new playbook move; at level 6 you gain access to your most potent moves. There's no maximum level, but each level costs 2 more XP than the last. New PCs joining an ongoing game still start at level 1.

### Instinct (pp. 50–51)
Your **instinct** describes how your PC tends to behave. Demonstrating it or struggling against it in play earns XP at End of Session. It can change any time it feels right (and you're prompted to review it at Level Up).

### END OF SESSION (p. 232)
When a session ends:
1. Point out how you demonstrated or struggled with your **instinct** — if you can, **mark XP**.
2. Say how your relationship with or opinion of a PC, NPC, or group has changed — if you can, **mark XP**.
3. As a group, answer these; for each **"yes," everyone marks XP**:
   - Did we learn more about the world or its history?
   - Did we defeat a threat to Stonetop or the region?
   - Did we improve our standing with our neighbors?
   - Did we make a lasting improvement to Stonetop, or tangible progress toward doing so?
4. Praise something about the session you enjoyed.
5. Offer a wish for future sessions (more __, less __, a chance to __, etc.). The GM takes notes.

**→ Website note:** Track XP per PC, level, and the leveling threshold (6 + 2×level). An End-of-Session helper could walk the group through the instinct/relationship/group questions and auto-suggest XP marks.

---

## Character Creation (overview) (pp. 50–57)

Every PC has a **playbook** (one of nine standard playbooks, starting p. 103); no two players use the same one. Make characters together during the first session. Each playbook covers: **Background** (one of three; carries benefits), **Instinct**, **Appearance**, **Place of origin and name**, **Stats**, **Playbook moves** (start with 3–4), and **Special possessions**. Playbooks also have a damage die, boxes for HP/armor/XP/level, debility spaces, worldbuilding prompts, and an **Introductions** procedure (run during the first session). Each playbook comes with an **insert** (e.g., Inventory; or Crew, Initiates, Animal Companion, invocations) (pp. 56–57).

**→ Website note:** A character creator must model: playbook selection (unique per player), background, instinct, appearance, origin/name lists, the stat array, playbook moves (some without triggers), special possessions, damage die, and HP/armor/XP/level/debility tracking.

---

## Followers (pp. 64–65)

A **follower** is an NPC who takes your orders. Followers are still NPCs (the GM ultimately controls them), but they generally do as you say, can accumulate **Loyalty**, and can trigger moves on your behalf. Sources include the Marshal's crew, the Blessed's Initiates, the Ranger's Animal Companion, dogs taken as Special Possessions, certain Seeker arcana, or any PC gaining them in play.

Follower stats: **tags** (e.g., *warrior, stubborn, tall*), **damage / HP / armor** (same rules as PCs), an **instinct** (how they cause trouble), optional **GM moves**, and a **cost** (what keeps them following). A follower with the **group** tag is multiple individuals sharing stats and a Loyalty pool but with individual HP.

- **ORDER FOLLOWERS (p. 462):** When you direct a follower to do something that triggers a player move and they do it, **you roll for them**. Instead of +STAT: **+1** if they have ≥1 relevant tag/move (**+2** if also exceptional); **+0** if no relevant tag/move; roll with **disadvantage** if any tag gets in the way. Without orders, the GM says what they do.
- **STRENGTHEN YOUR BOND (p. 464):** When you pay a follower's cost (and haven't recently), they hold **+1 Loyalty (max 3)**. Spend Loyalty 1-for-1 to have them overcome fear, resist their instinct/tags/traits, or do something they don't want to (not abhorrent or suicidal).

---

## The Steading (Stonetop) (pp. 64–69)

Stonetop is the village every PC lives in or near. It has its own **steading playbook** (a living document, reproduced p. 154).

### Size (p. 65)
hamlet (<50), **village** (150–350; Stonetop starts here, ~300 souls), town (500–1500), city (2500+). Becoming a town grants advantage to Muster, Pull Together, and Trade & Barter; becoming a hamlet gives disadvantage.

### Steading Stats (p. 66)
Four stats, range **-1 to +3**:
- **Fortunes** — morale/cohesion/"how it's going." Starts at **+1**; changes often; reset each season. Roll +Fortunes for Seasons Change and Requisition.
- **Population** — able bodies relative to Size. Starts **+0**. Add to Muster / Pull Together, but also to Surplus consumed each winter.
- **Prosperity** — quality/variety of goods. Starts **+0**. Roll +Prosperity to Trade & Barter; add to supply uses, HP regained on Recover, and the piercing value of iron weapons.
- **Defenses** — martial readiness. Starts **+0**. Roll +Defenses to Deploy.

### Steading Debilities (p. 66)
- **Diminished** — disadvantage to Deploy, Muster, Pull Together.
- **Lacking** — treat Prosperity as 1 lower.
- **Malcontent** — Fortunes reset to +0 (not +1) each season; folks need Persuading more often.

### Surplus (p. 67)
Food, livestock, whisky, furs — an accumulating/spendable resource. Stonetop starts with **1 Surplus** (no upper limit). Generated each summer and autumn; consumed each winter (1d4 + Population). Also: **resources & fortifications**, **places of interest**, **improvements** (p. 68; meet requirements for benefits, some with ongoing costs), **assets** (commonly owned items and coin boxes; Requisition to take on an expedition), and **NPCs** (Residents and Notable neighbors, each with name, pronouns, occupation, trait, relationships).

**→ Website note:** The steading is shared persistent state: four stats (-1…+3), three debility flags, Size, Surplus count, coin totals, lists of resources/fortifications/improvements/assets/places, and an NPC roster (good candidate for a relationship map / spreadsheet / wiki, per p. 69).

---

## Domain & Downtime Moves

### Follower / Expedition Moves (pp. 76–79)
- **CHART A COURSE (p. 302):** Name/describe a destination; the GM tells you what's required, the risks, and how long it'll take, then presents challenges one at a time until you arrive.
- **OUTFIT (p. 306):** Prepare for an expedition in a friendly community; mark inventory loads (≤3 ▲ = light, 4–6 = normal, 7–9 = heavy) and **4 + Prosperity** small items.
- **REQUISITION (p. 308):** Borrow the steading's assets; roll **+Fortunes**: **10+** go ahead (bring it back); **7–9** you must do some convincing; **6−** don't mark XP — take it anyway only by reducing Fortunes by 1.
- **HAVE WHAT YOU NEED (p. 326):** Decide you had an item all along; transfer an "undefined" inventory mark to a specific item/slot (or expend a use of supplies for an extra). It must be something you plausibly could have had; any player can veto.
- **KEEP COMPANY (p. 332):** When you spend a stretch of time together, take turns asking PC/NPC relationship questions.
- **FORAGE (p. 336):** Spend a few hours seeking food; roll **+WIS** (disadvantage in winter): **10+** pick 2, **7–9** pick 1 (acquire provisions, extra provisions, discover something useful, or avoid danger).
- **RETURN TRIUMPHANT (p. 339):** When you return home in triumph, clear one steading debility (or, if none, increase Fortunes by 1).

### Homefront Moves (pp. 80–85)
- **BOLSTER (p. 524):** Prepare/seek the gods' favor; hold **Preparation** by time invested (week ≈ 1, month ≈ 2, season ≈ 3). Spend 1 to add +1 to an applicable roll after it's made (max +1 per roll).
- **DEPLOY (p. 526):** Send the steading's people into danger; roll **+Defenses**.
- **LEVEL UP (p. 528):** see [Advancement](#level--leveling-up-pp-54-81).
- **MAKE A PLAN (p. 530):** When you want to accomplish a project but aren't sure how, the GM tells you what's required (recurse as needed).
- **MEET WITH DISASTER (p. 532):** Reduce Fortunes by 1 (min −1); if it would drop below −1, the GM picks a worse consequence (a debility or losing Population) instead.
- **MUSTER (p. 534):** Press every able body into defense; reduce Fortunes by 1 and roll **+Population** (7+ readied; 10+ pick 2 / 7–9 pick 1 of the perks, including possibly not reducing Fortunes).
- **PULL TOGETHER (p. 536):** Set the community to work on improvements/resources/repairs; spend what's required and roll **+Population** (10+ done; 7–9 pick a complication).
- **TRADE & BARTER (p. 540):** Acquire/sell a special item; roll **+Prosperity** minus the item's Value (disadvantage in winter). On a 6−, don't mark XP.
- **SEASONS CHANGE (p. 516):** Each season, a chosen player rolls **+Fortunes** for seasonal gains/threats; the steading generates Surplus in summer/autumn and **consumes** Surplus in winter (1d4 + Population). Whatever the result, reset Fortunes to +1.

---

## Gear & Possessions (pp. 86–97)

You track only your **current inventory** (what's on your person now) and your **special possessions** (p. 86). Common items printed on the Inventory insert are freely available; blanks hold other common items or special possessions.

### Load (p. 87)
Count marked ▲/◆ items: **≤3** light (quick, quiet), **4–6** normal, **7–9** heavy (noisy, slow, hot, quick to tire). 10+ or something very heavy risks exhaustion/injury. Load has no fixed bonus/penalty — it's **fictional positioning**. **Small items** (fit in a pocket/pouch/boot) don't count toward load; you start with **4 + Prosperity** of them.

### Supplies & Provisions (pp. 88–89)
A ▲ of **supplies** holds **4 + Prosperity uses**. Use supplies to Recover, Make Camp, produce extra small items (Have What You Need), and feed yourself (1 use/person/day; a mess kit covers 4). **Provisions** (from Forage or harvesting) substitute for supplies when you Make Camp but spoil/attract beasts more readily. **Undefined** inventory marks let you decide gear later.

### Special Possessions & Trade (pp. 90–93)
Special possessions are things you own that others don't. Singular items ("a boiled leather cuirass") are your only one; plural/general items can be remade. Items with **uses** are finite. To acquire/sell a special item you must **Trade & Barter**; commonly-available items don't require a roll.

### Value & Coins (pp. 92–93)
Items have a **Value 0–4** (roughly logarithmic — one Value 2 ≈ a dozen Value 1; three Value 1 items are just that, not Value 3). Stonetop has no common currency; coin is used mainly with outsiders. Abstractions: an individual coin, a **handful** (~10 coins), and a **purse** (~10 handfuls ≈ 100). One **silver** ≈ a purse of coppers (Value 0); one **gold** ≈ a purse of silvers (Value 2).

### Gear Terms & Tags (pp. 94–95)
*Italic* terms are **tags** (fictional positioning only). Regular terms are mechanical: **[n] armor** (subtract n, no stack), **+1 armor** (stacks), **+[n] damage**, **[n] piercing** (ignore n armor; "x piercing" = current Prosperity), **forceful**, **messy**, **dangerous**, **awkward**, **crude**, **cumbersome**, **fragile**, **hours/uses** (track marks), **reload**, **thrown**, **requires ___**, **immobile**, **slow**, **warm**. **Range tags:** hand, close, reach, near, far. **Ammo statuses:** plenty left → low ammo → all out.

**→ Website note:** An inventory/outfitting feature should model load slots (▲/◆) with light/normal/heavy thresholds, small-item count (4 + Prosperity), supplies uses (4 + Prosperity), undefined marks, item tags/mechanical terms, ammo statuses, and a Value (0–4) field per item for Trade & Barter.

---

## "If You Want To…" Quick Index (pp. 98–101)

A practical index of common goals and how to pursue them: increase **Fortunes** (Return Triumphant; Fortunes-boosting improvements), gain **Surplus** (seasonal gains, big-game expeditions, trade), improve **Defenses** (Palisade, Stone Wall, Standing Watch, Well-Trained Militia, Weapons of War), increase **Population** (seasonal gain or bring people back), improve **Prosperity** (Expanded Trades, Market, Township), unlock steading improvements, get coin (Trade & Barter, trade missions, loot), find/unlock **arcana** (Know Things, explore ruins, seasonal news), and **recruit followers** (Persuade, Muster, or hire in bigger towns).

---

**Source:** Stonetop Book I, "Playing the Game" (pp. 35–101).
