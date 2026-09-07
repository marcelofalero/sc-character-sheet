import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { Character, AttributeKey, ActiveBoost, CharacterAdvancement, CharacterWeapon, CharacterGearItem, CharacterPower, CharacterEdgeEntry, CharacterHindranceEntry, CharacterCybernetic } from '../types/character';
import { getDefaultCharacter, getDefaultActiveBoosts, RANK_COT_MAP } from '../data/defaultCharacter';
import { computeEffectiveCharacterState, computeEffectivePsiRating, calculatePoints, getRankForAdvancements } from '../utils/calculations';
import soundFx from '../utils/soundFx';

export interface TerminalLog {
  id: string;
  time: string;
  text: string;
  type: 'info' | 'success' | 'raise' | 'fail' | 'crit';
}

interface CharacterContextType {
  characters: Character[];
  activeCharacter: Character;
  activeId: string;
  effectiveState: ReturnType<typeof computeEffectiveCharacterState>;
  effectivePsi: ReturnType<typeof computeEffectivePsiRating>;
  pointPools: ReturnType<typeof calculatePoints>;
  terminalLogs: TerminalLog[];
  soundMuted: boolean;
  activeTab: string;
  searchTerm: string;
  sidebarOpen: boolean;

  // Actions
  setActiveTab: (tab: string) => void;
  setSearchTerm: (term: string) => void;
  setSidebarOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
  toggleSound: () => void;
  selectCharacter: (id: string) => void;
  createNewCharacter: () => void;
  deleteCurrentCharacter: () => void;
  exportJson: () => void;
  importJson: (jsonStr: string) => boolean;

  updateProfile: (updates: Partial<Character>) => void;
  updateAttribute: (key: AttributeKey, die: number) => void;
  updateSkill: (skillId: string, die: number) => void;
  setWounds: (wounds: number) => void;
  setFatigue: (fatigue: number) => void;

  toggleBoostState: (index: number, state: 'off' | 'active' | 'success' | 'raise') => void;
  addBoost: (boost: ActiveBoost) => void;
  deleteBoost: (index: number) => void;

  addAdvancement: (adv: Omit<CharacterAdvancement, 'id'>) => void;
  deleteAdvancement: (index: number) => void;

  addWeapon: (w: CharacterWeapon) => void;
  deleteWeapon: (index: number) => void;

  addGear: (g: CharacterGearItem) => void;
  deleteGear: (index: number) => void;

  addPower: (p: CharacterPower) => void;
  deletePower: (index: number) => void;

  addEdge: (e: CharacterEdgeEntry) => void;
  deleteEdge: (index: number) => void;

  addHindrance: (h: CharacterHindranceEntry) => void;
  deleteHindrance: (index: number) => void;

  addCybernetic: (c: CharacterCybernetic) => void;
  deleteCybernetic: (index: number) => void;

  addTerminalLog: (text: string, type?: TerminalLog['type']) => void;
  clearTerminalLogs: () => void;
}

const CharacterContext = createContext<CharacterContextType | null>(null);

const STORAGE_KEY = 'sc_rpg_characters';
const ACTIVE_ID_KEY = 'sc_rpg_active_char_id';

