import React, { useState } from 'react';
import { Shield, ArrowUpRight, Sparkles, Heart, Globe, Cpu, Smartphone, Layers, Lock, Calendar, Mail, Copy, Check } from 'lucide-react';

export default function Footer({ setView, theme }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contactus@qubrixconsulting.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '36px',
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
              Led by Gangadhar (14+ yrs, Reputed Financial Organization) & Srikanth (14+ yrs, Reputed IT Consulting Company). 
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
              Engagement & Estimation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              <li>
                <button onClick={() => handleNav('pricing')} style={{ background: 'none', border: 'none', color: '#10b981', cursor: 'pointer', padding: 0, fontWeight: 700 }}>
                  Interactive Pricing & Cost Calculator →
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('capabilities')} style={{ background: 'none', border: 'none', color: 'var(--cyan-core)', cursor: 'pointer', padding: 0, fontWeight: 700 }}>
                  Capabilities Sandbox Catalogue →
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
              <Mail size={16} color="var(--cyan-core)" />
              Direct Executive Contact
            </h4>
            <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '12px' }}>
              Connect directly with Gangadhar & Srikanth for systems architecture, mobile, and AI advisory.
            </p>

            <div
              style={{
                padding: '10px 12px',
                borderRadius: '10px',
                background: 'rgba(0, 242, 254, 0.05)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <a
                href="mailto:contactus@qubrixconsulting.com?subject=Consulting%20Inquiry%20-%20Qubrix"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--cyan-core)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  textDecoration: 'none'
                }}
              >
                contactus@qubrixconsulting.com
              </a>
              <button
                onClick={handleCopyEmail}
                style={{
                  background: 'none',
                  border: 'none',
                  color: copied ? '#10b981' : 'var(--text-dim)',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="Copy email address"
              >
                {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              </button>
            </div>

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
              <span>Smart Consultation & Dispatcher</span>
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

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <button
              onClick={() => handleNav('pricing')}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontSize: '0.8rem' }}
            >
              Pricing Calculator
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
