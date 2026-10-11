import React, { useState } from 'react';
import { 
  GraduationCap, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  X, 
  Layers, 
  Cpu, 
  Atom, 
  Palette, 
  Award,
  Users,
  Code
} from 'lucide-react';
import { COURSES } from '../data/coursesData';
import { INSTRUCTORS } from '../data/instructorsData';

export default function CoursesView({ setView, setSelectedCourseForEnrollment }) {
  const [filter, setFilter] = useState('All');
  const [activeSyllabusModal, setActiveSyllabusModal] = useState(null);

  const categories = ['All', 'AI & Automation', 'Quantum Tech', 'Full Stack', 'Design Systems'];

  const filteredCourses = filter === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === filter);

  const handleEnrollClick = (courseTitle) => {
    if (setSelectedCourseForEnrollment) {
      setSelectedCourseForEnrollment(courseTitle);
    }
    setView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="badge-pill badge-violet" style={{ marginBottom: '16px' }}>
          <GraduationCap size={14} />
          QUBRIX ACADEMY
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '20px' }}>
          Practitioner-Led <span className="gradient-text">Frontier Education</span>
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Learn from enterprise architects who write real code in high-stakes environments.
          Master Autonomous AI Agents, Quantum Computing, and Modern Distributed Systems.
        </p>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginTop: '36px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                background: filter === cat ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                border: filter === cat ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.08)',
                color: filter === cat ? '#00f2fe' : '#94a3b8',
                padding: '8px 18px',
                borderRadius: '999px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Course Cards Grid */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredCourses.map((course) => {
            const author = INSTRUCTORS.find(i => i.id === course.instructorId);

            return (
              <div
                key={course.id}
                className="glass-panel"
                style={{
                  padding: '36px',
                  borderRadius: '22px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: `1px solid ${course.accent}30`,
                  position: 'relative'
                }}
              >
                <div>
                  {/* Top Tags */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontFamily: 'var(--font-mono)',
                        color: course.accent,
                        background: `${course.accent}15`,
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontWeight: 600
                      }}
                    >
                      {course.category}
                    </span>

                    <span className="badge-pill badge-violet" style={{ fontSize: '0.72rem' }}>
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title & Tagline */}
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{course.title}</h3>
                  <div style={{ color: course.accent, fontSize: '0.86rem', fontWeight: 600, marginBottom: '14px', lineHeight: 1.5 }}>
                    {course.tagline}
                  </div>

                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '22px' }}>
                    {course.summary}
                  </p>

                  {/* Instructor Mention */}
                  {author && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        marginBottom: '22px'
                      }}
                    >
                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: author.id === 'bala' ? 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)' : 'linear-gradient(135deg, #7928ca 0%, #ec4899 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          fontSize: '0.85rem'
                        }}
                      >
                        {author.initials}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc' }}>
                          Course Lead: {author.name}
                        </div>
                        <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>
                          {author.role} • <span style={{ color: '#00f2fe' }}>{author.affiliation}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Key Outcomes */}
                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                      Learning Outcomes
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {course.outcomes.slice(0, 3).map((out, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.84rem', color: '#cbd5e1' }}>
                          <CheckCircle2 size={14} color={course.accent} style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  {/* Meta Strip */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '16px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '0.8rem',
                      color: '#94a3b8'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} color="#00f2fe" />
                      {course.duration}
                    </span>
                    <span>Level: <strong style={{ color: '#fff' }}>{course.level}</strong></span>
                    <span>{course.format}</span>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button
                      onClick={() => setActiveSyllabusModal(course)}
                      className="btn-secondary"
                      style={{ flex: 1, justifyContent: 'center', fontSize: '0.84rem' }}
                    >
                      <BookOpen size={14} />
                      Syllabus
                    </button>

                    <button
                      onClick={() => handleEnrollClick(course.title)}
                      className="btn-primary"
                      style={{ flex: 1, justifyContent: 'center', fontSize: '0.84rem' }}
                    >
                      Enroll Now
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Founding Instructors & Course Authors Section */}
      <section className="content-section" style={{ marginBottom: '90px' }}>
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
            <Award size={14} />
            ACADEMY FACULTY & ARCHITECTS
          </div>
          <h2 style={{ fontSize: '2.4rem', marginBottom: '12px' }}>
            Meet the Founding Course Authors
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '680px', margin: '0 auto', fontSize: '1rem' }}>
            Initial curriculum authored by seasoned engineering leaders. More faculty profiles and guest masterclasses
            will be announced soon.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {INSTRUCTORS.map((inst) => (
            <div
              key={inst.id}
              className="glass-panel"
              style={{
                padding: '36px',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '18px',
                    background: inst.id === 'bala' ? 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)' : 'linear-gradient(135deg, #7928ca 0%, #ec4899 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    color: '#fff',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  {inst.initials}
                </div>

                <div>
                  <h3 style={{ fontSize: '1.45rem', marginBottom: '4px' }}>{inst.name}</h3>
                  <div style={{ fontSize: '0.9rem', color: inst.id === 'bala' ? '#00f2fe' : '#c084fc', fontWeight: 700 }}>
                    {inst.affiliation}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    {inst.role}
                  </div>
                </div>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '22px' }}>
                {inst.bio}
              </p>

              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '0.76rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                  Curriculum & Specialization Tracks:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {inst.domains.map((dom, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: '0.74rem',
                        padding: '4px 10px',
                        borderRadius: '999px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: '#cbd5e1'
                      }}
                    >
                      {dom}
                    </span>
                  ))}
                </div>
              </div>

              <div
                style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                  paddingTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.82rem',
                  color: '#94a3b8'
                }}
              >
                <span>Industry Tenure: <strong style={{ color: '#fff' }}>{inst.stats.experience}</strong></span>
                <span className="badge-pill badge-cyan" style={{ fontSize: '0.7rem' }}>
                  {inst.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Syllabus Modal */}
      {activeSyllabusModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(3, 0, 20, 0.8)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveSyllabusModal(null)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '680px',
              maxHeight: '85vh',
              overflowY: 'auto',
              background: 'rgba(8, 12, 36, 0.96)',
              border: `1px solid ${activeSyllabusModal.accent}50`,
              borderRadius: '20px',
              padding: '32px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div>
                <span className="badge-pill badge-cyan" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
                  {activeSyllabusModal.category}
                </span>
                <h2 style={{ fontSize: '1.6rem', color: '#fff' }}>{activeSyllabusModal.title}</h2>
              </div>
              <button
                onClick={() => setActiveSyllabusModal(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px'
                }}
              >
                <X size={20} />
              </button>
            </div>

            <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '24px' }}>
              {activeSyllabusModal.summary}
            </p>

            <h4 style={{ fontSize: '1rem', color: '#fff', marginBottom: '14px' }}>
              Weekly Module Breakdown
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
              {activeSyllabusModal.modules.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.78rem', color: activeSyllabusModal.accent, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                      {m.week}
                    </span>
                    <strong style={{ fontSize: '0.92rem', color: '#f8fafc' }}>{m.title}</strong>
                  </div>
                  <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.84rem', color: '#94a3b8' }}>
                    {m.topics.map((t, i) => (
                      <li key={i} style={{ marginBottom: '3px' }}>{t}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '0.9rem', color: '#fff', marginBottom: '10px' }}>
                Tools & Technologies Mastered
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {activeSyllabusModal.techStack.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      background: 'rgba(0, 242, 254, 0.08)',
                      border: '1px solid rgba(0, 242, 254, 0.25)',
                      color: '#00f2fe'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => {
                  setActiveSyllabusModal(null);
                  handleEnrollClick(activeSyllabusModal.title);
                }}
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                Enroll in This Cohort
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
