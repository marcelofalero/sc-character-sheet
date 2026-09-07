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
      "activeBuffs": {
        "hesSuit": true,
        "digitalUplink": true,
        "muscularEnhancement": false,
        "muscularEnhancementRaise": false,
        "rush": false,
        "rushRaise": false,
        "thoughtBlock": false,
        "thoughtBlockRaise": false,
        "stimpack": false
      },
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
        { "name": "Rush", "discipline": "Augmentation", "desc": "Speed increases by PL, move at ¼ Speed without Free Attacks | 2 SP" },
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
    const buffs = char.activeBuffs || {};
    const armor = char.armor;
    if (!armor || !armor.name || armor.name === 'Unarmored' || armor.name === 'None') {
      return { armorVal: 0, strStep: 0, agiStep: 0, defMod: 0, isHES: false, active: false };
    }

    const isHES = (armor.name === 'Hostile Environment Suit' || armor.name === 'HES');
    // If HES is equipped, it respects the hesSuit buff toggle
    if (isHES && buffs.hesSuit === false) {
      return { armorVal: 0, strStep: 0, agiStep: 0, defMod: 0, isHES: true, active: false };
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
    const buffs = char.activeBuffs || {};
    const tempMods = char.tempAttributeMods || {};
    const armorMods = getArmorStatModifiers(char);

    let agiRushStep = 0;
    if (buffs.rush) {
      agiRushStep = buffs.rushRaise ? 2 : 1;
    }

    let strStep = armorMods.strStep + (tempMods.strength || 0);
    let agiStep = armorMods.agiStep + agiRushStep + (tempMods.agility || 0);
    let vigStep = (tempMods.vigor || 0);
    let instStep = (tempMods.instinct || 0);
    let intStep = (tempMods.intelligence || 0);
    let spiStep = (tempMods.spirit || 0);

    const baseAgi = char.attributes.agility || 4;
    const baseStr = char.attributes.strength || 4;
    const baseVig = char.attributes.vigor || 4;
    const baseInst = char.attributes.instinct || 4;
    const baseIntel = char.attributes.intelligence || 4;
    const baseSpi = char.attributes.spirit || 4;

    return {
      base: { agility: baseAgi, strength: baseStr, vigor: baseVig, instinct: baseInst, intelligence: baseIntel, spirit: baseSpi },
      steps: { agility: agiStep, strength: strStep, vigor: vigStep, instinct: instStep, intelligence: intStep, spirit: spiStep },
      effective: {
        agility: getSteppedDie(baseAgi, agiStep),
        strength: getSteppedDie(baseStr, strStep),
        vigor: getSteppedDie(baseVig, vigStep),
        instinct: getSteppedDie(baseInst, instStep),
        intelligence: getSteppedDie(baseIntel, intStep),
        spirit: getSteppedDie(baseSpi, spiStep)
      }
    };
  }

  function getEffectiveAttributeRollBonus(char, attrId) {
    const buffs = char.activeBuffs || {};
    let bonus = 0;
    if (attrId === 'strength' && buffs.muscularEnhancement) {
      bonus += buffs.muscularEnhancementRaise ? 2 : 1;
    }
    return bonus;
  }

  function getEffectiveSkillBonus(char, skillId) {
    const buffs = char.activeBuffs || {};
    const tempMods = char.tempSkillMods || {};
    let bonus = tempMods[skillId] || 0;

    if (buffs.digitalUplink && ['ranged', 'athletics', 'computers', 'medicine', 'lore', 'perception', 'science', 'stealth'].includes(skillId)) {
      bonus += 1;
    }
    if (buffs.muscularEnhancement && ['athletics', 'stealth'].includes(skillId)) {
      bonus += buffs.muscularEnhancementRaise ? 2 : 1;
    }
    return bonus;
  }

  function calculateDerivedStats(char) {
    const attrData = getEffectiveAttributes(char);
    const eff = attrData.effective;
    const psi = parseInt(char.psiRating, 10) || 5;
    const buffs = char.activeBuffs || {};
    const armorMods = getArmorStatModifiers(char);

    const armorVal = armorMods.armorVal;
    const defMod = armorMods.defMod;

    const rawDefense = Math.floor(eff.agility / 2) + Math.floor(eff.instinct / 2) + defMod;
    const defense = Math.max(1, rawDefense);

    const tbBonus = buffs.thoughtBlock ? (buffs.thoughtBlockRaise ? 3 : 1) : 0;
    const discipline = Math.floor(eff.spirit / 2) + Math.floor(eff.intelligence / 2) + tbBonus;

    const baseToughness = Math.floor(eff.vigor / 2) + Math.floor(eff.strength / 2);
    const totalToughness = baseToughness + armorVal;

    const resolve = Math.floor(eff.spirit / 2) + Math.floor(eff.instinct / 2) + psi + tbBonus;
    const maxWounds = Math.floor(eff.strength / 3) + 1;
    const maxFatigue = Math.floor(eff.vigor / 3);

    let speed = 6;
    if (buffs.rush) speed += psi;
    if (buffs.stimpack) speed += 2;

    return {
      defense,
      discipline,
      baseToughness,
      totalToughness,
      armorVal,
      defMod,
      resolve,
      maxWounds: Math.max(2, maxWounds),
      maxFatigue: Math.max(1, maxFatigue),
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
        const charSkillDie = char.skills[sk.id] || 0;
        const linkedAttr = sk.attr.toLowerCase();
        const linkedAttrDie = char.attributes[linkedAttr] || 4;

        if (charSkillDie > 0) {
          let freeDie = sk.core ? 4 : 0;
          if (char.trainingPath === 'ghost') {
            if (sk.id === 'ranged' || sk.id === 'melee') freeDie = Math.max(freeDie, 4);
            if (sk.id === 'stealth') freeDie = Math.max(freeDie, 6);
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

  function renderAttributesAndStats() {
    if (!currentCharacter) return;

    if (!currentCharacter.activeBuffs) {
      currentCharacter.activeBuffs = { hesSuit: true, digitalUplink: true, muscularEnhancement: false, muscularEnhancementRaise: false, rush: false, rushRaise: false, thoughtBlock: false, thoughtBlockRaise: false, stimpack: false };
    }
    if (!currentCharacter.tempAttributeMods) {
      currentCharacter.tempAttributeMods = { agility: 0, strength: 0, vigor: 0, instinct: 0, intelligence: 0, spirit: 0 };
    }
    if (!currentCharacter.tempSkillMods) {
      currentCharacter.tempSkillMods = {};
    }

    const stats = calculateDerivedStats(currentCharacter);
    const points = calculatePoints(currentCharacter);
    const attrData = stats.attrData;

    // Sync 3-State Segmented Controls
    const syncTriGroup = (groupName, activeVal) => {
      const group = document.querySelector(`.tri-state-group[data-buff-group="${groupName}"]`);
      if (group) {
        group.querySelectorAll('.tri-btn').forEach(btn => {
          const val = btn.getAttribute('data-val');
          if (val === activeVal) {
            btn.classList.add('active');
            if (val === 'raise') btn.classList.add('raise-active');
            else btn.classList.remove('raise-active');
          } else {
            btn.classList.remove('active', 'raise-active');
          }
        });
      }
    };

    const b = currentCharacter.activeBuffs || {};
    syncTriGroup('hesSuit', b.hesSuit ? 'active' : 'off');
    syncTriGroup('digitalUplink', b.digitalUplink ? 'active' : 'off');
    const muscVal = b.muscularEnhancement ? (b.muscularEnhancementRaise ? 'raise' : 'success') : 'off';
    syncTriGroup('muscularEnhancement', muscVal);
    const rushVal = b.rush ? (b.rushRaise ? 'raise' : 'success') : 'off';
    syncTriGroup('rush', rushVal);
    const tbVal = b.thoughtBlock ? (b.thoughtBlockRaise ? 'raise' : 'success') : 'off';
    syncTriGroup('thoughtBlock', tbVal);
    syncTriGroup('stimpack', b.stimpack ? 'active' : 'off');

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
    document.getElementById('stat-defense').textContent = stats.defense;
    const defFormula = document.getElementById('stat-defense-formula');
    if (defFormula) {
      defFormula.textContent = `½ Agi (${Math.floor(stats.attrData.effective.agility/2)}) + ½ Inst (${Math.floor(stats.attrData.effective.instinct/2)})${stats.defMod !== 0 ? ` + Armor (${stats.defMod})` : ''}`;
    }

    document.getElementById('stat-discipline').textContent = stats.discipline;
    document.getElementById('stat-toughness').textContent = `${stats.totalToughness} (${stats.armorVal})`;
    const toughFormula = document.getElementById('stat-toughness-formula');
    if (toughFormula) {
      toughFormula.textContent = `½ Vigor (${Math.floor(stats.attrData.effective.vigor/2)}) + ½ Str (${Math.floor(stats.attrData.effective.strength/2)}) + Armor (${stats.armorVal})`;
    }

    document.getElementById('stat-resolve').textContent = stats.resolve;
    document.getElementById('stat-speed').textContent = `${stats.speed}"`;

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

    window.SC_DATA.skills.forEach(sk => {
      const baseVal = currentCharacter.skills[sk.id] || 0;
      const linkedAttr = sk.attr.toLowerCase();
      const linkedAttrEff = attrData.effective[linkedAttr] || 4;
      const bonus = getEffectiveSkillBonus(currentCharacter, sk.id);

      const row = document.createElement('div');
      row.className = 'skill-row';
      row.innerHTML = `
        <div>
          <span class="skill-name">${sk.name}</span>
          ${sk.core ? '<span class="core-badge">Core</span>' : ''}
          ${bonus > 0 ? `<span class="tag tag-emerald">+${bonus} Buff</span>` : ''}
          <div style="font-size:0.72rem; color:var(--text-dim);">${sk.attr} (${dieLabel(linkedAttrEff)})</div>
        </div>
        <div style="display:flex; align-items:center; gap:0.35rem;">
          <button class="attr-btn" data-skill="${sk.id}" data-action="dec" ${baseVal <= 0 ? 'disabled' : ''}>-</button>
          <span class="skill-die-badge">${dieLabel(baseVal)}</span>
          <button class="attr-btn" data-skill="${sk.id}" data-action="inc" ${baseVal >= 14 ? 'disabled' : ''}>+</button>
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
          <span class="tag tag-violet">${p.discipline}</span>
        </div>
        <div class="card-desc">${p.desc}</div>
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
              ${arm.boost ? `<span class="tag tag-cyan" style="margin-left:4px;">${arm.boost}</span>` : ''}
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
          <span class="card-title" style="font-size:0.85rem;">${c.name}</span>
          <span class="tag tag-emerald">${c.points || 1} Pt</span>
        </div>
        <div class="card-desc">${c.desc || ''}</div>
        <div style="display:flex; justify-content:flex-end; margin-top:0.2rem;">
          <button class="btn btn-crimson btn-sm" data-remove-cyber="${idx}">Remove</button>
        </div>
      `;
      list.appendChild(div);
    });

    const badge = document.getElementById('cyborg-rating-badge');
    if (badge) badge.textContent = `Cyborg Rating: ${totalPoints}`;
  }

  function updateQuickTelemetry() {
    if (!currentCharacter) return;
    const stats = calculateDerivedStats(currentCharacter);
    const nameEl = document.getElementById('quick-hud-name');
    if (nameEl) nameEl.textContent = currentCharacter.name || 'Ghost';
    const defEl = document.getElementById('quick-hud-defense');
    if (defEl) defEl.textContent = stats.defense;
    const discEl = document.getElementById('quick-hud-discipline');
    if (discEl) discEl.textContent = stats.discipline;
    const tghEl = document.getElementById('quick-hud-toughness');
    if (tghEl) tghEl.textContent = `${stats.totalToughness} (${stats.armorVal})`;
    const resEl = document.getElementById('quick-hud-resolve');
    if (resEl) resEl.textContent = stats.resolve;
    const wndEl = document.getElementById('quick-hud-wounds');
    if (wndEl) wndEl.textContent = `${currentCharacter.currentWounds || 0}/${stats.maxWounds}`;
    const psiEl = document.getElementById('quick-hud-psi');
    if (psiEl) psiEl.textContent = currentCharacter.psiRating || 5;
  }

  function updateCharacterSelector() {
    const sel = document.getElementById('global-character-select');
    if (!sel) return;
    sel.innerHTML = '';
    characters.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.name} (${c.codename || 'Ghost'})`;
      if (currentCharacter && c.id === currentCharacter.id) opt.selected = true;
      sel.appendChild(opt);
    });
  }

  // --- Dice & Roll Engine ---
  function rollExplodingDie(sides) {
    if (sides <= 0) return { total: 0, rolls: [0] };
    const rolls = [];
    let current = 0;
    do {
      current = Math.floor(Math.random() * sides) + 1;
      rolls.push(current);
    } while (current === sides);
    return { total: rolls.reduce((a, b) => a + b, 0), rolls };
  }

  function executeTraitRoll(name, dieVal, modifier = 0, isWild = true) {
    SoundFX.roll();
    openDiceDrawer();

    const trait = rollExplodingDie(dieVal);
    let wild = null;
    let finalRes = 0;
    let chosen = 'Trait';

    if (isWild) {
      wild = rollExplodingDie(6);
      if (wild.total > trait.total) {
        finalRes = wild.total + modifier;
        chosen = 'Wild Die';
      } else {
        finalRes = trait.total + modifier;
        chosen = 'Trait Die';
      }
    } else {
      finalRes = trait.total + modifier;
    }

    const isCritFail = isWild && trait.rolls[0] === 1 && wild.rolls[0] === 1;
    const isSuccess = finalRes >= 4;
    const raises = isSuccess ? Math.floor((finalRes - 4) / 4) : 0;

    if (isCritFail) SoundFX.alert();
    else if (isSuccess) SoundFX.success();

    logToTerminal({
      title: `ROLL: ${name}`,
      traitDie: `d${dieVal} [${trait.rolls.join('+')}] = ${trait.total}`,
      wildDie: isWild ? `Wild d6 [${wild.rolls.join('+')}] = ${wild.total}` : null,
      modifier: modifier !== 0 ? (modifier > 0 ? `+${modifier}` : `${modifier}`) : null,
      outcome: isCritFail ? 'CRITICAL FAILURE!' : (isSuccess ? (raises > 0 ? `SUCCESS with ${raises} RAISE${raises > 1 ? 'S' : ''}!` : 'SUCCESS!') : 'FAILURE.')
    });
  }

  function executeDamageRoll(name, damageExpr, ap = 0) {
    SoundFX.roll();
    openDiceDrawer();

    let expr = damageExpr;
    const strVal = currentCharacter?.attributes?.strength || 6;
    expr = expr.replace(/Str/gi, `d${strVal}`);
    const psiVal = currentCharacter?.psiRating || 5;
    expr = expr.replace(/Psi/gi, `${psiVal}`);

    let totalDmg = 0;
    let breakdown = [];
    const parts = expr.split('+').map(p => p.trim());

    parts.forEach(part => {
      const match = part.match(/^(\d*)d(\d+)$/i);
      if (match) {
        const count = parseInt(match[1], 10) || 1;
        const sides = parseInt(match[2], 10);
        let dRolls = [];
        for (let i = 0; i < count; i++) {
          const res = rollExplodingDie(sides);
          dRolls.push(res.total);
          totalDmg += res.total;
        }
        breakdown.push(`${count}d${sides} [${dRolls.join(', ')}]`);
      } else {
        const n = parseInt(part, 10);
        if (!isNaN(n)) {
          totalDmg += n;
          breakdown.push(`+${n}`);
        }
      }
    });

    SoundFX.success();
    logToTerminal({
      title: `DAMAGE: ${name}`,
      formula: `${damageExpr} (${expr})`,
      breakdown: breakdown.join(' + '),
      ap: ap > 0 ? `Armor Piercing (AP): ${ap}` : null,
      outcome: `Total Damage: ${totalDmg} pts (AP ${ap})`
    });
  }

  function openDiceDrawer() {
    const drawer = document.getElementById('dice-drawer');
    if (drawer) drawer.classList.add('active');
  }

  function logToTerminal(data) {
    const screen = document.getElementById('terminal-screen-logs');
    if (!screen) return;

    const div = document.createElement('div');
    div.style.marginBottom = '0.6rem';
    div.style.paddingBottom = '0.4rem';
    div.style.borderBottom = '1px solid rgba(0, 229, 255, 0.15)';

    let html = `<div class="terminal-line cyan" style="font-weight:bold;">▶ ${data.title}</div>`;
    if (data.traitDie) html += `<div class="terminal-line">${data.traitDie}</div>`;
    if (data.wildDie) html += `<div class="terminal-line">${data.wildDie}</div>`;
    if (data.modifier) html += `<div class="terminal-line">Mod: ${data.modifier}</div>`;
    if (data.breakdown) html += `<div class="terminal-line">${data.breakdown}</div>`;
    if (data.ap) html += `<div class="terminal-line emerald">${data.ap}</div>`;

    const outcomeClass = data.outcome?.includes('SUCCESS') ? 'emerald' : (data.outcome?.includes('CRITICAL') || data.outcome?.includes('FAILURE') ? 'crimson' : 'amber');
    html += `<div class="terminal-line ${outcomeClass}" style="font-weight:bold; margin-top:0.2rem;">➔ ${data.outcome}</div>`;

    div.innerHTML = html;
    screen.appendChild(div);
    screen.scrollTop = screen.scrollHeight;
  }

  window.DocEngine = {
    rollExpr(expr) {
      if (expr.includes('+') || expr.toLowerCase().includes('str') || expr.startsWith('2d') || expr.startsWith('3d')) {
        executeDamageRoll('Formula Roll', expr, 0);
      } else {
        const sides = parseInt(expr.replace('d', ''), 10) || 6;
        executeTraitRoll(`Roll ${expr}`, sides, 0, true);
      }
    }
  };

  // --- Fast Debounce Helper ---
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

    // Global Document Search (Debounced for 60fps performance)
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

    // Filter Hindrances (Debounced)
    document.getElementById('hindrance-filter-input')?.addEventListener('input', debounce(e => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('#hindrances-grid-container [data-hind-item]').forEach(el => {
        el.style.display = el.getAttribute('data-hind-item').includes(q) || el.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
      });
    }, 150));

    // Filter Edges (Debounced)
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

    // Unified Global Click Listener (High-Performance Event Delegation)
    document.addEventListener('click', e => {
      // 3-State Segmented Buttons
      const triBtn = e.target.closest('.tri-btn');
      if (triBtn) {
        const group = triBtn.closest('.tri-state-group');
        if (!group) return;
        const groupName = group.getAttribute('data-buff-group');
        const val = triBtn.getAttribute('data-val');
        if (!currentCharacter.activeBuffs) currentCharacter.activeBuffs = {};

        if (groupName === 'hesSuit') {
          const isActive = (val === 'active');
          currentCharacter.activeBuffs.hesSuit = isActive;
          if (isActive && (!currentCharacter.armor || currentCharacter.armor.name !== 'Hostile Environment Suit')) {
            const hesData = window.SC_DATA?.armors?.find(a => a.name === 'Hostile Environment Suit');
            if (hesData) {
              currentCharacter.armor = {
                name: hesData.name,
                value: hesData.armor,
                class: hesData.class,
                boost: hesData.boost,
                defMod: hesData.defMod || 0,
                weight: hesData.weight,
                traits: hesData.traits,
                mounted: hesData.mounted,
                notes: hesData.desc
              };
            }
          }
        } else if (groupName === 'digitalUplink') {
          currentCharacter.activeBuffs.digitalUplink = (val === 'active');
        } else if (groupName === 'muscularEnhancement') {
          currentCharacter.activeBuffs.muscularEnhancement = (val !== 'off');
          currentCharacter.activeBuffs.muscularEnhancementRaise = (val === 'raise');
        } else if (groupName === 'rush') {
          currentCharacter.activeBuffs.rush = (val !== 'off');
          currentCharacter.activeBuffs.rushRaise = (val === 'raise');
        } else if (groupName === 'thoughtBlock') {
          currentCharacter.activeBuffs.thoughtBlock = (val !== 'off');
          currentCharacter.activeBuffs.thoughtBlockRaise = (val === 'raise');
        } else if (groupName === 'stimpack') {
          currentCharacter.activeBuffs.stimpack = (val === 'active');
        }

        SoundFX.toggle();
        saveCharacters();
        renderAttributesAndStats();
        renderSkillsList();
        renderCharacterWeapons();
        updateQuickTelemetry();
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
          if (!currentCharacter.activeBuffs) currentCharacter.activeBuffs = {};
          currentCharacter.activeBuffs.hesSuit = (data.name === 'Hostile Environment Suit');
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
        if (currentCharacter.activeBuffs) currentCharacter.activeBuffs.hesSuit = false;
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
