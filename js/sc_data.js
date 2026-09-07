// StarCraft RPG Ghost Operative System Data Compendium
window.SC_DATA = {
  "homeworlds": [
    {
      "id": "tarsonis",
      "name": "Tarsonis",
      "tagline": "The Capital World of the Terran Confederacy",
      "description": "Sophisticated, proud, and often arrogant. Tarsonians are raised in aristocratic luxury or high-tech military discipline.",
      "attributeBonus": "Start with d6 in Spirit or Intelligence.",
      "skillBonus": "Gain a free d4 in Lore, Influence, or Computers.",
      "hindrance": "Start with Arrogant (Major) or Secret (Minor) due to Old Family politics.",
      "perk": "+1 on Influence rolls against Terran Confederacy / Dominion citizens."
    },
    {
      "id": "moria",
      "name": "Moria",
      "tagline": "Industrial Mining & Kel-Morian Combine Fortress",
      "description": "Hardy miners, engineers, and pragmatic corporate survivors who value raw resources and grit over galactic politics.",
      "attributeBonus": "Start with d6 in Vigor or Strength.",
      "skillBonus": "Gain a free d4 in Engineering, Survival, or Science.",
      "hindrance": "Greedy (Minor) or Stubborn (Minor).",
      "perk": "Gain +2 to Vigor rolls against environmental hazards, toxins, and radiation."
    },
    {
      "id": "korhal",
      "name": "Korhal",
      "tagline": "Birthplace of the Sons of Korhal & Terran Dominion",
      "description": "Fiercely independent, revolutionary, and driven by passion and vengeance after the nuclear devastation of their world.",
      "attributeBonus": "Start with d6 in Instinct or Agility.",
      "skillBonus": "Gain a free d4 in Tactics, Ranged, or Leadership.",
      "hindrance": "Vengeful (Minor or Major) or Driven (Minor).",
      "perk": "Gain +1 to Spirit rolls to recover from Shaken or resist fear/intimidation."
    },
    {
      "id": "umoja",
      "name": "Umoja",
      "tagline": "The Free and Progressive Protectorate",
      "description": "Advanced in science, civil liberties, and stealth technology. Umojans maintain the elite Shadowguard operatives.",
      "attributeBonus": "Start with d6 in Intelligence or Instinct.",
      "skillBonus": "Gain a free d4 in Science, Medicine, or Stealth.",
      "hindrance": "Pacifist (Minor) or Curious (Major).",
      "perk": "+1 on all Stealth rolls; access to Umojan Shadowguard training options."
    },
    {
      "id": "dead_mans_rock",
      "name": "Dead Man’s Rock",
      "tagline": "Outlaw Haven, Pirates, and Mercenary Hub",
      "description": "A lawless haven for mercenaries, scavengers, criminals, and rogue operatives where only the sharpest survive.",
      "attributeBonus": "Start with d6 in Instinct or Agility.",
      "skillBonus": "Gain a free d4 in Perception, Stealth, or Melee.",
      "hindrance": "Wanted (Minor) or Suspicious (Minor).",
      "perk": "Danger Sense: +2 on Notice/Perception checks against surprise and ambushes."
    },
    {
      "id": "sara_colonist",
      "name": "Sara Colonist (Mar Sara / Chau Sara)",
      "tagline": "Frontier Colonists Hardened by Alien Incursions",
      "description": "Tough, resilient frontier pioneers who have stared into the jaws of the Zerg swarm and lived to tell the tale.",
      "attributeBonus": "Start with d6 in Vigor or Instinct.",
      "skillBonus": "Gain a free d4 in Survival, Ranged, or Athletics.",
      "hindrance": "Flashbacks (Minor) or Heroic (Major).",
      "perk": "+1 to all Survival rolls and +2 to recover from Shaken caused by alien terrors."
    },
    {
      "id": "fringe_colonist",
      "name": "Fringe Colonist",
      "tagline": "Isolated Outer-Rim Frontier",
      "description": "Independent outer-system settlers skilled in improvisational engineering, rugged survival, and self-reliance.",
      "attributeBonus": "Start with d6 in Vigor or Strength.",
      "skillBonus": "Gain a free d4 in Engineering, Survival, or Pilot.",
      "hindrance": "Outsider (Minor) or Illiterate/Techno-skeptic (Minor).",
      "perk": "Scrapper: Ignore 1 point of penalty when jury-rigging or repairing damaged gear."
    }
  ],
  "cot_levels": [
    {
      "rank": "Novice",
      "level": "Recruit",
      "psi": "Psi Level 2",
      "benefit": "Standard Ghost Operative gear package, Basic Psionic Cloak & Hostile Environment Suit authorization."
    },
    {
      "rank": "Seasoned",
      "level": "Operative",
      "psi": "Psi Level 3",
      "benefit": "Access to advanced munitions, specialist weapon requisitions, +1 Requisition modifier."
    },
    {
      "rank": "Veteran",
      "level": "Specialist",
      "psi": "Psi Level 4",
      "benefit": "Advanced Psionic Disciplines unlocked, specialized stealth armor upgrade, +2 Requisition modifier."
    },
    {
      "rank": "Heroic",
      "level": "Lieutenant",
      "psi": "Psi Level 5",
      "benefit": "Command squad authorizations, experimental cybernetic enhancements, +3 Requisition modifier."
    },
    {
      "rank": "Legendary",
      "level": "Captain",
      "psi": "Psi Level 6+",
      "benefit": "Tactical orbital strike requisition, classified prototype gear, legendary leadership traits."
    }
  ],
  "training_paths": {
    "ghost": {
      "name": "Ghost Combat Training (Confederacy / Dominion)",
      "description": "Standard high-intensity psionic assassin and sniper training developed by the Ghost Academy.",
      "features": [
        {
          "name": "Absorption Field",
          "desc": "Passive energy absorption shield that mitigates psionic burnout and shock damage."
        },
        {
          "name": "Covert Ops Training",
          "desc": "Gain +1 to Stealth, Perception, and choice of Ranged or Melee rolls."
        },
        {
          "name": "Critical Strikes",
          "desc": "Gain +2 AP (or +4 AP when firing a C-10 Canister Rifle) on well-aimed shots."
        },
        {
          "name": "Psionic Reflexes",
          "desc": "While wearing Hostile Environment Suit (HES), character increases Agility by one die step."
        }
      ]
    },
    "shadowguard": {
      "name": "Shadowguard Combat Training (Umojan Protectorate)",
      "description": "Elite espionage and surgical intelligence warfare training emphasizing precision martial arts and counter-intelligence.",
      "features": [
        {
          "name": "Espionage Training",
          "desc": "Gain +1 to Insight, Influence, and Stealth rolls."
        },
        {
          "name": "Infiltration Specialist",
          "desc": "Ignore up to 2 points of penalties on security consoles, locks, and electronic countermeasures."
        },
        {
          "name": "Precision Martial Arts",
          "desc": "Unarmed attacks deal Str+d6 damage with AP 2 and can inflict Stun."
        },
        {
          "name": "Take Down",
          "desc": "When striking from stealth, target must make a Vigor roll vs damage or be immediately knocked unconscious."
        }
      ]
    }
  },
  "skills": [
    {
      "id": "athletics",
      "name": "Athletics",
      "attr": "Agility",
      "core": true,
      "desc": "Running, jumping, climbing, swimming, throwing, and general physical agility and coordination."
    },
    {
      "id": "computers",
      "name": "Computers",
      "attr": "Intelligence",
      "core": false,
      "desc": "Hacking terminals, deciphering encryption, controlling planetary networks, AI bypass."
    },
    {
      "id": "engineering",
      "name": "Engineering",
      "attr": "Intelligence",
      "core": false,
      "desc": "Repairing starship engines, jury-rigging siege tanks, crafting traps, bomb disposal."
    },
    {
      "id": "insight",
      "name": "Insight",
      "attr": "Instinct",
      "core": true,
      "desc": "Reading body language, sensing deception, intuitive tactical awareness."
    },
    {
      "id": "influence",
      "name": "Influence",
      "attr": "Spirit",
      "core": true,
      "desc": "Persuasion, intimidation, negotiation, bargaining, and social charisma."
    },
    {
      "id": "leadership",
      "name": "Leadership",
      "attr": "Spirit",
      "core": false,
      "desc": "Commanding squadmates, giving tactical orders, rallying Shaken troops."
    },
    {
      "id": "lore",
      "name": "Lore",
      "attr": "Intelligence",
      "core": true,
      "desc": "Sector history, galactic geography, alien species biology (Zerg/Protoss), corporate intelligence."
    },
    {
      "id": "medicine",
      "name": "Medicine",
      "attr": "Intelligence",
      "core": false,
      "desc": "Treating trauma wounds, stabilizing dying allies, administering stimpacks, field surgery."
    },
    {
      "id": "melee",
      "name": "Melee",
      "attr": "Agility",
      "core": false,
      "ghostStart": "d4",
      "desc": "Combat knives, psionic blades, vibro-daggers, and close-quarters hand-to-hand combat."
    },
    {
      "id": "perception",
      "name": "Perception",
      "attr": "Instinct",
      "core": true,
      "desc": "Noticing hidden enemies, spotting camouflaged mines, scanning radar readouts."
    },
    {
      "id": "pilot",
      "name": "Pilot",
      "attr": "Instinct",
      "core": false,
      "desc": "Operating Vultures, Wraiths, Dropships, Battlecruisers, and planetary rovers."
    },
    {
      "id": "psionics",
      "name": "Psionics",
      "attr": "Spirit",
      "core": false,
      "desc": "Channeling psionic energy, cloaking, telekinesis, mind control, psionic blast."
    },
    {
      "id": "ranged",
      "name": "Ranged",
      "attr": "Instinct",
      "core": false,
      "ghostStart": "d4",
      "desc": "Firing C-10 Canister Rifles, Gauss pistols, sniper systems, missile launchers."
    },
    {
      "id": "science",
      "name": "Science",
      "attr": "Intelligence",
      "core": false,
      "desc": "Xenobiology, physics, hyperdrive theory, psionic wave dynamics."
    },
    {
      "id": "stealth",
      "name": "Stealth",
      "attr": "Agility",
      "core": true,
      "ghostStart": "d6",
      "desc": "Infiltration, silent movement, avoiding thermal/motion sensors, blending in shadow."
    },
    {
      "id": "survival",
      "name": "Survival",
      "attr": "Instinct",
      "core": false,
      "desc": "Navigating ash worlds, surviving toxic atmospheres, tracking zerg broods."
    },
    {
      "id": "tactics",
      "name": "Tactics",
      "attr": "Intelligence",
      "core": false,
      "desc": "Battlefield maneuvering, ambush planning, predicting enemy wave movements."
    }
  ],
  "hindrances": [
    {
      "name": "All Thumbs",
      "type": "Minor",
      "points": 1,
      "desc": "Due to upbringing, lack of exposure, or pure bad luck, some individuals are “all thumbs” when it comes to mechanical devices. All Thumbs inflict a -2 penalty when using mechanical devices. If he rolls a Critical Failure while using such a device (and it doesn’t already have a built-in effect), it’s broken. If the GM feels it’s appropriate, it can be fixed with an Engineering roll and 1d6 hours. This hindrance does not apply to electronic or digital devices."
    },
    {
      "name": "Amorous",
      "type": "Minor",
      "points": 1,
      "desc": "The character is easily enamored with a pretty face. Perhaps it’s lust or lechery, or perhaps he just has a keen appreciation of natural beauty. Amorous characters suffer an additional -2 penalty to resist Tests by any character with the Attractive or Very Attractive Edge."
    },
    {
      "name": "Arrogant",
      "type": "Major",
      "points": 2,
      "desc": "Arrogant heroes don’t think they are the best—they know it. These characters flaunt their prowess and aim to dominate opponents. They seek the greatest threats in battle, taking on lesser enemies only when necessary."
    },
    {
      "name": "Bad Connections",
      "type": "Minor",
      "points": 1,
      "desc": "Before joining the Academy your character became involved with an illegal or inappropriate person or organization, and now owes them a favor. At some point in time the person or organization may return to ask a favor of the character, a favor he or she may not refuse without unpleasant consequences. The GM decides when the character has paid the favor, at which time the hindrance disappears."
    },
    {
      "name": "Bad Luck",
      "type": "Major",
      "points": 2,
      "desc": "Your hero is less fortunate, you critically fail on rolls of 1s and 2s."
    },
    {
      "name": "Big Mouth",
      "type": "Minor",
      "points": 1,
      "desc": "This hero can’t keep secrets and tends to reveal plans or important information at the worst times."
    },
    {
      "name": "Bitter",
      "type": "Major",
      "points": 2,
      "desc": "You have been hurt repeatedly by those you trusted, and it has become difficult for you to accept help. Other people attempting to assist this character suffer a –2 penalty to their roll."
    },
    {
      "name": "Bloodthirsty",
      "type": "Major",
      "points": 2,
      "desc": "This hero never takes prisoners unless under direct supervision. Their ruthless nature often leads to missed information, constant enemies, or trouble with authorities."
    },
    {
      "name": "Blunderer",
      "type": "Major",
      "points": 2,
      "desc": "Some heroes take a while to master their craft. Select a skill central to your character, such as Psionics for a Psion or Hacking for a Hacker. The hero suffers a  Critical Failure whenever she fails a roll and that skill die is a 1."
    },
    {
      "name": "Burned-Out Veteran",
      "type": "Minor",
      "points": 1,
      "desc": "Years of warfare have left their mark. Nightmares and intrusive memories haunt you. Suffer a -1 penalty on rolls to recover from Fear or mental stress."
    },
    {
      "name": "Cautious",
      "type": "Minor",
      "points": 1,
      "desc": "This planner personifies restraint and carefulness. He never makes rash decisions and likes to plot things out in detail long before any action is taken."
    },
    {
      "name": "Clueless",
      "type": "Major",
      "points": 2,
      "desc": "The character suffers a −2 penalty to Lore and Perception rolls, often missing important details."
    },
    {
      "name": "Clumsy",
      "type": "Major",
      "points": 2,
      "desc": "Your hero is uncoordinated, suffering a −2 penalty to Athletics rolls."
    },
    {
      "name": "Code of Honor",
      "type": "Major",
      "points": 2,
      "desc": "Honor is very important to your character. They keep their word, treat others with respect, and adhere to a specific code of conduct."
    },
    {
      "name": "Cocky",
      "type": "Major",
      "points": 2,
      "desc": "Your character just doesn’t know when to brag and when to act. The hero’s first round in any combat must be spent announcing how great he is, or pronouncing the doom of those who oppose him. If for some reason your hero must act instead, it costs him a Benny. A villain with this Hindrance never delivers a finishing blow to a foe. Instead, he leaves them to die, or orders his minions to finish them while he stalks off well out of earshot. Inevitably, these foes survive their wounds, escape the minions, and so on."
    },
    {
      "name": "Corporate Debt",
      "type": "Major",
      "points": 2,
      "desc": "A corporation owns more than your paycheck. You owe favors, money, equipment, or service to a powerful organization. Corporate agents may call upon you at inconvenient times."
    },
    {
      "name": "Curious",
      "type": "Major",
      "points": 2,
      "desc": "Curiosity drives this character to investigate mysteries, sometimes putting them in dangerous situations."
    },
    {
      "name": "Death Wish",
      "type": "Minor",
      "points": 1,
      "desc": "This hero is driven by a noble but dangerous goal, taking significant risks to achieve it."
    },
    {
      "name": "Delusional",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "Your hero believes something strange. Minor delusions are harmless, but Major delusions may lead to dangerous actions."
    },
    {
      "name": "Driven",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "A vow is a commitment to others—driven characters want something for themselves. It may be to protect their world, prove you’re the best poker player or race driver. The Minor version shapes the character and influences decisions but either happens rarely or is fairly harmless. As a Major Hindrance it’s an overriding desire that comes up frequently or causes peril for the hero and companions. Easily Cowed (Mayor) The hero crumples easily when pressured or pushed. He or she receives a -2 penalty to Discipline against Fear or Intimidation rolls."
    },
    {
      "name": "Echoes of the Khala/Void",
      "type": "Minor",
      "points": 1,
      "desc": "Exposure to Protoss or Xel’Naga psionic technology changed your mind forever. You occasionally sense emotions or thoughts not your own. These impressions can be helpful—or deeply distracting."
    },
    {
      "name": "Emotional Isolation",
      "type": "Minor",
      "points": 1,
      "desc": "Common among Ghosts. You struggle to form meaningful personal relationships. Suffer a -2 penalty on Influence and similar rolls involving emotional connection."
    },
    {
      "name": "Greedy",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "A miser measures worth in material possessions or wealth. As a Minor Hindrance, he argues bitterly for more than his fair share of any loot or reward the group might come across. As a Major Hindrance, he fights over anything he considers unfair, and may even kill for it if he feels slighted or covets something he cannot have."
    },
    {
      "name": "Grim",
      "type": "Minor",
      "points": 1,
      "desc": "The hero is serious, taciturn, and finds mirth tiresome. He’s Provoked on any successful Taunt—whether the opponent has the Provoke Edge or not. Provoked characters subtract 2 from rolls to affect any opponent except the one who insulted him. This lasts until a Joker is drawn (by either side) or someone else successfully Taunts the dour ruffian. Grim also counts as a Requirement for the Menacing Edge."
    },
    {
      "name": "Habit",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "A Minor Habit is an irritating compulsion, while a Major Habit can be a debilitating addiction that leads to Fatigue if not satisfied."
    },
    {
      "name": "Helpless",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "You once stood helpless as great harm befell a loved one, and that paralysis sometimes returns when an ally is in a dire position. As a Minor Hindrance, whenever this character sees an ally suffers a Wound, he is Distracted. As a Major Hindrance, the character is also Vulnerable."
    },
    {
      "name": "Heroic",
      "type": "Major",
      "points": 2,
      "desc": "This noble soul never says no to a person in need. He will always help those who can't help themselves, even if he's not thrilled about it. He’s the first to run into danger and often accepts little to no pay for her efforts."
    },
    {
      "name": "Hesitant",
      "type": "Minor",
      "points": 1,
      "desc": "Your hero hesitates under pressure. He draws two Action Cards in combat and acts on the lower one, unless he draws a Joker. Hesitant characters cannot take the Quick or Level Headed Edges."
    },
    {
      "name": "Idealistic",
      "type": "Minor",
      "points": 1,
      "desc": "You see things in black and white and struggle with more nuanced dilemmas. Most of the time this is an admirable virtue, but it causes great issues when on the horns of a moral dilemma, such as whether to hand a starving poacher over to the authorities or let him get away with his desperate but perhaps necessary crime."
    },
    {
      "name": "Impulsive",
      "type": "Major",
      "points": 2,
      "desc": "These characters act without thinking and rarely consider complicated plans. They rush into action and prefer direct approaches, often leading charges."
    },
    {
      "name": "Jealous",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "Insecurity drives these characters. The Minor version focuses on a specific person or issue, while the Major version makes them envious of anyone who surpasses them."
    },
    {
      "name": "Terran Chauvinist",
      "type": "Minor",
      "points": 1,
      "desc": "You firmly believe humanity is superior to alien races. Suffer -2 penalties when dealing diplomatically with Protoss, Zerg sympathizers, or other alien species. You tend to underestimate alien capabilities."
    },
    {
      "name": "Loyal",
      "type": "Minor",
      "points": 1,
      "desc": "Loyal characters are willing to risk their lives for their friends without hesitation, standing by them no matter the danger."
    },
    {
      "name": "Mean",
      "type": "Minor",
      "points": 1,
      "desc": "This ill-tempered character is unkind, only does things for pay, and has a −1 penalty to Persuasion rolls due to their unpleasant demeanor."
    },
    {
      "name": "Meticulous",
      "type": "Minor",
      "points": 1,
      "desc": "You plan and prepare everything in detail, and aren’t good at improvising when things don’t go as planned. You suffer a –4 penalty on untrained skill rolls instead of the usual –2."
    },
    {
      "name": "Mild Mannered",
      "type": "Minor",
      "points": 1,
      "desc": "This hero isn’t threatening. Maybe he’s a little doughy around the middle, has a kind face, or a soft voice. He subtracts 2 from Intimidation rolls due to his calm or gentle nature."
    },
    {
      "name": "Military Bureaucrat",
      "type": "Minor",
      "points": 1,
      "desc": "Protocol exists for a reason—and you follow it. To ignore standing orders, regulations, or established procedures, you must first succeed on a Spirit roll."
    },
    {
      "name": "Overconfident",
      "type": "Major",
      "points": 2,
      "desc": "Your hero believes they can take on anything. While not suicidal, they rarely back down from challenges, even when it’s unwise."
    },
    {
      "name": "Pacifist",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "A Minor Pacifist avoids unnecessary violence and won’t kill prisoners. A Major Pacifist refuses to fight living creatures, using nonlethal methods for self-defense."
    },
    {
      "name": "Phobia",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "An irrational fear causes this character to take a −1 penalty (Minor) or −2 penalty (Major) on Trait rolls when confronted by their phobia."
    },
    {
      "name": "Post-Traumatic Stress Disorder",
      "type": "Major",
      "points": 2,
      "desc": "You've witnessed horrors no one should endure. Certain triggers may force a Fear check. Flashbacks, panic attacks, or emotional breakdowns can occur under stress. Suffer a -2 penalty to recover from fear effects."
    },
    {
      "name": "Poverty",
      "type": "Minor",
      "points": 1,
      "desc": "This hero starts with half the usual funds and can’t seem to hold onto money, halving their total funds each game week."
    },
    {
      "name": "Psionic Dependency",
      "type": "Major",
      "points": 2,
      "desc": "Your mental powers require chemical stabilization. Without proper medication, you suffer severe penalties to psionic abilities. Extended deprivation may cause dangerous psychic episodes."
    },
    {
      "name": "Psionically Sensitive",
      "type": "Major/Minor",
      "points": "1 or 2",
      "desc": "The character’s mind is particularly sensitive to psionics. As a Minor Hindrance, get a -2 to Discipline against psionic powers. Get a -4 as a Major Hindrance."
    },
    {
      "name": "Quirk",
      "type": "Minor",
      "points": 1,
      "desc": "This character has a small, often humorous, trait or behavior that occasionally causes problems."
    },
    {
      "name": "Ruthless",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "Ruthless characters will do anything to accomplish their goals. Major versions cause true harm, while Minor versions stop short of that."
    },
    {
      "name": "Secret",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "Your hero has a secret he keeps to protect himself or others. As a Minor Hindrance, the secret is troublesome but not life-threatening. The Major version would cause severe problems if discovered. If it ever becomes public knowledge, he should trade it for Enemy, Shamed, Wanted, or another appropriate Hindrance approved by the GM."
    },
    {
      "name": "Selfless",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "You think of others before yourself. You sleep on the floor to give another the bed. You pretend to be full to give your friends the last bite of meat. You stand before your friends when a grenade explodes. You buy the book that everyone else in your group reads—a true hero! The extent and frequency of your sacrifice determines whether this is a Minor/Major Hindrance."
    },
    {
      "name": "Shamed",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "Something haunts your hero. Maybe he made a vow he didn’t keep. Maybe he was defeated in an honorable fight and ordered the death of his foe anyway for some greater principle. Maybe he isn’t actually cowardly but once ran from a battle and left others to die. As a Minor Hindrance, the shameful circumstances aren’t generally known—it just haunts the hero. He might go out of his way, against all reason, not to repeat the mistake. Or he might give in to the same set of circumstances and hate himself for it. As a Major Hindrance, his deed is well known—or at least known among those he cares about. The other player characters should be told the tale as soon as possible (preferably at character creation). If not, it should be revealed by nonplayer characters at some point, and occasionally used against the hero."
    },
    {
      "name": "Short Tempered",
      "type": "Minor",
      "points": 1,
      "desc": "The hero cannot control him or herself when insulted or made fun of. He’s Provoked on any successful Taunt—whether the opponent has the Provoke Edge or not. Provoked characters subtract 2 from rolls to affect any opponent except the one who insulted him. This lasts until a Joker is drawn (by either side) or someone else successfully Taunts the hero. Short Tempered also counts as a Requirement for the Menacing Edge."
    },
    {
      "name": "Small",
      "type": "Minor",
      "points": 1,
      "desc": "The character is unusually small, reducing their Size (and Toughness) by 1. They cannot have a Size below −1, but the Toughness penalty applies."
    },
    {
      "name": "Stimulant Addiction",
      "type": "Minor",
      "points": 1,
      "desc": "Combat stimulants have become part of your daily routine. You become irritable and restless when deprived of them. Suffer a -1 penalty to Influence and other social rolls after prolonged periods without access."
    },
    {
      "name": "Stubborn",
      "type": "Minor",
      "points": 1,
      "desc": "Stubborn individuals always want their way and never admit they’re wrong. Even when it’s painfully obvious they’ve made a mistake they try to justify it with half-truths and rationalizations."
    },
    {
      "name": "Suspicious",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "Your character is suspicious of everyone. As a Minor Hindrance, his paranoia causes frequent trust issues. He might demand full payment before doing a task, want every agreement in writing, or believe even his friends are out to get him. As a Major Hindrance, Support rolls to aid the distrustful individual are made at -2."
    },
    {
      "name": "Talisman",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "Only characters with the Arcane Background (Psionics) Edge can take this Hindrance.The caster is dependent on a physical item to manifest his powers. This is a mental block on the individual’s part. When caught without it, he subtracts 2 from all arcane skill rolls (−4 as a Major Hindrance), and is Stunned if the roll is a Critical Failure. Replacing a lost Talisman depends on the object, but should usually require getting it back from whoever took it. If it was destroyed, the Game Master should work with the player to figure out what might make a suitable replacement and how it might be gained."
    },
    {
      "name": "Tech Dependent",
      "type": "Minor",
      "points": 1,
      "desc": "You trust machines more than people. Suffer a -1 penalty on relevant Trait rolls when deprived of advanced technology, sensors, or computerized assistance."
    },
    {
      "name": "Thin Skinned",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "This character is easily offended. They take a −2 penalty to resist Taunt (Minor) or −4 for Major."
    },
    {
      "name": "Timid",
      "type": "Major",
      "points": 2,
      "desc": "Not everyone has ice water in their veins. Your hero is squeamish at the sight of blood and gore and terrified of coming to harm. He subtracts 2 from Fear checks and when resisting Intimidation."
    },
    {
      "name": "Tongue-Tied",
      "type": "Major",
      "points": 2,
      "desc": "Your hero flubs cool lines (or thinks of them afterwards!), goes off on tangents when he’s trying to talk someone into something, and generally miscommunicates most everything he says. He suffers a -1 penalty to Influence rolls that involve speech."
    },
    {
      "name": "Ugly",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "This character isn’t blessed with good looks, taking a −1 (Minor) or −2 (Major) penalty to Persuasion rolls."
    },
    {
      "name": "Vengeful",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "Payback is…well…bad news for someone, and this hero is going to get it. As a Minor Hindrance he usually seeks vengeance legally. The method varies by situation. Some plot and scheme for months while others demand immediate results. Those with the Major version of this Hindrance don’t let anything prevent them from a reckoning. This doesn’t mean they immediately resort to violence, but their actions always escalate until total and complete satisfaction is achieved."
    },
    {
      "name": "Vow",
      "type": "Minor/Major",
      "points": "1 or 2",
      "desc": "The character has sworn an oath to someone or something he believes in. The danger in fulfilling the Vow and how often it might occur determines the level of the Hindrance. A Minor Vow might be to serve an order with a broad mandate that rarely conflicts with the group’s goals. A Major Vow makes long-term and frequent demands on the servant’s time and results in great risks to his life."
    },
    {
      "name": "Whispers of the Swarm",
      "type": "Major",
      "points": 2,
      "desc": "You occasionally hear echoes of the Hive Mind. The whispers sometimes provide useful clues. More often, they are distracting and unsettling."
    }
  ],
  "edges": [
    {
      "name": "Edges",
      "requirements": "Novice",
      "desc": "BACKGROUND EDGES"
    },
    {
      "name": "Alertness",
      "requirements": "Requirements: Novice",
      "desc": "Not much gets by this hero. He’s very observant and perceptive, and adds +2 to his Perception rolls to hear, see, or otherwise sense the world around him."
    },
    {
      "name": "Ambidextrous",
      "requirements": "Requirements: Novice, Agility d8+",
      "desc": "Your warrior is as deft with his left hand as he is with his right. He ignores the Off-Hand penalty. If holding a weapon in each hand, Ambidextrous characters may stack Parry bonuses (if any) from both weapons."
    },
    {
      "name": "Attractive",
      "requirements": "Requirements: Novice, Vigor d6+",
      "desc": "+2 to Influence rolls if the target is attracted to the character’s general type (gender, sex, species, etc.), +1 otherwise."
    },
    {
      "name": "Very Attractive",
      "requirements": "Requirements: Novice, Attractive",
      "desc": "Increases the bonus from Attractive to +3 if the target is attracted, +2 otherwise."
    },
    {
      "name": "Berserk",
      "requirements": "Requirements: Novice",
      "desc": "Berserkers become wild and nearly uncontrollable when the “red rage” takes them, but they are deadly killing machines as well! As a limited free action, a berserker may “go berserk” voluntarily. If he’s Shaken or Wounded (from physical damage only), he must make a Smarts roll or go berserk whether he wants to or not, he can voluntarily fail this check if he likes. Going Berserk has the following effects:  • Fury: His Strength increases a die type (ignoring his usual maximum) and every attack must be a Wild Attack. He can’t use any skill or ability that requires more than a few seconds of concentration (GM’s call). • Enraged: He ignores two points of Wound penalties and all Fatigue penalties (this stacks with any other abilities that reduce those penalties). • Reckless Abandon: If he rolls a Critical Failure on an attack roll while berserk, he hits a random target within range of her attack (not the intended target), friend or foe. If there are no applicable targets, the blow simply misses, smashes nearby objects, etc. After five consecutive rounds of berserk fury, the hero takes a level of Fatigue. At ten rounds, he takes another level of Fatigue and the rage ends. He may also choose to end his rage at any time by making a Smarts −2 roll (as a free action; possibly avoiding Fatigue if he manages to end his rage before it’s incurred!). Start the count anew if he goes berserk again, even in the same battle."
    },
    {
      "name": "Brave",
      "requirements": "Requirements: Novice, Spirit d6+",
      "desc": "Those with this Edge have learned to master their fear, or have dealt with so many horrors they’ve become jaded. These valiant explorers add +2 to Discipline vs Fear and subtract 2 from Fear Table results."
    },
    {
      "name": "Fearless Example",
      "requirements": "Requirements: Seasoned, Brave",
      "desc": "Allies that can see you gain a +2 bonus against Fear effects."
    },
    {
      "name": "Brawny",
      "requirements": "Requirements: Novice, Strength d6+, Vigor d6+",
      "desc": "Your bruiser is very large or very fit. Her Size increases by +1 (and therefore Toughness by 1) and she treats her Strength as one die type higher when determining Encumbrance and Wounds."
    },
    {
      "name": "Charismatic",
      "requirements": "Requirements: Novice, Spirit d8+",
      "desc": "Your hero is likable for some reason. She may be trustworthy or kind, or might just exude confidence and goodwill. You get one free reroll on Influence rolls."
    },
    {
      "name": "Core Citizen",
      "requirements": "Requirements: Confederate Core Planet or Umoja",
      "desc": "Your character has a network of contacts all throughout core planets. When you make an Influence check for Networking, you gain a +2 on the roll, and you can Network in half the usual duration while within a city with a population of at least 100,000. Furthermore, your character gains a free reroll on the following traits while within an urban environment: Athletics (climbing, jumping and moving through the city only), Perception and Stealth."
    },
    {
      "name": "Elan",
      "requirements": "Requirements: Novice, Spirit d8+",
      "desc": "Elan means energy or spirit. Those who have it rise to the occasion when the going gets toughest. When you spend a Benny or Morale point to reroll a Trait, add +2 to the total. The bonus applies only when rerolling. It doesn’t apply to damage rolls (since they’re not Trait rolls), nor does it apply to Soak rolls unless you’re using another Morale point to reroll the Vigor check."
    },
    {
      "name": "Fame",
      "requirements": "Requirements: Novice Requirements: Seasoned, Fame",
      "desc": "Your character is a minor celebrity of some sort. He can use his celebrity status to add +2 to Influence rolls if a target is friendly and knows who he is (a Lore roll modified by how likely the individual is to know the celebrity). The downside of Fame is that the individual is often recognized, others frequently want something from him, he may be followed by fans or admirers, or he may not be able to shirk obligations, performances, or other duties without causing trouble for himself. Famous Your hero is truly famous. He adds +3 to his Influence rolls when influencing friendly individuals who know who he is. The price is higher for the truly Famous, too, with more demands on his time, obligations, rivals, scandals, and an inability to operate in crowds without being recognized."
    },
    {
      "name": "Fleet-Footed",
      "requirements": "Requirements: Novice, Agility d6+",
      "desc": "The hero’s Speed is increased by +2 and his running die increases one step (from d6 to d8, for example)."
    },
    {
      "name": "Kel-Morian Combine",
      "requirements": "Requirements: Moria",
      "desc": "Your loyalty to one of the Kel-Morian factions has its perks and downsides. You should work with your Game Master to decide what Kel-Morian faction you belong to, such as the Kelanis Shipping Guild, the Meinhoff Miner’s Union, or the Paladino Pirate Blockade. You gain a +2 bonus on Lore and Influence checks when interacting with fellow members of your guild. As long as you are a member in good standing in your Kel-Morian faction, every time you get paid up, you receive an amount of credits equal to 2500x your rank."
    },
    {
      "name": "Noble Born",
      "requirements": "Requirements: Confederate Core Planet",
      "desc": "At the end of every week, the character is wired an amount of credits equal to 2500 times their rank. The money will accumulate in their bank account if they are unable to collect it. Nobles are expected to be able to lead and take responsibility to those under them. You gain a free reroll on Leadership rolls, and Combat Influence attempts against allies under your leadership effects suffer a -2 penalty. You start the game with +1000 Credits."
    },
    {
      "name": "Fame",
      "requirements": "Requirements: Novice",
      "desc": "Your character is a minor celebrity of some sort. He might be a part of a popular band, a minor rock star, or a beloved B-movie actor. He makes double the normal fee when performing for pay. He can also use his celebrity status to add +1 to Influence rolls if a target is friendly and knows who he is (a Lore roll modified by how likely the individual is to know the celebrity). The downside of Fame is that the individual is often recognized, others frequently want something from him, he may be followed by fans or admirers, or he may not be able to shirk obligations, performances, or other duties without causing trouble for herself."
    },
    {
      "name": "Famous",
      "requirements": "Requirements: Seasoned, Fame",
      "desc": "Your hero is truly famous. He’s well known in a large circle such as a large industry, or a popular medium (film or television, the music industry). He makes 5× the normal fee when performing and adds +2 to Influence rolls when influencing friendly individuals who know who he is. The price is higher for the truly Famous, too, with more demands on his time, obligations, rivals, scandals, and an inability to operate in crowds without being recognized."
    },
    {
      "name": "Fleet-Footed",
      "requirements": "Requirements: Novice, Agility d6+",
      "desc": "The hero’s Speed is increased by +2 and his running die increases one step (from d6 to d8, for example)."
    },
    {
      "name": "Infamy",
      "requirements": "Requirements: Novice",
      "desc": "You might be a feared outlaw, a disgraced noble, a ruthless mercenary, or a criminal whose deeds are widely known in a particular region. You gain a +1 on Influence (Intimidation) rolls against those who know who you are (a Lore roll modified by how likely the individual is to recognize your reputation). In addition, you add +1 to Influence rolls when dealing with criminals, cutthroats, mercenaries, or others who respect fear, power, or notoriety. The downside of Infamy is that you are often recognized. Law enforcement, bounty hunters, rivals, victims, and other enemies may seek you out. Honest folk may avoid you, refuse service, charge higher prices, or become suspicious of your motives. You may also find it difficult to hide your identity or escape the consequences of your reputation. Truly Infamous Requirement: Seasoned, Infamy Your reputation is widespread and feared. Your name alone is enough to unsettle many who have heard of your exploits. You gain a +2 to Influence (Intimidation) rolls against individuals who know who you are. You also gain +2 to Influence rolls when dealing with criminals, mercenaries, underworld figures, or others who respect power, violence, or notoriety. The price of your Infamy grows with its reach. Authorities actively monitor your activities, rivals seek to surpass you, victims remember your deeds, and bounty hunters may pursue you. You find it nearly impossible to operate anonymously among those familiar with your reputation, and your presence often attracts trouble before you ever draw a weapon."
    },
    {
      "name": "Military Family",
      "requirements": "Requirements: Novice.",
      "desc": "The hero’s father or mother was a Confederate officer who distinguished him or herself with a glorious career. The hero has a +2 bonus to Influence when dealing with Confederate officers because of his father’s reputation and a +2 to Lore rolls related to the Confederacy. Should he ever fail in his duties in an embarrassing way the bonus becomes a -2 penalty to Influence until he makes it up to himself and to the Confederacy. COMBAT EDGES General Combat"
    },
    {
      "name": "Accuracy",
      "requirements": "Requirements: Seasoned, Instinct d6+, Perception d8+",
      "desc": "With sharp eyes and precise movements, the hero always hits even the smallest target. The hero only suffers half of the Called Shot penalties (rounded up), including to Disarm. This applies before any other penalty reduction. Also, Called Shots and Disarm can be used with free attacks."
    },
    {
      "name": "Bulwark",
      "requirements": "Requirements: Seasoned, Vigor d8+, Strength d8+",
      "desc": "Your body is exceptionally resilient. Gain +2 Toughness."
    },
    {
      "name": "Calculating",
      "requirements": "Requirements: Novice, Intelligence d8+",
      "desc": "A few seconds to study a foe’s actions gives your hero a major advantage. When his Action Card is a Five or less, he ignores up to 2 points of penalties on one action that turn, which can include Multi-Action, cover, Range, and even Wound penalties."
    },
    {
      "name": "Chemical Tolerance",
      "requirements": "Requirements: Novice, Vigor d8+",
      "desc": "Years of exposure have hardened your body. Gain +2 to resist poison, drugs, and addiction. Reduce the duration of negative chemical effects by half."
    },
    {
      "name": "Colossus Slayer",
      "requirements": "Requirements: Seasoned, Agility d8+, Melee d8+, Athletics d8+",
      "desc": "You specialize in combating enormous opponents and know how to exploit the blind spots and vulnerable angles of massive opponents. Ignore the Reach Advantage of enemies that is granted by their Natural Weapons. You also gain +2 damage bonus against opponents of Size 3 or greater. Finally, gain a +2 to Athletics rolls made to Climb, or Maneuver around large opponents."
    },
    {
      "name": "Improved Colossus Slayer",
      "requirements": "Requirements: Veteran, Agility d8+, Melee d10+, Athletics d10+",
      "desc": "Natural Weapons do not gain a Free Attack against you when you move within their reach. You gain a Free Reroll on Athletics and damage rolls against Size 3 or greater opponents."
    },
    {
      "name": "Combat Reflexes",
      "requirements": "Requirements: Seasoned",
      "desc": "Your warrior recovers quickly from shock and trauma. He adds +2 when rolling to recover from being Shaken or Stunned."
    },
    {
      "name": "Dirty Fighter",
      "requirements": "Requirements: Seasoned",
      "desc": "You will do anything to win a fight. You add +2 to rolls when performing a Test with the Melee or Ranged skill."
    },
    {
      "name": "Really Dirty Fighter",
      "requirements": "Requirements: Seasoned, Dirty Fighter",
      "desc": "Your character is extremely skilled in tactical deceit. Should he get a raise on a Melee or Ranged Test, he gains The Drop against that opponent until the foe is no longer Shaken."
    },
    {
      "name": "Dodge",
      "requirements": "Requirements: Seasoned, Athletics d8+ Requirements: Seasoned, Dodge",
      "desc": "The hero can anticipate attacks or move erratically under fire. Unless the victim of a surprise attack is taken completely unaware, Dodge subtracts 2 from all ranged attacks made against him. Dodge does not stack with actual cover. Improved Dodge The hero adds +2 when Evading and Soaking area effect attacks."
    },
    {
      "name": "Empowering Command",
      "requirements": "Requirements: Veteran, Leadership d8+",
      "desc": "When using Leadership to empower allies, choose two eligible Leadership effects instead of one. Each ally may benefit from both effects simultaneously."
    },
    {
      "name": "Extraction",
      "requirements": "Requirements: Seasoned, Athletics d8+ Requirements: Heroic, Athletics d10+, Extraction",
      "desc": "When a character withdraws from melee, adjacent attackers get a free Fighting attack against him. This is a very dangerous proposition for most, but not your wily champion. When moving away from adjacent foes, three of them (player’s choice) don't get their free Fighting attack. Vault Away Once, on his turn, as he Withdraws from Melee, the hero can perform a free attack (melee or ranged), or a free Push, against one of the foes he used the Extraction Edge on. If performing a ranged attack, it is fired immediately after leaving the adjacency, so 1” away from the target."
    },
    {
      "name": "Free Runner",
      "requirements": "Requirements: Novice, Athletics d6+",
      "desc": "The character is skilled and fearless when it comes to running, jumping, swinging, or scampering up walls and obstacles, through crowded city streets, or even swinging through the rigging of a ship. While on foot, he moves at her full Speed in such circumstances and adds +2 to Athletics rolls made to climb or negotiate obstacles as long as there are hand- or footholds she can bound on, bounce off, or swing from."
    },
    {
      "name": "Ghost Infiltrator",
      "requirements": "Requirements: Ghost or Shadowguard Background, Agility d8+, Stealth d8+, Athletics d8+",
      "desc": "Ghost operatives are trained to exploit every distraction, blind spot, and moment of uncertainty. Whether moving unseen through enemy lines or striking from concealment, they instinctively capitalize on an opponent's inability to track their movements. Whenever a target suffers a penalty to Perception rolls made to detect you, you gain a bonus to your Melee and Ranged attack rolls against that target equal to half that penalty (rounded down, minimum +1). Furthermore, when you score a Raise on a successful attack against such a target, the bonus damage die granted by the Raise becomes a d8 instead of a d6. Finally, you may move through spaces occupied by hostile characters. Such spaces are treated as Difficult Terrain."
    },
    {
      "name": "Good Spirits",
      "requirements": "Requirements: Seasoned, Spirit d8+ Requirements: Veteran, Spirit d10+, Good Spirits",
      "desc": "You begin each combat with one additional Morale. Excellent Spirits You begin each combat with two additional Morale."
    },
    {
      "name": "Hard to Kill",
      "requirements": "Requirements: Novice, Spirit d8+ Requirements: Heroic, Vigor d10+, Spirit d8+, Hard to Kill",
      "desc": "This hero has more lives than a herd of cats. He may ignore his Wound penalties when making Vigor rolls to Soak. If your hero is ever “killed,” roll a die. On an odd result, he’s dead as usual. On an even roll, he’s Incapacitated but somehow escapes death. He may be captured, stripped of all his belongings, or mistakenly left for dead, but he somehow survives. Never Give Up While suffering Wound penalties, add the penalty as a bonus to your Toughness and Resolve."
    },
    {
      "name": "Iron Jaw",
      "requirements": "Requirements: Novice, Vigor d8+",
      "desc": "The hero can shrug off even extreme blows. He adds +2 to Soak rolls and Vigor rolls to avoid Knockout Blows."
    },
    {
      "name": "Take the Hit",
      "requirements": "Requirements: Seasoned, Iron Jaw, Vigor d10+",
      "desc": "There are those who must learn to endure violent lives filled with merciless brutality. A character with this Edge has learned to survive under the most relentless conditions. He gets a free reroll on Soak rolls made to eliminate Wounds or Vigor rolls to resist Knockout Blows."
    },
    {
      "name": "Killer Instinct",
      "requirements": "Requirements: Seasoned",
      "desc": "This hero hates losing. He gets a free reroll in any opposed Test he initiates."
    },
    {
      "name": "Level Headed",
      "requirements": "Requirements: Seasoned, Instinct d8+ Requirements: Seasoned, Level Headed",
      "desc": "Fighters who can keep their cool when everyone else is running for cover make deadly combatants. A hero with this Edge draws an additional Action Card in combat and chooses which to use. Improved Level Headed As above but the hero draws two additional cards and chooses which to keep."
    },
    {
      "name": "Man versus Machine",
      "requirements": "Requirements: Veteran, Computers d10+",
      "desc": "When attempting to hack drones, vehicles, AI systems, or automated defenses, gain +2 to your Computer roll. On a Raise, you may inflict one automatic Wound to a non-Wild Card construct instead of taking control."
    },
    {
      "name": "Mobile Attacker",
      "requirements": "Requirements: Seasoned, Agility d8+",
      "desc": "If you move at least half your Speed before attacking, enemies have a -1 penalty to attack you until the beginning of your next turn. Increase your Speed by +1."
    },
    {
      "name": "Improved Mobile Attacker",
      "requirements": "Requirements: Veteran",
      "desc": "Speed bonus becomes +2. You ignore the Unstable Platform penalty."
    },
    {
      "name": "Nerves of Steel",
      "requirements": "Requirements: Novice, Vigor d8+ Requirements: Novice, Nerves of Steel Requirements: Veteran, Nerves of Steel",
      "desc": "Your hero has learned to fight on through the most intense pain. He may ignore one point of Fatigue or Wound penalties. Improved Nerves of Steel The hero ignores two points of Fatigue or Wound penalties. I've Had Worse No matter how hard you punish this hero, each wound inflicted is only another reason to stand up and grin. The character receives +1 to damage rolls for each Wound he currently has."
    },
    {
      "name": "Too Angry to Die",
      "requirements": "Requirements: Veteran, Vigor d8+, Spirit d8+, Nerves of Steel",
      "desc": "Some warriors refuse to accept defeat. Whether driven by rage, determination, or sheer stubbornness, they continue fighting long after their bodies should have given out. Once per encounter, when you would become Incapacitated, you may remain conscious and active by gaining one point of Fatigue. This fatigue cannot be removed until the combat encounter ends. If this Fatigue would incapacitate you, you immediately collapse and become Incapacitated as normal."
    },
    {
      "name": "No Mercy",
      "requirements": "Requirements: Seasoned",
      "desc": "Whenever the hero rerolls damage he adds +2 to his final total."
    },
    {
      "name": "One with the Darkness",
      "requirements": "Requirements: Veteran, Stealth d10+",
      "desc": "While in darkness, smoke, foliage, or heavy concealment, illuminations penalties against you are increased by an additional -2. Furthermore, abilities and gear that reduce such penalties cannot reduce them below -2."
    },
    {
      "name": "Opportunistic",
      "requirements": "Requirements: Veteran",
      "desc": "Opportunity is what one makes of it. When a character with this Edge is dealt a Joker, he adds +4 to his Trait and damage rolls instead of +2."
    },
    {
      "name": "Energy",
      "requirements": "Requirements: Novice, Healing d6+",
      "desc": "When administering drugs or stimulants, choose one: -Increase duration by 50%. -Reduce one negative side effect."
    },
    {
      "name": "Quick",
      "requirements": "Requirements: Novice, Agility d8+",
      "desc": "Quick characters have lightning-fast reflexes and a cool head. Whenever you are dealt an Action Card of Five or lower, you may discard it and draw again until you get a card higher than Five. Characters with both the Level Headed and Quick Edges first draw their additional card and choose which to take. If that card is a Five or less, the Quick Edge may be used to draw a replacement until it’s Six or higher."
    },
    {
      "name": "Resolute",
      "requirements": "Requirements: Seasoned, Spirit d8+",
      "desc": "Years of mental conditioning have transformed your thoughts into a fortress. Telepaths find only locked doors and reinforced walls where others reveal their secrets. Gain +2 to Discipline."
    },
    {
      "name": "Improved Resolute",
      "requirements": "Requirements: Veteran, Resolute",
      "desc": "Gain +2 to Resolve."
    },
    {
      "name": "Sharp Reflexes",
      "requirements": "Requirements: Novice, Agility d8+, Instinct d8+",
      "desc": "The hero reacts promptly to external events. He can roll the same Trait for the Action he wishes to use to Interrupt and he further adds +2 on rolls to interrupt someone else’s actions or resist being interrupted by them. In addition, when spending a Morale to draw a new Action Card, draw an additional one (the Quick Edge applies, if the hero has it) and keep the one you like the most (if the hero is Level Headed, choose amongst all the cards you drew)."
    },
    {
      "name": "See the Unseen",
      "requirements": "Requirements: Veteran, Perception d10+",
      "desc": "Whether through training, intuition, or subtle psychic sensitivity, you notice what others cannot. Reduce concealment penalties against you by 4."
    },
    {
      "name": "Spot Weakness",
      "requirements": "Requirements: Novice, Instinct d8+",
      "desc": "As an action, or as a free action during the Defend or the Aim maneuvers, the hero observes his target to discover his weaknesses. He may roll Perception or Tactics opposed by the target’s Intelligence. If successful, the target is Vulnerable to him until the end of the scene, or until he successfully Spots Weakness on another target. Instead of a single target, he may observe a group of similar Extras. They resist with a group roll and are either all Vulnerable (on a success) or none (on a failure)."
    },
    {
      "name": "Stand Tall",
      "requirements": "Requirements: Novice, Influence d8+ or Leadership d8+, Spirit d8+",
      "desc": "Once per round, when you are hit by an attack that fails to Shaken or Wound you. As a Free Action you can immediately make an Influence or Leadership Support roll."
    },
    {
      "name": "Structural Weakness",
      "requirements": "Requirements: Seasoned, Engineering d8+, Intelligence d8+",
      "desc": "Machines, fortifications, and armored vehicles all have weaknesses. You know exactly where to strike. Against vehicles, robots, buildings, and constructs Gain +1 damage and AP +2."
    },
    {
      "name": "Sweep",
      "requirements": "Requirements: Novice, Strength d8+, Melee d8+ Requirements: Veteran, Sweep",
      "desc": "Some heroes are able to face down multiple enemies at once. As a limited action, Sweep allows a character to make a single Melee attack and apply it against all targets in his Reach (friends and foes alike). If you are not using a two-handed weapon, you have a −2 penalty to your roll. Resolve damage separately for each enemy that’s hit. Improved Sweep As above, but the whirlwind of death is able to avoid allies when using Sweep."
    },
    {
      "name": "Trademark Weapon",
      "requirements": "Requirements: Novice, skill with weapon of d8+ Requirements: Veteran, Trademark Weapon",
      "desc": "The hero knows one unique weapon like the back of his hand. When using it, he adds +1 to his Athletics (throwing), Melee, or Ranged rolls, and +1 to Defense when readied (even if it’s a ranged weapon). A fighter can take this Edge multiple times, applying it to a different weapon each time. If a Trademark Weapon is lost, he can replace it but the benefits don’t kick in for a few days (however long the GM feels is dramatically appropriate). Improved Trademark Weapon As above but the bonuses when using the weapon increase to +2."
    },
    {
      "name": "Two-Weapon Fighting",
      "requirements": "Requirements: Novice, Agility d8+",
      "desc": "If a character makes an attack with one action and another from a different hand in a later action, the second attack doesn’t inflict a Multi-Action penalty. The Off-Hand penalty still applies unless he’s Ambidextrous. The character can choose to make a Melee or Ranged attack with each hand, an Athletics (throwing) attack with each hand, or a combination of these, depending on the readied weapons."
    },
    {
      "name": "Unstoppable Movement",
      "requirements": "Requirements: Seasoned, Athletics d8+",
      "desc": "Whether crossing ruined cities, alien jungles, or active battlefields, you never allow terrain to dictate your movement. You ignore Difficult Terrain penalties. Additionally, you gain a +2 bonus against effects that restrict your movement."
    },
    {
      "name": "Unswerving Resolve",
      "requirements": "Requirements: Seasoned, Spirit d8+",
      "desc": "Once per encounter, when the hero successfully resists a Fear check or any negative mental power, they immediately gain a Morale point. Melee Combat"
    },
    {
      "name": "Blind Fighting",
      "requirements": "Requirements: Novice, Perception d8+",
      "desc": "When your vision is impaired, your other senses step up. You hear or smell others around you, your senses anticipating their movement. You ignore all Illumination and blindness penalties to attack, Test, Support, or to manifest powers on targets up to 3” away."
    },
    {
      "name": "Brawler",
      "requirements": "Requirements: Novice, Strength d8+, Vigor d8+ Requirements: Seasoned, Brawler",
      "desc": "His fists hit like hammers or his talons cut like scythes. His body feels like it’s made of stone. Brawlers increase their Toughness by 1 and roll Strength +d4 when hitting with their fists or feet (or claws if they have them). If they already have a damage die from the Martial Artist Edge, etc., increase the damage die type by one instead. The Brawler Edge doesn’t make the character’s fists Natural Weapons. Bruiser The fighter increases his Toughness an additional +1, and the damage caused with his fists or another die type."
    },
    {
      "name": "Charge",
      "requirements": "Requirements: Novice, Fighting d8+",
      "desc": "A short burst of speed adds significant impact to this hero’s melee damage. If he moves at least 2 squares towards its target, he adds +2 to the damage of his Melee attacks that turn. This may be combined with a Wild Attack."
    },
    {
      "name": "Close Quarters Specialist",
      "requirements": "Requirements: Novice, Melee d8+, Agility d8+",
      "desc": "You excel at closing the distance and fighting inside an opponent's guard. Long weapons lose much of their advantage against you once you get close. Increase Minimum Reach penalties against you by -1. Gain +1 to Melee against opponents suffering from Minimum Reach penalties."
    },
    {
      "name": "Combat Acrobat",
      "requirements": "Requirements: Novice, Agility d8+, Athletics d8+ Requirements: Veteran, Combat Acrobat, Agility d10+, Athletics d10+",
      "desc": "Through exceptional agility, timing, and battlefield awareness, you can slip past an opponent's guard before they have the opportunity to strike. Whether diving through incoming attacks, rolling beneath a weapon's reach, or exploiting the smallest opening, you excel at closing the distance against opponents who rely on superior reach. You do not provoke Free Attacks when moving through an opponent's Reach and you gain +1 to Athletics rolls. This Edge does not protect against Free Attacks triggered by other effects, abilities, or Edges unless specifically noted. Improved Combat Acrobat Years of training have transformed your movement into a combat art. Enemies struggle to predict your approach, often realizing too late that you have already slipped inside their defenses. Opponents gain no Reach Advantage against you. You also gain a +2 to Defense as long as your character can move."
    },
    {
      "name": "Counterattack",
      "requirements": "Requirements: Seasoned, Melee d8+ Requirements: Veteran, Counterattack Requirements: Heroic, Counterattack",
      "desc": "Fighters with this Edge deal instant punishment for an enemy’s mistakes. Once per round (if not Shaken or Stunned), the character receives a Free Attack against one failed Fighting attack against him. The counterattack takes place immediately (before other hits against the hero on the same Action Card, if any). Improved Counterattack As above but the hero gets a Free Attack against up to three failed attacks each round. Reprisal The hero can now use his counterattacks against opponents in Reach of his weapon even when the failed melee attack does not target him. He could counterattack an enemy targeting an ally or a bystander he wishes to protect. The attack must roll lower than his Parry, regardless if it hits his ally. The counterattack is resolved after the enemy’s attack."
    },
    {
      "name": "Defender",
      "requirements": "Requirements: Seasoned, Melee d6+",
      "desc": "You can share your shield’s Defense and shield cover bonus with one adjacent ally as a free action. Shield bonuses don’t stack, so use only the highest if a character is protected by more than one."
    },
    {
      "name": "Ghost Knife Fighter",
      "requirements": "Requirements: Ghost Background, Melee d8+, Stealth d8+",
      "desc": "Gain +1 Fighting and a +2 to damage with Reach 0 weapons. Additionally, reduce Called Shots penalties made with Reach 0 weapons by 1."
    },
    {
      "name": "Parry",
      "requirements": "Requirements: Seasoned, Melee d8+ Requirements: Veteran, Parry",
      "desc": "Through hard-fought experience your hero has learned to defend himself in vicious hand-to-hand combat. His Defense increases by +1 against melee attacks and any Gang Up bonus against him is reduced by one. Improved Parry The hero’s Defense bonus is now +2 and the Gang Up bonus against him is reduced by 2."
    },
    {
      "name": "Feint",
      "requirements": "Requirements: Novice, Intelligence d8+, Melee d8+",
      "desc": "When performing a Melee Test, you can choose to make the foe resist with Intelligence instead of Agility. Also, once per round, the hero gets a free attack against one foe who failed the Smarts roll to resist such a Test."
    },
    {
      "name": "First Strike",
      "requirements": "Requirements: Novice, Agility d8+ Requirements: Heroic, First Strike",
      "desc": "Once per round, as long as he’s not Shaken or Stunned, the hero gets a free Fighting attack against a foe immediately after he moves into Reach. Improved First Strike As above but the hero may attack up to three foes each round."
    },
    {
      "name": "Formation Fighter",
      "requirements": "Requirements: Novice, Tactics d6+ Requirements: Novice, Formation Fighter, Tactics d8+",
      "desc": "The solder has trained to fight alongside others, overwhelming their common foe with synchronized strikes and blows. He increases the Gang Up bonus by an additional +1 for herself and his allies. The maximum Gang Up bonus is still +4 no matter how many Formation Fighters stand together. Shield Wall Trained soldiers can stand against overwhelming odds and furious hordes with discipline, training, and a sturdy shield. Characters with the Shield Wall Edge (and at least a medium shield) add +1 to their Defense if they are adjacent to one ally who also has the Shield Wall Edge, and +2 if they have two adjacent allies with that Edge (the maximum bonus)."
    },
    {
      "name": "Frenzy",
      "requirements": "Requirements: Seasoned, Melee d8+ Requirements: Veteran, Frenzy Requirements: Novice, Martial Artist, Melee d6+, Ranged d6+ Requirements: Seasoned, Gun Fu!, Melee d10+, Ranged d10+ Requirements: Veteran, Enlightened Gun Fu!, Marksman",
      "desc": "As a limited action, the character rolls two Melee dice instead of one. Each die hits and causes damage separately. (The Wild Die may replace either attack as desired.). The extra die may be allocated to the same or different targets as he sees fit. Resolve each separately. Improved Frenzy As Frenzy but the fighter adds a third Melee die to his Fighting attack made with Frenzy this turn. Gun Fu! Heavily trained in close quarters gunplay, you know gun fu. When using pistols against a target’s Defense, you have +2 to Ranged and +2 to Pistol damage. This benefit only applies to such close range combat, not to attacks from further than adjacent. Enlightened Gun Fu! Integrated training has honed this warrior's reflexes to the point that pistols are an extension of his body. He may fire pistols when using Combat Edges such as First Strike, Frenzy, and Sweep. Gun Fu Master! This master of flowing pistol combat has evolved his techniques to compensate for motion. He may use the Marksman Edge while moving up to half Pace and may apply it to the first and second attacks he makes in a turn."
    },
    {
      "name": "Leap",
      "requirements": "Requirements: Novice, Athletics d8+",
      "desc": "As part of your movement, you may leap up to your Speed. This movement ignores difficult terrain and does not provoke free attacks for moving within an enemy’s reach. If you attack a target immediately after leaping, the target does not gain Gang Up bonuses against you until the beginning of your next turn."
    },
    {
      "name": "Martial Artist",
      "requirements": "Requirements: Novice, Melee d6+ Requirements: Seasoned, Martial Artist",
      "desc": "The fighter has trained in basic martial arts. His fists and feet are weapons (see Natural Weapons) so he’s always considered armed. He adds +1 when striking with them and causes Strength+d4 damage. If he already has a Strength damage die the Brawler Edge, increase the damage a die type. Martial Warrior Increase the warrior’s Melee bonus to +2 and his damage die by an additional step."
    },
    {
      "name": "Polearm Master",
      "requirements": "Requirements: Seasoned, Melee d8+",
      "desc": "You have mastered the use of long-reach weapons and know how to maintain distance even against highly mobile opponents. You do not have Minimum Reach penalties. You also gain a +1 bonus Melee and damage rolls when wielding a weapon with Reach 2 or greater."
    },
    {
      "name": "Redirect Blows",
      "requirements": "Requirements: Seasoned, Melee d8+, Agility d8+",
      "desc": "Once per round, when being targeted by a melee attack, the hero can roll Melee opposed to the attacker’s Melee total. If successful, he redirects the attack to a new target, adjacent to himself and in Reach of the attacker. The attack is now resolved against that target instead of against the hero. The new target, not expecting that blow, suffers a –2 penalty to Defense (–4 on a raise on the roll to redirect)."
    },
    {
      "name": "Savagery",
      "requirements": "Requirements: Novice, Melee d6+",
      "desc": "Violence is a way of life for some. Those with this Edge hit their foes hard enough that they often don’t get to reply in kind. A character with this Edge causes +4 damage when making a Wild Attack rather than +2."
    },
    {
      "name": "Shadowguard Duelist",
      "requirements": "Requirements: Shadowguard Training, Melee d8+, Agility d8+",
      "desc": "You gain a +1 to Melee with weapons of Minimum Reach 0. Additionally, once per round, you gain a free reroll on a failed Melee roll with a weapon of Minimum Reach 0."
    },
    {
      "name": "Wrestler",
      "requirements": "Requirements: Novice, Strength d8+",
      "desc": "Once per round, when the wrestler successfully Grapples an enemy, he may immediately make one free Crush, Disarm, Takedown, Throw, or Drag action on that target."
    },
    {
      "name": "Wrestling Combatant",
      "requirements": "Requirements: Seasoned, Athletics d8+, Wrestler",
      "desc": "You excel at close-quarters combat, turning every grapple into a brutal contest of strength and leverage. Gain +2 to Athletics rolls involving Grappling and +2 damage when making attacks against a grappled opponent. Ranged Combat"
    },
    {
      "name": "Deployment Tactics",
      "requirements": "Requirements: Novice, Tactics d6+",
      "desc": "You count for the Gang Up bonus of your allies even if not adjacent or attacking your opponent and the opponent is within your weapon range."
    },
    {
      "name": "Double Tap",
      "requirements": "Requirements: Seasoned, Ranged d8+",
      "desc": "Experienced firearms experts fire two shots in rapid succession without spoiling their aim. Double Tap can only be used with weapons that have a Rate of Fire of 1 and can fire two shots without needing to manually reload. It adds +1 to hit and damage at the cost of one extra bullet. This is per action, so a shooter can Double Tap more than once if she performs a Multi-Action. Double Tap cannot be combined with Rapid Fire. If used with a weapon capable of Three Round Burst, it adds +2 to Shooting and damage instead of +1 and expends six bullets."
    },
    {
      "name": "Herdsman",
      "requirements": "Requirements: Seasoned, Ranged d8+",
      "desc": "Once per round, when you hit a target with a Ranged attack, you may force your target to make an opposed Smarts roll against the Shooting total. If the target fails, they are moved 1\" in any direction of your choosing, or 2\" if you won the opposed roll with a Raise. This forced movement does not provoke Free Attacks, nor can it force a target into hazardous terrain (like a fire or off a cliff). If the attack targets multiple individuals (such as with a high Rate of Fire or Suppressive Fire), this effect may be applied to all targets hit."
    },
    {
      "name": "Marksman",
      "requirements": "Requirements: Seasoned, Athletics d8+ or Ranged d8+",
      "desc": "The hero is a natural with ranged weapons. If he doesn’t move in a turn and fires no more than a Rate of Fire of 1 as her first action, he may add +1 to an Athletics (throwing) or Ranged roll, or ignore up to 2 points of penalties from Called Shots, Cover, Range, Scale, or Speed. This is a lesser version of the Aim maneuver and does not stack with it. Marksman doesn’t apply to additional attacks after the first in a turn."
    },
    {
      "name": "Focus Fire",
      "requirements": "Requirements: Veteran, Marksman, Athletics d10+ or Ranged d10+",
      "desc": "The Marksman Edge and the Aim maneuver affect all of the shooter’s ranged attacks on his turn, not just the first one, as long as he fires no more than a Rate of Fire of 1, doesn’t move, and all his attacks target the same foe as the first one. Also, after the hero successfully hits a target for the second time in the same turn, the target becomes Vulnerable."
    },
    {
      "name": "Sharpshooter",
      "requirements": "Requirements: Veteran, Marksman, Athletics d10+ or Ranged d10+",
      "desc": "A sharpshooter is a sniper able to take enemies down from afar. Aiming is his best friend. When the hero benefits from the Aim maneuver on a target and performs a single attack this turn, he also adds the benefits of the Marksman Edge. Also, once per round, he gets a free reroll on damage when targeting head or vitals."
    },
    {
      "name": "Like Fish in a Barrel",
      "requirements": "Requirements: Seasoned, Ranged d8+",
      "desc": "Years of combat have taught you that enemies packed together are already halfway defeated. When making an Area Effect attack, targets suffer a -2 to their Evasion rolls. Additionally your Area Effect attacks gain +2 to damage."
    },
    {
      "name": "Precision Shot",
      "requirements": "Requirements: Novice, Ranged d8+",
      "desc": "If you did not move this turn and spent an action aiming, gain a +2 damage on your ranged attacks this turn."
    },
    {
      "name": "Point Blank Master",
      "requirements": "Requirements: Veteran, Ranged d10+",
      "desc": "The shooter has learned to fire his firearms even in close combat. When he fires a firearm in melee, he adds +2 to the Ranged roll and is not Vulnerable for shooting a different opponent."
    },
    {
      "name": "Powered Armor Training",
      "requirements": "Requirements: Novice",
      "desc": "The character can use terran powered armors such as the CMC combat suits. Without training, the character takes a -2 penalty to speed and -4 to attacks, defense, and all skill checks relying on Strength or Agility."
    },
    {
      "name": "Rapid Fire",
      "requirements": "Requirements: Seasoned, Ranged d6+ Requirements: Veteran, Rapid Fire",
      "desc": "The shooter is practiced at taking quick and accurate shots. As long as he’s armed with a fast-firing ranged weapon of some sort (such as a revolver or semi-automatic) and has enough ammunition to do so, he may increase his weapon’s Rate of Fire by 1 for any one of his Shooting attacks that turn. Improved Rapid Fire The shooter may now increase his weapon’s Rate of Fire by 1 twice in the same turn (via a Multi-Action)."
    },
    {
      "name": "Rapid Reload",
      "requirements": "Requirements: Seasoned, Athletics d8+ or Ranged d8+",
      "desc": "If the shooter doesn’t move in a turn, he gets one Reload action for free (so he can reload then attack and still benefit from the Marksman Edge if he has it)."
    },
    {
      "name": "Return Fire",
      "requirements": "Requirements: Seasoned, Ranged d8+ Requirements: Veteran, Return Fire Requirements: Seasoned, Ranged d8+",
      "desc": "Once per round (if not Shaken or Stunned), the character receives a Free Ranged Attack against one failed Ranged attack against him. The Return Fire takes place immediately (before other hits against the hero on the same Action Card, if any). This attack can only be made at Rate of Fire of 1. Improved Return Fire As above but the hero gets a Free Ranged Attack against up to three failed attacks each round. Rock and Roll! Experienced shooters learn to compensate for the recoil of fully automatic weapons. If a character with this Edge doesn’t move on his turn, he ignores the Recoil penalty."
    },
    {
      "name": "Shot on the Runner",
      "requirements": "Requirements: Veteran, Instinct d8+, Ranged d8+",
      "desc": "You've spent years gunning down enemies who thought they could sprint between pieces of cover. Once per round, a target that leaves cover within your weapon's range provokes a free ranged attack."
    },
    {
      "name": "Steady Hands",
      "requirements": "Requirements: Novice, Ranged d8+",
      "desc": "Firing from a moving vehicle is tricky business, but your hero has figured it out. He ignores the Unstable Platform penalty. This also helps when running, reducing the usual penalty from -2 to -1."
    },
    {
      "name": "Hit and Run",
      "requirements": "Requirements: Seasoned, Steady Hands, Athletics d8+ or Ranged d8+",
      "desc": "The hero knows how to keep a steady aim despite moving around. He always ignores any penalty for Running on all of his Athletics or Ranged rolls."
    },
    {
      "name": "Through and Through",
      "requirements": "Requirements: Seasoned, Ranged d8+",
      "desc": "When making a ranged attack against a target with Cover, you can choose to reduce the benefit of that target's Cover by taking an equal penalty to your damage roll."
    },
    {
      "name": "Threatening Shot",
      "requirements": "Requirements: Seasoned, Instinct d8+, Ranged d8+",
      "desc": "You have learned to dominate open ground with disciplined fields of fire. Enemies quickly learn that moving under your watch is often fatal. As a Limited Action, you can set up a killing zone by placing a Large Burst Template that lasts until the beginning of your next turn. Enemies moving through your kill zone provoke a Ranged Free Attack from you. You can benefit from this Edge a maximum amount of times per round equal to your weapon’s Rate of Fire."
    },
    {
      "name": "Trick Shot",
      "requirements": "Requirements: Seasoned, Athletics d8+ or Ranged d8+",
      "desc": "When performing a Test with the Athletics or Ranged skill, the character can choose to make the foe resist with Instinct instead of Agility. In addition, once per round, you get a free attack against one foe who failed his roll to resist such a Test."
    },
    {
      "name": "Weapon Comprehension",
      "requirements": "Requirements: Novice, Engineering d6+, Ranged d6+",
      "desc": "You understand firearms on a level few soldiers ever achieve. To you, every weapon is a machine with predictable strengths, weaknesses, and solutions. Ranged weapons you have readied do not jam. You can repairs damaged firearms as a Limited Free Action. You gain a +1 to damage and AP +1 with firearms. PROFESSIONAL EDGES"
    },
    {
      "name": "Acrobat",
      "requirements": "Requirements: Novice, Agility d8+, Athletics d8+",
      "desc": "The Acrobat gets one free reroll on Athletics totals that involve balance, tumbling, or grappling. It doesn’t affect rolls to interrupt actions. Acrobats also leap about quickly so that opponents take a -1 to their attacks against them as long as they’re aware of an attack, can reasonably move about, and aren't suffering any Encumbrance penalties."
    },
    {
      "name": "Assassin",
      "requirements": "Requirements: Novice, Agility d8+, Melee d6+ or Ranged d6+, Stealth d8+ Requirements: Seasoned, Assassin Requirements: Veteran, Sneak Attack",
      "desc": "Assassins are trained killers who know how to kill even the toughest foes. They add +2 to damage rolls when their foe is Vulnerable or they have The Drop. Sneak Attack The +2 bonus from the Assassin Edge is replaced by a d6, which may Ace as usual. This applies to Athletics (throwing), Melee, or Ranged attacks. Improved Sneak Attack The character’s Sneak Attack bonus also now applies if the foe is Distracted."
    },
    {
      "name": "Athlete",
      "requirements": "Requirements: Novice, Strength d6+, Athletics d8+",
      "desc": "An athlete, strong and fit, gets a free reroll on Athletics totals that involve climbing, swimming, jumping (long or high), grappling, as well as Athletics or Strength totals for Pushing, or Tripping targets. It doesn’t affect rolls for interrupting actions. Athletes also increase the Short Ranges of throwing actions by 1 (double the Short Range to get the Medium Range, and double again for the Long Range)."
    },
    {
      "name": "Bureaucrat",
      "requirements": "Requirements: Novice, Influence d6+, Lore d6+",
      "desc": "Dealing with the Confederacy and bureaucracies in the Koprulu system, might be tedious and tiring. However, the skills of an expert in dealing with bureaucracies are still greatly sought. A character with this edge gains a +2 bonus to Lore rolls when interacting with bureaucracy (filling out paperwork, dealing with red tape, completing a process, among others), as well as to Influence rolls when dealing with humans in the course of completing a bureaucratic requirement."
    },
    {
      "name": "Diplomat",
      "requirements": "Requirements: Novice, Instinct d6+, Insight d6+, Influence d8+",
      "desc": "Diplomats are experts at dealing with people, understanding their needs, and getting what they want. They receive +1 to any Influence rolls, and also +1 to Insight rolls."
    },
    {
      "name": "Culinary Master",
      "requirements": "Requirements: Novice, Spirit d6+",
      "desc": "You are a master of the art of cooking food and granting hospitality. You can prepare meals so good that boost morale, granting your allies that partake in it a +1 bonus to Spirit rolls for the rest of the day. You also gain a +1 bonus to Persuasion rolls with those who partake of your food."
    },
    {
      "name": "Enforcer",
      "requirements": "Requirements: Novice, Influence d6+, Ranged d6+, Survival d4+",
      "desc": "Either because they worked for a police force or for a criminal organization, enforcers are experts at tracking down people. Enforcers have +2 to Networking rolls to get information about people as well as a +2 to Survival when following someone."
    },
    {
      "name": "Explorer",
      "requirements": "Requirements: Vigor d8+, Smarts d8+, Science d8+",
      "desc": "An explorer is an expert at surviving and investigating the far-away places of the universe. He gains a +2 on Science rolls when applied to topics outside colonized human space. Also, as a veteran traveler, he receives +2 on Survival and Vigor rolls when exploring places and star systems humans have not visited before."
    },
    {
      "name": "Gearhead",
      "requirements": "Requirements: Novice, Intelligence d6+, Engineering d8+",
      "desc": "The character is good with mechanical and electronic devices, and can more easily figure out how to design, use and repair them. He gets a free reroll on Engineering rolls. With a raise, you halve the time normally required to work a device. For example, if a repair job states that a raise repairs it in half the time, you could finish the job in one-quarter of the time."
    },
    {
      "name": "Hacker",
      "requirements": "Requirements: Novice, Intelligence d6+, Lore d6+, Computers d6+",
      "desc": "A hacker receives +1 to all Lore rolls when using a computer and +1 on Computers rolls when hacking a computer and reduces all Hacking and Networking times by half when using a computer."
    },
    {
      "name": "Cage Breaker",
      "requirements": "Requirements: Heroic, Computers d12+, Hacker",
      "desc": "You ignore 2 points of penalties to Computer rolls (or get a +1 to Computer rolls if there are no penalties). Failed hacking attempts trigger fewer security consequences at the GM's discretion."
    },
    {
      "name": "Power Hacker",
      "requirements": "Requirements: Seasoned, Hacker, Computers d8+",
      "desc": "The hacker is used to coding under high pressure and dealing with the most secure systems. He gets a free reroll when failing a Computers roll. He can also ignore the advice about making repetitive Support or Test rolls from Savage Worlds if using Computers to control the local environment (and has the ability to connect to it)."
    },
    {
      "name": "Hardened Survivalist",
      "requirements": "Requirements: Novice, Survival d6+, Spirit d6+",
      "desc": "Gain +2 Toughness against environmental hazards and +2 to Survival checks."
    },
    {
      "name": "Investigator",
      "requirements": "Requirements: Novice, Intelligence d8+, Lore d8+",
      "desc": "Investigators spend a great deal of time in vast libraries researching ancient legends,and deducing mysteries. They add +2 to Lore rolls."
    },
    {
      "name": "Jack-of-All-Trades",
      "requirements": "Requirements: Novice, Intelligence d10+",
      "desc": "Through advanced schooling, book-learning, or just amazing intuitive perception, your hero has a talent for picking up skills on the fly. There’s little he can’t figure out given a little time and a dash of luck. The character makes a Intelligence roll as an action after observing or studying some subject. He gains a d4 in the relevant skill with success, or d6 with a raise. He may try again after an hour of study, trial and effort, or immersion if he fails or wants to try for a raise. This lasts until the character attempts to learn a different subject, whether he’s successful or not."
    },
    {
      "name": "Medic",
      "requirements": "Requirements: Novice, Medicine d6+",
      "desc": "A Medic is trained in the use and configuration of the latest nanotechnology medical devices, and is many times crucial to the survival of the group. The Medic receives a +2 to all Healing rolls made to assist characters. This bonus also applies to the use of Portable Healing Kits and Healing Pods. If the Medic has to attend to his traveling companions, up to five of them add this bonus to their natural healing rolls as well."
    },
    {
      "name": "Miner",
      "requirements": "Requirements: Novice, Science d4+, Spirit d6+, Survival d6+",
      "desc": "The Survival skill is used when mining or obtaining elements from planets or asteroids. Miners gain a +2 bonus to Science and Survival rolls involved when searching for, identifying, locating, and mining minerals or precious elements. They also get a +2 bonus when selling these minerals back in civilization."
    },
    {
      "name": "Scholar",
      "requirements": "Requirements: Novice, Intelligence d8+",
      "desc": "Learned professors, devoted students, and amateur enthusiasts spend great amounts of time and energy studying particular subjects. They become experts in these fields, and rarely fail to answer questions in their particular area of expertise. Pick any one of the following skills: Lore, Tactics, or Science, and add +2 to the total whenever they’re used. This Edge may be taken more than once if applied to different skills."
    },
    {
      "name": "Soldier",
      "requirements": "Requirements: Novice, Strength d6+, Vigor d6+",
      "desc": "Professional soldiers get used to carrying heavy loads and enduring harsh conditions. After a few days getting used to their gear (GM’s call), they treat their Strength as one die type higher when determining Encumbrance and Wounds. (This stacks with the Brawny Edge.) They also get a free reroll on Vigor rolls made to survive environmental hazards."
    },
    {
      "name": "Strategist",
      "requirements": "Requirements: Novice, Tactics d8+",
      "desc": "Strategists don’t have just a single plan in mind. They imagine various outcomes and prepare for them all. A strategist gets a free reroll on Tactics rolls."
    },
    {
      "name": "Woodsman",
      "requirements": "Requirements: Novice, Vigor d6+, Survival d8+",
      "desc": "Woodsmen are rangers, scouts, and hunters who are more at home in the wilderness than urban areas. They are skilled trackers and scouts, and know how to live off the land for months at a time. Woodsmen get a free reroll to Perception, Survival and Stealth rolls while in the wild (not cities, ruins or underground). In addition, the character draws an additional Action Card for initiative while in the wild and ignores penalties for Difficult Ground. PSIONIC POWER EDGES"
    },
    {
      "name": "Augmentation Specialist",
      "requirements": "Requirements: Seasoned, Augmentation Focus",
      "desc": "You instinctively reinforce your body and mind beyond normal limitations. Double the duration of your Augmentation powers."
    },
    {
      "name": "Cloaking Specialist",
      "requirements": "Requirements: Seasoned, Cloaking Focus",
      "desc": "Your psychic camouflage becomes almost instinctive. Gain +2 Stealth while cloaked."
    },
    {
      "name": "Danger Sense",
      "requirements": "Requirements: Novice, Psi Level 1+",
      "desc": "By projecting a constant psychic field, the Psion picks up on environmental cues that allow him to sense when something bad is about to happen. When rolling for Surprise, he adds +2 to his Perception roll to act in the first round. With a raise, he starts the encounter on Hold. In other situations not covered by the Surprise rules (a sniper shot, pit trap, poisoned drink, etc.), The Psion gets a Perception roll at -2 (or +2 if a Notice roll is usually allowed) to detect the hazard and take appropriate action. If this was an attack and the Psion makes his Perception roll, the foe doesn’t get The Drop against him."
    },
    {
      "name": "Combat Precognition",
      "requirements": "Requirements: Veteran, Danger Sense, Psionics d10+",
      "desc": "Your mind processes danger fractions of a second before it occurs. You are immune to being vulnerable."
    },
    {
      "name": "Psionic Reflexes",
      "requirements": "Requirements: Heroic, Danger Sense, Psionics d10+",
      "desc": "The Psion enhanced senses extend to his defensive skills, he can foresee movements and attacks and his body reacts with the speed of the mind. He may use Discipline instead of Defense for Physical attacks."
    },
    {
      "name": "Mind over Matter",
      "requirements": "Requirements: Veteran, Psionics d8+, Danger Sense",
      "desc": "The Psion can shrug off physical damage by just meditating and maintaining an intense state of focus. While not shaken or stunned, you may use Resolve instead of your base Toughness for resisting physical damage."
    },
    {
      "name": "Uncanny Reflexes",
      "requirements": "Requirements: Veteran, Danger Sense, Athletics d8+, Psionics d8+",
      "desc": "The character has an uncanny ability to avoid area attacks and effects. He ignores the usual −2 Agility penalty when making Evasion attempts. He also gets a regular Evasion attempt against area effect attacks or effects that don’t usually allow it (at the usual −2 penalty), such as burst or blast, or even confusion or similar spells cast with the Area Effect modifier."
    },
    {
      "name": "Efficient Manifestation",
      "requirements": "Requirements: Veteran, Psionics d8+",
      "desc": "Your powers flow effortlessly, requiring less concentration and mental effort than those of ordinary psychics. Reduce the Stress Point cost of your powers by 1 (minimum 1)."
    },
    {
      "name": "Ghost Operative",
      "requirements": "Requirements: Veteran, Ghost Background",
      "desc": "Years of conditioning have fused military training and psionic talent into a single deadly discipline. Once per turn, reroll a Psionics roll."
    },
    {
      "name": "Neural Assault",
      "requirements": "Requirements: Veteran, Telepathy Focus",
      "desc": "Description Your psychic attacks strike directly at the nervous system. Whenever a Telepathy power causes Shakens or Wounds, the target becomes Vulnerable."
    },
    {
      "name": "Psi Level",
      "requirements": "Requirements: Novice, Arcane Background (Psionics), Spirit d6+",
      "desc": "Every Terran psychic possesses a measurable level of psionic potential known as their Psi Rating. This rating represents both the raw power of the character's mind and their ability to withstand the strain of advanced psychic techniques. Most Terran psychics never develop beyond Psi Rating 4 or 5. Veteran Ghosts and Shadowguards may reach Psi Rating 6 or higher through years of training and conditioning. Only the most gifted or genetically exceptional individuals ever approach Psi Rating 8. Psi Ratings of 9 and 10 are legendary and almost unheard of among Terrans. Each time this Edge is taken, increase your Psi Level by 1, but the requirements change as it follows: PL1-3 Spirit d6+ PL4-5 Spirit d8+ PL6-7 Spirit d10+ PL8-9 Spirit d12+ PL10 Spirit d12+1 In addition: * Gain one new Psionic Power. * Increase your Stress Pool according to your new PL. * You may immediately learn two powers whose Psi Level requirement you now meet. Certain powers, Edges, and special abilities gain additional benefits based on your Psi Level. Rank Limits Your maximum Psi Level is determined by Rank: Rank Maximum Psi Level Novice 3 Seasoned 5 Veteran 7 Heroic 9* Legendary 10* * Psi Level 9 and 10 normally require a special Edge, Background, or GM approval. Special: Psi Level may be taken multiple times. A character's Psi Level can never exceed the maximum allowed by their Rank or any racial or background limitations. Psi Level and Detection Powerful psychics are easier to detect. * Psi Level 1-4: No modifier. * Psi Level 5-6: +1 to attempts to detect the character psionically. * Psi Level 7-8: +2. * Psi Level 9-10: +4."
    },
    {
      "name": "Psi Sensitive",
      "requirements": "Requirements: Novice, Arcane Background (Psionics)",
      "desc": "You perceive faint psychic echoes where others notice nothing. Even before formal training, your mind naturally resonates with psionic energies. Gain +2 to Perception rolls involving psionic phenomena. Gain +1 to Discipline and Resolve against hostile psionic powers."
    },
    {
      "name": "Psychic Discipline Focus",
      "requirements": "Requirements: Novice, Psionics d6+ Requirements: Seasoned, Psionics d8+, Psychic Discipline Focus",
      "desc": "Some psions spread their talents across many fields. Others dedicate themselves to mastering a single aspect of the psychic arts, refining a chosen discipline until it becomes second nature. Choose one psionic discipline. Gain +1 to all activation rolls involving powers from that discipline. You can manifest your discipline’s power at +1 PL. Improved Psychic Discipline Focus Increase the bonus to +2."
    },
    {
      "name": "Telepath",
      "requirements": "Requirements: Seasoned, Telepathy Focus",
      "desc": "You instinctively understand how minds think, react, and break. When a Telepathy power Shakens or wounds a target, the target also becomes Distracted."
    },
    {
      "name": "Terran Energy Adept",
      "requirements": "Requirements: Novice, Arcane Background (Psionics)",
      "desc": "Energy Adepts manifest pure psionic force as destructive energy projections capable of devastating living and mechanical targets alike. Gain access to Energy Discipline, Energy becomes a native discipline. You learn one Energy power. Gain +1 to activate Energy powers, Maximum Psi Rating becomes 10 and your maximum Spirit increases to d12+1."
    },
    {
      "name": "Energy Adept",
      "requirements": "Requirements: Seasoned, Terran Energy Adept, Energy Focus",
      "desc": "You channel raw psionic force with terrifying efficiency. Damaging Energy powers gain +2 damage."
    },
    {
      "name": "Terran Pyrokinetic",
      "requirements": "Requirements: Novice, Arcane Background (Psionics)",
      "desc": "Pyrokinetics channel psionic energy into destructive thermal reactions, creating and manipulating fire through force of will alone. Gain access to the Pyromancy Discipline. Pyromancy becomes a native discipline. You learn one Pyromancy power. Gain +1 to activate Pyromancy powers. Maximum Psi Rating becomes 10 and your maximum Spirit increases to d12+1."
    },
    {
      "name": "Pyrokinetic",
      "requirements": "Requirements: Seasoned, Terran Pyrokinetic, Pyromancy Focus",
      "desc": "Fire responds to your emotions almost as readily as your commands. Targets set on fire by your powers suffer -2 to recover from Shaken."
    },
    {
      "name": "Terran Technomancer",
      "requirements": "Requirements: Novice, Arcane Background (Psionics)",
      "desc": "Technomancers possess an unusual affinity for machines and electronic systems, allowing them to influence technology through psionic means. Gain access to the Technomancy Discipline, Technomancy becomes a native discipline. You learn one Technomancy power. Gain +1 to activate Technomancy powers, Maximum Psi Rating becomes 10 and your maximum Spirit increases to d12+1."
    },
    {
      "name": "Technomancer",
      "requirements": "Requirements: Seasoned, Terran Technomancer, Technomancy Focus",
      "desc": "Machines speak a language only you can hear. Gain +2 to Psionics rolls when using powers against Vehicles, Drones, Robots or Computers."
    },
    {
      "name": "Terran Telekinetic",
      "requirements": "Requirements: Novice, Arcane Background (Psionics) Requirements: Seasoned, Terran Telekinetic, Telekinesis Focus",
      "desc": "Among all known Terran psychics, Telekinetics—often called \"Teeks\"—are the rarest and most feared. While most psions develop abilities centered around telepathy and mental influence, Telekinetics possess the ability to manipulate matter directly through psionic force. Their gifts allow them to move objects, create invisible barriers, crush armored targets, and project devastating waves of force. Many psionic researchers believe Telekinetics represent an evolutionary divergence within the Terran psychic population. Gain access to the Telekinesis Discipline, Telekinesis counts as a native discipline for you. You learn one Telekinesis power. Gain +1 to Psionics rolls involving Telekinesis powers. Telekinetics may increase their Psi Rating to 10 and your maximum Spirit increases to d12+1. Telekinetic Combatant Your telekinetic abilities have become weapons as deadly as any rifle. Whenever a Telekinesis power damages a target, inflict +1d6 damage."
    },
    {
      "name": "Void Attunement",
      "requirements": "Requirements: Veteran, Echoes of the Void (Hindrance)",
      "desc": "The whispers of the Void no longer frighten you—you have learned to interpret them. Strange visions reveal possibilities moments before they occur. Once per session, after making any roll, you may reroll with a +2 bonus as the Void briefly reveals a more favorable path. You gain access to the Temporal Discipline."
    },
    {
      "name": "Whispers Beyond",
      "requirements": "Requirements: Veteran, Echoes of the Khala (Hindrance)",
      "desc": "The voices that once haunted you have become trusted advisors. Once per session, you may ask the GM one question regarding your current situation (\"Which enemy is the greatest threat?\", \"Which path is safest?\", \"Is someone lying?\"). The GM must answer truthfully, though the answer may be cryptic or symbolic. You gain access to the Energy Discipline. SOCIAL EDGES"
    },
    {
      "name": "Air of Authority",
      "requirements": "Requirements: Veteran, Intimidating Presence, Influence d8+, Spirit d8+",
      "desc": "Your reputation, bearing, and force of personality make lesser foes hesitate before challenging you. Hostile Extras who can see and hear you suffer a -1 penalty to attacks made directly against you. Any Extra attempting to attack you for the first time in an encounter must first succeed on a Spirit roll as a free action. Failure means it must choose another target, take cover, or forfeit the attack. Extras who have already been attacked by you or have seen you attack one of their allies are immune to this effect for the remainder of the encounter. Wild Cards are unaffected."
    },
    {
      "name": "Bewildering Rhetoric",
      "requirements": "Requirements: Seasoned, Influence d8+, Intelligence d6+",
      "desc": "You are a master of propaganda, psychological warfare, and verbal manipulation. Through a constant stream of taunts, arguments, and rhetoric, you disrupt enemy cohesion and confidence. As an action, you may begin a speech directed at enemies who can hear and understand you. Maintaining the speech requires an action each round. While the speech is maintained enemy leaders suffer a -2 penalty to Tactics, Influence and Leadership rolls and your enemies may not benefit from Support rolls generated by Influence, Leadership or Tactics. This effect ends immediately if you become Shaken or choose to stop speaking."
    },
    {
      "name": "Bolster",
      "requirements": "Requirements: Novice, Spirit d8+",
      "desc": "Belittling or humiliating an enemy can boost your ally’s spirits. When this character successfully Tests a foe, he may also remove the Distracted or Vulnerable state from one of his allies."
    },
    {
      "name": "Challenging Cry",
      "requirements": "Requirements: Novice, Influence d8+",
      "desc": "The first time each round the hero Wounds or Incapacitates an enemy with an attack or power, he gets a free Combat Influence Test targeting (at least) that enemy or another enemy (of his choice) who saw his comrade take the blow."
    },
    {
      "name": "Common Bond",
      "requirements": "Requirements: Wild Card, Novice, Spirit d8+",
      "desc": "Selfless heroes and determined leaders know their greatest strength often comes from their companions, and are willing to give some of their own fortune, fate, or luck to support them. A character with this Edge may freely give his Bennies or Morale points to any other character he can communicate with. The player should explain what form this takes, from a quick shout of encouragement to a welcome pat on the back."
    },
    {
      "name": "Connections",
      "requirements": "Requirements: Novice",
      "desc": "Your hero is connected to people or organizations who can help him when the chips are down. It might be the mob, a guild, a wealthy aristocratic woman, a politician etc. Connections may be taken more than once, selecting a new faction or contact each time. Once per session, and assuming he can get in touch with them, the hero can call on his friends for a favor. The favor depends on the nature of the contact (GM’s call), but might include a loan, gear, a few allied fighters, transportation, information, or even a professional with critical skills the party doesn’t have, like a hacker or scholar."
    },
    {
      "name": "Deceptive",
      "requirements": "Requirements: Seasoned, Intelligence d8+",
      "desc": "Lies, deception, and misdirection are a stock-in-trade for you. You gain a +2 bonus when using Influence to Lie."
    },
    {
      "name": "Demoralizing Defense",
      "requirements": "Requirements: Novice, Influence d8+",
      "desc": "Once per round when an opponent misses you with an attack, you can make a Combat Influence Test against that opponent as a Free Action."
    },
    {
      "name": "Embolden",
      "requirements": "Requirements: Seasoned, Spirit d8+",
      "desc": "Once per round, when an event requires one or more allies to roll Spirit or Intelligence to resist a Test, power, Special Ability, or Fear check, the hero can immediately Support his allies’ rolls to resist (as a free action). This Support is generally done with Influence, Tactics, Leadership or the Psionic skill (other skills are up to the GM). The hero rolls once and the result is applied to each of the affected allies."
    },
    {
      "name": "Humiliate",
      "requirements": "Requirements: Novice, Influence d8+",
      "desc": "Those with a cruel wit can destroy a rival’s ego in a single remark or well-timed gesture. Your hero gets +2 bonus to Influence rolls when using it to Taunt."
    },
    {
      "name": "Intimidating Presence",
      "requirements": "Requirements: Seasoned, Influence d8+, Spirit d8+",
      "desc": "Enemies tremble at your sight, gain a +2 Influence rolls for Intimidation."
    },
    {
      "name": "Inspiring",
      "requirements": "Requirements: Novice, Spirit d8+, Influence d8+",
      "desc": "You always find a way to make others better. When the hero successfully Supports an ally, the bonus they receive is increased by +1 (so +2 on a success and +3 on a raise) and the total bonus the ally can receive increases to +5."
    },
    {
      "name": "Poker Face",
      "requirements": "Requirements: Novice, Influence d8+",
      "desc": "Opponents have a -4 penalty to read your emotions with an Insight check."
    },
    {
      "name": "Provoke",
      "requirements": "Requirements: Novice, Influence d6+",
      "desc": "Clever characters can manipulate their foes, drawing enemy focus on themselves to protect their allies. When your hero uses Combat Influence to Taunt, increase the penalty an enemy suffers by an additional −2."
    },
    {
      "name": "Rabble Rouser",
      "requirements": "Requirements: Seasoned, Intelligence d8+ or Spirit d8+",
      "desc": "This instigator knows how to rile up several enemies at once. As a limited action, a character with this Edge can make a social Test with Influence to all enemies in a Medium Blast Template. The targets must be able to see and hear the hero clearly."
    },
    {
      "name": "Reliable",
      "requirements": "Requirements: Novice, Spirit d8+ Requirements: Veteran, Reliable",
      "desc": "People know they can depend on your hero when they need assistance. He gets a free reroll on any Support roll. Trustworthy Your allies engage their fight knowing you have their back covered. You ignore up to 2 points of penalties on all your Support rolls."
    },
    {
      "name": "Retort",
      "requirements": "Requirements: Novice, Influence d6+",
      "desc": "If the hero resists a Test against his Discipline, the foe who initiated the Test is Distracted. Additionally, once per round, if a Discipline Test targets one of his allies in sight, and the ally resists, the hero may immediately make a free Influence Test at that single foe."
    },
    {
      "name": "Streetwise",
      "requirements": "Requirements: Novice, Influence d6+",
      "desc": "Streetwise characters know how to find the local black market, fence stolen goods, avoid the local law (or criminal element!), lay low when the heat’s on, obtain illegal weapons, find out which “boss” is hiring muscle, or similar shady activities. Streetwise characters add +2 to Influence rolls made to Network with shady or criminal elements. They also add +2 to Lore rolls pertaining to the types of disreputable activities listed above."
    },
    {
      "name": "Swift Support",
      "requirements": "Requirements: Seasoned, Intelligence d8+",
      "desc": "You are ready to assist your allies at a moment's notice. If the hero's Action Card is a face card or Joker, he may Support an ally as a limited free action."
    },
    {
      "name": "Work the Room",
      "requirements": "Requirements: Novice, Spirit d8+ Requirements: Seasoned, Work the Room",
      "desc": "Your hero’s words don’t just inspire those they’re directed at—they often inspire others as well. Once per turn, you can use Work the Room to roll an additional skill die when Supporting with Influence. The additional die Supports any other ally who can see or hear your hero, and applies to their next action, whatever it may be. Work the Crowd As Work the Room but the hero now can Support another on up to two of her Support actions. SPACE COMBAT EDGES The following Edges apply during space combat between ships."
    },
    {
      "name": "Ace",
      "requirements": "Requirements: Novice, Agility d8+",
      "desc": "Aces are pilots and drivers who have a special affinity with vehicles. They ignore two points of penalties to any Boating, Driving, or Piloting roll, and may spend Bennies to Soak damage for any vehicle they control or command, using the appropriate Boating, Driving, or Piloting skill instead of Vigor. Each success and raise negates a Wound."
    },
    {
      "name": "Jock",
      "requirements": "Requirements: Seasoned, Ace",
      "desc": "The spacer ignores the Multi-Action penalty for making a Piloting roll and taking another action in the same round. This is critical for single-crew fighter pilots who need to maneuver and attack on the same turn."
    },
    {
      "name": "Defensive Pilot",
      "requirements": "Requirements: Seasoned, Piloting d10+ or the Ace edge.",
      "desc": "A Pilot with this Edge receives a +1 his ship’s Defense as well as to Piloting rolls to avoid attacks or obstacles."
    },
    {
      "name": "Defense Expert",
      "requirements": "Requirements: Seasoned, either Defensive Pilot or Gunner, Piloting d8+, Shooting d8+",
      "desc": "When deploying Defenses against incoming missiles, the pilot gets an additional +2 bonus to the evading roll, for a total of +4. When using Point Defense Laser Batteries, each successful hit made by the character has a 3 in 6 (not 2 in 6) chance of shooting the missile down."
    },
    {
      "name": "Gunner",
      "requirements": "Requirements: Seasoned, Shooting d8+",
      "desc": "Being able to take out enemy ships with a well aimed shot takes training. The hero has it. In ship combat, the character may modify his roll on the Critical Hit Table by 1 point either way, as he chooses. He does this after rolling the dice for the Critical Hit."
    },
    {
      "name": "Space Combat Trained",
      "requirements": "Requirements: Seasoned Requirements: Veteran, Space Combat Trained",
      "desc": "The hero has been trained and developed experience in acting under pressure during space battles. He can ignore 1 point of Ship Wound or Ship Fatigue penalties. Veteran Combat Trained As above, but the hero can ignore 2 points of Ship Wound or Ship Fatigue penalties."
    },
    {
      "name": "Spaceship Engineer",
      "requirements": "Requirements: Seasoned, Engineering d8+",
      "desc": "The character is an expert on most technical activities aboard a spaceship. All ship-related Engineering rolls receive a +2 bonus. LEGENDARY EDGES"
    },
    {
      "name": "Battle-Hardened Commander",
      "requirements": "Requirements: Legendary, Tactics d10+",
      "desc": "Your presence inspires extraordinary performance. Allies under your Tactics buff, gain +2 to Discipline and Resolve."
    },
    {
      "name": "Professional",
      "requirements": "Requirements: Legendary, maximum die type possible in affected Trait Requirements: Legendary, Professional in affected Trait Requirements: Wild Card, Legendary, Expert in affected Trait",
      "desc": "The character is an expert at a particular skill or attribute (his choice). This increases the Trait and its limit one step (a d12 + 1 becomes a d12 + 2, for example). This Edge may be selected once per Trait. Expert As the Professional Edge, increasing the Trait and its limit one additional step. Master The character’s Wild Die increases to a d10 when rolling the selected Expert Trait."
    },
    {
      "name": "Weapon Master",
      "requirements": "Requirements: Legendary, Melee d12+",
      "desc": "The warrior increases his Defense by +1 and the bonus damage die for Melee rolls is a d8 instead of a d6. He must be armed to gain these benefits, but this includes the Martial Artist Edge, claws, or other abilities that count as weapons."
    },
    {
      "name": "Master of Arms",
      "requirements": "Requirements: Legendary, Weapon Master",
      "desc": "Increase the hero’s Defense an additional +1 and his Melee bonus damage die is now a d10."
    },
    {
      "name": "Hero of the Koprulu Sector",
      "requirements": "Requirements: Legendary",
      "desc": "Your deeds are known throughout human space. Gain +2 Influence and Leadership. Once per session, automatically succeed with a rise at an Influence or Leadership roll involving allies or civilians."
    },
    {
      "name": "Living Legend",
      "requirements": "Requirements: Legendary",
      "desc": "Stories are told about your exploits. As long as you are not bleeding out, you and your allies can’t go below Morale 0 and you can still soak damage even at morale 0. Equipment Equipment Tiers While all the items described in this chapter are the base stock variations, all weapons, armors, and gear items have multiple tiers of quality. Higher tiered items represent those constructed with better parts, higher levels of craftsmanship, more state-of-the-art features, experimental components, and overall more advanced planning. Equipment tiers ensure that a character will always be upgrading and searching for new items throughout his adventuring career and doesn’t get tired of the Gauss Pistol he’s been using since novice rank. They also present interesting opportunities to go on missions looking for a powerful or legendary object. Tier 1 items represent mass produced, stock brands. These are known as Basic items. This is the version most encounter. While many Tier 1 items are clearly advanced, such as Powered Armor and Gauss Weaponry, they are still simple compared to their true potential. Tier 1 items can be found nearly anywhere and cost the base price of the item. Tier 2 items tend to be specially crafted rather than produced stock on the factory floor. Every piece of these items is hand assembled, tested, and tuned to perfection. Companies generally keep limited quantities of these items available for the exclusive clientele. They are generally only found in government complexes or on core worlds, and they cost 4 x the price of their basic counterpart. Tier 3 items are rare. They tend to be custom made by special order and have an impressive price tag. These items are designed from the ground up, custom made from scratch to exactly match the customer’s requirements. Custom parts are usually ordered from afar or built specifically for the item. Numerous variations are built and tested until perfection is reached. They often take months or years to make. Tier 3 items generally cannot be purchased unless their base cost (before tier multiplier) is 1,000 or less. Instead, they are usually custom ordered. Their cost is 12 x the price of the base item. Rumors persist of items even greater than tier 3, relics created by reclusive geniuses and experimentation with alien technology. However, these items are incredibly rare and outside the reach of most characters. Higher Tiered Weapons Weapons scale simply, mostly with passive bonuses, but the combined effect makes for powerful weaponry. The following are adjusted for higher tiered weaponry: -Ranged or Melee bonus is increased by +1 per tier above 1st -Base damage is increased by +1 per tier above 1st -Weapon can support 2 additional item upgrades per tier above 1st In addition, tier 2 or 3 weapons do not jam. Higher Tiered Armor Armor also scales simply, mostly with passive bonuses; although they gain much utility with the mounted gear that scales with them. The following are adjusted for higher tiered armor: -The armor’s damage resistance increases by the armor’s Resistance Rating. The Resistance Rating of a suit of armor depends on what type of armor it is. For light armor, the Resistance Rating is 1. For heavy armor, the Resistance Rating is 2. Power armor has a Resistance Rating of 3. Shields, instead, gain no damage resistance but gain +1 defense. -The armor’s penalty to defenses is reduced by 1 by tier (to a maximum of 0) -The armor can support 2 additional item upgrades -Any and all mounted gear built onto the armor, such as a communicator or digital uplink, increases Tier to be the same level as the armor. Higher Tiered Gear Gear does not scale with simple passive upgrades. Instead, the entry of each item has to be checked. The item gains all the features listed under its tier. Generally, this is all the features of the base item plus a few more."
    }
  ],
  "powers": [
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 1 By activating Acute Senses, the caster sharpens their eyesight and senses to be several times more potent. They gain a +2 to Perception and Survival (Tracking) rolls. With a raise, they have halve Called Shot and Range penalties. This ability lasts for PL rounds. Psi Level Benefit 2 Power affects all of the senses, not merely sight 3 Power’s duration increases to PL minutes. 5 Power grants one special sense. 6 Power grants two special senses. 7 Power grants three special senses. 8 Power grants four special senses. Special Sense Benefit Echolocation As long as you can emit and receive sound, you ignore up to 4 points of concealment or illumination penalties within 10\". Other creatures with a keen hearing may be able to hear your calls (GM's call). Infravision You can see heat sources. You half darkness penalties against targets with heat signatures (or lack thereof in normal environments). If you also have Low Light Vision, you ignore all illumination penalties. Low Light Vision You ignore illumination penalties for Dim and Dark Illumination (but not Pitch Darkness). If you also have Infravision, you ignore all illumination penalties. Scent You can navigate, track and detect creatures by scent (range 6\", halved for upwind and doubled for downwind, doubled again for strong scents). Only adjacent creatures can be pinpointed accurately, and attacks made relying on scent are made at -2. Rush Augmentation, PL 1, Channeled Power"
    },
    {
      "name": "Action Type: Free Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 2 When using Rush, the caster enhances their own leg musculature by a tremendous amount. Their Speed increases by their PL, and they can move at ¼ their Speed (rounded down) without generating Free Attacks. This power lasts a number of rounds equal to their PL. Psi Level Benefit 3 Power allows the character to add their PL also to their running die. 4 Power allows moving at ½ Speed without generating Free Attacks. 6 Caster also increases his Agility and ability-based skills by one step, two on a Raise. 8 Power allows moving at ¾ Speed without generating Free Attacks. Muscular Enhancement Augmentation, PL 2, Channeled Power"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 2 When using Muscular Enhancement, the caster enhances their own physical prowess significantly, gaining a +1 to Athletics, Stealth and Vigor rolls against Extreme Temperatures, Fatigue, Disease and Poison, +2 with a Raise. This power lasts a number of minutes equal to their PL. Psi Level Benefit 4 Power also applies on Strength rolls. 5 Power’s duration increases to 10 minutes per PL. Toughness Augmentation, PL 3, Channeled Power"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 2 When using Toughness, the casters skin hardens and deflects matter of all kinds, almost forming an additional layer of armor. The caster gains additional Toughness equal to ½PL (min 2), +2 on a Raise. This lasts a number of rounds equal to ½ their PL +1, double duration on a Raise. Psi Level Benefit 5 Power gives an equal amount of Resolve. 6 Power’s base duration increases to PL+2 rounds. Enhanced Attributes Augmentation, PL 4, Channeled Power, Requires Muscular Enhancement"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 3 By focusing their psionic might into a certain part of their body, the caster improves the caliber of their own abilities. The caster chooses Agility, Instinct or Strength, and increases that attribute and all linked skills by one step, two with a Raise. This power lasts 1 minute per PL. Psi Level Benefit 6 Power gives its benefit to two ability scores rather than one 8 Power gives its benefit to all three possible ability scores Sheer Climb Augmentation, PL 4, Channeled Power, Requires Muscular Enhancement"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 1 The character alters their body to have a unique gravitational pull, allowing them to climb sheer surfaces. The caster automatically succeeds on all Athletics (climbing) checks, no matter how difficult. This power lasts 2xPL rounds. Psi Level Benefit 6 The character climbs at their full speed. 7 The character can simply walk across floors and ceilings without interruption of their normal movement or needing to climb. They also ignore Difficult Ground and can move and run over such surfaces unhindered. 8 Power lasts 1 minute per PL. 10 Power lasts 1 hour per PL. Preservation Augmentation, PL 5, Channeled Power, Requires Enhanced Attributes and Toughness"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 2 The caster locks their body in a state of preservation and self-sustainment. While the power is active, the character does not require food or water, and does not gain fatigue from being short of food or water. Any fatigue they already have from famine or thirst stays. In addition, while the power is active, the character adds their PL to Vigor tests against Extreme Temperatures, Fatigue, Disease and Poison. This power lasts for 4 hours. Psi Level Benefit 6 The caster gains a free reroll on the mentioned Vigor checks and adds their PL to Vigor rolls and Toughness against Poison. 7 Multiply the power’s duration by ½ PL. 10 While the power is active, the character automatically succeeds on all mentioned Vigor checks and is immune to poison. Regeneration Augmentation, PL 5, Channeled Power, Requires Toughness"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 4 The character uses their mind to knit their own wounds, stopping bleeding wounds and recovering from grievous injuries. The character gains the Regeneration trait, healing 1 Wound at the start of every round. If they already possess Regeneration, they heal 1 additional Wound per round. On a Raise the character gains the Hardy Trait. The power lasts a number of minutes equal to ½ PL. Psi Level Benefit 7 The caster heals 2 Wounds per round. 8 Duration increases to a number of minutes equal to PL. 9 The caster heals 3 Wounds per round. Psionic Adaptation Augmentation, PL 5, Channeled Power"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 1 The character uses psionic energy to regulate their body against harm from the environment. While this power is active, the character has no need to breathe, and suffers no ill effects for being in such an environment without an air supply or from inhaled poisons. The character also gains the benefit of the elemental protection item trait for the duration of the power. This power lasts for 10 minutes per PL. Psi Level Benefit 6 The character gains +4 Toughness against Acid, Cold, Electricity or Fire damage. 7 The character gains the benefits of the Radiation Shielding item trait. 8 Power’s duration increases to 1 hour per PL. 9 The character does not suffer penalties from high gravity environments. 10 The character takes half damage from Acid, Cold, Electricity or Fire. Eternal Form Augmentation, PL 6, Channeled Power, Requires Toughness"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 10 The character’s form becomes perfect and eternal, and nothing can harm them. Until the end of the character’s next turn, they are completely immune to all damage, injuries, abilities, effects, attacks, and powers. The character cannot be pushed, pulled, grabbed, or knocked down and cannot gain or lose any conditions. Any ongoing effects, such as negative conditions or crippling wounds, do not take effect until after the power ends. The character cannot heal or suffer Wounds, recharge Shields or gain other effects while under this effect. Durations of effects on the character, such as other psionic powers or combat augmentations, continue to tick down, but the effects of those abilities are ignored. If the character is in a vehicle, they remain moving along with the vehicle. If the character is falling, they fall as normal. If the character is standing still on solid ground they may not be moved by any means except for the ground they are standing on moving. Psi Level Benefit 8 After the effect ends, the character adds ½ PL to Toughness for the next two rounds. 10 The power ends at the end of the character’s second turn after activation. Cloaking The cloaking discipline is unique in that it only contains one very important power of the same name. Cloaking allows the user to go invisible and still act normally, it is the trademark ability of ghosts and dark templar. The ability to cloak is very dependent on the caster’s Psi Level. Terrans and Infested Terrans must have a Hostile Environment Suit to cloak, unless they are at a sufficient PL. Only Terrans and Dark Templar have mastered the power to hide oneself from the world, although the Khalai Protoss has invented cloaking technology. Cloaking Minor Power Skulk Requirements: Psi level 4 You may reduce your psychic footprint in crowds. You are not specifically noticed within a crowd. If a target is specifically looking for you, or someone by your description, they may spot you by succeeding a Perception check opposed by a Psionics skill check. If the searcher has a higher psi level than you, they may make a Psionics check instead of a Perception check if they choose, and they gain a free reroll on the check. This power allows you to avoid being noticed within a crowd, but gives you no help once you separate from a crowd. This power has no effect in combat, even if you were in a situation to hide Cloaking Cloaking, PL 1, Sustained Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 2 The caster completely fades from sight of everyone around them and is essentially invisible. The character counts as Cloaked (invisible) giving -4 penalty or -6 with a raise. Psi Level Benefit 3 Cloaking can be activated as a limited free action 5 Cloaking lasts minutes not rounds 6 Cloaking costs 1 SP 7 Cloaking lasts hours not minutes. 8 Cloaking can be cast by a terran or infested terran who is not wearing a Hostile Environment Suit. 10 Cloaking costs 0 SP Energy The following are the Energy psionic discipline powers, where a caster tries to manifest actual energy to the material universe. This energy can be used for destruction, as a power source, or simply as a barrier. . When a Terran manifests an energy power, they manifest a variation of the power based on their psionic power source. They do not have a choice in the matter; their source of energy is automatically altered by the source of their power. Therefore, if a Terran attuned to the Khala manifests Psionic Missiles, they cast the Psionic Onslaught variant instead. If a Terran attuned to the void manifests Psionic Missiles, it is transformed into the Shadow Barrage instead. Psionic Power Source Some terrans have access to a unique set of psionic traits known as the Psionic Power Source. The power source shows where the Terran draws their energy and psionic power from. The Terran power source determines two major factors. The first is what types of psionic weapons the character can utilize. The major factor modified by the power source is the character’s affinity with Energy psionic powers. While only very few Terrans have access to the Energy psionic discipline through the use of edges, the Terran’ power source modifies the powers from the Energy psionic discipline based on the parameters. Every energy power has a modification based on whether it comes from the Khala, Void, Corruption, or Purity power sources. Energy Minor Powers Light Orb Requirements: Psi Level 2 You may create a light orb that floats above your head providing bright light within twice your PL squares. This useful effect does come with some cost however, spending 1 PP per minute. You may control the orb’s color when you manifest it, and it moves with you, staying out of your line of sight. Light Panels Requirements: Psi level 3 You may create one or more small rectangular areas of light powered by your psionic energy. These panels are free-floating and may be positioned anywhere within short range. You may have one light panel per three psi levels. You control the color, temperature, and intensity of each light panel. This is mostly useful for manually lighting a scene for visual production or investigation. Backup Battery Requirements: Psi level 5 You may keep your devices running, even in the event of power loss. You may act as a tier one power cell for a device on your person for one minute per psi level per day. You power additional devices simultaneously, but each uses a minute of your stored power at a time. You may switch to your internal reserves as a reaction if a device suddenly loses power. Energize Object Energy, PL 2, Instant Power"
    },
    {
      "name": "Action Type: Limited Action",
      "discipline": "Energy",
      "desc": "Range: Touch SPs: 2 The caster can touch a power cell, and funnel energy into it to recharge it. By touching any spent power cell or crystalline charging cell, they can restore it to full charge. This only works on portable power cells, not larger power sources, such as reactors. Psi Level Benefit 3 By touching an electrical object, the caster can provide it with power without having a necessary power cell to charge it. These only function on items that need a tier 1 power cell. The object is powered for 10 minutes per PL. 4 The caster can charge items that require a tier 2 power cell. 5 The caster can charge items that require a tier 3 power cell. They can also provide power to a stationary power source, such as a reactor or power generator. The large power source functions as if it has power for 1 minute per PL. 6 The caster can charge up to two held protoss implements with this power. Both implements are fully recharged when this power is used. Psionic Bolt Energy, PL 3, Instant Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 3 The caster releases a Psionic Bolt, a focused blast of psionic energy that stretches out and strikes at a target. The attack does 3d6 + PL energy damage on a successful psionic attack, +1d6 on a Raise. Psi Level Benefit 4 The power gains AP 2. 5 The power can be used at 60 squares. 6 The power gains AP 4. 10 The power ignores Armor. Psionic Power Source Power Change Khala The power deals +2 damage but costs +1SP. Void The power’s range is reduced by one step (60’’ to 30’’, 30’’ to 6’’) and it deals +2 damage. At PL 4 and 6 it gains twice as much AP as usual. At PL 10 it also deals +2 damage. Corruption If it Wounds a creature, the caster heals 1 Wound. Purity The power gains the Flaming weapon trait and it is a Line attack with a Length of PL squares from the caster. At PL 5 increase the Line’s length to 2 x PL. Energize Shields Energy, PL 3, Instant Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 2 The caster summons a well of energy that restores power to their own personal energy shields. This power can only be used if the caster has energy shields. The caster makes a Psionics skill roll. They restore 1 Shield Point to their Shield Pool, 2 on a Raise. Psi Level Benefit 4 Power can target an adjacent ally, instead of self. 5 Power restores twice as many shield points. 6 Power can target an ally within 6 squares. 7 Power can target a number of allies within range equal to ⅓ PL. One of these targets can be the caster. Psionic Power Source Power Change Khala Those affected by this power also recover 1 Shield Point at the start of their turn for the caster’s PL rounds afterwards. Void Targeted individuals are cloaked in shadows, gaining concealment against all ranged attacks for a number of rounds equal to ½ PL. Corruption The power not only recharges shields, but gives empowered strength as well. Targets affected with this power gain one Strength step increase, two with a Raise, for PL rounds. Purity The target’s shields are protected by a barrier of thermal energy for ½ PL rounds. The first time the target is damaged in a round, a blast of heat comes off their shields. All adjacent enemies take 2d6 + PL energy damage. Psionic Burst Energy, PL 4, Instant Power, Requires Psionic Bolt"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Burst centered on Self SPs: 4 The caster releases a Psionic Burst, which is a massive burst of psionic energy centered on the caster. This power does not harm the caster. The burst radius is equal to ½ the casters PL. The power does 3d6 + PL energy damage, with AP 2. Psi Level Benefit 5 The power can be instead used to manifest in a Line rather than a burst. The line has a size equal to 2xPL. Otherwise the power is the same. 6 The power’s AP increases to 4. The power can be instead used to manifest a cone with a size equal to PL. Otherwise the power is the same. 10 The power ignores armor. Psionic Power Source Power Change Khala The power is a Limited Action. It gains +2 Damage and counts as being manifested at 2 PL higher for determining the area. Void Power strangles enemies with strands of physical shadow. Compare the Psionics roll against the target’s Defense. They are Entangled on a success, Bound on a Raise for ½ PL rounds. The strands have Hardness 8, 10 on a Raise. The power only deals 2d6 + PL damage. Corruption The power deals +2 damage. The power loses all penetration, and never ignores armor. Those who are Wounded from this power suffer 1 point of Energy Drain (Strength) per Wound. At PL 6 it deals an additional +2 damage. Purity Power gains the Flames and Flash weapon traits. Psionic Missiles Energy, PL 5, Instant Power, Requires Psionic Bolt"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 60 squares SPs: 4 The caster fires a volley of energy missiles that fly towards their enemies. The caster releases 3 missiles. Resolve this as one psionic attack against each target. If you fire more than one missile to the same target, it gains Hailfire (1) per missile, but deals the damage of one missile. The missiles do 3d6 + PL energy damage, with AP 2. Psi Level Benefit 6 The power has AP 4. 8 Can choose to double PP cost to double the amount of missiles. 10 The power ignores armor. Psionic Power Source Power Change Khala The power creates a massive barrage of numerous smaller missiles. The power gains Hailfire (1). Void The power only creates 2 missiles. If you focus more than one missile on a single target, resolve it as a Rate of Fire attack. This power does not have Hailfire. Corruption Each missile gains twice normal AP and ignores cover (but not total cover). If a target is Shaken or Wounded, it is also knocked prone. The power’s range is 30 squares, and only deals 2d6 +PL energy damage. Purity Each missile explodes upon impact, showering thermal energy all around it. Upon striking a target, all adjacent to the hit take 2d6 + PL damage with the same AP. The power gains the Flames weapon trait. This power is manifested as Limited Action. Force Fields Energy, PL 5, Persistent Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 60 squares SPs: 6 The caster summons a barrier of Force Fields, blocking attacks and movement. The caster summons 1 cubic square of force fields per point of PL, and places them anywhere within range. The only restriction is each block of the force field must touch at least one other block and they must be placed on an empty space. The force fields do not need to touch the ground or any other solid surface. These force fields block all movement, attacks, and projectiles attempting to pass through them, and characters take a -2 to Perception checks to see through them. The force fields have a Hardness of 10 + PL and 4 Shield Points, +1 Shield Point on a Raise. They last a number of rounds equal to 2 x PL. Psi Level Benefit 6 If the caster choses, the force fields can completely block line of sight. 7 Power creates 1 additional square of force field per PL or increases the Shield Points by +1. 8 Duration of the force fields increases to 5 rounds per PL 9 Power creates 1 additional square of force field per PL or increases the Shield Points by +1. 10 The squares of force fields no longer need to be adjacent to one another. Psionic Power Source Power Change Khala Each block created by this power takes up a SBT instead of a single square. This power costs +1 SP to manifest. Void The force fields can be used to capture and imprison enemies. If an enemy has their entire space taken up by force fields, then they are imprisoned within them if the caster succeeds on a psionic attack against Toughness (without armor). Enemies within are Bounded and the force field needs to be broken for them to suffer any type of physical or energy damage. The power only lasts a number of rounds equal to ½ PL. Corruption The force field is immaterial and has Hardness 0. Anything that starts its turn or moves through it suffers 3d6 + PL energy damage. Anyone that starts or moves adjacent to one of its squares suffers 2d6 + PL energy damage. Purity This power functions as normal for any character other than those with the Purity power source. Any creature with the Purity power source can move into a square of the force field as normal, and can then instantly teleport to any other square of the force field. In addition, all of the blocks of the force field do not need to be touching or adjacent to one another. This power costs +1 SP to manifest. Guardian Shield Energy, PL 6, Sustained Power, Requires Energize Shields"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Burst centered on self SPs: 5 A caster of this potent power projects an energy shield that radiates from their person, moving with them, and protecting them and all allies from enemy attacks. This barrier functions as an energy shield of Hardness of 10 + PL, and with a Shield Pool of 4, +1 with a Raise. The shield is projected out centered on the caster with an area equal to 1/2 PL and protects from attacks originating from outside the area to the targets within the area. If a character is attacked while within the area of multiple shields, then the shield with the highest Hardness protects the target from all of those that the attacker is outside of. Psi Level Benefit 7 Power’s area increases to a burst equal to PL 9 Power’s area increases to a burst equal to 2 x PL. 10 Power’s Hardness increases by +4. Psionic Power Source Power Change Khala Increase the shield’s Hardness by +2. The power costs +1 SP to manifest. Void The power does not create a defensive bubble. Instead it creates an individual energy shield to each ally within PL squares. Each effected target has their own Shield Pool, instead of an overall whole shield, and that shield moves with them. The power does not need to be sustained, and instead lasts ½ PL rounds. Each energy shield is smaller, it only has a Shield Pool of 1, +1 with a Raise. The power costs +3 SP to manifest. Corruption This power charges itself by draining the essence of those within it. Enemies within the burst suffer 2d6 + PL damage at the start of each of their turns that ignores armor. Against swarms, this has Hailfire (4). When an enemy is Wounded by the shield, it recovers 1 Shield Point up to its maximum. Purity The shield reflects light away, making it impossible to see through. All targets within the guardian shield have 6 points of concealment against those outside of it. Those within the shield have no penalties from attacking outside it. Psionic Wave Energy, PL 6, Instant Power, Requires Psionic Burst"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 4 When the caster manifests a wave of psionic energy that falls like a tidal wave over an area. Originating from a square adjacent to the caster, this power manifests in a rectangular area of effect, a number of squares long equal to PL, and a number of squares wide equal to ½ PL. The attack does 3d6 + PL energy damage on a successful psychic attack. This attack has AP 4. Psi Level Benefit 8 A Shaken or Wounded target is also Stunned. 9 Double the power’s area, both length and wide. 10 The power ignores armor. Psionic Power Source Power Change Khala Targets hit by this power must make a Vigor roll at -2 (-4 on a Raise) or be Stunned, regardless of if they were Shaken or Wounded by the power. The caster can omit a number of squares from the affected area equal to their PL, possibly avoiding striking allies. Power costs +1 SP to manifest. Void The power does not deal damage. Instead, it heals the caster and all allies within the area. They recover 1 Wound on a success, 2 Wounds on a Raise. Corruption The power has twice its length. In addition, if the power Shaken or Wounds the target, they are knocked pack ½ PL squares. The power costs +1 SP to manifest. Purity The power has the Flames weapon trait. Psionic Discharge Energy, PL 6, Instant Power, Requires Psionic Bolt"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 4 The power releases a crackling blast of energy that rips a target apart, and then instinctively jumps to the next target. The attack does 3d6 + PL energy damage on a successful attack, with AP 4. Afterwards the attack jumps to another target within 6 squares. If the attack hits, it deals the same damage again, and jumps to another target within 6 squares. The same target cannot be attacked more than once. This continues on until the attack misses, it does not have a new target to jump to, or it strikes a number of targets equal to ½ the caster’s PL. Psi Level Benefit 7 Power can be used at 60 squares. 8 Power can jump to a number of targets equal to PL 9 Power still jumps even if it misses a target, but still counts as one of the limited number of attacks. 10 Power can be used at 120 squares and it ignores armor. Psionic Power Source Power Change Khala The power deals +2 damage, but costs +1 SP. Void It can strike twice as many targets as normal but costs +1 SP. Corruption The power only deals 2d6 +PL energy damage but the caster heals 1 Wound for every target Wounded. Purity Draw a line following the power’s movements as it moves between targets. Each square it touches on its path is covered by a streak of thermal energy. Anyone that ends their turn or moves into the area takes 2d6 + PL energy damage. This lasts for 1 round. The power only deals 2d6 + PL energy damage. Psionic Fiery Aura Energy, PL 6, Sustained Power, Requires Psionic Bolt"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 5 The caster surrounds himself with an aura of destructive energy. Any target passes through or ends their turn within one square of the caster suffers 3d6 + PL damage with AP 4. Psi Level Benefit 8 The power’s area increases to any targets within ¼ PL squares of the caster. 10 The power ignores armor. Psionic Power Source Power Change Khala In addition to the power’s normal effect, the fury aura protects the caster with an energy shield. This energy shield has a Hardness of 10 + PL and a Shield Pool 4, +1 with a Raise. Void While this power is active, the user is Cloaked (Invisible), cannot suffer physical damage, and can fly at a speed of 3xPL. They cannot make physical attacks while in this form. Once the power ends, the character rematerializes in their physical form. The power does not deal damage. Corruption The power affects a burst area centered on the caster equal to PL. However, this power harms the caster as well, and deals 2d6 + PL with normal penetration, to the caster. Energy shields do not protect against the damage the caster deals to themselves. Purity Any target hit by these radiant energies is Blinded -2 on a success, -4 on a Raise. They can recover with a Vigor roll at the end of each turn, a success reduces the penalty by 2, a Raise removes it. This power costs +1 SP. Psionic Blast Energy, PL 7, Instant Power, Requires Psionic Bolt"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 60 squares SPs: 5 The caster releases a Psionic Blast, an explosive blast of psionic energy that explodes and incinerates an entire area. The attack does 3d6 + PL energy damage in a burst radius equal to ½ PL, with AP 4. Psi Level Benefit 8 Power can be used at 120 squares 9 Power can be used at 300 squares 10 The power ignores armor. Psionic Power Source Power Change Khala If the power Shakens or Wounds a psychic, the target loses SP equal to ½ PL of the caster. The power range is reduced to 30 squares. At PL 8 it can be used at 60 squares. At PL 9 it can be used at 120 squares. Void Those Shaken or Wounded by it lose one Vigor die size, two on a Raise. Corruption The caster creates an orb adjacent to them, which then moves a number of squares equal to PL. It then deals damage to every target other than the caster that was within 5 squares of it during any part of its movement or where it ended. The power continues on for a number of rounds equal to ½ PL, moving at the start of the caster’s turn. The power only deals 2d6 + PL energy damage. Purity After this power is manifested, it persists at its location glowing like a miniature sun. At the start of the caster’s next turn, it explodes again, doing the same effect in the same area. This power is manifested as a Limited Action. The power continues on for a number of rounds equal to ½ PL. Psionic Storm Energy, PL 7, Persistent Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 60 squares SPs: 5 The caster summons a terrible Psionic Storm, a deadly frenzy of swirling psionic energy. The storm fully takes form in a burst radius equal to PL; all targets in the area take 2d6 + PL energy damage, with AP 4. The power persists one more round, striking again at the start of the caster’s next turn, dealing damage again, after which it dissipates. Due to its massive size, this power gains Hailfire (8) against swarms instead of the normal 4. Psi Level Benefit 8 Power can be used at 120 squares 9 Power’s area increases to a burst radius equal to 2xPL 10 Power can be used at 300 squares. The power ignores armor; it lasts 1 additional round. 13 Power’s area increases to a burst radius equal to 3xPL 15 Power lasts 2 additional rounds Psionic Power Source Power Change Khala Creatures in the area must make a Vigor roll at -2 (-4 on a Raise) or be Stunned. The caster can omit a number of squares equal to their PL, changing the omitted squares each round the power strikes. This allows them to avoid hitting allies. Void This power manifests as a vortex that pulls enemies towards the center of it. All enemies Shaken or Wounded by the power are pulled a number of squares equal to PL towards the center square of the power. The targets closest to the power’s center are pulled first. The area is considered Difficult Terrain. Targets within the area are pulled every round. Corruption The power lasts a number of rounds equal to ½ PL, and can move a number of squares every turn equal to PL. It moves before doing damage. It costs +3 SPs. Purity The storm only affects a ½ PL burst radius area, and never increases, but it deals +1d6 damage. Annihilator Beam Energy, PL 10, Sustained Power, Psionic Bolt, Psionic Blast"
    },
    {
      "name": "Action Type: Limited Action",
      "discipline": "Energy",
      "desc": "Range: Special SPs: 10 The caster thrusts their hands outwards and releases an Annihilator Beam from their palms, a massive pillar of destructive force. The beam is 2 squares wide, and 3xPL squares long. All characters, creatures, objects, and terrain within the area take 4d6 + PL energy damage each round that ignores armor. Each turn, as a Limited Action, the beam can be rotated towards a different direction, damaging everyone on its path. This power gains Hailfire (4) against swarms. Psionic Power Source Power Change Khala At the start of every round the power is sustained, the beam grows 3 squares longer. In addition, if a target is Shaken or Wounded by the beam, they are pushed back PL squares away from the caster. Void The beam is a number of squares wide equal to 1/2 PL but only deals 3d6 + PL energy damage that ignores armor. Corruption The power deals +1d6 damage, but it deals 2d6 + PL to the caster as well. The damage to the caster ignores their energy shields. Purity The beam is only 1 square wide, but deals +4 damage. This damage increases to +10 against massive targets. Pyromancy Pyromancy is a rare psionic discipline that involves causing matter to spontaneously combust. This is an offensive psionic discipline that relies on the synergy of different psionic powers being used together for greater effect, such as setting someone on fire, and then incinerating a burning enemy into ash. Many pyromancy powers deal with a special form of the burning condition called pyre. Pyre is a stacking condition that deals 1d6+PL energy damage +1d6 per stack, gaining hailfire equal to the number of stacks minus 1 at the start of an affected character’s turn. Effects that reduce damage or grant immunity from the burning condition are also effective against the damage from pyre. Targets with an energy shield are immune to pyre. If a target would be affected by two different strengths of pyre stacks, treat them all as the higher PL version and stack normally. Pyre is removed in similar ways to the burning condition. An athletics check performed as an action removes one stack of pyre plus one additional stack of pyre or the burning condition for every raise. Being affected by a fire extinguisher removes a number of pyre stacks equal to twice the tier of the fire extinguisher. Pyromancy Minor Powers Reheat Requirements: Psi level 2 You can reheat a serving of food or beverage with a touch. This will keep the food fresh and warm for up to 5 minutes. This power will not cook food outright, but allows you to reheat leftovers and keep your coffee hot. Burning Hand Requirements: Psi level 3 You can produce a small flame in a free hand as a minor action. This flame provides illumination and produces bright light within a number of squares equal to your psi level. You may choose what color the flame is. You may ignite highly flammable objects by touching them. You may extinguish the flames as a free action or by holding and object in that hand. This power mostly is used for illumination by pyromancers. Spark Requirements: Psi Level 3 You can lose a small, hot spark which will ignite a single, exposed fuel source within 10 squares. This power is mostly used to easily ignite campfires, spilled fuel, or even loose curtains. Cold Tolerance Requirements: Psi level 5 Tapping into a tiny amount of pyromancy energy allows you to keep yourself and others warm. You can ignore temperature hazards caused by exposure to cold air or water for a number of hours per day equal to your psi level. So long as you maintain contact, you may share this protection with up to one additional person per 2 psi levels. So, a level 10 pyromancer could remain protected for 10 hours per day, and by remaining in contact could share this protection with 5 others while active. Bonfire Requirements: Psi level 5 You can create a persistent flame ranging from a small cookfire to a large bonfire. This flame will remain stationary and is sufficient to cook from as well as providing light and heat in adjacent squares. The fire can last up to a number of hours equal to your psi level. You may only have one bonfire effect active at a time Technomancy Technopathy is a rare form of psionic ability that involves manipulation of technology through mental effort. Technopathic characters can psionically interface with technology. This includes interacting with transmissions and networks as if the character possessed advanced technology. They can hack computers without laying a finger on them; pilot vehicles through pure thought. The most powerful technopathic characters can control electro-magnetic energy into bursts of great power that can defy physics and fry machinery. There are even rumors of technopathic characters so powerful that they can transform into digital life forms and upload themselves into data networks. Technopathy is a new psionic discipline that is available to certain protoss and terran characters. Because this discipline requires a high understanding of technology, mastering these powers requires high ranks of computers and (sometimes) science. After all, the psychic needs to have a keen understanding of technology to allow their mind to interact with computer systems on an instinctual level. Technomancy Minor Powers Password Manager Requirements: Psi level 2 You can generate and store a list of highly secure passwords of great length in your mind for instant use on any device you can reach with your mind. You can login to a machine you have already set up with a mental free action, and the penalty to hack your devices, accounts, and secure communication channels is increased by -1. Nonvisual Studio Requirements: Psi level 3 You can create a digital workspace within your own mind. By closing your eyes, you can mentally work in your mind to generate and debug programs that can later be transferred to a computer. Some technomancers use this power to go “unplugged” for a while, some travelling to hike in nature preserves, others to stay productive while in hiding or prison, some just use it to avoid getting out of bed. Minor Device Access Requirements: Psi level 3 You may access non-secured embedded devices with simple architectures – generally this allows you to flip small switches, trigger motion controlled doors, change holo channels, and other minor effects in residential and public areas not monitored by more complex or secure systems. This effect reaches out to short range (6 squares). Mental Hack Technopathy, PL 2, Sustained Power, Computers d4"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 6 squares SPs: 1 By using Mental Hack, the psychic can try to hack a computer from a distance without touching the computer. They also gain a bonus to their Computers check to hack equal to 1/3 PL. The computer must be within 6 squares of the character trying to hack it. This power must be sustained for long-term hacking checks. Psi Level Benefit 3 Power can be used at 30 squares. 4 While using this power, it takes the psychic half as long to hack a computer or a construct; the power is usable at 60 squares. 5 This power no longer costs any SP. 6 Power can be used at 120 squares; it takes one quarter the normal time to hack when using this power. 8 The psychic adds 1/2 their PL to hacking checks. Mental Transmission Technopathy, PL 2, Sustained Power, Computers d4"
    },
    {
      "name": "Action Type: Limited free Action",
      "discipline": "Technomancy",
      "desc": "Range: Special SPs: 2 Mental Transmission allows the psychic to use their mind to communicate and hear through radios and communicators. This power can be used in numerous ways. While the power is sustained, the character counts as having a Communicator with a range of 10 miles per PL. This power can send a signal or electronic text message to a chosen target or digital account. Text messages can be up to 10 words per PL per round. It is persistent once sent. Audio signals, on the other hand, repeat as long as the psychic sustains the power. These powers have a range of 25 miles per PL. The power can be used to intercept communications sent within an area. This includes secure transmissions and messages not sent to the psychic. The psychic marks an area within 1 mile per PL. This area is a Burst (10xPL). Any electronic communications going in or out of the area is intercepted by the psychic. If the message is heavily encrypted, they might require a computer skill check (Difficulty 4 or 8, GM’s discretion) to break through the encryption. Psi Level Benefit 5 This power has twice the normal range based on PL; text messages sent have a length of 100 words per PL. 8 All uses of this power can reach anywhere on the planet or within orbit of the planet. 10 This power no longer costs any SP. Overload Technopathy, PL 3, Instant Power, Computers d6, Mental Hack"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 6 SPs: 3 The psychic causes a robot or vehicle to suddenly overload their systems and power supply. This requires a psionic attack roll versus the defense of a construct. The attack gains bonus accuracy equal to Computers /3. If the attack hits, the target suffers 2d10+PL EMP (ignores construct’s armor) damage, or half that much damage on a missed attack. Psi Level Benefit 5 This power functions at 30 squares. 6 This power gains +4 damage versus constructs. If it deals a wound, the target takes an extra wound. 7 This power functions at 60 squares. 10 This power functions at 120 squares. Remote Pilot Technopathy, PL 3, Sustained Power, Computers d6, Mental Hack"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 6 SPs: 3 Remote Pilot allows a psychic to take control of an unattended vehicle and control it. This power can affect any vehicle that is huge-sized or smaller. It is an action to take control of the vehicle. The vehicle must be within range for the psychic to control it and must remain in that range to sustain control of it. The psychic uses his normal actions to control the vehicles, such as an action to pilot the vehicle and an action to shoot its weapons. They do not need to meet the training requirements of the vehicle to control it and they add +2 (+4 on a raise) to all Pilot checks. The vehicle’s statistics are based on the psychic’s as normal. Psi Level Benefit 4 This power functions at 30 squares. 5 The psychic can negate two points of multi action penalties for firing a vehicle weapon, including weapons not controlled by the Pilot. 6 The psychic can control gargantuan-sized vehicles; this power functions at 60 squares. 8 The psychic can control colossal-sized vehicles; this power functions at 120 squares. 10 The psychic can control massive-sized vehicles, they no longer suffer multi action penalties for firing multiple vehicular weapons. Psionic Repair Technopathy, PL 4, Sustained Power, Computers d6"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 6 SPs: 3 The psychic can use their power to repair a construct through pure thought. As they use this power, the vehicle’s flaws sort out, the wiring fixes itself, and the system stabilizes its power fluctuations. When this power is used and every round it is sustained, the construct recovers 1 Wound. This cannot be used as a vehicle is being piloted. Psi Level Benefit 6 This power restores 2 Wounds. 7 This power functions at 30 squares. 8 This power restores 3 Wounds; its cost is reduced to 2 SP. 10 This power restores 4 Wounds. Override Technopathy, PL 5, Channeled Power, Computers d8, Overload"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 SPs: 4 The psychic can use override to effect robots and either cripple or bolster them. This requires a psionic attack roll versus the Defense of a robot if the robot is hostile. The attack gains bonus accuracy equal to Computers /3. The psychic chooses the effect they are applying to the robot: -Cripple: The robot is Distracted for 2 turns. -Disable: The robot is Stunned. -Focused: The robot gains +2 on all attack rolls and skill checks (+4 on a Raise) for 1 turn. -Braced: The robot gains Armor equal to PL for 1 turn. Psi Level Benefit 6 This power can be used at 60 squares. 7 This power bonus to accuracy increases to Computers /2. 8 Cripple now deals 2d10+PL EMP damage (ignores robot’s armor) to the robot every turn it is Distracted; when using Disabled, the robot is Distracted for 1 turn afterwards; Focused now lasts for 3 turns; Braced robots also gain +5 armor for 2 rounds 10 This power can be used at 120 squares. Null Zone Technopathy, PL 5, Sustained Power, Computers d8, Mental Transmission"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Burst centered on Self SPs: 8 The psychic can project a Null Zone around them which drowns out all electronic networks surrounding them. This power effects an around the psychic with a radius of 10xPL squares. Within that area, electronic communicators and radios cease to function. They cannot send or receive messages. Wireless data services cease to function, including access to the Hypernet. Automated functions that rely on remote control, such as various drones and installation functions, enter standby mode and do not respond to input until they exit the null zone. Psi Level Benefit 7 This power can be projected instead of being centered on the psychic. A projected Null Zone has the same area but can be targeted at a location within 120 squares. 8 The null zone now affects an area of 20xPL squares; the zone also deactivates protoss psi matrixes within the area, possibly rendering protoss structures without power. In addition, protoss telepathic augmenters do not function in the area. Finally, Instinctive Telepathic Links do not function in the area. 10 This power is so disruptive that it distorts telepathic communication within the area. The Natural Mind Reading trait does not function, forcing innately telepathic creatures, such as protoss, to use Messaging and Reading powers to communicate. Finally, all telepathic powers in the area, whether manifested by friend or foe, suffer a -2 on the manifestation check, -4 on a Raise. Electromagnetic Burst Technopathy, PL 6, Instant Power, Computers d10, Overload"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Burst centered on Self SPs: 7 The psychic releases a massive surge of energy that sweeps from them. This blast of electro-magnetic energy fries’ circuits and computers within the area. This power effects a Burst (3xPL) centered on the caster, attacking the Toughness of every target within the area. The targets suffer 4d6+PL EMP damage, or half that much damage on a missed attack. As normal for EMP damage, characters in powered armor that are struck are Slowed (Speed reduced by 4) for 1 round. Psi Level Benefit 8 Targets that are in powered armor that are struck by this power are instead Slowed for a number of rounds equal to ½ PL. 10 The caster can omit a number of squares equal to PL from being affected by this power Magnetic Field Technopathy, PL 6, Sustained Power, Computers d10, Overload"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 7 In a raw display of power, the psychic generates a storm of magnetic energy around them, allowing them to glow with power and bend the laws of reality to their will. While this power is active, the user can fly at a speed equal to their PL. They are very protected against projectile attacks, as most projectiles are simply rebounded by the caster’s field. Ranged attacks without one of the following damage types: Acid Damage, EMP Damage, or Energy Damage have a -2 penalty to attack and damage, -4 on a Raise. In addition, they can spend an Action to manifest one of possible 3 attacks. They can use multiple actions to make various different attacks or the same attack multiple times. However, they cannot target the same enemy with these powers more than once a turn. -Lightning Discharge: the caster makes a psionic attack vs a target within 30 squares. If the attack hits, the power deals 2d10+PL damage, with Energy Damage, AP 4, and Stun weapon traits. -Magnetic Blast: the caster makes a psionic attack vs a target’s Toughness (Without armor) within 30 squares, gaining bonus accuracy equal to Computers /3. If the attack hits, the target is knocked back ½ PL squares, PL squares on a Raise. -Disruptive Blast: the caster makes a psionic attack against a construct within 30 squares. If the attack hits, the target suffers 2d10+PL EMP Damage. Psi Level Benefit 7 While this power is active, the caster ignores two points of multi action penalties when making a special Magnetic Field attack 8 The user gains a fly speed equal to 3xPL 9 The protection against ranged attacks increases to -4 on a success, -6 on a raise. The caster ignores four points of multi action penalties when making a special Magnetic Field attack 10 While this power is active, the caster projects an aura centered on themselves with a radius of 3xPL squares. Running or evading is impossible within the area and moving towards the caster counts as difficult terrain. Transcend Mortality Technopathy, PL 8, Persistent Power, Computers d12, Override, Null Zone"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 10 The most advanced of technopathic powers, the psychic can detach their consciousness from their body and become a being of pure digital energy. In doing so, their body becomes limp and non-functioning, performing only basic body functions as it is essentially brain dead. The caster then enters an electronic network they are adjacent to. This can be the electronics of an installation, a wireless network, or any similar data network. Once they have transcended into the network, they can perform any changes or actions to modify features in the establishment as if they were an AI on that network. For example, if the caster uploads their consciousness into the electrical system of a space station, they could close or open the door, access data cores, control turrets, air locks, etc. However, because they lack a physical body, they cannot perform any other actions, such as attacking or manifesting psionic powers. The character can access a number of systems each turn equal to their Intelligence die size /2. Encrypted information or access that the character does not have the key or password for still requires computer checks to access. Any AIs on the network, or characters with access to the console, can make opposed Computers checks against the character to prevent or undo changes that they are making. This power is not without risks. If the network they are uploaded into is deactivated, the psychic similarly does not exist until the network is reactivated. If the network is completely destroyed, the caster is similarly destroyed. In addition, the user’s body starts to die while they are away from it. It expires after days equal to the caster’s PL passes. Once the body dies, the character is permanently embedded in their chosen network. Returning to their body requires their body still having physical contact with the source of the network, such as connection to a power or data cord. Once they return to their body, they gain 1 point of Fatigue, +1 for every two days they are away from their body. If you reach your Fatigue limit, extra fatigue becomes Wounds. It is also possible to create malware that will destroy the caster when they are embedded into a network. Doing so requires a significant amount of time, usually 1 hour per Intelligence die size the caster has and requires a Computer skill check with -4 penalty to create. Unleashing this malware will purge the caster, destroying them forever and preventing them from ever returning to their body. Therefore, characters that plan to stay in a network for a long period of time survive longest if they make their presence invisible. Psi Level Benefit 10 The caster gains a bonus to computer checks while using this power equal to their PL/2. 12 The caster can ‘hop’ from one linked network to another. This counts any related networks, like going from an electrical system to a data network or wireless network. Doing so takes 1 hour of time in which the character cannot do anything else. Once they transfer networks, they lose access to the previous network and gain access to the new one. Telekinesis Telekinesis powers are where the psychics use their minds to manipulate matter, move objects or creatures, or strike with projections of force. The ability to manipulate objects with the mind requires a strong mind, and Telekinetic psychics, also known as ‘teeks’ in terran society, are much rarer. Telekinesis is a very flexible psychic discipline, used for offense, defense, or utility. Psychic attacks made with telekinesis usually target defense, but sometimes may target toughness directly. Telekinesis Minor Powers Telekinetic Reach Requirements: Psi level 2 You may perform basic interaction with objects near you without needing your hands – this can include holding, placing, or retrieving small objects without needing your hands. This power could be used to reach an object just out of reach from within a jail cell but is primarily used to grab a nearby remote control, reach objects on tall or short shelves, or hold books while eating. Hover Requirements: Psi Level 4 You may hover a few inches above the ground. This does not allow you to move while you are hovering but can be useful in temporarily avoiding the ground. This levitation slows your momentum roughly as quickly as normal ground would, so if you are pushed, you will not go very far. However this power is incredibly easy to maintain in the back of your mind, so some teeks will keep this power active when meditating or sleeping. Telekinetic Programming Requirements: Psi Level 4 You may ‘program’ an object to perform a simple task as you direct it. These tasks are generally a combination of a simple motion of the object with optional movement through a space. This power can be used to program a broom to sweep an apartment or to make a spoon move to different pots to stir but could not be used to automate cooking a meal. The programming of the object is incredibly frail, and if either you or the object are within the area of a combat encounter, the power ends. You may only have one programmed object active at a time, but you have a number of objects storing programming equal to your INT/2. Telekinetic Assistance Requirements: Psi Level 5 You can split your focus and perform multiple minor telekinetic actions at the same time. Each may only handle simple actions and little weight, but this allows you to physically multitask while cooking a complex dish or dressing yourself in a complex outfit. Manipulation Telekinesis, PL 2, Sustained Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 1 The Manipulate power allows the caster to interact with a small object, only with the mind and at range. Basically, any function that could normally be done with the caster’s hands can be performed from a distance. The caster can telekinetically move the object up to 6 squares in any direction and use it. Against objects that are on another character, this requires a psionic attack against the target’s Defense. If Strength is an obstacle to whether something can be manipulated (such as a pulling a weapon from an enemy’s hand), use the caster’s Psionics as its Strength. This power cannot be used to attack with a weapon, use Telekinetic Combat for that. Psi Level Benefit 3 Power can be used at 60 squares. 4 Power does not require line of sight, only knowledge of the targets existence 5 Power can be used at 120 squares. 6 Power can jam a weapon. This can jam weapons that are normally not susceptible to jams. 8 Power can affect a number of objects equal to ⅓ PL. You are still subject to multi action penalties for using multiple objects. 10 Multi action penalties while using held objects are reduced by 2. Move Object Telekinesis, PL 3, Instant or Sustained Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 2 The Move Object power allows the psychic to lift and move objects with the power of their mind. The caster can target any creature or object up to medium in size. If an object is carried by another creature or vehicle, this is rolled against the target’s Toughness (without armor). They can move the object a number of squares equal to PL. Psi Level Benefit 4 Power can move a number of objects equal to ½ PL; power can be used on large targets; power can be used at 60 squares. 5 Power can be used at 120 squares. 6 Power can be used on huge targets; caster can throw one or more of the targets. This instantly releases his hold on them, but they are thrown 3x PL squares in a single direction. If a targeted creature or object is thrown against another target, compare your Psionics roll against that target’s Defense, dealing damage to the thrown target and whatever it hits based on the type and size. 8 Power can be used on gargantuan targets. 9 Power can be used at remote range 10 Power can be used on colossal targets. 12 Power can be used on massive targets. Object Size Base Damage Object Type Damage Modifier Material Tiny 1d4 Delicate -4 Cardboard Small 2d4 Light -2 Glass, Meat, Plastic Medium 2d6 Baseline 0 Bone, Wood Large 3d6 Dense +2 Brick, Rock, Plasteel Huge 4d6 Hard +4 Steel, Plascrete Gargantuan 5d6 Unbreakable +8 Neosteel Colossal 6d6 – – Create Water Telekinesis, PL 4, Instant Power, Requires Move Object"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Touch SPs: 1 A caster can touch a section of natural ground and pull water to the surface. This power must be maintained between 1 to 5 rounds to take effect, based on the environment, ranging from 1 round in a humid jungle to 5 rounds in a busy metropolis or wasteland. This power cannot be used away from the ground, or a place where there is no water, such as space. After the power is completed, water rises from the ground in a pool covering a SBT around the ground. The water can be used for drinking, filling canteens, cook pots, or whatever the caster needs. Psi Level Benefit 5 Power can be used at a location within 6 squares. Every round they maintain the effect beyond the minimum necessary for water to spawn, the water area expands by 1 additional square radius. 6 Power can be used at a location within 60 squares. Rather than just having the water drawn out in a shallow pool, it can explode like a geyser. The area of effect is the area of the power that is also 3x PL squares tall. The caster makes a psionic attack roll against the Defense of every target within the area. Targets whose defenses are hit suffer 3d6+ PL damage, +1d6 on a Raise. Targets that are Shaken or Wounded are also knocked prone. If the caster chooses to maintain the effect and constantly grow the area, the power triggers every round. 7 Power can be used at 120 squares. Telekinetic Flight Telekinesis, PL 4, Sustained Power, Requires Move Object"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 2 While this power is active, the user can fly at a speed equal to their PL and attacks against him have a -2 penalty, -4 on a Raise. Psi Level Benefit 5 Power speed equals PL x3. 6 Power affects a number of additional targets equal to 1/3 PL. Additional targets must remain within 30 squares of the caster to maintain effect 8 Power speed equals PL x5. Telekinetic Push Telekinesis, PL 4, Instant Power, Requires Move Object"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 6 squares SPs: 2 A caster can use the Telekinetic Push ability to throw enemies around. The caster makes a psychic attack versus the target’s Toughness (without armor). If the attack succeeds, the target is pushed your PL square backwards, double your PL with a Raise. The target takes 3d6+PL damage on hit, +1d6 on a Raise. Psi Level Benefit 5 Power can be used at 30 squares. 6 Power affects a number of targets equal to 1/3 PL 7 Power can be used at 120 squares. 8 Successful manifestations of the power also knock the targets prone. 10 Power gains a manifestation bonus equal to ½ PL. Pushes double its normal distance and deals an addition +1d6 of damage. Telekinetic Impact Telekinesis, PL 5, Instant Power, Requires Move Object"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 6 SPs: 3 A caster has taken the first step to mastering telekinetic energies to make a focused attack. This functions as a standard ranged telekinetic attack. It deals 4d6 + PL damage, +1d6 on a Raise. It has the Close Quarters weapon trait. Psi Level Benefit 5 Power can be used at 30 squares. 6 Power can be used at 60 squares. 7 Power can be used at 120 squares. 8 Power knocks the target prone if the attack also surpasses Toughness (without armor). Telekinetic Shockwave Telekinesis, PL 6, Instant Power, Requires Telekinetic Push"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Centered on Self SPs: 5 The Telekinetic Shockwave is a visible burst of telekinetic energy blasting outwards from the caster. This power affects all targets within a burst centered on the caster equal to PL in size. The caster is not affected by this power. The caster makes a psychic attack against all targets in the area. If the attack succeeds against Toughness (without armor), the target is pushed your PL square backwards, double your PL with a Raise. The target also takes 4d6 + PL damage, +1d6 on a Raise. Psi Level Benefit 8 Power knocks the target prone if the attack surpasses Toughness (without armor). 10 Power has a burst area equal to 2xPL 12 Power has a burst area equal to 3xPL 15 Power has a burst area equal to 5xPL Telekinetic Grasp Telekinesis, PL 6, Sustained Power, Requires Telekinetic Impact"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 5 A caster can use the Telekinetic Grasp ability to hold and squeeze enemies of large size or smaller. The caster makes a telekinetic attack against the target’s Toughness (without armor). If the attack succeeds, the target is held in place and slowly crushed by the energies. The target is Bounded and must make a Fear roll at -2 and take 1 Wound at the start of every turn. The target can try to end the effect at the end of their turn, with a Strength check with a difficulty of 4+PL (8+PL on a Raise). Psi Level Benefit 7 Can be used at 60 squares; can grasp targets up to Huge size. 8 Can be used at 120 squares and no longer requires line of sight; can grasp targets up to Gargantuan size. 9 This power now affects all targets within a SBT. 10 Power gains a manifestation bonus equal to ½ PL. 11 This power now affects all targets within a MBT. Telekinetic Dome Telekinesis, PL 6, Sustained Power, Requires Levitation"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 3 A caster of this potent spell can weave a protective barrier around himself that deflects ranged attacks. This barrier functions as an energy shield with a Hardness of 10 + PL and Shield Pool of 4, +1 on a Raise. This barrier only counters ranged attacks without the Acid Damage or Energy Damage traits. Psi Level Benefit 7 Power also protects against ranged attacks that deal damage with the Acid or Energy Damage trait. 8 Power also protects against melee attacks. 10 Shield Pool gains +1 Shield Point. Imbue Form Telekinesis, PL 6, Sustained Power, Requires Telekinetic Flight"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: 3 Imbue Form enhances all of the character’s movements and actions with telekinetic energies, boosting their effectiveness. While this power is in effect, the caster increases his Agility and agility-based Skills as well as Strength by one die step, two with a Raise. The caster also increases his Speed by 1, 2 with a Raise. Psi Level Benefit 7 The character also increases his Toughness by 2, 4 with a Raise. 8 The Power increases Strength by two, three with a Raise. 9 The Power increases Agility, agility-based skills and Pace by two, three with a Raise. Telekinetic Combat Telekinesis, PL 7, Sustained Power, Requires Manipulate and Move Object"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 6 squares SPs: 2 per weapon The psychic can telekinetically grasp weapons that are in their possession or loose on the ground within range, but not in the possession of other characters. The psychic can control a number of weapons equal to 1/3 PL, and these weapons are considered held by the psychic. They can spend an action to move a weapon up to 6 squares and attack with it using Psionics for the attack roll, as well as for Strength when calculating damage if necessary. Each weapon retains its normal Reach or Range, but they cannot make free attacks, and they can be \"disarmed\" via disarm actions. When attacking with these weapons, the psychic negates one point of multi-action penalties. When this power is no longer sustained, the weapons fall at their current location. Psi Level Benefit 8 This power functions at 30 squares. 10 The character negates two points of multi action penalties when attacking with these weapons. Crush Telekinesis, PL 9, Persistent Power, Requires Telekinetic Grasp"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 300 squares SPs: 10 When casting Crush, the target is lifted off the ground, and then suddenly crushed by tremendous telekinetic energies. This functions as an opposed psionic attack roll opposed by the target’s Athletics check, and only affects gargantuan or larger targets. If the target is a vehicle, they oppose it with a Pilot skill check instead. If the attacker wins the check, the target is Bounded and lifted a number of squares upwards equal to ½ PL. When the target’s next turn arrives, they may take no other actions except for manifesting psionic powers or taking a round to try to end the effect, prompting a Strength check with a difficulty of 10+PL (15+PL on a Raise). If the target is a vehicle, no strength check may be attempted, but any crew or passengers may spend a full round attempting to escape the craft. For a massive or larger ship this may not be sufficient time to escape. If the target does not escape, at the start of the caster’s next turn, the target suffers ½ your PL in Wounds. If there was anyone inside of a vehicle, they take the same damage suffered by it. Psi Level Benefit 10 Power gains a manifestation bonus equal to ½ PL 12 Power gains a manifestation bonus equal to your PL. Telepathy Telepathy powers are powers that read, effect, compel, damage, or control the mind. They are invisible powers, all happening in the minds of the caster and his targets. All psychics are capable of some degree of telepathy. Basic telepathy allows a caster to send or receive mental messages, while more advanced telepathy skills allows a character to control a mind or cause a brain to melt or explode. Many telepathy powers require a typical psychic attack roll against the target’s resolve. Also, any character whether Psychic or not, can try to block their thoughts, known as Thought Blocking. This allows characters that are afraid of mental influence to protect themselves from being attacked or controlled. Telepathy Minor Powers Empathy Requirements: Psi level 2 You may ‘listen’ to the emotions of others within a number of squares equal to ½ your psi level. This gives you a sense of their general emotional state but does not allow you to read their thoughts. Mind Search Requirements: Psi level 3 You may search your own memories, looking for thoughts and information lost within your own mind. It only takes a few seconds to recall recent information that you have forgotten, but it may take a minute to recall information from a month or more ago. Recalling information that has been taken from your mind, such as by psionic powers or a mind wipe, may take around 10 minutes. Illusory Image Requirements: Psi level 4 You may create a flat, illusory image, visible in the minds of a small number of willing people. This cannot be used to make any kind of compelling illusion, but it can be useful to communicate visual ideas with your allies. Some teeps use this as a kind of shared mental whiteboard, while other uses may include sharing some kind of remembered information such as showing what you could recall of a face, or the sound of a weapon firing for the purpose of aiding other to identify it. Memory Modification Requirements: Psi level 5 You may work with a willing participant to alter or remove their memories. This is a precise operation, usually to help alleviate trauma; this power is not such that you could fully mind-wipe or resocialize a target. The target must be willing to begin the process and must approve any modifications. Reading Telepathy, PL 1, Instant Power"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: 6 squares SPs: None The Reading power allows the psychic to read the thoughts and feelings of a target. It gives the ability to give the target’s general reaction towards something or someone and can warn of potential danger. The psychic must see the target to use this ability on them. This power does not require a psionics roll against discipline unless the target is Thought Blocking. Note: Any character with the Natural Mind Reading ability gains the power for free. Psi Level Benefit 3 Power can be used at 30 squares; power can read surface thoughts in addition to feelings 4 Power can affect a number of targets equal to ½ PL 5 Power can be used at 60 squares, and no longer requires line of sight. 6 Power can probe the target’s mind for specific information. 7 Power can be used at 120 squares. Psychic Block Telepathy, PL 1, Sustained Power"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: Self SPs: 1 The Psychic Block power enhances the psionic characters ability to do Thought Blocking. While Thought Blocking is active, they add +1 to their Discipline and Resolve against Telepathy attacks, +3 on a Raise. This lasts as long as the user sustains the Thought Block. The user can start Thought Blocking as part of manifesting Psychic Block Psi Level Benefit 3 +2 to Discipline and Resolve, +4 on a Raise. 4 Power is Sustained every minute. 5 +3 to Discipline and Resolve, +5 on a Raise. 7 Power is Sustained every ten minutes. 8 +4 to Discipline and Resolve, +6 on a Raise. 9 Power is Sustained every hour. Meditation Telepathy, PL 1"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self SPs: None The psychic has learned to enter a meditative trance while sitting down, similar to sleep but allowing them to stay somewhat aware of their surroundings. While meditating, the character counts as sleeping for healing. They must still be meditating for the normal duration to gain these bonuses. They always count as being in a safe spot for this rest. They can end their meditation as an action. While meditating, the only sense they have access to is their psionic detection. Psi Level Benefit 2 While meditating, the character can also use non-visual perception forms, gaining a bonus equal to your PL/3 on such checks. 4 While meditating, the character uses up food and water at one-quarter the normal rate 5 While meditating, the character does not require food or water 8 While meditating, the character does not require oxygen Messaging Telepathy, PL 2, Instant Power"
    },
    {
      "name": "Action Type: Limited Free Action",
      "discipline": "Energy",
      "desc": "Range: 6 Squares SPs: None The Messaging power allows the psychic to send a brief, one sentence message to a target. The communication is mental, and the target hears it clearly inside their mind while others around them do not. The psychic must see the target to use this ability on them. This power does not require an attack versus Discipline unless the target is Thought Blocking. Note: Any character with the Natural Mind Reading ability gains the power for free. Psi Level Benefit 3 Power can be used at 30 squares; power does not require visual sight of the target. 4 The psychic can send longer messages, equal to the speed of human speech. The power can effect a number of targets equal to ½ PL 5 Power can be used at 60 squares. 6 Power can be used at 120 squares. 7 Power can send much longer messages, equal to twice the speed of regular speech. Compulsion Telepathy, PL 3, Instant Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 2 The Compulsion power allows the psychic to place a hypnotic suggestion in the target without their knowledge. This power can persuade a target to perform an action or make a decision that is not against its nature, is one they are undecided on performing or not, and does not put the target at odds with his allies or places him in reckless danger. Performing this ability requires a Psionics roll versus Discipline. Examples of use of Compulsion is forcing someone to agree with you in an argument, attack one enemy rather than another, or stop fighting an enemy to help an ally who might fall off a cliff. Even if this attack fails, the target is not aware the power was used against them. Compulsion is not a command effect; it does not allow you to control others. Instead, it is a hypnotic suggestion that gives the target an idea or disposition towards an action. Actually, controlling others is the purview of the Command psionic power. Even a successful compulsion is not guaranteed to do anything, especially in the heat of combat, but instead function as a gentle push towards an action or idea. In combat, compulsion is most often used to ‘soften’ targets to make them more susceptible to combat influence. The GM is encouraged to give bonus on influence rolls against targets of compulsion in the case that it makes sense. Psi Level Benefit 4 Power can be used at 60 squares. 5 The psychic can force the target to make a decision that is against their nature, utterly irrational, or places them in reckless disregard for their own safety. The target makes a spirit roll (at -2 in case of a raise) at the end of each of their rounds to ‘shake off’ the effect and behave like their normal selves. Alternatively, the effect can be ended by one of the character’s allies making an influence roll versus the target discipline (at -2 in case of a raise) to convince the character something is wrong with what they are doing. After either one of these checks succeed, the target and his allies are more than likely to realize something is wrong and psionic compulsion is at play. 6 This power can be used at 120 squares; power affects a number of additional targets with the same compulsion equal to 1/3 PL 7 When the psychic uses compulsion on multiple different targets, they can effect each target with a different compulsion Hidden Sight Telepathy, PL 3, Sustained Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: Self or 30 squares SPs: 1 The Hidden Sight power causes the psychic to confuse the senses of the target, causing them to not see something. The caster can hide from sight a number of medium sized or smaller creatures or objects equal to the ½ their PL from a single target. The objects count as cloaked (invisible) as long as they do not move or attack on their turns. Psi Level Benefit 4 Power can affect targets up to large size 5 Power can affect targets up to huge size 6 Power can affect targets up to gargantuan size; hidden targets can move on their turn 8 Power can affect targets up to colossal size 9 Hidden targets can move and attack on their turn 10 Power can affect targets up to massive size Hallucination Telepathy, PL 4, Channeled Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 3 The Hallucination power allows the psychic to project a fictional entity of medium size or smaller. This entity can be one that the caster is personally familiar with, or has learned about through mentally probing another target. The hallucination appears real to all senses, except touch. The caster controls the hallucination during their turn as a limited free action. The hallucination can distract or manipulate a target, but cannot physically harm them. The hallucination lasts 3 rounds per PL of the user, although the caster can keep the hallucination going by recasting the power. If the hallucination is attacked, it takes damage and can be destroyed as typical of a normal representative of the thing it is replicating. The hallucination can be revealed by an enemy making a perception roll at -4 penalty (or -6 with a raise). Psi Level Benefit 5 Hallucination can be created at 60 squares; hallucinations are up to large size; can create up to 2 hallucinations. 6 Hallucinations can be created at 120 squares; hallucinations are up to huge size. 7 Hallucinations are up to gargantuan size, can create up to 3 hallucinations. 8 Hallucinations are up to colossal size. 9 Hallucinations are up to massive size, can create up to 4 hallucinations. 11 Can create up to 5 hallucinations. Stop Organ Telepathy, PL 4, Sustained Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 4 A psychic can use the Stop Organ power to telepathically manipulate the target’s nervous system in a way that damages their bodily functions. This is a Psionics roll vs Discipline that affects the target’s Legs. Psi Level Benefit 5 The psychic may choose to affect the Arms 6 The psychic may choose to affect the Lungs 7 The psychic may choose to affect the Heart 8 The psychic may choose to affect the Brain Stop Organ Table Injury Immediate Effect Ongoing Condition Legs On a Success, the target suffers the Ongoing Condition. On a Raise they are Knocked Prone. -2 to Defense, Athletics, Stealth and Evasion rolls. Arms On a Success, the target suffers the Ongoing Condition. On a Raise they drop all held items. -2 to Melee, Pilot, Ranged and all skills that physically interact with something using the arms. Lungs On a Success, the target takes one point of Fatigue and the Ongoing Condition. On a Raise, it increases the Ongoing Condition severity. At the end of each turn, make a Vigor roll (at -2 on a Raise) or suffer 1 additional point of Fatigue. Heart On a Success, the target suffers one Wound and the Ongoing Condition. On a Raise, it increases the Ongoing Condition severity. Lose any Regeneration (if any). At the end of each turn, make a Vigor roll (at -2 on a Raise) or suffer 1 Wound. Brain On a Success, the target suffers the Ongoing Condition. On a Raise they are Stunned. -2 to Defense, Discipline and all trait rolls. A Medicine check at -2 (-4 on a Raise) can stop the Ongoing Conditions. Feedback Telepathy, PL 4, Instant Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 3 The Feedback power causes a massive psionic spike in another psychic’s mind. This power requires a Psionics roll versus Discipline, and can only be used against another psychic. If the attack hits, then the target loses SP equal to the caster’s ½ PL. They cannot be drained beyond 0 SP. They then suffer a hit of psionic damage equal to 2d10+ SPs drained. Psi Level Benefit 6 SP drain becomes equal to caster’s ½ PL +1. 7 Power can be used at 60 squares. 8 SP drain becomes equal to caster’s ½ PL +2. 10 The power causes psionic damage equal to 2d10+SPs drained; power can be used at 120 squares. Mind Blast Telepathy, PL 5, Instant Power"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 3 The Mind Blast power is the terrible weapon of the telepath, allowing them to use mental energies to melt a target’s brain or cause their skull to explode. If the caster succeeds a psionic roll versus the target's Discipline, the target takes psionic damage equal to 3d6. Psi Level Benefit 6 Power gains damage equal to ½ PL. 7 Power becomes a SBT 9 Power becomes a MBT 11 Power becomes a LBT 13 The caster can exclude any target inside the area, but they must be aware of the target first. Command Telepathy, PL 5, Persistent Power, Compulsion"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 5 The Command power allows the psychic to take control of an enemy for a number of rounds equal to ½ PL. The power requires a Psionics roll vs the target’s Discipline, if successful, the target is brainwashed and spellbound, obviously oblivious to their surroundings. For the duration of the power, the target must follow a simple command each round such as ‘Attack them!’, ‘Defend Me!’, or ‘Run Away!’ The commanded targets cannot perform any Intelligence or Spirit based skill tests, benefit from combat augmentations, or manifest psionic powers. They simply follow the basic instructions to the best of their ability, with a lack of any self-preservation. At the end of each of the target’s turns, they can make an Spirit roll (at -2 in case of a raise) to snap out of the effect. Psi Level Benefit 6 Power can be used at 60 squares. 7 Power can be used at 120 squares. 8 Checks to break out of the power’s effect take a -2 Penalty 10 The power can cause the target to follow much more elaborate commands, and the target is able to use all of its skills, combat augmentations, and psionic powers to fulfill the instructions. Mind Ripple Telepathy, PL 6, Instant Power, Mind Blast"
    },
    {
      "name": "Action Type: Exclusive Action",
      "discipline": "Telepathy",
      "desc": "Range: Burst centered on Self SPs: 5 The Mind Ripple is a wave of mind-melting psionic energy radiating from the caster. This power affects all targets with a burst equal to PL centered on the caster. The caster makes a Psionics roll versus Discipline to all targets, dealing 4d6 psionic damage to all targets within the area. Psi Level Benefit 8 Power gains damage equal to ½ PL. 9 Any targets that are shaken or wounded from this power are Distracted. 10 Power affects a burst area equal to double PL Mind Overload Telepathy, PL 7, Instant or Channeled Power, Mind Blast"
    },
    {
      "name": "Action Type: One or more Actions",
      "discipline": "Telepathy",
      "desc": "Range: 30 squares SPs: 4 The Mind Overload is a deadly psionic power that can brutally cripple even the most dangerous of enemies. Mind Overload is cast over 1 or more actions. Each action increases the Psi Level the power is manifested at by 1, up to double the caster’s normal PL. This stacks with the benefits from boosting. The power is manifested at whatever turn the caster chooses to quit charging and releases the power. It functions as a psychic attack, dealing 2d12+PL psionic damage to a single target. Psi Level Benefit 8 Target takes damage again at the start of your next round equal to 2d10+PL 9 Any targets that take wounds from this power are distracted until the end of their next turn. 10 Target takes damage again at the start of your next round equal to 2d10+P and subsequent rounds equal to 2d8+PL, 2d6+PL and 2d4+PL. Psionic Maelstrom Telepathy, PL 7, Persistent Power, Requires Mind Blast"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 60 squares SPs: 5 The Psionic Maelstrom power creates a whirlwind of telepathic energy that overloads the mind into no longer functioning. This power affects a burst area with a radius equal to PL. Everyone in the area is Distracted, and the caster makes a psychic attack against the Discipline of everyone in it. On a success they are Stunned, with a Raise affected creatures have a -2 to recover from the Stunned condition. Psi Level Benefit 8 Power can be used at 120 squares. 10 Targets take an additional -2 to recover from the Stunned condition. 12 Power’s burst area increases to PLx2 Dominate Telepathy, PL 8, Persistent Power, Requires Compulsion"
    },
    {
      "name": "Action Type: Action",
      "discipline": "Augmentation",
      "desc": "Range: 30 squares SPs: 10 The Dominate power is one of the most feared of all psychic abilities, allowing the caster to fully enslave the target. This requires a psychic attack against the target Discipline. Once affected, the target is fully controlled by the psychic, who commands them with verbal or mental instructions. The target has full usage of all of their abilities, all of their thoughts and memories, and personality, although everything is warped to have unflinching, uncompromising loyalty towards the caster and the caster alone. Another psychic can try to break the enslavement by making an opposed psionic skill check against the caster. If the caster of Dominate succeeds, then the enslavement remains in place and the opposing psychic cannot try to break the Dominate again for 1 hour. If the opposing psychic wins, the Dominate ends. In addition, the Dominate effect ends if either the psychic or the dominated entity is incapacitated. The caster can only have a number of dominated targets at once equal to their Spirit die."
    }
  ],
  "weapons": [
    {
      "name": "C-10 Canister Rifle",
      "type": "Ranged / Sniper",
      "range": "24/48/96",
      "damage": "2d8+2",
      "rof": "1",
      "shots": "20",
      "ap": 4,
      "minStr": "d6",
      "weight": "12 lbs",
      "cost": "Requisition / Standard Issue",
      "notes": "Ghost signature weapon. High velocity, armor-piercing, integrated targeting scope (+1 Ranged, ignores 2 points of Range penalties)."
    },
    {
      "name": "FWG-5 Combat Pistol",
      "type": "Ranged / Pistol",
      "range": "12/24/48",
      "damage": "2d6+1",
      "rof": "1",
      "shots": "15",
      "ap": 2,
      "minStr": "d4",
      "weight": "3 lbs",
      "cost": "Standard Issue",
      "notes": "Semi-automatic heavy ballistic sidearm standard for Confederate/Dominion covert operatives."
    },
    {
      "name": "Gauss Pistol",
      "type": "Ranged / Pistol",
      "range": "12/24/48",
      "damage": "2d6+2",
      "rof": "3",
      "shots": "24",
      "ap": 2,
      "minStr": "d6",
      "weight": "4 lbs",
      "cost": "$500",
      "notes": "Fires hypodermic spike rounds via electromagnetic acceleration. 3-round burst."
    },
    {
      "name": "C-14 Impaler Gauss Rifle",
      "type": "Ranged / Assault",
      "range": "15/30/60",
      "damage": "2d8",
      "rof": "3",
      "shots": "30",
      "ap": 2,
      "minStr": "d8",
      "weight": "18 lbs",
      "cost": "$1,200",
      "notes": "Standard Marine armament. 8mm depleted uranium spikes. Heavy recoil."
    },
    {
      "name": "Combat Knife",
      "type": "Melee",
      "range": "Melee",
      "damage": "Str+d4",
      "rof": "1",
      "shots": "-",
      "ap": 1,
      "minStr": "d4",
      "weight": "1 lb",
      "cost": "$50",
      "notes": "Titanium alloy blade, weighted for close-quarters stealth assassination."
    },
    {
      "name": "Mono-filament Blade",
      "type": "Melee",
      "range": "Melee",
      "damage": "Str+d6",
      "rof": "1",
      "shots": "-",
      "ap": 4,
      "minStr": "d6",
      "weight": "2 lbs",
      "cost": "$600",
      "notes": "Molecularly sharpened edge capable of slicing through combat armor plating."
    },
    {
      "name": "Psionic Blade (Psi-Dagger)",
      "type": "Melee / Psionic",
      "range": "Melee",
      "damage": "Str+d8+Psi",
      "rof": "1",
      "shots": "-",
      "ap": 6,
      "minStr": "d4",
      "weight": "1 lb",
      "cost": "Special",
      "notes": "Pure psionic plasma focused through a neural emitter. Ignores non-energy armor."
    },
    {
      "name": "Lockdown Missile Launcher",
      "type": "Ranged / Heavy",
      "range": "30/60/120",
      "damage": "Special (EMP)",
      "rof": "1",
      "shots": "4",
      "ap": 0,
      "minStr": "d8",
      "weight": "25 lbs",
      "cost": "Requisition",
      "notes": "Fires an EMP/mag-pulse warhead that completely disables mechanical targets, vehicles, and robots for 1d6 rounds."
    }
  ],
  "armors": [
    {
      "name": "Hostile Environment Suit (HES Mk-VI)",
      "armor": 2,
      "weight": "15 lbs",
      "minStr": "d4",
      "cost": "Standard Issue",
      "notes": "Standard Ghost bodysuit. Hermetically sealed with life-support, thermal regulation, neural interface port, and mounts for Personal Cloaking Device."
    },
    {
      "name": "Umojan Shadowguard Stealth Armor",
      "armor": 2,
      "weight": "12 lbs",
      "minStr": "d4",
      "cost": "Special",
      "notes": "Nanoweave kinetic dampener suit with active optical refraction. +2 on Stealth checks while mobile."
    },
    {
      "name": "CMC-300 Powered Combat Suit",
      "armor": 4,
      "weight": "80 lbs",
      "minStr": "d8",
      "cost": "$15,000",
      "notes": "Standard Marine power suit. Provides +2 Strength steps, full NBC environmental seals, and integrated heads-up tactical display."
    },
    {
      "name": "CMC-400 Firebat Heavy Armor",
      "armor": 6,
      "weight": "120 lbs",
      "minStr": "d10",
      "cost": "$22,000",
      "notes": "Heavy reinforced heat-resistant armor plating. Resistant to fire, plasma, and acid attacks."
    }
  ],
  "gear_items": [
    {
      "name": "Personal Cloaking Device (PCD)",
      "type": "Tactical",
      "weight": "4 lbs",
      "cost": "Requisition",
      "desc": "Bends light and sensor waves around the operative. Requires 1 Psionic Energy/turn or internal battery. Renders user invisible (+4 to Stealth, opponents suffer -4 to hit)."
    },
    {
      "name": "Psionic Inhibitor Collar / Dose",
      "type": "Medical/Security",
      "weight": "0.5 lb",
      "cost": "$300",
      "desc": "Blocks psionic frequencies and neural feedback. Suppresses psionic powers for 1 hour per dose."
    },
    {
      "name": "Neural Interface Headset",
      "type": "Comms",
      "weight": "0.5 lb",
      "cost": "$400",
      "desc": "Allows direct mental uplink with Ghost weaponry, targeting sensors, and tactical battle nets."
    },
    {
      "name": "Multi-Spectrum Tactical Visor",
      "type": "Sensor",
      "weight": "1 lb",
      "cost": "$800",
      "desc": "Thermal, night vision, and motion-tracking modes. Ignores darkness penalties and detects hidden thermal signatures."
    },
    {
      "name": "Stimpack Auto-Injector (3 pack)",
      "type": "Medical",
      "weight": "1 lb",
      "cost": "$150",
      "desc": "Injects synthetic adrenaline and neuro-stimulants. Grants +2 Speed, Quick edge benefits for 3 rounds, but inflicts 1 Fatigue step upon wearing off."
    },
    {
      "name": "Hacking Decrypter Bypass Rig",
      "type": "Tech",
      "weight": "3 lbs",
      "cost": "$1,000",
      "desc": "Military-grade intrusion hardware. Adds +2 to Combat Hacking and Computer console intrusion tests."
    },
    {
      "name": "Grapple Line & Ascender",
      "type": "Tactical",
      "weight": "2 lbs",
      "cost": "$120",
      "desc": "Micro-filament line supporting up to 400 lbs with motorized rapid ascender (12\" per turn)."
    }
  ],
  "cybernetics": [
    {
      "name": "Ocular Cybernetic Targeting Eye",
      "points": 1,
      "cost": "$5,000",
      "desc": "Cybernetic ocular implant with integrated rangefinder and ballistic trajectory computer. +1 to Ranged attack rolls."
    },
    {
      "name": "Subdermal Titanium Weave Plating",
      "points": 2,
      "cost": "$8,000",
      "desc": "Reinforced subcutaneous mesh providing permanent +2 Toughness (Armor) that cannot be stripped or disarmed."
    },
    {
      "name": "Neural Reflex Booster Accelerators",
      "points": 2,
      "cost": "$10,000",
      "desc": "Spinal bio-conductive wiring. Increases natural Pace by +2 and grants +2 on Agility-based trick tests."
    },
    {
      "name": "Internal Bio-Filter & Respiration Pump",
      "points": 1,
      "cost": "$3,500",
      "desc": "Immunity to airborne pathogens, gas toxins, and 30 minutes of emergency underwater/vacuum oxygen."
    },
    {
      "name": "Psionic Resonance Node Amplifier",
      "points": 2,
      "cost": "$12,000",
      "desc": "Psionic neural lattice grafted directly to cerebral cortex. Adds +1 to all Psionics skill rolls and +5 Psionic Energy."
    }
  ],
  "rules_reference": {
    "derived_stats": [
      {
        "name": "Defense",
        "formula": "1/2 Agility + 1/2 Instinct",
        "desc": "Difficulty target for enemies attempting to hit you with Melee attacks."
      },
      {
        "name": "Discipline",
        "formula": "1/2 Spirit + 1/2 Intelligence",
        "desc": "Mental defense against intimidation, taunts, psionic mind tricks, and psychic assault."
      },
      {
        "name": "Toughness",
        "formula": "1/2 Vigor + 1/2 Strength + Armor",
        "desc": "Amount of physical damage your body can withstand before suffering a Wound."
      },
      {
        "name": "Resolve",
        "formula": "1/2 Spirit + 1/2 Instinct + Psi Rating",
        "desc": "Amount of psionic/mental damage your consciousness can withstand before psychic shock/wounding."
      },
      {
        "name": "Wounds",
        "formula": "1/3 Strength + 1",
        "desc": "Physical injury capacity before incapacitation (d4=2, d6=3, d8=3, d10=4, d12=5)."
      },
      {
        "name": "Fatigue",
        "formula": "1/3 Vigor",
        "desc": "Stamina and exhaustion threshold before collapse (d4=1, d6=2, d8=2, d10=3, d12=4)."
      }
    ],
    "combat_influence": [
      {
        "action": "Intimidation (Spirit)",
        "desc": "Opposed by target's Discipline. Success leaves target Distracted (-2 to all actions). Raise also leaves target Vulnerable (+2 to all attacks against them)."
      },
      {
        "action": "Taunt / Trick (Instinct or Agility)",
        "desc": "Opposed by target's Instinct or Intelligence. Success renders the target Vulnerable until the end of their next turn."
      },
      {
        "action": "Creative Combat",
        "desc": "Using the environment (shooting steam pipes, dropping cargo crates, blinding flashlights) grants up to +2 to +4 tactical advantage bonus."
      }
    ],
    "hacking_matrix": [
      {
        "result": "4-5",
        "rounds": "4 rounds",
        "notes": "Basic access achieved, alarms may be triggered if counter-intrusion is active."
      },
      {
        "result": "6-7",
        "rounds": "3 rounds",
        "notes": "Standard access, local security cameras or doors bypassed."
      },
      {
        "result": "8-9",
        "rounds": "2 rounds",
        "notes": "Elevated admin privileges, tactical downloads secured."
      },
      {
        "result": "10+",
        "rounds": "1 round (Instant)",
        "notes": "Complete root compromise, ghost trail erased, zero trace left."
      }
    ]
  }
};
