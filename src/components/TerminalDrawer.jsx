import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, Cpu, Atom } from 'lucide-react';

export default function TerminalDrawer({ isOpen, onClose, onNavigate, theme, toggleTheme }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Qubrix Core CLI [Version 2.5.0-hybrid-runtime]' },
    { type: 'system', text: 'Type "help" to list commands, or "theme light" to toggle theme.' },
    { type: 'info', text: 'Active Environment: Web & Mobile Engineering Studio.' }
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Handle keyboard shortcut Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  help         - Show this command reference
  theme        - Toggle or set theme ("theme light", "theme dark", "theme")
  labs         - Launch Interactive Labs Suite (Web UI, AI Swarms, Quantum)
  studio       - Navigate to Web & Mobile Studio services
  authors      - View profile cards of Bala (JPMC) & Srikanth (Evoke)
  courses      - Jump to Qubrix Academy catalogue
  status       - Check cloud runtime health & edge telemetry
  clear        - Clear terminal screen
  exit         - Close terminal interface`
        });
        break;

      case 'theme':
      case 'theme toggle':
        toggleTheme();
        newHistory.push({ type: 'success', text: `Theme toggled to: ${theme === 'dark' ? 'light' : 'dark'}.` });
        break;

      case 'theme light':
        if (theme !== 'light') toggleTheme();
        newHistory.push({ type: 'success', text: 'Switched to Light Theme.' });
        break;

      case 'theme dark':
        if (theme !== 'dark') toggleTheme();
        newHistory.push({ type: 'success', text: 'Switched to Dark Theme.' });
        break;

      case 'labs':
      case 'quantum':
        newHistory.push({ type: 'success', text: 'Opening Interactive Labs Suite...' });
        onNavigate('labs');
        setTimeout(onClose, 600);
        break;

      case 'authors':
        newHistory.push({
          type: 'output',
          text: `FOUNDING ACADEMY AUTHORS:
1. BALA [JPMorganChase]
   Experience: 14+ Years
   Role: Lead Cloud Architect & Enterprise Systems Specialist
   Tracks: Enterprise Full Stack Architecture, Agentic AI Systems

2. SRIKANTH [Evoke Technologies]
   Experience: 14+ Years
   Role: Principal Engineering Lead & Digital Solutions Architect
   Tracks: Quantum Information & Computing, Modern Web/Mobile Systems`
        });
        break;

      case 'status':
        newHistory.push({
          type: 'output',
          text: `SYSTEM TELEMETRY:
• Studio Core: ONLINE (Edge Response: 8ms)
• Web Engine: React 19 + Next.js 15
• Active Theme: ${theme.toUpperCase()}
• Interactive Labs: 3 Sandboxes Online
• Cloud Deployment: Ready for Vercel Edge Runtime`
        });
        break;

      case 'courses':
        newHistory.push({ type: 'success', text: 'Navigating to Qubrix Academy...' });
        onNavigate('courses');
        setTimeout(onClose, 600);
        break;

      case 'studio':
      case 'services':
        newHistory.push({ type: 'success', text: 'Navigating to Web & Mobile Studio...' });
        onNavigate('services');
        setTimeout(onClose, 600);
        break;

      case 'about':
        newHistory.push({ type: 'success', text: 'Navigating to About Qubrix...' });
        onNavigate('about');
        setTimeout(onClose, 600);
        break;

      case 'contact':
        newHistory.push({ type: 'success', text: 'Opening Contact & Enrollment Form...' });
        onNavigate('contact');
        setTimeout(onClose, 600);
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(3, 0, 20, 0.75)',
        backdropFilter: 'blur(10px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '720px',
          height: '460px',
          background: 'rgba(7, 10, 30, 0.95)',
          border: '1px solid var(--border-glow)',
          borderRadius: '16px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 242, 254, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            padding: '12px 18px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f43f5e', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminal size={14} color="var(--cyan-core)" />
              qubrix-terminal // developer command suite
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Console Body */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            padding: '18px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            lineHeight: 1.6
          }}
        >
          {history.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '8px' }}>
              {item.type === 'user' && (
                <div style={{ color: 'var(--cyan-core)', fontWeight: 600 }}>{item.text}</div>
              )}
              {item.type === 'system' && (
                <div style={{ color: '#a855f7' }}>{item.text}</div>
              )}
              {item.type === 'info' && (
                <div style={{ color: '#94a3b8' }}>{item.text}</div>
              )}
              {item.type === 'output' && (
                <pre style={{ color: '#e2e8f0', whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit' }}>
                  {item.text}
                </pre>
              )}
              {item.type === 'success' && (
                <div style={{ color: '#10b981' }}>{item.text}</div>
              )}
              {item.type === 'error' && (
                <div style={{ color: '#f43f5e' }}>{item.text}</div>
              )}
            </div>
          ))}
        </div>

        {/* Input Row */}
        <form
          onSubmit={handleCommand}
          style={{
            padding: '14px 18px',
            background: 'rgba(255, 255, 255, 0.02)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <span style={{ color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
            qubrix@node:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'theme', 'labs', 'authors'..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem'
            }}
          />
          <button
            type="submit"
            style={{
              background: 'rgba(0, 242, 254, 0.12)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: 'var(--cyan-core)',
              padding: '4px 8px',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <CornerDownLeft size={14} />
          </button>
        </form>
      </div>
    </div>
  );
}
