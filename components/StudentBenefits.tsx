import React from 'react';

export const StudentBenefits: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 tracking-tight">Built for the modern student.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-brand-400">01</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Confidence Booster</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Fear of asking "dumb" questions vanishes. PADH.AI creates a judgment-free zone where curiosity thrives.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-slate-800" />
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-brand-400">02</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Memory Retention</h3>
                  <p className="text-slate-400 leading-relaxed">
                    By using active recall techniques and personalized analogies, students retain 40% more information.
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-slate-800" />
              <div className="flex gap-6">
                <div className="text-4xl font-bold text-brand-400">03</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Time Efficiency</h3>
                  <p className="text-slate-400 leading-relaxed">
                    Stop searching through hours of video lectures. Get the exact explanation you need in seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 p-8 flex flex-col justify-center items-center text-center">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 pointer-events-none z-10" />
             {/* Abstract UI representation */}
             <div className="w-full max-w-sm bg-slate-900 border border-slate-700 rounded-xl p-6 shadow-2xl relative z-0 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-4 w-24 bg-brand-500/20 rounded-full mb-4"></div>
                <div className="h-2 w-full bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-full bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-2/3 bg-slate-700 rounded-full mb-6"></div>
                
                <div className="flex gap-3 mt-4">
                    <div className="h-8 w-8 rounded-full bg-slate-700"></div>
                    <div className="flex-1">
                         <div className="h-2 w-full bg-slate-700 rounded-full mb-2"></div>
                         <div className="h-2 w-1/2 bg-slate-700 rounded-full"></div>
                    </div>
                </div>
             </div>
             
             <div className="w-full max-w-sm bg-slate-800 border border-slate-600 rounded-xl p-6 shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 transition-transform duration-300 z-20">
                 <div className="flex items-center gap-3 mb-4">
                     <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center text-xs font-bold">AI</div>
                     <div className="text-sm font-medium text-slate-200">Personalized Plan</div>
                 </div>
                 <div className="space-y-3">
                     <div className="flex items-center justify-between text-sm text-slate-400">
                         <span>Algebra II</span>
                         <span className="text-brand-400">85% Mastery</span>
                     </div>
                     <div className="w-full bg-slate-700 rounded-full h-1.5">
                         <div className="bg-brand-500 h-1.5 rounded-full w-[85%]"></div>
                     </div>
                 </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};