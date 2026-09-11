# Playbook audit against Book I (2026-09-11)

Each playbook's data in `playbooks.js` (and the `SPBS`/`PBX` tables in `index.html`) was compared line by line with Book I pp.103–146 by one auditor per playbook. Fixes marked as applied were written into the data by the audit's op list; findings without ops were handled by hand (either/or starting moves, the "From the playbook" sections) or noted as out of scope.


## The Blessed (pp.105-108) — 13 findings
The Blessed is transcribed accurately: vitals (HP 18, d6, +2/+1/+1/+0/+0/-1), all five instincts, all three backgrounds and what they grant, all 23 moves with correct starting/level-6 flags and requires lines, the five possessions, the Stock max and the initiate roster's HP/armor all match pp.105-108 and p.145. The gaps are a missing Favor tracker (Rites of the Land has a 4-box hold on the sheet), the Collected offerings use count (3) dropped to 'Has uses', a Stock note without the +1-per-even-level / replenish / Forage rules, two gists that misstate who chooses (Danu's Grasp: the target picks on a 7-9) or which debility (Rites of the Land: a steading debility), and the sacred-pouch, shrine and initiate-detail choice lists that the site does not store.

- **high** · possessions · Collected offerings has no use count; the sheet prints 3 use circles (p.107)
  - site: gist: 'Has uses; expend a use ...'
  - book: 'Collected offerings (OOO uses)' - three use boxes; expend a use to produce something valuable to a spirit of the wild; restore 1 use each season
- **high** · resources · No Favor track; Rites of the Land has a 4-circle Favor hold on the sheet (p.106)
  - site: resources: Stock only
  - book: Rites of the Land shows OOOO next to its name: once per season hold 1 Favor (4 if you also sacrifice 1 Surplus); spend Favor in lieu of Stock, 1-for-1
- **medium** · resources · Stock note omits the pouch rules: max grows +1 at each even level (and +2 per Big Magic), replenish in downtime, Forage can yield Stock, ruined if anyone else touches it (p.108)
  - site: max 3; note: 'Magical reagents held in your sacred pouch, spent to fuel many Blessed moves.'
  - book: Sacred pouch holds up to 3 Stock; each even-numbered level +1 Stock; replenish with a few days of downtime in familiar terrain; when you Forage you can produce Stock instead of provisions; Stock is ruined if anyone but you looks inside and touches the materials
- **medium** · moves · Danu's Grasp gist implies the Blessed picks the effect; the book has the target pick on a 7-9, and omits the restraint's end condition (p.106)
  - site: '...pick 1 (10+ both): restrained, or 2d4 ignore-armor damage. At 0 HP it's bound in rune-etched stone.'
  - book: on a 7-9, roots, vines and earth pull at them and THEY pick 1; on a 10+ both apply: restrained until your focus slips or they tear free / 2d4 damage ignoring armor; at 0 HP pulled into the earth and bound in rune-etched stone
- **medium** · moves · Rites of the Land gist says 'clear a debility' - the book says a steading debility (and the sacrifice must be public) (p.106)
  - site: 'Sacrifice the much-loved to clear a debility or aid Fortunes.'
  - book: When you publicly sacrifice something or someone much-loved, either clear a steading debility or gain advantage when the steading next rolls +Fortunes
- **medium** · followers · Initiates insert note carries only HP/armor; the insert's tags, damage, instinct, moves and cost for each initiate (and Afon's '0 vs. iron') are not stored, so the follower sub-form can't be pre-filled (p.145)
  - site: note lists Enfys HP 6, Afon HP 8 Armor 2, Gwendyl HP 6, Olwin HP 6 Armor 1, Seren HP 3
  - book: Enfys (bird-wise, innocent, magical, well-informed; HP 6; Armor 0; bronze knife d4 hand; instinct to get distracted; cost knowledge, secret lore). Afon (Fae-wise, devious, magical, self-sufficient, stealthy; HP 8; Armor 2, 0 vs. iron; bronze hatchet d6 hand; instinct to act impulsively; cost wonder, joy). Gwendyl (herb-wise, gossipy, tireless, healer, magical; HP 6; Armor 0; iron knife d6 hand; instinct to take offense; cost consideration, affection). Olwin (fates-wise, beautiful, passionate, magical; HP 6; Armor 1 shield; iron spear d6 close, thrown; instinct to lack discretion; cost tenderness, respect). Seren the Eldest (exceptional, story-wise, insightful, frail, magical; HP 3; Armor 0; walking stick d4 close; instinct to hew to tradition; cost deference, good sense shown). Each has 'pick 1 on each line' detail choices and a Loyalty track (max 3).
- **low** · moves · Shared Souls gist drops the ending condition (p.107)
  - site: '...treat as a 3-Loyalty follower.'
  - book: Treat it as a follower with 3 Loyalty; when you spend its last Loyalty, the effect ends
- **low** · moves · Veil gist omits the impersonation condition (p.107)
  - site: '...or you appear as someone else.'
  - book: People perceive you as someone else, though you must wear something of an individual's in order to impersonate them
- **low** · moves · Wild Soul requires level 2+ (and the Blessed) but is encoded level 1 like the other 2-5 moves; the gist carries the requirement. Seven of eight playbooks encode their 'level 2+' cross-class move this way (only the Hero's Versatile uses level 2), so this is a site-wide convention choice rather than a Blessed error (p.107)
  - site: level: 1; gist 'Requires level 2+...'
  - book: (Requires level 2+ and the Blessed) Each time you take this move, gain a Ranger move of your choice for which you qualify. You can't pick Improved Stat or Superior Stat.  
  - (no automatic fix)
- **low** · possessions · Item named 'Goatherd' (a person) - the book's item is 'Goat herd' (p.107)
  - site: name: 'Goatherd'
  - book: 'Goat herd: milk, cheese, pelts, meat, blood, horn, wool, etc.'
- **low** · possessions · Herb garden and Apiary gists drop small details: bendis root 'burns ~1 hr', 'mortars & pestles', and the 1-load diamonds on bee smokers, hat & veils and spades (p.107)
  - site: Herb garden: '...Shears, mortars, herbs... d4 uses of bendis root (reach, area, fumes repel perversions of nature)'; Apiary: '...bee smokers, hats & veils, etc.'
  - book: Herb garden: shears, mortars & pestles, herbs, seeds, remedies, mild poisons, [1 load] spades, etc. Each spring d4 uses of bendis root (reach, area, burns ~1 hr, fumes repel perversions of nature). Apiary: beeswax, candles (close, area, lasts ~1 hr), honey, [1 load] bee smokers, [1 load] hat & veils, etc.
- **low** · backgrounds · Short Initiate blurb in SPBS embellishes ('trained from childhood', 'a mentor') beyond the book (p.105)
  - site: 'Trained from childhood by Danu's circle in Stonetop, with a mentor and fellow devotees as followers.'
  - book: Stonetop has long been home to a sacred order, keepers of the old ways and speakers for Danu. You are one such initiate, the most gifted in generations. Fellow initiates (choose 2 or 3) aid you as followers.
- **low** · other · Playbook choice lists the site does not store at all: the sacred pouch's description lines and its four remarkable traits (Big Magic's 'choose an additional remarkable trait' needs this list), the state of Danu's shrine in the Pavilion of the Gods and the villagers' offerings (p.108), the Blessed's appearance and origin/name lists (p.105), and the Introductions questions (p.108) (p.108)
  - site: none of these fields exist in PBDATA/SPBS/PBX
  - book: Pouch: heirloom/made for you/own work; fur/drakescale/leather/woven/demonflesh; unadorned/beadwork/rich dyes/runes. Remarkable trait (choose 1): can't be cut, torn or burned by natural means; ignored unless specifically searched for; while sealed nothing inside can be detected by magic or escape/affect the outside; unnatural and unclean creatures can't bear to touch it. Shrine: loved and well-used / a token of respect / given wide berth / neglected. Offerings (2-3): fruits of harvest, figurines, whisky, salt, rain water, nails/tools, blood/burnt flesh, incense.  
  - (no automatic fix)

