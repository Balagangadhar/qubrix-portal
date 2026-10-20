import React from 'react';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Users, 
  ShieldCheck, 
  Globe, 
  Cpu, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Calendar,
  Award,
  Zap
} from 'lucide-react';
import { LEADERSHIP } from '../data/leadershipData';

export default function AboutView({ setView }) {
  return (
    <div style={{ paddingTop: '36px', paddingBottom: '90px' }}>
      
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
          <Sparkles size={14} />
          OUR CONSULTING MANIFESTO
        </div>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 4rem)', marginBottom: '18px', letterSpacing: '-0.02em' }}>
          Elite Engineering for <span className="gradient-text">High-Stakes Products</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto', fontSize: '1.12rem', lineHeight: 1.6 }}>
          We founded Qubrix to dismantle the bloated, impersonal agency model. 
          When enterprises and ambitious founders build digital platforms, they deserve direct partnership with seasoned Principal Architects.
        </p>
      </section>

      {/* The Anti-Agency Thesis */}
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
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="badge-pill badge-violet" style={{ marginBottom: '16px' }}>
                THE QUBRIX DIFFERENCE
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '18px' }}>
                Why Traditional IT Agencies and Consultancies Fail Clients
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '16px' }}>
                Most large consulting shops pitch with their top partners, then quietly hand off your multi-million dollar codebase to fresh college grads and offshore junior benches. The result is architectural fragility, technical debt, and blown timelines.
              </p>
              <p style={{ color: 'var(--text-main)', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '24px' }}>
                <strong>Qubrix operates on a Principal-Led model:</strong> Every system design, cloud architecture, and multi-agent AI pipeline is directed and reviewed by 
                <strong> Bala (14+ yrs at JPMorganChase)</strong> and 
                <strong> Srikanth (14+ yrs at Evoke Technologies)</strong>.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Zero junior handoffs: You collaborate directly with veteran Principal Architects',
                  'Enterprise-grade security and scalability baked in from Line 1 of code',
                  'Modern battle-tested stack: Next.js 15, React 19, LangGraph, Native Mobile & Go microservices',
                  'Full client IP and code ownership with zero vendor lock-in'
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
                    <CheckCircle2 size={16} color="var(--cyan-core)" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Consulting Principles Box */}
            <div
              style={{
                padding: '36px',
                borderRadius: '20px',
                background: 'rgba(3, 0, 20, 0.75)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                boxShadow: '0 0 35px rgba(0, 242, 254, 0.12)'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan-core)', marginBottom: '18px' }}>
                // OUR CORE CONSULTING TENETS
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#00f2fe', marginBottom: '4px' }}>
                    1. Architecture Before Code
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                    We stress-test system schemas, API contracts, and failure modes before writing a single line of production code.
                  </p>
                </div>

                <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#a855f7', marginBottom: '4px' }}>
                    2. Production-Hardened AI
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                    We don't build toy wrapper bots. We engineer autonomous multi-agent cognitive systems with deterministic evaluation guardrails.
                  </p>
                </div>

                <div style={{ padding: '16px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#10b981', marginBottom: '4px' }}>
                    3. Radical Velocity & Transparency
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>
                    Continuous 2-week sprint deliverables with live working demos, automated CI/CD deployments, and measurable business KPI tracking.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
            FOUNDING TECHNOLOGY PARTNERS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', marginBottom: '16px' }}>
            Meet Your <span className="gradient-text">Principal Consultants</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem' }}>
            Over 28 collective years of enterprise cloud engineering, high-throughput financial architectures, and mobile transformations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))', gap: '32px' }}>
          {LEADERSHIP.map(leader => (
            <div
              key={leader.id}
              className="glass-panel"
              style={{
                padding: '38px',
                borderRadius: '24px',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '22px' }}>
                  <img
                    src={leader.avatar}
                    alt={leader.name}
                    style={{
                      width: '78px',
                      height: '78px',
                      borderRadius: '18px',
                      objectFit: 'cover',
                      border: '2px solid var(--cyan-core)',
                      boxShadow: '0 0 20px rgba(0, 242, 254, 0.25)'
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.45rem', color: 'var(--text-main)', margin: '0 0 4px 0' }}>
                      {leader.name}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'var(--cyan-core)', fontWeight: 600 }}>
                      {leader.role}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {leader.affiliation} • {leader.stats.experience}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '22px' }}>
                  {leader.bio}
                </p>

                {/* Specialties */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: 'var(--text-dim)', marginBottom: '10px', fontFamily: 'var(--font-mono)' }}>
                    Consulting Specialties:
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {leader.specialties.map((spec, sIdx) => (
                      <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.83rem', color: 'var(--text-main)' }}>
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
                  <span>Request Consultation with {leader.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="content-section">
        <div
          className="glass-panel"
          style={{
            padding: '48px',
            borderRadius: '24px',
            border: '2px solid var(--border-glow)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(8, 11, 35, 0.95) 0%, rgba(18, 24, 62, 0.9) 100%)'
          }}
        >
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px' }}>
            Let's Engineer Your Digital Competitive Advantage
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 30px auto', fontSize: '1.05rem' }}>
            Connect directly with Bala and Srikanth for a complimentary 45-minute architectural review of your upcoming web, mobile, or AI product.
          </p>

          <button
            onClick={() => {
              setView('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="btn-primary"
            style={{ padding: '16px 36px', fontSize: '1.05rem' }}
          >
            <span>Book Principal Architecture Review</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </section>

    </div>
  );
}
