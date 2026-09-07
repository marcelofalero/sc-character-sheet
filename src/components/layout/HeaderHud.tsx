import React, { useRef } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { Volume2, VolumeX, Download, Upload, Plus, Trash2, Menu } from 'lucide-react';

export const HeaderHud: React.FC = () => {
  const {
    characters,
    activeCharacter,
    activeId,
    effectiveState,
    effectivePsi,
    soundMuted,
    sidebarOpen,
    setSidebarOpen,
    toggleSound,
    selectCharacter,
    createNewCharacter,
    deleteCurrentCharacter,
    exportJson,
    importJson
  } = useCharacter();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) importJson(content);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <header className="header-hud" style={{
      background: 'rgba(8, 16, 32, 0.95)',
      borderBottom: '1px solid var(--border-cyan)',
      padding: '0.6rem 1.25rem',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(12px)'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        
        {/* Brand & Sidebar Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button
            onClick={() => setSidebarOpen(prev => !prev)}
            className="btn btn-sm btn-outline"
            title="Toggle Rulebook Compendium Sidebar"
            style={{ padding: '4px 8px' }}
          >
            <Menu size={16} />
          </button>
          
          <div style={{
            width: '32px', height: '32px', borderRadius: '4px',
            background: 'linear-gradient(135deg, #00e5ff 0%, #008ba3 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-hud)', fontWeight: 900, color: '#000', fontSize: '0.9rem'
          }}>
            SC
          </div>

          <div>
            <div style={{ fontFamily: 'var(--font-hud)', fontSize: '0.95rem', fontWeight: 900, color: '#fff', letterSpacing: '0.5px' }}>
              StarCraft RPG <span style={{ color: 'var(--cyan)' }}>// Ghost Living Compendium</span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              Interactive Character Dossier & Battle-Net Engine
            </div>
          </div>
        </div>

        {/* Live Telemetry HUD Bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.85rem',
          background: 'rgba(5, 11, 22, 0.9)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-sm)',
          padding: '0.35rem 0.85rem',
          flexWrap: 'wrap'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>OPERATIVE</span>
            <strong style={{ fontSize: '0.82rem', color: '#fff', fontFamily: 'var(--font-hud)' }}>{activeCharacter.name}</strong>
          </div>
          <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }} />

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>DEFENSE</span>
            <strong style={{ fontSize: '0.88rem', color: 'var(--cyan)', fontFamily: 'var(--font-hud)' }}>{effectiveState.defense}</strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>DISCIPLINE</span>
            <strong style={{ fontSize: '0.88rem', color: 'var(--cyan)', fontFamily: 'var(--font-hud)' }}>{effectiveState.discipline}</strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>RESOLVE</span>
            <strong style={{ fontSize: '0.88rem', color: 'var(--violet)', fontFamily: 'var(--font-hud)' }}>{effectiveState.resolve}</strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>TOUGHNESS</span>
            <strong style={{ fontSize: '0.88rem', color: 'var(--amber)', fontFamily: 'var(--font-hud)' }}>
              {effectiveState.armor > 0 ? `${effectiveState.totalToughness} (${effectiveState.armor})` : `${effectiveState.totalToughness}`}
            </strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>WOUNDS</span>
            <strong style={{ fontSize: '0.88rem', color: 'var(--crimson)', fontFamily: 'var(--font-hud)' }}>
              {activeCharacter.currentWounds || 0}/{effectiveState.maxWounds}
            </strong>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>PSI RATING</span>
            <strong style={{ fontSize: '0.88rem', color: 'var(--violet)', fontFamily: 'var(--font-hud)' }}>PL {effectivePsi.effectivePL}</strong>
          </div>
        </div>

        {/* Global Toolbar Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', flexWrap: 'wrap' }}>
          <select
            value={activeId}
            onChange={(e) => selectCharacter(e.target.value)}
            className="form-select"
            style={{ padding: '3px 8px', fontSize: '0.78rem', minWidth: '150px' }}
          >
            {characters.map(c => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.codename || 'Ghost'})
              </option>
            ))}
          </select>

          <button onClick={createNewCharacter} className="btn btn-sm btn-cyan" title="New Operative">
            <Plus size={13} /> New
          </button>

          <button onClick={exportJson} className="btn btn-sm btn-outline" title="Export JSON">
            <Download size={13} /> Export
          </button>

          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json"
            style={{ display: 'none' }}
          />

          <button onClick={() => fileInputRef.current?.click()} className="btn btn-sm btn-outline" title="Import JSON">
            <Upload size={13} /> Import
          </button>

          <button onClick={deleteCurrentCharacter} className="btn btn-sm btn-crimson" title="Delete Profile">
            <Trash2 size={13} />
          </button>

          <button onClick={toggleSound} className="btn btn-sm btn-outline" title={soundMuted ? 'Unmute Audio FX' : 'Mute Audio FX'}>
            {soundMuted ? <VolumeX size={14} color="var(--crimson)" /> : <Volume2 size={14} color="var(--cyan)" />}
          </button>
        </div>

      </div>
    </header>
  );
};
