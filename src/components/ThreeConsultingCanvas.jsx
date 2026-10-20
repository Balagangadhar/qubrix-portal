import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Globe, Smartphone, Cpu, Sparkles, RefreshCw, Layers } from 'lucide-react';

export default function ThreeConsultingCanvas({ activePillar, onSelectPillar, theme }) {
  const mountRef = useRef(null);
  const [hoveredEntity, setHoveredEntity] = useState(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || 540;
    let height = container.clientHeight || 480;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 7.8);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Dynamic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 4, 18);
    cyanLight.position.set(-3.5, 2, 4);
    scene.add(cyanLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 3.5, 18);
    blueLight.position.set(3.5, -1, 4);
    scene.add(blueLight);

    const violetLight = new THREE.PointLight(0xa855f7, 5, 20);
    violetLight.position.set(0, 3.8, 3);
    scene.add(violetLight);

    // =========================================================================
    // 1. PROCEDURAL 3D TEXTURES: BROWSER WEB APP & SMARTPHONE MOBILE APP
    // =========================================================================

    // A. Web Browser Window Canvas Texture
    const browserCanvas = document.createElement('canvas');
    browserCanvas.width = 1024;
    browserCanvas.height = 680;
    const bCtx = browserCanvas.getContext('2d');

    const drawBrowserScreen = () => {
      // Window Background
      bCtx.fillStyle = '#070a24';
      bCtx.fillRect(0, 0, 1024, 680);

      // Window Header Bar
      bCtx.fillStyle = '#0f1738';
      bCtx.fillRect(0, 0, 1024, 60);

      // 3 Window Dots (Red, Yellow, Green)
      bCtx.fillStyle = '#ff5f56';
      bCtx.beginPath(); bCtx.arc(36, 30, 9, 0, Math.PI * 2); bCtx.fill();
      bCtx.fillStyle = '#ffbd2e';
      bCtx.beginPath(); bCtx.arc(66, 30, 9, 0, Math.PI * 2); bCtx.fill();
      bCtx.fillStyle = '#27c93f';
      bCtx.beginPath(); bCtx.arc(96, 30, 9, 0, Math.PI * 2); bCtx.fill();

      // Search / URL Bar
      bCtx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      bCtx.roundRect(140, 14, 520, 32, 8);
      bCtx.fill();
      bCtx.fillStyle = '#00f2fe';
      bCtx.font = 'bold 15px monospace';
      bCtx.fillText('🔒 https://cloud.qubrix.com/enterprise/dashboard', 160, 36);

      // Sidebar
      bCtx.fillStyle = '#0b102f';
      bCtx.fillRect(0, 60, 200, 620);
      bCtx.fillStyle = 'rgba(0, 242, 254, 0.3)';
      bCtx.fillRect(20, 95, 160, 28);
      bCtx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      bCtx.fillRect(20, 140, 160, 20);
      bCtx.fillRect(20, 175, 160, 20);
      bCtx.fillRect(20, 210, 160, 20);

      // Dashboard Main Content Cards
      bCtx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      bCtx.roundRect(230, 90, 750, 180, 14);
      bCtx.fill();

      // Header Text
      bCtx.fillStyle = '#ffffff';
      bCtx.font = 'bold 26px sans-serif';
      bCtx.fillText('Enterprise Micro-Frontend Architecture', 260, 135);
      bCtx.fillStyle = '#94a3b8';
      bCtx.font = '16px sans-serif';
      bCtx.fillText('React 19 • Next.js 15 SSR • 99.99% Cloud SLA • Sub-12ms Edge APIs', 260, 170);

      // Metric Boxes
      bCtx.fillStyle = 'rgba(0, 242, 254, 0.12)';
      bCtx.roundRect(260, 195, 210, 55, 8);
      bCtx.fill();
      bCtx.fillStyle = '#00f2fe';
      bCtx.font = 'bold 18px monospace';
      bCtx.fillText('14.2ms P99 LATENCY', 275, 230);

      bCtx.fillStyle = 'rgba(168, 85, 247, 0.12)';
      bCtx.roundRect(490, 195, 210, 55, 8);
      bCtx.fill();
      bCtx.fillStyle = '#c084fc';
      bCtx.font = 'bold 18px monospace';
      bCtx.fillText('120K REQ/SEC', 525, 230);

      // Lower Data Grid
      bCtx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      bCtx.roundRect(230, 290, 360, 350, 14);
      bCtx.fill();

      // Simulated Chart Lines
      bCtx.strokeStyle = '#00f2fe';
      bCtx.lineWidth = 4;
      bCtx.beginPath();
      bCtx.moveTo(260, 560);
      bCtx.lineTo(310, 500);
      bCtx.lineTo(370, 530);
      bCtx.lineTo(430, 440);
      bCtx.lineTo(490, 470);
      bCtx.lineTo(550, 360);
      bCtx.stroke();

      // Right Side Code Block
      bCtx.fillStyle = '#040718';
      bCtx.roundRect(610, 290, 370, 350, 14);
      bCtx.fill();
      bCtx.fillStyle = '#38bdf8';
      bCtx.font = '14px monospace';
      bCtx.fillText('// Auto-Scale Cluster Config', 635, 330);
      bCtx.fillStyle = '#f43f5e';
      bCtx.fillText('export const runtime = "edge";', 635, 360);
      bCtx.fillStyle = '#a855f7';
      bCtx.fillText('export async function GET(req) {', 635, 390);
      bCtx.fillStyle = '#10b981';
      bCtx.fillText('  const swarm = await AI.route(req);', 655, 420);
      bCtx.fillStyle = '#00f2fe';
      bCtx.fillText('  return streamResponse(swarm);', 655, 450);
      bCtx.fillStyle = '#a855f7';
      bCtx.fillText('}', 635, 480);
    };

    drawBrowserScreen();
    const browserTexture = new THREE.CanvasTexture(browserCanvas);
    browserTexture.anisotropy = 8;

    // B. Mobile Smartphone Screen Texture
    const phoneCanvas = document.createElement('canvas');
    phoneCanvas.width = 540;
    phoneCanvas.height = 1080;
    const pCtx = phoneCanvas.getContext('2d');

    const drawPhoneScreen = () => {
      // Screen background
      pCtx.fillStyle = '#05071a';
      pCtx.fillRect(0, 0, 540, 1080);

      // Top Status Bar (Time, Battery, Wifi)
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 22px sans-serif';
      pCtx.fillText('9:41', 50, 60);

      // Dynamic Island / Camera Pill
      pCtx.fillStyle = '#000000';
      pCtx.roundRect(180, 26, 180, 46, 23);
      pCtx.fill();
      pCtx.fillStyle = '#1e293b';
      pCtx.beginPath(); pCtx.arc(320, 49, 9, 0, Math.PI * 2); pCtx.fill();

      // Header Greeting
      pCtx.fillStyle = '#94a3b8';
      pCtx.font = '18px sans-serif';
      pCtx.fillText('Qubrix Native iOS & Android', 40, 140);
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 32px sans-serif';
      pCtx.fillText('Mobile Engineering', 40, 185);

      // Balance / Metric Hero Card
      const grad = pCtx.createLinearGradient(40, 220, 500, 400);
      grad.addColorStop(0, '#3b82f6');
      grad.addColorStop(1, '#1d4ed8');
      pCtx.fillStyle = grad;
      pCtx.roundRect(40, 220, 460, 220, 24);
      pCtx.fill();

      pCtx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      pCtx.font = '16px sans-serif';
      pCtx.fillText('OFFLINE-FIRST SYNCHRONIZATION', 70, 265);
      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 44px monospace';
      pCtx.fillText('60 FPS FLUID', 70, 325);
      pCtx.fillStyle = '#93c5fd';
      pCtx.font = '18px sans-serif';
      pCtx.fillText('Biometric Enclave • WatermelonDB Sync', 70, 385);

      // Quick Action Buttons
      const actions = ['Transfer', 'AI Assistant', 'Biometrics', 'Analytics'];
      actions.forEach((act, idx) => {
        pCtx.fillStyle = 'rgba(255, 255, 255, 0.08)';
        pCtx.roundRect(40 + idx * 118, 470, 105, 90, 18);
        pCtx.fill();
        pCtx.fillStyle = '#60a5fa';
        pCtx.font = 'bold 15px sans-serif';
        pCtx.fillText(act, 50 + idx * 118, 525);
      });

      // App Transactions / Feeds
      pCtx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      pCtx.roundRect(40, 590, 460, 410, 24);
      pCtx.fill();

      pCtx.fillStyle = '#ffffff';
      pCtx.font = 'bold 22px sans-serif';
      pCtx.fillText('Real-Time App Events', 65, 635);

      for (let i = 0; i < 4; i++) {
        pCtx.fillStyle = 'rgba(255, 255, 255, 0.05)';
        pCtx.roundRect(65, 660 + i * 75, 410, 60, 12);
        pCtx.fill();

        pCtx.fillStyle = i === 0 ? '#10b981' : '#38bdf8';
        pCtx.beginPath();
        pCtx.arc(95, 690 + i * 75, 14, 0, Math.PI * 2);
        pCtx.fill();

        pCtx.fillStyle = '#ffffff';
        pCtx.font = 'bold 16px sans-serif';
        pCtx.fillText(i === 0 ? 'FaceID WebAuthn Verified' : i === 1 ? 'WebSocket Stream Synced' : i === 2 ? 'Local SQLite Query (<2ms)' : 'Cloudflare Edge Cache Hit', 125, 686 + i * 75);
        pCtx.fillStyle = '#94a3b8';
        pCtx.font = '13px sans-serif';
        pCtx.fillText('iOS 18 & Android 15 Ready', 125, 706 + i * 75);
      }

      // Bottom Home Indicator Bar
      pCtx.fillStyle = '#ffffff';
      pCtx.roundRect(190, 1040, 160, 6, 3);
      pCtx.fill();
    };

    drawPhoneScreen();
    const phoneTexture = new THREE.CanvasTexture(phoneCanvas);
    phoneTexture.anisotropy = 8;

    // =========================================================================
    // 2. BUILD 3D WEB BROWSER OBJECT
    // =========================================================================
    const webGroup = new THREE.Group();
    rootGroup.add(webGroup);

    // Browser Screen Mesh
    const browserWidth = 3.6;
    const browserHeight = 2.4;
    const browserGeo = new THREE.PlaneGeometry(browserWidth, browserHeight);
    const browserMat = new THREE.MeshStandardMaterial({
      map: browserTexture,
      roughness: 0.2,
      metalness: 0.1,
      side: THREE.DoubleSide
    });
    const browserMesh = new THREE.Mesh(browserGeo, browserMat);
    webGroup.add(browserMesh);

    // Sleek Aluminum Bezel / Frame
    const bezelGeo = new THREE.BoxGeometry(browserWidth + 0.12, browserHeight + 0.12, 0.08);
    const bezelMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.4,
      metalness: 0.8
    });
    const bezelMesh = new THREE.Mesh(bezelGeo, bezelMat);
    bezelMesh.position.z = -0.045;
    webGroup.add(bezelMesh);

    // Outer Glowing Cyan Neon Border
    const edgeGeo = new THREE.EdgesGeometry(bezelGeo);
    const edgeMat = new THREE.LineBasicMaterial({ color: 0x00f2fe, linewidth: 2, transparent: true, opacity: 0.75 });
    const edgeLines = new THREE.LineSegments(edgeGeo, edgeMat);
    webGroup.add(edgeLines);

    // Position Web Window to the Left & Angled
    webGroup.position.set(-1.45, -0.25, -0.4);
    webGroup.rotation.set(0.08, 0.32, -0.04);

    // =========================================================================
    // 3. BUILD 3D MOBILE SMARTPHONE OBJECT
    // =========================================================================
    const mobileGroup = new THREE.Group();
    rootGroup.add(mobileGroup);

    // Smartphone Screen Mesh
    const phoneWidth = 1.35;
    const phoneHeight = 2.7;
    const phoneScreenGeo = new THREE.PlaneGeometry(phoneWidth, phoneHeight);
    const phoneScreenMat = new THREE.MeshStandardMaterial({
      map: phoneTexture,
      roughness: 0.15,
      metalness: 0.15,
      side: THREE.DoubleSide
    });
    const phoneScreenMesh = new THREE.Mesh(phoneScreenGeo, phoneScreenMat);
    phoneScreenMesh.position.z = 0.042;
    mobileGroup.add(phoneScreenMesh);

    // Smartphone Chassis / Titanium Body
    const phoneBodyGeo = new THREE.BoxGeometry(phoneWidth + 0.1, phoneHeight + 0.1, 0.08);
    const phoneBodyMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.2,
      metalness: 0.9
    });
    const phoneBodyMesh = new THREE.Mesh(phoneBodyGeo, phoneBodyMat);
    mobileGroup.add(phoneBodyMesh);

    // Glowing Azure Edge Border
    const phoneEdgeGeo = new THREE.EdgesGeometry(phoneBodyGeo);
    const phoneEdgeMat = new THREE.LineBasicMaterial({ color: 0x3b82f6, linewidth: 2, transparent: true, opacity: 0.85 });
    const phoneEdgeLines = new THREE.LineSegments(phoneEdgeGeo, phoneEdgeMat);
    mobileGroup.add(phoneEdgeLines);

    // Position Mobile Device in Foreground Right
    mobileGroup.position.set(1.9, -0.3, 0.85);
    mobileGroup.rotation.set(-0.06, -0.38, 0.08);

    // =========================================================================
    // 4. BUILD 3D NEURAL AI CORE & AGENT SWARM
    // =========================================================================
    const aiGroup = new THREE.Group();
    rootGroup.add(aiGroup);

    // Central Luminous AI Brain Core
    const aiCoreGeo = new THREE.IcosahedronGeometry(0.72, 2);
    const aiCoreMat = new THREE.MeshStandardMaterial({
      color: 0x581c87,
      emissive: 0xa855f7,
      emissiveIntensity: 0.8,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9
    });
    const aiCoreMesh = new THREE.Mesh(aiCoreGeo, aiCoreMat);
    aiGroup.add(aiCoreMesh);

    // Inner Glowing Core Sphere
    const innerAiGeo = new THREE.SphereGeometry(0.42, 20, 20);
    const innerAiMat = new THREE.MeshBasicMaterial({ color: 0xc084fc, wireframe: true });
    const innerAiMesh = new THREE.Mesh(innerAiGeo, innerAiMat);
    aiGroup.add(innerAiMesh);

    // Orbiting Agent Nodes (Architect, Coder, RAG, Evaluator)
    const agentNodesCount = 6;
    const agentNodes = [];
    const agentNodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    const agentNodeMat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.9,
      roughness: 0.1
    });

    for (let i = 0; i < agentNodesCount; i++) {
      const aMesh = new THREE.Mesh(agentNodeGeo, agentNodeMat);
      aiGroup.add(aMesh);
      agentNodes.push({
        mesh: aMesh,
        speed: 0.6 + i * 0.18,
        radius: 1.1 + (i % 2) * 0.35,
        offset: (i * Math.PI * 2) / agentNodesCount
      });
    }

    // Neural Synapse Connection Lines
    const synapseGeo = new THREE.BufferGeometry();
    const synapsePos = new Float32Array(agentNodesCount * 6);
    synapseGeo.setAttribute('position', new THREE.BufferAttribute(synapsePos, 3));
    const synapseMat = new THREE.LineBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.65 });
    const synapseLines = new THREE.LineSegments(synapseGeo, synapseMat);
    aiGroup.add(synapseLines);

    // Position AI Brain at Upper Center
    aiGroup.position.set(0.1, 1.7, 0.15);

    // =========================================================================
    // 5. DATA STREAMS: CONNECTING AI -> WEB APP & AI -> MOBILE APP
    // =========================================================================
    const dataStreamCount = 180;
    const streamGeo = new THREE.BufferGeometry();
    const streamPositions = new Float32Array(dataStreamCount * 3);
    const streamColors = new Float32Array(dataStreamCount * 3);

    const cyanColor = new THREE.Color(0x00f2fe);
    const blueColor = new THREE.Color(0x3b82f6);
    const purpleColor = new THREE.Color(0xa855f7);

    for (let i = 0; i < dataStreamCount; i++) {
      streamPositions[i * 3] = (Math.random() - 0.5) * 6;
      streamPositions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      streamPositions[i * 3 + 2] = (Math.random() - 0.5) * 3;

      const col = i % 3 === 0 ? cyanColor : i % 3 === 1 ? blueColor : purpleColor;
      streamColors[i * 3] = col.r;
      streamColors[i * 3 + 1] = col.g;
      streamColors[i * 3 + 2] = col.b;
    }

    streamGeo.setAttribute('position', new THREE.BufferAttribute(streamPositions, 3));
    streamGeo.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));

    const streamMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });
    const streamPoints = new THREE.Points(streamGeo, streamMat);
    rootGroup.add(streamPoints);

    // =========================================================================
    // 6. ANIMATION & INTERACTIVE TARGETING
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.9;
      targetY = y * 0.9;
    };

    container.addEventListener('mousemove', onMouseMove);

    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Mouse Parallax Damping
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      rootGroup.rotation.y = mouseX * 0.45;
      rootGroup.rotation.x = mouseY * 0.3;

      // Gentle floating kinematics for Web and Mobile
      webGroup.position.y = -0.25 + Math.sin(elapsedTime * 1.2) * 0.06;
      mobileGroup.position.y = -0.3 + Math.cos(elapsedTime * 1.5) * 0.07;

      // AI Core Rotation & Breathing
      aiCoreMesh.rotation.y = elapsedTime * 0.45;
      aiCoreMesh.rotation.x = elapsedTime * 0.25;
      innerAiMesh.rotation.z = -elapsedTime * 0.6;
      const pulseScale = 1 + Math.sin(elapsedTime * 3) * 0.05;
      aiCoreMesh.scale.set(pulseScale, pulseScale, pulseScale);

      // Orbiting Agent Nodes
      const positions = synapseGeo.attributes.position.array;
      agentNodes.forEach((node, idx) => {
        const theta = elapsedTime * node.speed + node.offset;
        const x = Math.cos(theta) * node.radius;
        const y = Math.sin(theta * 0.8) * 0.45;
        const z = Math.sin(theta) * node.radius;
        node.mesh.position.set(x, y, z);

        // Update synapse connection lines to central core (0,0,0)
        positions[idx * 6] = 0;
        positions[idx * 6 + 1] = 0;
        positions[idx * 6 + 2] = 0;
        positions[idx * 6 + 3] = x;
        positions[idx * 6 + 4] = y;
        positions[idx * 6 + 5] = z;
      });
      synapseGeo.attributes.position.needsUpdate = true;

      // Active Pillar Highlighting & Focus Transformation
      if (activePillar === 'web') {
        webGroup.scale.lerp(new THREE.Vector3(1.15, 1.15, 1.15), 0.06);
        mobileGroup.scale.lerp(new THREE.Vector3(0.9, 0.9, 0.9), 0.06);
        aiGroup.scale.lerp(new THREE.Vector3(0.9, 0.9, 0.9), 0.06);
        cyanLight.intensity = 5.5;
        blueLight.intensity = 1.5;
        violetLight.intensity = 2.0;
      } else if (activePillar === 'mobile') {
        mobileGroup.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.06);
        webGroup.scale.lerp(new THREE.Vector3(0.9, 0.9, 0.9), 0.06);
        aiGroup.scale.lerp(new THREE.Vector3(0.9, 0.9, 0.9), 0.06);
        blueLight.intensity = 5.5;
        cyanLight.intensity = 1.5;
        violetLight.intensity = 2.0;
      } else if (activePillar === 'ai') {
        aiGroup.scale.lerp(new THREE.Vector3(1.28, 1.28, 1.28), 0.06);
        webGroup.scale.lerp(new THREE.Vector3(0.9, 0.9, 0.9), 0.06);
        mobileGroup.scale.lerp(new THREE.Vector3(0.9, 0.9, 0.9), 0.06);
        violetLight.intensity = 7.0;
        cyanLight.intensity = 2.0;
        blueLight.intensity = 2.0;
      } else {
        webGroup.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
        mobileGroup.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
        aiGroup.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05);
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

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', onMouseMove);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      browserGeo.dispose();
      browserMat.dispose();
      bezelGeo.dispose();
      bezelMat.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      phoneScreenGeo.dispose();
      phoneScreenMat.dispose();
      phoneBodyGeo.dispose();
      phoneBodyMat.dispose();
      phoneEdgeGeo.dispose();
      phoneEdgeMat.dispose();
      aiCoreGeo.dispose();
      aiCoreMat.dispose();
      innerAiGeo.dispose();
      innerAiMat.dispose();
      agentNodeGeo.dispose();
      agentNodeMat.dispose();
      synapseGeo.dispose();
      synapseMat.dispose();
      streamGeo.dispose();
      streamMat.dispose();
      browserTexture.dispose();
      phoneTexture.dispose();
    };
  }, [theme, activePillar]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '480px',
          cursor: 'grab',
          position: 'relative',
          zIndex: 2
        }}
      />

      {/* Floating 3D Interactive Pillars HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          background: 'rgba(3, 0, 20, 0.75)',
          padding: '6px 12px',
          borderRadius: '999px',
          backdropFilter: 'blur(16px)',
          border: '1px solid var(--border-glass)',
          zIndex: 10,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
        }}
      >
        <button
          onClick={() => onSelectPillar && onSelectPillar('web')}
          style={{
            background: activePillar === 'web' ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
            border: activePillar === 'web' ? '1px solid #00f2fe' : '1px solid transparent',
            color: activePillar === 'web' ? '#00f2fe' : 'var(--text-muted)',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <Globe size={14} color="#00f2fe" />
          <span>Web Apps</span>
        </button>

        <button
          onClick={() => onSelectPillar && onSelectPillar('mobile')}
          style={{
            background: activePillar === 'mobile' ? 'rgba(59, 130, 246, 0.25)' : 'transparent',
            border: activePillar === 'mobile' ? '1px solid #3b82f6' : '1px solid transparent',
            color: activePillar === 'mobile' ? '#60a5fa' : 'var(--text-muted)',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <Smartphone size={14} color="#3b82f6" />
          <span>Mobile Apps</span>
        </button>

        <button
          onClick={() => onSelectPillar && onSelectPillar('ai')}
          style={{
            background: activePillar === 'ai' ? 'rgba(168, 85, 247, 0.25)' : 'transparent',
            border: activePillar === 'ai' ? '1px solid #a855f7' : '1px solid transparent',
            color: activePillar === 'ai' ? '#c084fc' : 'var(--text-muted)',
            padding: '6px 14px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <Cpu size={14} color="#a855f7" />
          <span>AI Enablement</span>
        </button>
      </div>

      {/* Floating 3D Interaction Hint */}
      <div
        style={{
          position: 'absolute',
          top: '14px',
          right: '18px',
          fontSize: '0.74rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-mono)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          zIndex: 5,
          pointerEvents: 'none',
          background: 'rgba(3, 0, 20, 0.6)',
          padding: '4px 10px',
          borderRadius: '999px',
          border: '1px solid var(--border-glass)'
        }}
      >
        <Sparkles size={12} color="var(--cyan-core)" />
        <span>Live 3D Ecosystem • Web • Mobile • AI</span>
      </div>
    </div>
  );
}
