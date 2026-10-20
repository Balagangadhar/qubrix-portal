import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomeView from './views/HomeView';
import ServicesView from './views/ServicesView';
import CapabilitiesView from './views/CapabilitiesView';
import PricingCalculatorView from './views/PricingCalculatorView';
import AboutView from './views/AboutView';
import ContactView from './views/ContactView';

import ChatbotWidget from './components/ChatbotWidget';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedScopeForBooking, setSelectedScopeForBooking] = useState(null);

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

  return (
    <div className="app-container">
      {/* Background Quantum Mesh & Nebulae */}
      <ParticleBackground theme={theme} />

      {/* Futuristic Sticky Navbar with Theme Switcher */}
      <Navbar 
        currentView={currentView} 
        setView={setCurrentView} 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Routed Page Content */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {currentView === 'home' && (
          <HomeView 
            setView={setCurrentView} 
          />
        )}
        {currentView === 'services' && (
          <ServicesView 
            setView={setCurrentView} 
          />
        )}
        {currentView === 'capabilities' && (
          <CapabilitiesView 
            setView={setCurrentView} 
          />
        )}
        {currentView === 'pricing' && (
          <PricingCalculatorView 
            setView={setCurrentView} 
            onSelectBudgetForContact={(estimate) => {
              setSelectedScopeForBooking({
                domain: 'Custom Services Estimation',
                engagement: `${estimate.currency} ${estimate.firstYearTCO.toLocaleString()} (1st Year TCO)`,
                duration: `${estimate.billingCycle.toUpperCase()} Infrastructure Plan`,
                notes: `Configured Services: ${estimate.servicesCount} items | Setup: ${estimate.currency} ${estimate.oneTime.toLocaleString()} | Recurring: ${estimate.currency} ${estimate.monthly.toLocaleString()}/mo (${estimate.currency} ${estimate.yearly.toLocaleString()}/yr)`
              });
            }}
          />
        )}
        {currentView === 'about' && (
          <AboutView 
            setView={setCurrentView} 
          />
        )}
        {currentView === 'contact' && (
          <ContactView 
            selectedScopeForBooking={selectedScopeForBooking} 
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setView={setCurrentView} 
        theme={theme}
      />

      {/* Floating AI Chatbot Concierge */}
      <ChatbotWidget 
        onNavigate={(viewId) => setCurrentView(viewId)}
        theme={theme}
      />
    </div>
  );
}

