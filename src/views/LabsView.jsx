import React, { useState } from 'react';
import { 
  FlaskConical, 
  Palette, 
  Cpu, 
  Atom, 
  Sparkles, 
  Sliders, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Copy, 
  Check, 
  Zap, 
  Activity, 
  Eye, 
  Code, 
  Layers, 
  Smartphone, 
  Monitor, 
  RefreshCw
} from 'lucide-react';
import QuantumView from './QuantumView';

export default function LabsView({ setView }) {
  const [activeLab, setActiveLab] = useState('web-ui'); // 'web-ui' | 'agentic-ai' | 'quantum'

  // LAB 1 STATE: Web & Spatial UI/UX Lab
  const [blurAmount, setBlurAmount] = useState(20);
  const [glassOpacity, setGlassOpacity] = useState(0.65);
  const [borderGlow, setBorderGlow] = useState('#00f2fe');
  const [cardScale, setCardScale] = useState(1);
  const [copiedCode, setCopiedCode] = useState(false);
  const [buttonBounced, setButtonBounced] = useState(false);

  const generatedCss = `.qubrix-glass-card {
  background: rgba(11, 14, 38, ${glassOpacity});
  backdrop-filter: blur(${blurAmount}px);
  -webkit-backdrop-filter: blur(${blurAmount}px);
  border: 1px solid ${borderGlow}55;
  box-shadow: 0 12px 35px ${borderGlow}25;
  border-radius: 20px;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}`;

  const handleCopyCss = () => {
    navigator.clipboard.writeText(generatedCss);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const triggerBounce = () => {
    setButtonBounced(true);
    setTimeout(() => setButtonBounced(false), 600);
  };

  // LAB 2 STATE: Agentic AI Swarm Lab
  const [swarmRunning, setSwarmRunning] = useState(false);
  const [activeAgentIndex, setActiveAgentIndex] = useState(0);
  const [swarmLogs, setSwarmLogs] = useState([
    { agent: 'Supervisor', text: 'Swarm initialized. Awaiting user objective prompt...', time: '10:00:00' }
  ]);

  const agents = [
    { name: 'Architect Agent', role: 'System & DB Schemas', color: '#00f2fe' },
    { name: 'Designer Agent', role: 'Spatial UI & Tokens', color: '#ec4899' },
    { name: 'Engineer Agent', role: 'React 19 & Server Actions', color: '#a855f7' },
    { name: 'Security Agent', role: 'Post-Quantum & Pentest', color: '#10b981' }
  ];

  const runSwarmSimulation = () => {
    if (swarmRunning) return;
    setSwarmRunning(true);
    setSwarmLogs([
      { agent: 'Supervisor', text: 'Task dispatched: "Build Next-Gen Web Dashboard with Quantum Security"', time: '10:00:01' }
    ]);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      setActiveAgentIndex(step % agents.length);

      if (step === 1) {
        setSwarmLogs(prev => [...prev, { agent: 'Architect Agent', text: 'Designed PostgreSQL schema & GraphQL contracts with multi-region sharding.', time: '10:00:02' }]);
      } else if (step === 2) {
        setSwarmLogs(prev => [...prev, { agent: 'Designer Agent', text: 'Tokenized Figma dark spatial components (60fps spring transitions).', time: '10:00:03' }]);
      } else if (step === 3) {
        setSwarmLogs(prev => [...prev, { agent: 'Engineer Agent', text: 'Synthesized React 19 Server Components with sub-millisecond edge caching.', time: '10:00:04' }]);
      } else if (step === 4) {
        setSwarmLogs(prev => [...prev, { agent: 'Security Agent', text: 'Verified ML-KEM-768 lattice encryption. Zero CVE vulnerabilities found.', time: '10:00:05' }]);
      } else if (step >= 5) {
        setSwarmLogs(prev => [...prev, { agent: 'Supervisor', text: 'Swarm consensus achieved! Production build artifact published.', time: '10:00:06' }]);
        clearInterval(interval);
        setSwarmRunning(false);
      }
    }, 900);
  };

  return (
    <div style={{ paddingTop: '30px' }}>
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
          <FlaskConical size={14} />
          EXPERIMENT IN BROWSER
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '16px' }}>
          Interactive <span className="gradient-text">Labs Suite</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
          Hands-on interactive playgrounds. Test modern web UI design physics, observe autonomous AI agent swarms,
          and manipulate quantum superposition on the Bloch sphere.
        </p>

        {/* Labs Switcher Tabs */}
        <div
          style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px',
            padding: '6px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid var(--border-glass)',
            borderRadius: '999px'
          }}
        >
          {[
            { id: 'web-ui', label: '1. Web & UI/UX Physics Lab', icon: Palette, color: 'var(--cyan-core)' },
            { id: 'agentic-ai', label: '2. Agentic AI Swarms Lab', icon: Cpu, color: 'var(--purple-accent)' },
            { id: 'quantum', label: '3. Quantum Computing Lab', icon: Atom, color: '#10b981' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeLab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveLab(tab.id)}
                style={{
                  background: isActive ? 'linear-gradient(135deg, var(--cyan-core), #38bdf8)' : 'transparent',
                  color: isActive ? '#030014' : 'var(--text-muted)',
                  border: 'none',
                  padding: '10px 22px',
                  borderRadius: '999px',
                  fontSize: '0.9rem',
                  fontWeight: isActive ? 800 : 600,
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s'
                }}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* LAB 1: WEB & SPATIAL UI/UX LAB */}
      {activeLab === 'web-ui' && (
        <section className="content-section" style={{ marginBottom: '90px' }}>
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              border: '1px solid var(--border-glow)'
            }}
          >
            <div style={{ marginBottom: '28px' }}>
              <span className="badge-pill badge-cyan" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
                Frontend Lab
              </span>
              <h2 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>
                Glassmorphism & Spring Micro-Animation Studio
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                Adjust blur, luminance opacity, and glow colors to inspect how Qubrix crafts 60fps ergonomic web and mobile components.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '36px',
                alignItems: 'center'
              }}
            >
              {/* Controls Column */}
              <div>
                {/* Blur Slider */}
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    <span>Backdrop Blur Filter</span>
                    <strong style={{ color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>{blurAmount}px</strong>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    value={blurAmount}
                    onChange={(e) => setBlurAmount(parseInt(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--cyan-core)' }}
                  />
                </div>

                {/* Opacity Slider */}
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    <span>Surface Opacity</span>
                    <strong style={{ color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>{(glassOpacity * 100).toFixed(0)}%</strong>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="0.95"
                    step="0.05"
                    value={glassOpacity}
                    onChange={(e) => setGlassOpacity(parseFloat(e.target.value))}
                    style={{ width: '100%', accentColor: 'var(--cyan-core)' }}
                  />
                </div>

                {/* Glow Color Selector */}
                <div style={{ marginBottom: '28px' }}>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-main)', marginBottom: '10px' }}>
                    Border Glow Hue
                  </div>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {[
                      { color: '#00f2fe', label: 'Cyan' },
                      { color: '#a855f7', label: 'Violet' },
                      { color: '#10b981', label: 'Emerald' },
                      { color: '#ec4899', label: 'Rose' }
                    ].map((c) => (
                      <button
                        key={c.color}
                        onClick={() => setBorderGlow(c.color)}
                        style={{
                          background: borderGlow === c.color ? `${c.color}25` : 'transparent',
                          border: borderGlow === c.color ? `2px solid ${c.color}` : '1px solid var(--border-glass)',
                          color: c.color,
                          padding: '6px 14px',
                          borderRadius: '8px',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Micro-interaction Spring Test Button */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-main)', marginBottom: '10px' }}>
                    Micro-Animation Physics Test
                  </div>
                  <button
                    onClick={triggerBounce}
                    className="btn-primary"
                    style={{
                      transform: buttonBounced ? 'scale(1.18) rotate(3deg)' : 'scale(1)',
                      transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                  >
                    Click to Test Spring Physics Curve
                  </button>
                </div>
              </div>

              {/* Live Rendered Card & CSS Code Output */}
              <div>
                {/* Rendered Preview Card */}
                <div
                  style={{
                    background: `rgba(11, 14, 38, ${glassOpacity})`,
                    backdropFilter: `blur(${blurAmount}px)`,
                    WebkitBackdropFilter: `blur(${blurAmount}px)`,
                    border: `1.5px solid ${borderGlow}55`,
                    boxShadow: `0 15px 40px ${borderGlow}30`,
                    borderRadius: '20px',
                    padding: '28px',
                    marginBottom: '20px',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ fontSize: '0.78rem', color: borderGlow, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Live Rendered Component
                    </div>
                    <span style={{ fontSize: '0.72rem', background: `${borderGlow}20`, color: borderGlow, padding: '2px 8px', borderRadius: '4px' }}>
                      CSS Tokens Active
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '8px' }}>
                    Qubrix Spatial Interface Card
                  </h3>
                  <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.5, marginBottom: '16px' }}>
                    Engineered with zero CSS framework bloat for maximum frame rate and tactile micro-feedback.
                  </p>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontSize: '0.74rem', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '999px', color: '#f8fafc' }}>
                      60fps Smooth
                    </span>
                    <span style={{ fontSize: '0.74rem', background: 'rgba(255, 255, 255, 0.08)', padding: '4px 10px', borderRadius: '999px', color: '#f8fafc' }}>
                      Dark/Light Reactive
                    </span>
                  </div>
                </div>

                {/* Export CSS Snippet */}
                <div className="code-preview-window" style={{ padding: '16px', position: 'relative' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.74rem', color: '#64748b' }}>// Exported Design Tokens CSS</span>
                    <button
                      onClick={handleCopyCss}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: copiedCode ? '#10b981' : 'var(--cyan-core)',
                        cursor: 'pointer',
                        fontSize: '0.78rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      {copiedCode ? <Check size={14} /> : <Copy size={14} />}
                      {copiedCode ? 'Copied!' : 'Copy CSS'}
                    </button>
                  </div>
                  <pre style={{ margin: 0, fontSize: '0.8rem', color: '#e2e8f0', lineHeight: 1.5, overflowX: 'auto' }}>
                    {generatedCss}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* LAB 2: AGENTIC AI SWARM LAB */}
      {activeLab === 'agentic-ai' && (
        <section className="content-section" style={{ marginBottom: '90px' }}>
          <div
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              background: 'linear-gradient(135deg, rgba(12, 10, 42, 0.95) 0%, rgba(18, 16, 60, 0.9) 100%)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
              <div>
                <span className="badge-pill badge-violet" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
                  Multi-Agent Swarm Lab
                </span>
                <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>
                  Autonomous Agent Fleet Simulation
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  Watch 4 specialized autonomous agents collaborate, negotiate architectural tradeoffs, and verify code.
                </p>
              </div>

              <button
                onClick={runSwarmSimulation}
                disabled={swarmRunning}
                className="btn-primary"
                style={{
                  background: 'linear-gradient(135deg, #a855f7 0%, #00f2fe 100%)',
                  padding: '12px 24px',
                  fontSize: '0.92rem'
                }}
              >
                {swarmRunning ? <RefreshCw size={16} className="animate-spin-slow" /> : <Play size={16} />}
                {swarmRunning ? 'Swarm Reasoning in Progress...' : 'Run Autonomous Swarm Loop'}
              </button>
            </div>

            {/* Visual Agent Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '28px'
              }}
            >
              {agents.map((ag, idx) => {
                const isActiveAgent = swarmRunning && activeAgentIndex === idx;
                return (
                  <div
                    key={idx}
                    style={{
                      background: isActiveAgent ? `${ag.color}20` : 'rgba(255, 255, 255, 0.03)',
                      border: isActiveAgent ? `2px solid ${ag.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '16px',
                      padding: '20px',
                      boxShadow: isActiveAgent ? `0 0 25px ${ag.color}40` : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: ag.color, boxShadow: `0 0 8px ${ag.color}` }} />
                      <span style={{ fontSize: '0.7rem', color: ag.color, fontFamily: 'var(--font-mono)' }}>
                        NODE-0{idx + 1}
                      </span>
                    </div>

                    <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                      {ag.name}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                      {ag.role}
                    </div>

                    {isActiveAgent && (
                      <div style={{ marginTop: '12px', fontSize: '0.72rem', color: ag.color, fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Activity size={12} /> Active Reasoning...
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Live Message Passing Console */}
            <div className="code-preview-window" style={{ padding: '20px', maxHeight: '280px', overflowY: 'auto' }}>
              <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                // TELEMETRY: LANGGRAPH CONVERSATION STATE STREAM
              </div>

              {swarmLogs.map((log, i) => (
                <div key={i} style={{ marginBottom: '8px', fontSize: '0.84rem', fontFamily: 'var(--font-mono)', lineHeight: 1.5 }}>
                  <span style={{ color: '#64748b', marginRight: '8px' }}>[{log.time}]</span>
                  <span style={{ color: '#00f2fe', fontWeight: 700, marginRight: '8px' }}>&lt;{log.agent}&gt;</span>
                  <span style={{ color: '#cbd5e1' }}>{log.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* LAB 3: QUANTUM INFORMATION LAB (EMBEDDED) */}
      {activeLab === 'quantum' && (
        <QuantumView setView={setView} />
      )}
    </div>
  );
}
