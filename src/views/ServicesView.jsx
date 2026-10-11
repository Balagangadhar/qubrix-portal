import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Palette, 
  Smartphone, 
  Atom, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  Calculator,
  ShieldCheck,
  Zap,
  Clock,
  Compass
} from 'lucide-react';
import { SERVICES, PORTFOLIO } from '../data/servicesData';

export default function ServicesView({ setView }) {
  const [selectedService, setSelectedService] = useState('all');
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Cost & Scope Estimator State
  const [projectType, setProjectType] = useState('ai');
  const [complexity, setComplexity] = useState('enterprise');
  const [timelineSpeed, setTimelineSpeed] = useState('accelerated');

  const getEstimatedTimeline = () => {
    if (timelineSpeed === 'sprint') return '4 - 6 Weeks (Ultra-Fast Track)';
    if (timelineSpeed === 'accelerated') return '8 - 12 Weeks (Recommended)';
    return '14 - 18 Weeks (Deep Custom R&D)';
  };

  const getEstimatedTeam = () => {
    if (complexity === 'mvp') return '1 Lead Architect + 2 Full-Stack Engineers + 1 UI/UX Designer';
    if (complexity === 'growth') return '1 Principal Architect + 3 Senior Engineers + 1 AI Specialist + 1 Product Designer';
    return '1 Enterprise Systems Director + 4 Specialized Engineers + 1 AI Agent Scientist + 1 Quantum Consultant';
  };

  const filteredServices = selectedService === 'all' 
    ? SERVICES 
    : SERVICES.filter(s => s.id === selectedService);

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '16px' }}>
          <Layers size={14} />
          QUBRIX STUDIO DIVISION
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '20px' }}>
          Bespoke Digital Design & <span className="gradient-text">Frontier Engineering</span>
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '740px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
          We architect resilient, hyper-performant digital systems for forward-thinking enterprises.
          From autonomous agentic workflows and quantum prototyping to silky smooth spatial interfaces.
        </p>
      </section>

      {/* Services Grid */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '28px'
          }}
        >
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="glass-panel"
              style={{
                padding: '36px',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${srv.accent}50`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {srv.icon === 'Layers' && <Layers size={24} color={srv.accent} />}
                    {srv.icon === 'Cpu' && <Cpu size={24} color={srv.accent} />}
                    {srv.icon === 'Palette' && <Palette size={24} color={srv.accent} />}
                    {srv.icon === 'Smartphone' && <Smartphone size={24} color={srv.accent} />}
                    {srv.icon === 'Atom' && <Atom size={24} color={srv.accent} />}
                  </div>

                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: srv.accent,
                      background: `${srv.accent}15`,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      border: `1px solid ${srv.accent}40`
                    }}
                  >
                    Enterprise Ready
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', marginBottom: '8px' }}>{srv.title}</h3>
                <div style={{ color: srv.accent, fontSize: '0.85rem', fontWeight: 600, marginBottom: '14px' }}>
                  {srv.tagline}
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '22px' }}>
                  {srv.description}
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                    Core Capabilities
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {srv.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                        <CheckCircle2 size={14} color={srv.accent} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '16px', marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '6px' }}>
                    Key Deliverables:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {srv.deliverables.map((deliv, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.72rem',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          color: '#94a3b8'
                        }}
                      >
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setView('contact')}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.88rem' }}
                >
                  Request Architecture Blueprint
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Portfolio / Case Studies */}
      <section className="content-section" style={{ marginBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge-pill badge-violet" style={{ marginBottom: '12px' }}>
            Flagship Deployments
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>
            Featured Project Showcase
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            A curated glimpse of high-impact platforms engineered by the Qubrix Studio team.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '24px'
          }}
        >
          {PORTFOLIO.map((item) => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: item.accent,
                      background: `${item.accent}15`,
                      padding: '3px 10px',
                      borderRadius: '999px'
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Client: {item.client}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '18px' }}>
                  {item.description}
                </p>

                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    marginBottom: '20px',
                    fontSize: '0.84rem'
                  }}
                >
                  <span style={{ color: item.accent, fontWeight: 700 }}>Impact: </span>
                  <span style={{ color: '#e2e8f0' }}>{item.impact}</span>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.72rem',
                        padding: '3px 8px',
                        borderRadius: '4px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#cbd5e1'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setView('contact')}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: item.accent,
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: 0
                  }}
                >
                  Discuss Similar Build for Your Business
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Project Scope & Timeline Estimator */}
      <section className="content-section" style={{ marginBottom: '100px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '44px',
            borderRadius: '24px',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            background: 'linear-gradient(135deg, rgba(8, 12, 38, 0.95) 0%, rgba(16, 20, 52, 0.9) 100%)',
            boxShadow: '0 20px 60px rgba(0, 242, 254, 0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <Calculator size={24} color="#00f2fe" />
            <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>
              Interactive Scope & Timeline Configurator
            </h2>
          </div>

          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '32px', maxWidth: '700px' }}>
            Select your project parameters to simulate estimated engineering sprints, architecture composition,
            and deployment timeframes with Qubrix Studio.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '28px',
              marginBottom: '36px'
            }}
          >
            {/* Control 1: Domain */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '10px' }}>
                1. System Category
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'ai', label: 'Agentic AI & Multi-Agent Swarm' },
                  { id: 'fullstack', label: 'Full-Stack Web & Cloud Microservices' },
                  { id: 'mobile', label: 'Cross-Platform Mobile App (iOS/Android)' },
                  { id: 'quantum', label: 'Post-Quantum Crypto & Qiskit R&D' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id)}
                    style={{
                      background: projectType === item.id ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      border: projectType === item.id ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                      color: projectType === item.id ? '#00f2fe' : '#94a3b8',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      textAlign: 'left',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2: Scale */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '10px' }}>
                2. System Scale & SLA
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  { id: 'mvp', label: 'Venture MVP (High Velocity)' },
                  { id: 'growth', label: 'Growth Scale (High Throughput & Resiliency)' },
                  { id: 'enterprise', label: 'Enterprise Grade (Multi-Region & Strict Compliance)' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setComplexity(item.id)}
                    style={{
                      background: complexity === item.id ? 'rgba(168, 85, 247, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                      border: complexity === item.id ? '1px solid #c084fc' : '1px solid rgba(255, 255, 255, 0.08)',
                      color: complexity === item.id ? '#c084fc' : '#94a3b8',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      textAlign: 'left',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Result Box */}
            <div
              style={{
                background: 'rgba(3, 0, 20, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Projected Timeline & Squad
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f2fe', fontWeight: 700, fontSize: '1.15rem', marginBottom: '12px' }}>
                  <Clock size={18} />
                  {getEstimatedTimeline()}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '16px' }}>
                  <strong>Squad Composition:</strong> {getEstimatedTeam()}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
                  Includes automated CI/CD pipelines, Dockerized runtime, comprehensive testing, and 30-day post-launch warranty.
                </div>
              </div>

              <button
                onClick={() => setView('contact')}
                className="btn-primary"
                style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }}
              >
                Book Technical Scoping Session
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Qubrix Velocity Framework */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
            The Qubrix Velocity Framework
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto' }}>
            How our studio delivers world-class software at unprecedented speed.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px'
          }}
        >
          {[
            { step: '01', title: 'System Blueprint', desc: 'Architecture mapping, schema definition, API contract specs, and threat modeling.' },
            { step: '02', title: 'Spatial Prototype', desc: 'Clickable Figma systems, motion physics curves, and UX flow validation.' },
            { step: '03', title: 'Quantum-Scale Build', desc: 'Continuous deployment sprints, test-driven logic, microservice orchestration.' },
            { step: '04', title: 'Autonomous QA & Launch', desc: 'Load testing, penetration auditing, edge CDN propagation, and production release.' }
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{ padding: '28px', borderRadius: '16px' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1.8rem',
                  fontWeight: 800,
                  color: '#00f2fe',
                  marginBottom: '12px',
                  opacity: 0.8
                }}
              >
                {item.step}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
