import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Globe, Smartphone, Cpu, Sparkles, RotateCcw, Move3d } from 'lucide-react';

export default function ThreeConsultingCanvas({ activePillar = 'web', onSelectPillar, theme }) {
  const mountRef = useRef(null);
  const activePillarRef = useRef(activePillar);
  const [isDragging, setIsDragging] = useState(false);

  // Sync ref whenever activePillar prop changes
  useEffect(() => {
    activePillarRef.current = activePillar;
  }, [activePillar]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || 600;
    let height = container.clientHeight || 580;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.3);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 5, 20);
    cyanLight.position.set(-4, 3, 5);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 4.5, 20);
    blueLight.position.set(4, -2, 5);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0xa855f7, 6.5, 22);
    violetLight.position.set(0, 4, 4);
    scene.add(violetLight);

    // Starfield Particle Dust
    const starCount = 140;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const cCyan = new THREE.Color(0x00f2fe);
    const cBlue = new THREE.Color(0x3b82f6);
    const cPurple = new THREE.Color(0xa855f7);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 16;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;

      const col = i % 3 === 0 ? cCyan : i % 3 === 1 ? cBlue : cPurple;
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));
    const starMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const starPoints = new THREE.Points(starGeo, starMat);
    scene.add(starPoints);

    // =========================================================================
    // 1. PROCEDURAL CANVASES: WEB BROWSER, SMARTPHONE, AND AI AGENT COMMAND DECK
    // =========================================================================

    // A. Web Browser Window Canvas (1024 x 680)
    const browserCanvas = document.createElement('canvas');
    browserCanvas.width = 1024;
    browserCanvas.height = 680;
    const bCtx = browserCanvas.getContext('2d');

    const drawBrowserScreen = () => {
      bCtx.fillStyle = '#06091e';
      bCtx.fillRect(0, 0, 1024, 680);

      // Top Chrome
      bCtx.fillStyle = '#0d1333';
      bCtx.fillRect(0, 0, 1024, 64);

      // 3 macOS Window Controls
      bCtx.fillStyle = '#ff5f56';
      bCtx.beginPath(); bCtx.arc(36, 32, 8, 0, Math.PI * 2); bCtx.fill();
      bCtx.fillStyle = '#ffbd2e';
      bCtx.beginPath(); bCtx.arc(62, 32, 8, 0, Math.PI * 2); bCtx.fill();
      bCtx.fillStyle = '#27c93f';
      bCtx.beginPath(); bCtx.arc(88, 32, 8, 0, Math.PI * 2); bCtx.fill();

      // Tab
      bCtx.fillStyle = '#06091e';
      bCtx.beginPath();
      bCtx.roundRect(120, 12, 190, 52, [10, 10, 0, 0]);
      bCtx.fill();
      bCtx.fillStyle = '#00f2fe';
      bCtx.font = 'bold 13px monospace';
      bCtx.fillText('⚡ Enterprise-Mesh.tsx', 140, 42);

      // URL Bar
      bCtx.fillStyle = 'rgba(255, 255, 255, 0.07)';
      bCtx.beginPath();
      bCtx.roundRect(330, 16, 460, 32, 8);
      bCtx.fill();
      bCtx.fillStyle = '#38bdf8';
      bCtx.font = '14px monospace';
      bCtx.fillText('🔒 https://cloud.qubrix.consulting/mesh/live-telemetry', 350, 38);

      // Sidebar
      bCtx.fillStyle = '#090e29';
      bCtx.fillRect(0, 64, 210, 616);
      const navItems = ['Overview', 'Architecture', 'Edge Clusters', 'Micro-Frontends', 'APIs & Webhooks', 'Security Shield'];
      navItems.forEach((item, idx) => {
        if (idx === 3) {
          bCtx.fillStyle = 'rgba(0, 242, 254, 0.2)';
          bCtx.fillRect(16, 95 + idx * 46, 178, 36);
          bCtx.fillStyle = '#00f2fe';
          bCtx.font = 'bold 15px sans-serif';
        } else {
          bCtx.fillStyle = '#64748b';
          bCtx.font = '14px sans-serif';
        }
        bCtx.fillText(item, 34, 118 + idx * 46);
      });

      // Top KPI Cards
      bCtx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      bCtx.beginPath();
      bCtx.roundRect(240, 92, 750, 165, 14);
      bCtx.fill();

      bCtx.fillStyle = '#ffffff';
      bCtx.font = 'bold 24px sans-serif';
      bCtx.fillText('Next.js 15 & React 19 Micro-Frontend Engine', 270, 134);
      bCtx.fillStyle = '#94a3b8';
      bCtx.font = '15px sans-serif';
      bCtx.fillText('Sub-12ms Global Edge Delivery • Zero-Downtime Multi-Region Canary Deploys', 270, 166);

      // Badges
      bCtx.fillStyle = 'rgba(0, 242, 254, 0.12)';
      bCtx.beginPath(); bCtx.roundRect(270, 190, 210, 52, 8); bCtx.fill();
      bCtx.fillStyle = '#00f2fe'; bCtx.font = 'bold 17px monospace';
      bCtx.fillText('⚡ 11.4ms P99 EDGE', 288, 222);

      bCtx.fillStyle = 'rgba(16, 185, 129, 0.12)';
      bCtx.beginPath(); bCtx.roundRect(500, 190, 210, 52, 8); bCtx.fill();
      bCtx.fillStyle = '#34d399'; bCtx.font = 'bold 17px monospace';
      bCtx.fillText('🛡️ 99.995% SLA', 528, 222);

      bCtx.fillStyle = 'rgba(168, 85, 247, 0.12)';
      bCtx.beginPath(); bCtx.roundRect(730, 190, 230, 52, 8); bCtx.fill();
      bCtx.fillStyle = '#c084fc'; bCtx.font = 'bold 17px monospace';
      bCtx.fillText('🚀 250K REQ/SEC', 758, 222);

      // Chart
      bCtx.fillStyle = 'rgba(255, 255, 255, 0.025)';
      bCtx.beginPath(); bCtx.roundRect(240, 280, 360, 365, 14); bCtx.fill();
      bCtx.fillStyle = '#e2e8f0'; bCtx.font = 'bold 17px sans-serif';
      bCtx.fillText('Distributed Cluster Traffic', 270, 320);

      const chartGrad = bCtx.createLinearGradient(270, 350, 270, 590);
      chartGrad.addColorStop(0, 'rgba(0, 242, 254, 0.35)');
      chartGrad.addColorStop(1, 'rgba(0, 242, 254, 0.0)');
      bCtx.beginPath();
      bCtx.moveTo(270, 570); bCtx.lineTo(320, 500); bCtx.lineTo(380, 530); bCtx.lineTo(440, 420);
      bCtx.lineTo(500, 460); bCtx.lineTo(560, 360); bCtx.lineTo(560, 590); bCtx.lineTo(270, 590);
      bCtx.closePath();
      bCtx.fillStyle = chartGrad; bCtx.fill();

      bCtx.strokeStyle = '#00f2fe'; bCtx.lineWidth = 3.5;
      bCtx.beginPath();
      bCtx.moveTo(270, 570); bCtx.lineTo(320, 500); bCtx.lineTo(380, 530); bCtx.lineTo(440, 420);
      bCtx.lineTo(500, 460); bCtx.lineTo(560, 360); bCtx.stroke();

      // Code Block
      bCtx.fillStyle = '#030514';
      bCtx.beginPath(); bCtx.roundRect(620, 280, 370, 365, 14); bCtx.fill();
      bCtx.fillStyle = '#38bdf8'; bCtx.font = '14px monospace';
      bCtx.fillText('// High-Speed Edge Router', 645, 320);
      bCtx.fillStyle = '#f43f5e'; bCtx.fillText('export const runtime = "edge";', 645, 352);
      bCtx.fillStyle = '#a855f7'; bCtx.fillText('export async function GET(req) {', 645, 384);
      bCtx.fillStyle = '#94a3b8'; bCtx.fillText('  const mesh = await MeshRouter.init();', 665, 416);
      bCtx.fillStyle = '#10b981'; bCtx.fillText('  const session = await mesh.auth(req);', 665, 448);
      bCtx.fillStyle = '#00f2fe'; bCtx.fillText('  return streamMicroFrontend(session);', 665, 480);
      bCtx.fillStyle = '#a855f7'; bCtx.fillText('}', 645, 512);

      bCtx.fillStyle = 'rgba(0, 242, 254, 0.15)';
      bCtx.beginPath(); bCtx.roundRect(645, 545, 320, 70, 8); bCtx.fill();
      bCtx.fillStyle = '#00f2fe'; bCtx.font = 'bold 14px monospace';
      bCtx.fillText('LIVE STREAM: READY (200 OK)', 665, 575);
      bCtx.fillStyle = '#94a3b8'; bCtx.font = '12px sans-serif';
      bCtx.fillText('Auto-scaling 300+ Edge Nodes Across 4 Continents', 665, 598);
    };

    drawBrowserScreen();
    const browserTexture = new THREE.CanvasTexture(browserCanvas);
    browserTexture.anisotropy = 8;

    // B. Mobile Smartphone Screen Canvas (540 x 1080)
    const phoneCanvas = document.createElement('canvas');
    phoneCanvas.width = 540;
    phoneCanvas.height = 1080;
    const pCtx = phoneCanvas.getContext('2d');

    const drawPhoneScreen = () => {
      pCtx.fillStyle = '#05071a';
      pCtx.fillRect(0, 0, 540, 1080);

      // Top Status Bar
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 22px sans-serif';
      pCtx.fillText('9:41', 48, 62);
      pCtx.font = '16px monospace';
      pCtx.fillText('5G 100% 🔋', 415, 62);

      // Dynamic Island
      pCtx.fillStyle = '#000000';
      pCtx.beginPath(); pCtx.roundRect(185, 28, 170, 44, 22); pCtx.fill();
      pCtx.fillStyle = '#10b981';
      pCtx.beginPath(); pCtx.arc(325, 50, 6, 0, Math.PI * 2); pCtx.fill();

      // Header
      pCtx.fillStyle = '#94a3b8';
      pCtx.font = '17px sans-serif';
      pCtx.fillText('Qubrix Native iOS & Android', 40, 138);
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 32px sans-serif';
      pCtx.fillText('Mobile Architecture', 40, 182);

      // Hero Card
      const heroGrad = pCtx.createLinearGradient(40, 215, 500, 420);
      heroGrad.addColorStop(0, '#1d4ed8');
      heroGrad.addColorStop(1, '#0284c7');
      pCtx.fillStyle = heroGrad;
      pCtx.beginPath(); pCtx.roundRect(40, 215, 460, 225, 24); pCtx.fill();

      pCtx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      pCtx.font = 'bold 15px monospace';
      pCtx.fillText('OFFLINE-FIRST SYNCHRONIZATION', 68, 260);
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 44px sans-serif';
      pCtx.fillText('60 FPS FLUID', 68, 322);
      pCtx.fillStyle = '#bae6fd';
      pCtx.font = '17px sans-serif';
      pCtx.fillText('WatermelonDB • Biometric Enclave • SQLite', 68, 375);

      // Actions
      const actions = [
        { label: 'Biometrics', icon: '🔒' },
        { label: 'AI Copilot', icon: '🤖' },
        { label: 'Cloud Sync', icon: '⚡' },
        { label: 'Analytics', icon: '📊' }
      ];
      actions.forEach((act, idx) => {
        pCtx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        pCtx.beginPath(); pCtx.roundRect(40 + idx * 118, 470, 105, 94, 18); pCtx.fill();
        pCtx.font = '24px sans-serif';
        pCtx.fillText(act.icon, 78 + idx * 118, 514);
        pCtx.fillStyle = '#60a5fa';
        pCtx.font = 'bold 14px sans-serif';
        pCtx.fillText(act.label, 52 + idx * 118, 545);
      });

      // Events Feed
      pCtx.fillStyle = 'rgba(255, 255, 255, 0.035)';
      pCtx.beginPath(); pCtx.roundRect(40, 595, 460, 415, 24); pCtx.fill();
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 22px sans-serif';
      pCtx.fillText('Native Event Stream', 65, 642);

      const events = [
        { title: 'FaceID WebAuthn Confirmed', sub: 'Secure Hardware Enclave Verified', col: '#10b981' },
        { title: 'Local SQLite Cache Hit (<1ms)', sub: 'Indexed WatermelonDB Transaction', col: '#38bdf8' },
        { title: 'WebSocket Stream Synced', sub: 'Zero-drop reconnect protocol', col: '#60a5fa' },
        { title: 'Zero-Downtime CodePush Live', sub: 'iOS 18 & Android 15 Verified', col: '#c084fc' }
      ];

      events.forEach((ev, i) => {
        pCtx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        pCtx.beginPath(); pCtx.roundRect(65, 668 + i * 76, 410, 62, 12); pCtx.fill();
        pCtx.fillStyle = ev.col;
        pCtx.beginPath(); pCtx.arc(95, 699 + i * 76, 12, 0, Math.PI * 2); pCtx.fill();
        pCtx.fillStyle = '#ffffff';
        pCtx.font = 'bold 16px sans-serif';
        pCtx.fillText(ev.title, 122, 695 + i * 76);
        pCtx.fillStyle = '#94a3b8';
        pCtx.font = '13px sans-serif';
        pCtx.fillText(ev.sub, 122, 716 + i * 76);
      });

      // Bottom bar
      pCtx.fillStyle = '#ffffff';
      pCtx.beginPath(); pCtx.roundRect(185, 1045, 170, 6, 3); pCtx.fill();
    };

    drawPhoneScreen();
    const phoneTexture = new THREE.CanvasTexture(phoneCanvas);
    phoneTexture.anisotropy = 8;

    // C. Dedicated AI Autonomous Agent Swarm Console Canvas (1024 x 680)
    const aiCanvas = document.createElement('canvas');
    aiCanvas.width = 1024;
    aiCanvas.height = 680;
    const aCtx = aiCanvas.getContext('2d');

    const drawAiScreen = (time = 0) => {
      aCtx.fillStyle = '#060317';
      aCtx.fillRect(0, 0, 1024, 680);

      // Titlebar
      aCtx.fillStyle = '#100a30';
      aCtx.fillRect(0, 0, 1024, 66);

      // Traffic Lights (Purple / Cyan)
      aCtx.fillStyle = '#c084fc';
      aCtx.beginPath(); aCtx.arc(36, 33, 8, 0, Math.PI * 2); aCtx.fill();
      aCtx.fillStyle = '#00f2fe';
      aCtx.beginPath(); aCtx.arc(62, 33, 8, 0, Math.PI * 2); aCtx.fill();
      aCtx.fillStyle = '#10b981';
      aCtx.beginPath(); aCtx.arc(88, 33, 8, 0, Math.PI * 2); aCtx.fill();

      // Header Title
      aCtx.fillStyle = '#ffffff';
      aCtx.font = 'bold 18px sans-serif';
      aCtx.fillText('🧠 Qubrix Autonomous Multi-Agent Swarm Orchestrator • v4.8', 125, 40);

      // Swarm Live Status Pill
      aCtx.fillStyle = 'rgba(168, 85, 247, 0.25)';
      aCtx.beginPath(); aCtx.roundRect(750, 16, 245, 34, 8); aCtx.fill();
      aCtx.strokeStyle = '#a855f7'; aCtx.lineWidth = 1.5; aCtx.stroke();
      aCtx.fillStyle = '#34d399';
      aCtx.beginPath(); aCtx.arc(770, 33, 6, 0, Math.PI * 2); aCtx.fill();
      aCtx.fillStyle = '#c084fc';
      aCtx.font = 'bold 13px monospace';
      aCtx.fillText('SWARM: 4 AGENTS ACTIVE', 788, 38);

      // 4 Active Agent Status Cards
      const agentCards = [
        {
          num: 'AGENT 01',
          name: 'Supervisor / Planner',
          role: 'Decomposes complex goals into DAG tasks',
          metric: '8.4ms Routing Latency',
          color: '#00f2fe',
          status: 'ACTIVE'
        },
        {
          num: 'AGENT 02',
          name: 'Cognitive Reasoning Core',
          role: 'Claude 3.5 Sonnet / DeepSeek R1 / GPT-4o',
          metric: 'Tree-of-Thought Selected',
          color: '#c084fc',
          status: 'INFERENCE'
        },
        {
          num: 'AGENT 03',
          name: 'Enterprise GraphRAG Engine',
          role: 'Vector Embeddings & Knowledge Graph',
          metric: '99.4% Top-K Recall',
          color: '#34d399',
          status: 'RETRIEVED'
        },
        {
          num: 'AGENT 04',
          name: 'Tool Sandbox & Guardrails',
          role: 'Python/SQL Execution & NeMo Security',
          metric: '0 Vulnerabilities • 100% Pass',
          color: '#fbbf24',
          status: 'VALIDATED'
        }
      ];

      agentCards.forEach((agent, i) => {
        const x = 32 + i * 240;
        const y = 88;
        aCtx.fillStyle = 'rgba(255, 255, 255, 0.035)';
        aCtx.strokeStyle = `${agent.color}55`;
        aCtx.lineWidth = 1.5;
        aCtx.beginPath();
        aCtx.roundRect(x, y, 226, 150, 12);
        aCtx.fill();
        aCtx.stroke();

        // Agent Tag
        aCtx.fillStyle = agent.color;
        aCtx.font = 'bold 11px monospace';
        aCtx.fillText(agent.num, x + 16, y + 26);

        // Status Pill
        aCtx.fillStyle = `${agent.color}25`;
        aCtx.beginPath(); aCtx.roundRect(x + 130, y + 12, 82, 22, 6); aCtx.fill();
        aCtx.fillStyle = agent.color;
        aCtx.font = 'bold 10px monospace';
        aCtx.fillText(agent.status, x + 142, y + 27);

        // Agent Name
        aCtx.fillStyle = '#ffffff';
        aCtx.font = 'bold 15px sans-serif';
        aCtx.fillText(agent.name, x + 16, y + 58);

        // Role
        aCtx.fillStyle = '#94a3b8';
        aCtx.font = '12px sans-serif';
        aCtx.fillText(agent.role.slice(0, 28), x + 16, y + 84);
        if (agent.role.length > 28) {
          aCtx.fillText(agent.role.slice(28), x + 16, y + 102);
        }

        // Metric
        aCtx.fillStyle = agent.color;
        aCtx.font = 'bold 12px monospace';
        aCtx.fillText(agent.metric, x + 16, y + 132);
      });

      // Terminal: Autonomous Agent Live Thought & Execution Stream
      aCtx.fillStyle = '#03010d';
      aCtx.beginPath();
      aCtx.roundRect(32, 258, 960, 230, 14);
      aCtx.fill();
      aCtx.strokeStyle = 'rgba(168, 85, 247, 0.3)';
      aCtx.stroke();

      aCtx.fillStyle = '#c084fc';
      aCtx.font = 'bold 14px monospace';
      aCtx.fillText('// REASONING TRACE & AUTONOMOUS TOOL EXECUTION', 54, 290);

      const logs = [
        { tag: '[SUPERVISOR]', text: 'Ingested Enterprise Goal: "Migrate legacy backend to resilient micro-frontends with auto-scaling"', col: '#00f2fe' },
        { tag: '[PLANNER DAG]', text: 'Decomposed into 4 parallel tasks: Schema Extraction, API Bridge, RAG Context, Unit Testing.', col: '#38bdf8' },
        { tag: '[GRAPHRAG]', text: 'Retrieved 1,480 vector embeddings with hybrid semantic reranking (cosine: 0.962).', col: '#34d399' },
        { tag: '[REASONING]', text: 'Synthesized Next.js 15 SSR cluster config + LangGraph state checkpoints in 180ms.', col: '#c084fc' },
        { tag: '[GUARDRAILS]', text: 'Evaluated AST against OWASP LLM Top 10: 0 prompt injections, 0 data leaks. Deployed!', col: '#fbbf24' }
      ];

      logs.forEach((log, idx) => {
        aCtx.fillStyle = log.col;
        aCtx.font = 'bold 13px monospace';
        aCtx.fillText(log.tag, 54, 326 + idx * 30);
        aCtx.fillStyle = '#e2e8f0';
        aCtx.font = '13px monospace';
        aCtx.fillText(log.text, 190, 326 + idx * 30);
      });

      // Bottom: Dynamic Real-time Neural Waveform / Token Visualizer
      aCtx.fillStyle = 'rgba(255, 255, 255, 0.025)';
      aCtx.beginPath();
      aCtx.roundRect(32, 508, 960, 142, 14);
      aCtx.fill();

      aCtx.fillStyle = '#ffffff';
      aCtx.font = 'bold 16px sans-serif';
      aCtx.fillText('Live Neural Token Stream Spectrum', 54, 538);

      aCtx.fillStyle = '#00f2fe';
      aCtx.font = 'bold 14px monospace';
      aCtx.fillText('1,420 TOKENS/SEC • SUB-40ms TIME TO FIRST TOKEN', 580, 538);

      // Draw 42 dancing visualizer bars
      const barCount = 42;
      for (let b = 0; b < barCount; b++) {
        const barX = 54 + b * 22;
        const wave = Math.sin(time * 6 + b * 0.45) * 0.5 + 0.5;
        const wave2 = Math.cos(time * 4 - b * 0.3) * 0.4 + 0.5;
        const barHeight = 15 + (wave * 0.6 + wave2 * 0.4) * 55;
        const barY = 625 - barHeight;

        const barGrad = aCtx.createLinearGradient(barX, barY, barX, 625);
        barGrad.addColorStop(0, b % 3 === 0 ? '#00f2fe' : b % 3 === 1 ? '#c084fc' : '#34d399');
        barGrad.addColorStop(1, 'rgba(168, 85, 247, 0.2)');

        aCtx.fillStyle = barGrad;
        aCtx.beginPath();
        aCtx.roundRect(barX, barY, 14, barHeight, 4);
        aCtx.fill();
      }
    };

    drawAiScreen(0);
    const aiTexture = new THREE.CanvasTexture(aiCanvas);
    aiTexture.anisotropy = 8;

    // Helper: Create Floating 3D Text Badge Canvas
    const createBadgeMesh = (text, subtitle, glowColor, width = 2.1, height = 0.56) => {
      const bCanvas = document.createElement('canvas');
      bCanvas.width = 512;
      bCanvas.height = 140;
      const ctx = bCanvas.getContext('2d');

      ctx.fillStyle = 'rgba(8, 10, 32, 0.9)';
      ctx.strokeStyle = glowColor;
      ctx.lineWidth = 4;
      ctx.beginPath(); ctx.roundRect(8, 8, 496, 124, 24); ctx.fill(); ctx.stroke();

      ctx.fillStyle = glowColor;
      ctx.beginPath(); ctx.arc(42, 70, 12, 0, Math.PI * 2); ctx.fill();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 30px sans-serif';
      ctx.fillText(text, 72, 62);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '20px monospace';
      ctx.fillText(subtitle, 72, 98);

      const tex = new THREE.CanvasTexture(bCanvas);
      tex.anisotropy = 4;
      const geo = new THREE.PlaneGeometry(width, height);
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide });
      return { mesh: new THREE.Mesh(geo, mat), texture: tex, geo, mat };
    };

    // =========================================================================
    // 2. MODEL 1: WEB APPS 3D HERO MODEL (webGroup)
    // =========================================================================
    const webGroup = new THREE.Group();
    rootGroup.add(webGroup);

    const bW = 4.2;
    const bH = 2.8;
    const webScreenGeo = new THREE.PlaneGeometry(bW, bH);
    const webScreenMat = new THREE.MeshStandardMaterial({
      map: browserTexture,
      roughness: 0.15,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    const webScreenMesh = new THREE.Mesh(webScreenGeo, webScreenMat);
    webGroup.add(webScreenMesh);

    const webBezelGeo = new THREE.BoxGeometry(bW + 0.16, bH + 0.16, 0.1);
    const webBezelMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.3, metalness: 0.85 });
    const webBezelMesh = new THREE.Mesh(webBezelGeo, webBezelMat);
    webBezelMesh.position.z = -0.055;
    webGroup.add(webBezelMesh);

    const webEdgeGeo = new THREE.EdgesGeometry(webBezelGeo);
    const webEdgeMat = new THREE.LineBasicMaterial({ color: 0x00f2fe, linewidth: 2, transparent: true, opacity: 0.8 });
    const webEdgeLines = new THREE.LineSegments(webEdgeGeo, webEdgeMat);
    webGroup.add(webEdgeLines);

    const webBadge1 = createBadgeMesh('MICRO-FRONTENDS ACTIVE', 'Next.js 15 & React 19 SSR', '#00f2fe', 2.3, 0.62);
    webBadge1.mesh.position.set(1.5, 1.35, 0.45);
    webGroup.add(webBadge1.mesh);

    const webBadge2 = createBadgeMesh('GLOBAL EDGE CLUSTERS', '300+ PoPs • Sub-12ms P99', '#34d399', 2.2, 0.6);
    webBadge2.mesh.position.set(-1.4, -1.35, 0.45);
    webGroup.add(webBadge2.mesh);

    // =========================================================================
    // 3. MODEL 2: MOBILE APPS 3D HERO MODEL (mobileGroup)
    // =========================================================================
    const mobileGroup = new THREE.Group();
    rootGroup.add(mobileGroup);

    const pW = 1.6;
    const pH = 3.2;
    const phoneScreenGeo = new THREE.PlaneGeometry(pW, pH);
    const phoneScreenMat = new THREE.MeshStandardMaterial({
      map: phoneTexture,
      roughness: 0.1,
      metalness: 0.15,
      side: THREE.DoubleSide
    });
    const phoneScreenMesh = new THREE.Mesh(phoneScreenGeo, phoneScreenMat);
    phoneScreenMesh.position.z = 0.052;
    mobileGroup.add(phoneScreenMesh);

    const phoneBodyGeo = new THREE.BoxGeometry(pW + 0.12, pH + 0.12, 0.1);
    const phoneBodyMat = new THREE.MeshStandardMaterial({ color: 0x0a1026, roughness: 0.25, metalness: 0.95 });
    const phoneBodyMesh = new THREE.Mesh(phoneBodyGeo, phoneBodyMat);
    mobileGroup.add(phoneBodyMesh);

    const phoneEdgeGeo = new THREE.EdgesGeometry(phoneBodyGeo);
    const phoneEdgeMat = new THREE.LineBasicMaterial({ color: 0x3b82f6, linewidth: 2, transparent: true, opacity: 0.85 });
    const phoneEdgeLines = new THREE.LineSegments(phoneEdgeGeo, phoneEdgeMat);
    mobileGroup.add(phoneEdgeLines);

    const camBumpGeo = new THREE.BoxGeometry(0.65, 0.65, 0.05);
    const camBumpMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2, metalness: 0.8 });
    const camBumpMesh = new THREE.Mesh(camBumpGeo, camBumpMat);
    camBumpMesh.position.set(0.35, 1.1, -0.075);
    mobileGroup.add(camBumpMesh);

    for (let c = 0; c < 3; c++) {
      const lensGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.03, 16);
      lensGeo.rotateX(Math.PI / 2);
      const lensMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.9, roughness: 0.1 });
      const lensMesh = new THREE.Mesh(lensGeo, lensMat);
      const cx = c === 0 ? 0.25 : c === 1 ? 0.45 : 0.35;
      const cy = c === 0 ? 1.2 : c === 1 ? 1.2 : 0.98;
      lensMesh.position.set(cx, cy, -0.105);
      mobileGroup.add(lensMesh);
    }

    const mobileBadge1 = createBadgeMesh('OFFLINE-FIRST SYNC', 'WatermelonDB • AES-256', '#3b82f6', 2.2, 0.6);
    mobileBadge1.mesh.position.set(1.4, 0.9, 0.5);
    mobileGroup.add(mobileBadge1.mesh);

    const mobileBadge2 = createBadgeMesh('60 FPS FLUID NATIVE', 'iOS 18 & Android 15 Ready', '#60a5fa', 2.1, 0.58);
    mobileBadge2.mesh.position.set(-1.3, -1.0, 0.5);
    mobileGroup.add(mobileBadge2.mesh);

    // =========================================================================
    // 4. MODEL 3: DEDICATED AI AGENT COMMAND DECK & NEURAL SWARM (aiGroup)
    // =========================================================================
    const aiGroup = new THREE.Group();
    rootGroup.add(aiGroup);

    // AI Command Deck Display Mesh
    const aW = 4.2;
    const aH = 2.8;
    const aiScreenGeo = new THREE.PlaneGeometry(aW, aH);
    const aiScreenMat = new THREE.MeshStandardMaterial({
      map: aiTexture,
      roughness: 0.15,
      metalness: 0.2,
      side: THREE.DoubleSide
    });
    const aiScreenMesh = new THREE.Mesh(aiScreenGeo, aiScreenMat);
    aiGroup.add(aiScreenMesh);

    // Futuristic Bezel with Purple Titanium Finish
    const aiBezelGeo = new THREE.BoxGeometry(aW + 0.16, aH + 0.16, 0.1);
    const aiBezelMat = new THREE.MeshStandardMaterial({ color: 0x140d2e, roughness: 0.25, metalness: 0.9 });
    const aiBezelMesh = new THREE.Mesh(aiBezelGeo, aiBezelMat);
    aiBezelMesh.position.z = -0.055;
    aiGroup.add(aiBezelMesh);

    // Neon Purple Perimeter Line
    const aiEdgeGeo = new THREE.EdgesGeometry(aiBezelGeo);
    const aiEdgeMat = new THREE.LineBasicMaterial({ color: 0xa855f7, linewidth: 2, transparent: true, opacity: 0.85 });
    const aiEdgeLines = new THREE.LineSegments(aiEdgeGeo, aiEdgeMat);
    aiGroup.add(aiEdgeLines);

    // 3D Neural Cortex Sphere hovering slightly in front of the deck
    const neuralCoreGroup = new THREE.Group();
    neuralCoreGroup.position.set(0, 0.1, 0.55);
    aiGroup.add(neuralCoreGroup);

    // Outer Glowing Neural Cage
    const aiOuterGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const aiOuterMat = new THREE.MeshStandardMaterial({
      color: 0x581c87,
      emissive: 0xa855f7,
      emissiveIntensity: 0.85,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.95
    });
    const aiOuterMesh = new THREE.Mesh(aiOuterGeo, aiOuterMat);
    neuralCoreGroup.add(aiOuterMesh);

    // Inner Glowing Energy Core
    const aiInnerGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const aiInnerMat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, wireframe: true });
    const aiInnerMesh = new THREE.Mesh(aiInnerGeo, aiInnerMat);
    neuralCoreGroup.add(aiInnerMesh);

    // 2 Orbital Gimbal Rings
    const ring1Geo = new THREE.TorusGeometry(1.2, 0.015, 12, 48);
    const ring1Mat = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.7 });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1Mesh.rotation.x = Math.PI / 3;
    neuralCoreGroup.add(ring1Mesh);

    const ring2Geo = new THREE.TorusGeometry(1.4, 0.015, 12, 48);
    const ring2Mat = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.7 });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.y = Math.PI / 4;
    neuralCoreGroup.add(ring2Mesh);

    // 4 Orbiting 3D Agent Drones / Satellites
    const agentDronesData = [
      { name: 'Supervisor Agent', color: 0x00f2fe, radius: 1.6, speed: 0.9 },
      { name: 'Reasoning Engine', color: 0xc084fc, radius: 1.85, speed: -0.7 },
      { name: 'GraphRAG Vector', color: 0x10b981, radius: 1.5, speed: 1.1 },
      { name: 'Guardrail Tool', color: 0xfbbf24, radius: 1.75, speed: -0.85 }
    ];

    const agentDrones = [];
    agentDronesData.forEach((d, idx) => {
      const droneGroup = new THREE.Group();

      // Drone Core Sphere
      const dGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const dMat = new THREE.MeshStandardMaterial({
        color: d.color,
        emissive: d.color,
        emissiveIntensity: 0.9,
        roughness: 0.1
      });
      const dMesh = new THREE.Mesh(dGeo, dMat);
      droneGroup.add(dMesh);

      // Drone mini aura ring
      const dRingGeo = new THREE.TorusGeometry(0.18, 0.012, 8, 24);
      const dRingMat = new THREE.MeshBasicMaterial({ color: d.color, transparent: true, opacity: 0.8 });
      const dRingMesh = new THREE.Mesh(dRingGeo, dRingMat);
      dRingMesh.rotation.x = Math.PI / 2;
      droneGroup.add(dRingMesh);

      neuralCoreGroup.add(droneGroup);

      agentDrones.push({
        group: droneGroup,
        data: d,
        offset: (idx * Math.PI * 2) / agentDronesData.length
      });
    });

    // Synaptic Connection Beams from central brain to the 4 agent drones
    const synapseGeo = new THREE.BufferGeometry();
    const synapsePos = new Float32Array(agentDronesData.length * 6);
    synapseGeo.setAttribute('position', new THREE.BufferAttribute(synapsePos, 3));
    const synapseMat = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.8 });
    const synapseLines = new THREE.LineSegments(synapseGeo, synapseMat);
    neuralCoreGroup.add(synapseLines);

    // Badges for AI
    const aiBadge1 = createBadgeMesh('AUTONOMOUS MULTI-AGENT SWARM', 'LangGraph & Cognitive DAG Workflows', '#a855f7', 2.5, 0.62);
    aiBadge1.mesh.position.set(0, 1.45, 0.55);
    aiGroup.add(aiBadge1.mesh);

    const aiBadge2 = createBadgeMesh('ENTERPRISE RAG & LLM ROUTER', 'Sub-40ms Hybrid Semantic Retrieval', '#00f2fe', 2.5, 0.62);
    aiBadge2.mesh.position.set(0, -1.45, 0.55);
    aiGroup.add(aiBadge2.mesh);

    // =========================================================================
    // 5. INTERACTION & ANIMATION LOOP (SMOOTH TRANSITIONS)
    // =========================================================================

    // Initial state setup
    webGroup.position.set(0, 0, 0);
    webGroup.scale.set(1, 1, 1);

    mobileGroup.position.set(6, -0.5, -3);
    mobileGroup.scale.set(0.01, 0.01, 0.01);
    mobileGroup.visible = false;

    aiGroup.position.set(-6, 0.5, -3);
    aiGroup.scale.set(0.01, 0.01, 0.01);
    aiGroup.visible = false;

    // Mouse Drag Rotation
    let isMouseDown = false;
    let prevMousePos = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };
    let rotX = 0;
    let rotY = 0;

    const onMouseDown = (e) => {
      isMouseDown = true;
      setIsDragging(true);
      prevMousePos = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isMouseDown = false;
      setIsDragging(false);
    };

    const onMouseMove = (e) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - prevMousePos.x;
      const deltaY = e.clientY - prevMousePos.y;
      prevMousePos = { x: e.clientX, y: e.clientY };

      dragVelocity = { x: deltaX * 0.005, y: deltaY * 0.005 };
      rotY += dragVelocity.x;
      rotX += dragVelocity.y;
      rotX = Math.max(-0.6, Math.min(0.6, rotX));
    };

    // Touch support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isMouseDown = true;
        setIsDragging(true);
        prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e) => {
      if (!isMouseDown || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMousePos.x;
      const deltaY = e.touches[0].clientY - prevMousePos.y;
      prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      rotY += deltaX * 0.006;
      rotX += deltaY * 0.006;
      rotX = Math.max(-0.6, Math.min(0.6, rotX));
    };

    const onTouchEnd = () => {
      isMouseDown = false;
      setIsDragging(false);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    let animationFrameId;
    let lastAiCanvasUpdate = 0;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const currentTime = performance.now();
      const elapsedTime = (currentTime - startTime) * 0.001;
      const currentPillar = activePillarRef.current;

      // Inertia decay for user drag rotation
      if (!isMouseDown) {
        rotY += dragVelocity.x * 0.9;
        rotX += dragVelocity.y * 0.9;
        dragVelocity.x *= 0.92;
        dragVelocity.y *= 0.92;
      }

      rootGroup.rotation.y = rotY;
      rootGroup.rotation.x = rotX;
      starPoints.rotation.y = elapsedTime * 0.03;

      // Bobbing Badges
      webBadge1.mesh.position.y = 1.35 + Math.sin(elapsedTime * 2.2) * 0.05;
      webBadge2.mesh.position.y = -1.35 + Math.cos(elapsedTime * 2) * 0.05;
      mobileBadge1.mesh.position.y = 0.9 + Math.sin(elapsedTime * 2.5) * 0.05;
      mobileBadge2.mesh.position.y = -1.0 + Math.cos(elapsedTime * 2.3) * 0.05;
      aiBadge1.mesh.position.y = 1.45 + Math.sin(elapsedTime * 2) * 0.06;
      aiBadge2.mesh.position.y = -1.45 + Math.cos(elapsedTime * 2.2) * 0.06;

      // -----------------------------------------------------------------------
      // MODEL 1: WEB APPS ANIMATION
      // -----------------------------------------------------------------------
      if (currentPillar === 'web') {
        webGroup.visible = true;
        webGroup.position.lerp(new THREE.Vector3(0, Math.sin(elapsedTime * 1.5) * 0.08, 0), 0.08);
        webGroup.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.08);
        webGroup.rotation.y = Math.sin(elapsedTime * 0.6) * 0.08;
        webGroup.rotation.x = Math.cos(elapsedTime * 0.8) * 0.04;

        mobileGroup.position.lerp(new THREE.Vector3(6, -0.5, -3), 0.08);
        mobileGroup.scale.lerp(new THREE.Vector3(0.01, 0.01, 0.01), 0.08);
        if (mobileGroup.scale.x < 0.05) mobileGroup.visible = false;

        aiGroup.position.lerp(new THREE.Vector3(-6, 0.5, -3), 0.08);
        aiGroup.scale.lerp(new THREE.Vector3(0.01, 0.01, 0.01), 0.08);
        if (aiGroup.scale.x < 0.05) aiGroup.visible = false;

        cyanLight.intensity = THREE.MathUtils.lerp(cyanLight.intensity, 6.0, 0.08);
        blueLight.intensity = THREE.MathUtils.lerp(blueLight.intensity, 2.0, 0.08);
        violetLight.intensity = THREE.MathUtils.lerp(violetLight.intensity, 2.0, 0.08);
      }

      // -----------------------------------------------------------------------
      // MODEL 2: MOBILE APPS ANIMATION
      // -----------------------------------------------------------------------
      else if (currentPillar === 'mobile') {
        mobileGroup.visible = true;
        mobileGroup.position.lerp(new THREE.Vector3(0, Math.sin(elapsedTime * 1.6) * 0.08, 0), 0.08);
        mobileGroup.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.08);
        mobileGroup.rotation.y = -0.15 + Math.sin(elapsedTime * 0.9) * 0.18;
        mobileGroup.rotation.x = Math.cos(elapsedTime * 0.7) * 0.06;

        webGroup.position.lerp(new THREE.Vector3(-6, 0, -3), 0.08);
        webGroup.scale.lerp(new THREE.Vector3(0.01, 0.01, 0.01), 0.08);
        if (webGroup.scale.x < 0.05) webGroup.visible = false;

        aiGroup.position.lerp(new THREE.Vector3(6, 0.5, -3), 0.08);
        aiGroup.scale.lerp(new THREE.Vector3(0.01, 0.01, 0.01), 0.08);
        if (aiGroup.scale.x < 0.05) aiGroup.visible = false;

        blueLight.intensity = THREE.MathUtils.lerp(blueLight.intensity, 6.5, 0.08);
        cyanLight.intensity = THREE.MathUtils.lerp(cyanLight.intensity, 2.0, 0.08);
        violetLight.intensity = THREE.MathUtils.lerp(violetLight.intensity, 2.0, 0.08);
      }

      // -----------------------------------------------------------------------
      // MODEL 3: AI ENABLEMENT ANIMATION (DYNAMIC AI WAVEFORM & SWARM)
      // -----------------------------------------------------------------------
      else if (currentPillar === 'ai') {
        aiGroup.visible = true;
        aiGroup.position.lerp(new THREE.Vector3(0, Math.sin(elapsedTime * 1.4) * 0.08, 0), 0.08);
        aiGroup.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.08);
        aiGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.06;
        aiGroup.rotation.x = Math.cos(elapsedTime * 0.7) * 0.04;

        // Dynamic update of AI screen waveform at ~20fps for silky visuals
        if (currentTime - lastAiCanvasUpdate > 45) {
          drawAiScreen(elapsedTime);
          aiTexture.needsUpdate = true;
          lastAiCanvasUpdate = currentTime;
        }

        // Neural Core Rotations & Pulsing
        aiOuterMesh.rotation.y = elapsedTime * 0.6;
        aiOuterMesh.rotation.x = elapsedTime * 0.4;
        aiInnerMesh.rotation.y = -elapsedTime * 0.8;
        const pulse = 1.0 + Math.sin(elapsedTime * 4) * 0.06;
        aiOuterMesh.scale.set(pulse, pulse, pulse);

        ring1Mesh.rotation.z = elapsedTime * 0.7;
        ring2Mesh.rotation.z = -elapsedTime * 0.8;

        // Orbiting Agent Drones & Synapses
        const synArray = synapseGeo.attributes.position.array;
        agentDrones.forEach((drone, idx) => {
          const theta = elapsedTime * drone.data.speed + drone.offset;
          const dx = Math.cos(theta) * drone.data.radius;
          const dy = Math.sin(theta * 1.3) * 0.5;
          const dz = Math.sin(theta) * drone.data.radius;
          drone.group.position.set(dx, dy, dz);
          drone.group.rotation.y = elapsedTime * 2;

          // Connect Synapse line from central brain (0, 0, 0) to drone
          synArray[idx * 6] = 0;
          synArray[idx * 6 + 1] = 0;
          synArray[idx * 6 + 2] = 0;
          synArray[idx * 6 + 3] = dx;
          synArray[idx * 6 + 4] = dy;
          synArray[idx * 6 + 5] = dz;
        });
        synapseGeo.attributes.position.needsUpdate = true;

        webGroup.position.lerp(new THREE.Vector3(-6, 0, -3), 0.08);
        webGroup.scale.lerp(new THREE.Vector3(0.01, 0.01, 0.01), 0.08);
        if (webGroup.scale.x < 0.05) webGroup.visible = false;

        mobileGroup.position.lerp(new THREE.Vector3(6, -0.5, -3), 0.08);
        mobileGroup.scale.lerp(new THREE.Vector3(0.01, 0.01, 0.01), 0.08);
        if (mobileGroup.scale.x < 0.05) mobileGroup.visible = false;

        violetLight.intensity = THREE.MathUtils.lerp(violetLight.intensity, 7.5, 0.08);
        cyanLight.intensity = THREE.MathUtils.lerp(cyanLight.intensity, 3.0, 0.08);
        blueLight.intensity = THREE.MathUtils.lerp(blueLight.intensity, 2.0, 0.08);
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    const handleResetView = () => {
      rotX = 0;
      rotY = 0;
      dragVelocity = { x: 0, y: 0 };
    };

    container.addEventListener('reset3DView', handleResetView);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('reset3DView', handleResetView);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      webScreenGeo.dispose();
      webScreenMat.dispose();
      webBezelGeo.dispose();
      webBezelMat.dispose();
      webEdgeGeo.dispose();
      webEdgeMat.dispose();
      browserTexture.dispose();
      webBadge1.geo.dispose(); webBadge1.mat.dispose(); webBadge1.texture.dispose();
      webBadge2.geo.dispose(); webBadge2.mat.dispose(); webBadge2.texture.dispose();

      phoneScreenGeo.dispose();
      phoneScreenMat.dispose();
      phoneBodyGeo.dispose();
      phoneBodyMat.dispose();
      phoneEdgeGeo.dispose();
      phoneEdgeMat.dispose();
      phoneTexture.dispose();
      camBumpGeo.dispose(); camBumpMat.dispose();
      mobileBadge1.geo.dispose(); mobileBadge1.mat.dispose(); mobileBadge1.texture.dispose();
      mobileBadge2.geo.dispose(); mobileBadge2.mat.dispose(); mobileBadge2.texture.dispose();

      aiScreenGeo.dispose(); aiScreenMat.dispose();
      aiBezelGeo.dispose(); aiBezelMat.dispose();
      aiEdgeGeo.dispose(); aiEdgeMat.dispose();
      aiTexture.dispose();
      aiOuterGeo.dispose(); aiOuterMat.dispose();
      aiInnerGeo.dispose(); aiInnerMat.dispose();
      ring1Geo.dispose(); ring1Mat.dispose();
      ring2Geo.dispose(); ring2Mat.dispose();
      synapseGeo.dispose(); synapseMat.dispose();
      aiBadge1.geo.dispose(); aiBadge1.mat.dispose(); aiBadge1.texture.dispose();
      aiBadge2.geo.dispose(); aiBadge2.mat.dispose(); aiBadge2.texture.dispose();
      starGeo.dispose(); starMat.dispose();
    };
  }, [theme]);

  const handleReset = () => {
    if (mountRef.current) {
      mountRef.current.dispatchEvent(new CustomEvent('reset3DView'));
    }
  };

  const modelSpecs = {
    web: {
      title: '3D Web Architecture Model',
      tech: 'Next.js 15 SSR • React 19 Micro-Frontends • Edge API Mesh',
      color: '#00f2fe'
    },
    mobile: {
      title: '3D Mobile Flagship Model',
      tech: 'Native iOS 18 & Android 15 • 60 FPS Fluid • Offline SQLite Sync',
      color: '#3b82f6'
    },
    ai: {
      title: '3D Autonomous AI Agent Swarm',
      tech: 'Multi-Agent LLM Orchestration • RAG Pipeline • Real-Time Token Spectrum',
      color: '#a855f7'
    }
  };

  const currentSpec = modelSpecs[activePillar] || modelSpecs.web;

  return (
    <div 
      className="three-canvas-container"
      style={{ 
        position: 'relative', 
        width: '100%', 
        height: '100%', 
        minHeight: '560px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '100%',
          cursor: isDragging ? 'grabbing' : 'grab',
          position: 'relative',
          zIndex: 2,
          userSelect: 'none'
        }}
      />

      {/* Top Spec Badge for Active 3D Model */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          left: '12px',
          right: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pointerEvents: 'none',
          zIndex: 10,
          gap: '8px'
        }}
      >
        <div
          style={{
            background: 'rgba(5, 7, 26, 0.88)',
            border: `1px solid ${currentSpec.color}44`,
            borderRadius: '12px',
            padding: '6px 12px',
            backdropFilter: 'blur(12px)',
            boxShadow: `0 4px 20px ${currentSpec.color}22`,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            maxWidth: 'calc(100% - 90px)'
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: currentSpec.color,
              boxShadow: `0 0 10px ${currentSpec.color}`,
              flexShrink: 0
            }}
          />
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.02em', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {currentSpec.title}
            </div>
            <div className="canvas-spec-tech" style={{ fontSize: '0.68rem', color: currentSpec.color, fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {currentSpec.tech}
            </div>
          </div>
        </div>

        {/* Reset View Button */}
        <div style={{ display: 'flex', gap: '8px', pointerEvents: 'auto', flexShrink: 0 }}>
          <button
            onClick={handleReset}
            title="Reset 3D Camera Angle"
            style={{
              background: 'rgba(5, 7, 26, 0.78)',
              border: '1px solid var(--border-glass)',
              color: 'var(--text-muted)',
              padding: '6px 10px',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '0.72rem',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.2s ease'
            }}
          >
            <RotateCcw size={12} />
            <span className="reset-view-label">Reset</span>
          </button>
        </div>
      </div>

      {/* Floating 3D Interactive Pillars HUD at the Bottom */}
      <div
        className="canvas-hud-container"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          background: 'rgba(3, 2, 22, 0.92)',
          padding: '5px 8px',
          borderRadius: '999px',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-glass)',
          zIndex: 10,
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.65)',
          maxWidth: 'calc(100% - 16px)',
          boxSizing: 'border-box'
        }}
      >
        {/* Option 1: Web Apps */}
        <button
          id="btn-web-apps-3d"
          onClick={() => onSelectPillar && onSelectPillar('web')}
          className="canvas-hud-btn"
          style={{
            background: activePillar === 'web' ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.25), rgba(0, 242, 254, 0.08))' : 'transparent',
            border: activePillar === 'web' ? '1.5px solid #00f2fe' : '1px solid transparent',
            color: activePillar === 'web' ? '#00f2fe' : 'var(--text-muted)',
            padding: '7px 14px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: activePillar === 'web' ? 800 : 600,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: activePillar === 'web' ? '0 0 16px rgba(0, 242, 254, 0.35)' : 'none',
            whiteSpace: 'nowrap'
          }}
        >
          <Globe size={14} color={activePillar === 'web' ? '#00f2fe' : '#94a3b8'} />
          <span className="hud-label-full">Web Apps</span>
          <span className="hud-label-compact">Web</span>
        </button>

        {/* Option 2: Mobile Apps */}
        <button
          id="btn-mobile-apps-3d"
          onClick={() => onSelectPillar && onSelectPillar('mobile')}
          className="canvas-hud-btn"
          style={{
            background: activePillar === 'mobile' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))' : 'transparent',
            border: activePillar === 'mobile' ? '1.5px solid #3b82f6' : '1px solid transparent',
            color: activePillar === 'mobile' ? '#60a5fa' : 'var(--text-muted)',
            padding: '7px 14px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: activePillar === 'mobile' ? 800 : 600,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: activePillar === 'mobile' ? '0 0 16px rgba(59, 130, 246, 0.4)' : 'none',
            whiteSpace: 'nowrap'
          }}
        >
          <Smartphone size={14} color={activePillar === 'mobile' ? '#60a5fa' : '#94a3b8'} />
          <span className="hud-label-full">Mobile Apps</span>
          <span className="hud-label-compact">Mobile</span>
        </button>

        {/* Option 3: AI Enablement */}
        <button
          id="btn-ai-enablement-3d"
          onClick={() => onSelectPillar && onSelectPillar('ai')}
          className="canvas-hud-btn"
          style={{
            background: activePillar === 'ai' ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(168, 85, 247, 0.1))' : 'transparent',
            border: activePillar === 'ai' ? '1.5px solid #a855f7' : '1px solid transparent',
            color: activePillar === 'ai' ? '#c084fc' : 'var(--text-muted)',
            padding: '7px 14px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: activePillar === 'ai' ? 800 : 600,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            boxShadow: activePillar === 'ai' ? '0 0 16px rgba(168, 85, 247, 0.45)' : 'none',
            whiteSpace: 'nowrap'
          }}
        >
          <Cpu size={14} color={activePillar === 'ai' ? '#c084fc' : '#94a3b8'} />
          <span className="hud-label-full">AI Enablement</span>
          <span className="hud-label-compact">AI</span>
        </button>
      </div>

      {/* Floating 3D Interaction Drag Hint */}
      <div
        className="canvas-drag-hint"
        style={{
          position: 'absolute',
          bottom: '62px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '0.7rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-mono)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          zIndex: 5,
          pointerEvents: 'none',
          background: 'rgba(3, 2, 20, 0.55)',
          padding: '3px 12px',
          borderRadius: '999px',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          whiteSpace: 'nowrap'
        }}
      >
        <Move3d size={11} color={currentSpec.color} />
        <span>Drag to rotate 3D • Tap tabs below</span>
      </div>

      <style>{`
        .hud-label-compact {
          display: none;
        }
        .hud-label-full {
          display: inline;
        }
        @media (max-width: 520px) {
          .hud-label-compact {
            display: inline !important;
          }
          .hud-label-full {
            display: none !important;
          }
          .canvas-spec-tech {
            display: none !important;
          }
          .canvas-hud-btn {
            padding: 6px 11px !important;
            font-size: 0.74rem !important;
          }
        }
        @media (max-width: 400px) {
          .canvas-drag-hint {
            display: none !important;
          }
          .reset-view-label {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
