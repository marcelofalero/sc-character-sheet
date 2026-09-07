import React, { useState, useMemo } from 'react';
import { SC_DATA } from '../../data/scData';
import { BookOpen, Search, Shield, Zap, Sparkles, Award, AlertTriangle, Swords, Compass } from 'lucide-react';

export const CompendiumViewer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Compendium', icon: <BookOpen size={14} /> },
    { id: 'homeworlds', label: 'Homeworlds', icon: <Compass size={14} /> },
    { id: 'cot', label: 'C.O.T. Paths', icon: <Shield size={14} /> },
    { id: 'skills', label: 'Skills Database', icon: <Zap size={14} /> },
    { id: 'edges', label: 'Edges & Perks', icon: <Award size={14} /> },
    { id: 'hindrances', label: 'Hindrances', icon: <AlertTriangle size={14} /> },
    { id: 'armory', label: 'Weapons & Armor', icon: <Swords size={14} /> },
    { id: 'powers', label: 'Psionic Powers', icon: <Sparkles size={14} /> }
  ];

  const filteredData = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    const matchesSearch = (item: any) => {
      if (!q) return true;
      const str = `${item.name || ''} ${item.desc || ''} ${item.notes || ''} ${item.category || ''} ${item.discipline || ''}`.toLowerCase();
      return str.includes(q);
    };

    return {
      homeworlds: (activeCategory === 'all' || activeCategory === 'homeworlds')
        ? (SC_DATA?.homeworlds || []).filter(matchesSearch) : [],
      cot: (activeCategory === 'all' || activeCategory === 'cot')
        ? (SC_DATA?.training_paths || []).filter(matchesSearch) : [],
      skills: (activeCategory === 'all' || activeCategory === 'skills')
        ? (SC_DATA?.skills || []).filter(matchesSearch) : [],
      edges: (activeCategory === 'all' || activeCategory === 'edges')
        ? (SC_DATA?.edges || []).filter(matchesSearch) : [],
      hindrances: (activeCategory === 'all' || activeCategory === 'hindrances')
        ? (SC_DATA?.hindrances || []).filter(matchesSearch) : [],
      weapons: (activeCategory === 'all' || activeCategory === 'armory')
        ? (SC_DATA?.weapons || []).filter(matchesSearch) : [],
      armor: (activeCategory === 'all' || activeCategory === 'armory')
        ? (SC_DATA?.armor || []).filter(matchesSearch) : [],
      gear: (activeCategory === 'all' || activeCategory === 'armory')
        ? (SC_DATA?.gear || []).filter(matchesSearch) : [],
      powers: (activeCategory === 'all' || activeCategory === 'powers')
        ? (SC_DATA?.powers || []).filter(matchesSearch) : []
    };
  }, [activeCategory, searchQuery]);

  return (
    <div className="compendium-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      
      {/* Search & Category Filter Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '0.75rem',
        background: 'rgba(8, 16, 32, 0.9)',
        border: '1px solid var(--border-cyan)',
        borderRadius: 'var(--radius-sm)',
        padding: '0.75rem',
        flexWrap: 'wrap'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, minWidth: '220px' }}>
          <Search size={16} color="var(--cyan)" />
          <input
            type="text"
            className="form-input"
            placeholder="Search rules, edges, weapons, powers, lore..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ width: '100%' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`btn btn-sm ${activeCategory === cat.id ? 'btn-cyan' : 'btn-outline'}`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Homeworlds Section */}
      {filteredData.homeworlds.length > 0 && (
        <div className="hud-inner-card">
          <div className="hud-card-header">
            <span className="hud-card-title">🪐 HOMEWORLDS & TERRAIN ORIGINS</span>
            <span className="tag tag-cyan">{filteredData.homeworlds.length} Entries</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
            {filteredData.homeworlds.map((hw: any) => (
              <div key={hw.name} style={{ background: 'rgba(10, 18, 32, 0.85)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.65rem' }}>
                <strong style={{ color: 'var(--cyan)', fontSize: '0.88rem' }}>{hw.name}</strong>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', lineHeight: '1.35' }}>{hw.desc}</div>
                {hw.trait && <div style={{ fontSize: '0.72rem', color: 'var(--amber)', marginTop: '0.3rem' }}><strong>Trait Bonus:</strong> {hw.trait}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* C.O.T. Paths Section */}
      {filteredData.cot.length > 0 && (
        <div className="hud-inner-card">
          <div className="hud-card-header">
            <span className="hud-card-title">🎖️ COVERT OPS TRAINING (C.O.T.) PATHS</span>
            <span className="tag tag-cyan">{filteredData.cot.length} Paths</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
            {filteredData.cot.map((p: any) => (
              <div key={p.name} style={{ background: 'rgba(10, 18, 32, 0.85)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.65rem' }}>
                <strong style={{ color: 'var(--emerald)', fontSize: '0.88rem' }}>{p.name}</strong>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', lineHeight: '1.35' }}>{p.desc}</div>
                {p.bonuses && <div style={{ fontSize: '0.72rem', color: 'var(--cyan)', marginTop: '0.3rem' }}><strong>Features:</strong> {p.bonuses}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edges Section */}
      {filteredData.edges.length > 0 && (
        <div className="hud-inner-card">
          <div className="hud-card-header">
            <span className="hud-card-title amber">⭐ EDGES & PERKS COMPENDIUM</span>
            <span className="tag tag-amber">{filteredData.edges.length} Edges</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
            {filteredData.edges.map((e: any) => (
              <div key={e.name} style={{ background: 'rgba(10, 18, 32, 0.85)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ color: '#fff', fontSize: '0.88rem' }}>{e.name}</strong>
                  <span className="tag tag-amber" style={{ fontSize: '0.65rem' }}>{e.category || 'Edge'}</span>
                </div>
                {e.req && <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>Req: {e.req}</div>}
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', lineHeight: '1.35' }}>{e.desc || e.notes}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Powers Section */}
      {filteredData.powers.length > 0 && (
        <div className="hud-inner-card">
          <div className="hud-card-header">
            <span className="hud-card-title" style={{ color: 'var(--violet)' }}>✨ PSIONIC POWERS MANIFEST</span>
            <span className="tag tag-violet">{filteredData.powers.length} Powers</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
            {filteredData.powers.map((p: any) => (
              <div key={p.name} style={{ background: 'rgba(10, 18, 32, 0.85)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ color: '#fff', fontSize: '0.88rem' }}>{p.name}</strong>
                  <span className="tag tag-violet" style={{ fontSize: '0.65rem' }}>{p.cost} Energy</span>
                </div>
                <div style={{ display: 'flex', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
                  <span>Range: {p.range}</span>
                  <span>•</span>
                  <span>Dur: {p.duration}</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', lineHeight: '1.35' }}>{p.desc || p.notes}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weapons & Armory Section */}
      {filteredData.weapons.length > 0 && (
        <div className="hud-inner-card">
          <div className="hud-card-header">
            <span className="hud-card-title">⚔️ ARMORY & WEAPONS CATALOG</span>
            <span className="tag tag-cyan">{filteredData.weapons.length} Weapons</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.65rem' }}>
            {filteredData.weapons.map((w: any) => (
              <div key={w.name} style={{ background: 'rgba(10, 18, 32, 0.85)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <strong style={{ color: '#fff', fontSize: '0.88rem' }}>{w.name}</strong>
                  <span className="tag tag-amber" style={{ fontSize: '0.68rem' }}>{w.damage} (AP {w.ap || 0})</span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
                  Range: {w.range} • RoF: {w.rof || 1} • Weight: {w.weight || '5 lbs.'}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.3rem', lineHeight: '1.35' }}>{w.desc || w.notes}</div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
