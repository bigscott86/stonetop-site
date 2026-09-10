// The DM's townsfolk register (registerpage1.png + registerpage2.png), transcribed 2026-09-10.
// Imported into the Relationship Map as NPC nodes (Common House → 🕸 → ⇩ Townsfolk register).
// Names are matched case-insensitively on import, so re-importing never duplicates anyone.
window.TOWNSFOLK = [
  {name:'Judith',          age:10, sex:'Female', occupation:'Child',                    traits:'Unbothered, Joyful, Curious',                        status:'Alive'},
  {name:'Gunt',            age:11, sex:'Male',   occupation:'Child',                    traits:'Chill, Tweaker, Goober, Danger',                     status:'Alive'},
  {name:'Celwyn',          age:15, sex:'Male',   occupation:"Judge's Apprentice",       traits:'Committed, Beloved, Studious, Missed',               status:'Dead'},
  {name:'Alis',            age:16, sex:'Female', occupation:'Witch Hunter Trainee',     traits:'Dedicated, Impetuous, Risk-Averse',                  status:'Dead'},
  {name:'Wynfor',          age:16, sex:'Male',   occupation:"Publican's Apprentice",    traits:'Meek, Sharp, Unfeeling, Underestimated',             status:'Alive'},
  {name:'Emris',           age:19, sex:'Female', occupation:'Threadspinner',            traits:'Mystic, Quiet, Misunderstood, Disquieting',          status:'Alive'},
  {name:'Morwena',         age:20, sex:'Female', occupation:'Forager',                  traits:'Friendly, Honest, Judgmental, Greedy',               status:'Alive'},
  {name:'Dafyd',           age:22, sex:'Male',   occupation:'Farmer',                   traits:'Lightly Cruel, Funny, Sociable, Risky',              status:'Alive'},
  {name:'Mairin',          age:24, sex:'Female', occupation:'Dyer',                     traits:'Conflicted, Selfless, Worldly, Aloof, Flighty',      status:'Alive'},
  {name:'Gideon',          age:26, sex:'Male',   occupation:"Mason's Apprentice",       traits:'Loyal, Cautious, Formidable, Jealous',               status:'Alive'},
  {name:'Colm',            age:28, sex:'Male',   occupation:'Farmer',                   traits:'Bubbly, Helpful, Intrusive, Simple',                 status:'Alive'},
  {name:'Jareth',          age:29, sex:'Male',   occupation:'Tradesman',                traits:'Connected, Charismatic, Intense, Violent',           status:'Alive'},
  {name:'Pryder',          age:29, sex:'Male',   occupation:'Woodsman',                 traits:'Quick, Skeptical, Hard-Working, Grounded',           status:'Alive'},
  {name:'Siana',           age:30, sex:'Female', occupation:'Mason',                    traits:'Hefty, Talented, Simple, Stoic',                     status:'Alive'},
  {name:'Fumber',          age:31, sex:'Male',   occupation:'Deputy',                   traits:'Clueless, Intrusive, Ill-Equipped, Informed',        status:'Alive'},
  {name:'Four-Tooth Mert', age:33, sex:'Male',   occupation:'Bartender',                traits:'Charming, Folksy, Optimistic, Friendly, Unsanitary', status:'Alive'},
  {name:'Davies',          age:34, sex:'Male',   occupation:'Marshal',                  traits:'Level-Headed, Respected, Simple, Organized, Cowardly', status:'Alive'},
  {name:'Gwen',            age:39, sex:'Female', occupation:'Forager',                  traits:'Grief-Stricken, Bitter, Pragmatic, Focused',         status:'Alive'},
  {name:'Lydia',           age:42, sex:'Female', occupation:'Weaver',                   traits:'Sociable, Nosy, Fun-Loving, Selfish',                status:'Alive'},
  {name:'Nia',             age:44, sex:'Female', occupation:'Healer',                   traits:'Outsider, Unsociable, Vital, Unreliable',            status:'Alive'},
  {name:'Lilliana',        age:45, sex:'Female', occupation:'Ceramicist',               traits:'Depressed, Strong, Intimidating, Lost',              status:'Alive'},
  {name:'Kamala',          age:46, sex:'Female', occupation:'Smith',                    traits:'Jaded, Lenient, Understanding, Logical',             status:'Alive'},
  {name:'Rigby',           age:50, sex:'Male',   occupation:'Stablemaster',             traits:'Stressed, Meticulous, Loyal, Optimistic',            status:'Alive'},
  {name:'Orla',            age:52, sex:'Female', occupation:'Millworker',               traits:'Simple, Naive, Sociable, Dependable',                status:'Alive'},
  {name:'Lewela',          age:53, sex:'Female', occupation:'Midwife',                  traits:'Warm, Stern, Educated, Suspicious',                  status:'Alive'},
  {name:'Caron',           age:66, sex:'Male',   occupation:'Former Judge',             traits:'Honorable, Absolute, Infirm, Respected, Ill',        status:'Alive'},
  {name:'Romil',           age:68, sex:'Male',   occupation:'Woodsman',                 traits:'Solitary, Mysterious, Greedy, Cunning',              status:'Alive'},
  {name:'Ewan',            age:71, sex:'Male',   occupation:'Preserver',                traits:'Worldly, Funny, Skeptical, Demeaning',               status:'Alive'},
  {name:'Berla',           age:75, sex:'Female', occupation:'Aratis Devotee, Caretaker', traits:'Sharp, Demanding, Cynical, Honorable',              status:'Alive'},
  {name:'Loris',           age:91, sex:'Female', occupation:'Soothsayer',               traits:'Ancient, Cryptic, Influential, Wrathful',            status:'Alive'}
];

