// Extra rules for the Stone's lookup + roll tables for the Watchtower. Hand-summarised from
// Book I "Playing the Game" pp.76–85 (follower, expedition and homefront moves) and the
// Expeditions chapter (pp.323, 325, 335). Loaded after playbooks.js; appends to window.RULES.
// `live` marks entries whose numbers depend on the Village Sheet (rendered live in the lookup).
window.RULES = (window.RULES || []).concat([
  // ── Followers (p.76) ──
  {id:'order-followers', cat:'Followers', title:'Order Followers', page:76,
   trigger:'When you direct your follower to do something that would trigger a player move, and they do it.',
   text:'They trigger the move and you roll for them. Instead of +STAT: add +1 if they have at least one appropriate tag or move (+2 if they are also exceptional); +0 if nothing applies; roll with disadvantage if any of their tags would get in the way. When a follower is without orders or acts on their own initiative, the GM says what they do and how it goes.'},
  {id:'strengthen-bond', cat:'Followers', title:'Strengthen Your Bond', page:76,
   trigger:"When you pay your follower's cost, and you haven't done so recently.",
   text:"They hold +1 Loyalty (max 3). Spend their Loyalty 1-for-1 to have them: overcome their fear to do as you say; resist acting on their instinct, tags, or traits; do something they don't want to do (as long as it isn't abhorrent or suicidal)."},
  // ── Expedition moves (pp.77–79) ──
  {id:'chart-a-course', cat:'Expedition', title:'Chart a Course', page:77,
   trigger:'When you wish to travel to a distant place.',
   text:"Name or describe your destination. If the route is unclear, tell the GM how you intend to reach it. The GM tells you what's required, the risks, and how long it will likely take. When you set out, the GM presents each challenge one at a time, plus any surprises you couldn't have seen coming, in whatever order makes sense. Address them all and reach your destination."},
  {id:'outfit', cat:'Expedition', title:'Outfit', page:77, live:'outfit',
   trigger:'When you prepare for an expedition in a friendly community.',
   text:'Mark ◆ on your Inventory insert, on specific items or in Undefined: up to 3 for a light load (quick and quiet), 4–6 for a normal load, 7–9 for a heavy load (noisy, slow, quick to tire). Also mark small items equal to 4+Prosperity. You can pick items printed on the insert, other common mundane items, your own possessions, and special items you Trade & Barter for. Tell the GM what you bring and where you got it. (The Stables → Pack & Closet does this bookkeeping for you.)'},
  {id:'requisition', cat:'Expedition', title:'Requisition', page:77, live:'fortunes',
   trigger:"When you borrow some of the steading's assets for an expedition (the horses, a plow…).",
   results:{strong:'Go ahead, but bring it back safely.', weak:"You'll need to do some convincing.", miss:"Don't mark XP. You can still take the asset, but if you do, reduce Fortunes by 1."},
   text:'Roll +Fortunes. Failing to bring an asset back safely is a Meet with Disaster.'},
  {id:'have-what-you-need', cat:'Expedition', title:'Have What You Need', page:78,
   trigger:'When you decide that you had something all along.',
   text:'Transfer a mark (or marks) from Undefined to a specific item or slot; fill a slot with a common mundane item or one of your possessions. Or expend a use of supplies to mark an additional small item. Whatever you produce must be something you could have had all along; the GM or any player can veto unreasonable items.'},
  {id:'recover', cat:'Expedition', title:'Recover', page:78, live:'recover',
   trigger:'When you take time to catch your breath and tend to what ails you.',
   text:"Expend 1 use of supplies and recover HP equal to 4+Prosperity. You can't gain this benefit again until you take more damage. When you tend to a debility or a problematic wound, say how; the GM either says it's taken care of or tells you what's required (Defying Danger, expending supplies or another resource, finding something, Making Camp…)."},
  {id:'struggle-as-one', cat:'Expedition', title:'Struggle as One', page:78,
   trigger:'When you Defy Danger as a group.',
   results:{strong:'You do well enough to get someone else out of a spot, if you can tell us how.', weak:'You pull your weight.', miss:"You find yourself in a spot; the GM describes it or asks you to. If someone saves you, don't mark XP."},
   text:"Establish the party's approach and each roll +STAT, as for Defy Danger."},
  {id:'keep-company', cat:'Expedition', title:'Keep Company', page:78,
   trigger:'When you spend a stretch of time together.',
   text:"Ask the others if they want to Keep Company. If they do, take turns asking a PC or NPC one of: What do you do that's annoying or endearing? What do I do that you find annoying or endearing? Who or what seems to be on your mind? What do we find ourselves talking about? How do we pass the time? What new thing do you reveal about yourself?"},
  {id:'make-camp', cat:'Expedition', title:'Make Camp', page:79,
   trigger:'When you settle in to rest in an unsafe area.',
   text:"Answer the GM's questions about your campsite. Each member of the party consumes 1 use of supplies or provisions; with a mess kit (requires fire and water) 1 use provides for up to four people. If you eat and drink your fill and get at least a few hours of sleep, pick 1: regain HP equal to half your max, or clear a debility. A bedroll recovers 1d6 extra HP. If the rest was particularly peaceful, comfortable, or enjoyable, you also gain advantage on your next roll."},
  {id:'forage', cat:'Expedition', title:'Forage', page:79,
   trigger:'When you spend a few hours seeking food in the wild.',
   results:{strong:'Pick 2.', weak:'Pick 1.'},
   text:'Roll +WIS; in winter you have disadvantage. Options: you acquire 4 provisions (1d6 uses); you acquire an extra 1d6 uses of provisions; you discover something interesting or useful; you avoid danger or risk (otherwise there is some). Provisions substitute for supplies when you Make Camp, 1-for-1.'},
  {id:'return-triumphant', cat:'Expedition', title:'Return Triumphant', page:79,
   trigger:'When you return home in triumph — having saved your fellows, put down the threat, seized the opportunity.',
   text:"Clear one of the steading's debilities (diminished, lacking, or malcontent). If the steading has none marked, increase Fortunes by 1."},
  // ── Homefront moves (pp.80–85) ──
  {id:'bolster', cat:'Homefront', title:'Bolster', page:80,
   trigger:"When you prepare for what's coming or seek the favor of the gods.",
   text:"Say how and answer the GM's questions, then hold Preparation for the time you devote: a week or so, 1; a month or so, 2; the better part of a season, 3. When you make a roll your efforts might apply to, spend 1 Preparation to add +1 after the roll (maximum +1 per roll)."},
  {id:'convalesce', cat:'Homefront', title:'Convalesce', page:80,
   trigger:'When you rest for a few days in safety and comfort.',
   text:'Set your HP back to max and clear all your debilities. When you rest for a few weeks under the care of a healer, you heal any problematic wounds that can heal. If you have suffered a permanent injury or impairment, either retire or Make a Plan to adapt to it.'},
  {id:'deploy', cat:'Homefront', title:'Deploy', page:81,
   trigger:"When you send a steading's people into danger or rally them against an attack.",
   results:{strong:'It goes as well as can be expected.', weak:"It works, but someone chooses 1: it's less effective than you expected; injuries abound and the steading marks diminished (disadvantage to Deploy, Muster, Pull Together); the GM picks a named NPC involved in the action, and they die."},
   text:'Roll +Defenses. If the steading is acting from a position of strength, you choose from the list; otherwise the GM chooses.'},
  {id:'level-up', cat:'Homefront', title:'Level Up', page:81,
   trigger:'When you have a quiet stretch of time at home and XP equal to or greater than 6 + twice your current level.',
   text:'1) Subtract 6 + twice your current level from your XP. 2) Increase your level by 1. 3) Choose a new move from your playbook, or from an insert you have unlocked. 4) The Blessed (or anyone with a sacred pouch): at an even level, increase max Stock by 1. 5) The Lightbearer (or anyone with Invoke the Sun God): at an even level, choose a new invocation. 6) Review your Instinct and Appearance and change anything that no longer applies.'},
  {id:'make-a-plan', cat:'Homefront', title:'Make a Plan', page:81,
   trigger:"When you wish to accomplish some project but aren't sure how to go about it.",
   text:"Tell the GM what you hope to achieve. They'll say what's required. If you're stumped on how to accomplish one of the requirements, tell the GM and Make a Plan for that."},
  {id:'meet-with-disaster', cat:'Homefront', title:'Meet with Disaster', page:82,
   trigger:'When calamity befalls the steading or panic spreads.',
   text:'Reduce Fortunes by 1 (minimum −1). If Fortunes would drop below −1 for any reason, the GM picks 1 instead: the steading marks diminished from injuries, sickness, or doubt (disadvantage to Deploy, Muster, Pull Together); marks lacking from shortages, hoarding, or distrust (treat Prosperity as 1 lower); marks malcontent from fear, anger, or despair (Fortunes resets to +0 each season, not +1, and folks need more Persuading); or folks start to leave and Population drops by 1.'},
  {id:'muster', cat:'Homefront', title:'Muster', page:82,
   trigger:'When you press every able body into the defense of a steading.',
   results:{strong:'The steading is alert and ready for action until the threat passes, the Seasons Change, or you cease to oversee the muster. Also pick 2.', weak:'As above, and pick 1.'},
   text:"Reduce Fortunes by 1 and roll +Population. Options: everyone's willing to pitch in, so don't reduce Fortunes after all; the muster holds together even without your presence; one or two individuals show real potential (ask the GM who, and how)."},
  {id:'pull-together', cat:'Homefront', title:'Pull Together', page:83,
   trigger:'When you set a community to work on improvements, to secure new resources, or to make major repairs.',
   results:{strong:'The job gets done.', weak:"Pick 1: it gets done but other work doesn't (reduce Fortunes by 1); it gets done but the work is shoddy and crude; it gets done but there's a consequence (bad blood, an injury, a threat unearthed…); there's an unforeseen cost, requirement, or challenge — address it and the job gets done."},
   text:'Spend whatever the GM says is required (time, material, Surplus…) and roll +Population.'},
  {id:'trade-barter', cat:'Homefront', title:'Trade & Barter', page:83, live:'trade',
   trigger:'When you seek to acquire or sell a special item.',
   results:{strong:'You get it, or sell it, for a fair price.', weak:"Buying: the GM picks 1 — it costs more than usual; someone has it but isn't keen to give it up; you can get something close but not quite right. Selling: you can sell it now, but you won't get its full worth.", miss:"Don't mark XP. To acquire or sell it you'll need to travel to another settlement or wait until next season."},
   text:"Commonly available items you can simply acquire or sell. For special items, roll +Prosperity and subtract the item's Value (0–4). In winter you have disadvantage. For unique or truly exceptional items, don't Trade & Barter: Make a Plan with the GM, or wait for a trade opportunity when the Seasons Change."},
  {id:'seasons-change', cat:'Homefront', title:'Seasons Change', page:84, live:'seasons',
   trigger:'When the season turns.',
   text:"Spring — whoever is most hopeful rolls +Fortunes: 10+ pick 1 seasonal gain; 7–9 pick 1, but a threat to the steading makes itself known or gets worse; 6− threats abound (don't mark XP). Summer — whoever is most content rolls +Fortunes: 10+ pick 2 gains; 7–9 pick 1; 6− a threat makes itself known or gets worse (no XP). Whatever the result the steading generates 1d4−1 Surplus. Autumn — whoever is most determined rolls +Fortunes, as spring; when the harvest is complete roll 1d4 and gain that much Surplus. Winter — whoever is weariest rolls 1d4+Population and the steading consumes that much Surplus; if there isn't enough, reduce Surplus to 0, Meet with Disaster, and pick 1: reduce Population by 1; an important resource is lost or not maintained; an important NPC dies with their role unfilled; your PC dies, leaves, or retires. Then roll +Fortunes: 10+ a mild winter and each player names a local NPC whose relationship with them improves; 7–9 the steading must consume another 1d4+Population Surplus before winter ends or suffer the consequences above; 6− as 7–9 and threats abound (no XP). Every season ends by resetting Fortunes to +1 (+0 if the steading is malcontent)."},
  {id:'seasonal-gains', cat:'Homefront', title:'Seasonal Gains', page:85,
   text:'Population boom: youth come of age and/or outsiders settle here; increase Population by 1 (max +3). Tor\'s blessing: fine weather abounds; take +1 to Pull Together this season, and whenever you roll the Die of Fate for weather, roll twice and take your pick. Unexpected bounty: a sudden influx of wild game, trade profits, or another resource generates 1 Surplus now. Trade opportunity: at some point this season someone offers something valuable at a good price or something unique at a reasonable one; pay what they ask and it is yours. Interesting news: an opportunity to improve fortunes, knowledge, or relations, or to progress a steading improvement. Valuable insight: you learn something that gives you a chance to address a threat that has been plaguing the steading.'},
  // ── Gear terms & tags (p.94) ──
  {id:'gear-tags', cat:'Gear', title:'Gear terms & tags', page:94,
   text:'Italic terms are tags: no fixed rule, but they are part of fictional positioning. Regular terms are mechanical. ◇ or ◇◇: takes up that many slots on your Inventory insert and counts against your load. area: affects everything in an area. [n] armor: subtract n from damage you take; doesn\'t stack. +1 armor: adds 1 to your armor value; stacks. awkward: unwieldy, needs space, gets stuck. crude: prone to break, wear out, stop working. cumbersome: you are noisy, slow, hot, and quick to tire while carrying it, even without a heavy load. +[n] damage: add n to the damage you deal with that weapon. dangerous: causes trouble and collateral damage if you aren\'t careful. forceful: can knock someone around, maybe off their feet. fragile: easy to break or ruin; pack it carefully. hours: lasts about an hour per ○; mark one to track time used. immobile: you can\'t really carry it; you need a beast or vehicle. messy: particularly destructive damage, ripping people and things apart. [n] piercing: when you deal damage, ignore n points of the target\'s armor; for "x piercing", x is the steading\'s current Prosperity. reload: after use it takes time and effort to reset. requires ___: without it, the item works poorly or not at all. slow: takes minutes or more to use; not useful in a fight. thrown: you can Let Fly with it at near range. uses: mark a ○ each use; gone when all are marked. warm: keeps you warm in the cold, but is uncomfortable and exhausting (maybe dangerous) in heat.'},
  {id:'range-tags', cat:'Gear', title:'Range tags', page:94,
   text:'The distance within which a weapon or light source is effective. hand: tight quarters, up close and personal. close: melee range, 1–2 steps away. reach: 3–4 steps away. near: up to 30 or so steps away. far: quite the distance; up to 100 steps, maybe more.'},
  {id:'ammo', cat:'Gear', title:'Ammo', page:94,
   text:'Ranged weapons carry the statuses plenty left → low ammo → all out. When you deplete your ammo (because a move tells you to, or the GM says so), mark the next status. At all out you can\'t use that weapon until you replenish your ammunition. The Pack tracks these states on each weapon.'},
  {id:'die-of-fate', cat:'Core', title:'The Die of Fate', page:42,
   text:'When the GM needs a quick answer from chance and no move applies, someone rolls a d6: low is bad, high is good, and the GM says what it means. The book uses it for weather, for what interrupts a night\'s rest, and for how dangerous a leg of travel turns out to be (see the tables in the Watchtower).'}
]);

