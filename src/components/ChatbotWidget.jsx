import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2,
  ChevronDown,
  User,
  FlaskConical,
  Laptop
} from 'lucide-react';
import { INSTRUCTORS } from '../data/instructorsData';

export default function ChatbotWidget({ onNavigate, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "👋 Hi! I'm Qubrix Copilot. Whether you're looking to build an enterprise Web/Mobile product or level up in Agentic AI & Quantum computing, I'm here to help. What can I help you explore today?",
      quickReplies: [
        'Web & Mobile studio services',
        'Who are Bala & Srikanth?',
        'Academy courses & syllabus',
        'Try Interactive Labs'
      ]
    }
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    // Add user message
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text
    };
    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    // Generate intelligent contextual response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let responseText = '';
      let quickReplies = [];
      let navAction = null;

      if (lower.includes('bala') || lower.includes('srikanth') || lower.includes('author') || lower.includes('faculty') || lower.includes('experience')) {
        responseText = `Our founding course authors bring deep enterprise battle-tested experience:\n\n• **Bala** (JPMorganChase): Lead Cloud Architect & Systems Specialist with **14+ Years of experience** architecting high-scale distributed financial systems and agentic workflows.\n\n• **Srikanth** (Evoke Technologies): Principal Engineering Lead with **14+ Years of experience** driving full-stack digital transformations and quantum computing foundations.`;
        quickReplies = ['Explore Academy Courses', 'Hire Qubrix Studio', 'Open Interactive Labs'];
        navAction = { label: 'View Academy Faculty', target: 'courses' };
      } else if (lower.includes('web') || lower.includes('mobile') || lower.includes('service') || lower.includes('studio') || lower.includes('app')) {
        responseText = `**Qubrix Studio** specializes in cutting-edge digital craftsmanship:\n\n1. **Full-Stack Web**: Next.js 15, React 19, distributed microservices, and sub-millisecond edge APIs.\n2. **Mobile Apps**: High-performance iOS (Swift) & Android (Kotlin/React Native) with 60fps gesture fluidness.\n3. **Spatial UI/UX**: Dark ergonomic systems, tokenized Figma libraries, and micro-animations.\n4. **Autonomous AI**: Multi-agent swarms with LangGraph and hybrid RAG.`;
        quickReplies = ['Estimate Project Timeline', 'Who are Bala & Srikanth?', 'Contact Studio'];
        navAction = { label: 'Explore Studio Services', target: 'services' };
      } else if (lower.includes('lab') || lower.includes('quantum') || lower.includes('bloch') || lower.includes('sandbox')) {
        responseText = `We have **3 In-Browser Interactive Labs** ready to test without installing anything:\n\n1. **Web & UI/UX Physics Lab**: Tweak backdrop blur, opacity, glow, and spring animation curves.\n2. **Agentic AI Swarm Lab**: Watch 4 autonomous agents (Architect, Designer, Coder, Security) collaborate live.\n3. **Quantum Computing Lab**: Manipulate single qubits on the 2.5D Bloch sphere and test Bell state entanglement!`;
        quickReplies = ['Launch Interactive Labs', 'Web & Mobile services', 'Academy courses'];
        navAction = { label: 'Open Labs Hub', target: 'labs' };
      } else if (lower.includes('course') || lower.includes('academy') || lower.includes('learn') || lower.includes('syllabus')) {
        responseText = `**Qubrix Academy** offers 4 practitioner-led cohort tracks:\n\n• **Agentic AI Engineering** (LangGraph, Multi-Agent Swarms, RAG)\n• **Quantum Information & Computing** (Qubits, Qiskit, Quantum Gates)\n• **Next-Gen Full Stack Development** (React 19, Cloud DevOps, Go/Node)\n• **Spatial UI/UX Design** (Design Systems, Micro-Interactions)\n\nBoth **Bala** (JPMC) and **Srikanth** (Evoke) lead live weekend labs with 14+ years of industry expertise.`;
        quickReplies = ['Enroll in Next Cohort', 'Who are Bala & Srikanth?', 'Launch Interactive Labs'];
        navAction = { label: 'Browse Courses', target: 'courses' };
      } else if (lower.includes('contact') || lower.includes('hire') || lower.includes('cost') || lower.includes('price') || lower.includes('quote')) {
        responseText = `You can easily commission Qubrix Studio for a project or register for an upcoming Academy cohort. We provide free architecture scoping sessions and typically respond within 24 hours with an actionable blueprint.`;
        quickReplies = ['Open Contact Form', 'Calculate Project Timeline'];
        navAction = { label: 'Go to Contact Page', target: 'contact' };
      } else {
        responseText = `I can help you navigate our Web & Mobile Studio services, practitioner courses led by **Bala** & **Srikanth** (both with 14+ years of enterprise experience), or our 3 interactive browser labs!`;
        quickReplies = [
          'Web & Mobile studio services',
          'Who are Bala & Srikanth?',
          'Try Interactive Labs',
          'Contact Studio'
        ];
      }

      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: responseText,
          quickReplies,
          navAction
        }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Chatbot Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            position: 'fixed',
            bottom: '26px',
            right: '26px',
            zIndex: 9990,
            background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
            border: 'none',
            borderRadius: '999px',
            padding: '12px 20px',
            color: '#030014',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            boxShadow: '0 8px 30px rgba(0, 242, 254, 0.45)',
            cursor: 'pointer',
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '0.92rem'
          }}
          className="animate-pulse-glow"
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: '#030014',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Bot size={16} color="#00f2fe" />
          </div>
          <span>Ask Qubrix AI</span>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981'
            }}
          />
        </button>
      )}

      {/* Interactive Chat Window Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 9999,
            width: '92vw',
            maxWidth: '400px',
            height: '560px',
            maxHeight: '85vh',
            background: theme === 'dark' ? 'rgba(7, 10, 32, 0.96)' : 'rgba(255, 255, 255, 0.97)',
            backdropFilter: 'blur(25px)',
            WebkitBackdropFilter: 'blur(25px)',
            border: '1px solid var(--border-glow)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 242, 254, 0.2)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'floatAnim 0.3s ease-out'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: theme === 'dark' ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
              borderBottom: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #00f2fe, #7928ca)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Bot size={20} color="#030014" />
              </div>
              <div>
                <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-main)', fontFamily: 'var(--font-heading)' }}>
                  Qubrix AI Assistant
                </div>
                <div style={{ fontSize: '0.72rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  Online • Powered by Studio Intelligence
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '6px'
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Body */}
          <div
            style={{
              flex: 1,
              padding: '16px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%'
                }}
              >
                <div
                  style={{
                    padding: '12px 16px',
                    borderRadius: m.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    background: m.sender === 'user'
                      ? 'linear-gradient(135deg, var(--cyan-core), #38bdf8)'
                      : theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
                    color: m.sender === 'user' ? '#030014' : 'var(--text-main)',
                    fontSize: '0.88rem',
                    lineHeight: 1.55,
                    border: m.sender === 'user' ? 'none' : '1px solid var(--border-glass)',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {m.text}

                  {/* Optional Action Button */}
                  {m.navAction && (
                    <button
                      onClick={() => {
                        onNavigate(m.navAction.target);
                        setIsOpen(false);
                      }}
                      className="btn-primary"
                      style={{
                        marginTop: '10px',
                        padding: '6px 14px',
                        fontSize: '0.78rem',
                        width: '100%',
                        justifyContent: 'center'
                      }}
                    >
                      {m.navAction.label} <ArrowRight size={12} />
                    </button>
                  )}
                </div>

                {/* Quick Reply Chips */}
                {m.quickReplies && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                    {m.quickReplies.map((qr, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(qr)}
                        style={{
                          background: 'rgba(0, 242, 254, 0.08)',
                          border: '1px solid var(--border-glow)',
                          color: 'var(--cyan-core)',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          fontFamily: 'var(--font-heading)'
                        }}
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '10px 16px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '0.82rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sparkles size={14} color="var(--cyan-core)" />
                <span>Qubrix AI is thinking...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            style={{
              padding: '12px 16px',
              borderTop: '1px solid var(--border-glass)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)'
            }}
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask about Web/Mobile, Bala & Srikanth, Labs..."
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-body)'
              }}
            />
            <button
              type="submit"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--cyan-core), #38bdf8)',
                border: 'none',
                color: '#030014',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
