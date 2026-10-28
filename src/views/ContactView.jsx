import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp,
  Globe,
  Smartphone,
  Cpu,
  Layers,
  FileText,
  User,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  QrCode,
  Share2
} from 'lucide-react';
import { LEADERSHIP } from '../data/leadershipData';

export default function ContactView({ selectedScopeForBooking }) {
  const [activeTab, setActiveTab] = useState('book'); // 'book' | 'rfp' | 'email'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  // Email Command Center State
  const [emailTopic, setEmailTopic] = useState('web');
  const [emailSenderName, setEmailSenderName] = useState('');
  const [emailSenderOrg, setEmailSenderOrg] = useState('');
  const [emailSenderNotes, setEmailSenderNotes] = useState('');
  const [showQrCode, setShowQrCode] = useState(false);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    company: '',
    consultingDomain: 'Web Application Consulting',
    preferredConsultant: 'Both Gangadhar & Srikanth (Recommended)',
    preferredDate: '',
    preferredTime: '10:00 AM IST / 12:30 PM EST',
    projectScope: ''
  });

  // RFP Form State
  const [rfpForm, setRfpForm] = useState({
    name: '',
    email: '',
    company: '',
    budgetRange: '$15,000 - $35,000',
    targetTimeline: '6 - 8 Weeks (Fast-Track MVP)',
    technicalStack: 'Next.js 15, React 19, LangGraph AI',
    rfpDetails: '',
    needNDA: true
  });

  // Pre-fill from ScopeView if provided
  useEffect(() => {
    if (selectedScopeForBooking) {
      setBookingForm(prev => ({
        ...prev,
        consultingDomain: selectedScopeForBooking.domain || prev.consultingDomain,
        company: selectedScopeForBooking.company || prev.company,
        email: selectedScopeForBooking.email || prev.email,
        projectScope: selectedScopeForBooking.notes 
          ? `[Pre-configured Scope: ${selectedScopeForBooking.engagement} (${selectedScopeForBooking.duration})] - ${selectedScopeForBooking.notes}`
          : `[Pre-configured Scope: ${selectedScopeForBooking.engagement} (${selectedScopeForBooking.duration})]`
      }));
    }
  }, [selectedScopeForBooking]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contactus@qubrixconsulting.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  // Helper to generate dynamic email draft
  const getDraftContent = () => {
    let subject = '';
    let body = '';
    const name = emailSenderName.trim() || '[Your Name]';
    const org = emailSenderOrg.trim() || '[Your Organization]';
    const notes = emailSenderNotes.trim();

    if (emailTopic === 'web') {
      subject = `[Web & Cloud Architecture] Scoping Inquiry - ${org}`;
      body = `Dear Gangadhar & Srikanth,\n\nI would like to explore an architectural consultation with Qubrix for Enterprise Web & Cloud Systems.\n\n• Name: ${name}\n• Organization: ${org}\n• Focus: High-scale Next.js 15 / React 19 web platforms, distributed microservices, or multi-region cloud.\n• Requirements / Objectives: ${notes || 'We are looking to evaluate our architecture, optimize performance, and scale our engineering infrastructure.'}\n\nPlease let us know your availability for a 45-minute architectural discovery session.\n\nBest regards,\n${name}`;
    } else if (emailTopic === 'mobile') {
      subject = `[Mobile Engineering] Product Architecture Inquiry - ${org}`;
      body = `Dear Srikanth & Gangadhar,\n\nI would like to explore a mobile product engineering engagement with Qubrix.\n\n• Name: ${name}\n• Organization: ${org}\n• Platform: Native iOS (Swift), Android (Kotlin), or React Native / Flutter.\n• Key Milestones: ${notes || 'We are architecting a new commercial mobile application and require principal-led development.'}\n\nPlease let us know your availability for a discovery session.\n\nBest regards,\n${name}`;
    } else if (emailTopic === 'ai') {
      subject = `[Enterprise AI Enablement] Multi-Agent Swarms & LLMs - ${org}`;
      body = `Dear Gangadhar & Srikanth,\n\nWe are looking to implement enterprise AI capabilities and autonomous agentic workflows with Qubrix.\n\n• Name: ${name}\n• Organization: ${org}\n• AI Objective: Multi-agent LangGraph workflows, private on-premise LLMs, or GraphRAG domain search.\n• Context / Challenges: ${notes || 'We want to deploy deterministic AI systems with robust enterprise guardrails.'}\n\nLooking forward to scheduling an AI scoping session.\n\nBest regards,\n${name}`;
    } else if (emailTopic === 'mvp') {
      subject = `[Fast-Track MVP Pod] 6-8 Week Build Inquiry - ${org}`;
      body = `Dear Gangadhar & Srikanth,\n\nWe have a priority digital product to launch and want to reserve Qubrix's 6-8 Week Production MVP Pod.\n\n• Name: ${name}\n• Organization: ${org}\n• Target Timeline: 6 - 8 Weeks (Production Release)\n• Product Brief: ${notes || 'Full-stack web/mobile application with institutional-grade architecture from Day 1.'}\n\nPlease share your current sprint availability.\n\nBest regards,\n${name}`;
    } else {
      subject = `[Strategic Technology Advisory] Consulting Inquiry - ${org}`;
      body = `Dear Gangadhar & Srikanth,\n\nI would like to consult with Qubrix regarding an upcoming strategic technology initiative.\n\n• Name: ${name}\n• Organization: ${org}\n• Details / Goals: ${notes || 'We are seeking executive systems advisory, architectural audits, or fractional leadership.'}\n\nLooking forward to connecting.\n\nBest regards,\n${name}`;
    }

    return { subject, body };
  };

  const draft = getDraftContent();
  const mailtoLink = `mailto:contactus@qubrixconsulting.com?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=contactus@qubrixconsulting.com&su=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
  const outlookLink = `https://outlook.office.com/mail/deeplink/compose?to=contactus@qubrixconsulting.com&subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(draft.body)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(mailtoLink)}`;

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(`To: contactus@qubrixconsulting.com\nSubject: ${draft.subject}\n\n${draft.body}`);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2200);
  };

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        type: 'booking',
        ticketId: `QBX-CONSULT-${Math.floor(100000 + Math.random() * 900000)}`,
        data: bookingForm
      });
    }, 600);
  };

  const handleRfpSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        type: 'rfp',
        ticketId: `QBX-RFP-${Math.floor(100000 + Math.random() * 900000)}`,
        data: rfpForm
      });
    }, 600);
  };

  const faqs = [
    {
      q: 'How does an initial consultation with Qubrix work?',
      a: 'We schedule a focused 45-minute architectural discovery session directly with Gangadhar and/or Srikanth. We discuss your business objectives, current tech stack, performance or scale challenges, and target milestones. Within 24 hours, we deliver a written Architectural Scope Blueprint.'
    },
    {
      q: 'Will I speak directly with Gangadhar and Srikanth or a sales rep?',
      a: 'You speak directly with Gangadhar (Lead Cloud & Systems Architect, 14+ yrs at a reputed financial organization) and Srikanth (Principal Digital Architect, 14+ yrs at a reputed IT consulting company). We do not employ sales reps or account gatekeepers.'
    },
    {
      q: 'Do you execute mutual Non-Disclosure Agreements (NDAs)?',
      a: 'Yes, absolutely. We treat all client architectures, proprietary data, and product ideas with institutional-grade confidentiality. We are happy to execute your standard mutual NDA prior to discovery calls.'
    },
    {
      q: 'What engagement models do you support?',
      a: 'We offer three flexible models: 1) Architecture Blueprint Sprints (2-3 weeks for audits & specs), 2) Rapid MVP / Production Pods (6-8 weeks end-to-end builds), and 3) Enterprise Transformation Retainers (12-16 weeks for high-throughput platforms).'
    },
    {
      q: 'What happens to the code and intellectual property (IP)?',
      a: 'You retain 100% full ownership of all code, schemas, architecture diagrams, and intellectual property. Everything is committed directly into your private GitHub/GitLab repositories with complete CI/CD pipelines from Day 1.'
    }
  ];

  return (
    <div style={{ paddingTop: '36px', paddingBottom: '90px' }}>
      
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
          <Calendar size={14} />
          STRATEGIC CONSULTATION & SCOPE INTAKE
        </div>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 4rem)', marginBottom: '18px', letterSpacing: '-0.02em' }}>
          Consult With Our <span className="gradient-text">Principal Architects</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '760px', margin: '0 auto', fontSize: '1.12rem', lineHeight: 1.6 }}>
          Connect directly with Gangadhar and Srikanth to discuss your Web Application, Mobile Engineering, or Enterprise AI requirements. 
          Receive an actionable technical blueprint within 24 hours.
        </p>

        {/* INNOVATIVE DIRECT EMAIL QUICK-CONNECT CAPSULE */}
        <div 
          className="glass-panel"
          style={{
            maxWidth: '880px',
            margin: '32px auto 0 auto',
            padding: '16px 24px',
            borderRadius: '20px',
            border: '1px solid rgba(0, 242, 254, 0.35)',
            background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(121, 40, 202, 0.08) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 0 25px rgba(0, 242, 254, 0.12)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.4)',
                flexShrink: 0
              }}
            >
              <Mail size={20} color="#ffffff" />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                  Executive Direct Email:
                </span>
                <a 
                  href="mailto:contactus@qubrixconsulting.com" 
                  style={{ 
                    fontSize: '1rem', 
                    fontWeight: 800, 
                    color: 'var(--cyan-core)', 
                    fontFamily: 'var(--font-mono)',
                    textDecoration: 'none'
                  }}
                >
                  contactus@qubrixconsulting.com
                </a>
              </div>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '2px' }}>
                <span style={{ display: 'inline-block', width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                <span>Direct to Gangadhar & Srikanth • Monitored 24/7 • Response Guaranteed &lt; 24h</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopyEmail}
              className="btn-secondary"
              style={{
                padding: '9px 16px',
                fontSize: '0.82rem',
                borderRadius: '10px',
                background: copiedEmail ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                borderColor: copiedEmail ? '#10b981' : 'var(--border-glass)',
                color: copiedEmail ? '#10b981' : 'var(--text-main)',
                transition: 'all 0.2s ease'
              }}
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
            </button>

            <button
              onClick={() => { setActiveTab('email'); setSubmittedData(null); }}
              className="btn-primary"
              style={{
                padding: '9px 18px',
                fontSize: '0.82rem',
                borderRadius: '10px'
              }}
            >
              <Sparkles size={14} />
              <span>Smart Email Dispatcher</span>
            </button>
          </div>
        </div>

        {/* 3-Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '30px', flexWrap: 'wrap' }}>
          <button
            onClick={() => { setActiveTab('book'); setSubmittedData(null); }}
            style={{
              padding: '12px 22px',
              borderRadius: '999px',
              background: activeTab === 'book' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: activeTab === 'book' ? '1px solid var(--cyan-core)' : '1px solid var(--border-glass)',
              color: activeTab === 'book' ? 'var(--cyan-core)' : 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Calendar size={16} />
            <span>Schedule 1-on-1 Consultation</span>
          </button>

          <button
            onClick={() => { setActiveTab('rfp'); setSubmittedData(null); }}
            style={{
              padding: '12px 22px',
              borderRadius: '999px',
              background: activeTab === 'rfp' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: activeTab === 'rfp' ? '1px solid var(--violet-glow)' : '1px solid var(--border-glass)',
              color: activeTab === 'rfp' ? 'var(--purple-accent)' : 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <FileText size={16} />
            <span>Submit Detailed Project RFP</span>
          </button>

          <button
            onClick={() => { setActiveTab('email'); setSubmittedData(null); }}
            style={{
              padding: '12px 22px',
              borderRadius: '999px',
              background: activeTab === 'email' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: activeTab === 'email' ? '1px solid #10b981' : '1px solid var(--border-glass)',
              color: activeTab === 'email' ? '#10b981' : 'var(--text-muted)',
              fontSize: '0.9rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <Mail size={16} />
            <span>Direct Email Command Center</span>
            <span style={{ fontSize: '0.65rem', padding: '1px 6px', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.25)', color: '#10b981', fontWeight: 800 }}>
              contactus@
            </span>
          </button>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto' }}>
          
          {submittedData ? (
            /* Success Confirmation Box */
            <div
              className="glass-panel"
              style={{
                padding: '48px',
                borderRadius: '28px',
                border: '2px solid #10b981',
                background: 'linear-gradient(135deg, rgba(8, 11, 35, 0.95) 0%, rgba(14, 38, 25, 0.85) 100%)',
                textAlign: 'center'
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.2)',
                  border: '2px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}
              >
                <CheckCircle2 size={36} color="#10b981" />
              </div>

              <h2 style={{ fontSize: '2rem', marginBottom: '12px', color: '#f8fafc' }}>
                Consultation Request Received!
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                Your request has been routed directly to <strong style={{ color: '#fff' }}>Gangadhar & Srikanth</strong>. 
                Our team will review your requirement brief and follow up with a calendar invitation and initial architectural considerations within 24 hours.
              </p>

              <div
                style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  borderRadius: '12px',
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid var(--border-glass)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--cyan-core)',
                  marginBottom: '32px'
                }}
              >
                Consultation Ticket Ref: <strong>{submittedData.ticketId}</strong>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  flexWrap: 'wrap'
                }}
              >
                <button
                  onClick={() => setSubmittedData(null)}
                  className="btn-secondary"
                  style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                >
                  Submit Another Consultation Request
                </button>

                <a
                  href={`mailto:contactus@qubrixconsulting.com?subject=${encodeURIComponent(`[Ticket ${submittedData.ticketId}] Direct Consultation Confirmation`)}&body=${encodeURIComponent(`Dear Gangadhar and Srikanth,\n\nI have generated consultation ticket ref: ${submittedData.ticketId}.\n\nLooking forward to speaking during our discovery session!\n`)}`}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '0.9rem', textDecoration: 'none' }}
                >
                  <Mail size={16} />
                  <span>Send Confirmation to contactus@qubrixconsulting.com</span>
                </a>
              </div>
            </div>
          ) : (
            /* Interactive Forms */
            <div
              className="glass-panel"
              style={{
                padding: '44px',
                borderRadius: '28px',
                border: '1px solid var(--border-glow)',
                background: 'linear-gradient(135deg, rgba(8, 11, 35, 0.95) 0%, rgba(18, 24, 62, 0.85) 100%)'
              }}
            >
              {activeTab === 'book' ? (
                /* TAB 1: 1-on-1 Consultation Booking Form */
                <form onSubmit={handleBookingSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe / Jane Smith"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="founder@company.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Global / Stealth AI"
                        value={bookingForm.company}
                        onChange={(e) => setBookingForm({ ...bookingForm, company: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Consulting Domain Focus
                      </label>
                      <select
                        value={bookingForm.consultingDomain}
                        onChange={(e) => setBookingForm({ ...bookingForm, consultingDomain: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: '#0b0e29',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      >
                        <option value="Web Application Consulting">Web Application Consulting & Architecture</option>
                        <option value="Mobile Application Engineering">Mobile Application Engineering (iOS/Android)</option>
                        <option value="Enterprise AI Enablement">Enterprise AI Enablement & Multi-Agent Swarms</option>
                        <option value="Full-Stack Digital Transformation">Unified Web + Mobile + AI Ecosystem</option>
                        <option value="Architecture Audit & Scalability">Cloud Architecture & Security Audit</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Preferred Principal Consultant
                      </label>
                      <select
                        value={bookingForm.preferredConsultant}
                        onChange={(e) => setBookingForm({ ...bookingForm, preferredConsultant: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: '#0b0e29',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      >
                        <option value="Both Gangadhar & Srikanth (Recommended)">Both Gangadhar & Srikanth (Full Architecture + AI Pod)</option>
                        <option value="Gangadhar (Lead Cloud Architect, Reputed Financial Organization)">Gangadhar — Lead Cloud & Distributed Systems Architect</option>
                        <option value="Srikanth (Principal AI & Digital Solutions, Reputed IT Consulting Company)">Srikanth — Principal Mobile & AI Solutions Architect</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Preferred Meeting Time Window
                      </label>
                      <select
                        value={bookingForm.preferredTime}
                        onChange={(e) => setBookingForm({ ...bookingForm, preferredTime: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: '#0b0e29',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      >
                        <option value="Morning: 10:00 AM IST / 12:30 PM EST">Morning: 10:00 AM IST / 12:30 PM EST</option>
                        <option value="Afternoon: 2:30 PM IST / 5:00 AM EST">Afternoon: 2:30 PM IST / 5:00 AM EST</option>
                        <option value="Evening: 6:30 PM IST / 9:00 AM EST">Evening: 6:30 PM IST / 9:00 AM EST</option>
                        <option value="US Eastern Hours: 8:00 PM IST / 10:30 AM EST">US Eastern Hours: 8:00 PM IST / 10:30 AM EST</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                      Project Requirements & Current Technical Challenges
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about the digital product you're building, your target release date, current tech stack, or scaling hurdles..."
                      value={bookingForm.projectScope}
                      onChange={(e) => setBookingForm({ ...bookingForm, projectScope: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-main)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary"
                      style={{
                        flex: 1,
                        minWidth: '240px',
                        padding: '16px 28px',
                        fontSize: '0.96rem',
                        justifyContent: 'center',
                        opacity: isSubmitting ? 0.7 : 1
                      }}
                    >
                      {isSubmitting ? (
                        <span>Scheduling Strategy Call...</span>
                      ) : (
                        <>
                          <span>Confirm Consultation with Gangadhar & Srikanth</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:contactus@qubrixconsulting.com?subject=${encodeURIComponent(`[Consultation Booking] ${bookingForm.consultingDomain} - ${bookingForm.company || bookingForm.name || 'Client'}`)}&body=${encodeURIComponent(`Hi Gangadhar & Srikanth,\n\nI would like to schedule a strategic consultation.\n\n• Name: ${bookingForm.name || '[Name]'}\n• Email: ${bookingForm.email || '[Email]'}\n• Company: ${bookingForm.company || '[Company]'}\n• Domain: ${bookingForm.consultingDomain}\n• Preferred Consultant: ${bookingForm.preferredConsultant}\n• Preferred Window: ${bookingForm.preferredTime}\n• Project Scope Notes:\n${bookingForm.projectScope || 'Looking to discuss upcoming technical roadmap.'}\n\nBest regards,\n${bookingForm.name || 'Client'}`)}`}
                      className="btn-secondary"
                      style={{
                        padding: '16px 22px',
                        fontSize: '0.88rem',
                        justifyContent: 'center',
                        textDecoration: 'none'
                      }}
                      title="Launch pre-drafted consultation in your email client to contactus@qubrixconsulting.com"
                    >
                      <Mail size={16} />
                      <span>Email Direct (contactus@)</span>
                    </a>
                  </div>

                  <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    🔒 100% Confidential • Direct Principal Architect Discussion • No Sales Pitch
                  </div>
                </form>
              ) : activeTab === 'rfp' ? (
                /* TAB 2: Detailed Project RFP Submission Form */
                <form onSubmit={handleRfpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={rfpForm.name}
                        onChange={(e) => setRfpForm({ ...rfpForm, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="executive@enterprise.com"
                        value={rfpForm.email}
                        onChange={(e) => setRfpForm({ ...rfpForm, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '18px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Estimated Budget Range
                      </label>
                      <select
                        value={rfpForm.budgetRange}
                        onChange={(e) => setRfpForm({ ...rfpForm, budgetRange: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: '#0b0e29',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      >
                        <option value="$10,000 - $25,000">$10,000 - $25,000 (Architecture Audit / PoC)</option>
                        <option value="$25,000 - $60,000">$25,000 - $60,000 (Full-Feature Web / Mobile MVP)</option>
                        <option value="$60,000 - $120,000">$60,000 - $120,000 (Enterprise Multi-Agent AI System)</option>
                        <option value="$120,000+">$120,000+ (Comprehensive Digital Transformation)</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Target Delivery Timeline
                      </label>
                      <select
                        value={rfpForm.targetTimeline}
                        onChange={(e) => setRfpForm({ ...rfpForm, targetTimeline: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          borderRadius: '12px',
                          background: '#0b0e29',
                          border: '1px solid var(--border-glass)',
                          color: 'var(--text-main)',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      >
                        <option value="2 - 3 Weeks (Diagnostic Sprint)">2 - 3 Weeks (Diagnostic Architecture Sprint)</option>
                        <option value="6 - 8 Weeks (Fast-Track MVP)">6 - 8 Weeks (Fast-Track Production MVP)</option>
                        <option value="12 - 16 Weeks (Enterprise Overhaul)">12 - 16 Weeks (Enterprise Overhaul)</option>
                        <option value="Ongoing Strategic Advisory">Ongoing Strategic Fractional Architecture Retainer</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                      Detailed Project Scope / Architecture Requirements
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Please outline the product requirements, expected user volume, desired cloud providers (AWS/GCP/Azure), AI agent workflows, and any existing systems to integrate..."
                      value={rfpForm.rfpDetails}
                      onChange={(e) => setRfpForm({ ...rfpForm, rfpDetails: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-glass)',
                        color: 'var(--text-main)',
                        fontSize: '0.92rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="checkbox"
                      id="ndaCheck"
                      checked={rfpForm.needNDA}
                      onChange={(e) => setRfpForm({ ...rfpForm, needNDA: e.target.checked })}
                      style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--cyan-core)' }}
                    />
                    <label htmlFor="ndaCheck" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', cursor: 'pointer' }}>
                      Please provide a mutual Non-Disclosure Agreement (NDA) before detailed requirement disclosures.
                    </label>
                  </div>

                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary"
                      style={{
                        flex: 1,
                        minWidth: '240px',
                        padding: '16px 28px',
                        fontSize: '0.96rem',
                        justifyContent: 'center',
                        opacity: isSubmitting ? 0.7 : 1
                      }}
                    >
                      {isSubmitting ? (
                        <span>Submitting Project Scope...</span>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit RFP for Architecture Review</span>
                        </>
                      )}
                    </button>

                    <a
                      href={`mailto:contactus@qubrixconsulting.com?subject=${encodeURIComponent(`[Project RFP] Architecture Review - ${rfpForm.company || rfpForm.name || 'Client RFP'}`)}&body=${encodeURIComponent(`Hi Gangadhar & Srikanth,\n\nWe would like to submit a project RFP for architecture review.\n\n• Name: ${rfpForm.name || '[Name]'}\n• Work Email: ${rfpForm.email || '[Email]'}\n• Company: ${rfpForm.company || '[Company]'}\n• Budget Range: ${rfpForm.budgetRange}\n• Target Timeline: ${rfpForm.targetTimeline}\n• Technical Stack: ${rfpForm.technicalStack}\n• Need NDA: ${rfpForm.needNDA ? 'Yes, mutual NDA requested' : 'No'}\n\nProject Scope Details:\n${rfpForm.rfpDetails || 'Detailed specifications attached.'}\n\nBest regards,\n${rfpForm.name || 'Client'}`)}`}
                      className="btn-secondary"
                      style={{
                        padding: '16px 22px',
                        fontSize: '0.88rem',
                        justifyContent: 'center',
                        textDecoration: 'none'
                      }}
                      title="Send RFP directly via email to contactus@qubrixconsulting.com"
                    >
                      <Mail size={16} />
                      <span>Email RFP Direct</span>
                    </a>
                  </div>
                </form>
              ) : (
                /* TAB 3: Direct Email Command Center */
                <div style={{ display: 'flex', flexDirection: 'column', gap: '26px' }}>
                  {/* Top Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '20px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                        <Sparkles size={20} color="var(--cyan-core)" />
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', margin: 0 }}>
                          Direct Architecture Email Dispatcher
                        </h3>
                      </div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>
                        Compose and dispatch structured technical inquiries directly to <strong style={{ color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>contactus@qubrixconsulting.com</strong>.
                      </p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        onClick={() => setShowQrCode(!showQrCode)}
                        className="btn-secondary"
                        style={{ padding: '8px 14px', fontSize: '0.82rem', borderRadius: '10px' }}
                      >
                        <QrCode size={15} color="var(--cyan-core)" />
                        <span>{showQrCode ? 'Hide Mobile QR' : 'Mobile QR Connect'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Mobile QR Scanner Dropdown Modal / Strip */}
                  {showQrCode && (
                    <div 
                      className="glass-panel"
                      style={{
                        padding: '24px',
                        borderRadius: '18px',
                        background: 'rgba(0, 0, 0, 0.55)',
                        border: '1px solid var(--cyan-core)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '20px'
                      }}
                    >
                      <div style={{ maxWidth: '440px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                          <Smartphone size={18} color="var(--cyan-core)" />
                          <h4 style={{ margin: 0, fontSize: '1.05rem', color: 'var(--text-main)' }}>
                            Instant Mobile Executive Connect
                          </h4>
                        </div>
                        <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                          Point your smartphone camera (iPhone Camera / Android Lens) at this code. It will instantly pop up a pre-drafted consultation email to <strong>contactus@qubrixconsulting.com</strong> directly in your mobile mail app.
                        </p>
                        <div style={{ fontSize: '0.76rem', color: 'var(--cyan-core)', fontFamily: 'var(--font-mono)' }}>
                          ✓ Verified Scannable • 0 Typing Needed • Direct to Gangadhar & Srikanth
                        </div>
                      </div>

                      <div style={{
                        padding: '12px',
                        background: '#ffffff',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 25px rgba(0, 242, 254, 0.35)',
                        margin: '0 auto'
                      }}>
                        <img 
                          src={qrCodeUrl} 
                          alt="QR Code to email contactus@qubrixconsulting.com" 
                          style={{ width: '150px', height: '150px', display: 'block' }} 
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 1: Topic Selector */}
                  <div>
                    <label style={{ fontSize: '0.86rem', color: 'var(--text-muted)', marginBottom: '10px', display: 'block', fontWeight: 600 }}>
                      Step 1: Select Consultation Architecture Topic
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 150px), 1fr))', gap: '10px' }}>
                      {[
                        { id: 'web', label: 'Web & Cloud', lead: 'Gangadhar', icon: Globe },
                        { id: 'mobile', label: 'Mobile Apps', lead: 'Srikanth', icon: Smartphone },
                        { id: 'ai', label: 'Enterprise AI', lead: 'Gangadhar & Srikanth', icon: Cpu },
                        { id: 'mvp', label: 'Fast-Track MVP', lead: '6-8 Weeks Pod', icon: Layers },
                        { id: 'custom', label: 'Custom Advisory', lead: 'Fractional CTO', icon: User }
                      ].map((t) => {
                        const Icon = t.icon;
                        const isSelected = emailTopic === t.id;
                        return (
                          <button
                            key={t.id}
                            type="button"
                            onClick={() => setEmailTopic(t.id)}
                            style={{
                              padding: '12px 14px',
                              borderRadius: '12px',
                              background: isSelected ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                              border: isSelected ? '1px solid var(--cyan-core)' : '1px solid var(--border-glass)',
                              color: isSelected ? 'var(--cyan-core)' : 'var(--text-muted)',
                              textAlign: 'left',
                              cursor: 'pointer',
                              transition: 'all 0.2s ease',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '4px'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', fontWeight: 700, color: isSelected ? 'var(--cyan-core)' : 'var(--text-main)' }}>
                              <Icon size={15} />
                              <span>{t.label}</span>
                            </div>
                            <span style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                              {t.lead}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Quick Tailoring Inputs */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Step 2: Your Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Mercer"
                        value={emailSenderName}
                        onChange={(e) => setEmailSenderName(e.target.value)}
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
                      <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                        Company or Startup Name (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nexus Financial"
                        value={emailSenderOrg}
                        onChange={(e) => setEmailSenderOrg(e.target.value)}
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
                    <label style={{ fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '6px', display: 'block' }}>
                      Specific Notes or Current Challenge (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Scaling Next.js SSR to 50k DAU, migrating AWS microservices, integrating LangGraph agent..."
                      value={emailSenderNotes}
                      onChange={(e) => setEmailSenderNotes(e.target.value)}
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

                  {/* Step 3: Live Email Blueprint Terminal */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <label style={{ fontSize: '0.84rem', color: 'var(--cyan-core)', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                        Step 3: Live Generated Email Specification
                      </label>
                      <button
                        type="button"
                        onClick={handleCopyDraft}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: copiedDraft ? '#10b981' : 'var(--text-muted)',
                          cursor: 'pointer',
                          fontSize: '0.78rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        {copiedDraft ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                        <span>{copiedDraft ? 'Blueprint Copied!' : 'Copy Specification'}</span>
                      </button>
                    </div>

                    <div
                      style={{
                        borderRadius: '14px',
                        background: '#040714',
                        border: '1px solid var(--border-glass)',
                        padding: '18px 20px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.84rem',
                        color: 'var(--text-main)',
                        overflowX: 'auto',
                        boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.6)'
                      }}
                    >
                      <div style={{ color: 'var(--text-dim)', marginBottom: '4px' }}>
                        <strong style={{ color: 'var(--cyan-core)' }}>To:</strong> contactus@qubrixconsulting.com
                      </div>
                      <div style={{ color: 'var(--text-dim)', marginBottom: '14px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', paddingBottom: '8px' }}>
                        <strong style={{ color: 'var(--cyan-core)' }}>Subject:</strong> {draft.subject}
                      </div>
                      <div style={{ whiteSpace: 'pre-line', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                        {draft.body}
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Multi-Dispatch Action Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      Step 4: Launch via Your Preferred Email Client
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '12px' }}>
                      <a
                        href={gmailLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          padding: '14px 18px',
                          fontSize: '0.88rem',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          background: 'linear-gradient(135deg, #ea4335 0%, #c5221f 100%)',
                          borderColor: '#ea4335'
                        }}
                      >
                        <Mail size={16} />
                        <span>Open in Gmail Web</span>
                        <ExternalLink size={14} />
                      </a>

                      <a
                        href={outlookLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{
                          padding: '14px 18px',
                          fontSize: '0.88rem',
                          justifyContent: 'center',
                          textDecoration: 'none',
                          background: 'linear-gradient(135deg, #0078d4 0%, #005a9e 100%)',
                          borderColor: '#0078d4'
                        }}
                      >
                        <Mail size={16} />
                        <span>Open in Outlook Web</span>
                        <ExternalLink size={14} />
                      </a>

                      <a
                        href={mailtoLink}
                        className="btn-primary"
                        style={{
                          padding: '14px 18px',
                          fontSize: '0.88rem',
                          justifyContent: 'center',
                          textDecoration: 'none'
                        }}
                      >
                        <Send size={16} />
                        <span>Launch Default Mail App</span>
                      </a>
                    </div>

                    <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '6px' }}>
                      🔒 100% Confidential • Directly received by Gangadhar & Srikanth • Fast turnaround within 24 hours
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* CONSULTING FAQS */}
      <section className="content-section">
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '8px' }}>
              Frequently Asked <span className="gradient-text">Questions</span>
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              Everything you need to know about engaging Qubrix Consulting.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    borderRadius: '16px',
                    border: '1px solid var(--border-glass)',
                    overflow: 'hidden',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-main)',
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
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} color="var(--cyan-core)" /> : <ChevronDown size={18} color="var(--text-dim)" />}
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px 24px', color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
