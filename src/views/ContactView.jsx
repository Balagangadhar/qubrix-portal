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
  ArrowRight
} from 'lucide-react';
import { LEADERSHIP } from '../data/leadershipData';

export default function ContactView({ selectedScopeForBooking }) {
  const [activeTab, setActiveTab] = useState('book'); // 'book' | 'rfp'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Booking Form State
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    company: '',
    consultingDomain: 'Web Application Consulting',
    preferredConsultant: 'Both Bala & Srikanth (Recommended)',
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
      a: 'We schedule a focused 45-minute architectural discovery session directly with Bala and/or Srikanth. We discuss your business objectives, current tech stack, performance or scale challenges, and target milestones. Within 24 hours, we deliver a written Architectural Scope Blueprint.'
    },
    {
      q: 'Will I speak directly with Bala and Srikanth or a sales rep?',
      a: 'You speak directly with Bala (Lead Cloud & Systems Architect, 14+ yrs at JPMorganChase) and Srikanth (Principal Digital Architect, 14+ yrs at Evoke Technologies). We do not employ sales reps or account gatekeepers.'
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
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
          <Calendar size={14} />
          STRATEGIC CONSULTATION & SCOPE INTAKE
        </div>
        <h1 style={{ fontSize: 'clamp(2.3rem, 5vw, 4rem)', marginBottom: '18px', letterSpacing: '-0.02em' }}>
          Consult With Our <span className="gradient-text">Principal Architects</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '760px', margin: '0 auto', fontSize: '1.12rem', lineHeight: 1.6 }}>
          Connect directly with Bala and Srikanth to discuss your Web Application, Mobile Engineering, or Enterprise AI requirements. 
          Receive an actionable technical blueprint within 24 hours.
        </p>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '30px' }}>
          <button
            onClick={() => { setActiveTab('book'); setSubmittedData(null); }}
            style={{
              padding: '12px 24px',
              borderRadius: '999px',
              background: activeTab === 'book' ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: activeTab === 'book' ? '1px solid var(--cyan-core)' : '1px solid var(--border-glass)',
              color: activeTab === 'book' ? 'var(--cyan-core)' : 'var(--text-muted)',
              fontSize: '0.92rem',
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
              padding: '12px 24px',
              borderRadius: '999px',
              background: activeTab === 'rfp' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: activeTab === 'rfp' ? '1px solid var(--violet-glow)' : '1px solid var(--border-glass)',
              color: activeTab === 'rfp' ? 'var(--purple-accent)' : 'var(--text-muted)',
              fontSize: '0.92rem',
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
                Your request has been routed directly to <strong style={{ color: '#fff' }}>Bala & Srikanth</strong>. 
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

              <div>
                <button
                  onClick={() => setSubmittedData(null)}
                  className="btn-secondary"
                  style={{ padding: '12px 24px', fontSize: '0.9rem' }}
                >
                  Submit Another Consultation Request
                </button>
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
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
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

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
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

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
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
                        <option value="Both Bala & Srikanth (Recommended)">Both Bala & Srikanth (Full Architecture + AI Pod)</option>
                        <option value="Bala (Lead Cloud Architect, JPMorganChase)">Bala — Lead Cloud & Distributed Systems Architect</option>
                        <option value="Srikanth (Principal AI & Digital Solutions, Evoke)">Srikanth — Principal Mobile & AI Solutions Architect</option>
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      padding: '16px 32px',
                      fontSize: '1rem',
                      justifyContent: 'center',
                      opacity: isSubmitting ? 0.7 : 1
                    }}
                  >
                    {isSubmitting ? (
                      <span>Scheduling Strategy Call...</span>
                    ) : (
                      <>
                        <span>Confirm Consultation with Bala & Srikanth</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>

                  <div style={{ textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                    🔒 100% Confidential • Direct Principal Architect Discussion • No Sales Pitch
                  </div>
                </form>
              ) : (
                /* TAB 2: Detailed Project RFP Submission Form */
                <form onSubmit={handleRfpSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
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

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
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

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      padding: '16px 32px',
                      fontSize: '1rem',
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
                </form>
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
