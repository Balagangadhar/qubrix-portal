export const SERVICES = [
  {
    id: 'web-consulting',
    title: 'Enterprise Web Application Consulting',
    tagline: 'High-Throughput, Resilient Digital Platforms Built for Enterprise Scale',
    icon: 'Layers',
    accent: '#00f2fe',
    description: 'We architect and build end-to-end web applications with modern micro-frontends, event-driven backends, and multi-region cloud resilience that effortlessly handle millions of transactions.',
    features: [
      'Next.js 15 & React 19 micro-frontend architectures',
      'High-throughput distributed APIs in Go, Node.js & Rust',
      'Multi-cloud Kubernetes deployments with zero-downtime CI/CD',
      'Real-time streaming pipelines with Redis, Kafka & WebSockets'
    ],
    deliverables: ['Production Cloud Architecture', 'High-Performance Web Platform', 'API & Microservice Contracts', 'Observability Dashboard'],
    metrics: '99.99% Uptime SLA • <15ms Edge Response Times'
  },
  {
    id: 'mobile-consulting',
    title: 'Mobile Application Engineering',
    tagline: 'Native Performance, Fluid Gestures, Cross-Platform Efficiency',
    icon: 'Smartphone',
    accent: '#3b82f6',
    description: 'We construct beautiful mobile experiences for iOS and Android with buttery smooth framerates, offline-first architectures, biometric security, and native device hardware utilization.',
    features: [
      'React Native & Flutter high-performance multi-platform apps',
      'Native Swift (iOS) and Kotlin (Android) architecture consulting',
      'Offline-first synchronization with SQLite & WatermelonDB',
      'App Store & Play Store publication and automated OTA update pipelines'
    ],
    deliverables: ['iOS & Android Production Builds', 'App Store Submissions', 'Push Notification Engine', 'Telemetry & Analytics Integration'],
    metrics: '60 FPS Gesture Fluidity • 4.9 App Store Average Rating'
  },
  {
    id: 'ai-enablement',
    title: 'Enterprise AI Enablement & LLM Systems',
    tagline: 'Autonomous AI Agents that Reason, Decide, and Execute Workflows',
    icon: 'Cpu',
    accent: '#a855f7',
    description: 'Move past static chatbots. We design multi-agent cognitive systems capable of executing complex multi-step enterprise workflows with deterministic guardrails and hybrid knowledge retrieval.',
    features: [
      'Autonomous multi-agent orchestration (LangGraph, Swarm)',
      'Enterprise-grade hybrid vector search & GraphRAG',
      'Deterministic safety guardrails & automated evaluation pipelines',
      'Self-hosted local LLM pipelines for data privacy & compliance'
    ],
    deliverables: ['Custom AI Agents & Swarms', 'Vector Knowledge Bases', 'Integration APIs', 'Security & Evaluation Reports'],
    metrics: '70%+ Reduction in Manual Processing • Enterprise-Grade Privacy'
  },
  {
    id: 'spatial-uiux',
    title: 'UI/UX & Spatial Design Systems',
    tagline: 'Futuristic Interfaces Engineered to Captivate and Convert',
    icon: 'Palette',
    accent: '#ec4899',
    description: 'We sculpt digital experiences that look like they arrived from the year 2035. Dark mode ergonomics, rich glassmorphism, 3D elements, and micro-animations designed for maximum emotional resonance.',
    features: [
      'Bespoke design systems with tokenized Figma libraries',
      'Fluid 60fps micro-animations and interactive 3D WebGL data canvas',
      'High-fidelity interactive prototypes tested with real users',
      'WCAG AAA accessible layouts optimized for mobile and desktop'
    ],
    deliverables: ['Figma Design System Tokens', 'Interactive WebGL Canvas Code', 'Interactive Prototype', 'UX Audit & Conversion Strategy'],
    metrics: '3.4x Engagement Lift • Tokenized Design Velocity'
  },
  {
    id: 'cloud-resilience',
    title: 'Cloud Architecture & DevOps Consulting',
    tagline: 'Zero-Downtime Infrastructure, FinOps & Security Hardening',
    icon: 'ShieldCheck',
    accent: '#10b981',
    description: 'Lead architect guidance from Gangadhar (14+ yrs Reputed Financial Organization) on structuring resilient AWS/GCP cloud platforms, zero-trust security perimeter, automated CI/CD pipelines, and cloud cost optimization.',
    features: [
      'Multi-region high-availability disaster recovery setup',
      'Zero-trust security compliance & SOC2 audit preparedness',
      'Kubernetes orchestration & containerized microservices',
      'FinOps cloud cost reduction analysis and resource tuning'
    ],
    deliverables: ['Cloud Infrastructure as Code (Terraform)', 'Kubernetes Cluster Blueprints', 'Disaster Recovery Plan', 'FinOps Cost Audit'],
    metrics: '40% Cloud Cost Savings • Zero-Downtime Releases'
  }
];

