import React, { useState, useRef, useEffect } from 'react';
import { useCharacter } from '../../store/useCharacterStore';
import { rollExplodingDie } from '../../utils/diceEngine';
import soundFx from '../../utils/soundFx';
import { Terminal, Trash2, Dices } from 'lucide-react';

export const BattleNetTerminal: React.FC = () => {
  const { terminalLogs, addTerminalLog, clearTerminalLogs } = useCharacter();
  const [useWildDie, setUseWildDie] = useState(true);
  const [modifier, setModifier] = useState(0);
  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalLogs]);

  const handleQuickDie = (sides: number) => {
    soundFx.roll();
    const primary = rollExplodingDie(sides);
    let wild: ReturnType<typeof rollExplodingDie> | null = null;
    let isCrit = false;

    let best = primary.total;
    if (useWildDie) {
      wild = rollExplodingDie(6);
      if (primary.rolls[0] === 1 && wild.rolls[0] === 1) isCrit = true;
      best = Math.max(primary.total, wild.total);
    }

    const finalTotal = best + modifier;
    const isSuccess = !isCrit && finalTotal >= 4;
    const isRaise = !isCrit && finalTotal >= 8;

    let desc = `[d${sides}: ${primary.rolls.join('+')}=${primary.total}]`;
    if (useWildDie && wild) desc += ` | [Wild d6: ${wild.rolls.join('+')}=${wild.total}]`;
    if (modifier !== 0) desc += ` + Mod (${modifier > 0 ? '+' + modifier : modifier})`;
    desc += ` → Final: ${finalTotal}`;

    let type: any = 'info';
    if (isCrit) type = 'crit';
    else if (isRaise) type = 'raise';
    else if (isSuccess) type = 'success';
    else type = 'fail';

    addTerminalLog(
      `🎲 Quick d${sides} Roll: ${finalTotal} ${isCrit ? '💥 CRITICAL FAILURE!' : (isRaise ? '✨ RAISE!' : (isSuccess ? '✓ SUCCESS' : '✕ FAILED'))} (${desc})`,
      type
    );
  };

  return (
    <div className="hud-panel" style={{ marginTop: '1.5rem', border: '1px solid var(--border-cyan)' }}>
      
      <div className="hud-card-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Terminal size={18} color="var(--cyan)" />
          <span className="hud-card-title">BATTLE-NET TACTICAL TERMINAL & ROLLER</span>
        </div>

        <button onClick={clearTerminalLogs} className="btn btn-sm btn-outline">
          <Trash2 size={12} /> Clear Logs
        </button>
      </div>

      {/* Quick Dice Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.75rem',
        flexWrap: 'wrap',
        background: 'rgba(5, 12, 24, 0.9)',
        padding: '0.5rem 0.75rem',
        borderRadius: 'var(--radius-sm)',
        border: '1px solid var(--border-subtle)'
      }}>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap' }}>
          {[4, 6, 8, 10, 12, 20].map(sides => (
            <button
              key={sides}
              onClick={() => handleQuickDie(sides)}
              className="btn btn-sm btn-cyan"
              style={{ minWidth: '46px' }}
            >
              d{sides}
            </button>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginLeft: 'auto', flexWrap: 'wrap' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--cyan)', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={useWildDie}
              onChange={e => setUseWildDie(e.target.checked)}
            />
            Wild Die (d6)
          </label>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Mod:</span>
            <input
              type="number"
              className="form-input"
              value={modifier}
              onChange={e => setModifier(Number(e.target.value) || 0)}
              style={{ width: '50px', padding: '2px 4px', fontSize: '0.78rem' }}
            />
          </div>
        </div>
      </div>

      {/* Terminal Screen Logs */}
      <div style={{
        background: 'rgba(3, 7, 15, 0.95)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        padding: '0.75rem',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.82rem',
        minHeight: '160px',
        maxHeight: '220px',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.3rem'
      }}>
        {terminalLogs.map(log => {
          let color = '#fff';
          if (log.type === 'crit') color = 'var(--crimson)';
          else if (log.type === 'raise') color = 'var(--emerald)';
          else if (log.type === 'success') color = 'var(--cyan)';
          else if (log.type === 'fail') color = 'var(--amber)';

          return (
            <div key={log.id} style={{ color, display: 'flex', gap: '0.5rem', lineHeight: '1.3' }}>
              <span style={{ color: 'var(--text-dim)', userSelect: 'none' }}>[{log.time}]</span>
              <span>{log.text}</span>
            </div>
          );
        })}
        <div ref={logsEndRef} />
      </div>

    </div>
  );
};
