export const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, label: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, label: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, label: 'GBP (£)' },
  INR: { symbol: '₹', rate: 83.5, label: 'INR (₹)' }
};

export const PRICING_CATEGORIES = [
  { id: 'hosting', name: 'Domain & Cloud Edge', icon: 'Globe', accent: '#00f2fe' },
  { id: 'database', name: 'Database & Storage', icon: 'Database', accent: '#3b82f6' },
  { id: 'communication', name: 'Communication & Alerts', icon: 'MessageSquare', accent: '#10b981' },
  { id: 'location', name: 'Maps & Geolocation', icon: 'MapPin', accent: '#06b6d4' },
  { id: 'security', name: 'Auth & Zero-Trust Security', icon: 'Shield', accent: '#f59e0b' },
  { id: 'payments', name: 'Payments & Subscriptions', icon: 'CreditCard', accent: '#ec4899' },
  { id: 'ai', name: 'AI & Vector Services', icon: 'Cpu', accent: '#a855f7' },
  { id: 'mobile', name: 'App Stores & Mobile CI/CD', icon: 'Smartphone', accent: '#3b82f6' },
  { id: 'analytics', name: 'Analytics & Observability', icon: 'Activity', accent: '#8b5cf6' }
];

export const COMMONLY_USED_SERVICES = [
  // --- 1. Domain & Cloud Edge ---
  {
    id: 'domain_dns',
    categoryId: 'hosting',
    name: 'Custom Domain & Anycast DNS',
    provider: 'Cloudflare / Namecheap',
    description: 'Custom top-level domain (.com, .io, .ai) with sub-millisecond Anycast DNS routing and automatic DNSSEC security.',
    oneTimeFeeUSD: 25,
    monthlyFeeUSD: 2, // ~$24/yr
    essential: true,
    tag: 'Fundamental',
    benefit: 'Brand credibility & instant global DNS resolution'
  },
  {
    id: 'cdn_waf',
    categoryId: 'hosting',
    name: 'Cloudflare Pro Edge CDN & WAF',
    provider: 'Cloudflare Enterprise/Pro',
    description: 'Global 300+ edge city cache, Layer 7 DDoS mitigation, Web Application Firewall, and image optimization.',
    oneTimeFeeUSD: 150,
    monthlyFeeUSD: 25,
    essential: true,
    tag: 'Speed & Security',
    benefit: 'Sub-30ms global page loads and DDoS immunity'
  },
  {
    id: 'cloud_hosting',
    categoryId: 'hosting',
    name: 'High-Concurrency Cloud Hosting',
    provider: 'AWS ECS / Vercel Pro',
    description: 'Serverless SSR compute, multi-region container scaling, automatic SSL certificates, and zero-downtime deployment pipelines.',
    oneTimeFeeUSD: 450,
    monthlyFeeUSD: 40,
    essential: true,
    tag: 'Production Core',
    benefit: 'Auto-scales effortlessly from 10 to 100k+ concurrent users'
  },

  // --- 2. Database & Storage ---
  {
    id: 'managed_db',
    categoryId: 'database',
    name: 'Managed PostgreSQL Database',
    provider: 'Supabase / AWS RDS',
    description: 'High-availability relational database with automated daily point-in-time recovery, connection pooling, and SSL encryption.',
    oneTimeFeeUSD: 400,
    monthlyFeeUSD: 35,
    essential: true,
    tag: 'Data Persistence',
    benefit: 'ACID compliance and zero data loss guarantee'
  },
  {
    id: 'object_storage',
    categoryId: 'database',
    name: 'Cloud Object Storage (S3 / R2)',
    provider: 'Cloudflare R2 / AWS S3',
    description: 'Scalable media and document storage with pre-signed upload URLs, CDN acceleration, and zero egress transfer fees.',
    oneTimeFeeUSD: 250,
    monthlyFeeUSD: 20,
    essential: true,
    tag: 'Media & Files',
    benefit: 'Stores millions of user photos, PDFs, and assets securely'
  },
  {
    id: 'redis_cache',
    categoryId: 'database',
    name: 'In-Memory Redis Cache & Sessions',
    provider: 'Upstash / AWS ElastiCache',
    description: 'Sub-millisecond latency cache for user sessions, distributed rate limiting, and real-time leaderboard states.',
    oneTimeFeeUSD: 300,
    monthlyFeeUSD: 25,
    essential: false,
    tag: 'Ultra-Low Latency',
    benefit: 'Reduces database load by 85% and speeds up API responses'
  },

  // --- 3. Communication & Alerts ---
  {
    id: 'email_service',
    categoryId: 'communication',
    name: 'Transactional & Marketing Email',
    provider: 'Resend / SendGrid',
    description: 'DKIM, SPF & DMARC verified custom domain email delivery for magic links, order confirmations, and notifications.',
    oneTimeFeeUSD: 250,
    monthlyFeeUSD: 20,
    essential: true,
    tag: 'User Retention',
    benefit: '99.7% inbox delivery rate with spam-trap avoidance'
  },
  {
    id: 'sms_otp',
    categoryId: 'communication',
    name: 'SMS OTP & WhatsApp Gateway',
    provider: 'Twilio / MessageBird',
    description: 'Carrier-grade SMS verification codes, 2-factor authentication, and automated WhatsApp transactional updates.',
    oneTimeFeeUSD: 350,
    monthlyFeeUSD: 45,
    essential: false,
    tag: '2FA & Mobile',
    benefit: 'Instant phone verification and high-open rate user alerts'
  },
  {
    id: 'push_notifications',
    categoryId: 'communication',
    name: 'Cross-Platform Push Notifications',
    provider: 'Apple APNS + Firebase FCM',
    description: 'Interactive push alerts on iOS, Android, and Web with rich media, deep links, badge counts, and user segment targeting.',
    oneTimeFeeUSD: 350,
    monthlyFeeUSD: 15,
    essential: false,
    tag: 'Mobile Engagement',
    benefit: 'Brings users back to your app with targeted alerts'
  },

  // --- 4. Maps & Geolocation ---
  {
    id: 'maps_api',
    categoryId: 'location',
    name: 'Interactive Maps & Geocoding API',
    provider: 'Google Maps / Mapbox SDK',
    description: 'Interactive map canvas, reverse geocoding, address autocomplete widget, route calculation, and geofencing.',
    oneTimeFeeUSD: 500,
    monthlyFeeUSD: 40,
    essential: false,
    tag: 'Spatial & Delivery',
    benefit: 'Precision mapping for logistics, stores, and delivery tracking'
  },

  // --- 5. Auth & Zero-Trust Security ---
  {
    id: 'auth_sso',
    categoryId: 'security',
    name: 'Enterprise Auth & Social SSO',
    provider: 'Clerk / Auth0 / Supabase Auth',
    description: 'Turnkey user authentication with Google, Apple, Microsoft, GitHub, email magic links, and JWT token rotation.',
    oneTimeFeeUSD: 450,
    monthlyFeeUSD: 30,
    essential: true,
    tag: 'Security & Onboarding',
    benefit: 'Reduces signup friction and secures user credential vaults'
  },
  {
    id: 'biometric_security',
    categoryId: 'security',
    name: 'Biometric WebAuthn & FaceID Enclave',
    provider: 'Native iOS/Android + WebAuthn',
    description: 'Hardware-backed biometric authentication (FaceID, TouchID, Windows Hello) and cryptographic passkey support.',
    oneTimeFeeUSD: 550,
    monthlyFeeUSD: 0, // Native client hardware
    essential: false,
    tag: 'Zero-Password UX',
    benefit: '1-touch instant login with zero password phishing vulnerabilities'
  },
  {
    id: 'cloud_backups',
    categoryId: 'security',
    name: 'Automated Multi-Region Backups',
    provider: 'AWS Glacier / Cloudflare',
    description: 'Automated daily encrypted database & file snapshots stored across secondary geographic regions with 30-day retention.',
    oneTimeFeeUSD: 250,
    monthlyFeeUSD: 15,
    essential: true,
    tag: 'Disaster Recovery',
    benefit: 'RPO < 24hrs and RTO < 1hr for business continuity'
  },

  // --- 6. Payments & Subscriptions ---
  {
    id: 'stripe_payments',
    categoryId: 'payments',
    name: 'Global Payment Gateway & Checkout',
    provider: 'Stripe / Razorpay',
    description: 'PCI-DSS Level 1 compliant checkout supporting Credit Cards, Apple Pay, Google Pay, UPI, SEPA, and 135+ global currencies.',
    oneTimeFeeUSD: 550,
    monthlyFeeUSD: 0, // Pay-as-you-transact (~2.9% + 30c)
    essential: false,
    tag: 'Monetization Core',
    benefit: 'Frictionless checkout that maximizes checkout conversion rate'
  },
  {
    id: 'subscription_engine',
    categoryId: 'payments',
    name: 'Recurring Subscriptions & Invoicing',
    provider: 'Stripe Billing / Paddle',
    description: 'Tiered monthly/annual recurring billing, metered usage, automatic tax calculation, customer portal, and dunning.',
    oneTimeFeeUSD: 500,
    monthlyFeeUSD: 35,
    essential: false,
    tag: 'SaaS Revenue',
    benefit: 'Automates customer billing, upgrades, and tax compliance'
  },

  // --- 7. AI & Vector Services ---
  {
    id: 'llm_tokens',
    categoryId: 'ai',
    name: 'Generative AI & LLM Inference',
    provider: 'OpenAI GPT-4o / Claude 3.7 Sonnet',
    description: 'Cloud LLM inference tokens, semantic embeddings, custom system prompts, and multi-turn conversational reasoning.',
    oneTimeFeeUSD: 750,
    monthlyFeeUSD: 60,
    essential: false,
    tag: 'Autonomous AI',
    benefit: 'Supercharges your product with generative AI capabilities'
  },
  {
    id: 'vector_db',
    categoryId: 'ai',
    name: 'Semantic Vector Knowledge Base',
    provider: 'Qdrant Cloud / Pinecone',
    description: 'High-dimensional vector indexing for hybrid retrieval-augmented generation (RAG) and instant document intelligence.',
    oneTimeFeeUSD: 550,
    monthlyFeeUSD: 45,
    essential: false,
    tag: 'Custom RAG',
    benefit: 'Allows AI to search and cite your private company documents'
  },

  // --- 8. App Stores & Mobile CI/CD ---
  {
    id: 'apple_developer',
    categoryId: 'mobile',
    name: 'Apple Developer Account & Review',
    provider: 'Apple Inc.',
    description: 'Mandatory annual Apple Developer membership ($99/year fee), App Store listing, TestFlight beta distribution, and guidelines audit.',
    oneTimeFeeUSD: 200, // setup & compliance audit
    monthlyFeeUSD: 8.25, // $99/year amortized
    essential: false,
    tag: 'iOS Mandatory',
    benefit: 'Required to publish your app to 1.5B+ iOS App Store devices'
  },
  {
    id: 'google_play',
    categoryId: 'mobile',
    name: 'Google Play Console & Compliance',
    provider: 'Google LLC',
    description: 'Google Play Console account registration ($25 one-time), Play Store metadata, privacy policy disclosures, and APK signing.',
    oneTimeFeeUSD: 175,
    monthlyFeeUSD: 0,
    essential: false,
    tag: 'Android Mandatory',
    benefit: 'Distribute your native Android app on Google Play'
  },
  {
    id: 'mobile_ota',
    categoryId: 'mobile',
    name: 'Over-The-Air (OTA) Updates & CI/CD',
    provider: 'Expo EAS / Fastlane CodePush',
    description: 'Instant JS/bundle hotfixes deployed directly to users devices bypassing lengthy App Store review cycles.',
    oneTimeFeeUSD: 450,
    monthlyFeeUSD: 30,
    essential: false,
    tag: 'Velocity & Hotfixes',
    benefit: 'Deploy emergency bug fixes in seconds without store re-approval'
  },

  // --- 9. Analytics & Observability ---
  {
    id: 'telemetry_sentry',
    categoryId: 'analytics',
    name: 'Error Tracing & Crash Monitoring',
    provider: 'Sentry.io',
    description: 'Real-time production error alerts, stack traces, breadcrumb logs, and frontend performance bottleneck diagnostics.',
    oneTimeFeeUSD: 200,
    monthlyFeeUSD: 26,
    essential: true,
    tag: 'Bug Triage',
    benefit: 'Catch and fix production crashes before users even notice'
  },
  {
    id: 'product_analytics',
    categoryId: 'analytics',
    name: 'Product Analytics & User Funnels',
    provider: 'PostHog / Mixpanel',
    description: 'Event tracking, conversion funnels, user retention cohorts, session replays, and feature flag experimentation.',
    oneTimeFeeUSD: 300,
    monthlyFeeUSD: 25,
    essential: false,
    tag: 'Product Growth',
    benefit: 'Know exactly where users drop off and optimize conversion'
  }
];

