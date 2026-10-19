export const CONSULTING_DOMAINS = [
  {
    id: 'web',
    title: 'Web Application Consulting',
    tagline: 'High-Throughput, Distributed Web Platforms & SaaS',
    icon: 'Globe',
    accent: '#00f2fe',
    description: 'Bespoke web architectures built with React 19, Next.js 15, micro-frontends, and sub-millisecond edge APIs designed to handle millions of requests with zero latency degradation.',
    commonUseCases: [
      'Enterprise SaaS Platforms',
      'High-Frequency Financial Portals',
      'Complex B2B Dashboards & Workspaces',
      'Scalable E-Commerce Architectures'
    ],
    recommendedStack: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js/Go', 'PostgreSQL/Redis', 'AWS/Cloudflare'],
    leadConsultant: 'Bala (14+ Yrs, JPMorganChase)'
  },
  {
    id: 'mobile',
    title: 'Mobile Application Consulting',
    tagline: 'Native Performance, Fluid Gestures & Offline-First Resiliency',
    icon: 'Smartphone',
    accent: '#3b82f6',
    description: 'Production-ready iOS and Android applications engineered with native Swift/Kotlin or cross-platform Flutter/React Native, featuring 60fps animations, biometric authentication, and offline-first data sync.',
    commonUseCases: [
      'Consumer Mobile Applications',
      'Field Operations & Offline-First Enterprise Apps',
      'Fintech Mobile Wallets & Biometric Portals',
      'HealthTech & IoT Connected Mobile Apps'
    ],
    recommendedStack: ['React Native / Flutter', 'Swift / Kotlin', 'SQLite/WatermelonDB', 'GraphQL', 'Firebase/AWS Amplify'],
    leadConsultant: 'Srikanth (14+ Yrs, Evoke Technologies)'
  },
  {
    id: 'ai',
    title: 'Enterprise AI Enablement',
    tagline: 'Autonomous Agentic Swarms, Custom RAG & Cognitive Workflows',
    icon: 'Cpu',
    accent: '#a855f7',
    description: 'Transform internal workflows with production-grade autonomous agent loops, custom knowledge graph retrieval (GraphRAG), local private LLM hosting, and deterministic safety guardrails.',
    commonUseCases: [
      'Autonomous Multi-Agent Process Swarms',
      'Enterprise Document & Knowledge RAG',
      'Intelligent Copilots & Workflow Automation',
      'Private On-Premise LLM Infrastructure'
    ],
    recommendedStack: ['LangGraph', 'Python/FastAPI', 'Qdrant/Milvus', 'Ollama/vLLM', 'OpenAI/Claude API', 'Postgres pgvector'],
    leadConsultant: 'Srikanth & Bala (Co-Led AI Practice)'
  },
  {
    id: 'hybrid',
    title: 'Full-Stack Digital Transformation',
    tagline: 'Unified Web, Mobile & Embedded AI System Architecture',
    icon: 'Layers',
    accent: '#10b981',
    description: 'Comprehensive technical partnership for high-growth ventures and enterprises requiring an orchestrated rollout across responsive web, companion mobile apps, and intelligent AI automation layers.',
    commonUseCases: [
      'End-to-End Digital Product Ecosystems',
      'Legacy Modernization to Cloud-Native',
      'AI-First Digital Operating Systems',
      'Multi-Platform Enterprise Overhauls'
    ],
    recommendedStack: ['Unified TypeScript Monorepo', 'Next.js + React Native', 'Go Microservices', 'LangGraph Agents', 'Kubernetes'],
    leadConsultant: 'Bala & Srikanth (Dual Principal Leadership)'
  }
];

export const ENGAGEMENT_MODELS = [
  {
    id: 'sprint',
    title: 'Architecture Blueprint Sprint',
    duration: '2 - 3 Weeks',
    badge: 'Popular for Audits',
    description: 'Deep-dive technical assessment, architecture schema design, security & scalability audit, and a comprehensive delivery roadmap.',
    deliverables: [
      'Full Technical Architecture Blueprint & Schema Spec',
      'Tech Stack & Cloud Infrastructure Recommendations',
      'Scalability & Security Vulnerability Assessment',
      'Iterative MVP Delivery Plan with Sprint Backlog'
    ]
  },
  {
    id: 'mvp',
    title: 'Rapid Production Build (MVP)',
    duration: '6 - 8 Weeks',
    badge: 'Fast-Track Go-To-Market',
    description: 'Dedicated senior engineering pod delivering a feature-complete, production-ready web/mobile product or AI system from scratch.',
    deliverables: [
      'Complete Production-Ready Web / Mobile App or AI Engine',
      'Cloud Deployment on AWS/GCP with Zero-Downtime CI/CD',
      'Automated Test Suites & API Documentation',
      'Post-Launch Warranty & Knowledge Transfer'
    ]
  },
  {
    id: 'enterprise',
    title: 'Enterprise Transformation Pod',
    duration: '12 - 16 Weeks',
    badge: 'Mission-Critical Scale',
    description: 'Full-spectrum engineering pod for high-throughput enterprise systems, legacy migration, or complex multi-agent AI ecosystems.',
    deliverables: [
      'Multi-Region Cloud Architecture with 99.99% SLA',
      'Custom LLM / Agent Orchestration with Private Data Guardrails',
      'Enterprise Integration with ERP, CRM, and Legacy Databases',
      'Executive Architectural Governance & Ongoing Advisory'
    ]
  }
];

export const FEATURE_MODULES = [
  { id: 'auth', label: 'Biometric & Enterprise SSO', category: 'Security', defaultIn: ['web', 'mobile', 'hybrid'] },
  { id: 'websockets', label: 'Real-Time WebSockets & Streaming', category: 'Web', defaultIn: ['web', 'hybrid'] },
  { id: 'offline', label: 'Offline-First Synchronization', category: 'Mobile', defaultIn: ['mobile', 'hybrid'] },
  { id: 'agents', label: 'Autonomous Multi-Agent Swarm (LangGraph)', category: 'AI', defaultIn: ['ai', 'hybrid'] },
  { id: 'rag', label: 'Enterprise Hybrid Vector Search (RAG)', category: 'AI', defaultIn: ['ai', 'hybrid'] },
  { id: 'payments', label: 'Multi-Currency Global Payments', category: 'Commerce', defaultIn: ['web', 'mobile'] },
  { id: 'multiregion', label: 'Multi-Region Kubernetes Cloud Deployment', category: 'Cloud', defaultIn: ['web', 'enterprise'] },
  { id: 'spatial', label: 'Spatial 3D & 60fps Micro-Interactions', category: 'UX', defaultIn: ['web', 'mobile'] }
];
