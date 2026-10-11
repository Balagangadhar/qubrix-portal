import React from 'react';
import { Terminal, Shield, ArrowUpRight, Sparkles, Heart, Globe, Cpu, Laptop, Smartphone, FlaskConical } from 'lucide-react';

export default function Footer({ setView, onOpenTerminal, theme }) {
  const handleNav = (viewId) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-glass)',
        background: theme === 'dark' ? 'rgba(3, 0, 18, 0.92)' : 'rgba(255, 255, 255, 0.92)',
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
          {/* Column 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
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
                QUBRIX
              </span>
            </div>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
              Build Beyond Boundaries. Premier digital design & development studio specializing in high-performance
              Web & Mobile products, autonomous AI, and practitioner education.
            </p>

            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="badge-pill badge-cyan" style={{ fontSize: '0.72rem' }}>
                Web & Mobile Studio
              </span>
              <span className="badge-pill badge-violet" style={{ fontSize: '0.72rem' }}>
                3 In-Browser Labs
              </span>
            </div>
          </div>

          {/* Column 2: Web & Mobile Studio */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Laptop size={16} color="var(--cyan-core)" />
              Web & Mobile Studio
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  Next.js 15 Full-Stack Web Apps
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  iOS & Android Mobile Engineering
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  Spatial UI/UX & Design Systems
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  Autonomous Agentic AI Swarms
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  Case Studies & Flagship Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Interactive Labs & Academy */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <FlaskConical size={16} color="var(--purple-accent)" />
              Labs & Academy
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              <li>
                <button onClick={() => handleNav('labs')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  1. Web & UI/UX Physics Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('labs')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  2. Agentic AI Swarm Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('labs')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  3. Quantum Computing Lab
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  Academy Faculty: Bala & Srikanth
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>
                  Professional Course Catalogue
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Launch & Terminal */}
          <div>
            <h4 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '16px' }}>
              Developer Tools
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px' }}>
              Inspect telemetry, toggle themes, and test interactive components via the built-in terminal.
            </p>

            <button
              onClick={onOpenTerminal}
              className="btn-secondary"
              style={{
                width: '100%',
                padding: '10px 16px',
                fontSize: '0.82rem',
                justifyContent: 'center',
                fontFamily: 'var(--font-mono)'
              }}
            >
              <Terminal size={14} color="var(--cyan-core)" />
              Launch Terminal (Ctrl+K)
            </button>

            <div
              style={{
                marginTop: '16px',
                padding: '10px 14px',
                borderRadius: '8px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-glass)',
                fontSize: '0.74rem',
                color: 'var(--text-dim)',
                lineHeight: 1.5
              }}
            >
              <span style={{ color: '#eab308', fontWeight: 600 }}>Brand Notice:</span> Domain & trademark clearance for "Qubrix" actively monitored.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-glass)',
            paddingTop: '24px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.82rem',
            color: 'var(--text-dim)'
          }}
        >
          <div>
            © 2026 Qubrix Technologies Inc. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('about')}>Vision</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('services')}>Studio</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('labs')}>Labs</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('courses')}>Academy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleNav('contact')}>Enquiry</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>Vercel Edge Optimized</span>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
