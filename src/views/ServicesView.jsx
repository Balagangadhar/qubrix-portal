import React, { useState } from 'react';
import { 
  Layers, 
  Cpu, 
  Palette, 
  Smartphone, 
  Globe,
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Zap,
  Sliders,
  Calendar,
  FileCheck,
  Server
} from 'lucide-react';
import { SERVICES, PORTFOLIO } from '../data/servicesData';
import { ENGAGEMENT_MODELS } from '../data/consultingScopeData';

export default function ServicesView({ setView }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => {
        if (selectedCategory === 'web') return s.id === 'web-consulting';
        if (selectedCategory === 'mobile') return s.id === 'mobile-consulting';
        if (selectedCategory === 'ai') return s.id === 'ai-enablement';
        if (selectedCategory === 'cloud') return s.id === 'cloud-resilience' || s.id === 'spatial-uiux';
        return true;
      });

  return (
    <div style={{ paddingTop: '36px', paddingBottom: '90px' }}>
      
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
          <Layers size={14} />
          STRATEGIC TECHNICAL CONSULTING
        </div>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 4rem)', marginBottom: '18px', letterSpacing: '-0.02em' }}>
          Bespoke Digital Design & <span className="gradient-text">Frontier Engineering</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '760px', margin: '0 auto', fontSize: '1.12rem', lineHeight: 1.6 }}>
          We architect resilient, hyper-performant digital systems for forward-thinking enterprises.
          From autonomous agentic workflows and multi-agent RAG to fluid native mobile apps and high-throughput web platforms.
        </p>

        {/* Filter Pills */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginTop: '30px' }}>
          {[
            { id: 'all', label: 'All Consulting Practices' },
            { id: 'web', label: 'Web Applications' },
            { id: 'mobile', label: 'Mobile Engineering' },
            { id: 'ai', label: 'AI Enablement' },
            { id: 'cloud', label: 'Cloud & Design Systems' }
          ].map(pill => {
            const isSelected = selectedCategory === pill.id;
            return (
              <button
                key={pill.id}
                onClick={() => setSelectedCategory(pill.id)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '999px',
                  background: isSelected ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                  border: isSelected ? '1px solid var(--cyan-core)' : '1px solid var(--border-glass)',
                  color: isSelected ? 'var(--cyan-core)' : 'var(--text-muted)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {pill.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Services Grid */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '30px'
          }}
        >
          {filteredServices.map(srv => (
            <div
              key={srv.id}
              className="glass-panel"
              style={{
                padding: '38px',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-glass)',
                position: 'relative'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '14px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: `1px solid ${srv.accent}60`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 20px ${srv.accent}20`
                    }}
                  >
                    {srv.id === 'web-consulting' && <Globe size={26} color={srv.accent} />}
                    {srv.id === 'mobile-consulting' && <Smartphone size={26} color={srv.accent} />}
                    {srv.id === 'ai-enablement' && <Cpu size={26} color={srv.accent} />}
                    {srv.id === 'spatial-uiux' && <Palette size={26} color={srv.accent} />}
                    {srv.id === 'cloud-resilience' && <ShieldCheck size={26} color={srv.accent} />}
                  </div>

                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      color: srv.accent,
                      background: `${srv.accent}15`,
                      padding: '4px 10px',
                      borderRadius: '999px',
                      fontWeight: 700
                    }}
                  >
                    ENTERPRISE GRADE
                  </span>
                </div>

                <h3 style={{ fontSize: '1.45rem', marginBottom: '8px', color: 'var(--text-main)' }}>
                  {srv.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: srv.accent, fontFamily: 'var(--font-subheading)', fontWeight: 600, marginBottom: '14px' }}>
                  {srv.tagline}
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '22px' }}>
                  {srv.description}
                </p>

                {/* Features List */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                    What We Engineer & Advise:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.83rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={15} color={srv.accent} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables Box */}
                <div
                  style={{
                    padding: '14px 16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-glass)',
                    marginBottom: '24px'
                  }}
                >
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                    Key Deliverables:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {srv.deliverables.map((del, dIdx) => (
                      <span
                        key={dIdx}
                        style={{
                          fontSize: '0.72rem',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {del}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Strip */}
              <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.76rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  {srv.metrics}
                </span>

                <button
                  onClick={() => {
                    setView('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary"
                  style={{ padding: '8px 16px', fontSize: '0.82rem' }}
                >
                  Consult Now
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* ENGAGEMENT MODELS & CONSULTING BLUEPRINT */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-pill badge-violet" style={{ marginBottom: '14px' }}>
            HOW WE ENGAGE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            Structured, Predictable <span className="gradient-text">Delivery Pods</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '720px', margin: '0 auto', fontSize: '1.05rem' }}>
            Whether you need a rapid 2-week architectural diagnostic or an end-to-end engineering pod to build and launch your digital product.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
          {ENGAGEMENT_MODELS.map((model, idx) => (
            <div
              key={model.id}
              className="glass-panel"
              style={{
                padding: '36px',
                borderRadius: '24px',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', padding: '3px 8px', borderRadius: '999px', background: 'rgba(0, 242, 254, 0.1)', color: 'var(--cyan-core)', fontWeight: 700 }}>
                    {model.badge}
                  </span>
                  <span style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>
                    {model.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', marginBottom: '12px' }}>
                  {model.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '22px' }}>
                  {model.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                  {model.deliverables.map((item, iIdx) => (
                    <div key={iIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={15} color="#10b981" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '20px' }}>
                <button
                  onClick={() => {
                    setView('scope');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-secondary"
                  style={{ width: '100%', padding: '12px', fontSize: '0.88rem', justifyContent: 'center' }}
                >
                  <Sliders size={14} color="var(--cyan-core)" />
                  <span>Configure {model.title.split(' ')[0]} Scope</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FINAL CONSULTING CTA BANNER */}
      <section className="content-section">
        <div
          className="glass-panel"
          style={{
            padding: '44px',
            borderRadius: '24px',
            border: '2px solid var(--border-glow)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(8, 11, 35, 0.95) 0%, rgba(18, 24, 62, 0.9) 100%)'
          }}
        >
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
            Have a Specific Architecture Challenge?
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 30px auto', fontSize: '1.05rem' }}>
            Book a direct scoping session with Bala and Srikanth. We'll evaluate your system design, performance bottlenecks, or AI roadmap.
          </p>

          <button
            onClick={() => {
              setView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary"
            style={{ padding: '16px 36px', fontSize: '1rem' }}
          >
            <Calendar size={18} />
            <span>Schedule Architecture Scoping Session</span>
          </button>
        </div>
      </section>

    </div>
  );
}
