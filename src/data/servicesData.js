export const SERVICES = [
  {
    id: 'fullstack-arch',
    title: 'Full-Stack & Cloud Architecture',
    tagline: 'High-Throughput, Resilient Digital Platforms Built for Enterprise Scale',
    icon: 'Layers',
    accent: '#00f2fe',
    description: 'We engineer end-to-end web applications with modern micro-frontends, event-driven backends, and multi-region cloud resilience that effortlessly handles millions of transactions.',
    features: [
      'Next.js 15 & React 19 micro-frontend architectures',
      'High-throughput distributed APIs in Go, Node.js & Rust',
      'Multi-cloud Kubernetes deployments with zero-downtime CI/CD',
      'Real-time streaming pipelines with Redis, Kafka & WebSockets'
    ],
    deliverables: ['Production Cloud Architecture', 'High-Performance APIs', 'Comprehensive Test Coverage', 'Observability Dashboard']
  },
  {
    id: 'agentic-ai-dev',
    title: 'Agentic AI & Custom LLM Systems',
    tagline: 'Autonomous AI Agents that Reason, Decide, and Execute Workflows',
    icon: 'Cpu',
    accent: '#7928ca',
    description: 'Move past static chatbots. We design multi-agent cognitive systems capable of executing complex multi-step enterprise workflows with deterministic guardrails and hybrid knowledge retrieval.',
    features: [
      'Autonomous multi-agent orchestration (LangGraph, Swarm)',
      'Enterprise-grade hybrid vector search & GraphRAG',
      'Deterministic safety guardrails & automated evaluation',
      'Self-hosted local LLM pipelines for data privacy & compliance'
    ],
    deliverables: ['Custom AI Agents', 'Vector Knowledge Bases', 'Integration APIs', 'Security & Evaluation Reports']
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
      'Fluid 60fps micro-animations and interactive data canvas',
      'High-fidelity interactive prototypes tested with real users',
      'WCAG AAA accessible layouts optimized for mobile and desktop'
    ],
    deliverables: ['Figma Design System', 'Component Code Tokens', 'Interactive Prototype', 'UX Audit & Strategy']
  },
  {
    id: 'mobile-engineering',
    title: 'Mobile App Engineering',
    tagline: 'Native Performance, Fluid Gestures, Cross-Platform Efficiency',
    icon: 'Smartphone',
    accent: '#3b82f6',
    description: 'We construct beautiful mobile experiences for iOS and Android with buttery smooth framerates, offline-first architectures, biometric security, and native device hardware utilization.',
    features: [
      'React Native & Flutter high-performance multi-platform apps',
      'Offline-first synchronization with SQLite & WatermelonDB',
      'Biometric authentication and hardware-accelerated graphics',
      'App Store & Play Store publication and automated OTA updates'
    ],
    deliverables: ['iOS & Android Builds', 'App Store Submissions', 'Push Notification Engine', 'Analytics Integration']
  },
  {
    id: 'quantum-rnd',
    title: 'Quantum Computing Advisory & R&D',
    tagline: 'Post-Quantum Cryptography & Quantum Algorithm Prototyping',
    icon: 'Atom',
    accent: '#10b981',
    description: 'Prepare your enterprise for the quantum advantage. We assist forward-looking enterprises in benchmarking quantum algorithms, testing Qiskit prototypes, and migrating towards post-quantum cryptographic security.',
    features: [
      'Quantum algorithm simulation & feasibility audits',
      'Post-Quantum Cryptography (PQC) readiness evaluations',
      'Quantum Optimization modeling for logistics and finance',
      'Executive quantum literacy and engineering advisory'
    ],
    deliverables: ['Feasibility Analysis', 'Proof-of-Concept Circuits', 'PQC Migration Strategy', 'Executive Briefing']
  }
];

export const PORTFOLIO = [
  {
    id: 'nexus-vault',
    title: 'NexusVault — Post-Quantum FinTech Engine',
    client: 'Global FinTech Consortium',
    category: 'Full Stack & Security',
    accent: '#00f2fe',
    description: 'An institutional asset transaction engine featuring lattice-based cryptography, sub-millisecond execution times, and a futuristic dark spatial trading terminal.',
    impact: 'Processes ₹3,200 Cr+ in daily transaction simulations with zero latency degradation.',
    tags: ['React 19', 'Go Microservices', 'Post-Quantum Cryptography', 'WebSocket Grid']
  },
  {
    id: 'cognix-swarm',
    title: 'CognixSwarm — Autonomous Logistics Fleet',
    client: 'SupplyChain HyperScale',
    category: 'Agentic AI',
    accent: '#7928ca',
    description: 'A network of 48 collaborating AI agents managing real-time inventory rebalancing, automated freight negotiations, and predictive anomaly triage.',
    impact: 'Reduced human dispatch interventions by 73% within 90 days of deployment.',
    tags: ['Multi-Agent Swarm', 'LangGraph', 'FastAPI', 'Distributed Graph DB']
  },
  {
    id: 'qubit-cloud',
    title: 'QubitLab — Cloud Quantum Circuit Visualizer',
    client: 'Quantum Research Alliance',
    category: 'Quantum Tech & UI',
    accent: '#10b981',
    description: 'Interactive web-based Bloch sphere simulator and quantum circuit builder compiling visual logic directly into OpenQASM 3.0 code.',
    impact: 'Adopted by 14,000+ quantum researchers and academic institutions worldwide.',
    tags: ['WebGL Canvas', 'Qiskit Bridge', 'Next.js', 'Vector Mathematics']
  },
  {
    id: 'aurora-pay',
    title: 'AuroraPay — Biometric Spatial Mobile Wallet',
    client: 'NeoBank Innovations',
    category: 'Mobile & UX',
    accent: '#ec4899',
    description: 'Sleek, gesture-driven mobile banking experience designed with futuristic dark glassmorphism, contextual micro-haptics, and instant cross-border settlement.',
    impact: '4.9/5 star App Store rating with over 650,000 active monthly transacting users.',
    tags: ['React Native', 'Figma Design System', 'Zero-Knowledge Proofs', 'iOS/Android']
  }
];