## The Fox (pp.109-112) — 11 findings
Vitals (HP 16, d8, armor 0), the stat array, the five instincts, all 24 moves (names, starting/L6 tiers, requires lines) and all 8 special possessions match Book I pp.109-111, and the move gists are faithful paraphrases. The two real errors are Blessed material copied into the Fox - a sacred-pouch possessions note and a Stock resource the Fox does not have - plus a modeling issue where the editor pre-checks all four either/or starting moves; everything else is wording detail.

- **high** · possessions · possessionsNote gives the Fox a sacred pouch that holds Stock (p.111)
  - site: 'You always have a sacred pouch (holds Stock, no inventory space). Then Pick 2 of the following:'
  - book: 'Special possessions (Pick 2)' - no fixed item, no pouch; the sacred pouch is the Blessed's (p.105). The list ends with a blank '(discuss with GM)' custom line.
- **high** · resources · Stock resource (max 3, 'held in sacred pouch') does not exist for the Fox (p.110)
  - site: resources[0] = {key:'stock', name:'Stock', max:3, note about sacred pouch / Forage}
  - book: The Fox has no Stock, pouch or Forage rule anywhere on pp.109-112; Stock is the Blessed's resource. The only Fox hold is Nerve (Silver Tongued, p.111), which the site already tracks.
- **medium** · moves · All four starting candidates are flagged starting:true, so seedPlaybook pre-checks 4 moves (p.110)
  - site: Ambush, Skill at Arms, Danger Sense and Perceptive all starting:true (the startingNote text is correct)
  - book: 'You start with Ambush OR Skill at Arms; Danger Sense OR Perceptive; and 1 of your choice' - a new Fox has 3 moves, only 2 of them from those pairs.  
  - (no automatic fix)
