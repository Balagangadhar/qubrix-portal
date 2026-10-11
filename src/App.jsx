import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TerminalDrawer from './components/TerminalDrawer';

import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import CoursesView from './views/CoursesView';
import LabsView from './views/LabsView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

import ChatbotWidget from './components/ChatbotWidget';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [selectedCourseForEnrollment, setSelectedCourseForEnrollment] = useState(null);

  // Theme Management (Dark / Light)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('qubrix_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('qubrix_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Global keyboard shortcut for Terminal Drawer (Ctrl+K / Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="app-container">
      {/* Background Quantum Mesh & Nebulae */}
      <ParticleBackground theme={theme} />

      {/* Futuristic Sticky Navbar with Theme Switcher */}
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        onOpenTerminal={() => setTerminalOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Routed Page Content */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {currentView === 'home' && (
          <HomeView 
            setView={setCurrentView} 
            onOpenTerminal={() => setTerminalOpen(true)} 
          />
        )}
        {currentView === 'services' && (
          <ServicesView 
            setView={setCurrentView} 
          />
        )}
        {currentView === 'labs' && (
          <LabsView 
            setView={setCurrentView} 
          />
        )}
        {currentView === 'courses' && (
          <CoursesView 
            setView={setCurrentView} 
            setSelectedCourseForEnrollment={setSelectedCourseForEnrollment} 
          />
        )}
        {currentView === 'about' && (
          <AboutView 
            setView={setCurrentView} 
          />
        )}
        {currentView === 'contact' && (
          <ContactView 
            selectedCourseForEnrollment={selectedCourseForEnrollment} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setView={setCurrentView} 
        onOpenTerminal={() => setTerminalOpen(true)} 
        theme={theme}
      />

      {/* Interactive Quantum Terminal Drawer */}
      <TerminalDrawer 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
        onNavigate={(viewId) => setCurrentView(viewId)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Floating AI Chatbot Concierge */}
      <ChatbotWidget 
        onNavigate={(viewId) => setCurrentView(viewId)}
        theme={theme}
      />
    </div>
  );
}
