import React from 'react';
import { ArrowRight, Sparkles, PlayCircle } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
    onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  const scrollToCurriculum = () => {
      document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden perspective-1000">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-50 rounded-full blur-3xl opacity-60 pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Floating 3D Elements */}
      <div className="absolute top-1/3 left-[10%] w-12 h-12 bg-white rounded-2xl shadow-xl animate-float hidden lg:flex items-center justify-center rotate-12 z-0 border border-slate-100">
        <span className="text-2xl">⚡️</span>
      </div>
      <div className="absolute bottom-1/4 right-[10%] w-16 h-16 bg-white rounded-full shadow-xl animate-float hidden lg:flex items-center justify-center -rotate-6 z-0 border border-slate-100" style={{ animationDelay: '2s' }}>
        <span className="text-3xl">📚</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up hover:scale-105 transition-transform cursor-default" style={{ animationDelay: '0ms' }}>
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span className="text-sm font-medium text-slate-600">Reimagining Education with AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            Learning that <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-500 to-purple-600">adapts to you.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            PADH.AI isn't just a chatbot. It's a proactive learning companion that understands your pace, voice, and goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <Button size="lg" className="group shadow-xl shadow-brand-500/20 hover:shadow-brand-500/30" onClick={onGetStarted}>
              Start Learning Now
              <ArrowRight