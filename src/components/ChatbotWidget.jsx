import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Cpu, 
  CheckCircle2, 
  Calendar, 
  Sliders, 
  ChevronDown,
  User,
  ShieldCheck
} from 'lucide-react';
import { LEADERSHIP } from '../data/leadershipData';

export default function ChatbotWidget({ onNavigate, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "👋 Welcome to **Qubrix Consulting Copilot**. I'm your digital architecture assistant. Whether you're planning an enterprise Web application, a high-performance Mobile app, or an autonomous AI Enablement system, I can help you scope requirements or schedule a consultation with Bala & Srikanth. What would you like to explore?",
      quickReplies: [
        'Explore 8 Capabilities Catalogue',
        'Web Application Architecture',
        'Mobile App Engineering',
        'Enterprise AI Enablement',
        'Who are Bala & Srikanth?',
        'Estimate Project Scope'
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

    // Generate intelligent contextual consulting response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let responseText = '';
      let quickReplies = [];
      let navAction = null;

      if (lower.includes('bala') || lower.includes('srikanth') || lower.includes('architect') || lower.includes('leadership') || lower.includes('partner') || lower.includes('team') || lower.includes('experience')) {
        responseText = `Our consulting practice is led directly by our founding technology partners:\n\n• **Bala** (JPMorganChase & Qubrix): **14+ Years** of enterprise experience architecting ultra-low-latency distributed platforms, multi-region cloud resilience, and mission-critical financial web systems.\n\n• **Srikanth** (Evoke Technologies & Qubrix): **14+ Years** driving enterprise mobile transformations (iOS/Android/Flutter), custom LLM integrations, and developer velocity.\n\nYou work directly with Bala and Srikanth—never junior bench staff.`;
        quickReplies = ['Schedule Call with Bala & Srikanth', 'Web Application Consulting', 'Enterprise AI Enablement'];
        navAction = { label: 'View Leadership Profiles', target: 'about' };
      } else if (lower.includes('web') || lower.includes('next') || lower.includes('react') || lower.includes('frontend') || lower.includes('backend') || lower.includes('saas') || lower.includes('cloud')) {
        responseText = `**Web Application Consulting & Architecture**:\n\n1. **Next.js 15 & React 19**: Streaming SSR, Server Components, and sub-100ms LCP.\n2. **Micro-Frontends**: Modular, independently deployable web modules for enterprise scale.\n3. **Distributed Backends**: High-throughput microservices in Go, Node.js, and Rust with Kafka and WebSockets.\n4. **Multi-Region Cloud**: Zero-downtime Kubernetes deployments on AWS/GCP with 99.99% SLA.\n\nLead Architect: **Bala** (14+ yrs, JPMorganChase).`;
        quickReplies = ['Launch Interactive Scope Builder', 'Schedule Strategy Call', 'Mobile App Engineering'];
        navAction = { label: 'Explore Web Services', target: 'services' };
      } else if (lower.includes('mobile') || lower.includes('ios') || lower.includes('android') || lower.includes('react native') || lower.includes('flutter') || lower.includes('swift')) {
        responseText = `**Mobile Application Engineering**:\n\n1. **Fluid Performance**: 60fps gesture animations on native iOS (Swift) & Android (Kotlin) or cross-platform (React Native/Flutter).\n2. **Offline-First Sync**: Local-first architecture using SQLite and WatermelonDB with zero-delay UX.\n3. **Hardware & Biometrics**: FaceID/TouchID secure enclave integration and BLE sensor telemetry.\n4. **Full Store Publication**: End-to-end App Store review compliance and automated OTA hotfixes.\n\nLead Architect: **Srikanth** (14+ yrs, Evoke Technologies).`;
        quickReplies = ['Scope a Mobile App', 'Schedule Mobile Consultation', 'Enterprise AI Enablement'];
        navAction = { label: 'Explore Mobile Engineering', target: 'services' };
      } else if (lower.includes('ai') || lower.includes('agent') || lower.includes('swarm') || lower.includes('llm') || lower.includes('rag') || lower.includes('langgraph') || lower.includes('gpt')) {
        responseText = `**Enterprise AI Enablement & Multi-Agent Swarms**:\n\n1. **Autonomous Agent Swarms**: Multi-agent cognitive loops using LangGraph for multi-step process automation.\n2. **Enterprise GraphRAG**: Hybrid sparse-dense vector search with Qdrant/Milvus and semantic reranking.\n3. **Private On-Premise LLMs**: Containerized local deployments (Ollama/vLLM) ensuring your data never leaves your perimeter.\n4. **Deterministic Guardrails**: Automated hallucination detection, prompt injection mitigation, and continuous evals.\n\nCo-Led by **Bala & Srikanth**.`;
        quickReplies = ['AI Readiness Audit', 'Launch Interactive Scope Builder', 'Schedule AI Call'];
        navAction = { label: 'Explore AI Enablement', target: 'services' };
      } else if (lower.includes('price') || lower.includes('pricing') || lower.includes('calculator') || lower.includes('cost') || lower.includes('estimate') || lower.includes('budget') || lower.includes('storage') || lower.includes('domain') || lower.includes('maps') || lower.includes('sms')) {
        responseText = `We have an **Interactive Pricing & Infrastructure Cost Calculator**!\n\nYou can select commonly needed services (custom domains, S3 object storage, PostgreSQL, Google Maps, Twilio SMS, Resend email, Stripe payments, OpenAI tokens, Sentry monitoring, and Apple/Google store fees).\n\nIt dynamically calculates:\n• **One-Time Engineering & Setup Fees**\n• **Monthly Recurring Infrastructure Fees**\n• **Annualized Total Cost of Ownership (with 15% annual savings)**\n• Multi-currency conversions (USD, EUR, GBP, INR)!`;
        quickReplies = ['Open Pricing Calculator', 'Launch 3D Scope Estimator', 'Schedule Consultation'];
        navAction = { label: 'Launch Pricing Calculator', target: 'pricing' };
      } else if (lower.includes('capabilit') || lower.includes('catalogue') || lower.includes('connect') || lower.includes('communicate') || lower.includes('transact') || lower.includes('understand') || lower.includes('immerse') || lower.includes('secure') || lower.includes('operate') || lower.includes('superpower')) {
        responseText = `**Qubrix Digital Capabilities Catalogue** organizes software into 8 reusable enterprise foundations:\n\n1. **Connect**: Maps, APIs, Social, CRM (Salesforce), ERP (SAP)\n2. **Communicate**: In-app chat, WebRTC video/voice, Push alerts\n3. **Transact**: Global payments, subscriptions, bookings, ledger invoices\n4. **Understand**: Semantic vector search, real-time analytics, OCR vision\n5. **Intelligence**: LangGraph agent swarms, private LLMs, guardrails\n6. **Immerse**: 3D WebGL, WebXR spatial models, digital twins\n7. **Secure**: Biometrics, WebAuthn, RBAC, behavioral fraud scoring\n8. **Operate**: Multi-part S3 storage, DAG workflows, distributed crons\n\nYou can research and test live interactive sandboxes for each in our catalogue!`;
        quickReplies = ['Explore Capabilities Catalogue', 'Test AI Intelligence Swarm', 'Launch Scope Builder'];
        navAction = { label: 'Open Capabilities Catalogue', target: 'capabilities' };
      } else if (lower.includes('contact') || lower.includes('book') || lower.includes('consult') || lower.includes('hire') || lower.includes('meeting') || lower.includes('call')) {
        responseText = `You can easily book a **1-on-1 Strategy Consultation** directly with Bala and Srikanth. We offer complimentary 45-minute discovery sessions and provide an actionable written technical blueprint within 24 hours. We also sign NDAs upon request.`;
        quickReplies = ['Schedule Architecture Call', 'Submit Detailed RFP', 'Open Scope Builder'];
        navAction = { label: 'Go to Consultation Booking', target: 'contact' };
      } else {
        responseText = `I'm here to help you evaluate your technical needs across **Web Applications**, **Mobile Engineering**, or **Enterprise AI Enablement**. I can also connect you directly with Principal Architects **Bala** (JPMorganChase) & **Srikanth** (Evoke Technologies) for a scoping review!`;
        quickReplies = [
          'Web Application Architecture',
          'Mobile App Engineering',
          'Enterprise AI Enablement',
          'Estimate Project Scope',
          'Schedule Strategy Call'
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
    }, 550);
  };

  const handleActionClick = (target) => {
    if (onNavigate) {
      onNavigate(target);
      setIsOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
            color: '#ffffff',
            border: 'none',
            borderRadius: '999px',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(0, 242, 254, 0.45)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '0.92rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.03)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 242, 254, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 242, 254, 0.45)';
          }}
        >
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Sparkles size={16} color="#ffffff" />
          </div>
          <span>Consulting Copilot</span>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              boxShadow: '0 0 8px #10b981'
            }}
          />
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: 'min(420px, calc(100vw - 32px))',
            height: 'min(620px, calc(100vh - 100px))',
            zIndex: 9999,
            backgroundColor: theme === 'dark' ? 'rgba(7, 10, 32, 0.96)' : 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid var(--border-glow)',
            borderRadius: '24px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'fadeInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.12) 0%, rgba(121, 40, 202, 0.12) 100%)',
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
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Bot size={20} color="#ffffff" />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontWeight: 800, fontSize: '0.98rem', color: 'var(--text-main)' }}>
                    Qubrix Copilot
                  </span>
                  <span
                    style={{
                      fontSize: '0.65rem',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'rgba(0, 242, 254, 0.15)',
                      color: 'var(--cyan-core)',
                      fontWeight: 700
                    }}
                  >
                    SOLUTIONS ARCHITECT
                  </span>
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  Web • Mobile • AI Enablement
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
                padding: '6px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.2s'
              }}
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px'
            }}
          >
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: isBot ? 'flex-start' : 'flex-end',
                    maxWidth: '100%'
                  }}
                >
                  <div
                    style={{
                      maxWidth: '88%',
                      padding: '12px 16px',
                      borderRadius: isBot ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                      background: isBot 
                        ? (theme === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)')
                        : 'linear-gradient(135deg, #00f2fe 0%, #3b82f6 100%)',
                      color: isBot ? 'var(--text-main)' : '#030014',
                      border: isBot ? '1px solid var(--border-glass)' : 'none',
                      fontSize: '0.88rem',
                      lineHeight: 1.55,
                      whiteSpace: 'pre-line',
                      boxShadow: isBot ? 'none' : '0 4px 15px rgba(0, 242, 254, 0.25)'
                    }}
                  >
                    {msg.text}

                    {/* In-Message Navigation CTA Button */}
                    {msg.navAction && (
                      <button
                        onClick={() => handleActionClick(msg.navAction.target)}
                        style={{
                          marginTop: '10px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          padding: '6px 14px',
                          borderRadius: '8px',
                          background: 'linear-gradient(135deg, #00f2fe, #7928ca)',
                          color: '#ffffff',
                          border: 'none',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        <span>{msg.navAction.label}</span>
                        <ArrowRight size={13} />
                      </button>
                    )}
                  </div>

                  {/* Quick Reply Chips */}
                  {isBot && msg.quickReplies && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        marginTop: '8px',
                        maxWidth: '95%'
                      }}
                    >
                      {msg.quickReplies.map((reply, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(reply)}
                          style={{
                            background: 'rgba(0, 242, 254, 0.08)',
                            border: '1px solid var(--border-glow)',
                            color: 'var(--cyan-core)',
                            padding: '4px 10px',
                            borderRadius: '999px',
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Typing Indicator */}
            {isTyping && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '10px 14px',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-glass)',
                  display: 'flex',
                  gap: '5px',
                  alignItems: 'center'
                }}
              >
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan-core)', animation: 'bounce 1s infinite 0s' }} />
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan-core)', animation: 'bounce 1s infinite 0.2s' }} />
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--cyan-core)', animation: 'bounce 1s infinite 0.4s' }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box Footer */}
          <div
            style={{
              padding: '14px 16px',
              borderTop: '1px solid var(--border-glass)',
              background: theme === 'dark' ? 'rgba(3, 0, 18, 0.7)' : 'rgba(240, 240, 245, 0.7)',
              display: 'flex',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            <input
              type="text"
              placeholder="Ask about Web, Mobile, AI, or Scoping..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              style={{
                flex: 1,
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-glass)',
                borderRadius: '12px',
                padding: '10px 14px',
                color: 'var(--text-main)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <button
              onClick={() => handleSendMessage()}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00f2fe 0%, #7928ca 100%)',
                border: 'none',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </>
  );
}
