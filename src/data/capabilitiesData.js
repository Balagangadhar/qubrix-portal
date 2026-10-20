export const CAPABILITIES = [
  {
    id: 'connect',
    name: 'Connect',
    tagline: 'Universal API Integrations, Real-time Data Sync & Ecosystem Mesh',
    badge: 'Integration Fabric',
    accent: '#00f2fe',
    icon: 'Share2',
    description: 'Transform isolated software into unified digital ecosystems. We architect hardened integration layers connecting external APIs, spatial maps, legacy ERPs, enterprise CRMs, and partner networks with resilient retry queues and sub-millisecond edge latency.',
    subCapabilities: [
      { name: 'Enterprise ERP & CRM Connectors', detail: 'Bi-directional synchronization with SAP, Salesforce, HubSpot, and NetSuite without data drift.' },
      { name: 'Spatial & Geolocation Engines', detail: 'High-precision routing, geofencing, Google Maps / Mapbox SDKs, and fleet telemetry.' },
      { name: 'Social & Third-Party OAuth Mesh', detail: 'Unified identity federations across Google, Apple, Microsoft, GitHub, and custom SAML/OIDC.' },
      { name: 'Webhook Streaming & Event Bus', detail: 'Idempotent webhook consumers, Kafka event topics, and guaranteed at-least-once delivery.' }
    ],
    techStack: ['Kafka', 'RabbitMQ', 'GraphQL Federation', 'REST / gRPC', 'Mapbox SDK', 'AWS EventBridge'],
    architectureHighlight: 'Event-driven pub/sub architecture with dead-letter queue recovery and automatic circuit breakers.',
    demoMetrics: { throughput: '45,000 req/sec', latency: '12ms P99', uptime: '99.999%' }
  },
  {
    id: 'communicate',
    name: 'Communicate',
    tagline: 'Omnichannel Chat, WebRTC Video, Low-Latency Voice & Notifications',
    badge: 'Real-Time Streaming',
    accent: '#3b82f6',
    icon: 'MessageSquare',
    description: 'Deliver synchronous human-to-human and AI-to-human interactions. From ultra-low latency WebRTC audio/video calls to high-concurrency WebSocket messaging channels and intelligent omnichannel push notifications.',
    subCapabilities: [
      { name: 'In-App WebSocket Chat & Presence', detail: 'Sub-50ms message delivery, typing indicators, rich reactions, and end-to-end encryption.' },
      { name: 'WebRTC Video & Spatial Audio Rooms', detail: 'P2P and SFU video conferencing with adaptive bitrate, screen sharing, and noise suppression.' },
      { name: 'Omnichannel Push & SMS Gateway', detail: 'Coordinated broadcast pipelines across Apple APNS, Google FCM, Twilio SMS, and SendGrid email.' },
      { name: 'Real-Time In-App Alert System', detail: 'Contextual toast notification queues with offline caching and background reconciliation.' }
    ],
    techStack: ['WebSockets', 'WebRTC (LiveKit/Agora)', 'Apple APNS / Firebase FCM', 'Twilio API', 'Redis Pub/Sub'],
    architectureHighlight: 'Selective Forwarding Unit (SFU) audio/video mesh with dynamic network degradation handling.',
    demoMetrics: { streamLatency: '42ms WebRTC', concurrentSockets: '250,000+', deliveryRate: '99.98%' }
  },
  {
    id: 'transact',
    name: 'Transact',
    tagline: 'Frictionless Payments, Subscriptions, Ledger Invoicing & Bookings',
    badge: 'FinTech Grade',
    accent: '#10b981',
    icon: 'CreditCard',
    description: 'Institutional-grade commerce and monetisation architectures. We engineer PCI-DSS Level 1 compliant multi-currency payment gateways, complex subscription lifecycle managers, automated escrow, and tax calculation engines.',
    subCapabilities: [
      { name: 'Global Payment Orchestration', detail: 'Multi-provider routing (Stripe, Razorpay, Adyen, Apple Pay, Google Pay) with zero failover.' },
      { name: 'Usage-Based & Recurring Subscriptions', detail: 'Tiered pricing, metered billing, prorations, dunning management, and churn prevention.' },
      { name: 'Immutable Audit Ledger & Invoicing', detail: 'Double-entry cryptographic ledger tracking with automatic PDF receipt & tax generation.' },
      { name: 'Dynamic Calendar & Resource Booking', detail: 'Double-booking prevention with distributed Redis locks, timezone normalization, and automated calendars.' }
    ],
    techStack: ['Stripe / Adyen APIs', 'PostgreSQL Double-Entry', 'Redis Distributed Locks', 'Plaid / OpenBanking', 'PDFKit'],
    architectureHighlight: 'Strict idempotency keys on every transaction with distributed two-phase commit verification.',
    demoMetrics: { settlementSpeed: '<600ms', failureRecovery: '100% Idempotent', pciCompliance: 'Level 1 Ready' }
  },
  {
    id: 'understand',
    name: 'Understand',
    tagline: 'Semantic Search, Deep Analytics, Multimodal OCR & Perception',
    badge: 'Data Intelligence',
    accent: '#06b6d4',
    icon: 'Search',
    description: 'Transform raw unstructured business data into instantly searchable, actionable intelligence. We deploy dense semantic vector search, real-time analytics pipelines, and multimodal document vision engines.',
    subCapabilities: [
      { name: 'Hybrid Sparse-Dense Vector Search', detail: 'Natural language search combining BM25 keyword matching with high-dimensional vector embeddings.' },
      { name: 'Real-Time Telemetry & Funnel Analytics', detail: 'High-throughput event ingestion with sub-second dashboard visualization and cohort analysis.' },
      { name: 'Multimodal OCR & Document Parsing', detail: 'Automated receipt, contract, and invoice processing with bounding-box coordinate extraction.' },
      { name: 'Image Recognition & Visual Moderation', detail: 'Edge-accelerated object classification, brand safety filtering, and facial feature recognition.' }
    ],
    techStack: ['Qdrant / Milvus Vector DB', 'ClickHouse Analytics', 'Tesseract / AWS Textract', 'OpenSearch', 'PyTorch / OpenCV'],
    architectureHighlight: 'Hierarchical Navigable Small World (HNSW) vector indexing with sub-15ms semantic retrieval.',
    demoMetrics: { searchLatency: '8.4ms', ocrAccuracy: '99.4%', ingestionVolume: '10M events/day' }
  },
  {
    id: 'intelligence',
    name: 'Intelligence',
    tagline: 'Autonomous Multi-Agent Swarms, Custom RAG & Workflow Automation',
    badge: 'Frontier AI',
    accent: '#a855f7',
    icon: 'Cpu',
    description: 'Move far beyond rudimentary prompt chatbots. We design autonomous multi-agent cognitive networks using LangGraph, enterprise knowledge graphs (GraphRAG), self-hosted private LLMs, and deterministic execution guardrails.',
    subCapabilities: [
      { name: 'Multi-Agent Collaborative Swarms', detail: 'Hierarchical agent teams (Architect, Researcher, Coder, Verifier) that divide and solve complex tasks.' },
      { name: 'Enterprise Domain GraphRAG', detail: 'Knowledge graph retrieval grounding LLM generation in verified internal enterprise documentation.' },
      { name: 'Self-Hosted Private LLM Deployments', detail: 'vLLM and Ollama containerized on isolated GPUs to guarantee 100% data confidentiality.' },
      { name: 'Deterministic Safety Guardrails', detail: 'Continuous semantic evaluation pipelines preventing hallucination, prompt injection, and data leakage.' }
    ],
    techStack: ['LangGraph', 'Python / FastAPI', 'vLLM / Ollama', 'Claude 3.7 / GPT-4o APIs', 'LlamaIndex', 'Guardrails AI'],
    architectureHighlight: 'Stateful cyclic agent execution graph with checkpointed rollback and human-in-the-loop approvals.',
    demoMetrics: { workflowAutomation: '74% Manual Reduction', reasoningSpeed: '2.1s per multi-step query', privacyLeakage: '0.0%' }
  },
  {
    id: 'immerse',
    name: 'Immerse',
    tagline: 'Interactive 3D WebGL, Spatial Canvas, WebXR & Digital Twins',
    badge: 'Spatial Experience',
    accent: '#ec4899',
    icon: 'Box',
    description: 'Elevate digital products into breathtaking spatial dimensions. We build 60fps 3D graphics in the browser with Three.js, WebGL shaders, interactive product configurators, and WebXR digital twin visualizations.',
    subCapabilities: [
      { name: 'Interactive 3D Product Configurators', detail: 'Realistic materials (PBR), dynamic lighting, custom camera animations, and interactive hotspots.' },
      { name: 'Industrial Digital Twin Visualizers', detail: 'Real-time telemetry overlays on 3D building and machine models with live sensor feeds.' },
      { name: 'WebXR Augmented Reality (WebAR)', detail: 'Zero-install mobile AR viewports projecting 3D digital objects directly onto real-world surfaces.' },
      { name: 'Custom GLSL Shaders & Physics Canvas', detail: 'Fluid simulations, particle systems, specular reflections, and reactive mouse kinematics.' }
    ],
    techStack: ['Three.js', 'WebGL 2.0', 'React Three Fiber', 'GLSL Shaders', 'WebXR Device API', 'WebGPU Ready'],
    architectureHighlight: 'Hardware-accelerated rendering loop with geometry instancing and dynamic Level of Detail (LOD).',
    demoMetrics: { frameRate: '60 FPS Solid', loadTime: '<1.2s Compressed', shaderPasses: 'Sub-5ms GPU Cost' }
  },
  {
    id: 'secure',
    name: 'Secure',
    tagline: 'Zero-Trust Perimeter, Biometrics, RBAC & Fraud Prevention',
    badge: 'Enterprise Security',
    accent: '#f59e0b',
    icon: 'Shield',
    description: 'Bank-grade defense mechanisms protecting every digital asset. We engineer multi-factor biometric authentication, granular Role-Based Access Control (RBAC), device fingerprinting, and real-time fraud anomaly scoring.',
    subCapabilities: [
      { name: 'Biometric & Passwordless Auth', detail: 'WebAuthn / Passkeys integration with FaceID, TouchID, and YubiKey hardware tokens.' },
      { name: 'Fine-Grained RBAC & Policy Engine', detail: 'Attribute-based access control (ABAC) with cryptographic JWT claims and instant token revocation.' },
      { name: 'Behavioral Fraud & Bot Detection', detail: 'Device entropy scoring, mouse trajectory analysis, IP velocity monitoring, and automated CAPTCHAs.' },
      { name: 'Zero-Trust Network Perimeter & E2EE', detail: 'mTLS microservice communication, AES-256 database encryption at rest, and secret rotation.' }
    ],
    techStack: ['WebAuthn / Passkeys', 'OIDC / OAuth 2.1', 'Opa (Open Policy Agent)', 'Vault (HashiCorp)', 'Cloudflare Zero Trust'],
    architectureHighlight: 'Cryptographically verified hardware-backed authentication with automated session anomaly termination.',
    demoMetrics: { authLatency: '<90ms', falsePositiveFraud: '<0.01%', encryptionStandard: 'AES-256-GCM / mTLS' }
  },
  {
    id: 'operate',
    name: 'Operate',
    tagline: 'Distributed Cloud Storage, Reactive Workflows & Cron Orchestration',
    badge: 'Resilient Ops',
    accent: '#8b5cf6',
    icon: 'Activity',
    description: 'The mission-critical backbone keeping your application executing flawlessly 24/7. We construct multi-part S3 cloud storage pipelines, reactive DAG workflows, real-time sync engines, and distributed job schedulers.',
    subCapabilities: [
      { name: 'Resilient Multi-Part Cloud Storage', detail: 'Direct-to-S3 pre-signed uploads with automatic thumbnail generation and chunked resumability.' },
      { name: 'Distributed Workflow Engines (DAGs)', detail: 'Multi-step asynchronous task execution with automatic retries, exponential backoff, and timeouts.' },
      { name: 'High-Concurrency Cron Schedulers', detail: 'Distributed job dispatch across serverless fleets with zero double-execution risk.' },
      { name: 'Real-Time Edge Health & Observability', detail: 'OpenTelemetry distributed tracing, Prometheus metrics scraping, and automated anomaly alerting.' }
    ],
    techStack: ['AWS S3 / Cloudflare R2', 'Temporal / BullMQ', 'Redis Distributed Lock', 'OpenTelemetry', 'Kubernetes'],
    architectureHighlight: 'Stateful workflow persistence ensuring zero job loss during server recycles or infrastructure failovers.',
    demoMetrics: { taskThroughput: '120k jobs/min', fileUploadSpeed: 'Direct Pre-Signed Edge', jobLossRate: '0.000%' }
  }
];

