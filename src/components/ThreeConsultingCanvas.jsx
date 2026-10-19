import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Globe, Smartphone, Cpu, Sparkles, RefreshCw } from 'lucide-react';

export default function ThreeConsultingCanvas({ activePillar, onSelectPillar, theme }) {
  const mountRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    let width = container.clientWidth || 500;
    let height = container.clientHeight || 450;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group to hold all rotating elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 3, 20);
    cyanLight.position.set(4, 3, 5);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0xa855f7, 3, 20);
    violetLight.position.set(-4, -3, 4);
    scene.add(violetLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 2.5, 20);
    blueLight.position.set(0, 5, -2);
    scene.add(blueLight);

    // 1. Central Core - High-tech Crystalline Polyhedron
    const coreGeo = new THREE.IcosahedronGeometry(1.35, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: theme === 'light' ? 0x0284c7 : 0x0b0e29,
      emissive: theme === 'light' ? 0x0ea5e9 : 0x00f2fe,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.85,
      wireframe: false,
      transparent: true,
      opacity: 0.92
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // Outer Faceted Wireframe Cage
    const cageGeo = new THREE.IcosahedronGeometry(1.65, 1);
    const cageMat = new THREE.MeshBasicMaterial({
      color: theme === 'light' ? 0x7c3aed : 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.55
    });
    const cageMesh = new THREE.Mesh(cageGeo, cageMat);
    mainGroup.add(cageMesh);

    // Inner Glowing Nano-Sphere
    const innerGeo = new THREE.SphereGeometry(0.75, 24, 24);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0x7928ca,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    mainGroup.add(innerMesh);

    // 2. Three Angled Orbital Holographic Rings
    const ringGeo1 = new THREE.TorusGeometry(2.35, 0.015, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00f2fe, transparent: true, opacity: 0.6 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(2.7, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x3b82f6, transparent: true, opacity: 0.5 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(3.05, 0.015, 16, 100);
    const ringMat3 = new THREE.MeshBasicMaterial({ color: 0xa855f7, transparent: true, opacity: 0.6 });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 3.5;
    mainGroup.add(ring3);

    // 3. Orbiting Satellite Nodes for WEB, MOBILE, AI
    // Node 1: Web (Cyan)
    const node1Group = new THREE.Group();
    const nodeGeo = new THREE.SphereGeometry(0.24, 16, 16);
    const node1Mat = new THREE.MeshStandardMaterial({
      color: 0x00f2fe,
      emissive: 0x00f2fe,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1
    });
    const node1Mesh = new THREE.Mesh(nodeGeo, node1Mat);
    node1Mesh.position.set(2.35, 0, 0);
    node1Group.add(node1Mesh);
    node1Group.rotation.x = Math.PI / 3;
    mainGroup.add(node1Group);

    // Node 2: Mobile (Blue)
    const node2Group = new THREE.Group();
    const node2Mat = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x3b82f6,
      emissiveIntensity: 0.8,
      metalness: 0.9,
      roughness: 0.1
    });
    const node2Mesh = new THREE.Mesh(nodeGeo, node2Mat);
    node2Mesh.position.set(2.7, 0, 0);
    node2Group.add(node2Mesh);
    node2Group.rotation.y = Math.PI / 4;
    node2Group.rotation.x = -Math.PI / 6;
    mainGroup.add(node2Group);

    // Node 3: AI (Violet)
    const node3Group = new THREE.Group();
    const node3Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.9,
      metalness: 0.9,
      roughness: 0.1
    });
    const node3Mesh = new THREE.Mesh(nodeGeo, node3Mat);
    node3Mesh.position.set(3.05, 0, 0);
    node3Group.add(node3Mesh);
    node3Group.rotation.z = Math.PI / 3.5;
    mainGroup.add(node3Group);

    // 4. Floating Particles Constellation Cloud
    const particleCount = 420;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x00f2fe);
    const c2 = new THREE.Color(0xa855f7);
    const c3 = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.4 + Math.random() * 2.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const particlePoints = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particlePoints);

    // Mouse Tracking for Parallax / Tilt
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 1.8;
      targetY = y * 1.8;
    };

    container.addEventListener('mousemove', onMouseMove);

    // Animation Loop
    let animationFrameId;
    const startTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Smooth mouse rotation damping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.25 + mouseX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + mouseY;

      // Internal cage counter-rotation
      cageMesh.rotation.y = -elapsedTime * 0.35;
      cageMesh.rotation.z = elapsedTime * 0.2;
      coreMesh.rotation.y = elapsedTime * 0.18;
      innerMesh.rotation.x = elapsedTime * 0.4;

      // Orbital Satellites Revolution
      node1Group.rotation.z = elapsedTime * 0.8;
      node2Group.rotation.z = -elapsedTime * 0.65;
      node3Group.rotation.z = elapsedTime * 0.5;

      // Subtle pulse based on active pillar
      if (activePillar === 'web') {
        node1Mesh.scale.setScalar(1.4 + Math.sin(elapsedTime * 6) * 0.25);
        node2Mesh.scale.setScalar(1);
        node3Mesh.scale.setScalar(1);
      } else if (activePillar === 'mobile') {
        node2Mesh.scale.setScalar(1.4 + Math.sin(elapsedTime * 6) * 0.25);
        node1Mesh.scale.setScalar(1);
        node3Mesh.scale.setScalar(1);
      } else if (activePillar === 'ai') {
        node3Mesh.scale.setScalar(1.4 + Math.sin(elapsedTime * 6) * 0.25);
        node1Mesh.scale.setScalar(1);
        node2Mesh.scale.setScalar(1);
      } else {
        node1Mesh.scale.setScalar(1.1);
        node2Mesh.scale.setScalar(1.1);
        node3Mesh.scale.setScalar(1.1);
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
      coreGeo.dispose();
      cageGeo.dispose();
      innerGeo.dispose();
      ringGeo1.dispose();
      ringGeo2.dispose();
      ringGeo3.dispose();
      nodeGeo.dispose();
      particleGeo.dispose();
      coreMat.dispose();
      cageMat.dispose();
      innerMat.dispose();
      ringMat1.dispose();
      ringMat2.dispose();
      ringMat3.dispose();
      node1Mat.dispose();
      node2Mat.dispose();
      node3Mat.dispose();
      particleMat.dispose();
    };
  }, [theme, activePillar]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '440px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* 3D WebGL Canvas Container */}
      <div
        ref={mountRef}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '440px',
          cursor: 'grab',
          position: 'relative',
          zIndex: 2
        }}
      />

      {/* Floating 3D Interactive Pillars HUD */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
          background: 'rgba(3, 0, 20, 0.7)',
          padding: '6px 10px',
          borderRadius: '999px',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-glass)',
          zIndex: 10,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}
      >
        <button
          onClick={() => onSelectPillar && onSelectPillar('web')}
          style={{
            background: activePillar === 'web' ? 'rgba(0, 242, 254, 0.2)' : 'transparent',
            border: activePillar === 'web' ? '1px solid #00f2fe' : '1px solid transparent',
            color: activePillar === 'web' ? '#00f2fe' : 'var(--text-muted)',
            padding: '5px 12px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <Globe size={13} color="#00f2fe" />
          <span>Web Apps</span>
        </button>

        <button
          onClick={() => onSelectPillar && onSelectPillar('mobile')}
          style={{
            background: activePillar === 'mobile' ? 'rgba(59, 130, 246, 0.25)' : 'transparent',
            border: activePillar === 'mobile' ? '1px solid #3b82f6' : '1px solid transparent',
            color: activePillar === 'mobile' ? '#60a5fa' : 'var(--text-muted)',
            padding: '5px 12px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <Smartphone size={13} color="#3b82f6" />
          <span>Mobile Apps</span>
        </button>

        <button
          onClick={() => onSelectPillar && onSelectPillar('ai')}
          style={{
            background: activePillar === 'ai' ? 'rgba(168, 85, 247, 0.25)' : 'transparent',
            border: activePillar === 'ai' ? '1px solid #a855f7' : '1px solid transparent',
            color: activePillar === 'ai' ? '#c084fc' : 'var(--text-muted)',
            padding: '5px 12px',
            borderRadius: '999px',
            fontSize: '0.78rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <Cpu size={13} color="#a855f7" />
          <span>AI Enablement</span>
        </button>
      </div>

      {/* Floating 3D Interaction Hint */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '16px',
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-mono)',
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          zIndex: 5,
          pointerEvents: 'none'
        }}
      >
        <Sparkles size={11} color="var(--cyan-core)" />
        <span>Interactive 3D WebGL • Move cursor</span>
      </div>
    </div>
  );
}