// Roll tables from the Expeditions chapter. Each row: [faces, text].
window.TABLES = {
  weather: {
    page: 325,
    seasons: [
      {name:'Late winter / early spring', rows:[[[1],'Snow, sleet, or hail, an early thunderstorm, or a day of cold, soaking rain'],[[2,3],'Cold and windy, maybe some showers'],[[4],'Clouds on the horizon, steady wind; roll again later with disadvantage'],[[5,6],'A fine, sunny spring day; some clouds, some gusting winds']]},
      {name:'Spring / early summer', rows:[[[1],'A heavy storm; high winds, hail, thunder, lightning'],[[2],'Steady, chilly rain'],[[3,4],'Warm and windy, maybe some brief showers'],[[5,6],'Warm, sunny, pleasant']]},
      {name:'Summer', rows:[[[1],'A heavy storm; high winds, hail, thunder, lightning, tornadoes'],[[2],'Blazing heat, still air, not a cloud in sight'],[[3],'Warm, clouds on the horizon, steady wind; roll again later with disadvantage'],[[4,5],'Hot and dry during the day; cooler and windy at night'],[[6],'Warm, sunny, breezy, perfect']]},
      {name:'Late summer / early autumn', rows:[[[1],'A powerful thunderstorm or cold, soaking rain'],[[2],'Windy with a few rain showers'],[[3],'Hot and humid, with brief, drenching thunderstorms'],[[4,5],'Hot, muggy, some wind'],[[6],'Warm, sunny, breezy, perfect']]},
      {name:'Autumn', rows:[[[1],'Cold, drenching rain and/or sleet'],[[2],'Cold, windy, light rain or early snow'],[[3],'Chilly, windy, clouds on the horizon; roll again later with disadvantage'],[[4,5,6],'Crisp, breezy']]},
      {name:'Winter', rows:[[[1],'Blizzard: wind, snow, all of it'],[[2],'Intense cold and wind'],[[3],'Very cold, very clear, very still'],[[4],'Cold and snowy, or cold and windy'],[[5],'Some snow, but mostly just dreary'],[[6],'Warm (for winter) and sunny']]}
    ]
  },
  night: {page:335, name:'Something in the night', rows:[[[1],'Something dangerous approaches, inclined to do harm'],[[2],'Something dangerous approaches, curious but not aggressive'],[[3],'Something annoying happens: critters in the food, rain, an argument…'],[[4,5],'The night passes uneventfully'],[[6],'They observe something interesting, find something useful, or gain some small boon; or the night passes uneventfully']]},
  peril: {page:323, name:'Perilous travel', rows:[[[1],'A danger springs on them, unavoidable'],[[2,3],'Introduce a danger, right in front of them'],[[4,5],'Point to a looming danger'],[[6],'Point to a looming danger, but also present a discovery']]}
};

// Places of the wider world (Book II chapter titles) — a name list for map pins.
window.WORLD_PLACES = ['Barrier Pass','Blackwater Lake','The Dread River','Ferrier\'s Fen','The Flats','The Foothills','The Frozen Wastes','The Golden Oak','Gordin\'s Delve','The Great Wood','Huffel Peaks','The Labyrinth','Lygos','The Makers\' Roads','Marshedge','The Maw','North Manmarch','The Red Groves','The Ruined Tower','South Manmarch','The Steplands','The Stream','Three Coven Lake','Titan Bones','Ustrina','Vor Svetelik','The Whitefang Mountains','Stonetop'];