export const CAPABILITY_PRESETS = [
  {
    id: 'enterprise-saas',
    name: 'Enterprise B2B SaaS Platform',
    targetPlatform: 'Web Application',
    recommendedCapabilities: ['connect', 'transact', 'secure', 'operate', 'intelligence'],
    summary: 'A secure, multi-tenant web application equipped with enterprise SSO, subscription monetization, automated background jobs, and embedded AI copilots.'
  },
  {
    id: 'fintech-mobile',
    name: 'High-Scale FinTech Mobile App',
    targetPlatform: 'Mobile (iOS & Android)',
    recommendedCapabilities: ['transact', 'secure', 'communicate', 'connect', 'understand'],
    summary: 'A sub-millisecond mobile financial portal with biometric login, push transactions, fraud detection, and offline-first state synchronization.'
  },
  {
    id: 'ai-native-suite',
    name: 'Autonomous AI Enterprise Suite',
    targetPlatform: 'Web + AI Backend',
    recommendedCapabilities: ['intelligence', 'understand', 'operate', 'communicate', 'secure'],
    summary: 'An AI-first automation platform featuring multi-agent swarms, hybrid GraphRAG document understanding, and private containerized LLMs.'
  },
  {
    id: 'immersive-commerce',
    name: 'Next-Gen 3D Spatial Commerce',
    targetPlatform: 'Web & Mobile WebXR',
    recommendedCapabilities: ['immerse', 'transact', 'communicate', 'understand', 'connect'],
    summary: 'A spatial shopping portal featuring interactive 3D WebGL product configurators, instant checkout, and real-time live video shopping assistance.'
  },
  {
    id: 'on-demand-logistics',
    name: 'On-Demand Logistics & Fleet',
    targetPlatform: 'Mobile + Web Dispatch',
    recommendedCapabilities: ['connect', 'communicate', 'transact', 'operate', 'understand'],
    summary: 'Precision dispatch fleet with real-time GPS telemetry, driver push alerts, instant payouts, and dynamic route optimization.'
  },
  {
    id: 'telehealth-portal',
    name: 'HIPAA Telehealth & Patient Care',
    targetPlatform: 'Web & Mobile App',
    recommendedCapabilities: ['communicate', 'secure', 'operate', 'understand', 'connect'],
    summary: 'Encrypted WebRTC telehealth video, biometric health vault, automated prescription workflows, and EHR system integration.'
  },
  {
    id: 'iot-edge-mesh',
    name: 'IoT Telemetry & Edge Stream',
    targetPlatform: 'Edge + Cloud Microservices',
    recommendedCapabilities: ['operate', 'understand', 'secure', 'connect'],
    summary: 'Sub-second sensor ingestion, edge anomaly detection, distributed time-series indexing, and zero-trust device mutual TLS.'
  },
  {
    id: 'event-ticketing',
    name: 'High-Throughput Ticket Ledger',
    targetPlatform: 'Cloud Native Web & Mobile',
    recommendedCapabilities: ['transact', 'secure', 'operate', 'communicate'],
    summary: 'Flash-sale queue infrastructure with distributed atomic inventory reservations, fraud scoring, and QR ticket issuance.'
  }
];
