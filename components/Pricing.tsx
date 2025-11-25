import React from 'react';
import { Check, Zap } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Essential tools for casual learners.",
    features: [
      "Access to basic AI Chat",
      "5 Questions per day",
      "Standard response speed",
      "Community support"
    ],
    highlight: false
  },
  {
    name: "Pro",
    price: "₹599",
    period: "/month",
    description: "Perfect for students who want to excel.",
    features: [
      "Unlimited AI Chat",
      "Voice Assistant Access",
      "Detailed Explanations",
      "Personalized Study Plan",
      "Progress Dashboard"
    ],
    highlight: true
  },
  {
    name: "Elite",
    price: "₹999",
    period: "/month",
    description: "The ultimate learning experience.",
    features: [
      "Everything in Pro",
      "Priority 24/7 Support",
      "Advanced Exam Prep Mode",
      "One-on-One Human Review",
      "Offline Access"
    ],
    highlight: false
  }
];

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] bg-slate-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <Reveal>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing.</h2>
                    <p className="text-lg text-slate-600">Invest in your education with plans designed for every budget.</p>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {plans.map((plan, index) => (
                    <Reveal key={index} delay={index * 100} className="h-full">
                        <div className={`h-full p-8 rounded-3xl border transition-all duration-300 flex flex-col ${
                            plan.highlight 
                            ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105 z-10 ring-4 ring-brand-500/20' 
                            : 'bg-white text-slate-900 border-slate-200 hover:border-brand-300 hover:shadow-xl'
                        }`}>
                            {plan.highlight && (
                                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wide w-fit mb-6">
                                    <Zap className="w-3 h-3" /> Most Popular
                                </div>
                            )}
                            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-4xl font-bold">{plan.price}</span>
                                <span className={`text-sm ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                            </div>
                            <p className={`text-sm mb-8 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.description}</p>
                            
                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm">
                                        <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                                            plan.highlight ? 'bg-brand-500/20 text-brand-400' : 'bg-green-100 text-green-600'
                                        }`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className={plan.highlight ? 'text-slate-300' : 'text-slate-600'}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button 
                                variant={plan.highlight ? 'secondary' : 'outline'} 
                                className="w-full justify-center"
                            >
                                Choose {plan.name}
                            </Button>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
  );
};