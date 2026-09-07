import React from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { User, BookOpen, Swords, Terminal, X, Shield, Award, Sparkles, AlertTriangle } from 'lucide-react';

export const SidebarNav: React.FC = () => {
  const { sidebarOpen, setSidebarOpen, activeTab, setActiveTab } = useCharacter();

  if (!sidebarOpen) return null;

  const navItems = [
    { id: 'dossier', label: 'Operative Dossier', icon: <User size={16} /> },
    { id: 'compendium', label: 'Rulebook Compendium', icon: <BookOpen size={16} /> },
    { id: 'terminal', label: 'Tactical Battle-Net', icon: <Terminal size={16} /> }
  ];

  const quickLinks = [
    { label: 'Homeworlds Lore', tab: 'compendium' },
    { label: 'Covert Ops Training (C.O.T.)', tab: 'compendium' },
    { label: 'Skills Compendium', tab: 'compendium' },
    { label: 'Edges & Perks', tab: 'compendium' },
    { label: 'Hindrances & Flaws', tab: 'compendium' },
    { label: 'Weapons & Armory', tab: 'compendium' },
    { label: 'Psionic Disciplines', tab: 'compendium' }
  ];

  return (
    <aside style={{
      position: 'fixed',
      top: '56px',
      left: 0,
      bottom: 0,
      width: '280px',
      background: 'rgba(5, 12, 24, 0.98)',
      borderRight: '1px solid var(--border-cyan)',
      backdropFilter: 'blur(16px)',
      zIndex: 90,
      padding: '1.25rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      boxShadow: '10px 0 30px rgba(0, 0, 0, 0.5)',
      overflowY: 'auto'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.6rem' }}>
        <span style={{ fontFamily: 'var(--font-hud)', fontSize: '0.85rem', color: 'var(--cyan)', fontWeight: 700 }}>
          TABLE OF CONTENTS
        </span>
        <button onClick={() => setSidebarOpen(false)} className="btn btn-sm btn-outline" style={{ padding: '2px 6px' }}>
          <X size={14} />
        </button>
      </div>

      {/* Main App Navigation */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
        <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>VIEW MODES</span>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => {
              setActiveTab(item.id);
              setSidebarOpen(false);
            }}
            className={`btn ${activeTab === item.id ? 'btn-cyan' : 'btn-outline'}`}
            style={{ justifyContent: 'flex-start', padding: '0.55rem 0.75rem', fontSize: '0.82rem' }}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Compendium Quick Links */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
        <span style={{ fontSize: '0.68rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>RULEBOOK CHAPTERS</span>
        {quickLinks.map(link => (
          <button
            key={link.label}
            onClick={() => {
              setActiveTab(link.tab);
              setSidebarOpen(false);
            }}
            style={{
              background: 'transparent',
              border: 'none',
              textAlign: 'left',
              color: 'var(--text-muted)',
              fontSize: '0.8rem',
              padding: '0.35rem 0.5rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(0, 229, 255, 0.08)';
              e.currentTarget.style.color = 'var(--cyan)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            • {link.label}
          </button>
        ))}
      </div>

    </aside>
  );
};
