import React from 'react';
import { Target, TrendingUp, Users, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

export const WhyPadhAI: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Shaping the Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-purple-600">Intelligent Learning</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Education is evolving. PADH.AI isn't just a tool; it's a movement towards personalized, stress-free, and efficient mastery of knowledge. We believe every student deserves a tutor that never sleeps.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Reveal delay={100} className="h-full">
                <div className="h-full group perspective-1000">
                    <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-y-2 hover:shadow-2xl hover:shadow-brand-500/10">
                        <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Target className="w-7 h-7 text-brand-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Hyper-Personalization</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Traditional classrooms teach to the average. PADH.AI adapts to <strong>your</strong> unique learning curve, focusing on your weak points until they become strengths.
                        </p>
                    </div>
                </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal delay={200} className="h-full">
                <div className="h-full group perspective-1000">
                    <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-y-2 hover:shadow-2xl hover:shadow-purple-500/10">
                        <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <TrendingUp className="w-7 h-7 text-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Data-Driven Growth</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Stop guessing what to study. Our dashboard provides 3D analytics of your progress, showing you exactly where you stand and how to improve by 1% every day.
                        </p>
                    </div>
                </div>
            </Reveal>

             {/* Card 3 */}
             <Reveal delay={300} className="h-full">
                <div className="h-full group perspective-1000">
                    <div className="relative h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-slate-200/50 transition-all duration-500 transform group-hover:-translate-y-2 group-hover:rotate-y-2 hover:shadow-2xl hover:shadow-pink-500/10">
                        <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Rocket className="w-7 h-7 text-pink-600" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">Accelerated Mastery</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">
                            Learn 3x faster with active recall and Socratic questioning. PADH.AI doesn't just give answers; it guides you to the solution, building deep neural pathways.
                        </p>
                    </div>
                </div>
            </Reveal>
        </div>

        <Reveal delay={400}>
            <div className="mt-20 p-8 md:p-12 bg-slate-900 rounded-[2.5rem] relative overflow-hidden text-center text-white">
                 <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-[100px] opacity-20 -translate-x-1/2 translate-y-1/2"></div>
                 
                 <div className="relative z-10 max-w-2xl mx-auto">
                     <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20">
                         <Users className="w-8 h-8 text-brand-300" />
                     </div>
                     <h3 className="text-3xl font-bold mb-4">Join the Learning Revolution</h3>
                     <p className="text-slate-300 mb-8 text-lg">
                         "PADH.AI changed how I prepare for exams. It feels like having a genius friend who is always available."
                     </p>
                     <div className="flex items-center justify-center gap-4">
                         <div className="flex -space-x-3">
                             {[1,2,3,4].map(i => (
                                 <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-xs font-bold">
                                     {String.fromCharCode(64+i)}
                                 </div>
                             ))}
                         </div>
                         <div className="text-sm font-medium">
                             Trusted by 10,000+ Students
                         </div>
                     </div>
                 </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};