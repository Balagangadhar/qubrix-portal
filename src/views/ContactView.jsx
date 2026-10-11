import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { INSTRUCTORS } from '../data/instructorsData';

export default function ContactView({ selectedCourseForEnrollment }) {
  const [activeTab, setActiveTab] = useState(selectedCourseForEnrollment ? 'academy' : 'studio');
  const [submittedData, setSubmittedData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Studio Form State
  const [studioForm, setStudioForm] = useState({
    name: '',
    email: '',
    company: '',
    category: 'Agentic AI & Custom LLMs',
    budget: '₹2,50,000 - ₹5,00,000',
    timeline: '8 - 12 Weeks',
    details: ''
  });

  // Academy Form State
  const [academyForm, setAcademyForm] = useState({
    name: '',
    email: '',
    course: selectedCourseForEnrollment || 'Agentic AI Engineering',
    experience: 'Mid-Level Engineer (2-5 yrs)',
    mentor: 'Bala (JPMorganChase)',
    goals: ''
  });

  useEffect(() => {
    if (selectedCourseForEnrollment) {
      setActiveTab('academy');
      setAcademyForm(prev => ({ ...prev, course: selectedCourseForEnrollment }));
    }
  }, [selectedCourseForEnrollment]);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleStudioSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        type: 'studio',
        ticketId: `QBX-STUDIO-${Math.floor(100000 + Math.random() * 900000)}`,
        data: studioForm
      });
    }, 600);
  };

  const handleAcademySubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        type: 'academy',
        ticketId: `QBX-ACADEMY-${Math.floor(100000 + Math.random() * 900000)}`,
        data: academyForm
      });
    }, 600);
  };

  const faqs = [
    {
      q: 'How does Qubrix Studio onboard and deliver client projects?',
      a: 'We initiate every partnership with a 1-week Architectural Blueprint sprint. We define API contracts, schemas, and interactive spatial prototypes before writing production code. Work is delivered via continuous 2-week CI/CD cycles.'
    },
    {
      q: 'What is the schedule and time commitment for Qubrix Academy cohorts?',
      a: 'Courses run part-time across 8 to 12 weeks. They feature 4 hours of live practitioner labs on weekends (led by Bala and Srikanth) along with asynchronous project clinics and peer code reviews.'
    },
    {
      q: 'Do I need a quantum computer or specialized hardware to learn Quantum Computing?',
      a: 'Not at all. In Srikanth’s Quantum Information track, all simulations and Qiskit circuits run in our interactive browser sandbox and IBM Quantum Cloud remote simulators.'
    },
    {
      q: 'Can our enterprise sponsor team upskilling or request a custom workshop?',
      a: 'Yes. We provide bespoke enterprise cohorts in Agentic AI, Cloud Architecture, and Post-Quantum Cryptography for engineering teams with dedicated SLA support.'
    }
  ];

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '50px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '16px' }}>
          <MessageSquare size={14} />
          INITIATE CONTACT
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '18px' }}>
          Let’s Build <span className="gradient-text">Together</span>
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '680px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Whether you want to build a breakthrough digital product or upskill your engineering capabilities,
          our team is ready.
        </p>

        {/* Tab Switcher */}
        <div
          style={{
            display: 'inline-flex',
            padding: '6px',
            borderRadius: '999px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            marginTop: '36px'
          }}
        >
          <button
            onClick={() => { setActiveTab('studio'); setSubmittedData(null); }}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'studio' ? 'linear-gradient(135deg, #00f2fe, #38bdf8)' : 'transparent',
              color: activeTab === 'studio' ? '#030014' : '#cbd5e1',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s'
            }}
          >
            <Briefcase size={16} />
            Hire Qubrix Studio
          </button>

          <button
            onClick={() => { setActiveTab('academy'); setSubmittedData(null); }}
            style={{
              padding: '10px 24px',
              borderRadius: '999px',
              border: 'none',
              background: activeTab === 'academy' ? 'linear-gradient(135deg, #7928ca, #c084fc)' : 'transparent',
              color: activeTab === 'academy' ? '#ffffff' : '#cbd5e1',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.25s'
            }}
          >
            <GraduationCap size={16} />
            Enroll in Qubrix Academy
          </button>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div
          className="glass-panel"
          style={{
            maxWidth: '820px',
            margin: '0 auto',
            padding: '44px',
            borderRadius: '24px',
            border: activeTab === 'studio' ? '1px solid rgba(0, 242, 254, 0.35)' : '1px solid rgba(168, 85, 247, 0.35)',
            background: 'linear-gradient(135deg, rgba(8, 12, 38, 0.95) 0%, rgba(14, 18, 52, 0.9) 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
          }}
        >
          {submittedData ? (
            /* Submission Confirmation Card */
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid #10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto'
                }}
              >
                <CheckCircle2 size={36} color="#10b981" />
              </div>

              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px', fontSize: '0.74rem' }}>
                Enquiry Successfully Logged
              </span>

              <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
                Thank You, {submittedData.data.name}!
              </h2>

              <p style={{ color: '#94a3b8', fontSize: '0.96rem', maxWidth: '540px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                Your enquiry ticket has been generated and dispatched to our lead engineering review team.
                We typically respond with a technical brief within 24 hours.
              </p>

              <div
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  maxWidth: '500px',
                  margin: '0 auto 30px auto',
                  textAlign: 'left',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem'
                }}
              >
                <div style={{ color: '#64748b', marginBottom: '6px' }}>DISPATCH TELEMETRY:</div>
                <div style={{ color: '#00f2fe' }}>Ticket Reference: {submittedData.ticketId}</div>
                <div style={{ color: '#cbd5e1' }}>Track: {submittedData.type === 'studio' ? submittedData.data.category : submittedData.data.course}</div>
                <div style={{ color: '#cbd5e1' }}>Contact: {submittedData.data.email}</div>
                <div style={{ color: '#10b981', marginTop: '6px' }}>Status: Awaiting Architect Review</div>
              </div>

              <button
                onClick={() => setSubmittedData(null)}
                className="btn-secondary"
                style={{ fontSize: '0.88rem' }}
              >
                Submit Another Request
              </button>
            </div>
          ) : activeTab === 'studio' ? (
            /* Studio Project Enquiry Form */
            <form onSubmit={handleStudioSubmit}>
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
                  Commission Qubrix Studio
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
                  Tell us about your project ambitions, required tech stacks, and delivery timeline.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={studioForm.name}
                    onChange={(e) => setStudioForm({ ...studioForm, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Corporate / Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={studioForm.email}
                    onChange={(e) => setStudioForm({ ...studioForm, email: e.target.value })}
                    placeholder="alex@enterprise.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={studioForm.company}
                    onChange={(e) => setStudioForm({ ...studioForm, company: e.target.value })}
                    placeholder="e.g. Quantum Dynamics Inc."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Project Category
                  </label>
                  <select
                    value={studioForm.category}
                    onChange={(e) => setStudioForm({ ...studioForm, category: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 30, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option>Agentic AI & Custom LLMs</option>
                    <option>Full-Stack Cloud Architecture</option>
                    <option>Spatial UI/UX & Design Systems</option>
                    <option>Cross-Platform Mobile Engineering</option>
                    <option>Quantum Computing Advisory & R&D</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Estimated Budget Bracket
                  </label>
                  <select
                    value={studioForm.budget}
                    onChange={(e) => setStudioForm({ ...studioForm, budget: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 30, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option>₹1,50,000 - ₹3,50,000 (Sprint MVP)</option>
                    <option>₹3,50,000 - ₹8,00,000 (Growth Platform)</option>
                    <option>₹8,00,000 - ₹20,00,000+ (Enterprise Multi-Agent / System)</option>
                    <option>Flexible / Exploratory Advisory (INR)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Target Launch Window
                  </label>
                  <select
                    value={studioForm.timeline}
                    onChange={(e) => setStudioForm({ ...studioForm, timeline: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 30, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option>4 - 6 Weeks (Fast Track)</option>
                    <option>8 - 12 Weeks (Standard Sprint)</option>
                    <option>3 - 6 Months (Multi-Phase Architecture)</option>
                    <option>Next Quarter</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                  Project Specifications & Goals
                </label>
                <textarea
                  rows="4"
                  value={studioForm.details}
                  onChange={(e) => setStudioForm({ ...studioForm, details: e.target.value })}
                  placeholder="Describe your vision, core user flows, integrations, or challenges you're looking to solve..."
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1rem', justifyContent: 'center' }}
              >
                {isSubmitting ? 'Transmitting Specs...' : 'Submit Studio Enquiry'}
                <Send size={16} />
              </button>
            </form>
          ) : (
            /* Academy Enrollment Form */
            <form onSubmit={handleAcademySubmit}>
              <div style={{ marginBottom: '28px' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '8px' }}>
                  Enroll in Qubrix Academy
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem' }}>
                  Reserve your seat for upcoming practitioner-led cohorts authored by Bala & Srikanth.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={academyForm.name}
                    onChange={(e) => setAcademyForm({ ...academyForm, name: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={academyForm.email}
                    onChange={(e) => setAcademyForm({ ...academyForm, email: e.target.value })}
                    placeholder="priya@domain.com"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Select Course Track
                  </label>
                  <select
                    value={academyForm.course}
                    onChange={(e) => setAcademyForm({ ...academyForm, course: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 30, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    {COURSES.map(c => (
                      <option key={c.id} value={c.title}>{c.title} ({c.duration})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                    Current Technical Background
                  </label>
                  <select
                    value={academyForm.experience}
                    onChange={(e) => setAcademyForm({ ...academyForm, experience: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(7, 10, 30, 0.9)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#fff',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  >
                    <option>Frontend / React Developer</option>
                    <option>Backend / Systems Engineer</option>
                    <option>Full-Stack Software Engineer (3+ yrs)</option>
                    <option>Tech Lead / Engineering Manager</option>
                    <option>Computer Science Graduate / Student</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                  Mentor & Practitioner Preference
                </label>
                <select
                  value={academyForm.mentor}
                  onChange={(e) => setAcademyForm({ ...academyForm, mentor: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'rgba(7, 10, 30, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  <option>Bala (JPMorganChase — Cloud & Agentic Systems)</option>
                  <option>Srikanth (Evoke Technologies — Quantum & Enterprise Web)</option>
                  <option>General Cohort Allocation</option>
                </select>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '8px', fontWeight: 600 }}>
                  What is your primary learning goal?
                </label>
                <textarea
                  rows="3"
                  value={academyForm.goals}
                  onChange={(e) => setAcademyForm({ ...academyForm, goals: e.target.value })}
                  placeholder="e.g. Want to build production multi-agent systems at my company, pivot to AI engineering..."
                  style={{
                    width: '100%',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1rem', justifyContent: 'center' }}
              >
                {isSubmitting ? 'Registering Seat...' : 'Register for Next Cohort'}
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="content-section" style={{ marginBottom: '80px', maxWidth: '820px', margin: '0 auto 80px auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Frequently Asked Questions</h2>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            Everything you need to know about working with Qubrix.
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
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: isOpen ? '1px solid rgba(0, 242, 254, 0.4)' : '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '18px 22px',
                    background: 'transparent',
                    border: 'none',
                    color: '#fff',
                    textAlign: 'left',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} color="#00f2fe" /> : <ChevronDown size={18} color="#94a3b8" />}
                </button>

                {isOpen && (
                  <div style={{ padding: '0 22px 20px 22px', color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
