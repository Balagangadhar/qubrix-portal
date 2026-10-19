import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Globe, 
  Smartphone, 
  Cpu, 
  Sun, 
  Moon,
  Calendar,
  Sliders
} from 'lucide-react';

export default function Navbar({ currentView, setView, onOpenTerminal, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'capabilities', label: 'Capabilities', badge: 'Catalogue' },
    { id: 'pricing', label: 'Pricing Calculator', badge: 'Live TCO' },
    { id: 'services', label: 'Consulting Services' },
    { id: 'scope', label: 'Scope Estimator', badge: '3D Tool' },
    { id: 'about', label: 'Leadership' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setView(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: scrolled 
          ? (theme === 'dark' ? 'rgba(3, 0, 20, 0.92)' : 'rgba(255, 255, 255, 0.92)')
          : (theme === 'dark' ? 'rgba(3, 0, 20, 0.45)' : 'rgba(255, 255, 255, 0.45)'),
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <div
        className="content-section"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '76px'
        }}
      >
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.35)',
              position: 'relative'
            }}
          >
            <div
              style={{
                width: '18px',
                height: '18px',
                border: '2px solid #ffffff',
                borderRadius: '4px',
                transform: 'rotate(45deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#00f2fe',
                  borderRadius: '50%'
                }}
              />
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  color: 'var(--text-main)'
                }}
              >
                QUBRIX
              </span>
              <span
                style={{
                  fontSize: '0.65rem',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  color: 'var(--cyan-core)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700
                }}
              >
                CONSULTING
              </span>
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-subheading)',
                fontWeight: 600
              }}
            >
              Web • Mobile • AI Enablement
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px'
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: isActive ? 'rgba(0, 242, 254, 0.1)' : 'transparent',
                  border: isActive ? '1px solid var(--border-glow)' : '1px solid transparent',
                  color: isActive ? 'var(--cyan-core)' : 'var(--text-muted)',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'var(--font-heading)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
              >
                {item.label}
                {item.badge && (
                  <span
                    style={{
                      fontSize: '0.65rem',
                      padding: '1px 6px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #00f2fe, #a855f7)',
                      color: '#030014',
                      fontWeight: 800
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Light / Dark Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-main)',
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.25s ease'
            }}
          >
            {theme === 'dark' ? (
              <Sun size={17} color="#facc15" />
            ) : (
              <Moon size={17} color="#7c3aed" />
            )}
          </button>

          {/* Terminal Button */}
          <button
            onClick={onOpenTerminal}
            title="Launch Command Terminal (Ctrl+K)"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-muted)',
              padding: '8px 12px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Terminal size={15} color="var(--cyan-core)" />
            <span className="terminal-label" style={{ fontFamily: 'var(--font-mono)' }}>
              Ctrl+K
            </span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary"
            style={{
              padding: '9px 18px',
              fontSize: '0.88rem'
            }}
          >
            <span>Book Consultation</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-main)',
              padding: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center'
            }}
            className="mobile-toggle"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-glass)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                  border: 'none',
                  color: isActive ? 'var(--cyan-core)' : 'var(--text-main)',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  fontFamily: 'var(--font-heading)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    style={{
                      fontSize: '0.7rem',
                      padding: '2px 8px',
                      borderRadius: '999px',
                      background: 'rgba(168, 85, 247, 0.3)',
                      color: 'var(--purple-accent)'
                    }}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (max-width: 600px) {
          .terminal-label {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
