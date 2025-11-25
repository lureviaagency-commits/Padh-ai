import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
    onGetStarted: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onGetStarted }) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          Ready to transform <br /> the way you learn?
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          Join thousands of students who are achieving better grades with less stress. Your personal AI tutor is waiting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group" onClick={onGetStarted}>
            Try PADH.AI for Free
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <p className="mt-6 text-xs text-slate-500">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
};