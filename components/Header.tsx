import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, User } from 'lucide-react';
import { Button } from './Button';

interface HeaderProps {
    onAuth: () => void;
    onGetStarted: () => void;
    isAuthenticated: boolean;
}

export const Header: React.FC<HeaderProps> = ({ onAuth, onGetStarted, isAuthenticated }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center shadow-lg shadow-brand-500/20 transform hover:rotate-12 transition-transform">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">PADH.AI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">How it works</a>
          <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
          
          {isAuthenticated ? (
             <Button size="sm" variant="primary" onClick={onGetStarted} className="flex items-center gap-2">
                 <User className="w-4 h-4" />
                 Dashboard
             </Button>
          ) : (
            <>
                <button onClick={onAuth} className="text-sm font-bold text-slate-900 hover:text-brand-600 transition-colors">Log In</button>
                <Button size="sm" variant="primary" onClick={onGetStarted}>
                    Get Started
                </Button>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 md:hidden shadow-xl flex flex-col gap-4 animate-fade-in-up origin-top">
           <a href="#" className="text-base font-medium text-slate-600 py-2">How it works</a>
          <a href="#" className="text-base font-medium text-slate-600 py-2">Features</a>
          <a href="#pricing" className="text-base font-medium text-slate-600 py-2">Pricing</a>
          <Button className="w-full justify-center" onClick={() => { setIsMobileMenuOpen(false); onGetStarted(); }}>
              {isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
          </Button>
        </div>
      )}
    </header>
  );
};