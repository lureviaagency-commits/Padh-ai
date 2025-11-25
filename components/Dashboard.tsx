import React from 'react';
import { BookOpen, Trophy, Clock, TrendingUp, MoreHorizontal, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';

interface DashboardProps {
    onClose: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Student Dashboard</h1>
                    <p className="text-slate-500">Welcome back, Alex! You're on a 5-day streak. 🔥</p>
                </div>
                <button onClick={onClose} className="text-sm text-slate-500 hover:text-slate-900 underline">
                    Back to Home
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Reveal delay={0}>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                                <Trophy className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Overall Mastery</p>
                                <p className="text-2xl font-bold text-slate-900">85%</p>
                            </div>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </Reveal>
                
                <Reveal delay={100}>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center">
                                <Clock className="w-6 h-6 text-indigo-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Study Hours</p>
                                <p className="text-2xl font-bold text-slate-900">12.5h</p>
                            </div>
                        </div>
                        <p className="text-xs text-green-600 flex items-center font-medium">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +2.5h this week
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-orange-600" />
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 font-medium">Topics Completed</p>
                                <p className="text-2xl font-bold text-slate-900">24/40</p>
                            </div>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Chart Area */}
                <div className="lg:col-span-2 space-y-8">
                     <Reveal delay={300}>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="font-bold text-slate-900 text-lg">Performance Analysis</h3>
                                <div className="flex items-center gap-2">
                                     <button className="text-xs font-medium px-3 py-1 bg-slate-100 rounded-full text-slate-600">Weekly</button>
                                     <button className="text-xs font-medium px-3 py-1 hover:bg-slate-50 rounded-full text-slate-500">Monthly</button>
                                </div>
                            </div>
                            
                            <div className="h-64 flex items-end justify-between gap-2 px-2">
                                {[65, 45, 75, 55, 85, 95, 70].map((h, i) => (
                                    <div key={i} className="flex flex-col items-center gap-2 flex-1 group">
                                        <div 
                                            className="w-full bg-brand-100 rounded-t-lg relative group-hover:bg-brand-200 transition-all duration-500 ease-out" 
                                            style={{ height: `${h}%` }}
                                        >
                                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                                {h}%
                                            </div>
                                        </div>
                                        <span className="text-xs text-slate-400 font-medium">
                                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                     </Reveal>

                     <Reveal delay={400}>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 text-lg mb-6">Recent Activity</h3>
                            <div className="space-y-6">
                                {[
                                    { subject: 'Calculus', topic: 'Derivatives', time: '2 hours ago', score: 92 },
                                    { subject: 'Physics', topic: 'Thermodynamics', time: '5 hours ago', score: 78 },
                                    { subject: 'History', topic: 'World War II', time: 'Yesterday', score: 88 },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 font-bold text-sm">
                                                {item.subject[0]}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-slate-900">{item.topic}</h4>
                                                <p className="text-xs text-slate-500">{item.subject} • {item.time}</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className={`font-bold ${item.score >= 90 ? 'text-green-600' : 'text-brand-600'}`}>
                                                {item.score}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                     </Reveal>
                </div>

                {/* Sidebar Stats */}
                <div className="space-y-8">
                    <Reveal delay={500}>
                        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-slate-900 text-lg mb-6">Subject Breakdown</h3>
                            <div className="flex items-center justify-center mb-8">
                                <div className="relative w-48 h-48 rounded-full" style={{ background: 'conic-gradient(#38bdf8 0% 35%, #818cf8 35% 60%, #fb923c 60% 85%, #f472b6 85% 100%)' }}>
                                    <div className="absolute inset-4 bg-white rounded-full flex flex-col items-center justify-center">
                                        <span className="text-3xl font-bold text-slate-900">4</span>
                                        <span className="text-xs text-slate-500 uppercase tracking-wide">Subjects</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-sky-400"></span>
                                        <span className="text-slate-600">Math</span>
                                    </div>
                                    <span className="font-medium">35%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-indigo-400"></span>
                                        <span className="text-slate-600">Physics</span>
                                    </div>
                                    <span className="font-medium">25%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-orange-400"></span>
                                        <span className="text-slate-600">History</span>
                                    </div>
                                    <span className="font-medium">25%</span>
                                </div>
                                <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-pink-400"></span>
                                        <span className="text-slate-600">English</span>
                                    </div>
                                    <span className="font-medium">15%</span>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={600}>
                         <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
                             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 rounded-full blur-3xl opacity-20 translate-x-10 -translate-y-10"></div>
                             <h3 className="font-bold text-lg mb-2 relative z-10">Upcoming Test</h3>
                             <p className="text-slate-400 text-sm mb-6 relative z-10">Calculus Midterm</p>
                             
                             <div className="flex items-center gap-3 mb-6 relative z-10">
                                 <div className="bg-slate-800 p-3 rounded-xl text-center min-w-[60px]">
                                     <span className="block text-2xl font-bold text-brand-400">14</span>
                                     <span className="text-[10px] text-slate-400 uppercase">Days</span>
                                 </div>
                                 <div className="h-px bg-slate-700 flex-1"></div>
                                 <Calendar className="text-slate-500" />
                             </div>
                             
                             <button className="w-full py-3 bg-brand-600 hover:bg-brand-500 rounded-xl font-medium transition-colors relative z-10">
                                 Start Prep Session
                             </button>
                         </div>
                    </Reveal>
                </div>
            </div>
        </div>
    </div>
  );
};