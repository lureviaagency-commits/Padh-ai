import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ChatInterface } from './components/ChatInterface';
import { VoiceAssistant } from './components/VoiceAssistant';
import { StudentBenefits } from './components/StudentBenefits';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { AuthModal } from './components/AuthModal';
import { Dashboard } from './components/Dashboard';
import { FloatingChat } from './components/FloatingChat';
import { Reveal } from './components/Reveal';
import { WhyPadhAI } from './components/WhyPadhAI';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setIsAuthOpen(false);
    setShowDashboard(true);
  };

  const handleGetStarted = () => {
    if (isAuthenticated) {
        setShowDashboard(true);
    } else {
        setIsAuthOpen(true);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  if (showDashboard) {
    return <Dashboard onClose={() => setShowDashboard(false)} />;
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-200 selection:text-brand-900 overflow-x-hidden">
      <Header onAuth={() => setIsAuthOpen(true)} onGetStarted={handleGetStarted} isAuthenticated={isAuthenticated} />
      
      <main>
        <Reveal><Hero onGetStarted={handleGetStarted} /></Reveal>
        <Reveal><WhyPadhAI /></Reveal>
        <Reveal><Features /></Reveal>
        <Reveal><ChatInterface /></Reveal>
        <VoiceAssistant />
        <Reveal><StudentBenefits /></Reveal>
        <Pricing />
        <Reveal><CTA onGetStarted={handleGetStarted} /></Reveal>
      </main>
      
      <Footer />
      
      <FloatingChat />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} onLogin={handleLogin} />
    </div>
  );
};

export default App;