// The whiteboard relationship diagram (IMG_0904, 2026-09-10). PCs are the five circles; each
// edge is [from, to, label] with the label taken from what is written on or beside the line.
// A trailing "?" marks a line that was hard to read in the photo — edit it in the map.
// Name aliases map the board's spellings to the register's.
window.WHITEBOARD = {
  pcs: ['Madoc', 'Niall', 'Summerain', 'Paul', 'Eilwen'],
  aliases: {'morwenna':'Morwena', 'gunt(her)':'Gunt', 'gunther':'Gunt', '4-tooth mert':'Four-Tooth Mert', 'four tooth mert':'Four-Tooth Mert'},
  extraNpcs: [
    {name:'Cillian',          note:'mentor'},
    {name:"Madoc's mother",   note:'family'},
    {name:"Madoc's brother",  note:'family'},
    {name:"Madoc's sister",   note:'family'}
  ],
  edges: [
    // Niall
    ['Niall','Berla','Aratis old lady'], ['Niall','Four-Tooth Mert','bartender'], ['Niall','Caron','dad'],
    ['Niall','Celwyn','brother †'], ['Niall','Mairin','betrothed'], ['Niall','Gunt',"tat's"],
    ['Niall','Morwena','bad vibe'], ['Niall','Summerain','wavy line ?'],
    // Paul
    ['Paul','Gunt','work'], ['Paul','Caron',''], ['Paul','Nia','doctor'], ['Paul','Davies','army'],
    ['Paul','Rigby','BFF · stablemaster'], ['Paul','Lilliana','wife'], ['Paul','Lydia',"wife's sister"], ['Paul','Gwen','dashed line ?'],
    // Summerain
    ['Summerain','Kamala','ex-wife'], ['Summerain','Judith','daughter'], ['Summerain','Madoc','bros'],
    ['Summerain','Cillian','mentor'], ['Summerain','Gunt','weird kid ?'], ['Summerain','Eilwen','?'],
    // Madoc
    ['Madoc',"Madoc's mother",'mom'], ['Madoc',"Madoc's brother",'bro'], ['Madoc',"Madoc's sister",'sis'],
    ['Madoc','Dafyd','tanner'], ['Madoc','Wynfor','abused kid'], ['Madoc','Jareth','bad dad · Barrier Pass connect'],
    ['Madoc','Cillian','mentor ?'], ['Madoc','Morwena','crossed out (ex?) ?'], ['Madoc','Kamala','?'], ['Madoc','Loris','?'],
    // Eilwen
    ['Eilwen','Lewela','her mom · midwife'], ['Eilwen','Gwen','ex-wife'], ['Eilwen','Alis','daughter †'],
    ['Eilwen','Ewan','old guy'], ['Eilwen','Loris','oldest woman ever'], ['Eilwen','Caron','?'],
    ['Eilwen','Nia','?'], ['Eilwen','Davies','?'], ['Eilwen','Fumber','?'],
    // others
    ['Fumber','Davies','deputy'], ['Wynfor','Judith','♡ ?']
  ]
};
