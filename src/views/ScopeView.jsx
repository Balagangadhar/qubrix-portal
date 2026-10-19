import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Users, 
  Zap, 
  FileText,
  Calendar,
  Send,
  Sliders,
  Database,
  Server
} from 'lucide-react';
import { CONSULTING_DOMAINS, ENGAGEMENT_MODELS, FEATURE_MODULES } from '../data/consultingScopeData';
import { LEADERSHIP } from '../data/leadershipData';

export default function ScopeView({ setView, onSelectScopeForBooking }) {
  const [selectedDomain, setSelectedDomain] = useState('web');
  const [selectedModel, setSelectedModel] = useState('mvp');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'websockets', 'agents']);
  const [companyName, setCompanyName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [projectNotes, setProjectNotes] = useState('');
  const [generatedTicket, setGeneratedTicket] = useState(null);

  const currentDomain = CONSULTING_DOMAINS.find(d => d.id === selectedDomain) || CONSULTING_DOMAINS[0];
  const currentModel = ENGAGEMENT_MODELS.find(m => m.id === selectedModel) || ENGAGEMENT_MODELS[1];

  const toggleFeature = (featId) => {
    setSelectedFeatures(prev => 
      prev.includes(featId) 
        ? prev.filter(f => f !== featId) 
        : [...prev, featId]
    );
  };

  const handleGenerateScope = (e) => {
    e.preventDefault();
    const ticketId = `QBX-SCOPE-${Math.floor(100000 + Math.random() * 900000)}`;
    const scopeData = {
      ticketId,
      domain: currentDomain.title,
      engagement: currentModel.title,
      duration: currentModel.duration,
      features: selectedFeatures,
      company: companyName || 'Confidential Client',
      email: contactEmail,
      notes: projectNotes,
      consultantLead: currentDomain.leadConsultant
    };
    setGeneratedTicket(scopeData);
    if (onSelectScopeForBooking) {
      onSelectScopeForBooking(scopeData);
    }
  };

  return (
    <div style={{ paddingTop: '36px', paddingBottom: '90px' }}>
      {/* Scope Builder Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
          <Sliders size={14} />
          INTERACTIVE ARCHITECTURE SCOPE ENGINE
        </div>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', marginBottom: '18px', letterSpacing: '-0.02em' }}>
          Design Your <span className="gradient-text">Consulting Requirement</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '780px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Configure your Web, Mobile, or Enterprise AI requirements in real-time. 
          Receive an instant architecture stack blueprint, estimated timeline, and dedicated leadership team pod.
        </p>
      </section>

      <section className="content-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'start' }}>
          
          {/* LEFT COLUMN: The Interactive Configurator */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            
            {/* Step 1: Select Consulting Domain */}
            <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ 
                  width: '26px', 
                  height: '26px', 
                  borderRadius: '50%', 
                  background: 'var(--cyan-core)', 
                  color: '#030014', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 800, 
                  fontSize: '0.85rem' 
                }}>1</span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0 }}>
                  Select Consulting Focus
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {CONSULTING_DOMAINS.map(domain => {
                  const isSelected = selectedDomain === domain.id;
                  return (
                    <button
                      key={domain.id}
                      type="button"
                      onClick={() => {
                        setSelectedDomain(domain.id);
                        // pre-check recommended features
                        const defaultFeats = FEATURE_MODULES
                          .filter(f => f.defaultIn.includes(domain.id))
                          .map(f => f.id);
                        setSelectedFeatures(defaultFeats);
                      }}
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        border: isSelected ? `2px solid ${domain.accent}` : '1px solid var(--border-glass)',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                        {domain.id === 'web' && <Globe size={20} color={domain.accent} />}
                        {domain.id === 'mobile' && <Smartphone size={20} color={domain.accent} />}
                        {domain.id === 'ai' && <Cpu size={20} color={domain.accent} />}
                        {domain.id === 'hybrid' && <Layers size={20} color={domain.accent} />}
                        <span style={{ fontWeight: 700, fontSize: '0.95rem', color: isSelected ? domain.accent : 'var(--text-main)' }}>
                          {domain.title.replace(' Consulting', '').replace(' Engineering', '')}
                        </span>
                      </div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>
                        {domain.tagline}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Engagement Model & Timeline */}
            <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ 
                  width: '26px', 
                  height: '26px', 
                  borderRadius: '50%', 
                  background: 'var(--violet-core)', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 800, 
                  fontSize: '0.85rem' 
                }}>2</span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0 }}>
                  Engagement Model & Speed
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {ENGAGEMENT_MODELS.map(model => {
                  const isSelected = selectedModel === model.id;
                  return (
                    <div
                      key={model.id}
                      onClick={() => setSelectedModel(model.id)}
                      style={{
                        padding: '16px',
                        borderRadius: '14px',
                        background: isSelected ? 'rgba(168, 85, 247, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                        border: isSelected ? '2px solid var(--violet-glow)' : '1px solid var(--border-glass)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                          <span style={{ fontWeight: 700, fontSize: '0.96rem', color: isSelected ? 'var(--purple-accent)' : 'var(--text-main)' }}>
                            {model.title}
                          </span>
                          <span style={{ 
                            fontSize: '0.68rem', 
                            padding: '2px 8px', 
                            borderRadius: '999px', 
                            background: 'rgba(255, 255, 255, 0.08)',
                            color: 'var(--cyan-core)',
                            fontFamily: 'var(--font-mono)'
                          }}>
                            {model.badge}
                          </span>
                        </div>
                        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
                          {model.description}
                        </p>
                      </div>

                      <div style={{ textAlign: 'right', minWidth: '95px' }}>
                        <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>
                          {model.duration}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>
                          Timeline
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Architecture Capabilities & Feature Modules */}
            <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ 
                  width: '26px', 
                  height: '26px', 
                  borderRadius: '50%', 
                  background: '#10b981', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 800, 
                  fontSize: '0.85rem' 
                }}>3</span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0 }}>
                  Select Architecture Features
                </h3>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                {FEATURE_MODULES.map(feat => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '10px',
                        background: isChecked ? 'rgba(0, 242, 254, 0.1)' : 'rgba(255, 255, 255, 0.02)',
                        border: isChecked ? '1px solid var(--cyan-core)' : '1px solid var(--border-glass)',
                        color: isChecked ? 'var(--text-main)' : 'var(--text-muted)',
                        fontSize: '0.82rem',
                        fontWeight: isChecked ? 700 : 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <CheckCircle2 size={16} color={isChecked ? 'var(--cyan-core)' : '#64748b'} />
                      <span>{feat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Client Context Details Form */}
            <div className="glass-panel" style={{ padding: '28px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <span style={{ 
                  width: '26px', 
                  height: '26px', 
                  borderRadius: '50%', 
                  background: '#3b82f6', 
                  color: '#fff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontWeight: 800, 
                  fontSize: '0.85rem' 
                }}>4</span>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', margin: 0 }}>
                  Client Context & Notes
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Corp / Stealth Startup"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>
                      Work Email
                    </label>
                    <input
                      type="email"
                      placeholder="architect@company.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-main)',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '4px', display: 'block' }}>
                    Specific Technical Goals or Current Bottlenecks
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., We need to migrate from a legacy Rails app to Next.js micro-frontends and integrate autonomous multi-agent customer support with LangGraph..."
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border-glass)',
                      color: 'var(--text-main)',
                      fontSize: '0.88rem',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="button"
                  onClick={handleGenerateScope}
                  className="btn-primary"
                  style={{
                    padding: '14px 24px',
                    fontSize: '0.95rem',
                    justifyContent: 'center',
                    marginTop: '8px'
                  }}
                >
                  <Sparkles size={16} />
                  Compile Architecture Blueprint Ticket
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Live Compiled Architecture Blueprint Card */}
          <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div 
              className="glass-panel" 
              style={{ 
                padding: '32px', 
                borderRadius: '24px', 
                border: '1px solid var(--border-glow)',
                boxShadow: '0 16px 40px rgba(0, 242, 254, 0.1)',
                background: 'linear-gradient(145deg, rgba(11, 14, 38, 0.95) 0%, rgba(18, 24, 62, 0.85) 100%)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                  <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-core)', fontWeight: 700 }}>
                    BLUEPRINT SPECIFICATION
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  ID: {generatedTicket ? generatedTicket.ticketId : 'PREVIEW-ACTIVE'}
                </span>
              </div>

              <h2 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '8px' }}>
                {currentDomain.title}
              </h2>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                {currentDomain.description}
              </p>

              {/* Blueprint Summary Metrics */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(3, 1fr)', 
                gap: '12px', 
                padding: '16px', 
                borderRadius: '14px', 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid var(--border-glass)',
                marginBottom: '24px'
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Timeline</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>
                    {currentModel.duration}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Sprint Model</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-main)' }}>
                    {currentModel.title.split(' ')[0]}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Modules</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--purple-accent)', fontFamily: 'var(--font-mono)' }}>
                    {selectedFeatures.length} Active
                  </div>
                </div>
              </div>

              {/* Recommended Technology Stack */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Recommended Production Stack
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {currentDomain.recommendedStack.map((tech, idx) => (
                    <span 
                      key={idx}
                      style={{
                        fontSize: '0.74rem',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        background: 'rgba(0, 242, 254, 0.08)',
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        color: 'var(--cyan-core)',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Active Selected Features */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Configured System Capabilities
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {selectedFeatures.map(fId => {
                    const fObj = FEATURE_MODULES.find(m => m.id === fId);
                    if (!fObj) return null;
                    return (
                      <div key={fId} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={14} color="#10b981" />
                        <span>{fObj.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Principal Consulting Leads */}
              <div style={{ 
                padding: '16px', 
                borderRadius: '14px', 
                background: 'rgba(0, 0, 0, 0.3)', 
                border: '1px solid var(--border-glass)',
                marginBottom: '24px'
              }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                  Assigned Principal Advisory Lead
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '10px', 
                    background: 'linear-gradient(135deg, #00f2fe, #7928ca)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontWeight: 800,
                    color: '#fff',
                    fontSize: '0.85rem'
                  }}>
                    {selectedDomain === 'mobile' ? 'SK' : 'BG'}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {currentDomain.leadConsultant}
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                      14+ Years Enterprise Engineering & Advisory
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Action */}
              <button
                type="button"
                onClick={() => {
                  if (onSelectScopeForBooking) {
                    onSelectScopeForBooking({
                      domain: currentDomain.title,
                      engagement: currentModel.title,
                      duration: currentModel.duration,
                      features: selectedFeatures,
                      company: companyName,
                      email: contactEmail,
                      notes: projectNotes
                    });
                  }
                  setView('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-primary"
                style={{
                  width: '100%',
                  padding: '14px',
                  fontSize: '0.92rem',
                  justifyContent: 'center'
                }}
              >
                <span>Schedule Consultation with This Scope</span>
                <ArrowRight size={15} />
              </button>

              <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
                🔒 100% Confidential • Free Architecture Review • NDA upon request
              </div>

            </div>

            {/* Generated Confirmation Banner */}
            {generatedTicket && (
              <div 
                style={{ 
                  padding: '16px 20px', 
                  borderRadius: '16px', 
                  background: 'rgba(16, 185, 129, 0.15)', 
                  border: '1px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <CheckCircle2 size={24} color="#10b981" />
                <div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#10b981' }}>
                    Scope Blueprint Compiled! ({generatedTicket.ticketId})
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    Ready for review with Bala & Srikanth. Click above to finalize your consultation time.
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>
    </div>
  );
}
