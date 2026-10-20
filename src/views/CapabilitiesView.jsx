import React, { useState, useEffect, useRef } from 'react';
import { 
  Share2, 
  MessageSquare, 
  CreditCard, 
  Search, 
  Cpu, 
  Box, 
  Shield, 
  Activity, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Layers, 
  RefreshCw, 
  Smartphone, 
  Play, 
  Send, 
  Check, 
  Plus,
  Database
} from 'lucide-react';
import { CAPABILITIES, CAPABILITY_PRESETS } from '../data/capabilitiesData';

export default function CapabilitiesView({ setView, onSelectCapabilitiesForScope }) {
  const [activeCategory, setActiveCategory] = useState('connect');
  const [selectedStack, setSelectedStack] = useState(['connect', 'transact', 'intelligence', 'secure']);
  const [composerOpen, setComposerOpen] = useState(false);

  // Magic Discovery Interactive States
  // 1. Connect
  const [connectOutageSim, setConnectOutageSim] = useState(false);
  const [connectPacketsCount, setConnectPacketsCount] = useState(14820);

  // 2. Communicate
  const [commMode, setCommMode] = useState('chat'); // 'chat' | 'webrtc' | 'push'
  const [chatMessages, setChatMessages] = useState([
    { sender: 'client', text: 'Hey, is our mobile order synchronized in real-time?' },
    { sender: 'qubrix', text: 'Yes, sub-50ms WebSocket channel is live and synced across iOS & Web.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [pushSent, setPushSent] = useState(false);

  // 3. Transact
  const [transactCurrency, setTransactCurrency] = useState('USD');
  const [transactStep, setTransactStep] = useState('ready'); // 'ready' | 'processing' | 'confirmed'
  const [transactReceipt, setTransactReceipt] = useState(null);

  // 4. Understand
  const [searchQuery, setSearchQuery] = useState('mobile biometric auth');
  const [activeOcrField, setActiveOcrField] = useState('total');

  // 5. Intelligence
  const [selectedAgentTask, setSelectedAgentTask] = useState('retention');
  const [agentStep, setAgentStep] = useState(0); // 0=ready, 1=planner, 2=researcher, 3=critic, 4=done
  const [agentRunning, setAgentRunning] = useState(false);

  // 6. Immerse
  const [immerseShader, setImmerseShader] = useState('pbr'); // 'pbr' | 'wireframe' | 'exploded'
  const [immerseRotation, setImmerseRotation] = useState({ x: 15, y: 35 });

  // 7. Secure
  const [selectedRole, setSelectedRole] = useState('architect');
  const [biometricScanning, setBiometricScanning] = useState(false);
  const [biometricVerified, setBiometricVerified] = useState(true);

  // 8. Operate
  const [operJobs, setOperJobs] = useState(1284);
  const [operActiveStep, setOperActiveStep] = useState(2);

  const currentCap = CAPABILITIES.find(c => c.id === activeCategory) || CAPABILITIES[0];

  const toggleStackItem = (capId) => {
    setSelectedStack(prev => 
      prev.includes(capId)
        ? prev.filter(id => id !== capId)
        : [...prev, capId]
    );
  };

  const applyPreset = (preset) => {
    setSelectedStack(preset.recommendedCapabilities);
    setActiveCategory(preset.recommendedCapabilities[0]);
  };

  const handleProceedToPricing = () => {
    setView('pricing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Run Agent Simulation
  const runAgentSwarm = () => {
    setAgentRunning(true);
    setAgentStep(1);
    setTimeout(() => {
      setAgentStep(2);
      setTimeout(() => {
        setAgentStep(3);
        setTimeout(() => {
          setAgentStep(4);
          setAgentRunning(false);
        }, 800);
      }, 800);
    }, 700);
  };

  // Run Transact Simulation
  const runTransaction = () => {
    setTransactStep('processing');
    setTimeout(() => {
      setTransactStep('confirmed');
      setTransactReceipt({
        id: `TXN-${Math.floor(100000 + Math.random() * 900000)}`,
        amount: transactCurrency === 'USD' ? '$1,450.00' : transactCurrency === 'EUR' ? '€1,320.00' : '₹1,21,000',
        tokenHash: '0x8f9c...d42a (PCI-DSS Tokenized)',
        latency: '412ms'
      });
    }, 850);
  };

  return (
    <div style={{ paddingTop: '36px', paddingBottom: '90px' }}>
      
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
          <Layers size={14} />
          REUSABLE DIGITAL CAPABILITIES CATALOGUE
        </div>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 4rem)', marginBottom: '18px', letterSpacing: '-0.02em' }}>
          Architect With <span className="gradient-text">Reusable Digital Superpowers</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '820px', margin: '0 auto', fontSize: '1.12rem', lineHeight: 1.6 }}>
          Rather than treating every website or app as a collection of disjointed features, Qubrix structures all digital solutions 
          into <strong>8 modular, enterprise-hardened capability layers</strong>. Research each category, experience its interactive magic, 
          and compose your custom project stack.
        </p>

        {/* Capability Presets Selector */}
        <div style={{ marginTop: '28px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
            Quick Architectural Presets:
          </span>
          {CAPABILITY_PRESETS.map(preset => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset)}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-glass)',
                color: 'var(--text-muted)',
                fontSize: '0.78rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--cyan-core)';
                e.currentTarget.style.color = 'var(--cyan-core)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.color = 'var(--text-muted)';
              }}
            >
              <Sparkles size={12} color="var(--cyan-core)" />
              <span>{preset.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* THE 8 CAPABILITIES CATEGORY TABS */}
      <section className="content-section" style={{ marginBottom: '40px' }}>
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 115px), 1fr))', 
            gap: '10px' 
          }}
        >
          {CAPABILITIES.map(cap => {
            const isActive = activeCategory === cap.id;
            const isSelectedInStack = selectedStack.includes(cap.id);
            return (
              <button
                key={cap.id}
                onClick={() => setActiveCategory(cap.id)}
                style={{
                  padding: '14px 10px',
                  borderRadius: '16px',
                  background: isActive ? `${cap.accent}18` : 'rgba(255, 255, 255, 0.03)',
                  border: isActive ? `2px solid ${cap.accent}` : isSelectedInStack ? `1px solid ${cap.accent}50` : '1px solid var(--border-glass)',
                  color: isActive ? cap.accent : 'var(--text-main)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                {isSelectedInStack && (
                  <span style={{ 
                    position: 'absolute', 
                    top: '6px', 
                    right: '6px', 
                    width: '7px', 
                    height: '7px', 
                    borderRadius: '50%', 
                    backgroundColor: cap.accent,
                    boxShadow: `0 0 8px ${cap.accent}`
                  }} />
                )}

                {cap.id === 'connect' && <Share2 size={20} color={cap.accent} />}
                {cap.id === 'communicate' && <MessageSquare size={20} color={cap.accent} />}
                {cap.id === 'transact' && <CreditCard size={20} color={cap.accent} />}
                {cap.id === 'understand' && <Search size={20} color={cap.accent} />}
                {cap.id === 'intelligence' && <Cpu size={20} color={cap.accent} />}
                {cap.id === 'immerse' && <Box size={20} color={cap.accent} />}
                {cap.id === 'secure' && <Shield size={20} color={cap.accent} />}
                {cap.id === 'operate' && <Activity size={20} color={cap.accent} />}

                <span style={{ fontSize: '0.86rem', fontWeight: 700 }}>
                  {cap.name}
                </span>

                <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {cap.badge}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* ACTIVE CAPABILITY DEEP DIVE & MAGIC DISCOVERY PLAYGROUND */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 310px), 1fr))', gap: '32px', alignItems: 'start' }}>
          
          {/* LEFT: ARCHITECTURE & RESEARCH SPECIFICATION */}
          <div 
            className="glass-panel" 
            style={{ 
              padding: '36px', 
              borderRadius: '24px', 
              border: `1px solid ${currentCap.accent}40`,
              background: 'linear-gradient(145deg, rgba(11, 14, 38, 0.95) 0%, rgba(18, 24, 62, 0.85) 100%)',
              position: 'relative'
            }}
          >
            {/* Header info */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontFamily: 'var(--font-mono)', 
                  fontWeight: 700, 
                  color: currentCap.accent,
                  padding: '3px 10px',
                  borderRadius: '999px',
                  background: `${currentCap.accent}15`
                }}>
                  CAPABILITY 0{CAPABILITIES.findIndex(c => c.id === currentCap.id) + 1}
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  {currentCap.badge}
                </span>
              </div>

              {/* Add to Stack Button */}
              <button
                onClick={() => toggleStackItem(currentCap.id)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '999px',
                  background: selectedStack.includes(currentCap.id) ? currentCap.accent : 'rgba(255, 255, 255, 0.05)',
                  border: `1px solid ${currentCap.accent}`,
                  color: selectedStack.includes(currentCap.id) ? '#030014' : currentCap.accent,
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {selectedStack.includes(currentCap.id) ? (
                  <>
                    <Check size={13} />
                    <span>In My Stack</span>
                  </>
                ) : (
                  <>
                    <Plus size={13} />
                    <span>Add to Stack</span>
                  </>
                )}
              </button>
            </div>

            <h2 style={{ fontSize: '2rem', color: 'var(--text-main)', marginBottom: '8px' }}>
              {currentCap.name} Architecture
            </h2>
            <div style={{ fontSize: '0.88rem', color: currentCap.accent, fontFamily: 'var(--font-subheading)', fontWeight: 600, marginBottom: '18px' }}>
              {currentCap.tagline}
            </div>

            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '24px' }}>
              {currentCap.description}
            </p>

            {/* Sub-Capabilities Detailed Breakdown */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
                Reusable Production Components:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {currentCap.subCapabilities.map((sub, sIdx) => (
                  <div 
                    key={sIdx}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-glass)'
                    }}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '3px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle2 size={14} color={currentCap.accent} />
                      <span>{sub.name}</span>
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.45, paddingLeft: '22px' }}>
                      {sub.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlight & Tech Stack */}
            <div style={{ 
              padding: '16px', 
              borderRadius: '14px', 
              background: 'rgba(0, 0, 0, 0.35)', 
              border: '1px solid var(--border-glass)',
              marginBottom: '20px'
            }}>
              <div style={{ fontSize: '0.72rem', color: currentCap.accent, textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                Engineering Blueprint Highlight:
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-main)', lineHeight: 1.5, marginBottom: '12px' }}>
                {currentCap.architectureHighlight}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {currentCap.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    style={{
                      fontSize: '0.72rem',
                      padding: '3px 8px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.06)',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Verified Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', textAlign: 'center' }}>
              {Object.entries(currentCap.demoMetrics).map(([k, val], mIdx) => (
                <div key={mIdx} style={{ padding: '8px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.02)' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: currentCap.accent, fontFamily: 'var(--font-mono)' }}>
                    {val}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-dim)', textTransform: 'capitalize' }}>
                    {k.replace(/([A-Z])/g, ' $1')}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: "DISCOVER MAGIC" INTERACTIVE LIVE SANDBOX */}
          <div 
            className="glass-panel"
            style={{ 
              padding: '36px', 
              borderRadius: '24px', 
              border: `2px solid ${currentCap.accent}`,
              background: 'linear-gradient(135deg, rgba(5, 7, 24, 0.98) 0%, rgba(14, 18, 52, 0.92) 100%)',
              boxShadow: `0 16px 50px ${currentCap.accent}15`,
              minHeight: '520px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {/* Magic Sandbox Banner */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={16} color={currentCap.accent} />
                  <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 800, color: currentCap.accent, letterSpacing: '0.04em' }}>
                    MAGIC DISCOVERY SANDBOX // LIVE SIMULATION
                  </span>
                </div>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
              </div>

              {/* ---------------- 1. CONNECT MAGIC SANDBOX ---------------- */}
              {currentCap.id === 'connect' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Universal API & Enterprise ERP/CRM Mesh
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
                    Simulating live bi-directional data flow between mobile client, Kafka event bus, and enterprise integrations.
                  </p>

                  <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)', marginBottom: '20px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 115px), 1fr))', gap: '10px', textAlign: 'center', marginBottom: '20px' }}>
                      {[
                        { label: 'Mobile / Web', icon: Smartphone, color: '#00f2fe', status: 'ACTIVE' },
                        { label: 'Kafka Bus', icon: Activity, color: '#3b82f6', status: '99.99%' },
                        { label: 'Salesforce CRM', icon: Share2, color: '#a855f7', status: connectOutageSim ? 'FAILOVER' : 'SYNCED' },
                        { label: 'SAP ERP', icon: Database, color: '#10b981', status: 'CONNECTED' }
                      ].map((node, nIdx) => {
                        const Icon = node.icon;
                        return (
                          <div key={nIdx} style={{ padding: '12px 6px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: `1px solid ${node.color}40` }}>
                            <Icon size={18} color={node.color} style={{ margin: '0 auto 6px auto' }} />
                            <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-main)' }}>{node.label}</div>
                            <div style={{ fontSize: '0.64rem', color: node.status === 'FAILOVER' ? '#f59e0b' : '#10b981', fontFamily: 'var(--font-mono)' }}>{node.status}</div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Animated Connection Stream */}
                    <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '999px', overflow: 'hidden', position: 'relative', marginBottom: '14px' }}>
                      <div style={{ 
                        height: '100%', 
                        width: '45%', 
                        background: connectOutageSim ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : 'linear-gradient(90deg, #00f2fe, #3b82f6)', 
                        borderRadius: '999px',
                        animation: 'streamFlow 1.4s infinite ease-in-out'
                      }} />
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      <span>Packets: {connectPacketsCount.toLocaleString()}</span>
                      <span>Latency: {connectOutageSim ? '28ms (Backup Region)' : '11ms (Edge Primary)'}</span>
                      <span>Loss: 0.00%</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => {
                        setConnectOutageSim(prev => !prev);
                        setConnectPacketsCount(prev => prev + 1240);
                      }}
                      className="btn-secondary"
                      style={{ flex: 1, padding: '10px', fontSize: '0.8rem', justifyContent: 'center' }}
                    >
                      <RefreshCw size={13} />
                      <span>{connectOutageSim ? 'Restore Primary Node' : 'Test Auto-Failover Circuit'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ---------------- 2. COMMUNICATE MAGIC SANDBOX ---------------- */}
              {currentCap.id === 'communicate' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Omnichannel Streaming & WebRTC Console
                  </h3>
                  
                  {/* Mode Selector */}
                  <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
                    {[
                      { id: 'chat', label: 'WebSocket Chat' },
                      { id: 'webrtc', label: 'WebRTC Video/Audio' },
                      { id: 'push', label: 'Push Notification' }
                    ].map(tab => (
                      <button
                        key={tab.id}
                        onClick={() => setCommMode(tab.id)}
                        style={{
                          padding: '6px 12px',
                          borderRadius: '8px',
                          background: commMode === tab.id ? 'rgba(59, 130, 246, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                          border: commMode === tab.id ? '1px solid #3b82f6' : '1px solid var(--border-glass)',
                          color: commMode === tab.id ? '#60a5fa' : 'var(--text-muted)',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {commMode === 'chat' && (
                    <div style={{ borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)', padding: '16px' }}>
                      <div style={{ minHeight: '130px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '12px' }}>
                        {chatMessages.map((m, mIdx) => (
                          <div 
                            key={mIdx}
                            style={{
                              alignSelf: m.sender === 'client' ? 'flex-end' : 'flex-start',
                              maxWidth: '85%',
                              padding: '8px 12px',
                              borderRadius: m.sender === 'client' ? '12px 12px 2px 12px' : '12px 12px 12px 2px',
                              background: m.sender === 'client' ? '#3b82f6' : 'rgba(255, 255, 255, 0.06)',
                              color: '#fff',
                              fontSize: '0.8rem'
                            }}
                          >
                            {m.text}
                          </div>
                        ))}
                      </div>

                      <div style={{ display: 'flex', gap: '8px' }}>
                        <input
                          type="text"
                          placeholder="Type real-time test message..."
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' && chatInput.trim()) {
                              setChatMessages(prev => [...prev, { sender: 'client', text: chatInput.trim() }]);
                              const text = chatInput.trim();
                              setChatInput('');
                              setTimeout(() => {
                                setChatMessages(prev => [...prev, { sender: 'qubrix', text: `Message "${text}" acknowledged via WebSocket in 18ms.` }]);
                              }, 400);
                            }
                          }}
                          style={{
                            flex: 1,
                            padding: '8px 12px',
                            borderRadius: '8px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--border-glass)',
                            color: '#fff',
                            fontSize: '0.82rem',
                            outline: 'none'
                          }}
                        />
                        <button
                          onClick={() => {
                            if (!chatInput.trim()) return;
                            setChatMessages(prev => [...prev, { sender: 'client', text: chatInput.trim() }]);
                            setChatInput('');
                            setTimeout(() => {
                              setChatMessages(prev => [...prev, { sender: 'qubrix', text: 'Message delivered across iOS/Android & Web clients.' }]);
                            }, 400);
                          }}
                          className="btn-primary"
                          style={{ padding: '8px 14px', fontSize: '0.8rem' }}
                        >
                          <Send size={13} />
                        </button>
                      </div>
                    </div>
                  )}

                  {commMode === 'webrtc' && (
                    <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)', textAlign: 'center' }}>
                      <div style={{ fontSize: '0.74rem', color: '#60a5fa', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                        ● WEBRTC PEER-TO-PEER SFU MESH (1080P60 / OPUS 48KHZ)
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4px', height: '60px', marginBottom: '14px' }}>
                        {[30, 65, 45, 90, 75, 40, 85, 95, 60, 35, 70, 50].map((h, i) => (
                          <div 
                            key={i} 
                            style={{ 
                              width: '6px', 
                              height: `${h}%`, 
                              background: 'linear-gradient(180deg, #3b82f6, #00f2fe)', 
                              borderRadius: '4px',
                              animation: `pulseWave ${0.8 + (i % 3) * 0.2}s infinite alternate ease-in-out` 
                            }} 
                          />
                        ))}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                        Round Trip Latency: <strong style={{ color: '#10b981' }}>38ms</strong> • Jitter: <strong>1.2ms</strong> • Packet Loss: <strong>0%</strong>
                      </div>
                    </div>
                  )}

                  {commMode === 'push' && (
                    <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)' }}>
                      <div style={{ 
                        padding: '12px 16px', 
                        borderRadius: '12px', 
                        background: 'rgba(255, 255, 255, 0.08)', 
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        marginBottom: '16px',
                        transform: pushSent ? 'scale(1.02)' : 'none',
                        transition: 'all 0.2s ease'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#60a5fa' }}>QUBRIX OMNICHANNEL</span>
                          <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>Just now</span>
                        </div>
                        <div style={{ fontSize: '0.84rem', fontWeight: 700, color: '#fff' }}>Order #8921 Shipped! 🚀</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Real-time GPS tracker initialized. Tap to view delivery.</div>
                      </div>

                      <button
                        onClick={() => {
                          setPushSent(true);
                          setTimeout(() => setPushSent(false), 2000);
                        }}
                        className="btn-secondary"
                        style={{ width: '100%', padding: '10px', fontSize: '0.82rem', justifyContent: 'center' }}
                      >
                        <Zap size={14} color="#60a5fa" />
                        <span>Dispatch Multi-Device Push Broadcast</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* ---------------- 3. TRANSACT MAGIC SANDBOX ---------------- */}
              {currentCap.id === 'transact' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Global Payment Ledger & 1-Click Settlement
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    PCI-DSS Level 1 tokenization, double-entry verification, and instant idempotent ledger recording.
                  </p>

                  <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Currency Rail:</span>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {['USD', 'EUR', 'INR'].map(c => (
                          <button
                            key={c}
                            onClick={() => { setTransactCurrency(c); setTransactStep('ready'); }}
                            style={{
                              padding: '4px 10px',
                              borderRadius: '6px',
                              background: transactCurrency === c ? '#10b981' : 'rgba(255, 255, 255, 0.04)',
                              color: transactCurrency === c ? '#030014' : 'var(--text-muted)',
                              border: 'none',
                              fontSize: '0.74rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    {transactStep === 'ready' && (
                      <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Simulated Invoice:</span>
                          <span style={{ fontSize: '1rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                            {transactCurrency === 'USD' ? '$1,450.00' : transactCurrency === 'EUR' ? '€1,320.00' : '₹1,21,000'}
                          </span>
                        </div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                          IDEMPOTENCY KEY: 9f72c-88b1-41ae
                        </div>
                      </div>
                    )}

                    {transactStep === 'processing' && (
                      <div style={{ padding: '24px', textAlign: 'center' }}>
                        <RefreshCw size={24} color="#10b981" style={{ animation: 'spin 1s linear infinite', margin: '0 auto 8px auto' }} />
                        <div style={{ fontSize: '0.84rem', color: '#10b981', fontWeight: 700 }}>
                          Executing Tokenization & Two-Phase Commit...
                        </div>
                      </div>
                    )}

                    {transactStep === 'confirmed' && transactReceipt && (
                      <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', fontWeight: 700, fontSize: '0.88rem', marginBottom: '8px' }}>
                          <CheckCircle2 size={16} />
                          <span>Ledger Entry Settled in {transactReceipt.latency}!</span>
                        </div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', lineHeight: 1.6 }}>
                          TXN: {transactReceipt.id} <br />
                          Token: {transactReceipt.tokenHash} <br />
                          Double-Entry Status: BALANCED
                        </div>
                      </div>
                    )}

                    <button
                      onClick={runTransaction}
                      disabled={transactStep === 'processing'}
                      className="btn-primary"
                      style={{ width: '100%', padding: '12px', fontSize: '0.88rem', justifyContent: 'center' }}
                    >
                      <CreditCard size={15} />
                      <span>{transactStep === 'confirmed' ? 'Simulate Another Settlement' : 'Execute Sub-Second Transaction'}</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ---------------- 4. UNDERSTAND MAGIC SANDBOX ---------------- */}
              {currentCap.id === 'understand' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Semantic Vector Search & Multimodal OCR
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    Type natural language queries to test high-dimensional vector embeddings and OCR coordinate extraction.
                  </p>

                  <div style={{ padding: '18px', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search semantic documents..."
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-glass)',
                          color: '#fff',
                          fontSize: '0.82rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                      SIMULATED VECTOR EMBEDDING RESULTS (QDRANT HNSW):
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { title: 'Biometric FaceID Token Lifecycle Specification', score: '98.7% Cosine Match', tag: 'Security' },
                        { title: 'Offline-First WatermelonDB Data Synchronization', score: '91.2% Cosine Match', tag: 'Mobile' },
                        { title: 'Multi-Agent LangGraph Swarm Consensus Policy', score: '84.5% Cosine Match', tag: 'AI' }
                      ].map((item, iIdx) => (
                        <div key={iIdx} style={{ padding: '10px 12px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)' }}>{item.title}</div>
                            <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>Tag: {item.tag}</div>
                          </div>
                          <span style={{ fontSize: '0.72rem', color: '#06b6d4', fontWeight: 800, fontFamily: 'var(--font-mono)' }}>
                            {item.score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 5. INTELLIGENCE MAGIC SANDBOX ---------------- */}
              {currentCap.id === 'intelligence' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Autonomous LangGraph Multi-Agent Swarm
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    Watch 4 autonomous agents decompose an enterprise prompt, query tools, verify logic, and synthesize output.
                  </p>

                  <div style={{ padding: '18px', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)', marginBottom: '16px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '16px' }}>
                      {[
                        { role: 'Supervisor', step: 1, icon: Cpu },
                        { role: 'Researcher', step: 2, icon: Search },
                        { role: 'Critic / Guard', step: 3, icon: Shield },
                        { role: 'Executor', step: 4, icon: CheckCircle2 }
                      ].map((agent, aIdx) => {
                        const Icon = agent.icon;
                        const isCurrent = agentStep === agent.step;
                        const isDone = agentStep > agent.step;
                        return (
                          <div 
                            key={aIdx}
                            style={{
                              padding: '12px 6px',
                              borderRadius: '10px',
                              background: isCurrent ? 'rgba(168, 85, 247, 0.25)' : isDone ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                              border: isCurrent ? '2px solid #a855f7' : isDone ? '1px solid #10b981' : '1px solid var(--border-glass)',
                              textAlign: 'center',
                              transition: 'all 0.25s ease'
                            }}
                          >
                            <Icon size={18} color={isCurrent ? '#c084fc' : isDone ? '#10b981' : '#64748b'} style={{ margin: '0 auto 4px auto' }} />
                            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-main)' }}>{agent.role}</div>
                            <div style={{ fontSize: '0.62rem', color: isCurrent ? '#c084fc' : isDone ? '#10b981' : '#64748b', fontFamily: 'var(--font-mono)' }}>
                              {isCurrent ? 'REASONING' : isDone ? 'COMPLETED' : 'IDLE'}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div style={{ 
                      padding: '12px', 
                      borderRadius: '8px', 
                      background: 'rgba(0, 0, 0, 0.5)', 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.74rem', 
                      color: '#c084fc',
                      minHeight: '48px',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {agentStep === 0 && '// Ready. Click "Deploy Autonomous Swarm" below to execute workflow graph.'}
                      {agentStep === 1 && 'Supervisor: Decomposing user prompt into 3 parallel sub-tasks...'}
                      {agentStep === 2 && 'Researcher: Querying enterprise hybrid vector DB (Qdrant) & API docs...'}
                      {agentStep === 3 && 'Critic: Verifying deterministic safety guardrails & hallucination bounds...'}
                      {agentStep === 4 && 'Executor: Synthesizing verified solution with 0% data leakage.'}
                    </div>
                  </div>

                  <button
                    onClick={runAgentSwarm}
                    disabled={agentRunning}
                    className="btn-primary"
                    style={{ width: '100%', padding: '12px', fontSize: '0.88rem', justifyContent: 'center' }}
                  >
                    <Play size={14} />
                    <span>{agentRunning ? 'Swarm Reasoning in Progress...' : 'Deploy Autonomous Swarm Simulation'}</span>
                  </button>
                </div>
              )}

              {/* ---------------- 6. IMMERSE MAGIC SANDBOX ---------------- */}
              {currentCap.id === 'immerse' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Spatial 3D & Digital Twin Matrix
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    Real-time hardware-accelerated 3D viewport. Click and drag or switch shader passes.
                  </p>

                  <div 
                    style={{ 
                      height: '220px', 
                      borderRadius: '16px', 
                      background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(3, 0, 20, 0.8) 75%)', 
                      border: '1px solid rgba(236, 72, 153, 0.4)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                      marginBottom: '16px'
                    }}
                  >
                    {/* Simulated 3D Rotating Mesh Prism */}
                    <div 
                      style={{
                        width: '100px',
                        height: '100px',
                        border: immerseShader === 'wireframe' ? '2px dashed #ec4899' : '3px solid #ec4899',
                        borderRadius: immerseShader === 'exploded' ? '30px' : '16px',
                        transform: `rotateX(${immerseRotation.x}deg) rotateY(${immerseRotation.y}deg) scale(${immerseShader === 'exploded' ? 1.25 : 1})`,
                        background: immerseShader === 'wireframe' ? 'transparent' : 'rgba(236, 72, 153, 0.25)',
                        boxShadow: '0 0 35px rgba(236, 72, 153, 0.45)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.4s ease',
                        animation: 'spin3d 8s infinite linear'
                      }}
                    >
                      <Box size={36} color="#ec4899" />
                    </div>

                    <div style={{ position: 'absolute', bottom: '10px', left: '14px', fontSize: '0.72rem', color: '#ec4899', fontFamily: 'var(--font-mono)' }}>
                      WebGL 2.0 • 60 FPS • PBR Shaders
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    {[
                      { id: 'pbr', label: 'Shaded PBR' },
                      { id: 'wireframe', label: 'Holo Wireframe' },
                      { id: 'exploded', label: 'Exploded Twin' }
                    ].map(btn => (
                      <button
                        key={btn.id}
                        onClick={() => setImmerseShader(btn.id)}
                        style={{
                          flex: 1,
                          padding: '8px',
                          borderRadius: '8px',
                          background: immerseShader === btn.id ? 'rgba(236, 72, 153, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                          border: immerseShader === btn.id ? '1px solid #ec4899' : '1px solid var(--border-glass)',
                          color: immerseShader === btn.id ? '#f472b6' : 'var(--text-muted)',
                          fontSize: '0.76rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ---------------- 7. SECURE MAGIC SANDBOX ---------------- */}
              {currentCap.id === 'secure' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Zero-Trust Perimeter & Biometric Shield
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    Test cryptographic WebAuthn biometric authentication and granular Role-Based Access Control (RBAC).
                  </p>

                  <div style={{ padding: '18px', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)', marginBottom: '16px' }}>
                    {/* Role Switcher */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>Simulate Active Role:</span>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        {[
                          { id: 'guest', label: 'Guest' },
                          { id: 'analyst', label: 'Analyst' },
                          { id: 'architect', label: 'Principal Architect' }
                        ].map(role => (
                          <button
                            key={role.id}
                            onClick={() => setSelectedRole(role.id)}
                            style={{
                              padding: '4px 10px',
                              borderRadius: '6px',
                              background: selectedRole === role.id ? '#f59e0b' : 'rgba(255, 255, 255, 0.04)',
                              color: selectedRole === role.id ? '#030014' : 'var(--text-muted)',
                              border: 'none',
                              fontSize: '0.74rem',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            {role.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Permissions Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '16px' }}>
                      {[
                        { perm: 'Read Telemetry', allowed: true },
                        { perm: 'Execute Code', allowed: selectedRole !== 'guest' },
                        { perm: 'Deploy Cloud Infra', allowed: selectedRole === 'architect' },
                        { perm: 'Rotate API Keys', allowed: selectedRole === 'architect' },
                        { perm: 'Access Vector DB', allowed: selectedRole !== 'guest' },
                        { perm: 'Export User Data', allowed: selectedRole === 'architect' }
                      ].map((p, pIdx) => (
                        <div key={pIdx} style={{ padding: '8px', borderRadius: '8px', background: p.allowed ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)', border: p.allowed ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(239, 68, 68, 0.25)', textAlign: 'center' }}>
                          <div style={{ fontSize: '0.72rem', fontWeight: 600, color: p.allowed ? '#10b981' : '#f87171' }}>
                            {p.allowed ? '✓' : '✕'} {p.perm}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      Hardware Enclave: Verified (FaceID WebAuthn 256-bit Token)
                    </div>
                  </div>
                </div>
              )}

              {/* ---------------- 8. OPERATE MAGIC SANDBOX ---------------- */}
              {currentCap.id === 'operate' && (
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                    Distributed Workflow DAG & Real-Time Sync
                  </h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                    Visualizing multi-step asynchronous job queuing with zero-loss persistence and automatic retry logic.
                  </p>

                  <div style={{ padding: '18px', borderRadius: '16px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid var(--border-glass)', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      {[
                        { step: 1, label: 'Ingest' },
                        { step: 2, label: 'BullMQ' },
                        { step: 3, label: 'Worker' },
                        { step: 4, label: 'S3 Store' },
                        { step: 5, label: 'Cron Sync' }
                      ].map((node, idx) => (
                        <React.Fragment key={node.step}>
                          <div style={{ textAlign: 'center' }}>
                            <div style={{ 
                              width: '32px', 
                              height: '32px', 
                              borderRadius: '50%', 
                              background: operActiveStep >= node.step ? '#8b5cf6' : 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid #8b5cf6',
                              color: '#fff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              margin: '0 auto 4px auto'
                            }}>
                              {node.step}
                            </div>
                            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{node.label}</div>
                          </div>
                          {idx < 4 && (
                            <div style={{ flex: 1, height: '2px', background: operActiveStep > idx + 1 ? '#8b5cf6' : 'rgba(255, 255, 255, 0.1)', margin: '0 4px 14px 4px' }} />
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      <span>Active Jobs: {operJobs.toLocaleString()}</span>
                      <span>Job Loss SLA: 0.000%</span>
                      <span>Workers: 24 Pods</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setOperJobs(prev => prev + 150);
                      setOperActiveStep(1);
                      setTimeout(() => setOperActiveStep(2), 250);
                      setTimeout(() => setOperActiveStep(3), 500);
                      setTimeout(() => setOperActiveStep(4), 750);
                      setTimeout(() => setOperActiveStep(5), 1000);
                    }}
                    className="btn-primary"
                    style={{ width: '100%', padding: '12px', fontSize: '0.88rem', justifyContent: 'center' }}
                  >
                    <Zap size={14} />
                    <span>Dispatch Batch Async Event Stream</span>
                  </button>
                </div>
              )}

            </div>

            {/* Bottom Stack Action Bar */}
            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '20px', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Selected in Your Project Stack: <strong style={{ color: 'var(--cyan-core)' }}>{selectedStack.length} Capabilities</strong>
                </span>
              </div>

              <button
                onClick={handleProceedToPricing}
                className="btn-primary"
                style={{ padding: '10px 20px', fontSize: '0.85rem' }}
              >
                <span>Proceed to Pricing Calculator</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* FLOATING PROJECT STACK COMPOSER (STICKY BOTTOM BAR) */}
      <div
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(920px, calc(100vw - 32px))',
          background: 'rgba(3, 0, 20, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border-glow)',
          borderRadius: '999px',
          padding: '12px 24px',
          zIndex: 900,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 12px 40px rgba(0, 0, 0, 0.6), 0 0 25px rgba(0, 242, 254, 0.2)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ 
            width: '36px', 
            height: '36px', 
            borderRadius: '50%', 
            background: 'linear-gradient(135deg, #00f2fe, #7928ca)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800,
            fontSize: '0.85rem'
          }}>
            {selectedStack.length}
          </div>

          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#fff' }}>
              Your Custom Capability Stack
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
              {selectedStack.map(id => CAPABILITIES.find(c => c.id === id)?.name).filter(Boolean).join(' • ')}
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setSelectedStack([])}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-dim)',
              fontSize: '0.76rem',
              cursor: 'pointer',
              padding: '6px'
            }}
          >
            Clear
          </button>

          <button
            onClick={handleProceedToPricing}
            className="btn-primary"
            style={{ padding: '9px 18px', fontSize: '0.85rem' }}
          >
            <span>Proceed to Cost Calculator</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes streamFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        @keyframes pulseWave {
          0% { transform: scaleY(0.4); opacity: 0.6; }
          100% { transform: scaleY(1); opacity: 1; }
        }
        @keyframes spin3d {
          0% { transform: rotateX(15deg) rotateY(0deg); }
          100% { transform: rotateX(15deg) rotateY(360deg); }
        }
      `}</style>

    </div>
  );
}
