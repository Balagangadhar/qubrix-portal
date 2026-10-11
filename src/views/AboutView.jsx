import React from 'react';
import { 
  Sparkles, 
  Target, 
  Compass, 
  Users, 
  ShieldCheck, 
  Atom, 
  Cpu, 
  Layers, 
  ArrowRight,
  CheckCircle2,
  Lock,
  Globe
} from 'lucide-react';
import { INSTRUCTORS } from '../data/instructorsData';

export default function AboutView({ setView }) {
  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '70px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '16px' }}>
          <Sparkles size={14} />
          OUR MANIFESTO & ORIGIN
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '20px' }}>
          The Philosophy of <span className="gradient-text">Qubrix</span>
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '760px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.6 }}>
          We exist to obliterate the artificial divide between elite digital studio craftsmanship
          and frontier technology education. When you build beyond boundaries, the future arrives faster.
        </p>
      </section>

      {/* The Convergence Thesis */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '48px',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            background: 'linear-gradient(135deg, rgba(8, 11, 35, 0.95) 0%, rgba(14, 18, 52, 0.85) 100%)'
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="badge-pill badge-violet" style={{ marginBottom: '16px' }}>
                The Dual-Engine Flywheel
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '18px' }}>
                Why Traditional Tech Studios and Coding Bootcamps Are Broken
              </h2>
              <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '16px' }}>
                Most digital agencies build client software in private silos, hoarding architectural lessons.
                Meanwhile, educational bootcamps teach outdated, simplified toy tutorials divorced from enterprise reality.
              </p>
              <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '24px' }}>
                <strong>Qubrix operates a self-reinforcing flywheel:</strong> Our studio engineers complex distributed
                platforms, multi-agent AI networks, and post-quantum architectures for ambitious clients. Those exact
                production patterns flow immediately into the Qubrix Academy curriculum, taught directly by senior practitioners.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  'Zero toy projects: Students inspect real enterprise architectural schemas',
                  'Client builds benefit from a talent pipeline of certified frontier engineers',
                  'Practitioners like Bala (JPMC) & Srikanth (Evoke) lead from active industry trenches'
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: '#f8fafc' }}>
                    <CheckCircle2 size={16} color="#00f2fe" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                padding: '32px',
                borderRadius: '20px',
                background: 'rgba(3, 0, 20, 0.75)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                boxShadow: '0 0 35px rgba(0, 242, 254, 0.15)'
              }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#00f2fe', marginBottom: '16px' }}>
                // THE QUBRIX EQUATION
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ color: '#00f2fe', fontWeight: 700, fontSize: '0.92rem' }}>Qubrix Studio</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                    High-impact digital systems, multi-agent AI swarms & quantum R&D for industry leaders.
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#c084fc', fontSize: '1.2rem', fontWeight: 800 }}>
                  ✚ &nbsp;FEEDBACK LOOP&nbsp; ⟳
                </div>

                <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ color: '#c084fc', fontWeight: 700, fontSize: '0.92rem' }}>Qubrix Academy</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.82rem' }}>
                    Elite practitioner cohorts trained on real production codebases & live quantum circuits.
                  </div>
                </div>

                <div style={{ textAlign: 'center', color: '#10b981', fontSize: '1.2rem', fontWeight: 800 }}>
                  ═
                </div>

                <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', textAlign: 'center' }}>
                  <div style={{ color: '#34d399', fontWeight: 800, fontSize: '0.95rem' }}>Next-Decade Technological Supremacy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Faculty Spotlight */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>
            Founding Leadership & Authors
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto', fontSize: '1rem' }}>
            A practitioner-first leadership team with roots in enterprise cloud, quantum research, and high-frequency systems.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {INSTRUCTORS.map((leader) => (
            <div
              key={leader.id}
              className="glass-panel"
              style={{
                padding: '36px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: leader.id === 'bala' ? 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)' : 'linear-gradient(135deg, #7928ca 0%, #ec4899 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    color: '#fff'
                  }}
                >
                  {leader.initials}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.4rem' }}>{leader.name}</h3>
                  <div style={{ color: leader.id === 'bala' ? '#00f2fe' : '#c084fc', fontWeight: 600, fontSize: '0.88rem' }}>
                    {leader.affiliation}
                  </div>
                  <div style={{ color: '#64748b', fontSize: '0.78rem' }}>
                    {leader.role}
                  </div>
                </div>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {leader.bio}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {leader.domains.map((d, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.74rem',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      color: '#cbd5e1'
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Roadmap */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
            The Strategic Horizon
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto' }}>
            Our structured progression towards autonomous enterprise workflows and post-quantum infrastructure.
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
              phase: 'Phase 1: 2026',
              title: 'Launch & Credibility',
              desc: 'Public deployment of Qubrix Studio & Academy. Initial cohorts in Full Stack & Agentic AI. Brand trademark validation.'
            },
            {
              phase: 'Phase 2: 2027',
              title: 'Autonomous Swarm Integration',
              desc: 'Commercial release of Qubrix Agent Fleet SDK for enterprise logistics and finance. Launch of IBM Quantum hardware cloud bridge.'
            },
            {
              phase: 'Phase 3: 2028',
              title: 'Quantum Advantage & PQC',
              desc: 'Production deployment of hybrid quantum-classical algorithms and lattice-based security for global banking consortia.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{ padding: '32px', borderRadius: '18px' }}
            >
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: '#00f2fe', fontWeight: 700, marginBottom: '10px' }}>
                {item.phase}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{item.title}</h3>
              <p style={{ color: '#94a3b8', fontSize: '0.88rem', lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Brand & Trademark Clearance Notice */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div
          style={{
            padding: '24px 32px',
            borderRadius: '16px',
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <ShieldCheck size={28} color="#eab308" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '4px' }}>
              Brand Notice & Trademark Compliance
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0, lineHeight: 1.5 }}>
              In accordance with pre-launch requirements, domain availability and trademark clearance checks
              for <strong>"Qubrix"</strong> and associated classifications (Class 9 Software, Class 41 Education, Class 42 Cloud Engineering)
              are actively monitored before final legal registration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
