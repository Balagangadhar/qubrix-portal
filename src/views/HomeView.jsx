import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  GraduationCap, 
  Atom, 
  Cpu, 
  Palette, 
  Smartphone, 
  Laptop, 
  Tablet, 
  Code, 
  Zap, 
  CheckCircle2, 
  Terminal, 
  Monitor, 
  Activity, 
  FlaskConical,
  Eye,
  Sliders,
  Play
} from 'lucide-react';
import { INSTRUCTORS } from '../data/instructorsData';

export default function HomeView({ setView, onOpenTerminal }) {
  // Hero Interactive Device Sandbox State
  const [activeDeviceView, setActiveDeviceView] = useState('desktop'); // 'desktop' | 'mobile' | 'code'
  const [deviceAccent, setDeviceAccent] = useState('#00f2fe');
  const [simulatedMetric, setSimulatedMetric] = useState(14820);
  const [activeScreenTab, setActiveScreenTab] = useState('analytics');

  return (
    <div style={{ paddingTop: '30px' }}>
      {/* Hero Section */}
      <section className="content-section" style={{ position: 'relative', marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', maxWidth: '960px', margin: '0 auto 40px auto' }}>
          {/* Futuristic Web & Mobile Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid var(--border-glow)',
              marginBottom: '20px'
            }}
          >
            <Sparkles size={15} color="var(--cyan-core)" />
            <span style={{ fontSize: '0.84rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--cyan-core)', letterSpacing: '0.04em' }}>
              NEXT-GEN WEB & MOBILE APPLICATION STUDIO
            </span>
          </div>

          {/* Main Title - Immediate Web & Mobile Clarity */}
          <h1
            style={{
              fontSize: 'clamp(2.6rem, 5.5vw, 4.6rem)',
              lineHeight: 1.12,
              marginBottom: '20px',
              letterSpacing: '-0.03em'
            }}
          >
            We Architect High-Performance <br />
            <span className="gradient-text">Web & Mobile Products</span>
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '820px',
              margin: '0 auto 32px auto'
            }}
          >
            Qubrix is an elite digital engineering studio. We build buttery-smooth web applications, native iOS & Android
            mobile experiences, and spatial UI/UX systems — complemented by real-world practitioner courses and interactive frontier labs.
          </p>

          {/* Primary CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              marginBottom: '36px'
            }}
          >
            <button
              onClick={() => setView('services')}
              className="btn-primary"
              style={{ padding: '16px 32px', fontSize: '1rem' }}
            >
              <Layers size={18} />
              Launch Web/Mobile Project
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setView('labs')}
              className="btn-secondary"
              style={{ padding: '15px 28px', fontSize: '0.98rem', borderColor: 'var(--cyan-core)' }}
            >
              <FlaskConical size={18} color="var(--cyan-core)" />
              Try Interactive Labs (3 Labs)
            </button>

            <button
              onClick={() => setView('courses')}
              className="btn-secondary btn-glow-violet"
              style={{ padding: '15px 26px', fontSize: '0.98rem' }}
            >
              <GraduationCap size={18} color="var(--purple-accent)" />
              Academy Courses
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              fontSize: '0.86rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-heading)'
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="var(--cyan-core)" /> 60fps Fluid Web & Native Apps
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#10b981" /> 99.9% Production Uptime SLA
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="var(--purple-accent)" /> Mentors from JPMorganChase & Evoke
            </span>
          </div>
        </div>

        {/* HERO VISUALIZATION: Interactive Live Device & UI Architecture Simulator */}
        <div
          className="glass-panel"
          style={{
            maxWidth: '1060px',
            margin: '0 auto',
            padding: '24px',
            borderRadius: '24px',
            border: '1px solid var(--border-glow)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45)',
            position: 'relative'
          }}
        >
          {/* Top Device Bar & Mode Switcher */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              paddingBottom: '16px',
              borderBottom: '1px solid var(--border-glass)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f43f5e', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
              </div>
              <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                qubrix-studio // live preview simulator
              </span>
            </div>

            {/* Device Switcher Tabs */}
            <div
              style={{
                display: 'flex',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '4px',
                borderRadius: '999px',
                gap: '4px',
                border: '1px solid var(--border-glass)'
              }}
            >
              {[
                { id: 'desktop', label: 'Desktop Web App', icon: Monitor },
                { id: 'mobile', label: 'Mobile Native App', icon: Smartphone },
                { id: 'code', label: 'React 19 Code', icon: Code }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeDeviceView === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDeviceView(tab.id)}
                    style={{
                      background: isActive ? 'linear-gradient(135deg, var(--cyan-core), #38bdf8)' : 'transparent',
                      color: isActive ? '#030014' : 'var(--text-muted)',
                      border: 'none',
                      padding: '6px 14px',
                      borderRadius: '999px',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-heading)',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'all 0.2s'
                    }}
                  >
                    <Icon size={14} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Accent Color Palette Switcher */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.74rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                Theme:
              </span>
              {[
                { color: '#00f2fe', name: 'Cyan' },
                { color: '#a855f7', name: 'Violet' },
                { color: '#10b981', name: 'Emerald' },
                { color: '#ec4899', name: 'Magenta' }
              ].map((c) => (
                <button
                  key={c.color}
                  onClick={() => setDeviceAccent(c.color)}
                  title={c.name}
                  style={{
                    width: '18px',
                    height: '18px',
                    borderRadius: '50%',
                    background: c.color,
                    border: deviceAccent === c.color ? '2px solid #ffffff' : 'none',
                    cursor: 'pointer',
                    boxShadow: deviceAccent === c.color ? `0 0 10px ${c.color}` : 'none'
                  }}
                />
              ))}
            </div>
          </div>

          {/* DEVICE CONTAINER BODY */}
          <div style={{ padding: '24px 0 8px 0' }}>
            {activeDeviceView === 'desktop' && (
              /* Desktop SaaS Web Dashboard Simulation */
              <div
                style={{
                  background: 'rgba(5, 8, 28, 0.85)',
                  border: `1px solid ${deviceAccent}40`,
                  borderRadius: '16px',
                  padding: '24px',
                  boxShadow: `0 10px 40px ${deviceAccent}15`
                }}
              >
                {/* Simulated Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: deviceAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#030014', fontWeight: 800, fontSize: '0.85rem' }}>
                      QB
                    </div>
                    <div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>
                        Enterprise Web Architecture Portal
                      </div>
                      <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                        Next.js 15 Server Components • Sub-millisecond Edge Response
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    {['analytics', 'swarms', 'infrastructure'].map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveScreenTab(sub)}
                        style={{
                          background: activeScreenTab === sub ? `${deviceAccent}20` : 'transparent',
                          border: activeScreenTab === sub ? `1px solid ${deviceAccent}` : '1px solid rgba(255, 255, 255, 0.08)',
                          color: activeScreenTab === sub ? deviceAccent : '#cbd5e1',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          textTransform: 'capitalize'
                        }}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Web Metric Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>Real-Time Requests / sec</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: deviceAccent, fontFamily: 'var(--font-mono)' }}>
                      {simulatedMetric.toLocaleString()}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#10b981', marginTop: '4px' }}>▲ 24.8% edge latency boost</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>Core Web Vitals</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-mono)' }}>
                      100 / 100
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px' }}>LCP: 0.6s • FID: 2ms • CLS: 0.0</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', marginBottom: '4px' }}>Mobile Native Sync</div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#c084fc', fontFamily: 'var(--font-mono)' }}>
                      Zero Lag
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '4px' }}>WebSocket duplex streaming</div>
                  </div>
                </div>

                {/* Simulated Interactive Wave Chart & Trigger */}
                <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Activity size={18} color={deviceAccent} />
                    <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>Live System Throughput Monitor: All 12 Edge Regions Healthy</span>
                  </div>
                  <button
                    onClick={() => setSimulatedMetric(prev => prev + Math.floor(Math.random() * 800 - 300))}
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      border: `1px solid ${deviceAccent}60`,
                      color: deviceAccent,
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      cursor: 'pointer'
                    }}
                  >
                    Simulate Spike
                  </button>
                </div>
              </div>
            )}

            {activeDeviceView === 'mobile' && (
              /* Mobile App Frame Simulation */
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  style={{
                    width: '320px',
                    height: '420px',
                    background: '#090d2a',
                    border: `3px solid ${deviceAccent}`,
                    borderRadius: '36px',
                    padding: '16px',
                    boxShadow: `0 15px 40px ${deviceAccent}25`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative'
                  }}
                >
                  {/* Dynamic Island */}
                  <div style={{ width: '90px', height: '18px', background: '#000', borderRadius: '12px', margin: '0 auto 14px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: deviceAccent, opacity: 0.8 }} />
                  </div>

                  {/* App Screen Content */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Qubrix Mobile Experience</div>
                        <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>AuroraPay Wallet</div>
                      </div>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: deviceAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#030014', fontWeight: 800, fontSize: '0.75rem' }}>
                        iOS
                      </div>
                    </div>

                    {/* Balance Card */}
                    <div style={{ background: `linear-gradient(135deg, ${deviceAccent}30 0%, #7928ca40 100%)`, border: `1px solid ${deviceAccent}50`, borderRadius: '16px', padding: '16px', marginBottom: '12px' }}>
                      <div style={{ fontSize: '0.72rem', color: '#e2e8f0' }}>Total Portfolio Value</div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', fontFamily: 'var(--font-mono)' }}>₹12,84,900.00</div>
                      <div style={{ fontSize: '0.68rem', color: '#10b981', marginTop: '4px' }}>▲ 12.4% biometric instant settlement (UPI / IMPS)</div>
                    </div>

                    {/* Quick Action Pills */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '10px' }}>
                      {['Send', 'Receive', 'Analytics'].map((act, i) => (
                        <div key={i} style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '8px', borderRadius: '8px', textAlign: 'center', fontSize: '0.72rem', color: '#cbd5e1' }}>
                          {act}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Home Indicator Bar */}
                  <div style={{ width: '100px', height: '4px', background: 'rgba(255, 255, 255, 0.4)', borderRadius: '2px', margin: '0 auto' }} />
                </div>
              </div>
            )}

            {activeDeviceView === 'code' && (
              /* Live React 19 / TypeScript Server Component Code Preview */
              <div className="code-preview-window" style={{ padding: '20px' }}>
                <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '10px' }}>
                  // Next.js 15 App Router & React 19 Server Actions Architecture
                </div>
                <pre style={{ margin: 0, fontSize: '0.85rem', color: '#cbd5e1', lineHeight: 1.6, overflowX: 'auto' }}>
{`export default async function WebStudioDashboard({ orgId }: { orgId: string }) {
  // Edge Streaming with React 19 Server Components
  const [telemetry, agentFleet] = await Promise.all([
    fetchEdgeMetrics(orgId, { revalidate: 60 }),
    getAutonomousSwarmStatus(orgId)
  ]);

  return (
    <SpatialLayout theme="${deviceAccent}">
      <MicroFrontendStream data={telemetry} fps={60} />
      <MobileSynchronizer protocol="WebSocket" offlineResilient />
      <PostQuantumShield algorithm="ML-KEM-768" status="Enforced" />
    </SpatialLayout>
  );
}`}
                </pre>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CORE DISCIPLINES: Unmistakable Web, Mobile & Digital Offerings */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>
            What We Build at Qubrix Studio
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto', fontSize: '1.05rem' }}>
            Specialized engineering for ambitious digital products that demand high velocity, pristine visual aesthetics, and rock-solid resiliency.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}
        >
          {[
            {
              icon: Laptop,
              title: 'Full-Stack Web Apps',
              accent: 'var(--cyan-core)',
              desc: 'Ultra-fast Next.js 15 & React 19 web platforms, distributed microservices in Go & Node, and sub-millisecond edge APIs.',
              tags: ['Next.js 15', 'React 19', 'TypeScript', 'PostgreSQL', 'Redis']
            },
            {
              icon: Smartphone,
              title: 'Native Mobile Engineering',
              accent: '#3b82f6',
              desc: 'High-performance iOS and Android applications with 60fps gesture fluidness, offline-first sync, and biometric authentication.',
              tags: ['React Native', 'Swift iOS', 'Kotlin', 'Offline SQLite']
            },
            {
              icon: Palette,
              title: 'Spatial UI/UX Design',
              accent: '#ec4899',
              desc: 'Dark ergonomic interfaces, Figma design systems with automated token pipelines, silky micro-animations, and 3D web assets.',
              tags: ['Figma Tokens', 'Design Systems', 'Micro-interactions', 'WCAG AAA']
            },
            {
              icon: Cpu,
              title: 'Autonomous Agentic AI',
              accent: 'var(--purple-accent)',
              desc: 'Multi-agent reasoning loops, deterministic guardrails, custom LLM tool routing, and enterprise hybrid vector search.',
              tags: ['LangGraph', 'Swarm AI', 'GraphRAG', 'Self-Hosted LLMs']
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '30px',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid var(--border-glass)'
                }}
              >
                <div>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${item.accent}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '18px'
                    }}
                  >
                    <Icon size={24} color={item.accent} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setView('services')}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: item.accent,
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0
                    }}
                  >
                    Learn More & Scope Project <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* THREE INTERACTIVE LABS SHOWCASE (Web/UI Lab, AI Swarms Lab, Quantum Lab) */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '48px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, rgba(8, 14, 40, 0.95) 0%, rgba(18, 22, 60, 0.9) 100%)',
            border: '1px solid var(--border-glow)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}>
            <div>
              <div className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                <FlaskConical size={14} />
                THE QUBRIX INTERACTIVE LABS SUITE
              </div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '10px' }}>
                Experiment in Browser: 3 Live Technology Sandboxes
              </h2>
              <p style={{ color: 'var(--text-muted)', maxWidth: '640px', fontSize: '0.98rem' }}>
                We believe in learning by touch. Test our in-browser interactive labs across modern UI design, autonomous AI swarms, and quantum computing.
              </p>
            </div>

            <button
              onClick={() => setView('labs')}
              className="btn-primary"
              style={{ padding: '14px 28px', fontSize: '0.95rem' }}
            >
              Open Interactive Labs Hub
              <ArrowRight size={16} />
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '20px'
            }}
          >
            {[
              {
                id: 'web-lab',
                title: 'Web & UI/UX Physics Lab',
                category: 'Frontend Engineering',
                accent: 'var(--cyan-core)',
                desc: 'Tweak spring physics, glassmorphism blur, CSS token gradients, and test responsive device viewports in real time.'
              },
              {
                id: 'ai-lab',
                title: 'Agentic AI Swarm Lab',
                category: 'Autonomous Multi-Agent',
                accent: 'var(--purple-accent)',
                desc: 'Watch simulated specialized agents (Architect, Designer, Coder) debate and assemble production code graphs live.'
              },
              {
                id: 'quantum-lab',
                title: 'Quantum Information Lab',
                category: 'Qubits & Entanglement',
                accent: '#10b981',
                desc: 'Interactive 3D Bloch sphere vector manipulator, Hadamard/Pauli logic gates circuit, and Bell state entanglement simulator.'
              }
            ].map((lab) => (
              <div
                key={lab.id}
                onClick={() => setView('labs')}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'all 0.25s'
                }}
              >
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: lab.accent, background: `${lab.accent}15`, padding: '3px 8px', borderRadius: '4px' }}>
                  {lab.category}
                </span>
                <h4 style={{ fontSize: '1.25rem', margin: '12px 0 8px 0', color: '#fff' }}>{lab.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.5, marginBottom: '16px' }}>{lab.desc}</p>
                <div style={{ color: lab.accent, fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Launch Sandbox <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDING COURSE AUTHORS (Bala & Srikanth) */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="badge-pill badge-violet" style={{ marginBottom: '12px' }}>
            FACULTY & ENTERPRISE ARCHITECTS
          </div>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
            Learn from Practitioners, Not Theorists
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto', fontSize: '0.98rem' }}>
            Qubrix Academy courses are led by enterprise specialists engineering critical systems at JPMorganChase and Evoke Technologies.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {INSTRUCTORS.map((author) => (
            <div
              key={author.id}
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '18px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: author.id === 'bala' ? 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)' : 'linear-gradient(135deg, #7928ca 0%, #ec4899 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      fontSize: '1.2rem',
                      color: '#fff'
                    }}
                  >
                    {author.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-main)' }}>
                      {author.name}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: author.id === 'bala' ? 'var(--cyan-core)' : 'var(--purple-accent)', fontWeight: 700 }}>
                      {author.affiliation}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: 'var(--text-dim)' }}>
                      {author.role}
                    </div>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  {author.bio}
                </p>
              </div>

              <div>
                <button
                  onClick={() => setView('courses')}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  View Courses Authored by {author.name}
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
