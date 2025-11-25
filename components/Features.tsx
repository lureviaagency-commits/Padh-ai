import React from 'react';
import { Brain, Zap, Globe, Clock } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Deep Understanding",
    description: "PADH.AI doesn't just recite facts. It breaks down complex concepts into digestible mental models tailored to your level."
  },
  {
    icon: Zap,
    title: "Real-time Feedback",
    description: "Instant corrections and proactive suggestions help you master topics faster than traditional studying methods."
  },
  {
    icon: Globe,
    title: "Universal Access",
    description: "Learn from anywhere, on any device. Your progress syncs seamlessly across your phone, tablet, and laptop."
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Late night study session? Early morning review? PADH.AI is always awake and ready to help you succeed."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/50 transition-all duration-300">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};