import React from 'react';
import { Terminal, Shield, ArrowUpRight, Sparkles, Heart, Globe, Cpu, Smartphone, Layers, Lock, Calendar } from 'lucide-react';

export default function Footer({ setView, onOpenTerminal, theme }) {
  const handleNav = (viewId) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        background: theme === 'dark' ? 'rgba(3, 0, 18, 0.94)' : 'rgba(255, 255, 255, 0.94)',
        backdropFilter: 'blur(16px)',
        paddingTop: '64px',
        paddingBottom: '36px',
        marginTop: '80px',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="content-section">
        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Column 1: Brand & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(0, 242, 254, 0.3)'
                }}
              >
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    border: '2px solid #fff',
                    borderRadius: '3px',
                    transform: 'rotate(45deg)'
                  }}
                />
              </div>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--text-main)' }}>
                QUBRIX <span style={{ fontSize: '0.8rem', color: 'var(--cyan-core)', fontWeight: 600 }}>CONSULTING</span>
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Elite digital product engineering & strategic architecture partnership. 
              Led by Bala (14+ yrs, JPMorganChase) & Srikanth (14+ yrs, Evoke Technologies). 
              We architect and engineer mission-critical Web, Mobile, and Enterprise AI systems.
            </p>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="badge-pill badge-cyan" style={{ fontSize: '0.72rem' }}>
                Web • Mobile • AI
              </span>
              <span className="badge-pill badge-violet" style={{ fontSize: '0.72rem' }}>
                Principal-Led Advisory
              </span>
            </div>
          </div>

          {/* Column 2: Consulting Verticals */}
          <div>
            <h4 style={{ fontSize: '0.98rem', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={16} color="var(--cyan-core)" />
              Consulting Practices
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                  Next.js 15 & React 19 Web Architecture
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                  Native iOS & Android Mobile Engineering
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                  Enterprise AI Enablement & Multi-Agent Swarms
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                  Spatial UI/UX & Design Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0, textAlign: 'left' }}>
                  Multi-Region Cloud Resilience & FinOps
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Engagement & Tools */}
          <div>
            <h4 style={{ fontSize: '0.98rem', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Layers size={16} color="var(--purple-accent)" />
              Engagement & Scoping
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              <li>
                <button onClick={() => handleNav('pricing')} style={{ background: 'none', border: 'none', color: '#10b981', cursor: 'pointer', padding: 0, fontWeight: 700 }}>
                  Interactive Pricing & Cost Calculator →
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('scope')} style={{ background: 'none', border: 'none', color: 'var(--cyan-core)', cursor: 'pointer', padding: 0, fontWeight: 700 }}>
                  Interactive 3D Scope Estimator →
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  2-Week Architecture Blueprint Sprint
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  6-8 Week Production MVP Pod
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  Enterprise Transformation Retainer
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  Request Confidential RFP Review
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Leadership & Direct Contact */}
          <div>
            <h4 style={{ fontSize: '0.98rem', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Calendar size={16} color="#10b981" />
              Direct Consultation
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
              Schedule a direct 45-minute architectural review with Bala (JPMC) and Srikanth (Evoke).
            </p>
            <button
              onClick={() => handleNav('contact')}
              className="btn-primary"
              style={{
                width: '100%',
                padding: '10px 16px',
                fontSize: '0.84rem',
                justifyContent: 'center',
                marginBottom: '14px'
              }}
            >
              <span>Schedule Architecture Review</span>
            </button>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--text-dim)' }}>
              <Lock size={12} color="#10b981" />
              <span>100% Confidential • Mutual NDA Supported</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-glass)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '0.8rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © {new Date().getFullYear()} Qubrix Consulting Group. All Rights Reserved. Full Client IP Ownership.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={onOpenTerminal}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem'
              }}
            >
              <Terminal size={14} color="var(--cyan-core)" />
              <span>CLI Terminal (Ctrl+K)</span>
            </button>

            <button
              onClick={() => handleNav('about')}
              style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              Leadership
            </button>

            <button
              onClick={() => handleNav('contact')}
              style={{ background: 'none', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              Consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
