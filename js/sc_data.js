// StarCraft RPG Ghost Operative System Data Compendium - High Precision Dataset
window.SC_DATA = {
  "homeworlds": [
    {
      "id": "tarsonis",
      "name": "Tarsonis",
      "tagline": "The Capital World of the Terran Confederacy",
      "description": "Sophisticated, proud, and often arrogant. Tarsonians are raised in aristocratic luxury or high-tech military discipline. Ruled by the Old Families, Tarsonis is an aggressive expansionist empire.",
      "attributeBonus": "Start with d6 in Spirit or Intelligence.",
      "skillBonus": "Gain a free d4 in Lore, Influence, or Computers.",
      "hindrance": "Start with Arrogant (Major) or Secret (Minor) due to Old Family politics.",
      "perk": "Competitive Spirit: Gain special combat usage of Influence against Terran opponents. Pride of the Core: Receive no penalties for being at Morale 0."
    },
    {
      "id": "moria",
      "name": "Moria",
      "tagline": "Industrial Mining & Kel-Morian Combine Fortress",
      "description": "Hardy miners, engineers, and pragmatic corporate survivors who value raw resources and grit over galactic politics. Used to back-breaking labor and mining technology.",
      "attributeBonus": "Start with d6 in Vigor or Strength.",
      "skillBonus": "Gain a free d4 in Engineering, Survival, or Science.",
      "hindrance": "Greedy (Minor) or Stubborn (Minor).",
      "perk": "Unbreakable Will: Roll Spirit to avoid Morale loss from battlefield events/enemy actions. Scurry: Gain a free reroll on Evasion rolls."
    },
    {
      "id": "korhal",
      "name": "Korhal",
      "tagline": "Birthplace of the Sons of Korhal & Terran Dominion",
      "description": "Fiercely independent, revolutionary, and driven by passion and vengeance after the nuclear devastation of their world by Confederate apocalypse weapons.",
      "attributeBonus": "Start with d6 in Instinct or Agility.",
      "skillBonus": "Gain a free d4 in Tactics, Ranged, or Leadership.",
      "hindrance": "Vengeful (Minor or Major) or Driven (Minor).",
      "perk": "Poise: Advantage on Influence checks to persuade; leadership powers last twice as long. Seize Opportunity: Foes on negative morale count as Vulnerable."
    },
    {
      "id": "umoja",
      "name": "Umoja",
      "tagline": "The Free and Progressive Protectorate",
      "description": "Advanced in science, civil liberties, and stealth technology. Governed by a ruling council respecting freedom and home to elite Shadowguard operatives.",
      "attributeBonus": "Start with d6 in Intelligence or Instinct.",
      "skillBonus": "Gain a free d4 in Science, Medicine, or Stealth.",
      "hindrance": "Pacifist (Minor) or Curious (Major).",
      "perk": "Knowledge of the Alien: Ignore 2 points of penalty on Science, Lore, Computers, Medicine regarding non-Terrans. Subversion: Free reroll on Influence vs non-Umojan Terrans."
    },
    {
      "id": "dead_mans_rock",
      "name": "Dead Man\u2019s Rock",
      "tagline": "Outlaw Haven, Pirates, and Mercenary Hub",
      "description": "A lawless garbage and ship graveyard haven for mercenaries, scavengers, criminals, and rogue operatives where only the ruthless and sharp survive.",
      "attributeBonus": "Start with d6 in Instinct or Agility.",
      "skillBonus": "Gain a free d4 in Perception, Stealth, or Melee.",
      "hindrance": "Wanted (Minor) or Suspicious (Minor).",
      "perk": "Noxious Home World: Free reroll on Vigor checks vs hostile environments, +5 Toughness vs Acid Damage. Scoundrel: Free reroll on combat influence; targets twice as many foes."
    },
    {
      "id": "sara_colonist",
      "name": "Sara Colonist (Mar Sara / Chau Sara)",
      "tagline": "Frontier Colonists Hardened by Alien Incursions",
      "description": "Tough, resilient frontier pioneers whose steadfastness allows them to survive under the burning sun and who stared into the jaws of the Zerg invasion.",
      "attributeBonus": "Start with d6 in Vigor or Instinct.",
      "skillBonus": "Gain a free d4 in Survival, Ranged, or Athletics.",
      "hindrance": "Flashbacks (Minor) or Heroic (Major).",
      "perk": "Adaptable Populace: Once per combat, when an ally is adjacent at start of turn, you or ally gain 1 Morale. Colonial Skills: Reroll Survival and Vigor checks vs extreme heat."
    },
    {
      "id": "fringe_colonist",
      "name": "Fringe Colonist",
      "tagline": "Isolated Outer-Rim Frontier",
      "description": "Independent outer-system settlers skilled in improvisational engineering, rugged survival, and extreme self-reliance in remote outposts.",
      "attributeBonus": "Start with d6 in Vigor or Strength.",
      "skillBonus": "Gain a free d4 in Engineering, Survival, or Pilot.",
      "hindrance": "Outsider (Minor) or Illiterate/Techno-skeptic (Minor).",
      "perk": "Adapted Resistance: Free reroll on Vigor rolls vs toxins; ignore side effects of drugs. Stalwart Resolve: Enemies attempting combat influence suffer -2 penalty."
    }
  ],
  "cot_levels": [
    {
      "rank": "Novice",
      "level": "Recruit",
      "psi": "Psi Level 2",
      "benefit": "Standard Ghost Operative gear package (FWG5 Pistol, C-10 Canister Rifle, Combat Knife, Hostile Environment Suit, False Credentials, Psionic Inhibitor)."
    },
    {
      "rank": "Seasoned",
      "level": "Operative",
      "psi": "Psi Level +1",
      "benefit": "Choose one Ghost or Shadowguard Combat Training, Psi Level +1."
    },
    {
      "rank": "Veteran",
      "level": "Specialist",
      "psi": "Psi Level +1",
      "benefit": "Choose one Ghost or Shadowguard Combat Training, Psi Level +1."
    },
    {
      "rank": "Heroic",
      "level": "Lieutenant",
      "psi": "Psi Level +1",
      "benefit": "Choose one Ghost or Shadowguard Combat Training, Psi Level +1."
    },
    {
      "rank": "Legendary",
      "level": "Captain",
      "psi": "Psi Level +1",
      "benefit": "Choose one Ghost or Shadowguard Combat Training, Psi Level +1."
    }
  ],
  "training_paths": {
    "ghost": {
      "name": "Ghost Combat Training (Terran Confederacy / Dominion)",
      "description": "Standard high-intensity psionic assassin and sniper training developed by the Ghost Academy.",
      "features": [
        {
          "name": "Absorption Field",
          "desc": "Increase Armor equal to half his Psi Rating. Must be wearing Hostile Environment Suit (HES)."
        },
        {
          "name": "Covert Ops Training",
          "desc": "Gain +1 to Stealth, Perception, and Ranged or Melee rolls."
        },
        {
          "name": "Critical Strikes",
          "desc": "Gain +2 AP (or +4 AP when using a C-10 Canister Rifle)."
        },
        {
          "name": "Psionic Reflexes",
          "desc": "While wearing Hostile Environment Suit (HES), increases Agility by one die step."
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
          "desc": "Attempts to detect the character using Perception or Insight rolls suffer a -2 penalty, provided the character is Hidden, uses a false identity, or has adequate cover."
        },
        {
          "name": "Precision Martial Arts",
          "desc": "Unarmed and Non-Lethal attacks gain +2 damage. Targets Shaken by your unarmed attacks become Vulnerable."
        },
        {
          "name": "Take Down",
          "desc": "Ignore Armor bonus granted by Power Armor or Heavy Armor to perform a Non-Lethal Attack."
        }
      ]
    }
  },
  "skills": [
    {
      "name": "Athletics",
      "attr": "Agility",
      "core": true,
      "desc": "Athletics represents balance, coordination, reflexes, and body control. It is used for climbing, grappling, jumping, swimming, sprinting, moving effectively through dangerous terrain and other feats of physical activity."
    },
    {
      "name": "Computers",
      "attr": "Intelligence",
      "core": false,
      "desc": "Computers represents knowledge of digital systems, programming, hacking, electronic warfare, and data analysis. It is used to access secured systems, bypass firewalls, manipulate software, or operate advanced technology such as drones and robots."
    },
    {
      "name": "Engineering",
      "attr": "Intelligence",
      "core": false,
      "desc": "Engineering covers technical knowledge related to machinery, vehicles, weapons systems, electronics, and structural repairs. It is used to repair equipment, modify devices, sabotage systems, or construct technological solutions."
    },
    {
      "name": "Insight",
      "attr": "Instinct",
      "core": true,
      "desc": "Insight reflects intuition, empathy, and the ability to read people or situations. It is used to detect lies, understand motives, recognize emotional states, and anticipate behavior."
    },
    {
      "name": "Influence",
      "attr": "Spirit",
      "core": true,
      "desc": "Influence represents charisma, social pressure, manipulation, and force of personality. It is used to persuade, intimidate, negotiate, inspire, or psychologically affect others."
    },
    {
      "name": "Leadership",
      "attr": "Spirit",
      "core": false,
      "desc": "Leadership measures battlefield presence, morale control, and the ability to direct allies under pressure. It is used to inspire companions, coordinate teams, and maintain cohesion during stressful situations."
    },
    {
      "name": "Lore",
      "attr": "Intelligence",
      "core": true,
      "desc": "Lore represents specialized knowledge, education, and academic expertise. Each Lore field focuses on a specific subject such as military history, alien species, psionics, Dominion politics, or forbidden technologies."
    },
    {
      "name": "Medicine",
      "attr": "Intelligence",
      "core": false,
      "desc": "Medicine covers medical knowledge, first aid, surgery, pharmaceuticals, and biological sciences. It is used to stabilize injuries, treat diseases, perform operations, or analyze biological threats."
    },
    {
      "name": "Melee",
      "attr": "Agility",
      "core": false,
      "desc": "Melee represents skill in close-quarters combat using blades, blunt weapons, or unarmed techniques. It is used whenever fighting in hand-to-hand combat."
    },
    {
      "name": "Perception",
      "attr": "Instinct",
      "core": true,
      "desc": "Perception measures awareness and attention to detail. It is used to detect hidden enemies, notice ambushes, identify threats, or observe subtle environmental clues."
    },
    {
      "name": "Pilot",
      "attr": "Instinct",
      "core": false,
      "desc": "Pilot represents the ability to control vehicles under normal or extreme conditions. It is used to operate aircraft, dropships, hover vehicles, spacecraft, and other forms of transportation."
    },
    {
      "name": "Psionics",
      "attr": "Spirit",
      "core": false,
      "desc": "Psionics reflects control over psychic powers and mental energy. It is used to activate psionic abilities, resist psychic interference, manipulate minds, or channel supernatural mental force."
    },
    {
      "name": "Ranged",
      "attr": "Instinct",
      "core": false,
      "desc": "Ranged measures proficiency with firearms, sniper rifles, heavy weapons, and other ranged combat systems. It is used whenever attacking targets from a distance."
    },
    {
      "name": "Science",
      "attr": "Intelligence",
      "core": false,
      "desc": "Science represents theoretical and practical understanding of scientific disciplines such as physics, chemistry, biology, and advanced xenotechnology. It is used for research, experimentation, analysis, and scientific problem-solving."
    },
    {
      "name": "Stealth",
      "attr": "Agility",
      "core": true,
      "desc": "Stealth represents concealment, silent movement, infiltration, and avoiding detection. It is used to hide, move quietly, shadow targets, or bypass enemy surveillance."
    },
    {
      "name": "Survival",
      "attr": "Instinct",
      "core": false,
      "desc": "Survival measures adaptability and fieldcraft in hostile environments. It is used for tracking, navigation, hunting, finding shelter, enduring harsh climates, and surviving in dangerous territory."
    },
    {
      "name": "Tactics",
      "attr": "Intelligence",
      "core": false,
      "desc": "Tactics represents battlefield awareness, strategic thinking, and combat coordination. It is used to analyze enemy behavior, coordinate allies, exploit weaknesses, and direct combat operations."
    }
  ],
  "hindrances": [
    {
      "name": "Hindrances\nHindrances\nAll Thumbs",
      "type": "Minor",
      "desc": "Due to upbringing, lack of exposure, or pure bad luck, some individuals are \u201call thumbs\u201d when it comes to mechanical devices. All Thumbs inflict a -2 penalty when using mechanical devices. If he rolls a Critical Failure while using such a device (and it doesn\u2019t already have a built-in effect), it\u2019s broken. If the GM feels it\u2019s appropriate, it can be fixed with an Engineering roll and 1d6 hours. This hindrance does not apply to electronic or digital devices."
    },
    {
      "name": "Amorous",
      "type": "Minor",
      "desc": "The character is easily enamored with a pretty face. Perhaps it\u2019s lust or lechery, or perhaps he just has a keen appreciation of natural beauty. Amorous characters suffer an additional -2 penalty to resist Tests by any character with the Attractive or Very Attractive Edge."
    },
    {
      "name": "Arrogant",
      "type": "Major",
      "desc": "Arrogant heroes don\u2019t think they are the best\u2014they know it. These characters flaunt their prowess and aim to dominate opponents. They seek the greatest threats in battle, taking on lesser enemies only when necessary."
    },
    {
      "name": "Bad Connections",
      "type": "Minor",
      "desc": "Before joining the Academy your character became involved with an illegal or inappropriate person or organization, and now owes them a favor. At some point in time the person or organization may return to ask a favor of the character, a favor he or she may not refuse without unpleasant consequences. The GM decides when the character has paid the favor, at which time the hindrance disappears."
    },
    {
      "name": "Bad Luck",
      "type": "Major",
      "desc": "Your hero is less fortunate, you critically fail on rolls of 1s and 2s."
    },
    {
      "name": "Big Mouth",
      "type": "Minor",
      "desc": "This hero can\u2019t keep secrets and tends to reveal plans or important information at the worst times."
    },
    {
      "name": "Bitter",
      "type": "Major",
      "desc": "You have been hurt repeatedly by those you trusted, and it has become difficult for you to accept help. Other people attempting to assist this character suffer a \u20132 penalty to their roll."
    },
    {
      "name": "Bloodthirsty",
      "type": "Major",
      "desc": "This hero never takes prisoners unless under direct supervision. Their ruthless nature often leads to missed information, constant enemies, or trouble with authorities."
    },
    {
      "name": "Blunderer",
      "type": "Major",
      "desc": "Some heroes take a while to master their craft. Select a skill central to your character, such as Psionics for a Psion or Hacking for a Hacker. The hero suffers a Critical Failure whenever she fails a roll and that skill die is a 1."
    },
    {
      "name": "Burned-Out Veteran",
      "type": "Minor",
      "desc": "Years of warfare have left their mark. Nightmares and intrusive memories haunt you. Suffer a -1 penalty on rolls to recover from Fear or mental stress."
    },
    {
      "name": "Cautious",
      "type": "Minor",
      "desc": "This planner personifies restraint and carefulness. He never makes rash decisions and likes to plot things out in detail long before any action is taken."
    },
    {
      "name": "Clueless",
      "type": "Major",
      "desc": "The character suffers a \u22122 penalty to Lore and Perception rolls, often missing important details."
    },
    {
      "name": "Clumsy",
      "type": "Major",
      "desc": "Your hero is uncoordinated, suffering a \u22122 penalty to Athletics rolls."
    },
    {
      "name": "Code of Honor",
      "type": "Major",
      "desc": "Honor is very important to your character. They keep their word, treat others with respect, and adhere to a specific code of conduct."
    },
    {
      "name": "Cocky",
      "type": "Major",
      "desc": "Your character just doesn\u2019t know when to brag and when to act. The hero\u2019s first round in any combat must be spent announcing how great he is, or pronouncing the doom of those who oppose him. If for some reason your hero must act instead, it costs him a Benny. A villain with this Hindrance never delivers a finishing blow to a foe. Instead, he leaves them to die, or orders his minions to finish them while he stalks off well out of earshot. Inevitably, these foes survive their wounds, escape the minions, and so on."
    },
    {
      "name": "Corporate Debt",
      "type": "Major",
      "desc": "A corporation owns more than your paycheck. You owe favors, money, equipment, or service to a powerful organization. Corporate agents may call upon you at inconvenient times."
    },
    {
      "name": "Curious",
      "type": "Major",
      "desc": "Curiosity drives this character to investigate mysteries, sometimes putting them in dangerous situations."
    },
    {
      "name": "Death Wish",
      "type": "Minor",
      "desc": "This hero is driven by a noble but dangerous goal, taking significant risks to achieve it."
    },
    {
      "name": "Delusional",
      "type": "Minor/Major",
      "desc": "Your hero believes something strange. Minor delusions are harmless, but Major delusions may lead to dangerous actions."
    },
    {
      "name": "Driven",
      "type": "Minor/Major",
      "desc": "A vow is a commitment to others\u2014driven characters want something for themselves. It may be to protect their world, prove you\u2019re the best poker player or race driver. The Minor version shapes the character and influences decisions but either happens rarely or is fairly harmless. As a Major Hindrance it\u2019s an overriding desire that comes up frequently or causes peril for the hero and companions. Easily Cowed (Mayor) The hero crumples easily when pressured or pushed. He or she receives a -2 penalty to Discipline against Fear or Intimidation rolls."
    },
    {
      "name": "Echoes of the Khala/Void",
      "type": "Minor",
      "desc": "Exposure to Protoss or Xel\u2019Naga psionic technology changed your mind forever. You occasionally sense emotions or thoughts not your own. These impressions can be helpful\u2014or deeply distracting."
    },
    {
      "name": "Emotional Isolation",
      "type": "Minor",
      "desc": "Common among Ghosts. You struggle to form meaningful personal relationships. Suffer a -2 penalty on Influence and similar rolls involving emotional connection."
    },
    {
      "name": "Ex-Convict Reputation",
      "type": "Minor",
      "desc": "Your past follows you everywhere. Law enforcement, military officers, and corporate officials begin interactions one step less friendly than normal."
    },
    {
      "name": "Greedy",
      "type": "Minor/Major",
      "desc": "A miser measures worth in material possessions or wealth. As a Minor Hindrance, he argues bitterly for more than his fair share of any loot or reward the group might come across. As a Major Hindrance, he fights over anything he considers unfair, and may even kill for it if he feels slighted or covets something he cannot have."
    },
    {
      "name": "Grim",
      "type": "Minor",
      "desc": "The hero is serious, taciturn, and finds mirth tiresome. He\u2019s Provoked on any successful Taunt\u2014whether the opponent has the Provoke Edge or not. Provoked characters subtract 2 from rolls to affect any opponent except the one who insulted him. This lasts until a Joker is drawn (by either side) or someone else successfully Taunts the dour ruffian. Grim also counts as a Requirement for the Menacing Edge."
    },
    {
      "name": "Habit",
      "type": "Minor/Major",
      "desc": "A Minor Habit is an irritating compulsion, while a Major Habit can be a debilitating addiction that leads to Fatigue if not satisfied."
    },
    {
      "name": "Helpless",
      "type": "Minor/Major",
      "desc": "You once stood helpless as great harm befell a loved one, and that paralysis sometimes returns when an ally is in a dire position. As a Minor Hindrance, whenever this character sees an ally suffers a Wound, he is Distracted. As a Major Hindrance, the character is also Vulnerable."
    },
    {
      "name": "Heroic",
      "type": "Major",
      "desc": "This noble soul never says no to a person in need. He will always help those who can't help themselves, even if he's not thrilled about it. He\u2019s the first to run into danger and often accepts little to no pay for her efforts."
    },
    {
      "name": "Hesitant",
      "type": "Minor",
      "desc": "Your hero hesitates under pressure. He draws two Action Cards in combat and acts on the lower one, unless he draws a Joker. Hesitant characters cannot take the Quick or Level Headed Edges."
    },
    {
      "name": "Idealistic",
      "type": "Minor",
      "desc": "You see things in black and white and struggle with more nuanced dilemmas. Most of the time this is an admirable virtue, but it causes great issues when on the horns of a moral dilemma, such as whether to hand a starving poacher over to the authorities or let him get away with his desperate but perhaps necessary crime."
    },
    {
      "name": "Impulsive",
      "type": "Major",
      "desc": "These characters act without thinking and rarely consider complicated plans. They rush into action and prefer direct approaches, often leading charges."
    },
    {
      "name": "Jealous",
      "type": "Minor/Major",
      "desc": "Insecurity drives these characters. The Minor version focuses on a specific person or issue, while the Major version makes them envious of anyone who surpasses them."
    },
    {
      "name": "Terran Chauvinist",
      "type": "Minor",
      "desc": "You firmly believe humanity is superior to alien races. Suffer -2 penalties when dealing diplomatically with Protoss, Zerg sympathizers, or other alien species. You tend to underestimate alien capabilities."
    },
    {
      "name": "Loyal",
      "type": "Minor",
      "desc": "Loyal characters are willing to risk their lives for their friends without hesitation, standing by them no matter the danger."
    },
    {
      "name": "Mean",
      "type": "Minor",
      "desc": "This ill-tempered character is unkind, only does things for pay, and has a \u22121 penalty to Persuasion rolls due to their unpleasant demeanor."
    },
    {
      "name": "Meticulous",
      "type": "Minor",
      "desc": "You plan and prepare everything in detail, and aren\u2019t good at improvising when things don\u2019t go as planned. You suffer a \u20134 penalty on untrained skill rolls instead of the usual \u20132."
    },
    {
      "name": "Mild Mannered",
      "type": "Minor",
      "desc": "This hero isn\u2019t threatening. Maybe he\u2019s a little doughy around the middle, has a kind face, or a soft voice. He subtracts 2 from Intimidation rolls due to his calm or gentle nature."
    },
    {
      "name": "Military Bureaucrat",
      "type": "Minor",
      "desc": "Protocol exists for a reason\u2014and you follow it. To ignore standing orders, regulations, or established procedures, you must first succeed on a Spirit roll."
    },
    {
      "name": "Overconfident",
      "type": "Major",
      "desc": "Your hero believes they can take on anything. While not suicidal, they rarely back down from challenges, even when it\u2019s unwise."
    },
    {
      "name": "Pacifist",
      "type": "Minor/Major",
      "desc": "A Minor Pacifist avoids unnecessary violence and won\u2019t kill prisoners. A Major Pacifist refuses to fight living creatures, using nonlethal methods for self-defense."
    },
    {
      "name": "Phobia",
      "type": "Minor/Major",
      "desc": "An irrational fear causes this character to take a \u22121 penalty (Minor) or \u22122 penalty (Major) on Trait rolls when confronted by their phobia."
    },
    {
      "name": "Post-Traumatic Stress Disorder",
      "type": "Major",
      "desc": "You've witnessed horrors no one should endure. Certain triggers may force a Fear check. Flashbacks, panic attacks, or emotional breakdowns can occur under stress. Suffer a -2 penalty to recover from fear effects."
    },
    {
      "name": "Poverty",
      "type": "Minor",
      "desc": "This hero starts with half the usual funds and can\u2019t seem to hold onto money, halving their total funds each game week."
    },
    {
      "name": "Psionic Dependency",
      "type": "Major",
      "desc": "Your mental powers require chemical stabilization. Without proper medication, you suffer severe penalties to psionic abilities. Extended deprivation may cause dangerous psychic episodes. Psionically Sensitive (Major/Minor) The character\u2019s mind is particularly sensitive to psionics. As a Minor Hindrance, get a -2 to Discipline against psionic powers. Get a -4 as a Major Hindrance."
    },
    {
      "name": "Quirk",
      "type": "Minor",
      "desc": "This character has a small, often humorous, trait or behavior that occasionally causes problems."
    },
    {
      "name": "Ruthless",
      "type": "Minor/Major",
      "desc": "Ruthless characters will do anything to accomplish their goals. Major versions cause true harm, while Minor versions stop short of that."
    },
    {
      "name": "Secret",
      "type": "Minor/Major",
      "desc": "Your hero has a secret he keeps to protect himself or others. As a Minor Hindrance, the secret is troublesome but not life-threatening. The Major version would cause severe problems if discovered. If it ever becomes public knowledge, he should trade it for Enemy, Shamed, Wanted, or another appropriate Hindrance approved by the GM."
    },
    {
      "name": "Selfless",
      "type": "Minor/Major",
      "desc": "You think of others before yourself. You sleep on the floor to give another the bed. You pretend to be full to give your friends the last bite of meat. You stand before your friends when a grenade explodes. You buy the book that everyone else in your group reads\u2014a true hero! The extent and frequency of your sacrifice determines whether this is a Minor/Major Hindrance."
    },
    {
      "name": "Shamed",
      "type": "Minor/Major",
      "desc": "Something haunts your hero. Maybe he made a vow he didn\u2019t keep. Maybe he was defeated in an honorable fight and ordered the death of his foe anyway for some greater principle. Maybe he isn\u2019t actually cowardly but once ran from a battle and left others to die. As a Minor Hindrance, the shameful circumstances aren\u2019t generally known\u2014it just haunts the hero. He might go out of his way, against all reason, not to repeat the mistake. Or he might give in to the same set of circumstances and hate himself for it. As a Major Hindrance, his deed is well known\u2014or at least known among those he cares about. The other player characters should be told the tale as soon as possible (preferably at character creation). If not, it should be revealed by nonplayer characters at some point, and occasionally used against the hero."
    },
    {
      "name": "Short Tempered",
      "type": "Minor",
      "desc": "The hero cannot control him or herself when insulted or made fun of. He\u2019s Provoked on any successful Taunt\u2014whether the opponent has the Provoke Edge or not. Provoked characters subtract 2 from rolls to affect any opponent except the one who insulted him. This lasts until a Joker is drawn (by either side) or someone else successfully Taunts the hero. Short Tempered also counts as a Requirement for the Menacing Edge."
    },
    {
      "name": "Small",
      "type": "Minor",
      "desc": "The character is unusually small, reducing their Size (and Toughness) by 1. They cannot have a Size below \u22121, but the Toughness penalty applies."
    },
    {
      "name": "Stimulant Addiction",
      "type": "Minor",
      "desc": "Combat stimulants have become part of your daily routine. You become irritable and restless when deprived of them. Suffer a -1 penalty to Influence and other social rolls after prolonged periods without access."
    },
    {
      "name": "Stubborn",
      "type": "Minor",
      "desc": "Stubborn individuals always want their way and never admit they\u2019re wrong. Even when it\u2019s painfully obvious they\u2019ve made a mistake they try to justify it with half-truths and rationalizations."
    },
    {
      "name": "Suspicious",
      "type": "Minor/Major",
      "desc": "Your character is suspicious of everyone. As a Minor Hindrance, his paranoia causes frequent trust issues. He might demand full payment before doing a task, want every agreement in writing, or believe even his friends are out to get him. As a Major Hindrance, Support rolls to aid the distrustful individual are made at -2."
    },
    {
      "name": "Talisman",
      "type": "Minor/Major",
      "desc": "Only characters with the Arcane Background (Psionics) Edge can take this Hindrance.The caster is dependent on a physical item to manifest his powers. This is a mental block on the individual\u2019s part. When caught without it, he subtracts 2 from all arcane skill rolls (\u22124 as a Major Hindrance), and is Stunned if the roll is a Critical Failure. Replacing a lost Talisman depends on the object, but should usually require getting it back from whoever took it. If it was destroyed, the Game Master should work with the player to figure out what might make a suitable replacement and how it might be gained."
    },
    {
      "name": "Tech Dependent",
      "type": "Minor",
      "desc": "You trust machines more than people. Suffer a -1 penalty on relevant Trait rolls when deprived of advanced technology, sensors, or computerized assistance."
    },
    {
      "name": "Thin Skinned",
      "type": "Minor/Major",
      "desc": "This character is easily offended. They take a \u22122 penalty to resist"
    },
    {
      "name": "Timid",
      "type": "Major",
      "desc": "Not everyone has ice water in their veins. Your hero is squeamish at the sight of blood and gore and terrified of coming to harm. He subtracts 2 from Fear checks and when resisting Intimidation."
    },
    {
      "name": "Tongue-Tied",
      "type": "Major",
      "desc": "Your hero flubs cool lines (or thinks of them afterwards!), goes off on tangents when he\u2019s trying to talk someone into something, and generally miscommunicates most everything he says. He suffers a -1 penalty to Influence rolls that involve speech."
    },
    {
      "name": "Ugly",
      "type": "Minor/Major",
      "desc": "This character isn\u2019t blessed with good looks, taking a \u22121 (Minor) or \u22122 (Major) penalty to Persuasion rolls."
    },
    {
      "name": "Vengeful",
      "type": "Minor/Major",
      "desc": "Payback is\u2026well\u2026bad news for someone, and this hero is going to get it. As a Minor Hindrance he usually seeks vengeance legally. The method varies by situation. Some plot and scheme for months while others demand immediate results. Those with the Major version of this Hindrance don\u2019t let anything prevent them from a reckoning. This doesn\u2019t mean they immediately resort to violence, but their actions always escalate until total and complete satisfaction is achieved."
    },
    {
      "name": "Vow",
      "type": "Minor/Major",
      "desc": "The character has sworn an oath to someone or something he believes in. The danger in fulfilling the Vow and how often it might occur determines the level of the Hindrance. A Minor Vow might be to serve an order with a broad mandate that rarely conflicts with the group\u2019s goals. A Major Vow makes long-term and frequent demands on the servant\u2019s time and results in great risks to his life."
    },
    {
      "name": "Whispers of the Swarm",
      "type": "Major",
      "desc": "You occasionally hear echoes of the Hive Mind. The whispers sometimes provide useful clues. More often, they are distracting and unsettling. Edges"
    }
  ],
  "edges": [
    {
      "name": "Edges\nBACKGROUND EDGES\nAlertness",
      "req": "Novice",
      "desc": "Not much gets by this hero. He\u2019s very observant and perceptive, and adds +2 to his Perception rolls to hear, see, or otherwise sense the world around him."
    },
    {
      "name": "Ambidextrous",
      "req": "Novice, Agility d8+",
      "desc": "Your warrior is as deft with his left hand as he is with his right. He ignores the Off-Hand penalty. If holding a weapon in each hand, Ambidextrous characters may stack Parry bonuses (if any) from both weapons."
    },
    {
      "name": "Attractive",
      "req": "Novice, Vigor d6+",
      "desc": "+2 to Influence rolls if the target is attracted to the character\u2019s general type (gender, sex, species, etc.), +1 otherwise."
    },
    {
      "name": "Very Attractive",
      "req": "Novice, Attractive",
      "desc": "Increases the bonus from Attractive to +3 if the target is attracted, +2 otherwise."
    },
    {
      "name": "Berserk",
      "req": "Novice",
      "desc": "Berserkers become wild and nearly uncontrollable when the \u201cred rage\u201d takes them, but they are deadly killing machines as well! As a limited free action, a berserker may \u201cgo berserk\u201d voluntarily. If he\u2019s Shaken or Wounded (from physical damage only), he must make a Smarts roll or go berserk whether he wants to or not, he can voluntarily fail this check if he likes. Going Berserk has the following effects: \u0084 \u2022 Fury: His Strength increases a die type (ignoring his usual maximum) and every attack must be a Wild Attack. He can\u2019t use any skill or ability that requires more than a few seconds of concentration (GM\u2019s call). \u2022 Enraged: He ignores two points of Wound penalties and all Fatigue penalties (this stacks with any other abilities that reduce those penalties). \u2022 Reckless Abandon: If he rolls a Critical Failure on an attack roll while berserk, he hits a random target within range of her attack (not the intended target), friend or foe. If there are no applicable targets, the blow simply misses, smashes nearby objects, etc. After five consecutive rounds of berserk fury, the hero takes a level of Fatigue. At ten rounds, he takes another level of Fatigue and the rage ends. He may also choose to end his rage at any time by making a Smarts \u22122 roll (as a free action; possibly avoiding Fatigue if he manages to end his rage before it\u2019s incurred!). Start the count anew if he goes berserk again, even in the same battle."
    },
    {
      "name": "Brave",
      "req": "Novice, Spirit d6+",
      "desc": "Those with this Edge have learned to master their fear, or have dealt with so many horrors they\u2019ve become jaded. These valiant explorers add +2 to Discipline vs Fear and subtract 2 from Fear Table results."
    },
    {
      "name": "Fearless Example",
      "req": "Seasoned, Brave",
      "desc": "Allies that can see you gain a +2 bonus against Fear effects."
    },
    {
      "name": "Brawny",
      "req": "Novice, Strength d6+, Vigor d6+",
      "desc": "Your bruiser is very large or very fit. Her Size increases by +1 (and therefore Toughness by 1) and she treats her Strength as one die type higher when determining Encumbrance and Wounds."
    },
    {
      "name": "Charismatic",
      "req": "Novice, Spirit d8+",
      "desc": "Your hero is likable for some reason. She may be trustworthy or kind, or might just exude confidence and goodwill. You get one free reroll on Influence rolls."
    },
    {
      "name": "Core Citizen",
      "req": "Confederate Core Planet or Umoja",
      "desc": "Your character has a network of contacts all throughout core planets. When you make an Influence check for Networking, you gain a +2 on the roll, and you can Network in half the usual duration while within a city with a population of at least 100,000. Furthermore, your character gains a free reroll on the following traits while within an urban environment: Athletics (climbing, jumping and moving through the city only), Perception and Stealth."
    },
    {
      "name": "Elan",
      "req": "Novice, Spirit d8+",
      "desc": "Elan means energy or spirit. Those who have it rise to the occasion when the going gets toughest. When you spend a Benny or Morale point to reroll a Trait, add +2 to the total. The bonus applies only when rerolling. It doesn\u2019t apply to damage rolls (since they\u2019re not Trait rolls), nor does it apply to Soak rolls unless you\u2019re using another Morale point to reroll the Vigor check."
    },
    {
      "name": "Fame",
      "req": "Novice",
      "desc": "Your character is a minor celebrity of some sort. He can use his celebrity status to add +2 to Influence rolls if a target is friendly and knows who he is (a Lore roll modified by how likely the individual is to know the celebrity). The downside of Fame is that the individual is often recognized, others frequently want something from him, he may be followed by fans or admirers, or he may not be able to shirk obligations, performances, or other duties without causing trouble for himself. Famous Requirements: Seasoned, Fame Your hero is truly famous. He adds +3 to his Influence rolls when influencing friendly individuals who know who he is. The price is higher for the truly Famous, too, with more demands on his time, obligations, rivals, scandals, and an inability to operate in crowds without being recognized."
    },
    {
      "name": "Fleet-Footed",
      "req": "Novice, Agility d6+",
      "desc": "The hero\u2019s Speed is increased by +2 and his running die increases one step (from d6 to d8, for example)."
    },
    {
      "name": "Kel-Morian Combine",
      "req": "Moria",
      "desc": "Your loyalty to one of the Kel-Morian factions has its perks and downsides. You should work with your Game Master to decide what Kel-Morian faction you belong to, such as the Kelanis Shipping Guild, the Meinhoff Miner\u2019s Union, or the Paladino Pirate Blockade. You gain a +2 bonus on Lore and Influence checks when interacting with fellow members of your guild. As long as you are a member in good standing in your Kel-Morian faction, every time you get paid up, you receive an amount of credits equal to 2500x your rank."
    },
    {
      "name": "Noble Born",
      "req": "Confederate Core Planet",
      "desc": "At the end of every week, the character is wired an amount of credits equal to 2500 times their rank. The money will accumulate in their bank account if they are unable to collect it. Nobles are expected to be able to lead and take responsibility to those under them. You gain a free reroll on Leadership rolls, and Combat Influence attempts against allies under your leadership effects suffer a -2 penalty. You start the game with +1000 Credits."
    },
    {
      "name": "Famous",
      "req": "Seasoned, Fame",
      "desc": "Your hero is truly famous. He\u2019s well known in a large circle such as a large industry, or a popular medium (film or television, the music industry). He makes 5\u00d7 the normal fee when performing and adds +2 to Influence rolls when influencing friendly individuals who know who he is. The price is higher for the truly Famous, too, with more demands on his time, obligations, rivals, scandals, and an inability to operate in crowds without being recognized."
    },
    {
      "name": "Infamy",
      "req": "Novice",
      "desc": "You might be a feared outlaw, a disgraced noble, a ruthless mercenary, or a criminal whose deeds are widely known in a particular region. You gain a +1 on Influence (Intimidation) rolls against those who know who you are (a Lore roll modified by how likely the individual is to recognize your reputation). In addition, you add +1 to Influence rolls when dealing with criminals, cutthroats, mercenaries, or others who respect fear, power, or notoriety. The downside of Infamy is that you are often recognized. Law enforcement, bounty hunters, rivals, victims, and other enemies may seek you out. Honest folk may avoid you, refuse service, charge higher prices, or become suspicious of your motives. You may also find it difficult to hide your identity or escape the consequences of your reputation. Truly Infamous Requirement: Seasoned, Infamy Your reputation is widespread and feared. Your name alone is enough to unsettle many who have heard of your exploits. You gain a +2 to Influence (Intimidation) rolls against individuals who know who you are. You also gain +2 to Influence rolls when dealing with criminals, mercenaries, underworld figures, or others who respect power, violence, or notoriety. The price of your Infamy grows with its reach. Authorities actively monitor your activities, rivals seek to surpass you, victims remember your deeds, and bounty hunters may pursue you. You find it nearly impossible to operate anonymously among those familiar with your reputation, and your presence often attracts trouble before you ever draw a weapon."
    },
    {
      "name": "Military Family",
      "req": "Novice.",
      "desc": "The hero\u2019s father or mother was a Confederate officer who distinguished him or herself with a glorious career. The hero has a +2 bonus to Influence when dealing with Confederate officers because of his father\u2019s reputation and a +2 to Lore rolls related to the Confederacy. Should he ever fail in his duties in an embarrassing way the bonus becomes a -2 penalty to Influence until he makes it up to himself and to the Confederacy."
    },
    {
      "name": "General Combat\nAccuracy",
      "req": "Seasoned, Instinct d6+, Perception d8+",
      "desc": "With sharp eyes and precise movements, the hero always hits even the smallest target. The hero only suffers half of the Called Shot penalties (rounded up), including to Disarm. This applies before any other penalty reduction. Also, Called Shots and Disarm can be used with free attacks."
    },
    {
      "name": "Bulwark",
      "req": "Seasoned, Vigor d8+, Strength d8+",
      "desc": "Your body is exceptionally resilient. Gain +2 Toughness."
    },
    {
      "name": "Calculating",
      "req": "Novice, Intelligence d8+",
      "desc": "A few seconds to study a foe\u2019s actions gives your hero a major advantage. When his Action Card is a Five or less, he ignores up to 2 points of penalties on one action that turn, which can include Multi-Action, cover, Range, and even Wound penalties."
    },
    {
      "name": "Chemical Tolerance",
      "req": "Novice, Vigor d8+",
      "desc": "Years of exposure have hardened your body. Gain +2 to resist poison, drugs, and addiction. Reduce the duration of negative chemical effects by half."
    },
    {
      "name": "Colossus Slayer",
      "req": "Seasoned, Agility d8+, Melee d8+, Athletics d8+",
      "desc": "You specialize in combating enormous opponents and know how to exploit the blind spots and vulnerable angles of massive opponents. Ignore the Reach Advantage of enemies that is granted by their Natural Weapons. You also gain +2 damage bonus against opponents of Size 3 or greater. Finally, gain a +2 to Athletics rolls made to Climb, or Maneuver around large opponents."
    },
    {
      "name": "Improved Colossus Slayer",
      "req": "Veteran, Agility d8+, Melee d10+, Athletics d10+",
      "desc": "Natural Weapons do not gain a Free Attack against you when you move within their reach. You gain a Free Reroll on Athletics and damage rolls against Size 3 or greater opponents."
    },
    {
      "name": "Combat Reflexes",
      "req": "Seasoned",
      "desc": "Your warrior recovers quickly from shock and trauma. He adds +2 when rolling to recover from being Shaken or Stunned."
    },
    {
      "name": "Dirty Fighter",
      "req": "Seasoned",
      "desc": "You will do anything to win a fight. You add +2 to rolls when performing a Test with the Melee or Ranged skill."
    },
    {
      "name": "Really Dirty Fighter",
      "req": "Seasoned, Dirty Fighter",
      "desc": "Your character is extremely skilled in tactical deceit. Should he get a raise on a Melee or Ranged Test, he gains The Drop against that opponent until the foe is no longer Shaken."
    },
    {
      "name": "Dodge",
      "req": "Seasoned, Athletics d8+",
      "desc": "The hero can anticipate attacks or move erratically under fire. Unless the victim of a surprise attack is taken completely unaware, Dodge subtracts 2 from all ranged attacks made against him. Dodge does not stack with actual cover. Improved Dodge Requirements: Seasoned, Dodge The hero adds +2 when Evading and Soaking area effect attacks."
    },
    {
      "name": "Empowering Command",
      "req": "Veteran, Leadership d8+",
      "desc": "When using Leadership to empower allies, choose two eligible Leadership effects instead of one. Each ally may benefit from both effects simultaneously."
    },
    {
      "name": "Extraction",
      "req": "Seasoned, Athletics d8+",
      "desc": "When a character withdraws from melee, adjacent attackers get a free Fighting attack against him. This is a very dangerous proposition for most, but not your wily champion. When moving away from adjacent foes, three of them (player\u2019s choice) don't get their free Fighting attack. Vault Away Requirements: Heroic, Athletics d10+, Extraction Once, on his turn, as he Withdraws from Melee, the hero can perform a free attack (melee or ranged), or a free Push, against one of the foes he used the Extraction Edge on. If performing a ranged attack, it is fired immediately after leaving the adjacency, so 1\u201d away from the target."
    },
    {
      "name": "Free Runner",
      "req": "Novice, Athletics d6+",
      "desc": "The character is skilled and fearless when it comes to running, jumping, swinging, or scampering up walls and obstacles, through crowded city streets, or even swinging through the rigging of a ship. While on foot, he moves at her full Speed in such circumstances and adds +2 to Athletics rolls made to climb or negotiate obstacles as long as there are hand- or footholds she can bound on, bounce off, or swing from."
    },
    {
      "name": "Ghost Infiltrator",
      "req": "Ghost or Shadowguard Background, Agility d8+, Stealth d8+, Athletics d8+",
      "desc": "Ghost operatives are trained to exploit every distraction, blind spot, and moment of uncertainty. Whether moving unseen through enemy lines or striking from concealment, they instinctively capitalize on an opponent's inability to track their movements. Whenever a target suffers a penalty to Perception rolls made to detect you, you gain a bonus to your Melee and Ranged attack rolls against that target equal to half that penalty (rounded down, minimum +1). Furthermore, when you score a Raise on a successful attack against such a target, the bonus damage die granted by the Raise becomes a d8 instead of a d6. Finally, you may move through spaces occupied by hostile characters. Such spaces are treated as Difficult Terrain."
    },
    {
      "name": "Good Spirits",
      "req": "Seasoned, Spirit d8+",
      "desc": "You begin each combat with one additional Morale. Excellent Spirits Requirements: Veteran, Spirit d10+, Good Spirits You begin each combat with two additional Morale."
    },
    {
      "name": "Hard to Kill",
      "req": "Novice, Spirit d8+",
      "desc": "This hero has more lives than a herd of cats. He may ignore his Wound penalties when making Vigor rolls to Soak. If your hero is ever \u201ckilled,\u201d roll a die. On an odd result, he\u2019s dead as usual. On an even roll, he\u2019s Incapacitated but somehow escapes death. He may be captured, stripped of all his belongings, or mistakenly left for dead, but he somehow survives. Never Give Up Requirements: Heroic, Vigor d10+, Spirit d8+, Hard to Kill While suffering Wound penalties, add the penalty as a bonus to your Toughness and Resolve."
    },
    {
      "name": "Iron Jaw",
      "req": "Novice, Vigor d8+",
      "desc": "The hero can shrug off even extreme blows. He adds +2 to Soak rolls and Vigor rolls to avoid Knockout Blows."
    },
    {
      "name": "Take the Hit",
      "req": "Seasoned, Iron Jaw, Vigor d10+",
      "desc": "There are those who must learn to endure violent lives filled with merciless brutality. A character with this Edge has learned to survive under the most relentless conditions. He gets a free reroll on Soak rolls made to eliminate Wounds or Vigor rolls to resist Knockout Blows."
    },
    {
      "name": "Killer Instinct",
      "req": "Seasoned",
      "desc": "This hero hates losing. He gets a free reroll in any opposed Test he initiates."
    },
    {
      "name": "Level Headed",
      "req": "Seasoned, Instinct d8+",
      "desc": "Fighters who can keep their cool when everyone else is running for cover make deadly combatants. A hero with this Edge draws an additional Action Card in combat and chooses which to use. Improved Level Headed Requirements: Seasoned, Level Headed As above but the hero draws two additional cards and chooses which to keep."
    },
    {
      "name": "Man versus Machine",
      "req": "Veteran, Computers d10+",
      "desc": "When attempting to hack drones, vehicles, AI systems, or automated defenses, gain +2 to your Computer roll. On a Raise, you may inflict one automatic Wound to a non-Wild Card construct instead of taking control."
    },
    {
      "name": "Mobile Attacker",
      "req": "Seasoned, Agility d8+",
      "desc": "If you move at least half your Speed before attacking, enemies have a -1 penalty to attack you until the beginning of your next turn. Increase your Speed by +1."
    },
    {
      "name": "Improved Mobile Attacker",
      "req": "Veteran",
      "desc": "Speed bonus becomes +2. You ignore the Unstable Platform penalty."
    },
    {
      "name": "Nerves of Steel",
      "req": "Novice, Vigor d8+",
      "desc": "Your hero has learned to fight on through the most intense pain. He may ignore one point of Fatigue or Wound penalties. Improved Nerves of Steel Requirements: Novice, Nerves of Steel The hero ignores two points of Fatigue or Wound penalties."
    },
    {
      "name": "I've Had Worse",
      "req": "Veteran, Nerves of Steel",
      "desc": "No matter how hard you punish this hero, each wound inflicted is only another reason to stand up and grin. The character receives +1 to damage rolls for each Wound he currently has."
    },
    {
      "name": "Too Angry to Die",
      "req": "Veteran, Vigor d8+, Spirit d8+, Nerves of Steel",
      "desc": "Some warriors refuse to accept defeat. Whether driven by rage, determination, or sheer stubbornness, they continue fighting long after their bodies should have given out. Once per encounter, when you would become Incapacitated, you may remain conscious and active by gaining one point of Fatigue. This fatigue cannot be removed until the combat encounter ends. If this Fatigue would incapacitate you, you immediately collapse and become Incapacitated as normal."
    },
    {
      "name": "No Mercy",
      "req": "Seasoned",
      "desc": "Whenever the hero rerolls damage he adds +2 to his final total."
    },
    {
      "name": "One with the Darkness",
      "req": "Veteran, Stealth d10+",
      "desc": "While in darkness, smoke, foliage, or heavy concealment, illuminations penalties against you are increased by an additional -2. Furthermore, abilities and gear that reduce such penalties cannot reduce them below -2."
    },
    {
      "name": "Opportunistic",
      "req": "Veteran",
      "desc": "Opportunity is what one makes of it. When a character with this Edge is dealt a Joker, he adds +4 to his Trait and damage rolls instead of +2."
    },
    {
      "name": "Energy",
      "req": "Novice, Healing d6+",
      "desc": "When administering drugs or stimulants, choose one: -Increase duration by 50%. -Reduce one negative side effect."
    },
    {
      "name": "Quick",
      "req": "Novice, Agility d8+",
      "desc": "Quick characters have lightning-fast reflexes and a cool head. Whenever you are dealt an Action Card of Five or lower, you may discard it and draw again until you get a card higher than Five. Characters with both the Level Headed and Quick Edges first draw their additional card and choose which to take. If that card is a Five or less, the Quick Edge may be used to draw a replacement until it\u2019s Six or higher."
    },
    {
      "name": "Resolute",
      "req": "Seasoned, Spirit d8+",
      "desc": "Years of mental conditioning have transformed your thoughts into a fortress. Telepaths find only locked doors and reinforced walls where others reveal their secrets. Gain +2 to Discipline."
    },
    {
      "name": "Improved Resolute",
      "req": "Veteran, Resolute",
      "desc": "Gain +2 to Resolve."
    },
    {
      "name": "Sharp Reflexes",
      "req": "Novice, Agility d8+, Instinct d8+",
      "desc": "The hero reacts promptly to external events. He can roll the same Trait for the Action he wishes to use to Interrupt and he further adds +2 on rolls to interrupt someone else\u2019s actions or resist being interrupted by them. In addition, when spending a Morale to draw a new Action Card, draw an additional one (the Quick Edge applies, if the hero has it) and keep the one you like the most (if the hero is Level Headed, choose amongst all the cards you drew)."
    },
    {
      "name": "See the Unseen",
      "req": "Veteran, Perception d10+",
      "desc": "Whether through training, intuition, or subtle psychic sensitivity, you notice what others cannot. Reduce concealment penalties against you by 4."
    },
    {
      "name": "Spot Weakness",
      "req": "Novice, Instinct d8+",
      "desc": "As an action, or as a free action during the Defend or the Aim maneuvers, the hero observes his target to discover his weaknesses. He may roll Perception or Tactics opposed by the target\u2019s Intelligence. If successful, the target is Vulnerable to him until the end of the scene, or until he successfully Spots Weakness on another target. Instead of a single target, he may observe a group of similar Extras. They resist with a group roll and are either all Vulnerable (on a success) or none (on a failure)."
    },
    {
      "name": "Stand Tall",
      "req": "Novice, Influence d8+ or Leadership d8+, Spirit d8+",
      "desc": "Once per round, when you are hit by an attack that fails to Shaken or Wound you. As a Free Action you can immediately make an Influence or Leadership Support roll."
    },
    {
      "name": "Structural Weakness",
      "req": "Seasoned, Engineering d8+, Intelligence d8+",
      "desc": "Machines, fortifications, and armored vehicles all have weaknesses. You know exactly where to strike. Against vehicles, robots, buildings, and constructs Gain +1 damage and AP +2."
    },
    {
      "name": "Sweep",
      "req": "Novice, Strength d8+, Melee d8+",
      "desc": "Some heroes are able to face down multiple enemies at once. As a limited action, Sweep allows a character to make a single Melee attack and apply it against all targets in his Reach (friends and foes alike). If you are not using a two-handed weapon, you have a \u22122 penalty to your roll. Resolve damage separately for each enemy that\u2019s hit. Improved Sweep Requirements: Veteran, Sweep As above, but the whirlwind of death is able to avoid allies when using Sweep."
    },
    {
      "name": "Trademark Weapon",
      "req": "Novice, skill with weapon of d8+",
      "desc": "The hero knows one unique weapon like the back of his hand. When using it, he adds +1 to his Athletics (throwing), Melee, or Ranged rolls, and +1 to Defense when readied (even if it\u2019s a ranged weapon). A fighter can take this Edge multiple times, applying it to a different weapon each time. If a Trademark Weapon is lost, he can replace it but the benefits don\u2019t kick in for a few days (however long the GM feels is dramatically appropriate). Improved Trademark Weapon Requirements: Veteran, Trademark Weapon As above but the bonuses when using the weapon increase to +2."
    },
    {
      "name": "Two-Weapon Fighting",
      "req": "Novice, Agility d8+",
      "desc": "If a character makes an attack with one action and another from a different hand in a later action, the second attack doesn\u2019t inflict a Multi-Action penalty. The Off-Hand penalty still applies unless he\u2019s Ambidextrous. The character can choose to make a Melee or Ranged attack with each hand, an Athletics (throwing) attack with each hand, or a combination of these, depending on the readied weapons."
    },
    {
      "name": "Unstoppable Movement",
      "req": "Seasoned, Athletics d8+",
      "desc": "Whether crossing ruined cities, alien jungles, or active battlefields, you never allow terrain to dictate your movement. You ignore Difficult Terrain penalties. Additionally, you gain a +2 bonus against effects that restrict your movement."
    },
    {
      "name": "Unswerving Resolve",
      "req": "Seasoned, Spirit d8+",
      "desc": "Once per encounter, when the hero successfully resists a Fear check or any negative mental power, they immediately gain a Morale point."
    },
    {
      "name": "Melee Combat\nBlind Fighting",
      "req": "Novice, Perception d8+",
      "desc": "When your vision is impaired, your other senses step up. You hear or smell others around you, your senses anticipating their movement. You ignore all Illumination and blindness penalties to attack, Test, Support, or to manifest powers on targets up to 3\u201d away."
    },
    {
      "name": "Brawler",
      "req": "Novice, Strength d8+, Vigor d8+",
      "desc": "His fists hit like hammers or his talons cut like scythes. His body feels like it\u2019s made of stone. Brawlers increase their Toughness by 1 and roll Strength +d4 when hitting with their fists or feet (or claws if they have them). If they already have a damage die from the Martial Artist Edge, etc., increase the damage die type by one instead. The Brawler Edge doesn\u2019t make the character\u2019s fists Natural Weapons. Bruiser Requirements: Seasoned, Brawler The fighter increases his Toughness an additional +1, and the damage caused with his fists or another die type."
    },
    {
      "name": "Charge",
      "req": "Novice, Fighting d8+",
      "desc": "A short burst of speed adds significant impact to this hero\u2019s melee damage. If he moves at least 2 squares towards its target, he adds +2 to the damage of his Melee attacks that turn. This may be combined with a Wild Attack."
    },
    {
      "name": "Close Quarters Specialist",
      "req": "Novice, Melee d8+, Agility d8+",
      "desc": "You excel at closing the distance and fighting inside an opponent's guard. Long weapons lose much of their advantage against you once you get close. Increase Minimum Reach penalties against you by -1. Gain +1 to Melee against opponents suffering from Minimum Reach penalties."
    },
    {
      "name": "Combat Acrobat",
      "req": "Novice, Agility d8+, Athletics d8+",
      "desc": "Through exceptional agility, timing, and battlefield awareness, you can slip past an opponent's guard before they have the opportunity to strike. Whether diving through incoming attacks, rolling beneath a weapon's reach, or exploiting the smallest opening, you excel at closing the distance against opponents who rely on superior reach. You do not provoke Free Attacks when moving through an opponent's Reach and you gain +1 to Athletics rolls. This Edge does not protect against Free Attacks triggered by other effects, abilities, or Edges unless specifically noted. Improved Combat Acrobat Requirements: Veteran, Combat Acrobat, Agility d10+, Athletics d10+ Years of training have transformed your movement into a combat art. Enemies struggle to predict your approach, often realizing too late that you have already slipped inside their defenses. Opponents gain no Reach Advantage against you. You also gain a +2 to Defense as long as your character can move."
    },
    {
      "name": "Counterattack",
      "req": "Seasoned, Melee d8+",
      "desc": "Fighters with this Edge deal instant punishment for an enemy\u2019s mistakes. Once per round (if not Shaken or Stunned), the character receives a Free Attack against one failed Fighting attack against him. The counterattack takes place immediately (before other hits against the hero on the same Action Card, if any). Improved Counterattack Requirements: Veteran, Counterattack As above but the hero gets a Free Attack against up to three failed attacks each round. Reprisal Requirements: Heroic, Counterattack The hero can now use his counterattacks against opponents in Reach of his weapon even when the failed melee attack does not target him. He could counterattack an enemy targeting an ally or a bystander he wishes to protect. The attack must roll lower than his Parry, regardless if it hits his ally. The counterattack is resolved after the enemy\u2019s attack."
    },
    {
      "name": "Defender",
      "req": "Seasoned, Melee d6+",
      "desc": "You can share your shield\u2019s Defense and shield cover bonus with one adjacent ally as a free action. Shield bonuses don\u2019t stack, so use only the highest if a character is protected by more than one."
    },
    {
      "name": "Ghost Knife Fighter",
      "req": "Ghost Background, Melee d8+, Stealth d8+",
      "desc": "Gain +1 Fighting and a +2 to damage with Reach 0 weapons. Additionally, reduce Called Shots penalties made with Reach 0 weapons by 1."
    },
    {
      "name": "Parry",
      "req": "Seasoned, Melee d8+",
      "desc": "Through hard-fought experience your hero has learned to defend himself in vicious hand-to-hand combat. His Defense increases by +1 against melee attacks and any Gang Up bonus against him is reduced by one. Improved Parry Requirements: Veteran, Parry The hero\u2019s Defense bonus is now +2 and the Gang Up bonus against him is reduced by 2."
    },
    {
      "name": "Feint",
      "req": "Novice, Intelligence d8+, Melee d8+",
      "desc": "When performing a Melee Test, you can choose to make the foe resist with Intelligence instead of Agility. Also, once per round, the hero gets a free attack against one foe who failed the Smarts roll to resist such a Test."
    },
    {
      "name": "First Strike",
      "req": "Novice, Agility d8+",
      "desc": "Once per round, as long as he\u2019s not Shaken or Stunned, the hero gets a free Fighting attack against a foe immediately after he moves into Reach. Improved First Strike Requirements: Heroic, First Strike As above but the hero may attack up to three foes each round."
    },
    {
      "name": "Formation Fighter",
      "req": "Novice, Tactics d6+",
      "desc": "The solder has trained to fight alongside others, overwhelming their common foe with synchronized strikes and blows. He increases the Gang Up bonus by an additional +1 for herself and his allies. The maximum Gang Up bonus is still +4 no matter how many Formation Fighters stand together. Shield Wall Requirements: Novice, Formation Fighter, Tactics d8+ Trained soldiers can stand against overwhelming odds and furious hordes with discipline, training, and a sturdy shield. Characters with the Shield Wall Edge (and at least a medium shield) add +1 to their Defense if they are adjacent to one ally who also has the Shield Wall Edge, and +2 if they have two adjacent allies with that Edge (the maximum bonus)."
    },
    {
      "name": "Frenzy",
      "req": "Seasoned, Melee d8+",
      "desc": "As a limited action, the character rolls two Melee dice instead of one. Each die hits and causes damage separately. (The Wild Die may replace either attack as desired.). The extra die may be allocated to the same or different targets as he sees fit. Resolve each separately. Improved Frenzy Requirements: Veteran, Frenzy As Frenzy but the fighter adds a third Melee die to his Fighting attack made with Frenzy this turn."
    },
    {
      "name": "Gun Fu!",
      "req": "Novice, Martial Artist, Melee d6+, Ranged d6+",
      "desc": "Heavily trained in close quarters gunplay, you know gun fu. When using pistols against a target\u2019s Defense, you have +2 to Ranged and +2 to Pistol damage. This benefit only applies to such close range combat, not to attacks from further than adjacent."
    },
    {
      "name": "Enlightened Gun Fu!",
      "req": "Seasoned, Gun Fu!, Melee d10+, Ranged d10+",
      "desc": "Integrated training has honed this warrior's reflexes to the point that pistols are an extension of his body. He may fire pistols when using Combat Edges such as First Strike, Frenzy, and Sweep."
    },
    {
      "name": "Gun Fu Master!",
      "req": "Veteran, Enlightened Gun Fu!, Marksman",
      "desc": "This master of flowing pistol combat has evolved his techniques to compensate for motion. He may use the Marksman Edge while moving up to half Pace and may apply it to the first and second attacks he makes in a turn."
    },
    {
      "name": "Leap",
      "req": "Novice, Athletics d8+",
      "desc": "As part of your movement, you may leap up to your Speed. This movement ignores difficult terrain and does not provoke free attacks for moving within an enemy\u2019s reach. If you attack a target immediately after leaping, the target does not gain Gang Up bonuses against you until the beginning of your next turn."
    },
    {
      "name": "Martial Artist",
      "req": "Novice, Melee d6+",
      "desc": "The fighter has trained in basic martial arts. His fists and feet are weapons (see Natural Weapons) so he\u2019s always considered armed. He adds +1 when striking with them and causes Strength+d4 damage. If he already has a Strength damage die the Brawler Edge, increase the damage a die type. Martial Warrior Requirements: Seasoned, Martial Artist Increase the warrior\u2019s Melee bonus to +2 and his damage die by an additional step."
    },
    {
      "name": "Polearm Master",
      "req": "Seasoned, Melee d8+",
      "desc": "You have mastered the use of long-reach weapons and know how to maintain distance even against highly mobile opponents. You do not have Minimum Reach penalties. You also gain a +1 bonus Melee and damage rolls when wielding a weapon with Reach 2 or greater."
    },
    {
      "name": "Redirect Blows",
      "req": "Seasoned, Melee d8+, Agility d8+",
      "desc": "Once per round, when being targeted by a melee attack, the hero can roll Melee opposed to the attacker\u2019s Melee total. If successful, he redirects the attack to a new target, adjacent to himself and in Reach of the attacker. The attack is now resolved against that target instead of against the hero. The new target, not expecting that blow, suffers a \u20132 penalty to Defense (\u20134 on a raise on the roll to redirect)."
    },
    {
      "name": "Savagery",
      "req": "Novice, Melee d6+",
      "desc": "Violence is a way of life for some. Those with this Edge hit their foes hard enough that they often don\u2019t get to reply in kind. A character with this Edge causes +4 damage when making a Wild Attack rather than +2."
    },
    {
      "name": "Shadowguard Duelist",
      "req": "Shadowguard Training, Melee d8+, Agility d8+",
      "desc": "You gain a +1 to Melee with weapons of Minimum Reach 0. Additionally, once per round, you gain a free reroll on a failed Melee roll with a weapon of Minimum Reach 0."
    },
    {
      "name": "Wrestler",
      "req": "Novice, Strength d8+",
      "desc": "Once per round, when the wrestler successfully Grapples an enemy, he may immediately make one free Crush, Disarm, Takedown, Throw, or Drag action on that target."
    },
    {
      "name": "Wrestling Combatant",
      "req": "Seasoned, Athletics d8+, Wrestler",
      "desc": "You excel at close-quarters combat, turning every grapple into a brutal contest of strength and leverage. Gain +2 to Athletics rolls involving Grappling and +2 damage when making attacks against a grappled opponent."
    },
    {
      "name": "Ranged Combat\nDeployment Tactics",
      "req": "Novice, Tactics d6+",
      "desc": "You count for the Gang Up bonus of your allies even if not adjacent or attacking your opponent and the opponent is within your weapon range."
    },
    {
      "name": "Double Tap",
      "req": "Seasoned, Ranged d8+",
      "desc": "Experienced firearms experts fire two shots in rapid succession without spoiling their aim. Double Tap can only be used with weapons that have a Rate of Fire of 1 and can fire two shots without needing to manually reload. It adds +1 to hit and damage at the cost of one extra bullet. This is per action, so a shooter can Double Tap more than once if she performs a Multi-Action. Double Tap cannot be combined with Rapid Fire. If used with a weapon capable of Three Round Burst, it adds +2 to Shooting and damage instead of +1 and expends six bullets."
    },
    {
      "name": "Herdsman",
      "req": "Seasoned, Ranged d8+",
      "desc": "Once per round, when you hit a target with a Ranged attack, you may force your target to make an opposed Smarts roll against the Shooting total. If the target fails, they are moved 1\" in any direction of your choosing, or 2\" if you won the opposed roll with a Raise. This forced movement does not provoke Free Attacks, nor can it force a target into hazardous terrain (like a fire or off a cliff). If the attack targets multiple individuals (such as with a high Rate of Fire or Suppressive Fire), this effect may be applied to all targets hit."
    },
    {
      "name": "Marksman",
      "req": "Seasoned, Athletics d8+ or Ranged d8+",
      "desc": "The hero is a natural with ranged weapons. If he doesn\u2019t move in a turn and fires no more than a Rate of Fire of 1 as her first action, he may add +1 to an Athletics (throwing) or Ranged roll, or ignore up to 2 points of penalties from Called Shots, Cover, Range, Scale, or Speed. This is a lesser version of the Aim maneuver and does not stack with it. Marksman doesn\u2019t apply to additional attacks after the first in a turn."
    },
    {
      "name": "Focus Fire",
      "req": "Veteran, Marksman, Athletics d10+ or Ranged d10+",
      "desc": "The Marksman Edge and the Aim maneuver affect all of the shooter\u2019s ranged attacks on his turn, not just the first one, as long as he fires no more than a Rate of Fire of 1, doesn\u2019t move, and all his attacks target the same foe as the first one. Also, after the hero successfully hits a target for the second time in the same turn, the target becomes Vulnerable."
    },
    {
      "name": "Sharpshooter",
      "req": "Veteran, Marksman, Athletics d10+ or Ranged d10+",
      "desc": "A sharpshooter is a sniper able to take enemies down from afar. Aiming is his best friend. When the hero benefits from the Aim maneuver on a target and performs a single attack this turn, he also adds the benefits of the Marksman Edge. Also, once per round, he gets a free reroll on damage when targeting head or vitals."
    },
    {
      "name": "Like Fish in a Barrel",
      "req": "Seasoned, Ranged d8+",
      "desc": "Years of combat have taught you that enemies packed together are already halfway defeated. When making an Area Effect attack, targets suffer a -2 to their Evasion rolls. Additionally your Area Effect attacks gain +2 to damage."
    },
    {
      "name": "Precision Shot",
      "req": "Novice, Ranged d8+",
      "desc": "If you did not move this turn and spent an action aiming, gain a +2 damage on your ranged attacks this turn."
    },
    {
      "name": "Point Blank Master",
      "req": "Veteran, Ranged d10+",
      "desc": "The shooter has learned to fire his firearms even in close combat. When he fires a firearm in melee, he adds +2 to the Ranged roll and is not Vulnerable for shooting a different opponent."
    },
    {
      "name": "Powered Armor Training",
      "req": "Novice",
      "desc": "The character can use terran powered armors such as the CMC combat suits. Without training, the character takes a -2 penalty to speed and -4 to attacks, defense, and all skill checks relying on Strength or Agility."
    },
    {
      "name": "Rapid Fire",
      "req": "Seasoned, Ranged d6+",
      "desc": "The shooter is practiced at taking quick and accurate shots. As long as he\u2019s armed with a fast-firing ranged weapon of some sort (such as a revolver or semi-automatic) and has enough ammunition to do so, he may increase his weapon\u2019s Rate of Fire by 1 for any one of his Shooting attacks that turn. Improved Rapid Fire Requirements: Veteran, Rapid Fire The shooter may now increase his weapon\u2019s Rate of Fire by 1 twice in the same turn (via a Multi-Action)."
    },
    {
      "name": "Rapid Reload",
      "req": "Seasoned, Athletics d8+ or Ranged d8+",
      "desc": "If the shooter doesn\u2019t move in a turn, he gets one Reload action for free (so he can reload then attack and still benefit from the Marksman Edge if he has it)."
    },
    {
      "name": "Return Fire",
      "req": "Seasoned, Ranged d8+",
      "desc": "Once per round (if not Shaken or Stunned), the character receives a Free Ranged Attack against one failed Ranged attack against him. The Return Fire takes place immediately (before other hits against the hero on the same Action Card, if any). This attack can only be made at Rate of Fire of 1. Improved Return Fire Requirements: Veteran, Return Fire As above but the hero gets a Free Ranged Attack against up to three failed attacks each round."
    },
    {
      "name": "Rock and Roll!",
      "req": "Seasoned, Ranged d8+",
      "desc": "Experienced shooters learn to compensate for the recoil of fully automatic weapons. If a character with this Edge doesn\u2019t move on his turn, he ignores the Recoil penalty."
    },
    {
      "name": "Shot on the Runner",
      "req": "Veteran, Instinct d8+, Ranged d8+",
      "desc": "You've spent years gunning down enemies who thought they could sprint between pieces of cover. Once per round, a target that leaves cover within your weapon's range provokes a free ranged attack."
    },
    {
      "name": "Steady Hands",
      "req": "Novice, Ranged d8+",
      "desc": "Firing from a moving vehicle is tricky business, but your hero has figured it out. He ignores the Unstable Platform penalty. This also helps when running, reducing the usual penalty from -2 to -1."
    },
    {
      "name": "Hit and Run",
      "req": "Seasoned, Steady Hands, Athletics d8+ or Ranged d8+",
      "desc": "The hero knows how to keep a steady aim despite moving around. He always ignores any penalty for Running on all of his Athletics or Ranged rolls."
    },
    {
      "name": "Through and Through",
      "req": "Seasoned, Ranged d8+",
      "desc": "When making a ranged attack against a target with Cover, you can choose to reduce the benefit of that target's Cover by taking an equal penalty to your damage roll."
    },
    {
      "name": "Threatening Shot",
      "req": "Seasoned, Instinct d8+, Ranged d8+",
      "desc": "You have learned to dominate open ground with disciplined fields of fire. Enemies quickly learn that moving under your watch is often fatal. As a Limited Action, you can set up a killing zone by placing a Large Burst Template that lasts until the beginning of your next turn. Enemies moving through your kill zone provoke a Ranged Free Attack from you. You can benefit from this Edge a maximum amount of times per round equal to your weapon\u2019s Rate of Fire."
    },
    {
      "name": "Trick Shot",
      "req": "Seasoned, Athletics d8+ or Ranged d8+",
      "desc": "When performing a Test with the Athletics or Ranged skill, the character can choose to make the foe resist with Instinct instead of Agility. In addition, once per round, you get a free attack against one foe who failed his roll to resist such a Test."
    },
    {
      "name": "Weapon Comprehension",
      "req": "Novice, Engineering d6+, Ranged d6+",
      "desc": "You understand firearms on a level few soldiers ever achieve. To you, every weapon is a machine with predictable strengths, weaknesses, and solutions. Ranged weapons you have readied do not jam. You can repairs damaged firearms as a Limited Free Action. You gain a +1 to damage and AP +1 with firearms."
    },
    {
      "name": "Acrobat",
      "req": "Novice, Agility d8+, Athletics d8+",
      "desc": "The Acrobat gets one free reroll on Athletics totals that involve balance, tumbling, or grappling. It doesn\u2019t affect rolls to interrupt actions. Acrobats also leap about quickly so that opponents take a -1 to their attacks against them as long as they\u2019re aware of an attack, can reasonably move about, and aren't suffering any Encumbrance penalties."
    },
    {
      "name": "Assassin",
      "req": "Novice, Agility d8+, Melee d6+ or Ranged d6+, Stealth d8+",
      "desc": "Assassins are trained killers who know how to kill even the toughest foes. They add +2 to damage rolls when their foe is Vulnerable or they have The Drop. Sneak Attack Requirements: Seasoned, Assassin The +2 bonus from the Assassin Edge is replaced by a d6, which may Ace as usual. This applies to Athletics (throwing), Melee, or Ranged attacks. Improved Sneak Attack Requirements: Veteran, Sneak Attack The character\u2019s Sneak Attack bonus also now applies if the foe is Distracted."
    },
    {
      "name": "Athlete",
      "req": "Novice, Strength d6+, Athletics d8+",
      "desc": "An athlete, strong and fit, gets a free reroll on Athletics totals that involve climbing, swimming, jumping (long or high), grappling, as well as Athletics or Strength totals for Pushing, or Tripping targets. It doesn\u2019t affect rolls for interrupting actions. Athletes also increase the Short Ranges of throwing actions by 1 (double the Short Range to get the Medium Range, and double again for the Long Range)."
    },
    {
      "name": "Bureaucrat",
      "req": "Novice, Influence d6+, Lore d6+",
      "desc": "Dealing with the Confederacy and bureaucracies in the Koprulu system, might be tedious and tiring. However, the skills of an expert in dealing with bureaucracies are still greatly sought. A character with this edge gains a +2 bonus to Lore rolls when interacting with bureaucracy (filling out paperwork, dealing with red tape, completing a process, among others), as well as to Influence rolls when dealing with humans in the course of completing a bureaucratic requirement."
    },
    {
      "name": "Diplomat",
      "req": "Novice, Instinct d6+, Insight d6+, Influence d8+",
      "desc": "Diplomats are experts at dealing with people, understanding their needs, and getting what they want. They receive +1 to any Influence rolls, and also +1 to Insight rolls."
    },
    {
      "name": "Culinary Master",
      "req": "Novice, Spirit d6+",
      "desc": "You are a master of the art of cooking food and granting hospitality. You can prepare meals so good that boost morale, granting your allies that partake in it a +1 bonus to Spirit rolls for the rest of the day. You also gain a +1 bonus to Persuasion rolls with those who partake of your food."
    },
    {
      "name": "Enforcer",
      "req": "Novice, Influence d6+, Ranged d6+, Survival d4+",
      "desc": "Either because they worked for a police force or for a criminal organization, enforcers are experts at tracking down people. Enforcers have +2 to Networking rolls to get information about people as well as a +2 to Survival when following someone."
    },
    {
      "name": "Explorer",
      "req": "Vigor d8+, Smarts d8+, Science d8+",
      "desc": "An explorer is an expert at surviving and investigating the far-away places of the universe. He gains a +2 on Science rolls when applied to topics outside colonized human space. Also, as a veteran traveler, he receives +2 on Survival and Vigor rolls when exploring places and star systems humans have not visited before."
    },
    {
      "name": "Gearhead",
      "req": "Novice, Intelligence d6+, Engineering d8+",
      "desc": "The character is good with mechanical and electronic devices, and can more easily figure out how to design, use and repair them. He gets a free reroll on Engineering rolls. With a raise, you halve the time normally required to work a device. For example, if a repair job states that a raise repairs it in half the time, you could finish the job in one-quarter of the time."
    },
    {
      "name": "Hacker",
      "req": "Novice, Intelligence d6+, Lore d6+, Computers d6+",
      "desc": "A hacker receives +1 to all Lore rolls when using a computer and +1 on Computers rolls when hacking a computer and reduces all Hacking and Networking times by half when using a computer."
    },
    {
      "name": "Cage Breaker",
      "req": "Heroic, Computers d12+, Hacker",
      "desc": "You ignore 2 points of penalties to Computer rolls (or get a +1 to Computer rolls if there are no penalties). Failed hacking attempts trigger fewer security consequences at the GM's discretion."
    },
    {
      "name": "Power Hacker",
      "req": "Seasoned, Hacker, Computers d8+",
      "desc": "The hacker is used to coding under high pressure and dealing with the most secure systems. He gets a free reroll when failing a Computers roll. He can also ignore the advice about making repetitive Support or Test rolls from Savage Worlds if using Computers to control the local environment (and has the ability to connect to it)."
    },
    {
      "name": "Hardened Survivalist",
      "req": "Novice, Survival d6+, Spirit d6+",
      "desc": "Gain +2 Toughness against environmental hazards and +2 to Survival checks."
    },
    {
      "name": "Investigator",
      "req": "Novice, Intelligence d8+, Lore d8+",
      "desc": "Investigators spend a great deal of time in vast libraries researching ancient legends,and deducing mysteries. They add +2 to Lore rolls."
    },
    {
      "name": "Jack-of-All-Trades",
      "req": "Novice, Intelligence d10+",
      "desc": "Through advanced schooling, book-learning, or just amazing intuitive perception, your hero has a talent for picking up skills on the fly. There\u2019s little he can\u2019t figure out given a little time and a dash of luck. The character makes a Intelligence roll as an action after observing or studying some subject. He gains a d4 in the relevant skill with success, or d6 with a raise. He may try again after an hour of study, trial and effort, or immersion if he fails or wants to try for a raise. This lasts until the character attempts to learn a different subject, whether he\u2019s successful or not."
    },
    {
      "name": "Medic",
      "req": "Novice, Medicine d6+",
      "desc": "A Medic is trained in the use and configuration of the latest nanotechnology medical devices, and is many times crucial to the survival of the group. The Medic receives a +2 to all Healing rolls made to assist characters. This bonus also applies to the use of Portable Healing Kits and Healing Pods. If the Medic has to attend to his traveling companions, up to five of them add this bonus to their natural healing rolls as well."
    },
    {
      "name": "Miner",
      "req": "Novice, Science d4+, Spirit d6+, Survival d6+",
      "desc": "The Survival skill is used when mining or obtaining elements from planets or asteroids. Miners gain a +2 bonus to Science and Survival rolls involved when searching for, identifying, locating, and mining minerals or precious elements. They also get a +2 bonus when selling these minerals back in civilization."
    },
    {
      "name": "Scholar",
      "req": "Novice, Intelligence d8+",
      "desc": "Learned professors, devoted students, and amateur enthusiasts spend great amounts of time and energy studying particular subjects. They become experts in these fields, and rarely fail to answer questions in their particular area of expertise. Pick any one of the following skills: Lore, Tactics, or Science, and add +2 to the total whenever they\u2019re used. This Edge may be taken more than once if applied to different skills."
    },
    {
      "name": "Soldier",
      "req": "Novice, Strength d6+, Vigor d6+",
      "desc": "Professional soldiers get used to carrying heavy loads and enduring harsh conditions. After a few days getting used to their gear (GM\u2019s call), they treat their Strength as one die type higher when determining Encumbrance and Wounds. (This stacks with the Brawny Edge.) They also get a free reroll on Vigor rolls made to survive environmental hazards."
    },
    {
      "name": "Strategist",
      "req": "Novice, Tactics d8+",
      "desc": "Strategists don\u2019t have just a single plan in mind. They imagine various outcomes and prepare for them all. A strategist gets a free reroll on Tactics rolls."
    },
    {
      "name": "Woodsman",
      "req": "Novice, Vigor d6+, Survival d8+",
      "desc": "Woodsmen are rangers, scouts, and hunters who are more at home in the wilderness than urban areas. They are skilled trackers and scouts, and know how to live off the land for months at a time. Woodsmen get a free reroll to Perception, Survival and Stealth rolls while in the wild (not cities, ruins or underground). In addition, the character draws an additional Action Card for initiative while in the wild and ignores penalties for Difficult Ground."
    },
    {
      "name": "Augmentation Specialist",
      "req": "Seasoned, Augmentation Focus",
      "desc": "You instinctively reinforce your body and mind beyond normal limitations. Double the duration of your Augmentation powers."
    },
    {
      "name": "Cloaking Specialist",
      "req": "Seasoned, Cloaking Focus",
      "desc": "Your psychic camouflage becomes almost instinctive. Gain +2 Stealth while cloaked."
    },
    {
      "name": "Danger Sense",
      "req": "Novice, Psi Level 1+",
      "desc": "By projecting a constant psychic field, the Psion picks up on environmental cues that allow him to sense when something bad is about to happen. When rolling for Surprise, he adds +2 to his Perception roll to act in the first round. With a raise, he starts the encounter on Hold. In other situations not covered by the Surprise rules (a sniper shot, pit trap, poisoned drink, etc.), The Psion gets a Perception roll at -2 (or +2 if a Notice roll is usually allowed) to detect the hazard and take appropriate action. If this was an attack and the Psion makes his Perception roll, the foe doesn\u2019t get The Drop against him."
    },
    {
      "name": "Combat Precognition",
      "req": "Veteran, Danger Sense, Psionics d10+",
      "desc": "Your mind processes danger fractions of a second before it occurs. You are immune to being vulnerable."
    },
    {
      "name": "Psionic Reflexes",
      "req": "Heroic, Danger Sense, Psionics d10+",
      "desc": "The Psion enhanced senses extend to his defensive skills, he can foresee movements and attacks and his body reacts with the speed of the mind. He may use Discipline instead of Defense for Physical attacks."
    },
    {
      "name": "Mind over Matter",
      "req": "Veteran, Psionics d8+, Danger Sense",
      "desc": "The Psion can shrug off physical damage by just meditating and maintaining an intense state of focus. While not shaken or stunned, you may use Resolve instead of your base Toughness for resisting physical damage."
    },
    {
      "name": "Uncanny Reflexes",
      "req": "Veteran, Danger Sense, Athletics d8+, Psionics d8+",
      "desc": "The character has an uncanny ability to avoid area attacks and effects. He ignores the usual \u22122 Agility penalty when making Evasion attempts. He also gets a regular Evasion attempt against area effect attacks or effects that don\u2019t usually allow it (at the usual \u22122 penalty), such as burst or blast, or even confusion or similar spells cast with the Area Effect modifier."
    },
    {
      "name": "Efficient Manifestation",
      "req": "Veteran, Psionics d8+",
      "desc": "Your powers flow effortlessly, requiring less concentration and mental effort than those of ordinary psychics. Reduce the Stress Point cost of your powers by 1 (minimum 1)."
    },
    {
      "name": "Ghost Operative",
      "req": "Veteran, Ghost Background",
      "desc": "Years of conditioning have fused military training and psionic talent into a single deadly discipline. Once per turn, reroll a Psionics roll."
    },
    {
      "name": "Neural Assault",
      "req": "Veteran, Telepathy Focus",
      "desc": "Description Your psychic attacks strike directly at the nervous system. Whenever a Telepathy power causes Shakens or Wounds, the target becomes Vulnerable."
    },
    {
      "name": "Psi Level",
      "req": "Novice, Arcane Background (Psionics), Spirit d6+",
      "desc": "Every Terran psychic possesses a measurable level of psionic potential known as their Psi Rating. This rating represents both the raw power of the character's mind and their ability to withstand the strain of advanced psychic techniques. Most Terran psychics never develop beyond Psi Rating 4 or 5. Veteran Ghosts and Shadowguards may reach Psi Rating 6 or higher through years of training and conditioning. Only the most gifted or genetically exceptional individuals ever approach Psi Rating 8. Psi Ratings of 9 and 10 are legendary and almost unheard of among Terrans. Each time this Edge is taken, increase your Psi Level by 1, but the requirements change as it follows: PL1-3 Spirit d6+ PL4-5 Spirit d8+ PL6-7 Spirit d10+ PL8-9 Spirit d12+ PL10 Spirit d12+1 In addition: * Gain one new Psionic Power. * Increase your Stress Pool according to your new PL. * You may immediately learn two powers whose Psi Level requirement you now meet. Certain powers, Edges, and special abilities gain additional benefits based on your Psi Level. Rank Limits Your maximum Psi Level is determined by Rank: Rank Maximum Psi Level Novice 3 Seasoned 5 Veteran 7 Heroic 9* Legendary 10* * Psi Level 9 and 10 normally require a special Edge, Background, or GM approval. Special: Psi Level may be taken multiple times. A character's Psi Level can never exceed the maximum allowed by their Rank or any racial or background limitations. Psi Level and Detection Powerful psychics are easier to detect. * Psi Level 1-4: No modifier. * Psi Level 5-6: +1 to attempts to detect the character psionically. * Psi Level 7-8: +2. * Psi Level 9-10: +4."
    },
    {
      "name": "Psi Sensitive",
      "req": "Novice, Arcane Background (Psionics)",
      "desc": "You perceive faint psychic echoes where others notice nothing. Even before formal training, your mind naturally resonates with psionic energies. Gain +2 to Perception rolls involving psionic phenomena. Gain +1 to Discipline and Resolve against hostile psionic powers."
    },
    {
      "name": "Psychic Discipline Focus",
      "req": "Novice, Psionics d6+",
      "desc": "Some psions spread their talents across many fields. Others dedicate themselves to mastering a single aspect of the psychic arts, refining a chosen discipline until it becomes second nature. Choose one psionic discipline. Gain +1 to all activation rolls involving powers from that discipline. You can manifest your discipline\u2019s power at +1 PL. Improved Psychic Discipline Focus Requirements: Seasoned, Psionics d8+, Psychic Discipline Focus Increase the bonus to +2."
    },
    {
      "name": "Telepath",
      "req": "Seasoned, Telepathy Focus",
      "desc": "You instinctively understand how minds think, react, and break. When a Telepathy power Shakens or wounds a target, the target also becomes Distracted."
    },
    {
      "name": "Terran Energy Adept",
      "req": "Novice, Arcane Background (Psionics)",
      "desc": "Energy Adepts manifest pure psionic force as destructive energy projections capable of devastating living and mechanical targets alike. Gain access to Energy Discipline, Energy becomes a native discipline. You learn one Energy power. Gain +1 to activate Energy powers, Maximum Psi Rating becomes 10 and your maximum Spirit increases to d12+1."
    },
    {
      "name": "Energy Adept",
      "req": "Seasoned, Terran Energy Adept, Energy Focus",
      "desc": "You channel raw psionic force with terrifying efficiency. Damaging Energy powers gain +2 damage."
    },
    {
      "name": "Terran Pyrokinetic",
      "req": "Novice, Arcane Background (Psionics)",
      "desc": "Pyrokinetics channel psionic energy into destructive thermal reactions, creating and manipulating fire through force of will alone. Gain access to the Pyromancy Discipline. Pyromancy becomes a native discipline. You learn one Pyromancy power. Gain +1 to activate Pyromancy powers. Maximum Psi Rating becomes 10 and your maximum Spirit increases to d12+1."
    },
    {
      "name": "Pyrokinetic",
      "req": "Seasoned, Terran Pyrokinetic, Pyromancy Focus",
      "desc": "Fire responds to your emotions almost as readily as your commands. Targets set on fire by your powers suffer -2 to recover from Shaken."
    },
    {
      "name": "Terran Technomancer",
      "req": "Novice, Arcane Background (Psionics)",
      "desc": "Technomancers possess an unusual affinity for machines and electronic systems, allowing them to influence technology through psionic means. Gain access to the Technomancy Discipline, Technomancy becomes a native discipline. You learn one Technomancy power. Gain +1 to activate Technomancy powers, Maximum Psi Rating becomes 10 and your maximum Spirit increases to d12+1."
    },
    {
      "name": "Technomancer",
      "req": "Seasoned, Terran Technomancer, Technomancy Focus",
      "desc": "Machines speak a language only you can hear. Gain +2 to Psionics rolls when using powers against Vehicles, Drones, Robots or Computers."
    },
    {
      "name": "Terran Telekinetic",
      "req": "Novice, Arcane Background (Psionics)",
      "desc": "Among all known Terran psychics, Telekinetics\u2014often called \"Teeks\"\u2014are the rarest and most feared. While most psions develop abilities centered around telepathy and mental influence, Telekinetics possess the ability to manipulate matter directly through psionic force. Their gifts allow them to move objects, create invisible barriers, crush armored targets, and project devastating waves of force. Many psionic researchers believe Telekinetics represent an evolutionary divergence within the Terran psychic population. Gain access to the Telekinesis Discipline, Telekinesis counts as a native discipline for you. You learn one Telekinesis power. Gain +1 to Psionics rolls involving Telekinesis powers. Telekinetics may increase their Psi Rating to 10 and your maximum Spirit increases to d12+1."
    },
    {
      "name": "Telekinetic Combatant",
      "req": "Seasoned, Terran Telekinetic, Telekinesis Focus",
      "desc": "Your telekinetic abilities have become weapons as deadly as any rifle. Whenever a Telekinesis power damages a target, inflict +1d6 damage."
    },
    {
      "name": "Void Attunement",
      "req": "Veteran, Echoes of the Void (Hindrance)",
      "desc": "The whispers of the Void no longer frighten you\u2014you have learned to interpret them. Strange visions reveal possibilities moments before they occur. Once per session, after making any roll, you may reroll with a +2 bonus as the Void briefly reveals a more favorable path. You gain access to the Temporal Discipline."
    },
    {
      "name": "Whispers Beyond",
      "req": "Veteran, Echoes of the Khala (Hindrance)",
      "desc": "The voices that once haunted you have become trusted advisors. Once per session, you may ask the GM one question regarding your current situation (\"Which enemy is the greatest threat?\", \"Which path is safest?\", \"Is someone lying?\"). The GM must answer truthfully, though the answer may be cryptic or symbolic. You gain access to the Energy Discipline."
    },
    {
      "name": "Air of Authority",
      "req": "Veteran, Intimidating Presence, Influence d8+, Spirit d8+",
      "desc": "Your reputation, bearing, and force of personality make lesser foes hesitate before challenging you. Hostile Extras who can see and hear you suffer a -1 penalty to attacks made directly against you. Any Extra attempting to attack you for the first time in an encounter must first succeed on a Spirit roll as a free action. Failure means it must choose another target, take cover, or forfeit the attack. Extras who have already been attacked by you or have seen you attack one of their allies are immune to this effect for the remainder of the encounter. Wild Cards are unaffected."
    },
    {
      "name": "Bewildering Rhetoric",
      "req": "Seasoned, Influence d8+, Intelligence d6+",
      "desc": "You are a master of propaganda, psychological warfare, and verbal manipulation. Through a constant stream of taunts, arguments, and rhetoric, you disrupt enemy cohesion and confidence. As an action, you may begin a speech directed at enemies who can hear and understand you. Maintaining the speech requires an action each round. While the speech is maintained enemy leaders suffer a -2 penalty to Tactics, Influence and Leadership rolls and your enemies may not benefit from Support rolls generated by Influence, Leadership or Tactics. This effect ends immediately if you become Shaken or choose to stop speaking."
    },
    {
      "name": "Bolster",
      "req": "Novice, Spirit d8+",
      "desc": "Belittling or humiliating an enemy can boost your ally\u2019s spirits. When this character successfully Tests a foe, he may also remove the Distracted or Vulnerable state from one of his allies."
    },
    {
      "name": "Challenging Cry",
      "req": "Novice, Influence d8+",
      "desc": "The first time each round the hero Wounds or Incapacitates an enemy with an attack or power, he gets a free Combat Influence Test targeting (at least) that enemy or another enemy (of his choice) who saw his comrade take the blow."
    },
    {
      "name": "Common Bond",
      "req": "Wild Card, Novice, Spirit d8+",
      "desc": "Selfless heroes and determined leaders know their greatest strength often comes from their companions, and are willing to give some of their own fortune, fate, or luck to support them. A character with this Edge may freely give his Bennies or Morale points to any other character he can communicate with. The player should explain what form this takes, from a quick shout of encouragement to a welcome pat on the back."
    },
    {
      "name": "Connections",
      "req": "Novice",
      "desc": "Your hero is connected to people or organizations who can help him when the chips are down. It might be the mob, a guild, a wealthy aristocratic woman, a politician etc. Connections may be taken more than once, selecting a new faction or contact each time. Once per session, and assuming he can get in touch with them, the hero can call on his friends for a favor. The favor depends on the nature of the contact (GM\u2019s call), but might include a loan, gear, a few allied fighters, transportation, information, or even a professional with critical skills the party doesn\u2019t have, like a hacker or scholar."
    },
    {
      "name": "Deceptive",
      "req": "Seasoned, Intelligence d8+",
      "desc": "Lies, deception, and misdirection are a stock-in-trade for you. You gain a +2 bonus when using Influence to Lie."
    },
    {
      "name": "Demoralizing Defense",
      "req": "Novice, Influence d8+",
      "desc": "Once per round when an opponent misses you with an attack, you can make a Combat Influence Test against that opponent as a Free Action."
    },
    {
      "name": "Embolden",
      "req": "Seasoned, Spirit d8+",
      "desc": "Once per round, when an event requires one or more allies to roll Spirit or Intelligence to resist a Test, power, Special Ability, or Fear check, the hero can immediately Support his allies\u2019 rolls to resist (as a free action). This Support is generally done with Influence, Tactics, Leadership or the Psionic skill (other skills are up to the GM). The hero rolls once and the result is applied to each of the affected allies."
    },
    {
      "name": "Humiliate",
      "req": "Novice, Influence d8+",
      "desc": "Those with a cruel wit can destroy a rival\u2019s ego in a single remark or well-timed gesture. Your hero gets +2 bonus to Influence rolls when using it to Taunt."
    },
    {
      "name": "Intimidating Presence",
      "req": "Seasoned, Influence d8+, Spirit d8+",
      "desc": "Enemies tremble at your sight, gain a +2 Influence rolls for Intimidation."
    },
    {
      "name": "Inspiring",
      "req": "Novice, Spirit d8+, Influence d8+",
      "desc": "You always find a way to make others better. When the hero successfully Supports an ally, the bonus they receive is increased by +1 (so +2 on a success and +3 on a raise) and the total bonus the ally can receive increases to +5."
    },
    {
      "name": "Poker Face",
      "req": "Novice, Influence d8+",
      "desc": "Opponents have a -4 penalty to read your emotions with an Insight check."
    },
    {
      "name": "Provoke",
      "req": "Novice, Influence d6+",
      "desc": "Clever characters can manipulate their foes, drawing enemy focus on themselves to protect their allies. When your hero uses Combat Influence to Taunt, increase the penalty an enemy suffers by an additional \u22122."
    },
    {
      "name": "Rabble Rouser",
      "req": "Seasoned, Intelligence d8+ or Spirit d8+",
      "desc": "This instigator knows how to rile up several enemies at once. As a limited action, a character with this Edge can make a social Test with Influence to all enemies in a Medium Blast Template. The targets must be able to see and hear the hero clearly."
    },
    {
      "name": "Reliable",
      "req": "Novice, Spirit d8+",
      "desc": "People know they can depend on your hero when they need assistance. He gets a free reroll on any Support roll. Trustworthy Requirements: Veteran, Reliable Your allies engage their fight knowing you have their back covered. You ignore up to 2 points of penalties on all your Support rolls."
    },
    {
      "name": "Retort",
      "req": "Novice, Influence d6+",
      "desc": "If the hero resists a Test against his Discipline, the foe who initiated the Test is Distracted. Additionally, once per round, if a Discipline Test targets one of his allies in sight, and the ally resists, the hero may immediately make a free Influence Test at that single foe."
    },
    {
      "name": "Streetwise",
      "req": "Novice, Influence d6+",
      "desc": "Streetwise characters know how to find the local black market, fence stolen goods, avoid the local law (or criminal element!), lay low when the heat\u2019s on, obtain illegal weapons, find out which \u201cboss\u201d is hiring muscle, or similar shady activities. Streetwise characters add +2 to Influence rolls made to Network with shady or criminal elements. They also add +2 to Lore rolls pertaining to the types of disreputable activities listed above."
    },
    {
      "name": "Swift Support",
      "req": "Seasoned, Intelligence d8+",
      "desc": "You are ready to assist your allies at a moment's notice. If the hero's Action Card is a face card or Joker, he may Support an ally as a limited free action."
    },
    {
      "name": "Work the Room",
      "req": "Novice, Spirit d8+",
      "desc": "Your hero\u2019s words don\u2019t just inspire those they\u2019re directed at\u2014they often inspire others as well. Once per turn, you can use Work the Room to roll an additional skill die when Supporting with Influence. The additional die Supports any other ally who can see or hear your hero, and applies to their next action, whatever it may be. Work the Crowd Requirements: Seasoned, Work the Room As Work the Room but the hero now can Support another on up to two of her Support actions."
    },
    {
      "name": "Ace",
      "req": "Novice, Agility d8+",
      "desc": "Aces are pilots and drivers who have a special affinity with vehicles. They ignore two points of penalties to any Boating, Driving, or Piloting roll, and may spend Bennies to Soak damage for any vehicle they control or command, using the appropriate Boating, Driving, or Piloting skill instead of Vigor. Each success and raise negates a Wound."
    },
    {
      "name": "Jock",
      "req": "Seasoned, Ace",
      "desc": "The spacer ignores the Multi-Action penalty for making a Piloting roll and taking another action in the same round. This is critical for single-crew fighter pilots who need to maneuver and attack on the same turn."
    },
    {
      "name": "Defensive Pilot",
      "req": "Seasoned, Piloting d10+ or the Ace edge.",
      "desc": "A Pilot with this Edge receives a +1 his ship\u2019s Defense as well as to Piloting rolls to avoid attacks or obstacles."
    },
    {
      "name": "Defense Expert",
      "req": "Seasoned, either Defensive Pilot or Gunner, Piloting d8+, Shooting d8+",
      "desc": "When deploying Defenses against incoming missiles, the pilot gets an additional +2 bonus to the evading roll, for a total of +4. When using Point Defense Laser Batteries, each successful hit made by the character has a 3 in 6 (not 2 in 6) chance of shooting the missile down."
    },
    {
      "name": "Gunner",
      "req": "Seasoned, Shooting d8+",
      "desc": "Being able to take out enemy ships with a well aimed shot takes training. The hero has it. In ship combat, the character may modify his roll on the Critical Hit Table by 1 point either way, as he chooses. He does this after rolling the dice for the Critical Hit."
    },
    {
      "name": "Space Combat Trained",
      "req": "Seasoned",
      "desc": "The hero has been trained and developed experience in acting under pressure during space battles. He can ignore 1 point of Ship Wound or Ship Fatigue penalties. Veteran Combat Trained Requirements: Veteran, Space Combat Trained As above, but the hero can ignore 2 points of Ship Wound or Ship Fatigue penalties."
    },
    {
      "name": "Spaceship Engineer",
      "req": "Seasoned, Engineering d8+",
      "desc": "The character is an expert on most technical activities aboard a spaceship. All ship-related Engineering rolls receive a +2 bonus."
    },
    {
      "name": "LEGENDARY EDGES\nBattle-Hardened Commander",
      "req": "Legendary, Tactics d10+",
      "desc": "Your presence inspires extraordinary performance. Allies under your Tactics buff, gain +2 to Discipline and Resolve."
    },
    {
      "name": "Professional",
      "req": "Legendary, maximum die type possible in affected Trait",
      "desc": "The character is an expert at a particular skill or attribute (his choice). This increases the Trait and its limit one step (a d12 + 1 becomes a d12 + 2, for example). This Edge may be selected once per Trait. Expert Requirements: Legendary, Professional in affected Trait As the Professional Edge, increasing the Trait and its limit one additional step. Master Requirements: Wild Card, Legendary, Expert in affected Trait The character\u2019s Wild Die increases to a d10 when rolling the selected Expert Trait."
    },
    {
      "name": "Weapon Master",
      "req": "Legendary, Melee d12+",
      "desc": "The warrior increases his Defense by +1 and the bonus damage die for Melee rolls is a d8 instead of a d6. He must be armed to gain these benefits, but this includes the Martial Artist Edge, claws, or other abilities that count as weapons."
    },
    {
      "name": "Master of Arms",
      "req": "Legendary, Weapon Master",
      "desc": "Increase the hero\u2019s Defense an additional +1 and his Melee bonus damage die is now a d10."
    },
    {
      "name": "Hero of the Koprulu Sector",
      "req": "Legendary",
      "desc": "Your deeds are known throughout human space. Gain +2 Influence and Leadership. Once per session, automatically succeed with a rise at an Influence or Leadership roll involving allies or civilians."
    },
    {
      "name": "Living Legend",
      "req": "Legendary",
      "desc": "Stories are told about your exploits. As long as you are not bleeding out, you and your allies can\u2019t go below Morale 0 and you can still soak damage even at morale 0. Equipment Equipment Tiers While all the items described in this chapter are the base stock variations, all weapons, armors, and gear items have multiple tiers of quality. Higher tiered items represent those constructed with better parts, higher levels of craftsmanship, more state-of-the-art features, experimental components, and overall more advanced planning. Equipment tiers ensure that a character will always be upgrading and searching for new items throughout his adventuring career and doesn\u2019t get tired of the Gauss Pistol he\u2019s been using since novice rank. They also present interesting opportunities to go on missions looking for a powerful or legendary object. Tier 1 items represent mass produced, stock brands. These are known as Basic items. This is the version most encounter. While many Tier 1 items are clearly advanced, such as Powered Armor and Gauss Weaponry, they are still simple compared to their true potential. Tier 1 items can be found nearly anywhere and cost the base price of the item. Tier 2 items tend to be specially crafted rather than produced stock on the factory floor. Every piece of these items is hand assembled, tested, and tuned to perfection. Companies generally keep limited quantities of these items available for the exclusive clientele. They are generally only found in government complexes or on core worlds, and they cost 4 x the price of their basic counterpart. Tier 3 items are rare. They tend to be custom made by special order and have an impressive price tag. These items are designed from the ground up, custom made from scratch to exactly match the customer\u2019s requirements. Custom parts are usually ordered from afar or built specifically for the item. Numerous variations are built and tested until perfection is reached. They often take months or years to make. Tier 3 items generally cannot be purchased unless their base cost (before tier multiplier) is 1,000 or less. Instead, they are usually custom ordered. Their cost is 12 x the price of the base item. Rumors persist of items even greater than tier 3, relics created by reclusive geniuses and experimentation with alien technology. However, these items are incredibly rare and outside the reach of most characters. Higher Tiered Weapons Weapons scale simply, mostly with passive bonuses, but the combined effect makes for powerful weaponry. The following are adjusted for higher tiered weaponry: -Ranged or Melee bonus is increased by +1 per tier above 1st -Base damage is increased by +1 per tier above 1st -Weapon can support 2 additional item upgrades per tier above 1st In addition, tier 2 or 3 weapons do not jam. Higher Tiered Armor Armor also scales simply, mostly with passive bonuses; although they gain much utility with the mounted gear that scales with them. The following are adjusted for higher tiered armor: -The armor\u2019s damage resistance increases by the armor\u2019s Resistance Rating. The Resistance Rating of a suit of armor depends on what type of armor it is. For light armor, the Resistance Rating is 1. For heavy armor, the Resistance Rating is 2. Power armor has a Resistance Rating of 3. Shields, instead, gain no damage resistance but gain +1 defense. -The armor\u2019s penalty to defenses is reduced by 1 by tier (to a maximum of 0) -The armor can support 2 additional item upgrades -Any and all mounted gear built onto the armor, such as a communicator or digital uplink, increases Tier to be the same level as the armor. Higher Tiered Gear Gear does not scale with simple passive upgrades. Instead, the entry of each item has to be checked. The item gains all the features listed under its tier. Generally, this is all the features of the base item plus a few more. Armor ARMOR Beyond a character\u2019s weapons, armor is the main tool they will need to survive. Armor varies as much as weapons do in the Koprulu Sector, ranging from primitive padded jackets to the 5-4AIS which turns its user into a walking tank. LIGHT ARMORED SUITS TYPE ARMOR CLASS BOOST COST Defense Modifier Flight Suit +4 Light 900 0 Shadowguard Field Armor +4 Light AGI +1 8000 0 Padded Jacket +2 Light 150 0 Protective Vest +5 Light 250 -1 Stealth Suit +1 Light 200 0 HEAVY ARMORED SUITS TYPE ARMOR CLASS BOOST COST Defense Modifier Commander\u2019s Battle Regalia +5 Heavy 4000 -1 Combat Body Suit +6 Heavy STR +1 3000 0 Environmental Suit +2 Heavy 300 -3 Flak Armor +6 Heavy 500 -1 Hostile Environment Suit +8 Heavy STR +1 10000 0 Light Combat Armor +8 Heavy 800 -1 POWER ARMORED SUITS TYPE ARMOR CLASS BOOST COST Defense Modifier 5-4 Armored Infantry Suits +20 Powered STR +4 25000 -4 CMC-200 Powered Combat Armor +13 Powered STR +3 2500 -3 CMC-300 Powered Combat Armor +15 Powered STR +4 5000 -3 CMC-400 Powered Combat Armor +16 Powered STR +4 10000 -3 CMC-405 Powered Light Combat Armor +12 Powered STR +3 9000 -2 CMC-660 Powered Light Combat Armor +20 Powered STR +4 21000 -4 SHIELDS ITEM DEFENSE COVER MIN. STR COST Ballistic Combat Shield +2 +4 d6 1000 Armor Details 5-4 Armored Infantry Suit Mounted Gear: Flashlightx4, Geiger Counter, Communicator, Grenade Launcherx2, Navigation Unit, Digital Uplink, Gravity Boots, Equipment Belt, Backpack Weight: 600 lbs. Special Traits: Powered Armor, Extremely Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (2), Bulky, Marauder Grenade Launchers* Description: 5-4 Armored Infantry Suit is the pinnacle of personal protective equipment, turning its user into a walking tank. Equipped with dual grenade launchers, the 5-4AIS possess an onboard armory rivaling that of a Terran walker. While its cost for an independent purchaser is significant, one cannot help but admire its effectiveness in deep combat. CMC-200 Powered Combat Armor Mounted Gear: Geiger Counter, Communicator, Gravity Boots, Backpack Weight: 400 lbs. Special Traits: Powered Armor, Very Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply Description: The CMC-200 was basic era powered combat armor that had fallen from popularity by the Great War. However, even by the time of the Second Great War, it continues to be used by backwater marshals, mercenaries, rebels, and in the private sector. CMC-300 Powered Combat Armor Mounted Gear: Flashlightx2, Geiger Counter, Communicator, Gravity Boots, Binoculars, Navigation Unit, Digital Uplink, Equipment Belt, Backpack Weight: 400 lbs. Special Traits: Powered Armor, Very Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (2) Description: The CMC-300 was standard issue during the Great War and still used by most in the years afterwards. Considered by many to be the quintessential Terran armor, it allows a soldier to be ready for whatever obstacles he might face inside and out of combat. CMC-400 Powered Combat Armor Mounted Gear: Flashlightx4, Geiger Counter, Communicator, Gravity Boots, Binoculars, Navigation Unit, Digital Uplink, Equipment Belt, Backpack Weight: 400 lbs. Special Traits: Powered Armor, Very Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (4) Description: The newest and essentially \u2018elite\u2019 powered armor, the CMC-400 sees the most use with elite military units, officers, and wealthy mercenaries and operatives. The amount of additional protection offered from the armor makes it an attractive offer. CMC-405 Powered Light Combat Armor Mounted Gear: Flashlightx4, Geiger Counter, Communicator, Gravity Boots, Binoculars, Navigation Unit, Digital Uplink, Equipment Belt, Backpack Weight: 250 lbs. Special Traits: Powered Armor, Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (4) Description: CMC Light Powered Armor was developed initially for non-combat personnel, such as reporters, medics, and diplomats, joining soldiers on the field of battle. While it possesses state of the art systems and security, it offers less protection and more mobility than standard heavy power armors CMC-660 Powered Combat Armor Mounted Gear: Flashlightx4, Geiger Counter, Communicator, Flamethrowerx2, Binoculars, Gravity Boots, Digital Uplink, Equipment Belt, Backpack Weight: 600 lbs. Special Traits: Powered Armor, Extremely Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (2), Bulky, Firebat Flamethrowers* Description: The CMC-660, also known as Firebat armor, is a super-heavy armor outfit designed to get close to the enemy and incinerate them. This armor proved its usefulness during the Zerg invasion of Terran space. While it has been slightly phased out by the 5-4 Armored Infantry Suits, Firebat armor remains popular, especially with mercenaries and rebels. Commander\u2019s Battle Regalia Mounted Gear: Communicator Weight: 25 lbs. Special Traits: Cumbersome, Oxygen Supply, Self-Medicating Description: The commander\u2019s battle regalia is a personalized military uniform with an underlaid mesh fiber and protective, but light weight plating. The uniform is designed for military officers to be able to make full display of rank and distinction on the battlefield while also providing protection from stray fire. The battle regalia has a communicator on the jacket collar, an oxygen mask hidden in a coat pocket, and the torso plates have a medical injector that can supply cures directly into the blood stream. Combat Body Suit Mounted Gear: Communicator, Protective Mask Weight: 30 lbs. Special Traits: Elemental Protection, Radiation Shielding, Oxygen Supply Description: Ideal for adventuring in a dangerous locale, combat Body Suits are uniforms that combine light infantry body armor with a hazard suit. Ideal for those with an adventuresome life style, its protective body armor is segmented to allow extra movement, and covering the entire body, including the gaps in the armor, is a skin tight hazardous environment suit that protects the wielder from adverse conditions and allows them to function in dangerous environments. In addition, it has charge servos that accelerate the user\u2019s Strength, not dissimilar from that of powered armor, only not nearly as potent. Dominion Reapers often wear suits of this armor which function admirably in conjunction with their jump packs. Environmental Suit Mounted Gear: NA Weight: 30 lbs. Special Traits: Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply Description: The environmental suit is a full body protective garment for science and civilian personnel walking into hazardous environments such as areas of radiation leakage, toxic planets, or environments with no atmosphere or oxygen. These bulky suits have no hardened reinforcement and are useless against ballistic projectiles or ripping claws. However, they serve well at protecting the entire body from the hostile environmental conditions. Flak Armor Mounted Gear: NA Weight: 30 lbs. Special Traits: Cumbersome Description: Flak Vests are lightweight suits designed to absorb blasts, cover from shrapnel, and overall protect the user from blasts. While designed to protect from explosives, it also serves as a serviceable, yet minor, protector against ballistic damage. Flight Suit Mounted Gear: Digital Uplink Weight: 25 lbs. Special Traits: Elemental Protection, Oxygen Supply Description: Flight Suits are generally issued to pilots of Terran starships and aerial combat vessels. In addition to giving some protection against cockpit explosions, they have basic protective armor, so the pilots can survive in case they survive an ejection and are forced to trek through enemy territories to reach safety. Finally, these suits come with helmets and visors that provide digital uplinks, allowing them to remain informed in what is going on around their vessels and make optimal judgment calls in combat. Hostile Environment Suit Mounted Gear: Communicator Weight: 15 lbs. Special Traits: Elemental Protection, Radiation Shielding, Oxygen Supply, Personal Cloaking, Armor Decay Description: Hostile Environment Suits are the armor of choice for Ghosts. Allowing them to cloak and serve as optimal assassins, these suits also add to the user\u2019s physical prowess and provide limited protection against projectiles. Their high price tag and lesser use to non-Ghosts makes them a less attractive option to other characters. Light Combat Armor Mounted Gear: Communicator Weight: 25 lbs. Special Traits: Cumbersome Description: Light Combat Armor is a heavily reinforced suit of armor designed to protect the user from the rigors of personal combat. While not as defensible as powered armor, these durable suits do provide freedom and maneuverability impossible in CMC armor. As such, it is often used by soldiers, adventurers, and mercenaries outside of an open warzone, as well as private sector security not expecting war-scale combat. Padded Jacket Mounted Gear: NA Weight: 4 lbs. Description: Padded Jackets are the bare minimum of armor, consisting mainly of a thick jacket with thickened layers of protective fiber. This is not recognized as official armor by any regime, and most of these are hand-crafted together by those who need them. They are commonly used by gangs and other assorted criminals or civilians and colonists who desire basic protection during an invasion of their home world. Protective Vest Mounted Gear: NA Weight: 8 lbs. Description: A step up from the padded jacket, the protective vest is a bullet retardant suit of chest armor with additional parts of the body protected by protective fibers. It does a serviceable job protecting against small arms slug projectiles, but it is quickly shredded by gauss fire. It is used by private corporations and law enforcement mainly. Shadowguard Field Armor Mounted Gear: Communicator Weight: 10 lbs. Special Traits: Umojan Networking, Personal Cloaking, Armor Decay, Umojan Exclusive, Concealable Description: Shadowguard Field Armor is a black and white, body suit that possesses state of the art physical attribute augmentation in a thin and sleek package. The signature armament of the shadowguard, it is designed to be potentially worn beneath heavy clothing and used with a psi weave mask. Like the signature armor of the ghost, shadowguard field armor is cloaking-capable and designed to disintegrate once the user is slain Stealth Suit Mounted Gear: NA Weight: 3 lbs. Special Traits: Shadowed Description: Stealth Suits are skin-tight black body suits specifically designed to create very little noise and be hard to see. It is invaluable for anyone who prefers to never be seen and ideal for those who wish never to be shot back at. It has no mainstream usage; although it is sometimes used by assassins, guerrilla fighters, and ghosts-in-training Armor Traits Armor Decay Once the armor detects that its user has been slain, the armor sets itself to automatically corrode, disintegrating into nothing within 1 minute. This prevents the armor from being stolen off of slain operatives. Bulky A character wearing this armor counts as being Size +1 and gains a Reach of +1. Concealable This armor can be worn beneath clothing to disguise its presence. It takes a Perception roll with -4 penalty to realize that the Shadow Guard is wearing a uniform beneath their armor. This allows a character to take their armor into locations that have a restricted access to arms and armor. Cumbersome Cumbersome armor gives the wearing character a -2 penalty to Athletics, and Stealth checks. If a character has the cumbersome trait from multiple sources such as armor and a shield, the effects stack. Very Cumbersome Very Cumbersome armor gives the wearing character a -3 penalty to Athletics, and Stealth checks. Extremely Cumbersome Extremely Cumbersome armor gives the wearing character a -4 penalty to Athletics, and Stealth checks. Elemental Protection This armor protects against extreme heat and cold. It allows prolonged survival in high and low temperatures, and the character does not need to make endurance checks to survive in such environments. Also, the character is immune to energy damage resulting from exposure to extreme ambient temperatures. Fall Protection (X) This armor has automated systems to reduce impact from falls and ignores a number of squares for determining fall distance based on the value under the armor\u2019s description. Impact Cushion This armor has a layer of self-replicating mesh foam that sits over the user\u2019s body and absorbs some of the impact and damage taken. Armor with this quality gives the user +4 against the first attack each round. Oxygen Supply This armor supplies oxygen to its user with 2 air tanks used to supply breathable air. Fresh air tanks can be swapped out as an action. Personal Cloaking This armor is constructed of psi-weave fibers that grant a Terran psychic the ability to cloak. The psychic must still have the cloaking power. The suit only has the capacity to cloak for 10 minutes, out of every hour. Powered Armor These are high-tech military armors powered with their own internal generators. These suits respond to the wearer\u2019s movement, and the wearer does not count the armor\u2019s weight against his carrying capacity while suited in it. Most of the mounted gear on the powered armor are hands free and are activated via voice command inside the helmet\u2019s heads up display. Characters using powered armor can only use pistols, rifles, and melee weapons with grip extensions. In addition, the time it takes to apply the Medicine skill to the character doubles. Powered armor power cells last 72 hours without needing to be recharged or replaced. When the armor loses power, the wearer loses access to all of the armor\u2019s functions, weapons, gear, and abilities. Their Agility drops to 1d4. All movement is considered limited movement. The armor check penalty triples, and they lose all benefits of the Powered Armor Training talent. Using powered armor while not being trained in powered armor gives you -2 Speed, -4 Attack, Defense, and Strength and Agility checks. Radiation Shielding The wearer of this armor is immune to the penalties dealt by ambient radiation but not the damage. Self-Medicating This armor automatically contains a supply of chemicals that can be activated as a limited free action. The suit can contain up to five injection-based chemicals such as Combat Stimulants and Painkillers. The armor can only automatically apply one chemical per round. Chemicals can be replenished as an action. Shadowed While this character is cloaked (Invisible) or hidden, any enemies who would notice the character without a check, instead have to make a perception check. This check suffers a penalty according to your stealth skill (1d4=0/1d6=1/1d8=2/1d10=3/1d12=4) If the check is failed, the character is not revealed. Umojan Exclusive This equipment is generally only available from Umojans for Umojans. Outside of the protectorate\u2019s worlds, these items are either unavailable, or drastically more expensive (+50-200% cost, GM\u2019s choice). Umojan Networking This armor has an Umojan Protection Chip imbedded within it, which allows it to synergize with the functions of the Umojan weaponry. Attacks from a weapon with an Umojan Guided Projectile automatically miss the wearer, and they are counted as being outside the burst areas of any attacks from weapons with the that rule, even if they are physically within the area. Furthermore, allies with the chip in melee combat with enemies do not suffer from the innocent bystander rule. For this feature to work, either the weapon or the ammunition must have this trait. Armor Upgrades All armors are customizable. Items can be customized using certain upgrades. To utilize an upgrade, the character must purchase all necessary parts to install the upgrade. Afterwards, a Science or Engineering skill check is required to install the upgrade to the armor. If the check fails you can try again the next day, if you botch the roll you have to wait one week before trying again. The equipment tier of the item determines how many slots of upgrades it can generally support. Tier 1 items have 2 upgrade slots. Tier 2 items have 4 upgrade slots. Tier 3 items have 6 upgrade slots. An upgrade cannot be applied more than once. NAME ARMOR TYPE COST CHECK BENEFIT Apollo Reactor Heavy Armor, Power Armor 5000 8 Increase Stress Pool by 2 per tier. Automated Medical Delivery System Power Armor 8000 8 Heal all allies within 5 squares as a limited free action (10 uses) 100 credits per use. Cloaking Field All Armors 15000 8 Allows non-psionic characters to cloak, the armor has 6pp and spends 1 pp per turn of cloaking. It recharges after 1 hour. Dispersion Plating Heavy Armor, Power Armor 4000 7 Increases armor by +4 against burst attacks. Empowered Servos Power Armor 2500 7 Increase STR bonus by +1 Extra Dense Plate Power Armor 5000 6 Increase Armor by +6, reduce Speed by -2, can\u2019t run, increase defense penalty by -3. Extra Enhancement HES 2500 8 Increase AGI +1 Energy Repellant Heavy Armor, Power Armor 3000 7 Select a type of energy damage such as fire, increase armor by +4 against that type. Extra Reinforcement All Armors 1000 4 Increase Armor by resistance rating. Flexible All Armors 500 5 Reduce defense penalty by 2. Improved Cloak HES 8000 8 The suit no longer limits how much cloaking the user is capable of every hour. Kinetic Foam Power Armor 3000 8 Gain the Impact Cushion trait. Medical Delivery System Power Armor 1500 8 This armor has a special medical delivery system built into the arm designed to beam nano-conveyed anesthetics to injured patients. Using the MDS is a limited free action that can target any ally within 3 squares. Heal as if using a Medkit. Propaganda Broadcast Array Power Armor 1000 6 Leadership affects twice as many targets, bonuses last until the end of the encounter. Psi-Blocker Heavy Armor, Power Armor 5000 8 This armor gives the user Resolve armor equal to his Spirit / 2. Shadow Armor All Armors 250 4 Gain the Shadowed trait. Umojan Protection Chip All Armors 1000 7 Gain the Umojan Networking trait. Melee Weapons MELEE WEAPONS While melee combat has somewhat waned amongst Terrans in the far future, many still rely on a close combat side arm to survive, especially against an onrushing Zerg swarm. Having a melee weapon on one\u2019s person could mean the difference between life and death. MELEE WEAPON TABLE WEAPON NAME DAMAGE AP REACH MIN STR WEIGHT COST NOTES Combat Knife Str+d6+2 - 0 d4 4 100 Can be thrown at range 5/10/20 Directorate Boarding Saw Str+d12+6 6 1-2 d12 20 15000 Two-Hands, Heavy Weapon, Cleaving, Slow Fusion Rod Str+d8 STR/2 1 - 2 3000 Stun, Energy Weapon, Smashing Power Glove Str+d10 STR/2 0 - - 5000 Smashing, Heavy Weapon Promethean Blade Str+d10+2 4 0-1 d10 12 6000 Flames, Defensive, Versatile, Heavy Weapon, Umojan Exclusive Weapon Psiblade Str+d10+1 Psi lvl 1 d4 4 7500 Defensive, Psionic Shock Blade Str+d12 4 0-1 d6 6 15000 Defensive, Energy Weapon, Energy Drain, St Sonic Hammer Str+d12+4 STR/2 1 d12 17 10000 Two-Hands, Heavy Weapon, Cleaving, Slow Stunner Str+d6 - 0-1 - 1 500 Stun, Energy Damage Sword Str+d10+2 2 1 d8 8 1250 Defensive, Versatile Sword, Dueling Str+d10 2 1 d6 6 1500 Defensive Tool, Light Str+d8 STR/2 1 d4 3 75 Smashing Tool, Heavy Str+d12 STR/2 1 d8 8 250 Two-Hands, Smashing, Cleaving, Slow Unarmed, Reinforced Str+d6 - 0 - 2 100 Concealed Weapon Unarmed, Power Armor Str+d8 - 0 - - - MELEE WEAPON TRAITS Armor Piercing (AP) The weapon or round ignores this many points of a target\u2019s Armor. Cleaving This weapon can strike any target in a small burst area centered on the character using the weapon despite being a melee weapon. The attack may exclude the character and any allies from the attack. Unlike other attacks with an area of effect cleaving is not considered an area attack for evading Concealed Weapon This weapon, even when equipped, is especially difficult to notice. It takes a perception check with -4 penalty while searching the target to notice the character is carrying the weapon. Defensive When the character has a weapon with this trait out and drawn, they add +1 to their defense against melee attacks. Energy Damage This weapon deals damage in the form of some manner of energy such as a laser, flame, or electricity. Energy damage attacks ignore the armor bonus of light armors. Energy Drain This weapon deals EMP Damage. When a target is hit by an EMP attack, resolve damage as usual. Then, if the damage equals or exceeds the target\u2019s Toughness, all the target\u2019s carried, worn, or attached electronics are \"knocked out\" as well. Cyberware, vehicles, power armor, robots, and sturdy gear meant for combat or hazardous environments continue to function but at a \u22124 penalty to any linked rolls. They may be reset or rebooted with an Engineering roll (at the same \u22124 penalty) and a limited action. EMP damage also reduces the Pace of Power Armor users by 4. Flames It gives targets the Burning condition if the attack surpasses defense. Burning characters take one wound at the start of each turn. The burning condition can be removed by making an Agility roll. Heavy Weapon (HW): The weapon can affect vehicles or other devices with Heavy Armor. It causes Gritty Wounds against targets without Heavy Armor. Reach: Weapons with \u201cReach\u201d allow their user to make Fighting attacks at the listed range. A Reach of 1, for example, allows a character to strike a target 1\u2033 distant. Weapons without a Reach value can only strike targets at arm\u2019s length (adjacent). Psionic Burst This weapon\u2019s damage goes vs Resolve rather than Toughness. Psionic This weapon can only be used by a psionic character. It gains an amount of penetration equal to the character\u2019s Psi Level. Slow This weapon\u2019s multi action penalty increases to -4 per extra action. Smashing This weapon gains AP = Strength / 2. Stun If an attack with this weapon bypasses the target\u2019s defense and leaves the target Shaken, they must make a Vigor check (at -2 on a raise). If they fail the Vigor check, they are Distracted and Vulnerable. If the attack would Wound the target, they make the same check but are instead Stunned if they fail. Two Hands: A two-handed weapon can be used with one hand at a -4 penalty. The character counts his full Strength for damage but loses all other advantages such as Reach or Defense bonuses. Versatile This weapon can be used in either one or two hands. Ranged Weapons RANGED WEAPONS Pistols are basic one-handed ranged projectile weapons. They are standard side-arms, and most Terrans in the dangerous Koprulu sector have some familiarity with them by the time of the Second Great War. Any pistol class weapon can be used to make a Pistol Whip attack in close combat that deals STR+d8 and has the Stun trait. Rifles include most two-handed ranged weapons, but beyond that they vary greatly. The rifles category includes sniper rifles, shotguns, assault rifles, and submachine guns. Any rifle class weapon can be used to make a Rifle Butt attack in close combat that deals STR+d10 and has the Stun trait. The exception to this is if the character is wearing powered armor in which the rifle can be used as a one-handed weapon, except the character cannot aim with the weapon while using it this way. Heavy weapons include some of the largest and most powerful portable weaponry such as fast firing chainguns, flamethrowers, and rocket launchers. Due to the size and encumbrance of these weapons, they cannot be used to make melee attacks, nor can they be used in one hand. Heavy Weapons do not require a grip extension to be used with power armor. FIREARMS TYPE RANGE DAMAGE AP ROF SHOTS MIN STR WEIGHT COST NOTES Pistols Pistol, Combat FWG5 12/24/48 1d8+2 0 1 15 d4 2 250 Energy Damage Pistol, Hand Cannon 12/24/48 2d12 2 2 6 d8 7 4000 Recoil Pistol, Flak 12/24/48 2d12+3 - 1 12 d8 10 1000 Recoil, Flak Shot, Spread Pistol, Gauss 24/48/96 1d8 4 3 20 d4 3 1500 Grip Extension Pistol, Gauss Repeating, P45 Scythe 25/50/100 1d8 4 4 50 d4 7 2500 Hailfire (1), Grip Extension Pistol, Needle 12/24/48 1d8 0 2 15 d4 3 1500 Poisonous Rounds, Silent Revolver, Light 6/12/24 2d8 0 2 6 d4 1 250 Revolver, Heavy 12/24/48 2d10+1 0 2 6 d6 4 500 Rifles Canister Rifle, C-10 50/100/200 2d12+4 2 2 30 d8 30 10000 Scope, Special Ammo Launcher, Targeting Laser Gauss Rifle, Assault 50/100/200 2d8 4 4 60 d6 14 5000 Hailfire (1), Scope, Attached Grenade Launcher Gauss Rifle, Heavy 50/100/200 2d8+1 4 5 150 d8 25 6000 Hailfire (2), Grip Extension, Recoil Gauss Rifle, Sniper 50/100/200 2d12+2 4 1 20 d6 11 7500 Digital Scope, Grip Extension Rifle, Auto 25/50/100 2d8+1 - 4 60 d6 11 3000 Hailfire (1), Scope Rifle, Flak 50/100/200 2d8+3 - 2 25 d8 25 10000 Flak Shot, Spread, Recoil Rifle, Needle 50/100/200 1d8+2 - 2 10 d4 8 6000 Poisonous Rounds, Silent Rifle, Long 25/50/100 2d10 - 1 6 d4 7 250 Scope Rifle, Sniper 25/50/100 2d12 2 1 4 d6 10 5000 Scope Shotguns Shotgun 6/12/24 1-3d6 - 1 2 d6 7 500 Spread, Twin-Linked, Close Quarters Shotgun, Automatic 6/12/24 1-3d6 - 3 12 d8 20 8000 Spread, Recoil Shotgun, Torrent SR-8 6/12/24 1-3d6 - 2 10 d6 7 3000 Spread, Close Quarters Heavy Weapons Chaingun 50/100/200 2d12 1 5 250 d12 50 6000 Heavy Weapon, Extreme Recoil, Hailfire (2) Cannon, Flak 100/200/400 2d12+3 3 4 40 d10 40 30000 Heavy Weapon, Recoil, Flak Shot, Spread, High Explosive, Hailfire (1) Cannon, Gauss 50/100/200 2d10+1 4 5 300 d12 60 15000 Heavy Weapon, Extreme Recoil, Hailfire (3) Cannon, Pulse 100/200/400 6d12+6 - 1 1 d8 30 40000 Heavy Weapon, Digital Scope, Extreme Recoil, Energy Drain, Umojan Networking, Umojan Exclusive Flamethrower Cone 6 4d6+2 2 2 30 d10 40 5000 Hailfire (1), Energy Damage, Flames, High Explosive, Close Quarters Flamethrower, Infernal Line 20 4d6+4 2 2 30 d8 30 8000 Hailfire (1), Energy Damage, Flames, High Explosive, Close Quarters Launcher, Rocket 50/100/200 * * 1 3 d8 30 7500 High Explosive Launcher, Grenade 25/50/100 * * 1 6 d6 20 7500 Recoil, High Explosive RANGED WEAPON TRAITS Acid Damage This weapon deals damage in the form of some manner of chemical such as acid or bio-plasma. On the target\u2019s next turn, he suffers the weapon\u2019s base damage minus one die type (for one additional turn only). If hit with a 3d6 damage weapon, for example, the target takes 3d4 damage at the start of his next turn. If the base damage is already a d4 die type, it is d4\u22122 instead. Armor Piercing (AP) The weapon or round ignores this many points of a target\u2019s Armor. Burst (SB/MB/LB) When this weapon is used, it makes an attack against all targets within a burst area in size based on the value under the weapon description. Close Quarters Characters get no unarmed combatant bonus for attacking you in melee. Concealed Weapon This weapon, even when equipped, is especially difficult to notice. It takes a perception check with -4 penalty while searching the target to notice the character is carrying the weapon. Digital Scope When aiming, this weapon gains a +2 bonus to the next Ranged attack. The character ignores all penalties related to concealment or darkness. These bonuses do not function if the character moves before shooting. Finally, the digital scope can be used to perform a detector action. Energy Damage This weapon deals damage in the form of some manner of energy such as a laser, flame, or electricity. Energy damage attacks ignore the armor bonus of light armors. Energy Drain This weapon deals EMP Damage. EMP attacks ignore armor. Organics can only be Shaken. Constructs, Shields and Vehicles take full damage. All of the target\u2019s carried, worn, or attached electronics are \"knocked out\" as well. Cyberware, power armor and sturdy gear meant continue to function but at a \u22124 penalty to any linked rolls. They may be reset or rebooted with an Engineering roll (at the same \u22124 penalty) and a Limited Action. EMP damage also reduces the Pace of Power Armor users by 4 for 1 round. Extreme Recoil Due to the weapon\u2019s extreme kickback, any attacks beyond the first in a round with this weapon suffer a -4 cumulative penalty unless t"
    }
  ],
  "armor": [
    {
      "name": "Flight Suit",
      "category": "Light Armor",
      "armor": 4,
      "class": "Light",
      "boost": "-",
      "weight": "25 lbs.",
      "cost": 900,
      "defMod": 0,
      "mounted": "Digital Uplink",
      "traits": "Elemental Protection, Oxygen Supply",
      "desc": "Flight Suits are generally issued to pilots of Terran starships and aerial combat vessels. In addition to giving some protection against cockpit explosions, they have basic protective armor so pilots can survive an ejection and trek through hostile territory. Visors provide digital uplinks for situational awareness."
    },
    {
      "name": "Padded Jacket",
      "category": "Light Armor",
      "armor": 2,
      "class": "Light",
      "boost": "-",
      "weight": "4 lbs.",
      "cost": 150,
      "defMod": 0,
      "mounted": "NA",
      "traits": "None",
      "desc": "Bare minimum armor consisting of a thick jacket with layers of protective fiber. Hand-crafted by colonists, civilians, or gang members during invasions."
    },
    {
      "name": "Protective Vest",
      "category": "Light Armor",
      "armor": 5,
      "class": "Light",
      "boost": "-",
      "weight": "8 lbs.",
      "cost": 250,
      "defMod": -1,
      "mounted": "NA",
      "traits": "None",
      "desc": "A step up from the padded jacket, this bullet-retardant chest armor protects vital areas against small arms slug projectiles."
    },
    {
      "name": "Shadowguard Field Armor",
      "category": "Light Armor",
      "armor": 4,
      "class": "Light",
      "boost": "Agi+",
      "weight": "10 lbs.",
      "cost": 8000,
      "defMod": 0,
      "mounted": "Communicator",
      "traits": "Umojan Networking, Personal Cloaking, Armor Decay, Umojan Exclusive, Concealable",
      "desc": "A black and white body suit that possesses state-of-the-art physical attribute augmentation in a thin, sleek package. Designed to be worn beneath heavy clothing (-4 Perception to realize it is worn). Supports Cloaking and disintegrates upon death within 1 minute."
    },
    {
      "name": "Stealth Suit",
      "category": "Light Armor",
      "armor": 1,
      "class": "Light",
      "boost": "-",
      "weight": "3 lbs.",
      "cost": 200,
      "defMod": 0,
      "mounted": "NA",
      "traits": "Shadowed",
      "desc": "Skin-tight black body suit specifically designed to create minimal acoustic noise and reduce visual profile. Favored by assassins and ghosts-in-training."
    },
    {
      "name": "Combat Body Suit",
      "category": "Heavy Armor",
      "armor": 6,
      "class": "Heavy",
      "boost": "Str+",
      "weight": "30 lbs.",
      "cost": 3000,
      "defMod": 0,
      "mounted": "Communicator, Protective Mask",
      "traits": "Elemental Protection, Radiation Shielding, Oxygen Supply",
      "desc": "Combines light infantry body armor with a hazard suit. Segmented protective plating allows high mobility. Features charge servos that accelerate the user's Strength. Used by Dominion Reapers with jump packs."
    },
    {
      "name": "Commander\u2019s Battle Regalia",
      "category": "Heavy Armor",
      "armor": 5,
      "class": "Heavy",
      "boost": "-",
      "weight": "25 lbs.",
      "cost": 4000,
      "defMod": -1,
      "mounted": "Communicator",
      "traits": "Cumbersome, Oxygen Supply, Self-Medicating",
      "desc": "Personalized military uniform with underlaid mesh fiber and lightweight protective plating, collar communicator, pocket oxygen mask, and torso medical injectors."
    },
    {
      "name": "Environmental Suit",
      "category": "Heavy Armor",
      "armor": 2,
      "class": "Heavy",
      "boost": "-",
      "weight": "30 lbs.",
      "cost": 300,
      "defMod": -3,
      "mounted": "NA",
      "traits": "Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply",
      "desc": "Full-body protective garment for science and civilian personnel in hazardous radiation leakage, toxic planets, or vacuum. Bulky and unhardened against ballistics."
    },
    {
      "name": "Flak Armor",
      "category": "Heavy Armor",
      "armor": 6,
      "class": "Heavy",
      "boost": "-",
      "weight": "30 lbs.",
      "cost": 500,
      "defMod": -1,
      "mounted": "NA",
      "traits": "Cumbersome",
      "desc": "Reinforced suits designed to absorb blasts, protect from shrapnel, and offer moderate protection against ballistic projectiles."
    },
    {
      "name": "Hostile Environment Suit",
      "category": "Heavy Armor",
      "armor": 8,
      "class": "Heavy",
      "boost": "Str+",
      "weight": "15 lbs.",
      "cost": 10000,
      "defMod": 0,
      "mounted": "Communicator",
      "traits": "Elemental Protection, Radiation Shielding, Oxygen Supply, Personal Cloaking, Armor Decay",
      "desc": "Hostile Environment Suits are the armor of choice for Ghosts. Allowing them to cloak and serve as optimal assassins, these suits also add to the user\u2019s physical prowess (+1 Strength die step) and provide heavy ballistic protection (+8 Armor). Full life support in vacuum and radiation. Seamlessly powers Tactical Mask I for magnification and darkvision. Features Armor Decay to dissolve into dust upon operative death."
    },
    {
      "name": "Light Combat Armor",
      "category": "Heavy Armor",
      "armor": 8,
      "class": "Heavy",
      "boost": "-",
      "weight": "25 lbs.",
      "cost": 800,
      "defMod": -1,
      "mounted": "Communicator",
      "traits": "Cumbersome",
      "desc": "Heavily reinforced suit designed to protect from the rigors of personal combat with greater maneuverability than CMC powered armor."
    },
    {
      "name": "5-4 Armored Infantry Suit",
      "category": "Powered Armor",
      "armor": 20,
      "class": "Powered",
      "boost": "Str++++",
      "weight": "600 lbs.",
      "cost": 25000,
      "defMod": -4,
      "mounted": "Flashlight x4, Geiger Counter, Communicator, Grenade Launcher x2, Navigation Unit, Digital Uplink, Gravity Boots, Equipment Belt, Backpack",
      "traits": "Powered Armor, Extremely Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (2), Bulky, Marauder Grenade Launchers*",
      "desc": "Pinnacle of personal protective equipment (Marauder suit), turning its user into a walking fortress equipped with dual heavy grenade launchers."
    },
    {
      "name": "CMC-200 Powered Combat Armor",
      "category": "Powered Armor",
      "armor": 13,
      "class": "Powered",
      "boost": "Str+++",
      "weight": "400 lbs.",
      "cost": 2500,
      "defMod": -3,
      "mounted": "Geiger Counter, Communicator, Gravity Boots, Backpack",
      "traits": "Powered Armor, Very Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply",
      "desc": "Classic Great War powered armor still used by backwater marshals, mercenaries, and rebels."
    },
    {
      "name": "CMC-300 Powered Combat Armor",
      "category": "Powered Armor",
      "armor": 15,
      "class": "Powered",
      "boost": "Str++++",
      "weight": "400 lbs.",
      "cost": 5000,
      "defMod": -3,
      "mounted": "Flashlight x2, Geiger Counter, Communicator, Gravity Boots, Binoculars, Navigation Unit, Digital Uplink, Equipment Belt, Backpack",
      "traits": "Powered Armor, Very Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (2)",
      "desc": "Standard issue Terran Marine powered suit offering full-body sealed protection, strength augmentation, and automated stim injectors."
    },
    {
      "name": "CMC-400 Powered Combat Armor",
      "category": "Powered Armor",
      "armor": 16,
      "class": "Powered",
      "boost": "Str++++",
      "weight": "400 lbs.",
      "cost": 10000,
      "defMod": -3,
      "mounted": "Flashlight x4, Geiger Counter, Communicator, Gravity Boots, Binoculars, Navigation Unit, Digital Uplink, Equipment Belt, Backpack",
      "traits": "Powered Armor, Very Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (4)",
      "desc": "Elite powered armor utilized by special operations forces, front-line officers, and high-ranking shock troops."
    },
    {
      "name": "CMC-405 Powered Light Combat Armor",
      "category": "Powered Armor",
      "armor": 12,
      "class": "Powered",
      "boost": "Str+++",
      "weight": "250 lbs.",
      "cost": 9000,
      "defMod": -2,
      "mounted": "Flashlight x4, Geiger Counter, Communicator, Gravity Boots, Binoculars, Navigation Unit, Digital Uplink, Equipment Belt, Backpack",
      "traits": "Powered Armor, Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (4)",
      "desc": "Light powered armor developed for medics, field reporters, technicians, and reconnaissance units needing mobility."
    },
    {
      "name": "CMC-660 Powered Combat Armor (Firebat)",
      "category": "Powered Armor",
      "armor": 20,
      "class": "Powered",
      "boost": "Str++++",
      "weight": "600 lbs.",
      "cost": 21000,
      "defMod": -4,
      "mounted": "Flashlight x4, Geiger Counter, Communicator, Flamethrower x2, Binoculars, Gravity Boots, Digital Uplink, Equipment Belt, Backpack",
      "traits": "Powered Armor, Extremely Cumbersome, Elemental Protection, Radiation Shielding, Oxygen Supply, Self-Medicating, Fall Protection (2), Bulky, Firebat Flamethrowers*",
      "desc": "Super-heavy Firebat combat suit with integrated arm-mounted flamethrowers and heat-deflecting thermal plating."
    },
    {
      "name": "Ballistic Combat Shield",
      "category": "Shields",
      "armor": 0,
      "class": "Shield",
      "boost": "Defense +2, Cover +4",
      "weight": "15 lbs.",
      "cost": 1000,
      "defMod": 2,
      "mounted": "NA",
      "traits": "Min Str d6",
      "desc": "High-density polymer shield granting +2 Defense in melee and +4 Cover bonus against ranged ballistic attacks."
    }
  ],
  "weapons": [
    {
      "name": "Combat Knife",
      "type": "Melee",
      "range": "Melee",
      "damage": "Str+d4",
      "ap": 0,
      "rof": 1,
      "shots": "-",
      "minStr": "d4",
      "weight": "1",
      "cost": 50,
      "notes": "Concealed Weapon"
    },
    {
      "name": "Bayonet",
      "type": "Melee",
      "range": "Melee",
      "damage": "Str+d6",
      "ap": 0,
      "rof": 1,
      "shots": "-",
      "minStr": "d4",
      "weight": "2",
      "cost": 75,
      "notes": "Attached to Rifle"
    },
    {
      "name": "Chainsword",
      "type": "Melee",
      "range": "Melee",
      "damage": "Str+d8+2",
      "ap": 4,
      "rof": 1,
      "shots": "-",
      "minStr": "d6",
      "weight": "6",
      "cost": 750,
      "notes": "Versatile"
    },
    {
      "name": "Vibroblade",
      "type": "Melee",
      "range": "Melee",
      "damage": "Str+d6+2",
      "ap": 4,
      "rof": 1,
      "shots": "-",
      "minStr": "d4",
      "weight": "3",
      "cost": 500,
      "notes": "Defensive"
    },
    {
      "name": "Psi Blade",
      "type": "Melee",
      "range": "Melee",
      "damage": "Str+d8+PL",
      "ap": "PL",
      "rof": 1,
      "shots": "-",
      "minStr": "d6",
      "weight": "2",
      "cost": 2500,
      "notes": "Psionic, Energy Damage"
    },
    {
      "name": "FWG5 Combat Pistol",
      "type": "Pistol",
      "range": "12/24/48",
      "damage": "1d8+2",
      "ap": 0,
      "rof": 1,
      "shots": 15,
      "minStr": "d4",
      "weight": "2",
      "cost": 250,
      "notes": "Energy Damage"
    },
    {
      "name": "Gauss Pistol",
      "type": "Pistol",
      "range": "24/48/96",
      "damage": "1d8",
      "ap": 4,
      "rof": 3,
      "shots": 20,
      "minStr": "d4",
      "weight": "3",
      "cost": 1500,
      "notes": "Grip Extension"
    },
    {
      "name": "Gauss Repeating Pistol (P45 Scythe)",
      "type": "Pistol",
      "range": "25/50/100",
      "damage": "1d8",
      "ap": 4,
      "rof": 4,
      "shots": 50,
      "minStr": "d4",
      "weight": "7",
      "cost": 2500,
      "notes": "Hailfire (1), Grip Extension"
    },
    {
      "name": "Needle Pistol",
      "type": "Pistol",
      "range": "12/24/48",
      "damage": "1d8",
      "ap": 0,
      "rof": 2,
      "shots": 15,
      "minStr": "d4",
      "weight": "3",
      "cost": 1500,
      "notes": "Poisonous Rounds, Silent"
    },
    {
      "name": "Light Revolver",
      "type": "Pistol",
      "range": "6/12/24",
      "damage": "2d8",
      "ap": 0,
      "rof": 2,
      "shots": 6,
      "minStr": "d4",
      "weight": "1",
      "cost": 250,
      "notes": "-"
    },
    {
      "name": "Heavy Revolver",
      "type": "Pistol",
      "range": "12/24/48",
      "damage": "2d10+1",
      "ap": 0,
      "rof": 2,
      "shots": 6,
      "minStr": "d6",
      "weight": "4",
      "cost": 500,
      "notes": "-"
    },
    {
      "name": "Hand Cannon",
      "type": "Pistol",
      "range": "12/24/48",
      "damage": "2d12",
      "ap": 2,
      "rof": 2,
      "shots": 6,
      "minStr": "d8",
      "weight": "7",
      "cost": 4000,
      "notes": "Recoil"
    },
    {
      "name": "Flak Pistol",
      "type": "Pistol",
      "range": "12/24/48",
      "damage": "2d12+3",
      "ap": 0,
      "rof": 1,
      "shots": 12,
      "minStr": "d8",
      "weight": "10",
      "cost": 1000,
      "notes": "Recoil, Flak Shot, Spread"
    },
    {
      "name": "C-10 Canister Rifle",
      "type": "Rifle",
      "range": "50/100/200",
      "damage": "2d12+4",
      "ap": 4,
      "rof": 2,
      "shots": 30,
      "minStr": "d8",
      "weight": "30",
      "cost": 10000,
      "notes": "Scope, Special Ammo Launcher, Targeting Laser, AP 4"
    },
    {
      "name": "Gauss Assault Rifle (C-14 Impaler)",
      "type": "Rifle",
      "range": "50/100/200",
      "damage": "2d8",
      "ap": 4,
      "rof": 4,
      "shots": 60,
      "minStr": "d6",
      "weight": "14",
      "cost": 5000,
      "notes": "Hailfire (1), Scope, Attached Grenade Launcher"
    },
    {
      "name": "Heavy Gauss Rifle",
      "type": "Rifle",
      "range": "50/100/200",
      "damage": "2d8+1",
      "ap": 4,
      "rof": 5,
      "shots": 150,
      "minStr": "d8",
      "weight": "25",
      "cost": 6000,
      "notes": "Hailfire (2), Grip Extension, Recoil"
    },
    {
      "name": "Sniper Gauss Rifle",
      "type": "Rifle",
      "range": "50/100/200",
      "damage": "2d12+2",
      "ap": 4,
      "rof": 1,
      "shots": 20,
      "minStr": "d6",
      "weight": "11",
      "cost": 7500,
      "notes": "Digital Scope, Grip Extension"
    },
    {
      "name": "Auto Rifle",
      "type": "Rifle",
      "range": "25/50/100",
      "damage": "2d8+1",
      "ap": 0,
      "rof": 4,
      "shots": 60,
      "minStr": "d6",
      "weight": "11",
      "cost": 3000,
      "notes": "Hailfire (1), Scope"
    },
    {
      "name": "Flak Rifle",
      "type": "Rifle",
      "range": "50/100/200",
      "damage": "2d8+3",
      "ap": 0,
      "rof": 2,
      "shots": 25,
      "minStr": "d8",
      "weight": "25",
      "cost": 10000,
      "notes": "Flak Shot, Spread, Recoil"
    },
    {
      "name": "Needle Rifle",
      "type": "Rifle",
      "range": "50/100/200",
      "damage": "1d8+2",
      "ap": 0,
      "rof": 2,
      "shots": 10,
      "minStr": "d4",
      "weight": "8",
      "cost": 6000,
      "notes": "Poisonous Rounds, Silent"
    },
    {
      "name": "Long Rifle",
      "type": "Rifle",
      "range": "25/50/100",
      "damage": "2d10",
      "ap": 0,
      "rof": 1,
      "shots": 6,
      "minStr": "d4",
      "weight": "7",
      "cost": 250,
      "notes": "Scope"
    },
    {
      "name": "Sniper Rifle",
      "type": "Rifle",
      "range": "25/50/100",
      "damage": "2d12",
      "ap": 2,
      "rof": 1,
      "shots": 4,
      "minStr": "d6",
      "weight": "10",
      "cost": 800,
      "notes": "Scope, Recoil"
    }
  ],
  "gear": [
    {
      "name": "Digital Uplink II",
      "category": "Electronics & Visors",
      "cost": 2000,
      "weight": "1 lb.",
      "desc": "Visor and HUD targeting uplink system. Grants +2 bonus to Tactics, Pilot, and Leadership rolls to activate combat maneuvers; allows issuing leadership orders outside visual and audio range. Tier 2 grants a +1 bonus to Ranged, Athletics, Computers, Medicine, Lore, Perception, Science, and Stealth skills. Requires a Fusion Power Cell."
    },
    {
      "name": "Tactical Mask I",
      "category": "Protective Headgear & Optics",
      "cost": 1500,
      "weight": "2 lbs.",
      "desc": "Used with Hostile Environment Suits and Combat Body Suits. Stationary zooming grants +1 to Perception checks, 30 squares darkvision (ignoring darkness penalties), and magnification to detect cloaked and invisible creatures."
    },
    {
      "name": "Motion Detector II",
      "category": "Sensors & Detection",
      "cost": 1200,
      "weight": "3 lbs.",
      "desc": "Sensory scanner unit capable of detecting physical movements through walls, solid bulkheads, and terrain within standard tactical scan range."
    },
    {
      "name": "Bio-Mechanical Nanites",
      "category": "Medical & Cybernetics",
      "cost": 3000,
      "weight": "1 lb.",
      "desc": "Microscopic medical repair nanites capable of accelerating biological tissue healing, clotting deep lacerations, and repairing cybernetic limbs in the field."
    },
    {
      "name": "Trauma Kit",
      "category": "Medical",
      "cost": 800,
      "weight": "5 lbs.",
      "desc": "Advanced emergency surgical kit containing coagulants, sterilizers, and stabilization tools to treat critically wounded or bleeding personnel."
    },
    {
      "name": "Medipack",
      "category": "Medical",
      "cost": 250,
      "weight": "2 lbs.",
      "desc": "Standard military first-aid kit containing trauma dressings, antiseptics, pain blockers, and wound treatment supplies."
    },
    {
      "name": "Injector",
      "category": "Medical",
      "cost": 100,
      "weight": "0.5 lb.",
      "desc": "Automated hypospray device for rapid, single-action administration of stimulants, antitoxins, or medical compounds directly into the bloodstream."
    },
    {
      "name": "Communicators",
      "category": "Communications",
      "cost": 150,
      "weight": "0.5 lb.",
      "desc": "Encrypted short-to-medium range squad-level tactical transceiver with encrypted channels and noise-cancelling audio filters."
    },
    {
      "name": "Backpack & Equipment Belt",
      "category": "Load Bearing",
      "cost": 100,
      "weight": "3 lbs.",
      "desc": "High-durability load-bearing gear and modular tactical pouches designed to carry essential gear without incurring encumbrance penalties."
    },
    {
      "name": "Canteen & MRE Rations (x2)",
      "category": "Field Survival",
      "cost": 50,
      "weight": "3 lbs.",
      "desc": "Self-purifying fluid container and nutrient-dense, self-heating field rations for sustained wilderness and infiltration missions."
    }
  ],
  "powers": [
    {
      "name": "Alter Style",
      "discipline": "Augmentation",
      "type": "Minor Power",
      "action": "1 Minute",
      "range": "Self",
      "sp": 0,
      "req": "Psi Level 2",
      "desc": "With a minute's light concentration you may alter the color or style of your hair. You may cause sections of hair to disappear or reappear or change length, achieving colors and textures nature would not dare."
    },
    {
      "name": "Alter Markings",
      "discipline": "Augmentation",
      "type": "Minor Power",
      "action": "10 Minutes",
      "range": "Self",
      "sp": 0,
      "req": "Psi Level 4",
      "desc": "With 10 minutes of concentration, you may create or remove markings on your skin, or alter your eye color. You can create a tattoo or marking, alter or remove a birthmark or blemish, or alter eye color."
    },
    {
      "name": "Alter Features",
      "discipline": "Augmentation",
      "type": "Minor Power",
      "action": "1 Hour",
      "range": "Self",
      "sp": 0,
      "req": "Psi Level 6",
      "desc": "With an hour's concentration, you may make dramatic alterations to your appearance. Change shape/texture of ears, grow fangs or tusks, change skin color and texture while remaining recognizably you."
    },
    {
      "name": "Acute Senses",
      "discipline": "Augmentation",
      "type": "Channeled Power",
      "action": "Limited Free Action",
      "range": "Self",
      "sp": 1,
      "req": "PL 1",
      "desc": "Sharpens eyesight and senses to be several times more potent. Gain +2 to Perception and Survival (Tracking) rolls. With a Raise, halve Called Shot and Range penalties. Lasts for PL rounds (or PL minutes at PL 3). At higher PLs grants special senses (Echolocation, Infravision, Low Light Vision, Scent)."
    },
    {
      "name": "Rush",
      "discipline": "Augmentation",
      "type": "Channeled Power",
      "action": "Free Action",
      "range": "Self",
      "sp": 2,
      "req": "PL 1",
      "desc": "Enhances leg musculature tremendously. Speed increases by PL, and move at 1/4 Speed (1/2 Speed at PL 4, 3/4 Speed at PL 8) without generating Free Attacks. Lasts PL rounds. At PL 6: increases Agility and Agility-based skills by +1 step (+2 on Raise)."
    },
    {
      "name": "Muscular Enhancement",
      "discipline": "Augmentation",
      "type": "Channeled Power",
      "action": "Limited Free Action",
      "range": "Self",
      "sp": 2,
      "req": "PL 2",
      "desc": "Mentally stimulates physical biology, gaining +1 to Athletics, Stealth, and Vigor rolls against Extreme Temperatures, Fatigue, Disease and Poison (+2 with a Raise). Lasts PL minutes (10 min/PL at PL 5). At PL 4: bonus also applies to Strength rolls."
    },
    {
      "name": "Enhanced Attributes",
      "discipline": "Augmentation",
      "type": "Channeled Power",
      "action": "Action",
      "range": "Self",
      "sp": 2,
      "req": "PL 3",
      "desc": "Increases one chosen Attribute by one die step (two on a Raise). Lasts PL rounds. At higher PL can affect additional attributes simultaneously."
    },
    {
      "name": "Stop Bleeding",
      "discipline": "Augmentation",
      "type": "Instant Power",
      "action": "Free Action",
      "range": "Self",
      "sp": 1,
      "req": "PL 4, Requires Muscular Enhancement",
      "desc": "Instantly coagulates blood to stop Bleeding Out and stabilize mortal lacerations."
    },
    {
      "name": "Deflection",
      "discipline": "Augmentation",
      "type": "Channeled Power",
      "action": "Limited Free Action",
      "range": "Self",
      "sp": 3,
      "req": "PL 4, Requires Muscular Enhancement",
      "desc": "Hyper-accelerates reflexes to dodge and deflect incoming projectiles. Enemies suffer -2 to hit the caster (-4 on a Raise) with ranged and melee attacks."
    },
    {
      "name": "Regeneration",
      "discipline": "Augmentation",
      "type": "Channeled Power",
      "action": "Limited Free Action",
      "range": "Self",
      "sp": 4,
      "req": "PL 5, Requires Toughness",
      "desc": "Knits wounds and restores biological tissues. Gains the Regeneration trait, healing 1 Wound at the start of every round. On a Raise gains the Hardy trait. Lasts 1/2 PL minutes (PL minutes at PL 8). At PL 7: heals 2 Wounds/round; at PL 9: heals 3 Wounds/round."
    },
    {
      "name": "Cellular Control",
      "discipline": "Augmentation",
      "type": "Channeled Power",
      "action": "Limited Free Action",
      "range": "Self",
      "sp": 3,
      "req": "PL 5",
      "desc": "Allows conscious control over metabolic systems. Grants immunity to poisons, diseases, suffocation, and extreme temperatures for the duration."
    },
    {
      "name": "Immortality",
      "discipline": "Augmentation",
      "type": "Channeled Power",
      "action": "Action",
      "range": "Self",
      "sp": 10,
      "req": "PL 6, Requires Toughness",
      "desc": "Operative form becomes perfect and invulnerable until end of next turn. Completely immune to all damage, injuries, abilities, attacks, and powers. Cannot be moved, pushed, or wounded."
    },
    {
      "name": "Skulk",
      "discipline": "Cloaking",
      "type": "Minor Power",
      "action": "Concentration",
      "range": "Self",
      "sp": 0,
      "req": "Psi Level 4",
      "desc": "Reduces psychic footprint in crowds. You are not specifically noticed within a crowd unless a searcher beats your Psionics check with an opposed Perception test."
    },
    {
      "name": "Cloaking",
      "discipline": "Cloaking",
      "type": "Sustained Power",
      "action": "Action (Limited Free at PL 3)",
      "range": "Self",
      "sp": 2,
      "req": "PL 1 (HES required below PL 8)",
      "desc": "Fades completely from sight and optical/electronic sensors. Counts as Cloaked (invisible), imposing a -4 penalty (-6 on Raise) on attacks and detection. Terrans must wear a Hostile Environment Suit to cloak unless PL 8+. Lasts minutes at PL 5, hours at PL 7. Costs 1 SP at PL 6, 0 SP at PL 10."
    },
    {
      "name": "Light Orb",
      "discipline": "Energy",
      "type": "Minor Power",
      "action": "Action",
      "range": "Self",
      "sp": 0,
      "req": "Psi Level 2",
      "desc": "Creates a floating orb of light above your head providing bright light within 2xPL squares. Moves with you and stays out of your line of sight."
    },
    {
      "name": "Light Panels",
      "discipline": "Energy",
      "type": "Minor Power",
      "action": "Action",
      "range": "Short",
      "sp": 0,
      "req": "Psi Level 3",
      "desc": "Creates free-floating rectangular panels of light (1 panel per 3 PL) with adjustable color, temperature, and intensity to illuminate rooms or scene areas."
    },
    {
      "name": "Backup Battery",
      "discipline": "Energy",
      "type": "Minor Power",
      "action": "Reaction",
      "range": "Touch",
      "sp": 0,
      "req": "Psi Level 5",
      "desc": "Powers electronic devices in the event of power loss. Acts as a tier-one power cell for 1 minute per PL per day."
    },
    {
      "name": "Energize Object",
      "discipline": "Energy",
      "type": "Instant Power",
      "action": "Action",
      "range": "Touch",
      "sp": 2,
      "req": "PL 2",
      "desc": "Infuses an item, weapon, or vehicle with psionic power, granting it the Energy Damage trait and +2 damage for PL rounds."
    },
    {
      "name": "Psionic Bolt",
      "discipline": "Energy",
      "type": "Instant Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 3,
      "req": "PL 3",
      "desc": "Releases a focused beam of pure psionic energy. Deals 3d6+PL energy damage on hit, +1d6 on Raise. Void power source adds +2 damage and double AP (AP 12 for Rick). At PL 10 ignores all armor."
    },
    {
      "name": "Psionic Burst",
      "discipline": "Energy",
      "type": "Instant Power",
      "action": "Action",
      "range": "Variable Area",
      "sp": 4,
      "req": "PL 4, Requires Psionic Bolt",
      "desc": "Releases an explosive wave of energy. Shapes: Burst (radius 1/2 PL), Line (2xPL long), or Cone (PL size). Deals 2d6+PL energy damage (AP 4 at PL 6). Void source strands entangle enemies (Hardness 8/10)."
    },
    {
      "name": "Force Fields",
      "discipline": "Energy",
      "type": "Persistent Power",
      "action": "Action",
      "range": "60 squares",
      "sp": 6,
      "req": "PL 5",
      "desc": "Summons 1 cubic square of solid force fields per PL anywhere within range. Blocks all movement, attacks, and projectiles. Hardness 10+PL, 4 Shield Points (+1 on Raise). Lasts 2xPL rounds. Void source can trap and bound foes inside."
    },
    {
      "name": "Spark & Reheat",
      "discipline": "Pyromancy",
      "type": "Minor Power",
      "action": "Action",
      "range": "Touch",
      "sp": 0,
      "req": "Psi Level 2",
      "desc": "Generates small igniting sparks or reheats cold food, liquid, or metal instantly with a thought."
    },
    {
      "name": "Flame Jet",
      "discipline": "Pyromancy",
      "type": "Instant Power",
      "action": "Action",
      "range": "Cone Template",
      "sp": 3,
      "req": "PL 2",
      "desc": "Projects a stream of intense fire in a Cone template. Deals 2d10+PL fire damage and inflicts the Burning condition (or Pyre stacks)."
    },
    {
      "name": "Heat Metal",
      "discipline": "Pyromancy",
      "type": "Sustained Power",
      "action": "Action",
      "range": "24 squares",
      "sp": 3,
      "req": "PL 3",
      "desc": "Superheats metallic weapons, armor, or equipment. Targets holding heated items drop them or suffer 2d8 damage per round."
    },
    {
      "name": "Wall of Fire",
      "discipline": "Pyromancy",
      "type": "Persistent Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 4,
      "req": "PL 4",
      "desc": "Creates a blazing barrier of fire that blocks passage and inflicts 3d8 damage + Pyre stacks to anything passing through."
    },
    {
      "name": "Password Manager & Device Access",
      "discipline": "Technomancy",
      "type": "Minor Power",
      "action": "Action",
      "range": "Touch",
      "sp": 0,
      "req": "Psi Level 2",
      "desc": "Instantly remembers, recalls, or bypasses simple consumer electronic passwords and basic digital locks."
    },
    {
      "name": "Mental Hack",
      "discipline": "Technomancy",
      "type": "Sustained Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 2,
      "req": "PL 2, Computers d4",
      "desc": "Directly interfaces with computers, drones, and security systems via mental link, halving hacking times and bypassing electronic countermeasures."
    },
    {
      "name": "Mental Transmission",
      "discipline": "Technomancy",
      "type": "Sustained Power",
      "action": "Action",
      "range": "10 Miles / PL",
      "sp": 2,
      "req": "PL 2",
      "desc": "Sends encrypted text and audio signals across radio frequencies and intercepts incoming enemy communications across a wide area."
    },
    {
      "name": "Haywire",
      "discipline": "Technomancy",
      "type": "Instant Power",
      "action": "Action",
      "range": "24 squares",
      "sp": 3,
      "req": "PL 3",
      "desc": "Causes electronic devices, robot limbs, or powered armor to malfunction, freeze, or discharge erratically for 1d4 rounds."
    },
    {
      "name": "Override",
      "discipline": "Technomancy",
      "type": "Persistent Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 5,
      "req": "PL 5",
      "desc": "Seizes full remote control of automated defense turrets, combat robots, or vehicle piloting systems."
    },
    {
      "name": "Telekinetic Reach & Hover",
      "discipline": "Telekinesis",
      "type": "Minor Power",
      "action": "Action",
      "range": "12 squares",
      "sp": 0,
      "req": "Psi Level 2",
      "desc": "Manipulates light objects (up to 5 lbs) at a distance or hovers a few inches off the ground to avoid tripwires and floor sensors."
    },
    {
      "name": "Manipulation",
      "discipline": "Telekinesis",
      "type": "Sustained Power",
      "action": "Action",
      "range": "24 squares",
      "sp": 2,
      "req": "PL 2",
      "desc": "Telekinetically lifts and maneuvers heavy objects with effective Strength equal to Spirit die + PL."
    },
    {
      "name": "Move Object / Kinetic Throw",
      "discipline": "Telekinesis",
      "type": "Instant Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 3,
      "req": "PL 3",
      "desc": "Hurls vehicles, debris, or enemies across 3xPL squares, dealing 3d8 to 3d12 kinetic damage upon impact."
    },
    {
      "name": "Kinetic Shield",
      "discipline": "Telekinesis",
      "type": "Sustained Power",
      "action": "Limited Free Action",
      "range": "Self",
      "sp": 3,
      "req": "PL 4",
      "desc": "Projects a localized barrier deflecting physical kinetic impacts, granting +4 Toughness against ballistic and blunt damage."
    },
    {
      "name": "Empathy & Read Surface",
      "discipline": "Telepathy",
      "type": "Minor Power",
      "action": "Free Action",
      "range": "12 squares",
      "sp": 0,
      "req": "Psi Level 2",
      "desc": "Senses immediate emotions, stress levels, and surface hostile intentions of nearby sentients."
    },
    {
      "name": "Reading",
      "discipline": "Telepathy",
      "type": "Instant Power",
      "action": "Action (Limited Free at PL 3)",
      "range": "6 squares (12 at PL 5)",
      "sp": 1,
      "req": "PL 1",
      "desc": "Reads surface thoughts or recent memories via telepathic link vs target Discipline. Success reveals thoughts/emotional state; Raise reveals deeper secrets without alerting target."
    },
    {
      "name": "Psychic Block / Thought Blocking",
      "discipline": "Telepathy",
      "type": "Sustained Power",
      "action": "Limited Free Action",
      "range": "Self",
      "sp": 1,
      "req": "PL 1",
      "desc": "Reinforces mental barriers. Grants +2 Discipline and Resolve against telepathic and psionic attacks (+3 on Raise). Lasts 1 hour."
    },
    {
      "name": "Meditation",
      "discipline": "Telepathy",
      "type": "Channeled Power",
      "action": "Action",
      "range": "Self",
      "sp": 0,
      "req": "PL 1",
      "desc": "Enters a deep trance to center psionic reserves. For every 10 minutes spent in Meditation (5 min at PL 5), recover 2 SPs (3 SPs at PL 3, 4 SPs at PL 7) and clear 1 level of Fatigue."
    },
    {
      "name": "Messaging",
      "discipline": "Telepathy",
      "type": "Instant Power",
      "action": "Free Action",
      "range": "1 Mile / PL",
      "sp": 1,
      "req": "PL 2",
      "desc": "Transmits silent telepathic messages directly into the mind of a willing or known recipient."
    },
    {
      "name": "Compulsion",
      "discipline": "Telepathy",
      "type": "Instant Power",
      "action": "Action",
      "range": "6 squares",
      "sp": 2,
      "req": "PL 3",
      "desc": "Overrides target mind with a single mental command ('Drop weapon', 'Move there', 'Attack ally') unless target beats Psionics with Discipline roll. Lasts 1 round (PL rounds at PL 4)."
    },
    {
      "name": "Hidden Sight",
      "discipline": "Telepathy",
      "type": "Sustained Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 1,
      "req": "PL 3",
      "desc": "Confuses target sensory perception, causing them not to perceive up to 1/2 PL medium creatures or objects."
    },
    {
      "name": "Hallucination",
      "discipline": "Telepathy",
      "type": "Channeled Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 3,
      "req": "PL 4",
      "desc": "Projects a fictional entity that looks, sounds, and smells completely real to all senses except touch. Lasts 3 rounds per PL."
    },
    {
      "name": "Stop Organ",
      "discipline": "Telepathy",
      "type": "Sustained Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 4,
      "req": "PL 4",
      "desc": "Telepathically manipulates target nervous system vs Discipline to shutdown Legs (-2 Defense/Athletics/Stealth), Arms (-2 Melee/Ranged), Lungs (Fatigue each round), Heart (Wounds each round), or Brain (Stunned)."
    },
    {
      "name": "Feedback",
      "discipline": "Telepathy",
      "type": "Instant Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 3,
      "req": "PL 4",
      "desc": "Causes a massive psionic spike in an opposing psychic's mind vs Discipline. Drains SP equal to 1/2 PL and inflicts 2d10 + SP drained psionic damage."
    },
    {
      "name": "Mind Blast",
      "discipline": "Telepathy",
      "type": "Instant Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 3,
      "req": "PL 5",
      "desc": "Melt a target's brain or skull with overwhelming mental shockwaves. Psionics vs Discipline deals 3d6 psionic damage (+1/2 PL at PL 6, becomes Small Burst at PL 7, Medium Burst at PL 9)."
    },
    {
      "name": "Command",
      "discipline": "Telepathy",
      "type": "Persistent Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 5,
      "req": "PL 5, Compulsion",
      "desc": "Brainwashes and controls an enemy for 1/2 PL rounds. Target follows commands without self-preservation."
    },
    {
      "name": "Mind Ripple",
      "discipline": "Telepathy",
      "type": "Instant Power",
      "action": "Exclusive Action",
      "range": "Burst (PL radius)",
      "sp": 5,
      "req": "PL 6, Mind Blast",
      "desc": "Radiating wave of mind-melting psionic energy dealing 4d6 psionic damage to all targets in burst area."
    },
    {
      "name": "Mind Overload",
      "discipline": "Telepathy",
      "type": "Instant or Channeled",
      "action": "1 or More Actions",
      "range": "30 squares",
      "sp": 4,
      "req": "PL 7, Mind Blast",
      "desc": "Charges mental fury across consecutive actions, dealing 2d12+PL psionic damage to a single target."
    },
    {
      "name": "Psionic Maelstrom",
      "discipline": "Telepathy",
      "type": "Persistent Power",
      "action": "Action",
      "range": "60 squares",
      "sp": 5,
      "req": "PL 7, Mind Blast",
      "desc": "Whirlwind of telepathic turbulence causing everyone in PL radius to become Distracted and Stunned."
    },
    {
      "name": "Dominate",
      "discipline": "Telepathy",
      "type": "Persistent Power",
      "action": "Action",
      "range": "30 squares",
      "sp": 10,
      "req": "PL 8, Compulsion",
      "desc": "Completely enslaves target mind with unflinching, uncompromising loyalty to the caster."
    }
  ]
};