export const PRESET_CATEGORIES = [
  'All',
  'Web & SaaS',
  'Mobile & Media',
  'AI & Data',
  'FinTech & Enterprise'
];

export const PRICING_PRESETS = [
  {
    id: 'mvp_web',
    name: 'Lean Startup Web App',
    category: 'Web & SaaS',
    badge: 'MVP Core',
    tagline: 'High-speed web MVP with custom domain, PostgreSQL, authentication, transactional email, and Sentry monitoring.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'object_storage', 'auth_sso', 'email_service', 'telemetry_sentry']
  },
  {
    id: 'b2b_saas',
    name: 'Multi-Tenant B2B SaaS',
    category: 'Web & SaaS',
    badge: 'High ARR',
    tagline: 'Enterprise SaaS architecture with Stripe tiered billing, Redis caching, SSO, product analytics, and automated cloud backups.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'redis_cache', 'auth_sso', 'email_service', 'stripe_payments', 'subscription_engine', 'cloud_backups', 'telemetry_sentry', 'product_analytics']
  },
  {
    id: 'full_mobile',
    name: 'Production Mobile App (iOS & Android)',
    category: 'Mobile & Media',
    badge: 'Commercial Mobile',
    tagline: 'Dual app store publication, push notifications, offline object storage, FaceID biometric security, and live OTA hotfixes.',
    selectedIds: ['domain_dns', 'cloud_hosting', 'managed_db', 'object_storage', 'auth_sso', 'biometric_security', 'push_notifications', 'apple_developer', 'google_play', 'mobile_ota', 'telemetry_sentry']
  },
  {
    id: 'social_community',
    name: 'Social Community & Real-Time Chat',
    category: 'Mobile & Media',
    badge: 'High Engagement',
    tagline: 'Ultra-low-latency Redis messaging, cross-platform push notifications, media storage CDN, and product telemetry.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'object_storage', 'redis_cache', 'auth_sso', 'push_notifications', 'apple_developer', 'google_play', 'mobile_ota', 'product_analytics', 'telemetry_sentry']
  },
  {
    id: 'ai_saas',
    name: 'AI-First SaaS Platform',
    category: 'AI & Data',
    badge: 'Autonomous AI',
    tagline: 'SaaS platform equipped with LLM tokens, Qdrant vector retrieval, Stripe subscription engine, and user conversion funnels.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'object_storage', 'auth_sso', 'email_service', 'stripe_payments', 'subscription_engine', 'llm_tokens', 'vector_db', 'product_analytics', 'telemetry_sentry']
  },
  {
    id: 'ai_agent_swarm',
    name: 'Autonomous Multi-Agent Swarm',
    category: 'AI & Data',
    badge: 'Cognitive Loop',
    tagline: 'Distributed agent orchestration mesh with Redis memory bus, private vector indexing, LLM reasoning tokens, and disaster backups.',
    selectedIds: ['domain_dns', 'cloud_hosting', 'managed_db', 'redis_cache', 'auth_sso', 'email_service', 'llm_tokens', 'vector_db', 'cloud_backups', 'telemetry_sentry']
  },
  {
    id: 'ai_support_desk',
    name: 'AI Voice & Omnichannel Support Desk',
    category: 'AI & Data',
    badge: 'Automated Tier-1',
    tagline: '24/7 intelligent ticketing with LLM response engines, vector knowledge retrieval, SMS OTP escalation, and live error alerts.',
    selectedIds: ['domain_dns', 'cloud_hosting', 'managed_db', 'object_storage', 'auth_sso', 'email_service', 'sms_otp', 'llm_tokens', 'vector_db', 'telemetry_sentry']
  },
  {
    id: 'fintech_trading',
    name: 'FinTech Banking & Real-Time Trading',
    category: 'FinTech & Enterprise',
    badge: 'Zero-Trust Core',
    tagline: 'Sub-millisecond Redis execution, multi-factor SMS OTP, hardware biometric passkeys, Stripe payments, and multi-region disaster backups.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'redis_cache', 'auth_sso', 'biometric_security', 'sms_otp', 'cloud_backups', 'stripe_payments', 'telemetry_sentry']
  },
  {
    id: 'ecommerce_marketplace',
    name: 'Global Multi-Vendor Marketplace',
    category: 'Web & SaaS',
    badge: 'High GMV',
    tagline: 'Global edge-cached storefront with Stripe multi-currency checkout, SMS delivery updates, media R2 storage, and funnel analytics.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'object_storage', 'redis_cache', 'auth_sso', 'email_service', 'sms_otp', 'stripe_payments', 'product_analytics', 'telemetry_sentry']
  },
  {
    id: 'on_demand_logistics',
    name: 'On-Demand Logistics & Delivery Fleet',
    category: 'Mobile & Media',
    badge: 'Live Geo-Dispatch',
    tagline: 'Turnkey courier routing with Google Maps API, native iOS/Android driver apps, push dispatch alerts, and SMS delivery tracking.',
    selectedIds: ['domain_dns', 'cloud_hosting', 'managed_db', 'redis_cache', 'maps_api', 'auth_sso', 'push_notifications', 'sms_otp', 'stripe_payments', 'apple_developer', 'google_play', 'mobile_ota', 'telemetry_sentry']
  },
  {
    id: 'telehealth_hipaa',
    name: 'Telehealth & HIPAA Patient Portal',
    category: 'FinTech & Enterprise',
    badge: 'HIPAA Compliant',
    tagline: 'Encrypted patient records, hardware biometric login, SMS appointment reminders, transactional email, and automated multi-region snapshots.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'object_storage', 'auth_sso', 'biometric_security', 'sms_otp', 'email_service', 'cloud_backups', 'telemetry_sentry']
  },
  {
    id: 'edtech_lms',
    name: 'EdTech Interactive Learning Management',
    category: 'Web & SaaS',
    badge: 'Cohort LMS',
    tagline: 'Course video streaming storage, Stripe recurring memberships, student progress funnels, and automated course completion certificates.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'object_storage', 'auth_sso', 'email_service', 'stripe_payments', 'subscription_engine', 'product_analytics', 'telemetry_sentry']
  },
  {
    id: 'event_ticketing',
    name: 'High-Concurrency Event Ticketing',
    category: 'FinTech & Enterprise',
    badge: 'Traffic Spikes',
    tagline: 'Flash-sale queue architecture with in-memory Redis lockouts, Cloudflare anti-bot WAF, SMS mobile passes, and Stripe checkout.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'redis_cache', 'auth_sso', 'email_service', 'sms_otp', 'stripe_payments', 'cloud_backups', 'telemetry_sentry']
  },
  {
    id: 'iot_telemetry',
    name: 'IoT Smart Device Telemetry Mesh',
    category: 'AI & Data',
    badge: 'Edge Sensors',
    tagline: 'High-frequency time-series telemetry ingestion, in-memory stream processing, push anomaly alerts, and cold S3 archive.',
    selectedIds: ['domain_dns', 'cloud_hosting', 'managed_db', 'redis_cache', 'object_storage', 'cloud_backups', 'push_notifications', 'telemetry_sentry']
  },
  {
    id: 'dev_platform_api',
    name: 'Developer Platform & Public API Gateway',
    category: 'Web & SaaS',
    badge: 'API Monetization',
    tagline: 'Public developer portal with metered API key usage, Stripe billing, Redis distributed rate-limiting, and error diagnostics.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'redis_cache', 'auth_sso', 'subscription_engine', 'stripe_payments', 'telemetry_sentry', 'product_analytics']
  },
  {
    id: 'media_streaming',
    name: 'Digital Media & Creator Streaming Hub',
    category: 'Mobile & Media',
    badge: 'Content Creators',
    tagline: 'High-bandwidth video CDN, recurring fan subscriptions, push livestream alerts, and fast Over-The-Air mobile releases.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'object_storage', 'redis_cache', 'auth_sso', 'stripe_payments', 'subscription_engine', 'push_notifications', 'mobile_ota', 'telemetry_sentry']
  },
  {
    id: 'real_estate_portal',
    name: 'Real Estate & Spatial Discovery Portal',
    category: 'FinTech & Enterprise',
    badge: 'Spatial PropTech',
    tagline: 'Interactive map property search, high-res architectural photo storage, SMS broker alerts, and user search cohort analytics.',
    selectedIds: ['domain_dns', 'cdn_waf', 'cloud_hosting', 'managed_db', 'object_storage', 'maps_api', 'auth_sso', 'email_service', 'sms_otp', 'product_analytics', 'telemetry_sentry']
  },
  {
    id: 'full_enterprise',
    name: 'Enterprise Global Full-Stack Suite',
    category: 'FinTech & Enterprise',
    badge: 'All 22 Services',
    tagline: 'Comprehensive digital infrastructure across edge CDN, mobile store pipelines, generative AI tokens, vector DB, payments, and disaster resilience.',
    selectedIds: COMMONLY_USED_SERVICES.map(s => s.id)
  }
];
