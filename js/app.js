/**
 * StarCraft Ghost Living Document & Interactive Compendium Engine (High-Performance)
 */

(function () {
  'use strict';

  // --- Audio Synthesis Engine ---
  const SoundFX = {
    ctx: null,
    muted: false,

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) this.ctx = new AudioContext();
      }
    },

    playTone(freq, type, duration, gainVal = 0.04) {
      if (this.muted) return;
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {}
    },

    click() { this.playTone(880, 'sine', 0.04, 0.02); },
    toggle() { this.playTone(540, 'triangle', 0.06, 0.03); },
    roll() {
      this.playTone(420, 'square', 0.05, 0.03);
      setTimeout(() => this.playTone(680, 'square', 0.07, 0.03), 40);
      setTimeout(() => this.playTone(950, 'sine', 0.1, 0.04), 80);
    },
    success() {
      this.playTone(523.25, 'sine', 0.08, 0.04);
      setTimeout(() => this.playTone(659.25, 'sine', 0.08, 0.04), 60);
      setTimeout(() => this.playTone(783.99, 'sine', 0.15, 0.05), 120);
    },
    alert() {
      this.playTone(300, 'sawtooth', 0.1, 0.05);
      setTimeout(() => this.playTone(220, 'sawtooth', 0.15, 0.05), 80);
    }
  };

  const DIE_STEPS = [4, 6, 8, 10, 12, 14, 16];
  const DIE_LABELS = { 0: '0', 4: 'd4', 6: 'd6', 8: 'd8', 10: 'd10', 12: 'd12', 14: 'd12+1', 16: 'd12+2' };

  function dieLabel(val) {
    if (!val) return '—';
    return DIE_LABELS[val] || `d${val}`;
  }

  function getSteppedDie(baseDie, stepOffset) {
    let idx = DIE_STEPS.indexOf(baseDie);
    if (idx === -1) idx = 0;
    let newIdx = Math.max(0, Math.min(DIE_STEPS.length - 1, idx + stepOffset));
    return DIE_STEPS[newIdx];
  }

  function formatTraitBoost(traitCode, steps) {
    if (steps > 0) return `${traitCode}${'+'.repeat(steps)}`;
    if (steps < 0) return `${traitCode}${'-'.repeat(Math.abs(steps))}`;
    return '';
  }

  const SKILL_ATTR_MAP = {
    athletics: 'agility',
    melee: 'agility',
    stealth: 'agility',
    insight: 'instinct',
    perception: 'instinct',
    pilot: 'instinct',
    ranged: 'instinct',
    survival: 'instinct',
    tactics: 'intelligence',
    computers: 'intelligence',
    engineering: 'intelligence',
    lore: 'intelligence',
    medicine: 'intelligence',
    science: 'intelligence',
    influence: 'spirit',
    leadership: 'spirit',
    psionics: 'spirit'
  };

  function getDefaultActiveBoosts() {
    return [
      {
        id: "boost_hes_suit",
        name: "Hostile Environment Suit",
        category: "Gear",
        type: "hes-suit",
        state: "active",
        targetAttr: "strength",
        hasRaise: false,
        desc: "Hermetic Ghost suit granting Str+ and +8 Armor to Toughness."
      },
      {
        id: "boost_digital_uplink",
        name: "Digital Uplink II",
        category: "Gear",
        type: "digital-uplink",
        state: "active",
        hasRaise: false,
        desc: "Tactical cyber-link granting +1 trait bonus to tech & tactical rolls (Tactics, Computers, Engineering, Lore, Medicine, Science, Ranged, Perception)."
      },
      {
        id: "boost_muscular_enh",
        name: "Muscular Enhancement",
        category: "Psionics (PL 4)",
        type: "muscular-enh",
        state: "off",
        hasRaise: true,
        desc: "+1 (+2 on Raise) to physical rolls (Strength rolls, Athletics, Stealth, and Vigor tests vs extreme environments/fatigue/disease/poison)."
      },
      {
        id: "boost_enhance_abilities_agi",
        name: "Enhance Abilities (Agility)",
        category: "Psionics (PL 3)",
        type: "enhance-abilities",
        targetAttr: "agility",
        state: "off",
        hasRaise: true,
        desc: "+1 die step (Agi+) on Success, +2 die steps (Agi++) on Raise to Agility and its linked skills (Athletics, Melee, Stealth)."
      },
      {
        id: "boost_thought_block",
        name: "Thought Blocking",
        category: "Psionics",
        type: "thought-block",
        state: "off",
        hasRaise: true,
        desc: "+1 (+3 on Raise) to Discipline and Resolve."
      },
      {
        id: "boost_stimpack",
        name: "Military Stimpack",
        category: "Chemical",
        type: "stimpack",
        state: "off",
        hasRaise: false,
        desc: "+2 Speed and Agi+ for the combat encounter."
      }
    ];
  }

  function getDefaultCharacter() {
    return {
      "id": "char_rick_kageyama",
      "name": "Rick Kageyama",
      "codename": "Operative Kageyama",
      "homeworld": "moria",
      "rank": "Seasoned",
      "cotLevel": "Operative",
      "trainingPath": "ghost",
      "concept": "Psionic Human operative from Moria (Kel-Morian Combine) channeling Void energy.",
      "psiRating": 5,
      "advancements": 4,
      "credits": 3325,
      "attributes": {
        "agility": 8,
        "strength": 6,
        "vigor": 6,
        "instinct": 6,
        "intelligence": 8,
        "spirit": 10
      },
      "skills": {
        "athletics": 6,
        "computers": 0,
        "engineering": 0,
        "insight": 6,
        "influence": 4,
        "leadership": 0,
        "lore": 8,
        "medicine": 8,
        "melee": 8,
        "perception": 6,
        "pilot": 0,
        "psionics": 10,
        "ranged": 6,
        "science": 0,
        "stealth": 8,
        "survival": 0,
        "tactics": 0
      },
      "activeBoosts": getDefaultActiveBoosts(),
      "tempAttributeMods": {
        "agility": 0, "strength": 0, "vigor": 0, "instinct": 0, "intelligence": 0, "spirit": 0
      },
      "tempSkillMods": {},
      "hindranceConversions": { "attributeSteps": 1, "edges": 1, "skillPoints": 0 },
      "hindrances": [
        { "name": "Death Wish", "type": "Minor", "desc": "Destroy the Confederacy at all costs." },
        { "name": "Delusional", "type": "Minor", "desc": "Believes he was chosen for a higher galactic purpose." },
        { "name": "Echoes of the Void", "type": "Minor", "desc": "Psychic static and dark visions from void energy manipulation." },
        { "name": "Emotional Isolation", "type": "Minor", "desc": "Distanced from comrades due to intense psionic conditioning." }
      ],
      "edges": [
        { "name": "Psionic Level +1", "req": "Novice", "desc": "Increases character's effective Psi Level by 1." },
        { "name": "Terran Energy Adept (Void)", "req": "Novice", "desc": "Specializes in void-infused energy manifestations and force fields." },
        { "name": "Psychic Discipline Focus (Energy)", "req": "Seasoned", "desc": "Reduces SP cost and improves effectiveness of Energy discipline powers." },
        { "name": "Psionic Level +1 (2)", "req": "Seasoned", "desc": "Further elevates Psi Rating to PL 5." },
        { "name": "Unbreakable Will (Moria)", "req": "Moria Origin", "desc": "Roll Spirit to avoid Morale loss from battlefield trauma." },
        { "name": "Scurry (Moria)", "req": "Moria Origin", "desc": "Gain a free reroll on Evasion tests." }
      ],
      "powers": [
        { "name": "Psionic Bolt", "discipline": "Energy", "desc": "3d6+5 (PL+2) + d6 on raise | AP 12 | Range 6 | 3 SP" },
        { "name": "Psionic Burst", "discipline": "Energy", "desc": "2d6+PL energy damage (AP 4 at PL 6) in variable area | 4 SP" },
        { "name": "Force Fields", "discipline": "Energy", "desc": "Summons 1 cubic square of force fields per PL (Hardness 10+PL, 4 Shield Points) | Range 60 | 6 SP" },
        { "name": "Cloaking", "discipline": "Augmentation", "desc": "Bends light & sensor waves rendering operative completely invisible | 3 SP" },
        { "name": "Reading", "discipline": "Telepathy", "desc": "Reads surface thoughts and memories via mental link | 1 SP" },
        { "name": "Compulsion", "discipline": "Telepathy", "desc": "Places a hypnotic suggestion forcing a single mental command vs Discipline | 2 SP" },
        { "name": "Muscular Enhancement", "discipline": "Augmentation", "desc": "+1 Athletics, Stealth, and Vigor tests against Fatigue/Poison (+2 on Raise) | 2 SP" },
        { "name": "Regeneration", "discipline": "Augmentation", "desc": "Heals 1 Wound per round for ½ PL minutes | 4 SP" },
        { "name": "Enhanced Attributes", "discipline": "Augmentation", "desc": "Increases chosen physical attribute (Agility, Instinct, or Strength) and all linked skills by +1 die step (+2 on Raise) | 3 SP" },
        { "name": "Light Orb (Minor)", "discipline": "Energy", "desc": "Floating orb providing bright light within 2xPL squares | 1 PP/min" },
        { "name": "Light Panels (Minor)", "discipline": "Energy", "desc": "Projects flat light panels on surfaces for inspection | Touch" },
        { "name": "Backup Battery (Minor)", "discipline": "Technomancy", "desc": "Acts as a tier 1 power cell for devices for 1 min per PL | 2 SP" },
        { "name": "Meditation", "discipline": "Telepathy", "desc": "Deep trance recovering 2 Stress Points & 1 Fatigue every 10 min | 0 SP" }
      ],
      "weapons": [
        { "name": "C-10 Canister Rifle", "range": "24/48/96", "damage": "2d12+4", "rof": "2", "ap": 4, "notes": "Anti-personnel canister sniper rifle (Shots: 10, Min Str d6)" },
        { "name": "FWG5 Combat Pistol", "range": "12/24/48", "damage": "2d6+1", "rof": "1", "ap": 2, "notes": "Standard Terran military sidearm (Shots: 12, Min Str d4)" },
        { "name": "Heavy Revolver", "range": "12/24/48", "damage": "2d10+1", "rof": "2", "ap": 2, "notes": "High-caliber magnum revolver (Shots: 6, Min Str d6)" },
        { "name": "Long Rifle", "range": "25/50/100", "damage": "2d10", "rof": "1", "ap": 2, "notes": "Precision hunting/sniper rifle with optical scope (Shots: 6)" },
        { "name": "Combat Knife", "range": "Melee", "damage": "Str+d4", "rof": "1", "ap": 1, "notes": "Close-quarters military blade" }
      ],
      "armor": {
        "name": "Hostile Environment Suit",
        "value": 8,
        "class": "Heavy",
        "boost": "Str+",
        "defMod": 0,
        "weight": "15 lbs.",
        "traits": "Elemental Protection, Radiation Shielding, Oxygen Supply, Personal Cloaking, Armor Decay",
        "mounted": "Communicator, Tactical Mask I",
        "notes": "Hermetic full-body pressure suit (+8 Armor, life-support, +1 Strength die step, Cloaking integration)"
      },
      "gear": [
        { "name": "Digital Uplink II", "count": 1, "notes": "+2 Tactics/Pilot/Leadership, +1 Ranged, Athletics, Computers, Med, Lore, Percep, Sci, Stealth" },
        { "name": "Tactical Mask I", "count": 1, "notes": "Environmental filtration & integrated HUD optics" },
        { "name": "Motion Detector II", "count": 1, "notes": "Detects movement through obstacles within range" },
        { "name": "Bio-Mechanical Nanites", "count": 1, "notes": "Accelerates biological healing & cyber repairs" },
        { "name": "Trauma Kit & Medipack", "count": 1, "notes": "Emergency surgical & field trauma stabilization" },
        { "name": "Communicators & Injector", "count": 1, "notes": "Encrypted radio & hypospray auto-injector" },
        { "name": "Backpack & Belt & Canteen", "count": 1, "notes": "Utility field rig & rations x2" }
      ],
      "cybernetics": [],
      "currentWounds": 0,
      "currentFatigue": 0,
      "stressPoints": 6,
      "isShaken": false,
      "isDistracted": false,
      "isVulnerable": false,
      "notes": "Rick Kageyama — Psionic Operative from Moria (Kel-Morian Combine). Advancements: 1) Agility, 2) Psychic Discipline Focus (Energy), 3) Athletics, Melee, Stealth, 4) PL Increase to 5."
    };
  }

  let characters = [];
  let currentCharacter = null;

  function getArmorStatModifiers(char) {
    const armor = char.armor;
    if (!armor || !armor.name || armor.name === 'Unarmored' || armor.name === 'None') {
      return { armorVal: 0, strStep: 0, agiStep: 0, defMod: 0, isHES: false, active: false };
    }

    const activeBoosts = char.activeBoosts || [];
    const isHES = (armor.name === 'Hostile Environment Suit' || armor.name === 'HES' || armor.name.toLowerCase().includes('hostile environment'));
    
    // Find matching boost in activeBoosts
    const boostEntry = activeBoosts.find(b => b.type === 'hes-suit' || b.id === 'boost_hes_suit' || b.name === armor.name || (b.category === 'Gear' && b.name && b.name.toLowerCase().includes('armor')));

    const isActive = boostEntry ? (boostEntry.state !== 'off') : false;

    if (!isActive) {
      return { armorVal: 0, strStep: 0, agiStep: 0, defMod: 0, isHES, active: false };
    }

    const armorVal = parseInt(armor.value ?? armor.armor, 10) || 0;
    const defMod = parseInt(armor.defMod, 10) || 0;

    let strStep = 0;
    let agiStep = 0;

    const boost = (armor.boost || (isHES ? 'Str+' : '')).toUpperCase();
    if (boost.includes('STR +4') || boost.includes('STR++++')) strStep += 4;
    else if (boost.includes('STR +3') || boost.includes('STR+++')) strStep += 3;
    else if (boost.includes('STR +2') || boost.includes('STR++')) strStep += 2;
    else if (boost.includes('STR +1') || boost.includes('STR+')) strStep += 1;

    if (boost.includes('AGI +2') || boost.includes('AGI++')) agiStep += 2;
    else if (boost.includes('AGI +1') || boost.includes('AGI+')) agiStep += 1;

    return { armorVal, strStep, agiStep, defMod, isHES, active: true };
  }

  function getEffectiveAttributes(char) {
    const tempMods = char.tempAttributeMods || {};
    const armorMods = getArmorStatModifiers(char);
    const activeBoosts = char.activeBoosts || [];

    let steps = {
      agility: (armorMods.active ? armorMods.agiStep : 0) + (tempMods.agility || 0),
      strength: (armorMods.active ? armorMods.strStep : 0) + (tempMods.strength || 0),
      vigor: (tempMods.vigor || 0),
      instinct: (tempMods.instinct || 0),
      intelligence: (tempMods.intelligence || 0),
      spirit: (tempMods.spirit || 0)
    };

    activeBoosts.forEach(b => {
      if (!b.state || b.state === 'off') return;

      if (b.type === 'stimpack') {
        steps.agility += 1;
      } else if (b.type === 'enhance-abilities' && b.targetAttr) {
        const stepVal = (b.state === 'raise' ? 2 : 1);
        if (steps[b.targetAttr] !== undefined) {
          steps[b.targetAttr] += stepVal;
        }
      } else if (b.type === 'custom' && b.customType && b.targetAttr) {
        if (b.customType === 'attr-step' || b.customType === 'custom-attr-1') {
          steps[b.targetAttr] += 1;
        } else if (b.customType === 'attr-step-2' || b.customType === 'custom-attr-2') {
          steps[b.targetAttr] += 2;
        }
      }
    });

    const baseAgi = char.attributes.agility || 4;
    const baseStr = char.attributes.strength || 4;
    const baseVig = char.attributes.vigor || 4;
    const baseInst = char.attributes.instinct || 4;
    const baseIntel = char.attributes.intelligence || 4;
    const baseSpi = char.attributes.spirit || 4;

    return {
      base: { agility: baseAgi, strength: baseStr, vigor: baseVig, instinct: baseInst, intelligence: baseIntel, spirit: baseSpi },
      steps: steps,
      effective: {
        agility: getSteppedDie(baseAgi, steps.agility),
        strength: getSteppedDie(baseStr, steps.strength),
        vigor: getSteppedDie(baseVig, steps.vigor),
        instinct: getSteppedDie(baseInst, steps.instinct),
        intelligence: getSteppedDie(baseIntel, steps.intelligence),
        spirit: getSteppedDie(baseSpi, steps.spirit)
      }
    };
  }

  function getEffectiveAttributeRollBonus(char, attrId) {
    let bonus = 0;
    const activeBoosts = char.activeBoosts || [];
    activeBoosts.forEach(b => {
      if (!b.state || b.state === 'off') return;
      if (b.type === 'muscular-enh' && attrId === 'strength') {
        bonus += (b.state === 'raise' ? 2 : 1);
      }
      if (b.type === 'custom' && b.targetAttr === attrId) {
        if (b.customType === 'roll-1') bonus += 1;
        if (b.customType === 'roll-2') bonus += 2;
      }
    });
    return bonus;
  }

  function getEffectiveSkillBonus(char, skillId) {
    const tempMods = char.tempSkillMods || {};
    let bonus = tempMods[skillId] || 0;
    const activeBoosts = char.activeBoosts || [];
    const skillNorm = skillId.toLowerCase().trim();
    const linkedAttr = SKILL_ATTR_MAP[skillNorm] || 'agility';

    activeBoosts.forEach(b => {
      if (!b.state || b.state === 'off') return;

      // Digital Uplink: +1 to tech & tactical skills
      if (b.type === 'digital-uplink') {
        const uplinkSkills = ['computers', 'engineering', 'lore', 'medicine', 'science', 'tactics', 'perception', 'pilot', 'ranged'];
        if (uplinkSkills.includes(skillNorm)) {
          bonus += 1;
        }
      }

      // Muscular Enhancement: +1 (+2 on Raise) to Athletics, Stealth
      if (b.type === 'muscular-enh') {
        if (['athletics', 'stealth'].includes(skillNorm)) {
          bonus += (b.state === 'raise' ? 2 : 1);
        }
      }

      // Enhance Abilities: ONLY boosts skills linked to the targeted attribute
      if (b.type === 'enhance-abilities') {
        if (b.targetAttr && b.targetAttr.toLowerCase() === linkedAttr) {
          bonus += (b.state === 'raise' ? 2 : 1);
        }
      }

      // Custom Boosts
      if (b.type === 'custom') {
        if (b.targetAttr && b.targetAttr.toLowerCase() === linkedAttr) {
          if (b.customType === 'roll-1') bonus += 1;
          if (b.customType === 'roll-2') bonus += 2;
        }
        if (b.targetSkill && b.targetSkill.toLowerCase() === skillNorm) {
          if (b.customType === 'roll-1') bonus += 1;
          if (b.customType === 'roll-2') bonus += 2;
        }
      }
    });

    return bonus;
  }

  function calculateDerivedStats(char) {
    const attrData = getEffectiveAttributes(char);
    const eff = attrData.effective;
    const psi = parseInt(char.psiRating, 10) || 5;
    const armorMods = getArmorStatModifiers(char);
    const activeBoosts = char.activeBoosts || [];

    let customDef = 0;
    let customToughness = 0;
    let customSpeed = 0;
    let thoughtBlockBonus = 0;
    let stimpackActive = false;

    activeBoosts.forEach(b => {
      if (!b.state || b.state === 'off') return;
      if (b.type === 'thought-block') {
        thoughtBlockBonus += (b.state === 'raise' ? 3 : 1);
      }
      if (b.type === 'stimpack') {
        stimpackActive = true;
      }
      if (b.type === 'custom') {
        if (b.customType === 'def-2') customDef += 2;
        if (b.customType === 'armor-4') customToughness += 4;
        if (b.customType === 'speed-2') customSpeed += 2;
      }
    });

    const armorVal = armorMods.active ? armorMods.armorVal : 0;
    const defMod = armorMods.active ? armorMods.defMod : 0;

    const rawDefense = Math.floor(eff.agility / 2) + Math.floor(eff.instinct / 2) + defMod + customDef;
    const defense = Math.max(1, rawDefense);

    const discipline = Math.floor(eff.spirit / 2) + Math.floor(eff.intelligence / 2) + thoughtBlockBonus;

    const baseToughness = Math.floor(eff.vigor / 2) + Math.floor(eff.strength / 2);
    const totalToughness = baseToughness + armorVal + customToughness;

    const resolve = Math.floor(eff.spirit / 2) + Math.floor(eff.instinct / 2) + psi + thoughtBlockBonus;
    const maxWounds = Math.floor(eff.strength / 3) + 1;
    const maxFatigue = Math.floor(eff.vigor / 3);

    let speed = 6 + (stimpackActive ? 2 : 0) + customSpeed;

    return {
      defense,
      defMod,
      discipline,
      baseToughness,
      totalToughness,
      armorVal: armorVal + customToughness,
      resolve,
      maxWounds,
      maxFatigue,
      speed,
      attrData
    };
  }

  function calculatePoints(char) {
    const hindranceAttrBonus = (char.hindranceConversions && char.hindranceConversions.attributeSteps) || 0;
    const totalAttrPointsPool = 9 + hindranceAttrBonus;

    let spentAttrPoints = 0;
    for (let key in char.attributes) {
      const die = char.attributes[key];
      const stepIndex = DIE_STEPS.indexOf(die);
      if (stepIndex > 0) spentAttrPoints += stepIndex;
    }

    const intel = char.attributes.intelligence || 4;
    let intBonus = 0;
    if (intel === 6) intBonus = 1;
    else if (intel === 8) intBonus = 2;
    else if (intel === 10) intBonus = 3;
    else if (intel >= 12) intBonus = 4;

    const advBonus = (char.advancements || 0) * 3;
    const hindranceSkillBonus = (char.hindranceConversions && char.hindranceConversions.skillPoints) || 0;
    const totalSkillPointsPool = 13 + intBonus + advBonus + hindranceSkillBonus;

    let spentSkillPoints = 0;
    if (window.SC_DATA && window.SC_DATA.skills) {
      window.SC_DATA.skills.forEach(sk => {
        const skillId = (sk.id || sk.name.toLowerCase().replace(/[^a-z0-9]/g, '')).trim();
        const charSkillDie = char.skills[skillId] || 0;
        const linkedAttr = (sk.attr || SKILL_ATTR_MAP[skillId] || 'Agility').toLowerCase();
        const linkedAttrDie = char.attributes[linkedAttr] || 4;

        if (charSkillDie > 0) {
          let freeDie = sk.core ? 4 : 0;
          if (char.trainingPath === 'ghost') {
            if (skillId === 'ranged' || skillId === 'melee') freeDie = Math.max(freeDie, 4);
            if (skillId === 'stealth') freeDie = Math.max(freeDie, 6);
          }

          if (charSkillDie > freeDie) {
            const freeStepIdx = freeDie === 0 ? -1 : DIE_STEPS.indexOf(freeDie);
            const targetStepIdx = DIE_STEPS.indexOf(charSkillDie);
            const linkedAttrIdx = DIE_STEPS.indexOf(linkedAttrDie);

            for (let i = freeStepIdx + 1; i <= targetStepIdx; i++) {
              if (i <= linkedAttrIdx) spentSkillPoints += 1;
              else spentSkillPoints += 2;
            }
          }
        }
      });
    }

    return {
      totalAttrPointsPool,
      spentAttrPoints,
      remAttrPoints: totalAttrPointsPool - spentAttrPoints,
      intBonus,
      totalSkillPointsPool,
      spentSkillPoints,
      remSkillPoints: totalSkillPointsPool - spentSkillPoints
    };
  }

  function loadCharacters() {
    try {
      const stored = localStorage.getItem('sc_rpg_characters');
      if (stored) {
        characters = JSON.parse(stored);
        if (characters.length > 0 && characters[0].name === 'Nova Terra') {
          characters = [getDefaultCharacter()];
          saveCharacters();
        }
      }
    } catch (e) {}

    if (!characters || characters.length === 0) {
      characters = [getDefaultCharacter()];
      saveCharacters();
    }

    // Ensure activeBoosts array exists on all characters
    characters.forEach(char => {
      if (!char.activeBoosts || !Array.isArray(char.activeBoosts)) {
        char.activeBoosts = getDefaultActiveBoosts();
      }
    });

    const activeId = localStorage.getItem('sc_rpg_active_char_id');
    currentCharacter = characters.find(c => c.id === activeId) || characters[0];
  }

  function saveCharacters() {
    try {
      localStorage.setItem('sc_rpg_characters', JSON.stringify(characters));
      if (currentCharacter) {
        localStorage.setItem('sc_rpg_active_char_id', currentCharacter.id);
      }
    } catch (e) {}
  }

  function renderAll() {
    renderDossier();
    renderAttributesAndStats();
    renderSkillsList();
    renderCharacterPowers();
    renderCharacterWeapons();
    renderCharacterArmorGear();
    renderCharacterCybernetics();
    updateCharacterSelector();
    updateQuickTelemetry();
  }

  function renderDossier() {
    if (!currentCharacter) return;
    document.getElementById('char-name-input').value = currentCharacter.name || '';
    document.getElementById('char-codename-input').value = currentCharacter.codename || '';
    document.getElementById('char-homeworld-select').value = currentCharacter.homeworld || 'moria';
    document.getElementById('char-rank-select').value = currentCharacter.rank || 'Seasoned';
    document.getElementById('char-cot-select').value = currentCharacter.cotLevel || 'Operative';
    document.getElementById('char-training-select').value = currentCharacter.trainingPath || 'ghost';
    document.getElementById('char-psi-input').value = currentCharacter.psiRating || 5;
    document.getElementById('char-adv-input').value = currentCharacter.advancements || 4;
    document.getElementById('char-credits-input').value = currentCharacter.credits || 3325;
    document.getElementById('char-concept-input').value = currentCharacter.concept || '';
  }

  function renderActiveBoosts() {
    const container = document.getElementById('active-boosts-container');
    const counter = document.getElementById('active-boosts-counter');
    if (!container || !currentCharacter) return;

    if (!currentCharacter.activeBoosts || !Array.isArray(currentCharacter.activeBoosts)) {
      currentCharacter.activeBoosts = getDefaultActiveBoosts();
    }

    container.innerHTML = '';
    let activeCount = 0;

    if (currentCharacter.activeBoosts.length === 0) {
      container.innerHTML = `
        <div style="grid-column:1/-1; padding:0.85rem; text-align:center; color:var(--text-dim); font-size:0.85rem; border:1px dashed var(--border-subtle); border-radius:var(--radius-sm); background:rgba(10, 18, 32, 0.5);">
          No active boosts or combat modifiers applied. Click <strong style="color:var(--cyan);">+ Add Boost / Modifier</strong> above to apply powers, gear buffs, or ally stance bonuses.
        </div>
      `;
      if (counter) {
        counter.textContent = '0 Active';
        counter.className = 'tag tag-amber';
      }
      return;
    }

    const shortCodes = { agility: 'Agi', strength: 'Str', vigor: 'Vig', instinct: 'Inst', intelligence: 'Int', spirit: 'Spi' };

    currentCharacter.activeBoosts.forEach((b, idx) => {
      const isActive = (b.state && b.state !== 'off');
      if (isActive) activeCount++;

      const card = document.createElement('div');
      card.className = `buff-control-card ${isActive ? 'active-buff' : ''}`;

      const catLower = (b.category || '').toLowerCase();
      const badgeColor = catLower.includes('psion') ? 'violet' : (catLower.includes('gear') ? 'cyan' : (catLower.includes('chem') ? 'emerald' : 'amber'));
      let categoryTag = b.category ? `<span class="tag tag-${badgeColor}">${b.category}</span>` : '';

      let targetNotation = '';
      if (b.type === 'enhance-abilities' && b.targetAttr) {
        const sc = shortCodes[b.targetAttr] || b.targetAttr;
        if (b.state === 'raise') targetNotation = `<span class="tag tag-emerald" style="margin-left:4px; font-weight:bold;">${sc}++</span>`;
        else if (b.state === 'success' || b.state === 'active') targetNotation = `<span class="tag tag-cyan" style="margin-left:4px; font-weight:bold;">${sc}+</span>`;
        else targetNotation = `<span class="tag tag-outline" style="margin-left:4px;">${sc}</span>`;
      } else if (b.type === 'custom' && b.targetAttr) {
        const sc = shortCodes[b.targetAttr] || b.targetAttr;
        targetNotation = `<span class="tag tag-outline" style="margin-left:4px;">${sc}</span>`;
      }

      let buttonsHtml = '';
      if (b.hasRaise) {
        buttonsHtml = `
          <div class="tri-state-group" data-boost-idx="${idx}">
            <button class="tri-btn ${b.state === 'off' ? 'active' : ''}" data-boost-val="off">Off</button>
            <button class="tri-btn ${b.state === 'success' ? 'active' : ''}" data-boost-val="success">Success</button>
            <button class="tri-btn ${b.state === 'raise' ? 'active raise-active' : ''}" data-boost-val="raise">Raise</button>
          </div>
        `;
      } else {
        buttonsHtml = `
          <div class="tri-state-group" data-boost-idx="${idx}">
            <button class="tri-btn ${b.state === 'off' ? 'active' : ''}" data-boost-val="off">Off</button>
            <button class="tri-btn ${b.state === 'active' ? 'active' : ''}" data-boost-val="active">Active</button>
          </div>
        `;
      }

      const deleteBtn = `<button class="btn btn-crimson btn-sm" data-delete-boost-idx="${idx}" title="Remove Boost" style="padding:1px 6px; font-size:0.75rem; line-height:1; height:20px;">✕</button>`;

      card.innerHTML = `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.4rem; width:100%;">
          <div style="display:flex; flex-direction:column; gap:0.25rem;">
            <div style="display:flex; align-items:center; gap:0.35rem; flex-wrap:wrap;">
              <span class="buff-title" style="font-weight:700; color:#fff; font-size:0.86rem; line-height:1.2;">${b.name}</span>
              ${targetNotation}
            </div>
            <div style="display:flex; align-items:center; gap:0.35rem;">
              ${categoryTag}
              <span class="info-icon" title="${b.desc || ''}">ⓘ
                <span class="tooltip-box">${b.desc || ''}</span>
              </span>
            </div>
          </div>
          ${deleteBtn}
        </div>
        <div style="display:flex; justify-content:flex-end; width:100%; margin-top:0.35rem;">
          ${buttonsHtml}
        </div>
      `;

      container.appendChild(card);
    });

    if (counter) {
      counter.textContent = `${activeCount} Active`;
      counter.className = activeCount > 0 ? 'tag tag-emerald' : 'tag tag-amber';
    }
  }

  function renderAttributesAndStats() {
    if (!currentCharacter) return;

    if (!currentCharacter.tempAttributeMods) {
      currentCharacter.tempAttributeMods = { agility: 0, strength: 0, vigor: 0, instinct: 0, intelligence: 0, spirit: 0 };
    }
    if (!currentCharacter.tempSkillMods) {
      currentCharacter.tempSkillMods = {};
    }

    renderActiveBoosts();

    const stats = calculateDerivedStats(currentCharacter);
    const points = calculatePoints(currentCharacter);
    const attrData = stats.attrData;

    // Points Badges
    const attrBadge = document.getElementById('attr-points-badge');
    if (attrBadge) {
      attrBadge.textContent = `${points.spentAttrPoints} / ${points.totalAttrPointsPool} pts (${points.remAttrPoints} left)`;
      attrBadge.className = points.remAttrPoints < 0 ? 'point-tracker-badge warning' : 'point-tracker-badge';
    }

    const skillBadge = document.getElementById('skill-points-badge');
    if (skillBadge) {
      skillBadge.textContent = `${points.spentSkillPoints} / ${points.totalSkillPointsPool} pts (Int +${points.intBonus}) (${points.remSkillPoints} left)`;
      skillBadge.className = points.remSkillPoints < 0 ? 'point-tracker-badge warning' : 'point-tracker-badge';
    }

    // Attributes Grid
    const attrContainer = document.getElementById('attributes-grid');
    if (attrContainer) {
      attrContainer.innerHTML = '';
      const shortCodes = {
        agility: 'Agi',
        strength: 'Str',
        vigor: 'Vig',
        instinct: 'Inst',
        intelligence: 'Int',
        spirit: 'Spi'
      };

      const attrNames = [
        { id: 'agility', name: 'Agility' },
        { id: 'strength', name: 'Strength' },
        { id: 'vigor', name: 'Vigor' },
        { id: 'instinct', name: 'Instinct' },
        { id: 'intelligence', name: 'Intelligence' },
        { id: 'spirit', name: 'Spirit' }
      ];

      attrNames.forEach(attr => {
        const baseVal = attrData.base[attr.id];
        const effVal = attrData.effective[attr.id];
        const stepOffset = attrData.steps[attr.id];
        const isBoosted = stepOffset > 0;
        const customTemp = currentCharacter.tempAttributeMods[attr.id] || 0;
        const rollBonus = getEffectiveAttributeRollBonus(currentCharacter, attr.id);

        const card = document.createElement('div');
        card.className = `attribute-card ${isBoosted ? 'boosted' : ''}`;
        card.innerHTML = `
          <div class="attr-name">${attr.name}</div>
          <div class="attr-die-display" title="Base: ${dieLabel(baseVal)} | Effective: ${dieLabel(effVal)}">
            ${isBoosted ? `${dieLabel(baseVal)}<span style="font-size:1.1rem; color:var(--emerald);"> (${dieLabel(effVal)})</span>` : dieLabel(baseVal)}
          </div>
          ${isBoosted ? `<span class="eff-badge">${formatTraitBoost(shortCodes[attr.id], stepOffset)}</span>` : (stepOffset < 0 ? `<span class="eff-badge penalty">${formatTraitBoost(shortCodes[attr.id], stepOffset)}</span>` : (rollBonus > 0 ? `<span class="eff-badge">+${rollBonus} Rolls</span>` : ''))}
          <div class="attr-controls">
            <button class="attr-btn" data-attr="${attr.id}" data-action="dec" ${baseVal <= 4 ? 'disabled' : ''} title="Lower Base Die">-</button>
            <button class="attr-btn" data-attr="${attr.id}" data-action="inc" ${baseVal >= 14 ? 'disabled' : ''} title="Raise Base Die">+</button>
          </div>
          <div class="temp-step-ctrls" title="Custom Temporary Step Modifier">
            <span style="font-size:0.68rem; color:var(--text-dim);">Temp:</span>
            <button class="temp-step-btn" data-temp-attr="${attr.id}" data-action="dec">-</button>
            <span style="font-size:0.75rem; font-weight:bold; color:var(--amber);">${customTemp >= 0 ? `+${customTemp}` : customTemp}</span>
            <button class="temp-step-btn" data-temp-attr="${attr.id}" data-action="inc">+</button>
          </div>
          <button class="roll-btn" data-roll-type="trait" data-name="${attr.name}" data-die="${effVal}" data-mod="${rollBonus}">Roll ${dieLabel(effVal)}${rollBonus > 0 ? `+${rollBonus}` : ''} 🎲</button>
        `;
        attrContainer.appendChild(card);
      });
    }

    // Derived Stats Update
    const defEl = document.getElementById('stat-defense');
    if (defEl) defEl.textContent = stats.defense;
    const defFormula = document.getElementById('stat-defense-formula');
    if (defFormula) {
      defFormula.textContent = `½ Agi (${Math.floor(stats.attrData.effective.agility/2)}) + ½ Inst (${Math.floor(stats.attrData.effective.instinct/2)})${stats.defMod !== 0 ? ` + Armor (${stats.defMod})` : ''}`;
    }

    const discEl = document.getElementById('stat-discipline');
    if (discEl) discEl.textContent = stats.discipline;

    const toughEl = document.getElementById('stat-toughness');
    if (toughEl) toughEl.textContent = stats.armorVal > 0 ? `${stats.totalToughness} (${stats.armorVal})` : `${stats.totalToughness}`;
    const toughFormula = document.getElementById('stat-toughness-formula');
    if (toughFormula) {
      toughFormula.textContent = `½ Vigor (${Math.floor(stats.attrData.effective.vigor/2)}) + ½ Str (${Math.floor(stats.attrData.effective.strength/2)})${stats.armorVal > 0 ? ` + Armor (${stats.armorVal})` : ''}`;
    }

    const resEl = document.getElementById('stat-resolve');
    if (resEl) resEl.textContent = stats.resolve;

    const speedEl = document.getElementById('stat-speed');
    if (speedEl) speedEl.textContent = `${stats.speed}″`;

    // Damage Pips
    const woundsWrap = document.getElementById('wounds-pips-wrap');
    if (woundsWrap) {
      woundsWrap.innerHTML = '';
      for (let i = 1; i <= stats.maxWounds; i++) {
        const pip = document.createElement('div');
        pip.className = `pip-box ${i <= (currentCharacter.currentWounds || 0) ? 'checked-wound' : ''}`;
        pip.textContent = i;
        pip.onclick = () => {
          SoundFX.toggle();
          currentCharacter.currentWounds = (currentCharacter.currentWounds === i) ? i - 1 : i;
          saveCharacters();
          renderAttributesAndStats();
          updateQuickTelemetry();
        };
        woundsWrap.appendChild(pip);
      }
    }

    const fatigueWrap = document.getElementById('fatigue-pips-wrap');
    if (fatigueWrap) {
      fatigueWrap.innerHTML = '';
      for (let i = 1; i <= stats.maxFatigue; i++) {
        const pip = document.createElement('div');
        pip.className = `pip-box ${i <= (currentCharacter.currentFatigue || 0) ? 'checked-fatigue' : ''}`;
        pip.textContent = i;
        pip.onclick = () => {
          SoundFX.toggle();
          currentCharacter.currentFatigue = (currentCharacter.currentFatigue === i) ? i - 1 : i;
          saveCharacters();
          renderAttributesAndStats();
        };
        fatigueWrap.appendChild(pip);
      }
    }

    const shakenBox = document.getElementById('cond-shaken');
    if (shakenBox) shakenBox.checked = !!currentCharacter.isShaken;
    const distractedBox = document.getElementById('cond-distracted');
    if (distractedBox) distractedBox.checked = !!currentCharacter.isDistracted;
    const vulnerableBox = document.getElementById('cond-vulnerable');
    if (vulnerableBox) vulnerableBox.checked = !!currentCharacter.isVulnerable;
    const psiEnergy = document.getElementById('tracker-psi-energy');
    if (psiEnergy) psiEnergy.value = currentCharacter.currentEnergy || 15;
  }

  function renderSkillsList() {
    const container = document.getElementById('skills-container');
    if (!container || !window.SC_DATA || !window.SC_DATA.skills) return;

    container.innerHTML = '';
    const attrData = getEffectiveAttributes(currentCharacter);
    const shortCodes = { agility: 'Agi', strength: 'Str', vigor: 'Vig', instinct: 'Inst', intelligence: 'Int', spirit: 'Spi' };

    window.SC_DATA.skills.forEach(sk => {
      const skillId = (sk.id || sk.name.toLowerCase().replace(/[^a-z0-9]/g, '')).trim();
      const baseVal = currentCharacter.skills[skillId] || 0;
      const linkedAttr = (sk.attr || SKILL_ATTR_MAP[skillId] || 'Agility').toLowerCase();
      const linkedAttrEff = attrData.effective[linkedAttr] || 4;
      const linkedAttrStep = attrData.steps[linkedAttr] || 0;
      const bonus = getEffectiveSkillBonus(currentCharacter, skillId);

      const boostTag = linkedAttrStep !== 0 ? formatTraitBoost(shortCodes[linkedAttr] || linkedAttr, linkedAttrStep) : '';

      const row = document.createElement('div');
      row.className = 'skill-row';
      row.innerHTML = `
        <div>
          <span class="skill-name">${sk.name}</span>
          ${sk.core ? '<span class="core-badge">Core</span>' : ''}
          ${bonus > 0 ? `<span class="tag tag-emerald">+${bonus} Buff</span>` : ''}
          ${boostTag ? `<span class="tag tag-cyan" style="margin-left:4px; font-weight:bold;">${boostTag}</span>` : ''}
          <div style="font-size:0.72rem; color:var(--text-dim);">${sk.attr || linkedAttr} (${dieLabel(linkedAttrEff)})</div>
        </div>
        <div style="display:flex; align-items:center; gap:0.35rem;">
          <button class="attr-btn" data-skill="${skillId}" data-action="dec" ${baseVal <= 0 ? 'disabled' : ''}>-</button>
          <span class="skill-die-badge">${dieLabel(baseVal)}</span>
          <button class="attr-btn" data-skill="${skillId}" data-action="inc" ${baseVal >= 14 ? 'disabled' : ''}>+</button>
          <button class="roll-btn" data-roll-type="skill" data-name="${sk.name}" data-die="${baseVal}" data-mod="${bonus}">
            Roll ${dieLabel(baseVal)}${bonus > 0 ? `+${bonus}` : ''} 🎲
          </button>
        </div>
      `;
      container.appendChild(row);
    });
  }

  function renderCharacterPowers() {
    const list = document.getElementById('char-powers-list');
    if (!list) return;
    list.innerHTML = '';
    (currentCharacter.powers || []).forEach((p, idx) => {
      const div = document.createElement('div');
      div.className = 'compendium-card';
      div.style.padding = '0.65rem';
      div.innerHTML = `
        <div class="card-top">
          <span class="card-title">${p.name}</span>
          <span class="tag tag-violet">${p.discipline || 'Psionic'}</span>
        </div>
        <div class="card-desc">${p.desc || ''}</div>
        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:0.4rem;">
          <button class="roll-btn" data-roll-type="skill" data-name="Psionics (${p.name})" data-die="${currentCharacter.skills.psionics || 10}">Test Power 🎲</button>
          <button class="btn btn-crimson btn-sm" data-remove-power="${idx}">Remove</button>
        </div>
      `;
      list.appendChild(div);
    });
  }

  function renderCharacterWeapons() {
    const container = document.getElementById('char-weapons-table-body');
    if (!container) return;
    container.innerHTML = '';
    (currentCharacter.weapons || []).forEach((w, idx) => {
      const tr = document.createElement('tr');
      const isRanged = w.range && w.range !== 'Melee';
      const attackSkillDie = isRanged ? (currentCharacter.skills.ranged || 6) : (currentCharacter.skills.melee || 8);
      const skillName = isRanged ? 'Ranged' : 'Melee';
      const skillBonus = getEffectiveSkillBonus(currentCharacter, isRanged ? 'ranged' : 'melee');

      tr.innerHTML = `
        <td style="font-weight:bold; color:#fff;">${w.name}</td>
        <td><span class="tag tag-cyan">${w.range}</span></td>
        <td><span class="tag tag-amber">${w.damage}</span></td>
        <td><span class="tag tag-emerald">AP ${w.ap || 0}</span></td>
        <td style="font-size:0.8rem; color:var(--text-muted);">${w.notes || ''}</td>
        <td>
          <div style="display:flex; gap:0.35rem;">
            <button class="roll-btn" data-roll-type="skill" data-name="${skillName} (${w.name})" data-die="${attackSkillDie}" data-mod="${skillBonus}">Attack${skillBonus > 0 ? `+${skillBonus}` : ''}</button>
            <button class="roll-btn" data-roll-type="damage" data-name="${w.name} Damage" data-damage="${w.damage}" data-ap="${w.ap || 0}">Dmg</button>
            <button class="btn btn-crimson btn-sm" data-remove-weapon="${idx}">✕</button>
          </div>
        </td>
      `;
      container.appendChild(tr);
    });
  }

  function renderCharacterArmorGear() {
    const armorWrap = document.getElementById('char-armor-display');
    if (armorWrap) {
      const arm = currentCharacter.armor;
      const armorMods = getArmorStatModifiers(currentCharacter);
      if (arm && arm.value && arm.name !== 'Unarmored' && arm.name !== 'None') {
        armorWrap.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
            <div>
              <strong style="color:#fff; font-size:0.95rem;">${arm.name}</strong>
              <span class="tag tag-amber" style="margin-left:6px;">${arm.class || 'Armor'}</span>
              <span class="tag tag-emerald" style="margin-left:4px;">+${arm.value} Armor</span>
              ${arm.boost ? `<span class="tag tag-cyan" style="margin-left:4px; font-weight:bold;">${arm.boost}</span>` : ''}
              ${arm.defMod ? `<span class="tag tag-crimson" style="margin-left:4px;">Def ${arm.defMod}</span>` : ''}
              ${!armorMods.active ? `<span class="tag tag-crimson" style="margin-left:4px;">(Deactivated / Off)</span>` : ''}
            </div>
            <div style="display:flex; gap:0.4rem; align-items:center;">
              <button id="unequip-armor-btn" class="btn btn-sm btn-crimson" style="padding:2px 8px;">Unequip</button>
            </div>
          </div>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-top:0.35rem;">
            ${arm.traits ? `<strong>Traits:</strong> ${arm.traits}<br>` : ''}
            ${arm.mounted ? `<strong>Mounted:</strong> ${arm.mounted}<br>` : ''}
            ${arm.notes || ''}
          </div>
        `;
      } else {
        armorWrap.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span style="color:var(--text-dim); font-size:0.85rem;">No armor currently equipped (Unarmored: 0 Armor).</span>
            <a href="#sec-armors" class="btn btn-sm btn-cyan" style="padding:2px 8px; text-decoration:none;">Open Armory</a>
          </div>
        `;
      }
    }

    const gearList = document.getElementById('char-gear-list');
    if (gearList) {
      gearList.innerHTML = '';
      (currentCharacter.gear || []).forEach((g, idx) => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.padding = '0.3rem 0';
        div.style.borderBottom = '1px solid var(--border-subtle)';
        div.innerHTML = `
          <div><strong style="color:#fff;">${g.name}</strong> <span style="color:var(--text-dim); font-size:0.75rem;">(${g.notes || ''})</span></div>
          <div style="display:flex; gap:0.4rem; align-items:center;">
            <span class="tag tag-cyan">x${g.count || 1}</span>
            <button class="btn btn-crimson btn-sm" data-remove-gear="${idx}">✕</button>
          </div>
        `;
        gearList.appendChild(div);
      });
    }
  }

  function renderCharacterCybernetics() {
    const list = document.getElementById('char-cybernetics-list');
    if (!list) return;
    list.innerHTML = '';
    let totalPoints = 0;
    (currentCharacter.cybernetics || []).forEach((c, idx) => {
      totalPoints += (c.points || 1);
      const div = document.createElement('div');
      div.className = 'compendium-card';
      div.style.padding = '0.5rem';
      div.innerHTML = `
        <div class="card-top">
          <span class="card-title">${c.name}</span>
          <span class="tag tag-cyan">${c.points || 1} Cyber Point</span>
        </div>
        <div class="card-desc">${c.desc || ''}</div>
        <div style="text-align:right; margin-top:0.3rem;">
          <button class="btn btn-crimson btn-sm" data-remove-cyber="${idx}">Remove</button>
        </div>
      `;
      list.appendChild(div);
    });

    const ptsBadge = document.getElementById('cyber-points-badge');
    if (ptsBadge) {
      const maxPts = Math.floor((currentCharacter.attributes.vigor || 6) / 2);
      ptsBadge.textContent = `${totalPoints} / ${maxPts} Points Used`;
      ptsBadge.className = totalPoints > maxPts ? 'point-tracker-badge warning' : 'point-tracker-badge';
    }
  }

  function updateQuickTelemetry() {
    const dName = document.getElementById('dossier-name');
    if (dName) dName.textContent = currentCharacter.name || 'Operative';
    const dCode = document.getElementById('dossier-codename');
    if (dCode) dCode.textContent = currentCharacter.codename || 'Ghost Unit';
    const dConcept = document.getElementById('dossier-concept');
    if (dConcept) dConcept.textContent = currentCharacter.concept || '';

    const stats = calculateDerivedStats(currentCharacter);
    const attrData = stats.attrData;

    const tDef = document.getElementById('telemetry-defense');
    if (tDef) tDef.textContent = stats.defense;
    const tTough = document.getElementById('telemetry-toughness');
    if (tTough) tTough.textContent = `${stats.totalToughness} (${stats.armorVal})`;
    const tDisc = document.getElementById('telemetry-discipline');
    if (tDisc) tDisc.textContent = stats.discipline;
    const tRes = document.getElementById('telemetry-resolve');
    if (tRes) tRes.textContent = stats.resolve;
  }

  function updateCharacterSelector() {
    const sel = document.getElementById('global-character-select');
    if (!sel) return;
    sel.innerHTML = '';
    characters.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.name} (${c.codename || 'Operative'})`;
      if (currentCharacter && c.id === currentCharacter.id) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  // --- Dice & Combat Action Engine ---
  function rollExplodingDie(sides) {
    let total = 0;
    let rolls = [];
    let r = 0;
    do {
      r = Math.floor(Math.random() * sides) + 1;
      rolls.push(r);
      total += r;
    } while (r === sides && sides > 1);
    return { total, rolls };
  }

  function executeTraitRoll(name, dieVal, modifier = 0, isWild = true) {
    SoundFX.roll();
    const traitRoll = rollExplodingDie(dieVal);
    let wildRoll = null;
    if (isWild) wildRoll = rollExplodingDie(6);

    let bestDie = traitRoll.total;
    let bestType = `d${dieVal}`;
    if (wildRoll && wildRoll.total > bestDie) {
      bestDie = wildRoll.total;
      bestType = 'Wild d6';
    }

    const finalTotal = bestDie + modifier;
    const isCriticalFailure = (traitRoll.rolls[0] === 1 && (wildRoll ? wildRoll.rolls[0] === 1 : true));
    const isSuccess = !isCriticalFailure && finalTotal >= 4;
    const isRaise = !isCriticalFailure && finalTotal >= 8;
    const raises = isRaise ? Math.floor((finalTotal - 4) / 4) : 0;

    let resultText = '';
    let resultClass = '';

    if (isCriticalFailure) {
      resultText = 'CRITICAL FAILURE! (Snake Eyes)';
      resultClass = 'crit-fail';
      SoundFX.alert();
    } else if (isRaise) {
      resultText = `SUCCESS WITH ${raises} RAISE${raises > 1 ? 'S' : ''}!`;
      resultClass = 'crit-success';
      SoundFX.success();
    } else if (isSuccess) {
      resultText = 'SUCCESS (Target 4 Achieved)';
      resultClass = 'success';
      SoundFX.success();
    } else {
      resultText = 'FAILURE (Missed Target 4)';
      resultClass = 'failure';
    }

    logToTerminal({
      name,
      finalTotal,
      resultText,
      resultClass,
      details: `Trait d${dieVal}: [${traitRoll.rolls.join(', ')}] = ${traitRoll.total}${wildRoll ? ` | Wild d6: [${wildRoll.rolls.join(', ')}] = ${wildRoll.total}` : ''}${modifier ? ` | Mod: ${modifier > 0 ? '+' : ''}${modifier}` : ''}`
    });

    openDiceDrawer();
  }

  function executeDamageRoll(name, damageExpr, ap = 0) {
    SoundFX.roll();
    let total = 0;
    let breakdown = [];

    const parts = damageExpr.toLowerCase().replace(/\s+/g, '').split('+');
    parts.forEach(part => {
      if (part === 'str') {
        const strEff = getEffectiveAttributes(currentCharacter).effective.strength || 6;
        const res = rollExplodingDie(strEff);
        total += res.total;
        breakdown.push(`Str(d${strEff}): [${res.rolls.join(',')}]`);
      } else if (part.includes('d')) {
        const [cntStr, sideStr] = part.split('d');
        const count = cntStr ? parseInt(cntStr, 10) : 1;
        const sides = parseInt(sideStr, 10);
        let partTotal = 0;
        let pRolls = [];
        for (let i = 0; i < count; i++) {
          const res = rollExplodingDie(sides);
          partTotal += res.total;
          pRolls.push(res.rolls.join(','));
        }
        total += partTotal;
        breakdown.push(`${part}: [${pRolls.join(' + ')}]`);
      } else {
        const flat = parseInt(part, 10) || 0;
        total += flat;
        breakdown.push(`+${flat}`);
      }
    });

    SoundFX.success();
    logToTerminal({
      name: `${name} (Damage Roll)`,
      finalTotal: total,
      resultText: `Damage: ${total} Total (AP ${ap})`,
      resultClass: total >= 12 ? 'crit-success' : 'success',
      details: `${damageExpr} => ${breakdown.join(' + ')} (AP: ${ap})`
    });

    openDiceDrawer();
  }

  function openDiceDrawer() {
    const drawer = document.getElementById('dice-drawer');
    if (drawer && !drawer.classList.contains('active')) {
      drawer.classList.add('active');
    }
  }

  function logToTerminal(data) {
    const screen = document.getElementById('terminal-screen-logs');
    if (!screen) return;

    const timeStr = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const logItem = document.createElement('div');
    logItem.className = 'log-entry';
    logItem.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <span class="log-title">${data.name}</span>
        <span class="log-time">[${timeStr}]</span>
      </div>
      <div style="display:flex; align-items:center; gap:0.75rem; margin:0.35rem 0;">
        <span class="log-total">${data.finalTotal}</span>
        <span class="log-status ${data.resultClass}">${data.resultText}</span>
      </div>
      <div class="log-details">${data.details}</div>
    `;

    screen.insertBefore(logItem, screen.firstChild);
    while (screen.children.length > 50) {
      screen.removeChild(screen.lastChild);
    }
  }

  function debounce(fn, delay) {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function setupEventListeners() {
    // Sidebar toggle
    document.getElementById('toggle-sidebar-btn')?.addEventListener('click', () => {
      document.getElementById('doc-sidebar')?.classList.toggle('collapsed');
    });

    // Theme toggle
    document.getElementById('theme-toggle-btn')?.addEventListener('click', () => {
      document.body.classList.toggle('theme-light');
      SoundFX.click();
    });

    // Print button
    document.getElementById('print-doc-btn')?.addEventListener('click', () => {
      window.print();
    });

    // Character Sheet Jump Button
    document.getElementById('toggle-sheet-btn')?.addEventListener('click', () => {
      document.getElementById('sec-character-sheet')?.scrollIntoView({ behavior: 'smooth' });
    });

    // Dice drawer toggle
    document.getElementById('toggle-dice-drawer-btn')?.addEventListener('click', () => {
      document.getElementById('dice-drawer')?.classList.toggle('active');
    });

    document.getElementById('close-dice-drawer-btn')?.addEventListener('click', () => {
      document.getElementById('dice-drawer')?.classList.remove('active');
    });

    // Clear logs
    document.getElementById('clear-terminal-logs-btn')?.addEventListener('click', () => {
      const screen = document.getElementById('terminal-screen-logs');
      if (screen) screen.innerHTML = '<div class="terminal-line dim">Terminal reset. Ready for operations.</div>';
    });

    // Global Document Search
    const searchBox = document.getElementById('global-doc-search');
    if (searchBox) {
      searchBox.addEventListener('input', debounce(e => {
        const q = e.target.value.toLowerCase().trim();
        if (!q) return;

        const matches = document.querySelectorAll('.doc-h2, .doc-h3, .compendium-card, .doc-card');
        for (let el of matches) {
          if (el.textContent.toLowerCase().includes(q)) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.style.outline = '2px solid var(--cyan)';
            setTimeout(() => el.style.outline = 'none', 1200);
            break;
          }
        }
      }, 200));

      window.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
          e.preventDefault();
          searchBox.focus();
          searchBox.select();
        }
      });
    }

    // Filter Hindrances
    document.getElementById('hindrance-filter-input')?.addEventListener('input', debounce(e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('#hindrances-grid-container [data-hind-item]').forEach(el => {
        el.style.display = el.getAttribute('data-hind-item').includes(q) || el.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
      });
    }, 150));

    // Filter Edges
    document.getElementById('edge-filter-input')?.addEventListener('input', debounce(e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('#edges-grid-container [data-edge-item]').forEach(el => {
        el.style.display = el.getAttribute('data-edge-item').includes(q) || el.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
      });
    }, 150));

    // Filter Psionics
    document.querySelectorAll('.filter-btn[data-psi-filter]').forEach(btn => {
      btn.addEventListener('click', () => {
        SoundFX.click();
        document.querySelectorAll('.filter-btn[data-psi-filter]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-psi-filter');

        document.querySelectorAll('#psionics-grid-container [data-power-disc]').forEach(el => {
          el.style.display = (filter === 'all' || el.getAttribute('data-power-disc').toLowerCase() === filter.toLowerCase()) ? 'flex' : 'none';
        });
      });
    });

    // Quick Dice buttons inside drawer
    document.querySelectorAll('.dice-btn[data-quick-die]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sides = parseInt(btn.getAttribute('data-quick-die'), 10);
        const mod = parseInt(document.getElementById('term-modifier-input')?.value, 10) || 0;
        const useWild = document.getElementById('term-wild-die-toggle')?.checked ?? true;
        executeTraitRoll(`Quick d${sides}`, sides, mod, useWild);
      });
    });

    // Character Management Events
    document.getElementById('global-character-select')?.addEventListener('change', e => {
      const found = characters.find(c => c.id === e.target.value);
      if (found) {
        currentCharacter = found;
        saveCharacters();
        renderAll();
      }
    });

    document.getElementById('new-character-btn')?.addEventListener('click', () => {
      const newChar = getDefaultCharacter();
      newChar.id = 'char_' + Date.now();
      newChar.name = 'New Operative';
      characters.push(newChar);
      currentCharacter = newChar;
      saveCharacters();
      renderAll();
    });

    document.getElementById('delete-character-btn')?.addEventListener('click', () => {
      if (characters.length <= 1) return alert('At least one character profile must remain.');
      if (confirm(`Delete ${currentCharacter.name}?`)) {
        characters = characters.filter(c => c.id !== currentCharacter.id);
        currentCharacter = characters[0];
        saveCharacters();
        renderAll();
      }
    });

    document.getElementById('export-json-btn')?.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentCharacter, null, 2));
      const a = document.createElement('a');
      a.setAttribute("href", dataStr);
      a.setAttribute("download", `${(currentCharacter.name || 'ghost_character').replace(/\s+/g, '_')}.json`);
      document.body.appendChild(a);
      a.click();
      a.remove();
    });

    document.getElementById('import-json-btn')?.addEventListener('click', () => {
      document.getElementById('import-file-input')?.click();
    });

    document.getElementById('import-file-input')?.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = evt => {
        try {
          const imported = JSON.parse(evt.target.result);
          if (imported && imported.name) {
            imported.id = 'char_' + Date.now();
            characters.push(imported);
            currentCharacter = imported;
            saveCharacters();
            renderAll();
            alert(`Imported ${imported.name} successfully!`);
          }
        } catch (err) {
          alert('Invalid character JSON format.');
        }
      };
      reader.readAsText(file);
    });

    // Inputs live binding
    const bindInput = (id, prop, reCalc = false) => {
      const el = document.getElementById(id);
      if (el) {
        const handler = () => {
          if (currentCharacter) {
            currentCharacter[prop] = el.value;
            saveCharacters();
            updateCharacterSelector();
            updateQuickTelemetry();
            if (reCalc) renderAttributesAndStats();
          }
        };
        el.addEventListener('input', handler);
        el.addEventListener('change', handler);
      }
    };

    bindInput('char-name-input', 'name');
    bindInput('char-codename-input', 'codename');
    bindInput('char-homeworld-select', 'homeworld', true);
    bindInput('char-rank-select', 'rank', true);
    bindInput('char-cot-select', 'cotLevel', true);
    bindInput('char-training-select', 'trainingPath', true);
    bindInput('char-psi-input', 'psiRating', true);
    bindInput('char-adv-input', 'advancements', true);
    bindInput('char-credits-input', 'credits');
    bindInput('char-concept-input', 'concept');

    // --- Add Boost UI Setup ---
    const addBoostPanel = document.getElementById('add-boost-panel');
    const btnToggleAddBoost = document.getElementById('btn-toggle-add-boost');
    const btnCloseAddBoost = document.getElementById('btn-close-add-boost');
    const btnCancelAddBoost = document.getElementById('btn-cancel-add-boost');
    const btnConfirmAddBoost = document.getElementById('btn-confirm-add-boost');
    const selBoostTemplate = document.getElementById('new-boost-template');
    const grpTargetAttr = document.getElementById('grp-boost-target-attr');
    const grpBoostLevel = document.getElementById('grp-boost-level');
    const grpCustomFields = document.getElementById('grp-custom-fields');

    const toggleBoostPanel = (open) => {
      if (!addBoostPanel) return;
      if (open === undefined) {
        addBoostPanel.classList.toggle('open');
      } else if (open) {
        addBoostPanel.classList.add('open');
      } else {
        addBoostPanel.classList.remove('open');
      }
      SoundFX.click();
    };

    btnToggleAddBoost?.addEventListener('click', () => toggleBoostPanel());
    btnCloseAddBoost?.addEventListener('click', () => toggleBoostPanel(false));
    btnCancelAddBoost?.addEventListener('click', () => toggleBoostPanel(false));

    if (selBoostTemplate) {
      selBoostTemplate.addEventListener('change', () => {
        const val = selBoostTemplate.value;
        if (val === 'enhance-abilities') {
          if (grpTargetAttr) grpTargetAttr.style.display = 'block';
          if (grpBoostLevel) grpBoostLevel.style.display = 'block';
          if (grpCustomFields) grpCustomFields.style.display = 'none';
        } else if (val === 'muscular-enh' || val === 'thought-block') {
          if (grpTargetAttr) grpTargetAttr.style.display = 'none';
          if (grpBoostLevel) grpBoostLevel.style.display = 'block';
          if (grpCustomFields) grpCustomFields.style.display = 'none';
        } else if (val === 'stimpack' || val === 'digital-uplink' || val === 'hes-suit') {
          if (grpTargetAttr) grpTargetAttr.style.display = 'none';
          if (grpBoostLevel) grpBoostLevel.style.display = 'none';
          if (grpCustomFields) grpCustomFields.style.display = 'none';
        } else if (val === 'custom') {
          if (grpTargetAttr) grpTargetAttr.style.display = 'block';
          if (grpBoostLevel) grpBoostLevel.style.display = 'none';
          if (grpCustomFields) grpCustomFields.style.display = 'block';
        }
      });
    }

    btnConfirmAddBoost?.addEventListener('click', () => {
      if (!currentCharacter) return;
      if (!currentCharacter.activeBoosts) currentCharacter.activeBoosts = getDefaultActiveBoosts();

      const template = selBoostTemplate ? selBoostTemplate.value : 'enhance-abilities';
      const targetAttr = document.getElementById('new-boost-target-attr')?.value || 'agility';
      const stance = document.getElementById('new-boost-level')?.value || 'success';
      const shortCodes = { agility: 'Agi', strength: 'Str', vigor: 'Vig', instinct: 'Inst', intelligence: 'Int', spirit: 'Spi' };
      const attrCap = targetAttr.charAt(0).toUpperCase() + targetAttr.slice(1);
      const sc = shortCodes[targetAttr] || attrCap;

      let newBoost = null;

      if (template === 'enhance-abilities') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: `Enhance Abilities (${attrCap})`,
          category: 'Psionics (PL 3)',
          type: 'enhance-abilities',
          targetAttr: targetAttr,
          state: stance,
          hasRaise: true,
          desc: `+1 die step (${sc}+) on Success, +2 die steps (${sc}++) on Raise to ${attrCap} and its linked skills.`
        };
      } else if (template === 'muscular-enh') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: 'Muscular Enhancement',
          category: 'Psionics (PL 4)',
          type: 'muscular-enh',
          state: stance,
          hasRaise: true,
          desc: '+1 (+2 on Raise) to Strength rolls, Athletics, Stealth, and Vigor tests vs extreme environments/fatigue/disease/poison.'
        };
      } else if (template === 'thought-block') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: 'Thought Blocking',
          category: 'Psionics',
          type: 'thought-block',
          state: stance,
          hasRaise: true,
          desc: '+1 (+3 on Raise) to Discipline and Resolve.'
        };
      } else if (template === 'stimpack') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: 'Military Stimpack',
          category: 'Chemical',
          type: 'stimpack',
          state: 'active',
          hasRaise: false,
          desc: '+2 Speed and Agi+ for the combat encounter.'
        };
      } else if (template === 'digital-uplink') {
        newBoost = {
          id: 'boost_' + Date.now(),
          name: 'Digital Uplink II',
          category: 'Gear',
          type: 'digital-uplink',
          state: 'active',
          hasRaise: false,
          desc: '+1 trait bonus to tech & tactical skills.'
        };
      } else if (template === 'hes-suit') {
        newBoost = {
          id: 'boost_hes_suit',
          name: 'Hostile Environment Suit',
          category: 'Gear',
          type: 'hes-suit',
          targetAttr: 'strength',
          state: 'active',
          hasRaise: false,
          desc: 'Hermetic Ghost suit granting Str+ and +8 Armor to Toughness.'
        };
      } else if (template === 'custom') {
        const customName = document.getElementById('new-boost-custom-name')?.value.trim() || 'Custom Trait Boost';
        const customType = document.getElementById('new-boost-custom-type')?.value || 'attr-step';
        newBoost = {
          id: 'boost_' + Date.now(),
          name: customName,
          category: 'Custom / Ally',
          type: 'custom',
          customType: customType,
          targetAttr: targetAttr,
          state: 'active',
          hasRaise: false,
          desc: `Custom modifier targeting ${attrCap} (${customType}).`
        };
      }

      if (newBoost) {
        currentCharacter.activeBoosts.push(newBoost);
        SoundFX.success();
        saveCharacters();
        toggleBoostPanel(false);
        renderAttributesAndStats();
        renderSkillsList();
        renderCharacterWeapons();
        updateQuickTelemetry();
      }
    });

    // Unified Global Click Listener
    document.addEventListener('click', e => {
      // Dynamic Boost Segmented Buttons
      const triBtn = e.target.closest('.tri-btn[data-boost-val]');
      if (triBtn) {
        const group = triBtn.closest('.tri-state-group[data-boost-idx]');
        if (!group) return;
        const idx = parseInt(group.getAttribute('data-boost-idx'), 10);
        const val = triBtn.getAttribute('data-boost-val');

        if (currentCharacter && currentCharacter.activeBoosts && currentCharacter.activeBoosts[idx]) {
          currentCharacter.activeBoosts[idx].state = val;
          SoundFX.toggle();
          saveCharacters();
          renderAttributesAndStats();
          renderSkillsList();
          renderCharacterWeapons();
          updateQuickTelemetry();
        }
        return;
      }

      // Delete Boost Button
      const delBoostBtn = e.target.closest('button[data-delete-boost-idx]');
      if (delBoostBtn) {
        const idx = parseInt(delBoostBtn.getAttribute('data-delete-boost-idx'), 10);
        if (currentCharacter && currentCharacter.activeBoosts) {
          currentCharacter.activeBoosts.splice(idx, 1);
          SoundFX.toggle();
          saveCharacters();
          renderAttributesAndStats();
          renderSkillsList();
          renderCharacterWeapons();
          updateQuickTelemetry();
        }
        return;
      }

      // Temp Attribute Step
      const tempAttrBtn = e.target.closest('.temp-step-btn[data-temp-attr]');
      if (tempAttrBtn) {
        const attr = tempAttrBtn.getAttribute('data-temp-attr');
        const action = tempAttrBtn.getAttribute('data-action');
        if (!currentCharacter.tempAttributeMods) currentCharacter.tempAttributeMods = {};
        const currentTemp = currentCharacter.tempAttributeMods[attr] || 0;

        if (action === 'inc') currentCharacter.tempAttributeMods[attr] = currentTemp + 1;
        else if (action === 'dec') currentCharacter.tempAttributeMods[attr] = currentTemp - 1;

        SoundFX.click();
        saveCharacters();
        renderAttributesAndStats();
        updateQuickTelemetry();
        return;
      }

      // Base Attribute Buttons
      const attrBtn = e.target.closest('.attr-btn[data-attr]');
      if (attrBtn) {
        const attr = attrBtn.getAttribute('data-attr');
        const action = attrBtn.getAttribute('data-action');
        const val = currentCharacter.attributes[attr] || 4;
        const idx = DIE_STEPS.indexOf(val);

        if (action === 'inc' && idx < DIE_STEPS.length - 1) currentCharacter.attributes[attr] = DIE_STEPS[idx + 1];
        else if (action === 'dec' && idx > 0) currentCharacter.attributes[attr] = DIE_STEPS[idx - 1];

        SoundFX.click();
        saveCharacters();
        renderAttributesAndStats();
        updateQuickTelemetry();
        return;
      }

      // Skill Step Buttons
      const skillBtn = e.target.closest('.attr-btn[data-skill]');
      if (skillBtn) {
        const skill = skillBtn.getAttribute('data-skill');
        const action = skillBtn.getAttribute('data-action');
        const val = currentCharacter.skills[skill] || 0;
        const idx = DIE_STEPS.indexOf(val);

        if (action === 'inc') {
          if (val === 0) currentCharacter.skills[skill] = 4;
          else if (idx < DIE_STEPS.length - 1) currentCharacter.skills[skill] = DIE_STEPS[idx + 1];
        } else if (action === 'dec') {
          if (idx === 0) currentCharacter.skills[skill] = 0;
          else if (idx > 0) currentCharacter.skills[skill] = DIE_STEPS[idx - 1];
        }

        SoundFX.click();
        saveCharacters();
        renderSkillsList();
        renderAttributesAndStats();
        return;
      }

      // Roll Buttons
      const rollBtn = e.target.closest('.roll-btn[data-roll-type]');
      if (rollBtn) {
        const type = rollBtn.getAttribute('data-roll-type');
        const name = rollBtn.getAttribute('data-name');
        const die = parseInt(rollBtn.getAttribute('data-die'), 10) || 4;
        const mod = parseInt(rollBtn.getAttribute('data-mod'), 10) || 0;
        if (type === 'trait' || type === 'skill') executeTraitRoll(name, die, mod, true);
        else if (type === 'damage') {
          const dmg = rollBtn.getAttribute('data-damage');
          const ap = parseInt(rollBtn.getAttribute('data-ap'), 10) || 0;
          executeDamageRoll(name, dmg, ap);
        }
        return;
      }

      // Armory & Catalog Interactions
      const addWep = e.target.closest('button[data-armory-add-weapon]');
      if (addWep) {
        const name = addWep.getAttribute('data-armory-add-weapon');
        const data = window.SC_DATA?.weapons?.find(w => w.name === name);
        if (data) {
          if (!currentCharacter.weapons) currentCharacter.weapons = [];
          currentCharacter.weapons.push({ name: data.name, range: data.range, damage: data.damage, ap: data.ap, notes: data.notes });
          SoundFX.success();
          saveCharacters();
          renderCharacterWeapons();
          alert(`Added "${data.name}" to equipped weapons.`);
        }
        return;
      }

      const equipArmor = e.target.closest('button[data-armory-equip-armor]');
      if (equipArmor) {
        const name = equipArmor.getAttribute('data-armory-equip-armor');
        const data = window.SC_DATA?.armors?.find(a => a.name === name);
        if (data) {
          currentCharacter.armor = {
            name: data.name,
            value: data.armor,
            class: data.class,
            boost: data.boost,
            defMod: data.defMod || 0,
            weight: data.weight,
            traits: data.traits,
            mounted: data.mounted,
            notes: data.desc
          };
          
          // Ensure activeBoosts has an active entry for this armor
          if (!currentCharacter.activeBoosts) currentCharacter.activeBoosts = [];
          const exIdx = currentCharacter.activeBoosts.findIndex(b => b.type === 'hes-suit' || b.id === 'boost_hes_suit' || b.name === data.name);
          if (exIdx >= 0) {
            currentCharacter.activeBoosts[exIdx].state = 'active';
            currentCharacter.activeBoosts[exIdx].name = data.name;
          } else {
            currentCharacter.activeBoosts.unshift({
              id: 'boost_hes_suit',
              name: data.name,
              category: 'Gear',
              type: 'hes-suit',
              targetAttr: 'strength',
              state: 'active',
              hasRaise: false,
              desc: `${data.name} (+${data.armor} Armor${data.boost ? `, ${data.boost}` : ''}).`
            });
          }

          SoundFX.success();
          saveCharacters();
          renderAttributesAndStats();
          renderCharacterArmorGear();
          updateQuickTelemetry();
          alert(`Equipped "${data.name}". Armor (+${data.armor}) and trait modifiers applied to Toughness and Attributes.`);
        }
        return;
      }

      const unequipArmorBtn = e.target.closest('#unequip-armor-btn');
      if (unequipArmorBtn) {
        currentCharacter.armor = { name: 'Unarmored', value: 0, boost: '', defMod: 0 };
        if (currentCharacter.activeBoosts) {
          const exIdx = currentCharacter.activeBoosts.findIndex(b => b.type === 'hes-suit' || b.id === 'boost_hes_suit');
          if (exIdx >= 0) currentCharacter.activeBoosts.splice(exIdx, 1);
        }
        SoundFX.toggle();
        saveCharacters();
        renderAttributesAndStats();
        renderCharacterArmorGear();
        updateQuickTelemetry();
        return;
      }

      const addGear = e.target.closest('button[data-armory-add-gear]');
      if (addGear) {
        const name = addGear.getAttribute('data-armory-add-gear');
        const data = window.SC_DATA?.gear_items?.find(g => g.name === name);
        if (data) {
          if (!currentCharacter.gear) currentCharacter.gear = [];
          const ex = currentCharacter.gear.find(g => g.name === name);
          if (ex) ex.count = (ex.count || 1) + 1;
          else currentCharacter.gear.push({ name: data.name, count: 1, notes: data.desc });
          SoundFX.success();
          saveCharacters();
          renderCharacterArmorGear();
          alert(`Added "${data.name}" to field gear.`);
        }
        return;
      }

      const addCyber = e.target.closest('button[data-armory-add-cyber]');
      if (addCyber) {
        const name = addCyber.getAttribute('data-armory-add-cyber');
        const data = window.SC_DATA?.cybernetics?.find(c => c.name === name);
        if (data) {
          if (!currentCharacter.cybernetics) currentCharacter.cybernetics = [];
          currentCharacter.cybernetics.push({ name: data.name, points: data.points, desc: data.desc });
          SoundFX.success();
          saveCharacters();
          renderCharacterCybernetics();
          alert(`Installed implant "${data.name}".`);
        }
        return;
      }

      const togglePower = e.target.closest('button[data-toggle-power]');
      if (togglePower) {
        const name = togglePower.getAttribute('data-toggle-power');
        const data = window.SC_DATA?.powers?.find(p => p.name === name);
        if (data) {
          if (!currentCharacter.powers) currentCharacter.powers = [];
          const exIdx = currentCharacter.powers.findIndex(p => p.name === name);
          if (exIdx >= 0) currentCharacter.powers.splice(exIdx, 1);
          else currentCharacter.powers.push({ name: data.name, discipline: data.discipline, desc: data.desc });
          SoundFX.toggle();
          saveCharacters();
          renderCharacterPowers();
          alert(`Updated "${data.name}" on character sheet.`);
        }
        return;
      }

      // Removal Handlers
      const remWep = e.target.closest('button[data-remove-weapon]');
      if (remWep) {
        currentCharacter.weapons.splice(parseInt(remWep.getAttribute('data-remove-weapon'), 10), 1);
        saveCharacters();
        renderCharacterWeapons();
        return;
      }

      const remPower = e.target.closest('button[data-remove-power]');
      if (remPower) {
        currentCharacter.powers.splice(parseInt(remPower.getAttribute('data-remove-power'), 10), 1);
        saveCharacters();
        renderCharacterPowers();
        return;
      }

      const remGear = e.target.closest('button[data-remove-gear]');
      if (remGear) {
        currentCharacter.gear.splice(parseInt(remGear.getAttribute('data-remove-gear'), 10), 1);
        saveCharacters();
        renderCharacterArmorGear();
        return;
      }

      const remCyber = e.target.closest('button[data-remove-cyber]');
      if (remCyber) {
        currentCharacter.cybernetics.splice(parseInt(remCyber.getAttribute('data-remove-cyber'), 10), 1);
        saveCharacters();
        renderCharacterCybernetics();
        return;
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadCharacters();
    setupEventListeners();
    renderAll();
    console.log('StarCraft High-Performance Living Document Initialized.');
  });

})();
