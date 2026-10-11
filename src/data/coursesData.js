export const COURSES = [
  {
    id: 'agentic-ai',
    title: 'Agentic AI Engineering',
    tagline: 'Architect Autonomous Reasoning Agents, Multi-Agent Swarms & Real-World Production RAG',
    category: 'AI & Automation',
    level: 'Advanced',
    duration: '10 Weeks',
    format: 'Cohort-based + Live Labs',
    featured: true,
    accent: '#00f2fe',
    badge: 'High Demand',
    instructorId: 'bala',
    summary: 'Step beyond prompt engineering into production-ready autonomous agent loops, tool-calling graphs, self-correcting cognitive architectures, and scalable orchestration frameworks.',
    outcomes: [
      'Build autonomous multi-agent networks with LangGraph and AutoGen',
      'Deploy production-ready semantic tool routing and hybrid vector search (RAG)',
      'Design deterministic guardrails, evaluation pipelines, and observability tracing',
      'Deploy enterprise agent fleets on cloud serverless infrastructure'
    ],
    modules: [
      {
        week: 'Module 1-2',
        title: 'Cognitive Loops & Tool Use Fundamentals',
        topics: ['ReAct prompting patterns', 'Function calling specifications', 'Structured output validation', 'State persistence & memory storage']
      },
      {
        week: 'Module 3-5',
        title: 'Multi-Agent Orchestration & Swarm Intelligence',
        topics: ['Hierarchical supervisors & agent handoffs', 'LangGraph cyclic workflows', 'Conflict resolution in multi-agent environments', 'Human-in-the-loop validation']
      },
      {
        week: 'Module 6-8',
        title: 'Enterprise Knowledge Graphs & Advanced RAG',
        topics: ['Hybrid sparse/dense vector search', 'Chunking strategies & re-ranking models', 'Context compression', 'GraphRAG implementations']
      },
      {
        week: 'Module 9-10',
        title: 'Agent Observability, Safety & Production Deployment',
        topics: ['Evals with synthetic datasets', 'Latency & token optimization', 'Security & prompt injection mitigation', 'Docker & Kubernetes deployment']
      }
    ],
    prerequisites: ['Proficiency in Python or Modern JavaScript/TypeScript', 'Foundational understanding of APIs & LLM concepts'],
    techStack: ['Python', 'LangGraph', 'TypeScript', 'Ollama', 'FastAPI', 'Qdrant', 'OpenAI/Anthropic APIs']
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Information & Computing',
    tagline: 'Master Qubits, Superposition, Entanglement, Quantum Logic Gates & Practical Algorithms',
    category: 'Quantum Tech',
    level: 'Intermediate to Advanced',
    duration: '8 Weeks',
    format: 'Hands-on Quantum Labs',
    featured: true,
    accent: '#7928ca',
    badge: 'Frontier Tech',
    instructorId: 'srikanth',
    summary: 'Demystify quantum mechanics through computation. Learn linear algebra essentials, manipulate qubits on the Bloch sphere, write circuits with Qiskit, and implement Grover and Shor algorithms.',
    outcomes: [
      'Model single and multi-qubit states using Dirac bra-ket notation and density matrices',
      'Simulate quantum superposition, phase kickback, and Bell state entanglement',
      'Construct quantum circuits and run on IBM Quantum hardware simulators',
      'Understand quantum cryptography (BB84 protocol) and Post-Quantum Cryptography (PQC)'
    ],
    modules: [
      {
        week: 'Module 1-2',
        title: 'Quantum Foundations & The Qubit',
        topics: ['Complex vector spaces & bra-ket notation', 'Bloch sphere geometry', 'State measurement postulates', 'Single-qubit gates (H, X, Y, Z, S, T)']
      },
      {
        week: 'Module 3-4',
        title: 'Multi-Qubit Systems & Entanglement',
        topics: ['Tensor products & composite Hilbert spaces', 'CNOT and Toffoli gates', 'Bell states & Einstein-Podolsky-Rosen paradox', 'Quantum teleportation protocol']
      },
      {
        week: 'Module 5-6',
        title: 'Quantum Algorithms & Speedups',
        topics: ['Deutsch-Jozsa algorithm', 'Quantum Phase Estimation (QPE)', "Grover's search algorithm & amplitude amplification", "Shor's factoring fundamentals"]
      },
      {
        week: 'Module 7-8',
        title: 'Qiskit Implementation & Quantum Hardware',
        topics: ['Writing Python circuits in Qiskit', 'Decoherence & Quantum Error Correction basics', 'Variational Quantum Eigensolver (VQE)', 'NISQ era applications']
      }
    ],
    prerequisites: ['High-school linear algebra (vectors, matrices)', 'Basic Python programming'],
    techStack: ['Python', 'Qiskit', 'IBM Quantum Experience', 'NumPy', 'Jupyter', 'Cirq']
  },
  {
    id: 'full-stack-dev',
    title: 'Next-Gen Full Stack Development',
    tagline: 'Modern React 19, Next.js App Router, Distributed Systems & Cloud-Native Engineering',
    category: 'Full Stack',
    level: 'Comprehensive',
    duration: '12 Weeks',
    format: 'Project-Driven BootCamp',
    featured: true,
    accent: '#3b82f6',
    badge: 'Industry Standard',
    instructorId: 'bala',
    summary: 'Build high-performance, fault-tolerant web applications from zero to enterprise scale. Master modern frontend architectures, server actions, event-driven backends, and distributed caching.',
    outcomes: [
      'Ship scalable full-stack web applications with React 19, Next.js, and TypeScript',
      'Design robust REST & GraphQL APIs with PostgreSQL and Prisma/Drizzle ORM',
      'Implement real-time features using WebSockets and Redis pub/sub streams',
      'Master CI/CD pipelines, Docker containerization, and AWS serverless deployment'
    ],
    modules: [
      {
        week: 'Module 1-3',
        title: 'Modern Frontend Engineering & State Architecture',
        topics: ['React 19 Server Components', 'TypeScript deep dive', 'Tailwind & modern CSS architecture', 'State management patterns (Zustand, TanStack Query)']
      },
      {
        week: 'Module 4-6',
        title: 'Scalable Backend Services & Database Design',
        topics: ['Node.js & Go microservices', 'Relational data modeling with PostgreSQL', 'Indexing, query optimization & transaction isolation', 'Authentication with OAuth 2.0 & JWT']
      },
      {
        week: 'Module 7-9',
        title: 'Real-Time Streaming & Message Queues',
        topics: ['WebSockets & Server-Sent Events', 'Redis caching strategies', 'Event-driven message queues (RabbitMQ/Kafka)', 'Rate limiting & API security']
      },
      {
        week: 'Module 10-12',
        title: 'Cloud DevOps, Observability & Capstone Launch',
        topics: ['Dockerizing full-stack apps', 'Automated GitHub Actions CI/CD', 'Prometheus & OpenTelemetry monitoring', 'Live enterprise capstone defense']
      }
    ],
    prerequisites: ['Foundational HTML/CSS and basic JavaScript knowledge'],
    techStack: ['TypeScript', 'React 19', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS']
  },
  {
    id: 'web-mobile-design',
    title: 'Web & Mobile Spatial UI/UX Design',
    tagline: 'Design Systems, Micro-Interactions, Spatial Interfaces & Figma to Production Code',
    category: 'Design Systems',
    level: 'All Levels',
    duration: '8 Weeks',
    format: 'Studio Mentorship',
    featured: false,
    accent: '#ec4899',
    badge: 'Creative Tech',
    instructorId: 'srikanth',
    summary: 'Bridge the chasm between visionary digital design and pixel-perfect technical implementation. Learn design systems tokenization, 3D spatial web assets, dark mode ergonomics, and fluid motion design.',
    outcomes: [
      'Construct enterprise-ready Figma design systems with automated variables',
      'Prototype micro-interactions and silky smooth 60fps web transitions',
      'Design accessible, WCAG AAA compliant dark and light mode digital products',
      'Export and translate design tokens directly into production code systems'
    ],
    modules: [
      {
        week: 'Module 1-2',
        title: 'Modern Typography, Color Science & Visual Hierarchy',
        topics: ['Optical balance & typography scales', 'Dark mode luminance science & accent contrast', 'Information density principles', 'Spatial grids']
      },
      {
        week: 'Module 3-4',
        title: 'Design System Engineering in Figma',
        topics: ['Component variants & slot architecture', 'Design tokens (spacing, typography, elevation)', 'Auto-layout mastery', 'Component documentation']
      },
      {
        week: 'Module 5-6',
        title: 'Motion Design & Micro-Animations',
        topics: ['Physics-based spring curves', 'Choreographing page transitions', 'Interactive hover states & cursor reactivity', 'Framer Motion specs']
      },
      {
        week: 'Module 7-8',
        title: 'Mobile App Ergonomics & Hand-Off to Engineering',
        topics: ['iOS Human Interface & Material 3 guidelines', 'Haptic feedback design', 'Interactive component specs', 'Design-to-code testing']
      }
    ],
    prerequisites: ['Passionate interest in visual design, no prior coding required'],
    techStack: ['Figma', 'Framer', 'Spline 3D', 'CSS Animations', 'Design Tokens', 'Storybook']
  }
];