- **low** · moves · Dabbler tagged level 1 although it requires level 2+ (the Hero's Versatile uses level 2 for the same requirement) (p.110)
  - site: moves[16] Dabbler level:1
  - book: 'DABBLER (Requires level 2+ and the Fox)'
- **low** · moves · Rapier Wit gist misstates the third option and omits that the NPC chooses (p.111)
  - site: '...they must: attack (+1d4 if hit, but gives you advantage), respond in kind, or fume and lose composure.'
  - book: 'they must do 1 (their choice): Attack, doing +1d4 damage if they hit but giving you advantage on your next roll against them; Stoop to your level and respond in kind; Spend a few moments fuming, sputtering, or controlling their temper'
- **low** · moves · Danger Sense gist drops the two questions and the 'nothing bad happens yet' clause on a 6- (p.110)
  - site: '...10+ ask both questions, 7-9 ask 1, gain advantage to act on it; 6- you know but no XP.'
  - book: Questions: 'What will trigger the ambush or trap?' / 'What will happen once it's triggered?'; either way advantage on your next roll to act on the answers; 'On a 6-, don't mark XP; you know there's a trap or ambush, but nothing bad happens just yet.'
- **low** · backgrounds · The Prodigal Returned grants text omits the 7-9 complication list (p.109)
  - site: '...7-9 they help but pick 1 complication; 6- GM picks 1+.'
  - book: 7-9 pick 1: 'They still hold a grudge / They're going to need something from you first / They swore off this sort of thing long ago / You can't exactly, y'know, trust them'; 10+ 'tell us why they're willing'; 6- 'the GM chooses 1 and then some'.
- **low** · possessions · Burglar's kit lantern is missing its hours track (p.111)
  - site: '...a lantern (close area), a grappling hook, etc.'
  - book: 'a lantern (hours, close, area)' - the lantern has hour pips like the other kit items with use boxes
- **low** · resources · All in the Wrist's throwing-blade ammo track has no tracker on the site (p.110)
  - site: Only mentioned inside the move gist; no resource entry, and the blades take no inventory space so Pack & Closet will not list them
  - book: The move header carries an ammo box 'a few left / out'; 'Reset your ammo whenever you Outfit.'  
  - (no automatic fix)
- **low** · instincts · Instinct glosses are not stored (names only) (p.109)
  - site: ['Conscience','Freedom','Comfort','Prestige','Trickery'] - names match exactly
  - book: Each has a one-line gloss: Conscience 'To feel guilty, to try to do right'; Freedom 'To chafe against rules, expectations, obligations'; Comfort 'To enjoy yourself and avoid hardship'; Prestige 'To impress others, to build a name for yourself'; Trickery 'To deceive, misdirect, outthink'.  
  - (no automatic fix)
- **low** · other · Playbook prompt sections absent from the site (p.112)
  - site: Editor has free-text appearance and origin only; no tall tales
  - book: Appearance pick-lists (young pup / 'responsible' adult / cagey old-timer; voice; build; gait), place-of-origin name lists (Stonetop, Barrier Pass, Gordin's Delve, Marshedge, Lygos), and the Tall tales mix-and-match prompts on p.112.  
  - (no automatic fix)

## The Heavy (pp.113-116) — 15 findings
The Heavy's vitals (HP 20, d10, +2/+1/+1/+0/+0/-1), instinct names, three backgrounds, all 27 move names with their level and requires lines, and the six Pick-2 possessions all match the book, and nearly every gist is faithful. The one real rule error is that both Armored and Uncanny Reflexes are flagged as starting moves so a new Heavy is seeded with four moves instead of three; beyond that the Armored gist carries a garbled load glyph, a few gists drop optional/result wording, and the Storm Markings arcanum, Unstoppable's marks track and the book's flavour prompts have no data slot.

- **high** · moves · Both Armored and Uncanny Reflexes are flagged starting:true, so seedPlaybook() pre-checks all four and a new Heavy starts with four moves instead of three (p.114)
  - site: moves[2] Armored starting:true; moves[3] Uncanny Reflexes starting:true (index.html seedPlaybook: c.moves = every move with starting:true)
  - book: 'You start with Dangerous, Hard to Kill, and either Armored OR Uncanny Reflexes.' Only Dangerous and Hard to Kill have pre-checked boxes on the sheet.
- **medium** · moves · Armored gist says 'marks only 4' - the '4' is the text extractor's glyph for the load diamond, so the gist is meaningless as written (p.114)
  - site: Carrying a shield marks only 4; ignore cumbersome on worn armor...
  - book: When you carry a shield, mark only ◆ (instead of ◆◆). Also, you can ignore the cumbersome tag on any armor you wear. If taken at the start of play, add an iron hauberk, bronze cuirass, or scale coat (all 2 armor, warm, cumbersome).
- **low** · moves · Battle Joy gist ends at 'roll +CON when it stops' without saying what the roll does, including the 6- 'don't mark XP' rule (p.114)
  - site: ...roll +CON when it stops.
  - book: When the action stops, roll +CON: 10+ that was a rush, regain 1d4 HP; 7-9 winded and out of it but fine after a few minutes' rest; 6- mark a debility but don't mark XP.
- **low** · moves · Bringer of Ruin gist narrows 'something they possess' to 'a possession' (p.115)
  - site: name a possession of theirs (not lethal); it is broken/shattered/lost.
  - book: name something they possess (like their sword, their position, a limb, their dignity, etc.), but nothing that would kill them outright. Whatever you name, it is broken, shattered, lost. Tell us how.
- **low** · moves · Formidable is opt-in in the book ('you can choose to roll +CHA'); the gist reads as a mandatory roll (p.114)
  - site: Wading into battle, roll +CHA: ...
  - book: When you wade into battle, you can choose to roll +CHA: on a 10+, both; on a 7-9, pick 1 ... On a 6-, pick 1 but ask the GM what you've missed.
- **low** · moves · 'Requires the Heavy' dropped from Dangerous and Seasoned Warrior; Seasoned Warrior's 'different playbook each time' is optional in the book (p.115)
  - site: Dangerous gist has no requires line; Seasoned Warrior: 'Requires level 2+. ... (a different playbook each time)'
  - book: DANGEROUS (Requires the Heavy). SEASONED WARRIOR (Requires level 2+ and the Heavy) ... You can pick from a different playbook each time. (You can't pick Improved Stat or Superior Stat.)
- **low** · resources · Unstoppable's row of marks (damage taken at 0 HP) has no track; resources is empty (p.114)
  - site: resources: []
  - book: UNSTOPPABLE has a row of circles: each time you take damage at 0 HP, mark 1; regain HP while fighting clears a mark; when you stop, roll Death's Door at -1 per circle marked; if you survive, clear all.
- **low** · possessions · Weapons of war gist drops tags: the four melee weapons are close (and iron), the crossbow's piercing is Prosperity-dependent 'x piercing' with low ammo/all out states, and there is a blank custom slot (p.115)
  - site: Sword (+1 dmg); Battleaxe (messy); Warhammer (2 piercing); Mace/flail (forceful); Crossbow (far, +1 dmg, reload, piercing, low ammo).
  - book: Sword, iron (close, +1 damage); Battleaxe, iron (close, messy); Warhammer, iron (close, 2 piercing); Mace or flail, iron (close, forceful); Crossbow (far, +1 damage, reload, x piercing, low ammo, all out); ___ (discuss with GM). Inventory insert p.142: x = 1 piercing at Prosperity +1, 2 at +2.
- **low** · possessions · Load markers on kit items and the whisky uses count are not recorded (p.115)
  - site: possessions store name + gist only; Distillery says 'limited uses'
  - book: Several kit pieces carry a ◆ load marker (firkins, bonesaws, whips, bridles, tongs, bellows, prybars, spikes, block & tackles) and the whisky skins have a fixed row of use circles (count not recoverable from the text extract).  
  - (no automatic fix)
- **low** · possessions · Armored's starting-armor pick (iron hauberk / bronze cuirass / scale coat) has no data slot; it exists only as a sentence in the move gist (p.114)
  - site: no possession or option for the armor; gear.js has one combined s_hauberk entry for Pack & Closet
  - book: If you take this move at the start of play, add an iron hauberk, bronze cuirass, or scale coat to your inventory (all are 2 armor, warm, cumbersome).  
  - (no automatic fix)
- **low** · backgrounds · Blood-Soaked Past: the +STR and +CON substitutions are optional in the book ('can roll ... instead of +CHA'); the damage bonus trigger is 'fight to kill without mercy or hesitation' (p.113)
  - site: Persuade with violence/threats vs. those who know your reputation rolls +STR; Formidable can roll +CON; killing without mercy deals +1d4 damage.
  - book: When you Persuade using violence or threats against someone who knows your black reputation, you can roll +STR instead of +CHA. Also, if you take Formidable, you can choose to roll +CON instead of +CHA. When you fight to kill without mercy or hesitation, you deal +1d4 damage.
- **low** · other · Storm-Marked grants the Storm Markings major arcanum but PBDATA.heavy has no arcana key, so the editor's Arcana checklist never appears for a Heavy (p.113)
  - site: no 'arcana' key (the Seeker has one; the editor renders the section whenever P.arcana exists, index.html ~line 2262); arcana.js already holds Storm Markings as major #14 (Book II p.566)
  - book: You start with the Storm Markings major arcanum. Mark one of the boxes on the front of the Storm Markings sheet (p.113). p.141: the Heavy with Storm-marked starts with the Storm Markings major arcanum, found in Book II Appendix D.
  - note: set on new key ["arcana"]
- **low** · instincts · Instinct names match but the book's one-line wording for each is not stored (p.113)
  - site: instincts: ["Peace","Pride","Recklessness","Trouble","Violence"]
  - book: Peace: to avoid (further) bloodshed or violence. Pride: to maintain your dignity, to demand respect. Recklessness: to act without thought to the consequences. Trouble: to stick your nose in where it's unwelcome. Violence: to solve problems by force.  
  - (no automatic fix)
- **low** · other · Playbook prompts not stored: appearance options, place-of-origin name lists, 'A history of violence' / 'less keen to discuss' / 'What keeps you up at night' picks, and the Introductions questions (p.116)
  - site: editor has free-text appearance/origin fields only
  - book: p.113 appearance (young & brash / in my prime / old & leathery; gravelly / hearty / soft-spoken; giant frame / just ripped / stocky / wiry; distinctive scars / oft-broken nose / missing bits) and origin name lists; p.116 three pick-1-or-2 prompt lists, four NPC questions and four fellow-PC questions.  
  - (no automatic fix)
- **low** · other · PBX.gear hint reads as if Weapons of war is always included (p.115)
  - site: Pick 2 possessions (incl. Weapons of war)
  - book: Special possessions (Pick 2): six options, one of which is Weapons of war (choose up to 3 weapons, now or later).

## The Would-Be Hero (pp.137-140) — 14 findings
The site's Would-be Hero is structurally accurate: all 22 moves (16 starting-level, Versatile at 2+, five at 6+/after Potential for Greatness), the fixed-two-plus-two starting rule, the +1/+0/+0/+0/+0/-1 array, HP 16, d6, 0 armor, all five instincts, all three backgrounds and all seven pick-2 possessions match Book I pp.137-139, with no high-severity errors. The discrepancies are in the summaries: the Destined/Omens text never says a 7+ spends all Omens (or grants the 10+ follow-up question), the Potential for Greatness resource is described as a level-up boon when it is marked on a 10+ roll once per level, I Get Knocked Down reads as mandatory when it is optional, a few 6+ gists drop qualifying clauses, and the whole Fear & Anger page (p.140) that Anger is a Gift depends on is absent.

- **medium** · other · The Fear & Anger section (back of the playbook, p.140) is missing entirely, although Anger is a Gift keys off it (p.140)
  - site: No fields or lists for fears, anger triggers, or the three follow-up questions; the Anger is a Gift gist does not mention the section
  - book: "What do you fear most? (choose 1, maybe 2)": fire/burning/charred flesh; that they won't take you seriously; that you really aren't cut out for this; death of family or loved ones; being alone and helpless; violence, bloodshed and pain; monsters; what you're capable of; what you must do. "What makes you burn with righteous anger? (choose 2, maybe 3)": bullying/slavery/oppression; wanton cruelty and unnecessary suffering; injustice and inequality; cowardice/treachery/selfishness; the despoiling of beauty and innocence; threats to your loved ones; violence to children/animals/the innocent; perversions of nature. Then: when did your fear or anger last cause you trouble, what did you do, how did it turn out. Anger is a Gift says "When you burn with righteous anger (see Fear & Anger on back of playbook)".  
  - (no automatic fix)
- **medium** · backgrounds · Destined / Omens: the site never says a 7+ loses all Omens or that a 10+ adds a follow-up question, so the resource reads as if it only ever climbs (p.137)
  - site: grants: "Grants the Omens resource: at session start roll +Omens for visions/portents; 6- holds +1 Omen and forfeits XP."; resources.omens note: "Destined background only; roll +Omens at session start; hold +1 on a 6-."
  - book: At the start of a session, roll +Omens: on a 7+, lose all Omens and the GM describes a vision or portent that points toward your fate and/or clarifies your situation; also on a 10+, ask the GM a follow-up question and get a clear, helpful answer; on a 6-, don't mark XP, hold +1 Omen, and tell of your recent nightmares or a troubling vision and how your fears play into them. Until your destiny is fulfilled, treat a 6- on Death's Door as a 7-9 and a 7-9 as a 10+.
- **medium** · resources · Potential for Greatness resource note calls the boxes "level-up boons"; they are marked on a 10+ stat roll, once per level, not when you level up, and the book asks you to note the level of each mark (p.138)
  - site: resources.potential note: "6-box one-time level-up boons"
  - book: Once per level, when you roll a stat and get a 10+, mark one of the following (note the level during which you marked it). You don't have to mark them in order: 4x increase the stat you rolled by 1 (max +2); increase max HP by 4; increase damage die to d8.
- **medium** · moves · I Get Knocked Down gist reads as mandatory; the book makes halving the damage a choice (p.138)
  - site: "When you take damage despite your best efforts to avoid it, halve the damage but pick 1: ..."
  - book: "...you can choose to halve the damage but pick 1 of the following: you lose something (footing, grip, etc.); something on your person breaks; you're out of it for a moment. Whatever you choose, the GM will describe the details."
- **low** · backgrounds · Impetuous Youth grants omits the third tier (10-11 into 12+) and that the GM fills in the cost's details (p.137)
  - site: "When you come up short, give it your all to bump a roll up one tier (6- to 7-9, etc.), but pick 1 cost: get hurt (2d4 + injury); collateral damage/escalation; something lost or broken."
  - book: When you make a move and come up short, you can give it your all and turn a 6- into a 7-9, a 7-9 into a 10+, and (if it matters) a 10-11 into a 12+. But if you do, pick 1 (the GM will fill in the details): you get hurt (2d4 damage and an actual injury); you cause collateral damage, endanger others, or otherwise escalate the situation; something on your person is lost or breaks.
- **low** · backgrounds · Driven and Destined tell the player to choose but omit the book's choice lists (5 Driven events; 24 Destined destiny words) (p.137)
  - site: Driven desc ends "Choose 1 trigger event."; Destined desc says "Choose 3-4 destiny descriptors." with no options
  - book: Driven, choose 1: a loved one was killed or abducted; someone gave their life to save you; your idol sacrificed themselves to save many; you stumbled upon a dark mystery; you must make amends for a terrible mistake. Destined, choose 3-4: anointed, marked at birth, your coming foretold, destroy, discover, free, protect, restore, unify, blood, civilization, darkness, earth & stone, fire, ice, light, life, storms, war, water, the Fae, the gods, the Makers, the Stone, the Things Below.
- **low** · moves · Up With People gist drops that holding Rapport is optional, that either party can spend it, and two of the four questions (p.139)
  - site: "When you converse with someone, hold 2 Rapport; they hold 1 with you. Spend 1 Rapport to ask them an honest question (what holds you back, drives you, etc.)."
  - book: When you converse with someone (PC or NPC) you can hold 2 Rapport with them. If you do, they hold 1 Rapport with you. During the conversation, either of you can spend 1 Rapport to ask the other player one of: What weighs you down or holds you back? What drives you forward? What lesson would you have me learn? What do you think of me, truly? -- and get an honest answer.
- **low** · moves · Versatile gist "(different one each time)" reads as a restriction; the book only permits a different playbook each time (p.139)
  - site: "...Choose a move from any other playbook you qualify for (different one each time). Can't take Improved Stat or Superior Stat."
  - book: (Requires level 2+, the Would-be Hero) Choose a move from any other playbook, as long as you meet its requirements. You can pick from a different playbook each time. You can't take Improved Stat or Superior Stat.
- **low** · moves · Big Damn Hero gist omits that the lock-eyes disadvantage covers you and your ward for the rest of the fight (p.139)
  - site: "...spend 1 Readiness to lock eyes, giving attacker disadvantage on damage."
  - book: When you first leap into danger to protect someone, don't roll to Defend; treat it as a 10+. When you Defend, you can spend 1 Readiness to lock eyes with an attacker; they have disadvantage on damage rolls against you and your ward for the rest of the fight.
- **low** · moves · Voice of Experience gist says PCs who follow your advice "get advantage"; the book limits it to their first roll to follow it, and only when they came to you for advice (p.139)
  - site: "...PCs who follow your advice get advantage; when you Seek Insight you can always ask 'What is about to happen?' free, even on 6-."
  - book: When another PC comes to you for advice and you tell them what you think is best, they have advantage on their first roll to follow your advice. When you Seek Insight, you can always ask "What is about to happen?" for free, even on a 6-.
- **low** · moves · Superior Stat is tagged level 6 (L6 badge) but the Hero's version has no level requirement, only the six Potential for Greatness marks (p.139)
  - site: moves[17] level: 6 (gist correctly says "Requires all 6 marks in Potential for Greatness")
  - book: SUPERIOR STAT (Requires all 6 marks in Potential for Greatness). No level line, unlike every other playbook's "Requires level 6+". In practice one mark per level means the sixth mark cannot land before level 6, so the badge is harmless but not what the book says.  
  - (no automatic fix)
- **low** · resources · Resolve max 3 and Omens max 6 are site inventions; the book states no maximum for either (p.138)
  - site: resources.resolve max 3; resources.omens max 6
  - book: Anger is a Gift: "hold 2 Resolve"; Speak Truth to Power: "If they refuse, gain +1 Resolve"; Destined: "hold +1 Omen" per 6- session start, "lose all Omens" on a 7+. No cap given for either.  
  - (no automatic fix)
- **low** · other · Playbook name capitalised "Would-Be" in PBDATA and SPBS; the book writes "Would-be" (p.137)
  - site: PBDATA.hero.name and SPBS.hero.name: "The Would-Be Hero" (the move gists already write "Would-be")
  - book: "The Would-be Hero" throughout (pp.104, 137, 138, 139, index).
- **low** · instincts · Front-page prompts are stored as names only: instinct descriptions, appearance options, origin/name lists and the Hero's Introduction questions are absent (p.137)
  - site: instincts: five bare names; no appearance, origin or introduction data
  - book: Defiance: to refuse to back down, give up, give in. Doubt: to question yourself, your actions, your worth. Earnestness: to prove yourself, to yourself and others. Optimism: to assume the best, and that things are simple. Sacrifice: to put the needs/wants of others above your own. Appearance lines (still a child / young & beautiful / all grown up; confident / earnest / quiet voice; big / scrawny / sinewy / slender / thick; back unbowed / jaw firmly set / soulful eyes); origin name lists for Stonetop, Barrier Pass, Steplands, Gordin's Delve, Marshedge, Lygos; Introductions step 4 (whose heart do you hope to win; who is counting on you; who quietly understands the path you are on; who do you intend to prove wrong) and step 6 (closest truest friend; believes in me despite it all; promised to teach me; have I hurt).  
  - (no automatic fix)

## The Judge (pp.117-120) — 10 findings
The site's Judge is very accurate: all 27 moves (with the right starting/level-6 split and requires lines), the 3 backgrounds, 5 instincts, HP 20 / d6 / armor 0 / standard array, and the symbol-of-authority + scribe's tools + pick-1 possessions all match pp.117-119. The real errors are the Armored gist (it reads the shield's load glyphs as '4 armor'), an invented cap of 3 on Diligence, the Missionary background omitting the fixed Neighbors (Devin, Haeris) and the pick-2 name list, and the absence of the p.120 Chronicle and Lawkeeper creation sections.

- **medium** · moves · Armored gist misreads the shield's load glyphs as armor values (p.118)
  - site: "Carrying a shield, mark only 4 armor instead of 4/4; ignore cumbersome on worn armor. If taken at start, add an iron hauberk, bronze cuirass, or scale coat."
  - book: "When you carry a shield, mark only ◆ (instead of ◆◆). Also, you can ignore the cumbersome tag on any armor you wear. If you take this move at the start of play, add an iron hauberk, bronze cuirass, or scale coat to your inventory (all are 2 armor, warm, cumbersome)." The '4' in the extracted text is the ◆ load pip (a shield is a ◆◆ / 2-load item, cf. gear.js Shield load:2); the move halves the shield's load, it has nothing to do with '4 armor'. The site also drops the granted armor's stats.
- **medium** · resources · Diligence is capped at 3 on the site; the book states no maximum (p.118)
  - site: resources[0] = Diligence, max 3 (the editor's stepper refuses to go above 3)
  - book: "When you write up detailed session notes and share them with the other players, hold +1 Diligence. You can spend 1 Diligence at any time to add +1 to a roll that you or a fellow player just made." No cap is given (the book states caps explicitly when they exist, e.g. Loyalty '(max 3)'). The site already uses max 0 to mean 'uncapped' for the Lightbearer's Blessing.
- **medium** · backgrounds · Missionary omits the two Judges always added to Neighbors and the list you pick 2 more from (p.117)
  - site: desc: "... Add 2 more order Judges to the steading's Neighbors."
  - book: "Add these Judges to the Neighbors section of the steading playbook (pick 2 more):" Devin (from Marshedge) and Haeris (from Gordin's Delve) are pre-checked; pick 2 more from Isalde (from the Manmarch), Rahat (from Lygos), Tejisha (from Barrier Pass), Unz (from the Hillfolk). So four order Judges join the Neighbors, two of them fixed. (The grants text is otherwise right; the book adds that when you send a message by bird the GM tells you if/when a reply comes and what it says.)
- **medium** · other · The Chronicle and The Lawkeeper creation sections (p.120) are not modeled at all (p.120)
  - site: Nothing: PBDATA.judge has no field for the Chronicle's structure or Aratis's shrine/demands; the Village Sheet's Places of Interest is unaware of the Chronicle.
  - book: The Chronicle is 'more than a mere book; it is a physical place. Decide on its physical structure.' Pluses (choose 3): sturdy Maker vault / plenty of room to grow / hidden underground / one magically sealed entrance / minor preserving magics / warded against spirits and magic / includes your living quarters & office. Minuses (choose 2): on the outskirts near the Old Wall / cramped, chaotic, overflowing / little more than a crude cellar / seems haunted / contains a few dangerous artifacts. 'Mark the location of the Chronicle on the Stonetop Playbook map.' The Lawkeeper: Aratis's shrine in the Pavilion of the Gods is (pick 1): a community hub / used only on high holidays / neglected, tended by you and a few / a grim place of judgement / newly established, cramped and spare; of her true disciples Aratis demands (choose 3): truth, honesty, forthrightness / hospitality freely given / punishment of thieves & oathbreakers / strict rules of diet and dress / respect for authority, property, and rank. Introductions step 3 has the Judge describe both. No existing playbook models its page-4 section, so no op is proposed; a `sections` array of {title, choose, options[]} (or a Chronicle entry seeded into the Village Sheet's Places of Interest) would cover it.  
  - (no automatic fix)
- **low** · moves · Condemn gist says the brand is 'unremovable'; the book says it can't be removed or hidden until the Judge dismisses it (p.119)
  - site: "... they're marked with an unremovable mystical brand; any intelligent creature recognizes the bearer as an agent of chaos."
  - book: "they are marked with a mystical brand that cannot be removed or hidden until you dismiss it. Any intelligent creature who sees the mark recognizes the bearer as an agent of chaos and anathema to civilization."
- **low** · moves · Castigate is a level 2+ move but its level field is 1 (p.118)
  - site: Castigate: level 1 (the gist does say 'Requires Censure (level 2+)')
  - book: "CASTIGATE (Requires level 2+, Censure)". The site's Would-be Hero uses level 2 for its level-2+ move (Versatile), so the field can carry it; most other playbooks leave such moves at level 1 with the requirement only in the gist, so this is a consistency nit.
- **low** · possessions · The blank '____ (discuss with GM)' pick-1 option is missing (p.119)
  - site: Pick-1 list: Aviary, Carpenter's tools, Engineer's tools, Smithy (or access to it)
  - book: The pick-1 list ends with a blank line '____ (discuss with GM)'. The Ranger's site data includes this option as an item, so the Judge should too.
- **low** · backgrounds · Legacy's Chronicle research promises 'the answer'; the book only promises what you learn (p.117)
  - site: grants: "... Spend days/weeks/months poring over the Chronicle to ask the GM a question and learn the answer."
  - book: "When you spend days, weeks, or months poring over the Chronicle, ask the GM a question, and the GM will tell you what you learn in that time." (The Chronicle 'has no index, so good luck finding anything'.)
- **low** · resources · Sanction's max of 2 is the amount gained, not a stated cap (p.117)
  - site: resources[1] = Sanction, max 2
  - book: Prophet: "on a 10+, you also hold 2 Sanction. While acting on her orders, spend 1 Sanction to add +1 to a roll you just made." No maximum is stated; 2 is what one 10+ grants. Harmless in practice (you commune about one threat at a time), so left as is; the note is accurate.  
  - (no automatic fix)
- **low** · other · Appearance options, origin name lists and the Introductions script are not stored (site uses free text) (p.117)
  - site: Free-text appearance/origin fields; no Introductions prompts
  - book: Appearance (choose 1 per line): eager youth / in my prime / showing my years; calm voice / booming voice / a voice that carries; hard body / powerful frame / slim / well-fed; polished gear / robes of office / modest clothes. Origin names for Stonetop, Barrier Pass, Gordin's Delve, Marshedge, Lygos. Introductions steps 1-8 (kin, lover, apprentice, wisest elder; which PC is a true disciple / closest confidant / stood beside you against chaos / you passed judgement on). Same gap for every playbook; no op proposed.  
  - (no automatic fix)

## The Lightbearer (pp.121-124) — 9 findings
The site's Lightbearer is accurate: all 24 moves (17 available from start, 7 level-6+), 3 backgrounds, 5 instincts, 8 possessions, vitals (HP 18, d4, 0 armor, standard array) and all 10 invocations match the book by name, tier, requirement and effect. The one substantive gap is that the Invocations insert's rules (start knowing 2, learn 1 more at each even level, one ongoing at a time, range = light source, ends if the light goes out) appear nowhere on the site; beyond that only a missing tracker for the Auspicious Birth circle and a few wording nits.

- **high** · invocations · Site never states how many Invocations are known at start or how more are learned, nor the insert's usage rules (p.146)
  - site: invocations[] is a bare checklist of 10; the only hint text is 'Holy-light invocations you know (used with Invoke the Sun God)' (index.html ~line 2259); no note field in PBDATA
  - book: Invocations insert: 'Lightbearer, you start knowing 2 Invocations. Each time you reach an even-numbered level, learn 1 new Invocation. While one Invocation is ongoing, you can't use another. You can end an Invocation whenever you wish, and it will end immediately if your holy light is extinguished. An invocation's range is equal to that of its light source.'
- **medium** · resources · No tracker for the Auspicious Birth background's circle (p.121)
  - site: resources[] has Enigma (Itinerant Mystic) and Blessing (Piety) only; nothing for Auspicious Birth
  - book: Auspicious Birth: 'When one of your moves has you mark a debility, you may mark this background's circle instead, to no ill effect. Clear it when you Make Camp or Convalesce.' — a single box that gets marked and cleared
- **low** · backgrounds · Auspicious Birth grants text drops 'one of your moves' — the swap only applies to the Lightbearer's own moves (e.g. an Invoke the Sun God consequence), not any move (p.121)
  - site: 'When a move has you mark a debility, you may mark this background's circle instead...'
  - book: 'When one of your moves has you mark a debility, you may mark this background's circle instead, to no ill effect. Clear it when you Make Camp or Convalesce.'
- **low** · moves · All Is Illuminated gist omits the four questions, which are the operative content of the move (p.122)
  - site: '...10+ ask 1 listed question plus ...; 7-9 ask 1 listed question' with no list
  - book: Questions: Of what are they most ashamed? What do they most desire or covet? What hope have they abandoned? Who or what is most precious to them?
- **low** · invocations · Bath of Healing Light gist says the patient picks; the book has you pick for your patient (p.146)
  - site: 'patient picks 2: regains 5 HP (twice)...'
  - book: 'Cup your hands around your light and focus it. Your patient... (pick 2): Regains 5 HP (can pick this twice) / Clears a debility (can pick this twice) / Has one of their problematic wounds stabilized / Recovers from a minor condition (drunk, etc.)'
- **low** · possessions · Distillery: the uses belong to the skins of fine whisky, not to the distillery as a whole (p.123)
  - site: name 'Distillery (_ uses)', gist 'Skins of fine whisky (grants advantage to Persuade), copper tubes, malt, firkins, stills, barrels, etc.'
  - book: 'Distillery: skins of fine whisky (_ uses, grants advantage to Persuade), copper tubes, malt, firkins, stills, barrels, etc.'
- **low** · possessions · The book's load marks (the diamond before items that take inventory space) are not recorded for any possession — a site-wide omission, not specific to this playbook (p.123)
  - site: No load marks in any possession gist (playbooks.js has zero diamond characters across all playbooks)
  - book: On p.123 the diamond precedes bee smokers and hats & veils (Apiary), firkins (Distillery), lanterns (Glassworks), a lute and a fiddle (Luthier's tools); the text extraction dropped the glyphs (only line breaks remain), so confirm each mark against the PDF before encoding them  
  - (no automatic fix)
- **low** · resources · Enigma is capped at 3 on the site; the book sets no maximum (p.121)
  - site: resources[0] Enigma max 3
  - book: 'When you go off a-wandering, hold 1 Enigma if you're gone for days, 2 if you're gone for weeks, or 3 if you're gone for months. At the very start of play, hold 3 Enigma.' — 3 is the largest single grant, but no cap is stated, so unspent hold from separate trips could exceed 3  
  - (no automatic fix)
- **low** · other · The 'Praise the day' worldbuilding prompts and the Introductions questions on p.124 are not modeled (consistent with the other playbooks, which also lack their equivalents) (p.124)
  - site: Nothing for: how Helior's worship is regarded, how he is worshipped, the state of his shrine in the Pavilion of the Gods, the previous Lightbearer, how you came into your powers; nor the four NPC / four PC introduction questions
  - book: p.124 'Praise the day' (five choose-1/choose-2 lists) and Introductions steps 1-8, including 'Who is your closest kin? Who fans the flames of your heart? Whose kindness and generosity warm your soul? Who needs Helior's light, badly?'  
  - (no automatic fix)

## The Marshal (pp.125-128) — 8 findings
The Marshal is transcribed very accurately: vitals, stat array, all five instincts, all three backgrounds and their grants, the starting-move rule, all 24 moves (17 regular + 7 level-6) with correct requires lines and result gists, and all six special possessions match Book I pp.125-127. The real gaps are a garbled Armored gist (the book's load glyph came through as "4"), Arts of War being offered at level 1 despite its level 2+ requirement, a missing Surprise track, and a thin Crew insert summary that omits the crew's tag/instinct/cost options, gear and names.

- **medium** · moves · Armored gist copies a text-extraction artifact: "mark only 4 (instead of 4-4)" (p.126)
  - site: "Carrying a shield, mark only 4 (instead of 4-4)"
  - book: "When you carry a shield, mark only ◆ (instead of ◆◆)." The "4" in the extracted text is the load-mark glyph (a shield is normally ◆◆ load; the move makes it ◆).
- **medium** · moves · Arts of War is stored as level 1, so the creator offers it as the starting free pick (p.126)
  - site: level: 1 (gist does say "Requires level 2+")
  - book: "(Requires level 2+, the Marshal)" - not available at character creation. The site already encodes this rule as level: 2 for the Would-be Hero's Versatile.
- **medium** · resources · Surprise (from Prepare a Welcome) is not listed among the Marshal's resources/tracks (p.126)
  - site: resources: Presence (2), Command (2) only
  - book: Prepare a Welcome: hold 1 Surprise if rushed or 2 Surprises if you can take your time; spend 1 to reveal a ploy, roll +INT; on a 10+ regain 1 Surprise. (Other playbooks list hold from optional moves, e.g. the Fox's Nerve.)
- **medium** · followers · Crew insert note omits the crew's tag options, instinct and cost options, starting gear and the names offered, and calls HP "shared" (p.144)
  - site: "shared HP (starts 6 ea), Armor (0), Damage (d6); Tags (group + background tag + 2 more); Instinct; Cost (with Loyalty track, max 3); named Individuals..."
  - book: p.144: HP starts at 6 each (group followers have HP per member, not a pool), Armor 0, Damage d6. Tags: group + background tag + 2 of archers, athletic, brave, cunning, devoted, hardy, intimidating, observant, patient, respected, stealthy, warriors (exceptional needs Heroes to the Last). Instinct pick 1 of 6 (bicker/infight/grudges; tradition & superstition; baser instincts; lord over others; needless risks; take things too far). Cost pick 1 of 5 (merry-making; public recognition/honor; risks you take for them; victories over worthy foes; wealth for themselves or Stonetop). Gear: hatchet, spear, bow & iron arrows, shield, thick hides, cloak, supplies (4+Prosperity uses per member). Individuals get a name (Aled, Culhwich, Eira, Gerat, Glaw, Harri, Lowri, Mervyn, Nesta), a tag and traits. Order Followers rolls +1 if a tag applies (+2 exceptional), +0 otherwise, disadvantage if a tag gets in the way; Strengthen Your Bond: pay their cost for +1 Loyalty (max 3), spend 1-for-1 to overcome fear, resist instinct/tags/traits, or do something unwanted.
- **low** · possessions · Composite bow drops the "x" from the book's "x piercing" notation (p.127)
  - site: "Composite bow (far, +1 dmg, piercing; low ammo, all out)"
  - book: "Composite bow (far, +1 damage, x piercing, low ammo, all out)" - x piercing is the book's variable-piercing tag for iron weapons (gear.js uses the same notation).
- **low** · possessions · PBX gear hint reads as if Weapons of war is a mandatory pick (p.127)
  - site: PBX.gear: "Pick 2 possessions (incl. Weapons of war)"
  - book: Special possessions (Pick 2) from six options; Weapons of war is one option and itself lets you choose up to 3 weapons, now or later.
- **low** · other · Playbook blurb misquotes the book's opening line (p.125)
  - site: SPBS.desc: "Hoping for peace isn't a plan. ..."
  - book: "Hoping for peace isn't enough. Trouble always comes knocking."
- **low** · other · Playbook-specific prompts are not stored: Appearance options, place of origin and name lists, the War stories prompt and its questions, and the Introductions questions (p.128)
  - site: none (the editor only has free-text appearance/origin fields); no playbook in PBDATA stores these, so this is a site-wide design choice rather than a Marshal transcription error
  - book: p.125 appearance lines and origin/name lists; p.128 War stories (six options for the militia's last serious action plus eight questions, answer at least 3) and the Introductions questions (closest kin / lover / lieutenant / whose kin is dead because of your decisions; which PC was in my crew / have I promised to keep safe / do I doubt / ignored my orders and got someone killed).  
  - (no automatic fix)

## The Ranger (pp.129-132) — 8 findings
The site’s Ranger is highly accurate: HP 18, d8, armor 0, the standard array, all five instincts, all three backgrounds, the starting-move rule, all 28 moves with correct level-6 flags and faithful gists, all 8 special possessions (composite bow + pick 2), Precaution, and the Animal Companion type stats all match Book I pp.129–132 and the p.143 insert. The only issues are wording: the Beast-Bonded grant reads as if you may use only one marked action per focus, and a few gists/notes drop optional-ness or detail the book includes; the sheet also has no way to track the Beast-Bonded focus actions.

- **medium** · backgrounds · Beast-Bonded grant says you use 1 marked action; the book lets you use any marked action, and it omits how Lend strength works (p.129)
  - site: Focus on it to use 1 marked action at any distance; mark 1 action at 1st, then 3rd/5th/7th/9th (gauge distance, call back, sense emotion, sense impression, lend strength).
  - book: When you focus on your animal companion for a few moments, you can use any of the actions you’ve marked below, no matter the distance between you. Mark 1 action at 1st level, then another at 3rd, 5th, 7th, and 9th. ... Lend it your strength—lose 1d6 HP, and it regains an equal amount.
- **medium** · other · No way to record which Beast-Bonded focus actions are marked (a 5-box track that grows at 3rd/5th/7th/9th level) (p.129)
  - site: Nothing structured; the resource schema is a counter (key/max), not a checklist, and there is no per-background track.
  - book: Five checkboxes under Beast-Bonded: mark 1 at 1st level, then another at 3rd, 5th, 7th and 9th.  
  - (no automatic fix)
- **low** · backgrounds · Wide Wanderer description drops the Neighbors’ home places, and the grant makes +WIS mandatory and omits the ‘your call / tell the GM when you were last here’ wording (p.129)
  - site: desc: ‘Add Ennis, Shahar, Yannic, Tovia, and Sasca to the Neighbors list (1 trait each).’ grants: ‘Know Things about the wider world with +WIS instead of +INT. On arriving somewhere visited before, the GM tells you how it changed.’
  - book: Ennis (from Marshedge), Shahar (from Gordin’s Delve), Yannic (from the Hillfolk), Tovia (from Lygos), Sasca (from the northern Manmarch), choosing 1 trait for each. When you Know Things about the wider world, you can roll +WIS instead of +INT. When you arrive somewhere you’ve visited before (your call), tell the GM when you were last here, and the GM will tell you how it’s changed.
- **low** · moves · Worldly is stored as a level-1 move; the book requires level 2+ (the Hero’s Versatile, the same kind of move, is stored as level 2) (p.131)
  - site: moves[20] Worldly: level 1 (gist says ‘Requires level 2+’)
  - book: WORLDLY (Requires level 2+ and the Ranger)
- **low** · moves · Wild Speech gist makes +WIS on Persuade mandatory; the book makes it a choice (p.131)
  - site: Persuade a beast with +WIS.
  - book: The grunts, barks, chirps, and calls of natural beasts are as a language to you. ... When you Persuade a beast, you can choose to roll +WIS.
- **low** · moves · Pack Horse gist says ‘weight’; the book counts load marks (◆), which is what the site’s Pack tab calls them too (p.130)
  - site: You can carry up to 4 weight with a light load, 7 with a normal load, and 10 with a heavy load.
  - book: You can carry up to 4 ◆ with a light load, 7 ◆ with a normal load, and 10 ◆ with a heavy load.
- **low** · followers · Animal Companion insert note omits each type’s damage tags, the tag every type starts with (tiny / tiny / tough / fierce / large) and the species examples; the generic follower form has no tag checklist, so chosen options must go in notes (p.143)
  - site: Bird HP5/Arm1/d4, pick 4; Critter HP5/Arm1/d4, pick 5; Brute HP12/Arm0/d6, pick 3; Predator HP8/Arm0/d8, pick 3; Steed HP12/Arm0/d6+1, pick 4
  - book: Bird (falcon, eagle, owl, buzzard, magpie) HP 5; Armor 1 (size); Damage d4 (hand); tiny; pick 4 more. Critter (cat, fox, possum, raccoon, weasel) HP 5; Armor 1 (size); d4 (hand); tiny; pick 5 more. Brute (bear, boar, wolverine, aurochs, drake) HP 12; Armor 0; d6 (hand); tough; pick 3 more. Predator (hound, wolf, cougar, drake) HP 8; Armor 0; d8 (hand, grabby); fierce; pick 3 more. Steed (horse, mule) HP 12; Armor 0; d6+1 (hand, close); large; pick 4 more. Instinct pick 1 of 7; Cost pick 1 of 3; Loyalty max 3.
- **low** · other · Playbook choice lists not stored: appearance options, place-of-origin name lists, the ‘Something wicked this way comes’ threat pick and its questions, and the Introductions questions (same gap for every playbook; the editor keeps appearance/origin as free text) (p.132)
  - site: appearance and origin are free-text inputs; no session-1 prompts.
  - book: p.129 appearance lines (fledgling / prime specimen / long in the tooth; barking / growling / sing-song voice; compact & sturdy / long & lean / wolfish; shaggy / threadbare / well-groomed) and six origin name lists; p.132 five threats to worry about with 3+ questions, and the eight-step Introductions with its kin and fellow-PC questions.  
  - (no automatic fix)

## The Seeker (pp.133-136) — 13 findings
The site's Seeker is structurally accurate: all 25 moves, 3 backgrounds with the right moves/topics/major arcana, vitals, stat array, instincts and the 7 possessions match Book I pp.133-136, with only one gist that misstates a rule (Improvise). The real gaps are the starting Collection on p.136 (the three drawn minor arcana and the major arcanum's start-up steps are missing entirely), a few uses/box counts the sheet prints as pips (Books & scrolls 5, Distillery 2, Conduit of Power 3), and Well Versed's 7-topic tracker.

- **high** · arcana · Starting minor arcana collection is missing entirely (p.136)
  - site: Only the 9 major arcana are listed (checklist 'Check the one(s) you start with'); nothing about minor arcana
  - book: Collection > Minor Arcana: ask the GM for the Minor Arcana cards, draw 3 at random and review both sides. Choose one whose secrets you have unlocked (portable: on your person or hidden away safe); choose another you have not yet mastered (in your possession or a secret place only you know); the third you have not yet found but have a lead on (give the card back to the GM, note it, ask the GM in play what you know about it).  
  - (no automatic fix)
- **medium** · arcana · Major arcanum start-up steps missing; editor hint implies more than one (p.136)
  - site: Checklist of 9 majors with hint 'Check the one(s) you start with'; gists say only 'offered by the X background'
  - book: Your Background grants you exactly 1 major arcanum (one of that background's three). Answer at least 2 of: Where did you acquire it? From whose grasp did you wrest it? Who else wants it? What did it cost you? You've begun to unlock its mysteries: mark 1 box or circle on the front of its insert and say when/how. The insert comes from Book II Appendix D (p.540, per p.141).  
  - (no automatic fix)
- **medium** · moves · Improvise gist says the arcanum move is 'unlocked'; the move is for moves you have NOT unlocked (p.135)
  - site: Requires level 6+ and Quick Study. Use an unlocked arcanum move at a risk/consequence; roll +INT: 7+ works once; 10+ also mark progress to unlock.
  - book: When you wish to use an arcanum's move or option without having unlocked it, ask the GM what fool risk(s) it requires and/or what consequence(s) you'll incur. If you go for it, roll +INT: 7+ it works this once (as if unlocked); 10+ also mark one step towards unlocking the arcanum's mysteries.
- **medium** · moves · Well Versed: gist omits the extra-takes rule and the site has no topic list/tracker (p.135)
  - site: Gist: 'Mark 1 topic beyond your Background's; when you Know Things about a topic, ask a free follow-up question even on a 6-.' No list of topics anywhere.
  - book: Well Versed has 3 boxes (1 pre-checked). Mark 1 topic in addition to the one from your Background; each additional time you take this move, mark 2 more. Topics (7 checkboxes): The Last Door, death, and the undead; The civilizations of humanity; The Fae and their strange ways; The Makers and their arts; The primordial powers; The Things Below; The wild world and its spirits. When you Know Things about one of your topics, ask the GM a follow-up question of your choice (even on a 6-).
- **medium** · resources · Conduit of Power has 3 boxes; the site neither states the count nor tracks it (p.134)
  - site: Gist: 'mark 1 box here instead with no negative effect (these never clear)'; resources list has only Protection
  - book: Conduit of Power is printed with 3 boxes: each time you would mark a Consequence from a major arcanum you may mark 1 box here instead, with no negative effect; the marks never clear (so it absorbs at most 3 consequences).
- **medium** · possessions · Books & scrolls uses count missing (p.135)
  - site: Gist: 'Has uses; expend a use to consult your collection and turn a Know Things roll you just made into a 10+.'
  - book: Books & scrolls (5 use-pips printed): expend a use to consult your collection and turn a Know Things roll you just made into a 10+.
- **medium** · possessions · Distillery whisky uses count missing (p.135)
  - site: Gist: 'Skins of fine whisky (uses, grant advantage to Persuade), copper tubes, malt, firkins, stills, barrels, etc.'
  - book: Distillery: skins of fine whisky (2 use-pips printed, grants advantage to Persuade), copper tubes, malt, firkins (load 2), stills, barrels, etc.
- **low** · resources · Logbook's 2 uses are not tracked as a resource (p.134)
  - site: Gist states '2 uses' but resources list has only Protection
  - book: Logbook (2 use-pips, slow, no inventory space): expend a use to treat a Know Things roll you just made as a 10+; reset to 2 uses when the Seasons Change.
- **low** · resources · Sacred Pouch Stock (from Initiate of the Secret Arts) is not tracked (p.134)
  - site: Gist mentions '3 Stock' but there is no Stock resource for the Seeker
  - book: Initiate of the Secret Arts (level 2+, 3 boxes): you have a Sacred Pouch (3 Stock, magical) as per the Blessed but with no remarkable traits; each take also grants a Blessed move you otherwise qualify for (not Improved/Superior Stat).
- **low** · possessions · Trade contacts gist absorbs the sheet's separate blank '(discuss with GM)' line (p.135)
  - site: Gist ends '...pigments, ivory, etc. (discuss with GM).'
  - book: Trade contacts: small amounts of salt, glass, silk, spice, medicinal herbs, pigments, ivory, etc. The '(discuss with GM)' belongs to a separate eighth checkbox with a blank line for a custom possession (the editor's '+ Add custom possession' covers it).
- **low** · backgrounds · Witch Hunter's third Well Versed option is truncated (p.133)
  - site: grants: '...Well Versed in (pick 1) the Fae, the Things Below, or the Last Door.'
  - book: ...are Well Versed in (pick 1) the Fae, the Things Below, or the Last Door and what lies beyond (go mark them now).
- **low** · instincts · Instincts stored as names only; the book's wording is absent (p.133)
  - site: ['Cunning','Curiosity','Hubris','Mystery','Vision'] (names match)
  - book: Cunning: To scheme, manipulate, and plot. Curiosity: To seek answers that maybe you oughtn't. Hubris: To assume you know best, that you can't fail. Mystery: To avoid straight answers; to keep secrets. Vision: To think big and pursue grandiose goals.  
  - (no automatic fix)
- **low** · moves · Repeatable moves are single-tick in the site (p.134)
  - site: Every move is one checkbox
  - book: Improved Stat, Initiate of the Secret Arts and Well Versed are printed with 3 boxes each (takeable up to three times); Conduit of Power's 3 boxes are a consequence track (see the resources finding).  
  - (no automatic fix)