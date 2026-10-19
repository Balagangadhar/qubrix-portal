import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, Cpu, Globe, Smartphone, Calendar, Sliders } from 'lucide-react';

export default function TerminalDrawer({ isOpen, onClose, onNavigate, theme, toggleTheme }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: 'Qubrix Consulting CLI [Version 3.0.0-enterprise-architecture]' },
    { type: 'system', text: 'Type "help" to list commands, or "scope" to launch interactive requirement builder.' },
    { type: 'info', text: 'Environment: Web & Mobile Engineering | Enterprise AI Enablement.' }
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
          text: `AVAILABLE QUBRIX CONSULTING COMMANDS:
  help         - Display this command reference
  services     - List our Web, Mobile, and AI consulting practices
  scope        - Launch the Interactive 3D Requirement & Scope Builder
  partners     - View Principal Consultant profiles (Bala & Srikanth)
  book         - Schedule a 1-on-1 strategy consultation
  stack        - Display recommended enterprise production stack
  theme        - Toggle theme ("theme light", "theme dark", "theme")
  status       - Check cloud architecture health & SLA status
  clear        - Clear terminal screen
  exit         - Close terminal drawer`
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

      case 'scope':
      case 'estimate':
        newHistory.push({ type: 'success', text: 'Launching Interactive Scope & Requirement Estimator...' });
        onNavigate('scope');
        setTimeout(onClose, 600);
        break;

      case 'services':
      case 'web':
      case 'mobile':
      case 'ai':
        newHistory.push({
          type: 'output',
          text: `QUBRIX CONSULTING PRACTICES:
1. Web Application Consulting: Next.js 15, React 19, Micro-frontends, Distributed APIs (Lead: Bala)
2. Mobile Application Engineering: Native iOS/Android, Flutter, Offline-First Sync (Lead: Srikanth)
3. Enterprise AI Enablement: Autonomous Agent Swarms, LangGraph, Private LLMs (Bala & Srikanth)
4. Cloud Architecture & FinOps: AWS/GCP Multi-region Resilience, SOC2, Kubernetes (Bala)`
        });
        break;

      case 'partners':
      case 'team':
      case 'leadership':
      case 'bala':
      case 'srikanth':
        newHistory.push({
          type: 'output',
          text: `PRINCIPAL CONSULTING PARTNERS:
1. BALA [JPMorganChase & Qubrix]
   Experience: 14+ Years
   Focus: Lead Cloud Architect & Distributed Systems Specialist
   Track Record: Ultra-low-latency financial platforms, high-concurrency microservices, multi-region failover.

2. SRIKANTH [Evoke Technologies & Qubrix]
   Experience: 14+ Years
   Focus: Principal AI & Digital Solutions Architect
   Track Record: Enterprise mobile transformations, native iOS/Android, autonomous LLM swarms.`
        });
        break;

      case 'book':
      case 'consult':
      case 'contact':
        newHistory.push({ type: 'success', text: 'Opening 1-on-1 Strategy Consultation Booking...' });
        onNavigate('contact');
        setTimeout(onClose, 600);
        break;

      case 'stack':
        newHistory.push({
          type: 'output',
          text: `RECOMMENDED ENTERPRISE PRODUCTION STACK:
• Frontend: Next.js 15, React 19, TypeScript, Three.js / WebGL, Tailwind
• Mobile: React Native, Flutter, Swift (iOS), Kotlin (Android), WatermelonDB
• AI / Agents: LangGraph, FastAPI, Qdrant Vector DB, Ollama/vLLM, Claude/OpenAI
• Backend: Go Microservices, Node.js, Kafka, Redis Cluster, PostgreSQL
• Cloud / DevOps: AWS Multi-Region, Cloudflare Edge, Kubernetes, Terraform`
        });
        break;

      case 'status':
        newHistory.push({
          type: 'success',
          text: `SYSTEM STATUS:
• Production Uptime: 99.992% (Rolling 365 Days)
• Edge Response Time: 14.2ms Average
• Active Enterprise Pods: 6 Deployments in Progress
• Consultation Response SLA: < 24 Hours Guaranteed`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        break;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of available commands.`
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
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '740px',
          height: 'min(540px, 90vh)',
          backgroundColor: theme === 'dark' ? '#030014' : '#0f172a',
          border: '1px solid var(--border-glow)',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 242, 254, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 18px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
            <div style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#10b981' }} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#94a3b8',
                marginLeft: '10px'
              }}
            >
              qubrix-consulting-terminal :: bash
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Console Log Area */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            padding: '16px 20px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.86rem',
            lineHeight: 1.55,
            color: '#e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}
        >
          {history.map((item, index) => {
            if (item.type === 'system') {
              return (
                <div key={index} style={{ color: '#00f2fe' }}>
                  {item.text}
                </div>
              );
            }
            if (item.type === 'info') {
              return (
                <div key={index} style={{ color: '#94a3b8' }}>
                  ℹ️ {item.text}
                </div>
              );
            }
            if (item.type === 'user') {
              return (
                <div key={index} style={{ color: '#ffffff', fontWeight: 600 }}>
                  {item.text}
                </div>
              );
            }
            if (item.type === 'error') {
              return (
                <div key={index} style={{ color: '#f87171' }}>
                  ❌ {item.text}
                </div>
              );
            }
            if (item.type === 'success') {
              return (
                <div key={index} style={{ color: '#34d399' }}>
                  ✅ {item.text}
                </div>
              );
            }
            return (
              <div
                key={index}
                style={{
                  color: '#cbd5e1',
                  whiteSpace: 'pre-wrap',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  padding: '8px 12px',
                  borderRadius: '6px'
                }}
              >
                {item.text}
              </div>
            );
          })}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={handleCommand}
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '12px 18px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)'
          }}
        >
          <span style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)', marginRight: '10px', fontWeight: 700 }}>
            qubrix@consult:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help', 'services', 'scope', 'partners', or 'book'..."
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: '#ffffff'
            }}
          />
          <button
            type="submit"
            style={{
              background: 'transparent',
              border: 'none',
              color: '#00f2fe',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '4px'
            }}
          >
            <CornerDownLeft size={16} />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