export const PORTFOLIO = [
  {
    id: 'fintech-trading',
    title: 'NexusTrade — Real-Time Institutional Trading Platform',
    client: 'Global FinTech Consortium',
    category: 'Web App & Cloud Architecture',
    accent: '#00f2fe',
    description: 'An institutional asset transaction engine featuring sub-millisecond execution times, WebSocket streaming order books, and a futuristic dark spatial trading terminal.',
    impact: 'Processes $400M+ in daily transaction volume with zero latency spikes or degradation.',
    tags: ['React 19', 'Go Microservices', 'Kafka', 'WebSocket Grid', 'AWS Multi-Region'],
    leadConsultant: 'Gangadhar (Lead Architect)'
  },
  {
    id: 'health-mobile',
    title: 'PulseVital — Connected Patient Telehealth & Device Sync',
    client: 'HealthTech Innovations',
    category: 'Mobile Application Engineering',
    accent: '#3b82f6',
    description: 'A native iOS and Android application with offline-first synchronization, BLE medical sensor telemetry, and HIPAA-compliant biometric patient records.',
    impact: 'Deployed across 120,000+ patients with a 4.9-star App Store rating and instant offline data sync.',
    tags: ['React Native', 'Swift iOS Native', 'WatermelonDB', 'Bluetooth LE', 'HIPAA Secure'],
    leadConsultant: 'Srikanth (Mobile Lead)'
  },
  {
    id: 'agentic-supply',
    title: 'CognixSwarm — Autonomous Supply Chain Agent Fleet',
    client: 'SupplyChain Global Logistics',
    category: 'Enterprise AI Enablement',
    accent: '#a855f7',
    description: 'A network of 48 collaborating AI agents managing real-time inventory rebalancing, automated freight negotiations, and predictive anomaly triage.',
    impact: 'Reduced human dispatch interventions by 73% and accelerated shipment routing by 4x.',
    tags: ['Multi-Agent Swarm', 'LangGraph', 'FastAPI', 'Qdrant Vector DB', 'Claude API'],
    leadConsultant: 'Gangadhar & Srikanth (AI Architecture)'
  },
  {
    id: 'enterprise-saas',
    title: 'AuraCloud — Multi-Tenant B2B Workspace & Copilot',
    client: 'Enterprise Productivity Cloud',
    category: 'Full-Stack Web & AI Enablement',
    accent: '#10b981',
    description: 'Complete architecture redesign migrating a legacy monolithic system to modular Next.js micro-frontends with embedded generative AI assistants for enterprise teams.',
    impact: 'Shortened customer onboarding time by 60% and scaled from 10k to 250k daily active enterprise users.',
    tags: ['Next.js 15', 'TypeScript', 'Node.js Microservices', 'Tailored RAG', 'Kubernetes'],
    leadConsultant: 'Gangadhar & Srikanth'
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

