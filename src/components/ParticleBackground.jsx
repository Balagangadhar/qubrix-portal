import React, { useEffect, useRef } from 'react';

export default function ParticleBackground({ theme }) {
  const canvasRef = useRef(null);
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const mouse = {
      x: null,
      y: null,
      radius: 140
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const particleCount = Math.min(Math.floor((width * height) / 18000), 70);
    const particles = [];

    const darkColors = [
      'rgba(0, 242, 254, ',   // electric cyan
      'rgba(168, 85, 247, ',  // violet
      'rgba(121, 40, 202, ',  // deep violet
      'rgba(56, 189, 248, '   // light sky
    ];

    const lightColors = [
      'rgba(2, 132, 199, ',   // rich cyan
      'rgba(124, 58, 237, ',  // rich violet
      'rgba(37, 99, 235, ',   // blue
      'rgba(147, 51, 234, '   // purple
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2.2 + 1,
        colorIndex: Math.floor(Math.random() * 4),
        alpha: Math.random() * 0.4 + 0.25,
        pulseSpeed: 0.02 + Math.random() * 0.02,
        pulseVal: Math.random() * Math.PI
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = themeRef.current === 'light';
      const activePalette = isLight ? lightColors : darkColors;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.pulseVal += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseVal) * 0.15;
        const radius = p.size + Math.sin(p.pulseVal) * 0.4;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 1.5;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        const colorBase = activePalette[p.colorIndex];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.8, radius), 0, Math.PI * 2);
        ctx.fillStyle = `${colorBase}${Math.max(0.1, currentAlpha)})`;
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            const lineAlpha = (1 - distance / 130) * (isLight ? 0.22 : 0.18);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isLight 
              ? `rgba(124, 58, 237, ${lineAlpha})`
              : `rgba(168, 85, 247, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-canvas-container" aria-hidden="true">
      <div className="ambient-nebula-1" />
      <div className="ambient-nebula-2" />
      <div className="ambient-nebula-3" />
      <div className="cyber-grid-overlay" />
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.9
        }}
      />
    </div>
  );
}