export const CharacterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [characters, setCharacters] = useState<Character[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Normalize and auto-sync rank
          return parsed.map((c: Character) => {
            if (!c.activeBoosts || !Array.isArray(c.activeBoosts) || c.activeBoosts.length === 0) {
              c.activeBoosts = getDefaultActiveBoosts();
            }
            if (c.credits === undefined || c.credits === 3325) {
              c.credits = 11325;
            }
            if (c.currentWounds === undefined) c.currentWounds = 0;
            if (c.currentFatigue === undefined) c.currentFatigue = 0;
            if (!Array.isArray(c.advancementsList)) {
              c.advancementsList = getDefaultCharacter().advancementsList;
            }
            const totalAdv = c.advancementsList.length;
            c.advancements = totalAdv;
            const autoRank = getRankForAdvancements(totalAdv);
            if (!c.rank || (totalAdv >= 4 && c.rank === 'Novice')) {
              c.rank = autoRank;
              c.cotLevel = RANK_COT_MAP[autoRank]?.cotLevel || 'Operative';
            }
            return c;
          });
        }
      }
    } catch (e) {}
    return [getDefaultCharacter()];
  });

  const [activeId, setActiveId] = useState<string>(() => {
    try {
      const savedId = localStorage.getItem(ACTIVE_ID_KEY);
      if (savedId) return savedId;
    } catch (e) {}
    return characters[0]?.id || 'char_rick_kageyama';
  });

  const [activeTab, setActiveTab] = useState<string>('dossier');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [soundMuted, setSoundMuted] = useState<boolean>(false);

  const [terminalLogs, setTerminalLogs] = useState<TerminalLog[]>([
    {
      id: 'log-init',
      time: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      text: 'Battle-Net logging active. StarCraft Living Dossier initialized with pure data mutations.',
      type: 'info'
    }
  ]);

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(characters));
      localStorage.setItem(ACTIVE_ID_KEY, activeId);
    } catch (e) {}
  }, [characters, activeId]);

  const activeCharacter = useMemo(() => {
    return characters.find(c => c.id === activeId) || characters[0] || getDefaultCharacter();
  }, [characters, activeId]);

  const effectiveState = useMemo(() => {
    return computeEffectiveCharacterState(activeCharacter);
  }, [activeCharacter]);

  const effectivePsi = useMemo(() => {
    return computeEffectivePsiRating(activeCharacter);
  }, [activeCharacter]);

  const pointPools = useMemo(() => {
    return calculatePoints(activeCharacter);
  }, [activeCharacter]);

  // Terminal Logging
  const addTerminalLog = useCallback((text: string, type: TerminalLog['type'] = 'info') => {
    const time = new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setTerminalLogs(prev => [...prev.slice(-49), { id: `log-${Date.now()}-${Math.random()}`, time, text, type }]);
  }, []);

  const clearTerminalLogs = useCallback(() => {
    setTerminalLogs([]);
    soundFx.click();
  }, []);

  const toggleSound = useCallback(() => {
    setSoundMuted(prev => {
      const next = !prev;
      soundFx.muted = next;
      if (!next) soundFx.toggle();
      return next;
    });
  }, []);

  // Update Active Character
  const updateCurrentChar = useCallback((updater: (prev: Character) => Character) => {
    setCharacters(prevChars => {
      return prevChars.map(c => {
        if (c.id === activeId) {
          const updated = updater(c);
          // Auto-sync rank and C.O.T. Level if advancementsList changed
          const totalAdv = (updated.advancementsList && updated.advancementsList.length) !== undefined
            ? updated.advancementsList.length
            : (updated.advancements || 0);
          updated.advancements = totalAdv;
          const autoRank = getRankForAdvancements(totalAdv);
          if (updated.rank !== autoRank) {
            updated.rank = autoRank;
            updated.cotLevel = RANK_COT_MAP[autoRank]?.cotLevel || 'Operative';
          }
          return updated;
        }
        return c;
      });
    });
  }, [activeId]);

  const updateProfile = useCallback((updates: Partial<Character>) => {
    updateCurrentChar(prev => ({ ...prev, ...updates }));
  }, [updateCurrentChar]);

  const updateAttribute = useCallback((key: AttributeKey, die: number) => {
    soundFx.click();
    updateCurrentChar(prev => ({
      ...prev,
      attributes: {
        ...prev.attributes,
        [key]: die
      }
    }));
  }, [updateCurrentChar]);

  const updateSkill = useCallback((skillId: string, die: number) => {
    soundFx.click();
    updateCurrentChar(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skillId]: die
      }
    }));
  }, [updateCurrentChar]);

  const setWounds = useCallback((wounds: number) => {
    soundFx.toggle();
    updateCurrentChar(prev => ({
      ...prev,
      currentWounds: wounds
    }));
  }, [updateCurrentChar]);

  const setFatigue = useCallback((fatigue: number) => {
    soundFx.toggle();
    updateCurrentChar(prev => ({
      ...prev,
      currentFatigue: fatigue
    }));
  }, [updateCurrentChar]);

  const toggleBoostState = useCallback((index: number, state: 'off' | 'active' | 'success' | 'raise') => {
    soundFx.toggle();
    updateCurrentChar(prev => {
      const nextBoosts = [...(prev.activeBoosts || [])];
      if (nextBoosts[index]) {
        nextBoosts[index] = { ...nextBoosts[index], state };
      }
      return { ...prev, activeBoosts: nextBoosts };
    });
  }, [updateCurrentChar]);

  const addBoost = useCallback((boost: ActiveBoost) => {
    soundFx.success();
    updateCurrentChar(prev => ({
      ...prev,
      activeBoosts: [boost, ...(prev.activeBoosts || [])]
    }));
  }, [updateCurrentChar]);

  const deleteBoost = useCallback((index: number) => {
    soundFx.alert();
    updateCurrentChar(prev => {
      const nextBoosts = [...(prev.activeBoosts || [])];
      nextBoosts.splice(index, 1);
      return { ...prev, activeBoosts: nextBoosts };
    });
  }, [updateCurrentChar]);

  const addAdvancement = useCallback((adv: Omit<CharacterAdvancement, 'id'>) => {
    soundFx.success();
    updateCurrentChar(prev => {
      const list = [...(prev.advancementsList || [])];
      const newAdv: CharacterAdvancement = {
        ...adv,
        id: `adv_${Date.now()}`
      };
      list.push(newAdv);
      return {
        ...prev,
        advancementsList: list,
        advancements: list.length
      };
    });
  }, [updateCurrentChar]);

  const deleteAdvancement = useCallback((index: number) => {
    soundFx.alert();
    updateCurrentChar(prev => {
      const list = [...(prev.advancementsList || [])];
      list.splice(index, 1);
      return {
        ...prev,
        advancementsList: list,
        advancements: list.length
      };
    });
  }, [updateCurrentChar]);

  const addWeapon = useCallback((w: CharacterWeapon) => {
    soundFx.success();
    updateCurrentChar(prev => ({ ...prev, weapons: [...(prev.weapons || []), w] }));
  }, [updateCurrentChar]);

  const deleteWeapon = useCallback((index: number) => {
    soundFx.alert();
    updateCurrentChar(prev => {
      const w = [...(prev.weapons || [])];
      w.splice(index, 1);
      return { ...prev, weapons: w };
    });
  }, [updateCurrentChar]);

  const addGear = useCallback((g: CharacterGearItem) => {
    soundFx.success();
    updateCurrentChar(prev => ({ ...prev, gear: [...(prev.gear || []), g] }));
  }, [updateCurrentChar]);

  const deleteGear = useCallback((index: number) => {
    soundFx.alert();
    updateCurrentChar(prev => {
      const g = [...(prev.gear || [])];
      g.splice(index, 1);
      return { ...prev, gear: g };
    });
  }, [updateCurrentChar]);

  const addPower = useCallback((p: CharacterPower) => {
    soundFx.success();
    updateCurrentChar(prev => ({ ...prev, powers: [...(prev.powers || []), p] }));
  }, [updateCurrentChar]);

  const deletePower = useCallback((index: number) => {
    soundFx.alert();
    updateCurrentChar(prev => {
      const p = [...(prev.powers || [])];
      p.splice(index, 1);
      return { ...prev, powers: p };
    });
  }, [updateCurrentChar]);

  const addEdge = useCallback((e: CharacterEdgeEntry) => {
    soundFx.success();
    updateCurrentChar(prev => ({ ...prev, edges: [...(prev.edges || []), e] }));
  }, [updateCurrentChar]);

  const deleteEdge = useCallback((index: number) => {
    soundFx.alert();
    updateCurrentChar(prev => {
      const ed = [...(prev.edges || [])];
      ed.splice(index, 1);
      return { ...prev, edges: ed };
    });
  }, [updateCurrentChar]);

  const addHindrance = useCallback((h: CharacterHindranceEntry) => {
    soundFx.success();
    updateCurrentChar(prev => ({ ...prev, hindrances: [...(prev.hindrances || []), h] }));
  }, [updateCurrentChar]);

  const deleteHindrance = useCallback((index: number) => {
    soundFx.alert();
    updateCurrentChar(prev => {
      const hi = [...(prev.hindrances || [])];
      hi.splice(index, 1);
      return { ...prev, hindrances: hi };
    });
  }, [updateCurrentChar]);

  const addCybernetic = useCallback((c: CharacterCybernetic) => {
    soundFx.success();
    updateCurrentChar(prev => ({ ...prev, cybernetics: [...(prev.cybernetics || []), c] }));
  }, [updateCurrentChar]);

  const deleteCybernetic = useCallback((index: number) => {
    soundFx.alert();
    updateCurrentChar(prev => {
      const cy = [...(prev.cybernetics || [])];
      cy.splice(index, 1);
      return { ...prev, cybernetics: cy };
    });
  }, [updateCurrentChar]);

  const selectCharacter = useCallback((id: string) => {
    soundFx.click();
    setActiveId(id);
  }, []);

  const createNewCharacter = useCallback(() => {
    soundFx.success();
    const newChar: Character = {
      ...getDefaultCharacter(),
      id: `char_${Date.now()}`,
      name: 'New Operative',
      codename: 'Ghost Agent',
      advancements: 0,
      advancementsList: []
    };
    setCharacters(prev => [...prev, newChar]);
    setActiveId(newChar.id);
  }, []);

  const deleteCurrentCharacter = useCallback(() => {
    if (characters.length <= 1) {
      alert('Cannot delete the only operative profile.');
      return;
    }
    if (!window.confirm(`Delete profile for ${activeCharacter.name}?`)) return;
    soundFx.alert();
    setCharacters(prev => {
      const rem = prev.filter(c => c.id !== activeId);
      setActiveId(rem[0].id);
      return rem;
    });
  }, [characters, activeCharacter, activeId]);

  const exportJson = useCallback(() => {
    soundFx.click();
    const dataStr = JSON.stringify(activeCharacter, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${(activeCharacter.name || 'operative').toLowerCase().replace(/\s+/g, '_')}_dossier.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [activeCharacter]);

  const importJson = useCallback((jsonStr: string): boolean => {
    try {
      const parsed = JSON.parse(jsonStr);
      if (!parsed.name || !parsed.attributes) {
        alert('Invalid character JSON format.');
        return false;
      }
      parsed.id = `char_imported_${Date.now()}`;
      setCharacters(prev => [...prev, parsed]);
      setActiveId(parsed.id);
      soundFx.success();
      return true;
    } catch (e) {
      alert('Error parsing character JSON.');
      return false;
    }
  }, []);

  const value = useMemo(() => ({
    characters,
    activeCharacter,
    activeId,
    effectiveState,
    effectivePsi,
    pointPools,
    terminalLogs,
    soundMuted,
    activeTab,
    searchTerm,
    sidebarOpen,
    setActiveTab,
    setSearchTerm,
    setSidebarOpen,
    toggleSound,
    selectCharacter,
    createNewCharacter,
    deleteCurrentCharacter,
    exportJson,
    importJson,
    updateProfile,
    updateAttribute,
    updateSkill,
    setWounds,
    setFatigue,
    toggleBoostState,
    addBoost,
    deleteBoost,
    addAdvancement,
    deleteAdvancement,
    addWeapon,
    deleteWeapon,
    addGear,
    deleteGear,
    addPower,
    deletePower,
    addEdge,
    deleteEdge,
    addHindrance,
    deleteHindrance,
    addCybernetic,
    deleteCybernetic,
    addTerminalLog,
    clearTerminalLogs
  }), [
    characters,
    activeCharacter,
    activeId,
    effectiveState,
    effectivePsi,
    pointPools,
    terminalLogs,
    soundMuted,
    activeTab,
    searchTerm,
    sidebarOpen,
    setActiveTab,
    setSearchTerm,
    setSidebarOpen,
    toggleSound,
    selectCharacter,
    createNewCharacter,
    deleteCurrentCharacter,
    exportJson,
    importJson,
    updateProfile,
    updateAttribute,
    updateSkill,
    setWounds,
    setFatigue,
    toggleBoostState,
    addBoost,
    deleteBoost,
    addAdvancement,
    deleteAdvancement,
    addWeapon,
    deleteWeapon,
    addGear,
    deleteGear,
    addPower,
    deletePower,
    addEdge,
    deleteEdge,
    addHindrance,
    deleteHindrance,
    addCybernetic,
    deleteCybernetic,
    addTerminalLog,
    clearTerminalLogs
  ]);

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacter = () => {
  const ctx = useContext(CharacterContext);
  if (!ctx) throw new Error('useCharacter must be used within CharacterProvider');
  return ctx;
};
