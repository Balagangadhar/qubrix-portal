import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Globe, 
  Smartphone, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Activity, 
  Sliders, 
  FileText,
  Clock,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Server,
  Lock,
  Database,
  BarChart3,
  Calendar,
  Share2,
  MessageSquare,
  CreditCard,
  Search,
  Box,
  Shield
} from 'lucide-react';
import ThreeConsultingCanvas from '../components/ThreeConsultingCanvas';
import { LEADERSHIP } from '../data/leadershipData';
import { SERVICES, PORTFOLIO } from '../data/servicesData';
import { CAPABILITIES } from '../data/capabilitiesData';

export default function HomeView({ setView }) {
  const [activePillar, setActivePillar] = useState('web');
  const [activeArchLayer, setActiveArchLayer] = useState('web');

  return (
    <div style={{ paddingTop: '20px', paddingBottom: '80px' }}>
      
      {/* HERO SECTION WITH 3D WEBGL GRAPHICS */}
      <section className="content-section" style={{ position: 'relative', marginBottom: '80px' }}>
        <div 
          className="hero-grid-layout"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', 
            gap: '36px', 
            alignItems: 'center',
            minHeight: '560px'
          }}
        >
          
          {/* Left Text & Call to Actions */}
          <div style={{ zIndex: 5 }}>
            {/* Consulting Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid var(--border-glow)',
                marginBottom: '18px',
                maxWidth: '100%',
                boxSizing: 'border-box'
              }}
            >
              <Sparkles size={14} color="var(--cyan-core)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'var(--cyan-core)', letterSpacing: '0.04em' }}>
                ENTERPRISE DIGITAL & AI CONSULTING PARTNERSHIP
              </span>
            </div>

            {/* Main Headline */}
            <h1
              className="hero-headline"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
                lineHeight: 1.12,
                marginBottom: '20px',
                letterSpacing: '-0.03em'
              }}
            >
              Architecting Next-Gen <br />
              <span className="gradient-text">Web, Mobile & AI</span> <br />
              Digital Platforms
            </h1>

            {/* Subtitle */}
            <p
              className="hero-subtitle"
              style={{
                fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '28px',
                maxWidth: '640px'
              }}
            >
              Qubrix is an elite technology consulting firm led by 
              <strong style={{ color: 'var(--text-main)' }}> Gangadhar (14+ yrs, Reputed Financial Organization)</strong> and 
              <strong style={{ color: 'var(--text-main)' }}> Srikanth (14+ yrs, Reputed IT Consulting Company)</strong>. 
              We partner with enterprise leaders and high-growth ventures to architect, engineer, and deploy high-throughput web applications, native mobile experiences, and autonomous AI systems.
            </p>

            {/* Action Buttons */}
            <div
              className="hero-actions-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '36px'
              }}
            >
              <button
                onClick={() => {
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
                style={{ padding: '15px 28px', fontSize: '0.96rem' }}
              >
                <span>Schedule Strategy Consultation</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  setView('pricing');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-secondary"
                style={{ padding: '15px 24px', fontSize: '0.94rem' }}
              >
                <Sliders size={16} color="var(--cyan-core)" />
                <span>Interactive Pricing Calculator</span>
              </button>
            </div>

            {/* Trust Metrics Strip */}
            <div
              className="hero-metrics-strip"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-glass)',
                maxWidth: '560px'
              }}
            >
              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--cyan-core)', fontFamily: 'var(--font-heading)' }}>
                  14+ Years
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Enterprise Leadership
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--purple-accent)', fontFamily: 'var(--font-heading)' }}>
                  45+ Systems
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Delivered in Prod
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.45rem', fontWeight: 900, color: '#10b981', fontFamily: 'var(--font-heading)' }}>
                  99.99%
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>
                  Architecture SLA
                </div>
              </div>
            </div>

          </div>

          {/* Right 3D Interactive WebGL Element */}
          <div 
            className="three-canvas-container"
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: '100%', 
              minHeight: '560px', 
              display: 'flex', 
              flexDirection: 'column' 
            }}
          >
            <div
              style={{
                width: '100%',
                height: '100%',
                minHeight: '100%',
                borderRadius: '24px',
                background: 'radial-gradient(circle at center, rgba(121, 40, 202, 0.14) 0%, rgba(3, 0, 20, 0.55) 75%)',
                border: '1px solid var(--border-glass)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.6)',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flex: 1
              }}
            >
              <ThreeConsultingCanvas 
                activePillar={activePillar} 
                onSelectPillar={(pillarId) => setActivePillar(pillarId)} 
              />
            </div>
          </div>

        </div>
      </section>

      {/* THE THREE CONSULTING PILLARS */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-pill badge-violet" style={{ marginBottom: '14px' }}>
            CORE CONSULTING VERTICALS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            Three Pillars of <span className="gradient-text">Modern Digital Craft</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem' }}>
            From high-throughput distributed web micro-frontends to native mobile apps and enterprise autonomous AI swarms.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
          
          {/* Pillar 1: Web Application Consulting */}
          <div 
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              border: activePillar === 'web' ? '2px solid #00f2fe' : '1px solid var(--border-glass)',
              transition: 'all 0.3s ease',
              position: 'relative',
              background: activePillar === 'web' ? 'linear-gradient(145deg, rgba(11, 14, 38, 0.95), rgba(0, 242, 254, 0.05))' : undefined
            }}
            onMouseEnter={() => setActivePillar('web')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
              <div style={{ 
                width: '52px', 
                height: '52px', 
                borderRadius: '14px', 
                background: 'rgba(0, 242, 254, 0.1)', 
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Globe size={26} color="#00f2fe" />
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '999px', background: 'rgba(0, 242, 254, 0.1)', color: '#00f2fe', fontWeight: 700 }}>
                HIGH THROUGHPUT
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--text-main)' }}>
              Web Application Architecture
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              We design and engineer resilient Next.js 15 & React 19 web platforms, micro-frontends, and distributed streaming backends capable of sub-millisecond edge response times.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {[
                'Next.js 15 & React 19 Micro-Frontends',
                'High-Concurrency Go & Node.js Edge APIs',
                'Multi-Region Cloud Deployment with Zero Downtime',
                'Real-Time WebSocket & Kafka Event Streaming'
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={15} color="#00f2fe" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                Lead: Gangadhar (Reputed Financial Organization)
              </span>
              <button 
                onClick={() => setView('services')} 
                style={{ background: 'none', border: 'none', color: '#00f2fe', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Learn More <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Pillar 2: Mobile Application Engineering */}
          <div 
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              border: activePillar === 'mobile' ? '2px solid #3b82f6' : '1px solid var(--border-glass)',
              transition: 'all 0.3s ease',
              position: 'relative',
              background: activePillar === 'mobile' ? 'linear-gradient(145deg, rgba(11, 14, 38, 0.95), rgba(59, 130, 246, 0.05))' : undefined
            }}
            onMouseEnter={() => setActivePillar('mobile')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
              <div style={{ 
                width: '52px', 
                height: '52px', 
                borderRadius: '14px', 
                background: 'rgba(59, 130, 246, 0.1)', 
                border: '1px solid rgba(59, 130, 246, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Smartphone size={26} color="#3b82f6" />
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '999px', background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa', fontWeight: 700 }}>
                NATIVE & CROSS-PLATFORM
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--text-main)' }}>
              Mobile App Development
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Fluid iOS (Swift) and Android (Kotlin / React Native / Flutter) engineering with 60fps animations, offline-first synchronization, biometric security, and native device hardware utilization.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {[
                'React Native & Flutter Multi-Platform Speed',
                'Offline-First Sync with SQLite & WatermelonDB',
                'Biometric Authentication & Secure Enclave',
                'End-to-End App Store Publication & OTA Updates'
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={15} color="#3b82f6" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                Lead: Srikanth (Reputed IT Consulting Company)
              </span>
              <button 
                onClick={() => setView('services')} 
                style={{ background: 'none', border: 'none', color: '#60a5fa', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Learn More <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Pillar 3: AI Enablement */}
          <div 
            className="glass-panel"
            style={{
              padding: '36px',
              borderRadius: '24px',
              border: activePillar === 'ai' ? '2px solid #a855f7' : '1px solid var(--border-glass)',
              transition: 'all 0.3s ease',
              position: 'relative',
              background: activePillar === 'ai' ? 'linear-gradient(145deg, rgba(11, 14, 38, 0.95), rgba(168, 85, 247, 0.05))' : undefined
            }}
            onMouseEnter={() => setActivePillar('ai')}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
              <div style={{ 
                width: '52px', 
                height: '52px', 
                borderRadius: '14px', 
                background: 'rgba(168, 85, 247, 0.1)', 
                border: '1px solid rgba(168, 85, 247, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Cpu size={26} color="#a855f7" />
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '999px', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', fontWeight: 700 }}>
                AGENTIC & RAG
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '12px', color: 'var(--text-main)' }}>
              Enterprise AI Enablement
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              We transform internal enterprise workflows with autonomous multi-agent reasoning networks (LangGraph), hybrid knowledge retrieval (GraphRAG), and private on-premise LLMs.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              {[
                'Multi-Agent Swarm Orchestration with LangGraph',
                'Enterprise Hybrid Vector Search & Knowledge Graphs',
                'Deterministic Safety Guardrails & Automated Evals',
                'Private On-Premise Local LLM Hosting & Compliance'
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                  <CheckCircle2 size={15} color="#a855f7" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                Lead: Srikanth & Gangadhar (Co-Lead)
              </span>
              <button 
                onClick={() => setView('services')} 
                style={{ background: 'none', border: 'none', color: '#c084fc', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                Learn More <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* REUSABLE DIGITAL CAPABILITIES CATALOGUE SHOWCASE */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '46px' }}>
          <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
            REUSABLE DIGITAL CAPABILITIES MATRIX
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            Architecting With <span className="gradient-text">Reusable Superpowers</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Rather than treating every website or mobile app as an ad-hoc collection of unrelated features, 
            Qubrix organizes digital systems into <strong>8 reusable, production-tested capability foundations</strong>.
          </p>
        </div>

        {/* 8 Capabilities Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginBottom: '32px' }}>
          {CAPABILITIES.map(cap => (
            <div
              key={cap.id}
              className="glass-panel"
              style={{
                padding: '24px',
                borderRadius: '20px',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = cap.accent;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-glass)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ 
                    width: '42px', 
                    height: '42px', 
                    borderRadius: '12px', 
                    background: `${cap.accent}15`, 
                    border: `1px solid ${cap.accent}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {cap.id === 'connect' && <Share2 size={20} color={cap.accent} />}
                    {cap.id === 'communicate' && <MessageSquare size={20} color={cap.accent} />}
                    {cap.id === 'transact' && <CreditCard size={20} color={cap.accent} />}
                    {cap.id === 'understand' && <Search size={20} color={cap.accent} />}
                    {cap.id === 'intelligence' && <Cpu size={20} color={cap.accent} />}
                    {cap.id === 'immerse' && <Box size={20} color={cap.accent} />}
                    {cap.id === 'secure' && <Shield size={20} color={cap.accent} />}
                    {cap.id === 'operate' && <Activity size={20} color={cap.accent} />}
                  </div>

                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: cap.accent, fontWeight: 700 }}>
                    {cap.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--text-main)', marginBottom: '6px' }}>
                  {cap.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '16px' }}>
                  {cap.subCapabilities.map(s => s.name.split(' ')[0]).slice(0, 4).join(', ')}...
                </p>
              </div>

              <button
                onClick={() => {
                  setView('capabilities');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: cap.accent,
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: 0
                }}
              >
                <span>Discover Magic & Research</span>
                <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Explore Full Catalogue Banner */}
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              setView('capabilities');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-secondary"
            style={{ padding: '14px 28px', fontSize: '0.92rem' }}
          >
            <Sparkles size={16} color="var(--cyan-core)" />
            <span>Open Interactive Digital Capabilities Catalogue & Stack Composer</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* INTERACTIVE 3D ARCHITECTURE STACK INSPECTOR */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div 
          className="glass-panel" 
          style={{ 
            padding: '48px', 
            borderRadius: '28px', 
            border: '1px solid var(--border-glow)',
            background: 'linear-gradient(135deg, rgba(8, 11, 35, 0.95) 0%, rgba(14, 18, 52, 0.85) 100%)'
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px auto' }}>
            <div className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
              INNOVATIVE SYSTEM BLUEPRINT
            </div>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', marginBottom: '12px' }}>
              Interactive Enterprise <span className="gradient-text">Architecture Stack</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem' }}>
              Explore how we design and assemble each layer of your production solution for fault tolerance, ultra-low latency, and elastic scale.
            </p>
          </div>

          {/* Architecture Switcher Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
            {[
              { id: 'web', label: 'Web Platform Stack', icon: Globe },
              { id: 'mobile', label: 'Mobile Architecture', icon: Smartphone },
              { id: 'ai', label: 'AI Agentic Pipeline', icon: Cpu }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeArchLayer === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveArchLayer(tab.id)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '999px',
                    background: isActive ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                    border: isActive ? '1px solid var(--cyan-core)' : '1px solid var(--border-glass)',
                    color: isActive ? 'var(--cyan-core)' : 'var(--text-muted)',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Layer Cards Display */}
          {activeArchLayer === 'web' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-core)', marginBottom: '8px' }}>LAYER 01 • CLIENT INTERACTION</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>Next.js 15 & React 19</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Server Components, streaming SSR, fluid micro-animations, and sub-100ms Largest Contentful Paint (LCP).
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#60a5fa', marginBottom: '8px' }}>LAYER 02 • EDGE ROUTING</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>Cloudflare / Edge Workers</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Global anycast network routing, JWT verification at the edge, DDoS mitigation, and smart asset caching.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#c084fc', marginBottom: '8px' }}>LAYER 03 • MICROSERVICES</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>Go / Node.js Distributed Mesh</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Event-driven microservices communicating over gRPC, Kafka event streams, and real-time WebSocket channels.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#10b981', marginBottom: '8px' }}>LAYER 04 • PERSISTENCE</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>PostgreSQL & Redis Cluster</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Multi-region read replicas, connection pooling with PgBouncer, and in-memory sub-millisecond caching.
                </p>
              </div>
            </div>
          )}

          {activeArchLayer === 'mobile' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#60a5fa', marginBottom: '8px' }}>LAYER 01 • GESTURES & VIEW</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>React Native / Swift UI</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  60fps hardware-accelerated gesture physics, dark mode ergonomics, and adaptive tablet/phone scaling.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-core)', marginBottom: '8px' }}>LAYER 02 • LOCAL STORAGE</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>WatermelonDB & SQLite</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Instant zero-delay local queries, reactive data bindings, and background syncing when connectivity returns.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#c084fc', marginBottom: '8px' }}>LAYER 03 • HARDWARE SEC</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>Biometrics & Secure Enclave</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  FaceID / TouchID biometric token authentication, encrypted keychain storage, and certificate pinning.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#10b981', marginBottom: '8px' }}>LAYER 04 • DELIVERY</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>CI/CD Fastlane & OTA</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Automated App Store and Google Play submissions with instant over-the-air hotfix deployments.
                </p>
              </div>
            </div>
          )}

          {activeArchLayer === 'ai' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#c084fc', marginBottom: '8px' }}>LAYER 01 • COGNITIVE SUPERVISOR</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>LangGraph Swarm Coordinator</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Dynamic task decomposition, multi-agent handoffs, state checkpointing, and cyclic human-in-the-loop validation.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-core)', marginBottom: '8px' }}>LAYER 02 • HYBRID KNOWLEDGE</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>GraphRAG & Vector Search</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Hybrid sparse-dense retrieval with Qdrant/Milvus, semantic reranking models, and contextual chunk graphs.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#60a5fa', marginBottom: '8px' }}>LAYER 03 • PRIVATE EXECUTION</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>Private LLM & Secure API Sandbox</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Containerized local vLLM / Ollama deployments with strict egress controls ensuring confidential enterprise data stays private.
                </p>
              </div>

              <div style={{ padding: '24px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#10b981', marginBottom: '8px' }}>LAYER 04 • EVALUATION & SAFETY</div>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '8px' }}>Deterministic Guardrails & Tracing</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  Automated latency, hallucination, and prompt-injection testing with continuous synthetic evaluation datasets.
                </p>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* LEADERSHIP & FOUNDING PARTNERS */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
            PRINCIPAL CONSULTING LEADERSHIP
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            Direct Access to <span className="gradient-text">Battle-Tested Architects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem' }}>
            At Qubrix, you never get handed off to junior bench staff. Your digital systems are personally architected 
            and directed by our founding technology partners.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
          {LEADERSHIP.map(leader => (
            <div
              key={leader.id}
              className="glass-panel"
              style={{
                padding: '36px',
                borderRadius: '24px',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
                  {leader.avatar ? (
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      style={{
                        width: '74px',
                        height: '74px',
                        borderRadius: '18px',
                        objectFit: 'cover',
                        border: '2px solid var(--cyan-core)',
                        boxShadow: '0 0 20px rgba(0, 242, 254, 0.25)'
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '74px',
                        height: '74px',
                        minWidth: '74px',
                        borderRadius: '18px',
                        background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(121, 40, 202, 0.25) 100%)',
                        border: '2px solid var(--cyan-core)',
                        boxShadow: '0 0 25px rgba(0, 242, 254, 0.25), inset 0 0 15px rgba(0, 242, 254, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.65rem',
                        fontWeight: 900,
                        color: 'var(--cyan-core)',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {leader.initials}
                    </div>
                  )}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', margin: 0 }}>
                        {leader.name}
                      </h3>
                      <span style={{ 
                        fontSize: '0.68rem', 
                        padding: '2px 8px', 
                        borderRadius: '999px', 
                        background: 'rgba(0, 242, 254, 0.15)', 
                        color: 'var(--cyan-core)', 
                        fontWeight: 700 
                      }}>
                        {leader.stats.experience}
                      </span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {leader.affiliation}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>
                      {leader.role}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', whiteSpace: 'pre-line' }}>
                  {leader.bio}
                </p>

                {/* Specialties */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                    Core Architecture Specialties:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {leader.specialties.map((spec, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={15} color="var(--cyan-core)" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
                <button
                  onClick={() => {
                    setView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary"
                  style={{ width: '100%', padding: '12px', fontSize: '0.88rem', justifyContent: 'center' }}
                >
                  <Calendar size={15} />
                  <span>Book Consultation with {leader.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CLIENT IMPACT & CASE STUDIES */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-pill badge-violet" style={{ marginBottom: '14px' }}>
            PROVEN CLIENT IMPACT
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            Recent <span className="gradient-text">Consulting Deployments</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem' }}>
            Production systems engineered for institutional FinTech, global supply chain, and connected healthcare.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '28px' }}>
          {PORTFOLIO.map(item => (
            <div
              key={item.id}
              className="glass-panel"
              style={{
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.75rem', color: item.accent, fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                    {item.category}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                    {item.client}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-main)', marginBottom: '10px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '18px' }}>
                  {item.description}
                </p>

                {/* Key Impact Metric Box */}
                <div style={{ 
                  padding: '12px 16px', 
                  borderRadius: '12px', 
                  background: 'rgba(0, 242, 254, 0.05)', 
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--cyan-core)', textTransform: 'uppercase', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                    MEASURED ENTERPRISE IMPACT:
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: 600, marginTop: '4px' }}>
                    {item.impact}
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {item.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{ 
                        fontSize: '0.72rem', 
                        padding: '3px 8px', 
                        borderRadius: '6px', 
                        background: 'rgba(255, 255, 255, 0.04)', 
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-muted)' 
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '14px', fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                Led by: {item.leadConsultant}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUICK HOMEPAGE REQUIREMENT SCOPING BANNER */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div 
          className="glass-panel" 
          style={{ 
            padding: '48px', 
            borderRadius: '28px', 
            border: '2px solid var(--border-glow)',
            background: 'linear-gradient(135deg, rgba(8, 11, 35, 0.98) 0%, rgba(18, 24, 62, 0.9) 100%)',
            textAlign: 'center'
          }}
        >
          <div className="badge-pill badge-cyan" style={{ marginBottom: '16px' }}>
            START YOUR CONSULTATION
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '18px' }}>
            Ready to Scope Your Next <span className="gradient-text">Digital Product</span>?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '680px', margin: '0 auto 36px auto', fontSize: '1.1rem' }}>
            Schedule a high-impact architectural scoping session with Gangadhar and Srikanth. 
            We analyze your requirements, review existing bottlenecks, and deliver an actionable technical blueprint within 24 hours.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <button
              onClick={() => {
                setView('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-primary"
              style={{ padding: '16px 36px', fontSize: '1.05rem' }}
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => {
                setView('pricing');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-secondary"
              style={{ padding: '16px 28px', fontSize: '1rem' }}
            >
              <Sliders size={18} color="var(--cyan-core)" />
              <span>Explore Pricing Calculator</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
