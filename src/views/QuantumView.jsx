import React, { useState, useEffect } from 'react';
import { 
  Atom, 
  Sparkles, 
  Play, 
  RotateCcw, 
  Info, 
  CheckCircle2, 
  HelpCircle, 
  Cpu, 
  Zap, 
  Layers, 
  ArrowRight,
  Sliders,
  Activity
} from 'lucide-react';

export default function QuantumView({ setView }) {
  // Single Qubit State: theta (0 to PI), phi (0 to 2*PI)
  const [theta, setTheta] = useState(0); // 0 = |0>, PI = |1>, PI/2 = Superposition |+>
  const [phi, setPhi] = useState(0);
  const [measurementResult, setMeasurementResult] = useState(null);
  const [shotStats, setShotStats] = useState({ zero: 0, one: 0, total: 0 });
  const [isMeasuring, setIsMeasuring] = useState(false);

  // Gates applied history on q0
  const [gateHistory, setGateHistory] = useState([]);

  // Entanglement Lab State
  const [entangledState, setEntangledState] = useState(false);
  const [entangleStats, setEntangleStats] = useState({ '00': 0, '11': 0, total: 0 });
  const [lastEntangledOutcome, setLastEntangledOutcome] = useState(null);

  // Micro-Quiz State
  const [quizScore, setQuizScore] = useState({});
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Calculate probabilities from theta
  // P(0) = cos^2(theta / 2), P(1) = sin^2(theta / 2)
  const prob0 = Math.cos(theta / 2) ** 2;
  const prob1 = Math.sin(theta / 2) ** 2;

  // Bloch sphere 3D to 2D projection coordinates
  // Sphere center at (150, 150), radius 110
  const radius = 100;
  const cx = 150;
  const cy = 150;

  // Cartesian coordinates:
  // x = sin(theta) * cos(phi)
  // y = sin(theta) * sin(phi)
  // z = cos(theta)
  // Isometric projection:
  // projX = cx + radius * (x * cos(30 deg) - y * sin(30 deg))
  // projY = cy - radius * (z - 0.4 * (x * sin(30 deg) + y * cos(30 deg)))
  const xCoord = Math.sin(theta) * Math.cos(phi);
  const yCoord = Math.sin(theta) * Math.sin(phi);
  const zCoord = Math.cos(theta);

  // 2.5D projection on screen
  const tipX = cx + radius * (xCoord * 0.86 - yCoord * 0.4);
  const tipY = cy - radius * (zCoord * 0.85 + (xCoord * 0.2 + yCoord * 0.35) * 0.5);

  // Preset state applicators
  const applyPreset = (presetName) => {
    setMeasurementResult(null);
    if (presetName === 'zero') {
      setTheta(0);
      setPhi(0);
      setGateHistory(['|0⟩ (Ground)']);
    } else if (presetName === 'one') {
      setTheta(Math.PI);
      setPhi(0);
      setGateHistory(['|1⟩ (Excited)']);
    } else if (presetName === 'plus') {
      setTheta(Math.PI / 2);
      setPhi(0);
      setGateHistory(['|+⟩ = (|0⟩ + |1⟩)/√2']);
    } else if (presetName === 'minus') {
      setTheta(Math.PI / 2);
      setPhi(Math.PI);
      setGateHistory(['|-⟩ = (|0⟩ - |1⟩)/√2']);
    } else if (presetName === 'i') {
      setTheta(Math.PI / 2);
      setPhi(Math.PI / 2);
      setGateHistory(['|i⟩ = (|0⟩ + i|1⟩)/√2']);
    }
  };

  // Quantum Gates application
  const applyGate = (gate) => {
    setMeasurementResult(null);
    if (gate === 'H') {
      // Hadamard: swaps Z and X axes
      if (Math.abs(theta) < 0.05) {
        setTheta(Math.PI / 2);
        setPhi(0);
      } else if (Math.abs(theta - Math.PI) < 0.05) {
        setTheta(Math.PI / 2);
        setPhi(Math.PI);
      } else if (Math.abs(theta - Math.PI / 2) < 0.05 && Math.abs(phi) < 0.05) {
        setTheta(0);
        setPhi(0);
      } else {
        setTheta(Math.PI / 2);
      }
      setGateHistory(prev => [...prev.slice(-4), 'H (Hadamard)']);
    } else if (gate === 'X') {
      // Pauli-X: flips theta (theta -> PI - theta)
      setTheta(prev => Math.PI - prev);
      setGateHistory(prev => [...prev.slice(-4), 'X (NOT)']);
    } else if (gate === 'Z') {
      // Pauli-Z: adds PI to phi
      setPhi(prev => (prev + Math.PI) % (2 * Math.PI));
      setGateHistory(prev => [...prev.slice(-4), 'Z (Phase Flip)']);
    } else if (gate === 'RESET') {
      setTheta(0);
      setPhi(0);
      setGateHistory([]);
      setShotStats({ zero: 0, one: 0, total: 0 });
    }
  };

  // Quantum Measurement Simulation (Born's Rule collapse)
  const measureQubit = () => {
    setIsMeasuring(true);
    setTimeout(() => {
      const outcome = Math.random() < prob0 ? 0 : 1;
      setMeasurementResult(outcome);
      setShotStats(prev => ({
        zero: outcome === 0 ? prev.zero + 1 : prev.zero,
        one: outcome === 1 ? prev.one + 1 : prev.one,
        total: prev.total + 1
      }));
      // In true quantum mechanics, measuring collapses the qubit state!
      setTheta(outcome === 0 ? 0 : Math.PI);
      setPhi(0);
      setIsMeasuring(false);
    }, 350);
  };

  // Run 100 quantum shots
  const run100Shots = () => {
    let zeros = 0;
    let ones = 0;
    for (let i = 0; i < 100; i++) {
      if (Math.random() < prob0) zeros++;
      else ones++;
    }
    setShotStats(prev => ({
      zero: prev.zero + zeros,
      one: prev.one + ones,
      total: prev.total + 100
    }));
  };

  // Entanglement Lab measurement
  const measureEntangledPair = () => {
    // 50% probability of |00>, 50% probability of |11>
    const outcome = Math.random() < 0.5 ? '00' : '11';
    setLastEntangledOutcome(outcome);
    setEntangleStats(prev => ({
      ...prev,
      [outcome]: prev[outcome] + 1,
      total: prev.total + 1
    }));
  };

  const handleQuizAnswer = (qId, optionIdx, isCorrect) => {
    setSelectedAnswers(prev => ({ ...prev, [qId]: optionIdx }));
    setQuizScore(prev => ({ ...prev, [qId]: isCorrect }));
  };

  return (
    <div style={{ paddingTop: '40px' }}>
      {/* Header */}
      <section className="content-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="badge-pill badge-cyan" style={{ marginBottom: '16px' }}>
          <Atom size={14} />
          QUANTUM INFORMATION LAB
        </div>
        <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', marginBottom: '20px' }}>
          Interactive <span className="gradient-quantum">Quantum Playground</span>
        </h1>
        <p style={{ color: '#94a3b8', maxWidth: '750px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Explore quantum superposition, visualize the Bloch sphere, execute quantum logic gates,
          and witness quantum entanglement collapse in real time.
        </p>
      </section>

      {/* Part 1: Interactive Bloch Sphere & Single Qubit Simulator */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            borderRadius: '24px',
            border: '1px solid rgba(0, 242, 254, 0.35)',
            background: 'linear-gradient(135deg, rgba(8, 12, 38, 0.95) 0%, rgba(14, 18, 50, 0.9) 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
            <div>
              <div className="badge-pill badge-violet" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
                Module 1: Single Qubit Geometry
              </div>
              <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>
                The Bloch Sphere & Superposition
              </h2>
            </div>

            {/* Presets */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', color: '#64748b', alignSelf: 'center', marginRight: '4px' }}>
                Preset States:
              </span>
              {[
                { label: '|0⟩ Ground', key: 'zero' },
                { label: '|1⟩ Excited', key: 'one' },
                { label: '|+⟩ Superposition', key: 'plus' },
                { label: '|-⟩ Phase Flip', key: 'minus' }
              ].map((p) => (
                <button
                  key={p.key}
                  onClick={() => applyPreset(p.key)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    color: '#e2e8f0',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            {/* Visualizer Column: SVG Bloch Sphere */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: '300px',
                  height: '300px',
                  background: 'radial-gradient(circle, rgba(121, 40, 202, 0.15) 0%, rgba(3, 0, 20, 0.6) 70%)',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 35px rgba(0, 242, 254, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="300" height="300" viewBox="0 0 300 300">
                  {/* Outer circle */}
                  <circle cx={cx} cy={cy} r={radius} fill="none" stroke="rgba(255, 255, 255, 0.18)" strokeWidth="1.5" />
                  {/* Equator Ellipse */}
                  <ellipse cx={cx} cy={cy} rx={radius} ry={radius * 0.32} fill="none" stroke="rgba(0, 242, 254, 0.25)" strokeDasharray="4 4" strokeWidth="1.2" />
                  {/* Z Axis (North Pole to South Pole) */}
                  <line x1={cx} y1={cy - radius - 15} x2={cx} y2={cy + radius + 15} stroke="rgba(255, 255, 255, 0.25)" strokeWidth="1.5" strokeDasharray="3 3" />
                  {/* X Axis */}
                  <line x1={cx - radius * 0.85} y1={cy + radius * 0.25} x2={cx + radius * 0.85} y2={cy - radius * 0.25} stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                  {/* Pole Labels */}
                  <text x={cx + 8} y={cy - radius - 8} fill="#00f2fe" fontSize="13" fontWeight="bold" fontFamily="monospace">|0⟩ (Z+)</text>
                  <text x={cx + 8} y={cy + radius + 18} fill="#c084fc" fontSize="13" fontWeight="bold" fontFamily="monospace">|1⟩ (Z-)</text>
                  <text x={cx + radius + 8} y={cy + 4} fill="#94a3b8" fontSize="11" fontFamily="monospace">|+⟩ (X+)</text>
                  <text x={cx - radius - 24} y={cy + 4} fill="#94a3b8" fontSize="11" fontFamily="monospace">|-⟩</text>

                  {/* Quantum State Vector Arrow */}
                  <line
                    x1={cx}
                    y1={cy}
                    x2={tipX}
                    y2={tipY}
                    stroke="#00f2fe"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  {/* Tip Glowing Node */}
                  <circle cx={tipX} cy={tipY} r="7" fill="#00f2fe" filter="drop-shadow(0px 0px 8px #00f2fe)" />
                  <circle cx={tipX} cy={tipY} r="3" fill="#ffffff" />
                  {/* Origin */}
                  <circle cx={cx} cy={cy} r="3" fill="rgba(255, 255, 255, 0.5)" />
                </svg>

                {isMeasuring && (
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(0, 242, 254, 0.4) 0%, transparent 70%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.2rem',
                      color: '#00f2fe',
                      fontWeight: 700
                    }}
                  >
                    MEASURING...
                  </div>
                )}
              </div>

              {/* State Vector Dirac Notation Equation */}
              <div
                style={{
                  marginTop: '20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '1rem',
                  padding: '8px 18px',
                  borderRadius: '999px',
                  background: 'rgba(0, 242, 254, 0.08)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  color: '#00f2fe'
                }}
              >
                |ψ⟩ = {Math.sqrt(prob0).toFixed(2)}|0⟩ + {Math.sqrt(prob1).toFixed(2)}e^({(phi / Math.PI).toFixed(2)}πi)|1⟩
              </div>
            </div>

            {/* Controls & Measurement Column */}
            <div>
              {/* Sliders for Theta and Phi */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: '#e2e8f0', marginBottom: '8px' }}>
                  <span>Polar Angle θ (Superposition): {(theta / Math.PI).toFixed(2)}π rad</span>
                  <span style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>{(theta * 180 / Math.PI).toFixed(0)}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={Math.PI}
                  step="0.02"
                  value={theta}
                  onChange={(e) => {
                    setTheta(parseFloat(e.target.value));
                    setMeasurementResult(null);
                  }}
                  style={{ width: '100%', accentColor: '#00f2fe' }}
                />
              </div>

              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: '#e2e8f0', marginBottom: '8px' }}>
                  <span>Azimuthal Phase φ: {(phi / Math.PI).toFixed(2)}π rad</span>
                  <span style={{ color: '#c084fc', fontFamily: 'var(--font-mono)' }}>{(phi * 180 / Math.PI).toFixed(0)}°</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={2 * Math.PI}
                  step="0.04"
                  value={phi}
                  onChange={(e) => {
                    setPhi(parseFloat(e.target.value));
                    setMeasurementResult(null);
                  }}
                  style={{ width: '100%', accentColor: '#c084fc' }}
                />
              </div>

              {/* Probability Breakdown */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px' }}>
                  Measurement Probability (Born's Rule)
                </div>

                {/* State |0> bar */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '4px' }}>
                    <span>P(|0⟩) = |α|²</span>
                    <strong style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>{(prob0 * 100).toFixed(1)}%</strong>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${prob0 * 100}%`, height: '100%', background: 'linear-gradient(90deg, #00f2fe, #38bdf8)', transition: 'width 0.2s' }} />
                  </div>
                </div>

                {/* State |1> bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '4px' }}>
                    <span>P(|1⟩) = |β|²</span>
                    <strong style={{ color: '#c084fc', fontFamily: 'var(--font-mono)' }}>{(prob1 * 100).toFixed(1)}%</strong>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${prob1 * 100}%`, height: '100%', background: 'linear-gradient(90deg, #7928ca, #c084fc)', transition: 'width 0.2s' }} />
                  </div>
                </div>
              </div>

              {/* Measurement Buttons */}
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <button
                  onClick={measureQubit}
                  className="btn-primary"
                  style={{ flex: 1, minWidth: '160px', justifyContent: 'center' }}
                >
                  <Activity size={16} />
                  Measure Qubit
                </button>

                <button
                  onClick={run100Shots}
                  className="btn-secondary"
                  style={{ flex: 1, minWidth: '140px', justifyContent: 'center', fontSize: '0.84rem' }}
                >
                  Run 100 Shots
                </button>
              </div>

              {/* Measurement Outcome Box */}
              {measurementResult !== null && (
                <div
                  style={{
                    padding: '14px 18px',
                    borderRadius: '12px',
                    background: measurementResult === 0 ? 'rgba(0, 242, 254, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                    border: `1px solid ${measurementResult === 0 ? '#00f2fe' : '#c084fc'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#94a3b8' }}>Wave-Function Collapsed To:</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 800, color: measurementResult === 0 ? '#00f2fe' : '#c084fc', fontFamily: 'var(--font-mono)' }}>
                      |{measurementResult}⟩ ({measurementResult === 0 ? 'Ground' : 'Excited'} Eigenstate)
                    </div>
                  </div>
                  <CheckCircle2 size={24} color={measurementResult === 0 ? '#00f2fe' : '#c084fc'} />
                </div>
              )}

              {/* Shot tally counter */}
              {shotStats.total > 0 && (
                <div style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'flex', gap: '14px', fontFamily: 'var(--font-mono)' }}>
                  <span>Total Shots: <strong style={{ color: '#fff' }}>{shotStats.total}</strong></span>
                  <span>|0⟩: <strong style={{ color: '#00f2fe' }}>{shotStats.zero}</strong> ({((shotStats.zero / shotStats.total) * 100).toFixed(1)}%)</span>
                  <span>|1⟩: <strong style={{ color: '#c084fc' }}>{shotStats.one}</strong> ({((shotStats.one / shotStats.total) * 100).toFixed(1)}%)</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Part 2: Quantum Logic Gates Circuit Lab */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            borderRadius: '24px',
            border: '1px solid rgba(168, 85, 247, 0.35)',
            background: 'linear-gradient(135deg, rgba(10, 14, 40, 0.95) 0%, rgba(16, 20, 56, 0.9) 100%)'
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <div className="badge-pill badge-violet" style={{ fontSize: '0.72rem', marginBottom: '8px' }}>
              Module 2: Unitary Transformations
            </div>
            <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>
              Quantum Logic Gates Lab
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginTop: '6px' }}>
              Quantum gates are reversible unitary transformations. Click any gate to apply it to qubit $q_0$ and watch the state evolve.
            </p>
          </div>

          {/* Interactive Circuit Wire Visualizer */}
          <div
            style={{
              padding: '24px',
              borderRadius: '16px',
              background: 'rgba(3, 0, 20, 0.75)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              overflowX: 'auto'
            }}
          >
            <div style={{ fontFamily: 'var(--font-mono)', color: '#00f2fe', fontWeight: 700, fontSize: '1.1rem', minWidth: '60px' }}>
              |q₀⟩ —
            </div>

            {/* Wire line with applied gates */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
              {gateHistory.length === 0 ? (
                <div style={{ color: '#64748b', fontStyle: 'italic', fontSize: '0.85rem' }}>
                  [Initial State |0⟩] Click gates below to construct circuit sequence...
                </div>
              ) : (
                gateHistory.map((g, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '8px 14px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2) 0%, rgba(121, 40, 202, 0.3) 100%)',
                      border: '1px solid #00f2fe',
                      color: '#fff',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      boxShadow: '0 0 10px rgba(0, 242, 254, 0.25)'
                    }}
                  >
                    {g}
                  </div>
                ))
              )}
            </div>

            <button
              onClick={() => applyGate('RESET')}
              title="Reset circuit"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#94a3b8',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem'
              }}
            >
              <RotateCcw size={14} />
              Reset
            </button>
          </div>

          {/* Gate Buttons Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}
          >
            {[
              {
                symbol: 'H',
                name: 'Hadamard Gate',
                matrix: '1/√2 [[1, 1], [1, -1]]',
                effect: 'Creates equal superposition. Turns |0⟩ into (|0⟩+|1⟩)/√2 and |1⟩ into (|0⟩-|1⟩)/√2.',
                accent: '#00f2fe'
              },
              {
                symbol: 'X',
                name: 'Pauli-X (NOT)',
                matrix: '[[0, 1], [1, 0]]',
                effect: 'Quantum bit flip. Maps |0⟩ ↔ |1⟩ by rotating 180° around the X-axis.',
                accent: '#c084fc'
              },
              {
                symbol: 'Z',
                name: 'Pauli-Z (Phase)',
                matrix: '[[1, 0], [0, -1]]',
                effect: 'Phase flip. Leaves |0⟩ unchanged, but flips phase of |1⟩ to -|1⟩.',
                accent: '#10b981'
              }
            ].map((gate) => (
              <div
                key={gate.symbol}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: `${gate.accent}20`,
                        border: `1px solid ${gate.accent}`,
                        color: gate.accent,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1.1rem',
                        fontWeight: 700
                      }}
                    >
                      {gate.symbol}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      {gate.matrix}
                    </span>
                  </div>

                  <div style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.95rem', marginBottom: '6px' }}>
                    {gate.name}
                  </div>
                  <p style={{ color: '#94a3b8', fontSize: '0.82rem', lineHeight: 1.5, marginBottom: '16px' }}>
                    {gate.effect}
                  </p>
                </div>

                <button
                  onClick={() => applyGate(gate.symbol)}
                  className="btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '8px 14px',
                    fontSize: '0.82rem',
                    borderColor: `${gate.accent}50`,
                    color: gate.accent
                  }}
                >
                  Apply {gate.symbol} Gate
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 3: Quantum Entanglement & Bell State Lab */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            borderRadius: '24px',
            border: '1px solid rgba(16, 185, 129, 0.35)',
            background: 'linear-gradient(135deg, rgba(6, 20, 24, 0.95) 0%, rgba(10, 28, 38, 0.9) 100%)'
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <div className="badge-pill badge-cyan" style={{ fontSize: '0.72rem', marginBottom: '8px', borderColor: 'rgba(16, 185, 129, 0.4)', color: '#34d399' }}>
              Module 3: Multi-Qubit Entanglement
            </div>
            <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>
              The Bell State Lab: |Φ⁺⟩ = (|00⟩ + |11⟩) / √2
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginTop: '6px', maxWidth: '780px' }}>
              When two qubits are entangled, measuring qubit 0 instantaneously dictates the outcome of qubit 1,
              even if separated by light years. There is 0% probability of measuring |01⟩ or |10⟩.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              alignItems: 'center'
            }}
          >
            {/* Visual Two-Qubit Entanglement Wire */}
            <div
              style={{
                padding: '28px',
                borderRadius: '18px',
                background: 'rgba(3, 0, 20, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* Qubit 0 wire */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: '#00f2fe', fontWeight: 700 }}>|q₀⟩</span>
                <div style={{ height: '2px', background: 'rgba(255, 255, 255, 0.2)', flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <span style={{ padding: '4px 8px', borderRadius: '4px', background: '#00f2fe', color: '#030014', fontSize: '0.72rem', fontWeight: 800, marginLeft: '20px' }}>
                    H
                  </span>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', marginLeft: '60px' }} />
                </div>
              </div>

              {/* Vertical CNOT control link */}
              <div style={{ height: '30px', borderLeft: '2px dashed #10b981', marginLeft: '135px' }} />

              {/* Qubit 1 wire */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', color: '#c084fc', fontWeight: 700 }}>|q₁⟩</span>
                <div style={{ height: '2px', background: 'rgba(255, 255, 255, 0.2)', flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '124px', color: '#10b981', fontSize: '0.8rem', fontWeight: 800 }}>
                    ⊕
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#34d399',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  textAlign: 'center'
                }}
              >
                ENTANGLED PAIR READY: Correlation = 100%
              </div>
            </div>

            {/* Measurement & Live Stats */}
            <div>
              <button
                onClick={measureEntangledPair}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  padding: '16px',
                  fontSize: '1rem',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #10b981 0%, #00f2fe 100%)'
                }}
              >
                <Zap size={18} />
                Measure Entangled Pair (Spooky Action)
              </button>

              {lastEntangledOutcome && (
                <div
                  style={{
                    padding: '18px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid #10b981',
                    marginBottom: '20px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                    Simultaneous Collapse Result:
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34d399', fontFamily: 'var(--font-mono)', margin: '4px 0' }}>
                    |q₀⟩ = {lastEntangledOutcome[0]} &nbsp;⟺&nbsp; |q₁⟩ = {lastEntangledOutcome[1]}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                    Both qubits matched instantly with zero information transit!
                  </div>
                </div>
              )}

              {/* Tally Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '3px' }}>
                    <span>Outcome |00⟩ (Both 0)</span>
                    <strong style={{ color: '#00f2fe', fontFamily: 'var(--font-mono)' }}>
                      {entangleStats.total > 0 ? ((entangleStats['00'] / entangleStats.total) * 100).toFixed(1) : 50}% ({entangleStats['00']} shots)
                    </strong>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${entangleStats.total > 0 ? (entangleStats['00'] / entangleStats.total) * 100 : 50}%`, height: '100%', background: '#00f2fe' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#cbd5e1', marginBottom: '3px' }}>
                    <span>Outcome |11⟩ (Both 1)</span>
                    <strong style={{ color: '#c084fc', fontFamily: 'var(--font-mono)' }}>
                      {entangleStats.total > 0 ? ((entangleStats['11'] / entangleStats.total) * 100).toFixed(1) : 50}% ({entangleStats['11']} shots)
                    </strong>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${entangleStats.total > 0 ? (entangleStats['11'] / entangleStats.total) * 100 : 50}%`, height: '100%', background: '#c084fc' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', color: '#64748b' }}>
                    <span>Outcome |01⟩ or |10⟩ (Forbidden by Entanglement)</span>
                    <strong style={{ color: '#f43f5e', fontFamily: 'var(--font-mono)' }}>0.0%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: Quantum Algorithms & Speedups Overview */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '12px' }}>
            Quantum Algorithms & Computational Supremacy
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '640px', margin: '0 auto' }}>
            Why quantum computers outpace the world's most powerful classical supercomputers.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}
        >
          {[
            {
              title: "Grover's Search Algorithm",
              speedup: 'Quadratic Speedup: O(√N) vs O(N)',
              accent: '#00f2fe',
              summary: 'Searches an unstructured database of N items in √N steps through iterative amplitude amplification.',
              application: 'Used for database queries, graph optimization, and collision detection.'
            },
            {
              title: "Shor's Factoring Algorithm",
              speedup: 'Exponential Speedup: Polynomial Time vs Sub-Exponential',
              accent: '#a855f7',
              summary: 'Finds prime factors of large integers in polynomial time using the Quantum Fourier Transform (QFT).',
              application: 'Breaks classical RSA and ECC cryptography; drives the global migration to Post-Quantum Cryptography.'
            },
            {
              title: 'Variational Quantum Eigensolver (VQE)',
              speedup: 'Hybrid Classical-Quantum Chemistry',
              accent: '#10b981',
              summary: 'Computes ground state energy of complex molecules on Noisy Intermediate-Scale Quantum (NISQ) devices.',
              application: 'Revolutionizing drug discovery, novel room-temperature battery chemistry, and material science.'
            }
          ].map((algo, i) => (
            <div
              key={i}
              className="glass-panel"
              style={{ padding: '30px', borderRadius: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <span
                  style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: algo.accent,
                    background: `${algo.accent}15`,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    display: 'inline-block',
                    marginBottom: '12px'
                  }}
                >
                  {algo.speedup}
                </span>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>{algo.title}</h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '16px' }}>
                  {algo.summary}
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '14px', fontSize: '0.8rem', color: '#94a3b8' }}>
                <strong style={{ color: '#fff' }}>Impact: </strong>{algo.application}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Part 5: Quantum Micro-Knowledge Check */}
      <section className="content-section" style={{ marginBottom: '80px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '36px',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <HelpCircle size={22} color="#00f2fe" />
            <h3 style={{ fontSize: '1.4rem' }}>
              Test Your Quantum Intuition
            </h3>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                id: 'q1',
                question: 'What is the outcome when a Hadamard gate (H) is applied to the ground state |0⟩?',
                options: [
                  { text: 'Flips strictly to |1⟩ with 100% certainty', isCorrect: false },
                  { text: 'Creates the superposition ( |0⟩ + |1⟩ ) / √2 with 50/50 probability', isCorrect: true },
                  { text: 'Resets the qubit to classical binary zero', isCorrect: false }
                ]
              },
              {
                id: 'q2',
                question: 'In the Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2, what is the probability of measuring |01⟩?',
                options: [
                  { text: 'Exactly 0% (they are perfectly correlated)', isCorrect: true },
                  { text: '25% because there are 4 combinations', isCorrect: false },
                  { text: '50% depending on thermal noise', isCorrect: false }
                ]
              }
            ].map((q) => (
              <div
                key={q.id}
                style={{
                  padding: '20px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <div style={{ fontWeight: 600, color: '#f8fafc', marginBottom: '12px', fontSize: '0.95rem' }}>
                  {q.question}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[q.id] === optIdx;
                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleQuizAnswer(q.id, optIdx, opt.isCorrect)}
                        style={{
                          background: isSelected
                            ? opt.isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)'
                            : 'rgba(255, 255, 255, 0.03)',
                          border: isSelected
                            ? opt.isCorrect ? '1px solid #10b981' : '1px solid #f43f5e'
                            : '1px solid rgba(255, 255, 255, 0.08)',
                          color: isSelected
                            ? opt.isCorrect ? '#34d399' : '#fb7185'
                            : '#cbd5e1',
                          padding: '10px 16px',
                          borderRadius: '8px',
                          textAlign: 'left',
                          fontSize: '0.88rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          transition: 'all 0.2s'
                        }}
                      >
                        <span>{opt.text}</span>
                        {isSelected && (
                          opt.isCorrect ? <CheckCircle2 size={16} color="#10b981" /> : <span style={{ fontSize: '0.76rem', color: '#fb7185' }}>Try again</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '28px', textAlign: 'center' }}>
            <button
              onClick={() => setView('courses')}
              className="btn-primary"
              style={{ padding: '12px 28px', fontSize: '0.92rem' }}
            >
              Enroll in Srikanth's Quantum Information Course
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
