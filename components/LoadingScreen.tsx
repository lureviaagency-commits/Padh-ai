import React from 'react';
import { Sparkles } from 'lucide-react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="relative mb-4">
        <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center animate-pulse">
            <Sparkles className="w-8 h-8 text-brand-600 animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>
      <h1 className="text-xl font-bold text-slate-900 tracking-widest animate-pulse">PADH.AI</h1>
    </div>
  );
};