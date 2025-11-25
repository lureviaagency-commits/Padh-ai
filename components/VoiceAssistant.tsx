import React, { useState, useRef, useEffect } from 'react';
import { Mic, Square, Volume2, Loader, Sparkles, Zap, MessageCircle } from 'lucide-react';
import { generateSpeech, processVoiceInput } from '../services/geminiService';
import { Reveal } from './Reveal';

export const VoiceAssistant: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<string>("Tap to start a conversation.");
  const [autoListen, setAutoListen] = useState(false);
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<AudioBufferSourceNode | null>(null);

  const startListening = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        await handleAudioProcess(audioBlob);
      };

      mediaRecorderRef.current.start();
      setIsListening(true);
      setTranscript("Listening...");
    } catch (err) {
      console.error("Error accessing microphone:", err);
      setTranscript("Microphone access denied.");
    }
  };

  const stopListening = () => {
    if (mediaRecorderRef.current && isListening) {
      mediaRecorderRef.current.stop();
      setIsListening(false);
    }
  };

  const handleAudioProcess = async (audioBlob: Blob) => {
    setIsProcessing(true);
    setTranscript("..."); // Minimal UI text for speed perception
    
    // Convert Blob to Base64
    const reader = new FileReader();
    reader.readAsDataURL(audioBlob);
    reader.onloadend = async () => {
        const base64String = (reader.result as string).split(',')[1];
        
        // 1. Send Audio to Gemini -> Get Text Response
        // Note: processVoiceInput is now tuned for shorter, faster responses
        const textResponse = await processVoiceInput(base64String, audioBlob.type);
        setTranscript(textResponse);

        // 2. Text to Speech
        if (textResponse) {
            playResponse(textResponse);
        } else {
            setIsProcessing(false);
        }
    };
  };

  const playResponse = async (text: string) => {
      try {
          const audioBuffer = await generateSpeech(text);
          setIsProcessing(false);
          
          if (audioBuffer) {
              const Ctx = window.AudioContext || (window as any).webkitAudioContext;
              const ctx = new Ctx();
              audioContextRef.current = ctx;
              
              const source = ctx.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(ctx.destination);
              
              source.onended = () => {
                  setIsSpeaking(false);
                  if (autoListen) {
                      setTimeout(() => startListening(), 500); // Auto-reply loop
                  }
              };
              
              sourceNodeRef.current = source;
              setIsSpeaking(true);
              source.start();
          }
      } catch (e) {
          console.error(e);
          setIsProcessing(false);
      }
  };

  // Cleanup
  useEffect(() => {
      return () => {
          if (sourceNodeRef.current) sourceNodeRef.current.stop();
          if (audioContextRef.current) audioContextRef.current.close();
      }
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-purple-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-6 shadow-sm">
                    <Zap className="w-4 h-4 text-brand-600" />
                    <span className="text-sm font-medium text-slate-600">Voice Mode 2.0</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Talk to PADH.AI <br /> like a <span className="text-brand-600">human tutor.</span>
                </h2>
                
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                No typing, no waiting. Experience fluid, human-like conversations that adapt to your speed. It's the closest thing to a real teacher in your pocket.
                </p>
            </div>
        </Reveal>

        <Reveal delay={200}>
            <div className="max-w-xl mx-auto">
                <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12 text-center overflow-hidden tilt-card hover:shadow-brand-500/10 transition-all duration-300">
                    
                    {/* Visualizer Container */}
                    <div className="relative h-64 flex items-center justify-center mb-8">
                        {/* Dynamic Rings */}
                        {(isListening || isSpeaking || isProcessing) && (
                            <>
                                <div className={`absolute inset-0 rounded-full bg-brand-400/10 blur-xl animate-pulse-slow ${isSpeaking ? 'scale-150' : 'scale-100'}`}></div>
                                <div className={`absolute inset-0 rounded-full bg-purple-400/10 blur-xl animate-pulse-slow delay-75 ${isSpeaking ? 'scale-125' : 'scale-90'}`}></div>
                            </>
                        )}
                        
                        {/* Main Interaction Circle */}
                        <div className={`relative z-10 w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl ${
                            isListening ? 'bg-gradient-to-br from-red-500 to-pink-600 shadow-red-200/50 scale-110' :
                            isProcessing ? 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-amber-200/50 animate-bounce' :
                            isSpeaking ? 'bg-gradient-to-br from-brand-500 to-purple-600 shadow-brand-200/50 scale-105' :
                            'bg-slate-900 shadow-slate-200/50'
                        }`}>
                             {/* Central Icon */}
                            {isProcessing ? (
                                <Loader className="w-12 h-12 text-white animate-spin" />
                            ) : isListening ? (
                                <div className="flex gap-1 h-8 items-center">
                                    {[1,2,3,4,3,2,1].map((h, i) => (
                                        <div key={i} className="w-1.5 bg-white rounded-full animate-pulse" style={{ height: `${h * 8}px`, animationDelay: `${i * 0.1}s` }}></div>
                                    ))}
                                </div>
                            ) : isSpeaking ? (
                                <Volume2 className="w-14 h-14 text-white animate-pulse" />
                            ) : (
                                <Mic className="w-14 h-14 text-white" />
                            )}
                        </div>
                    </div>

                    {/* Transcript Area */}
                    <div className="min-h-[60px] mb-8 flex items-center justify-center">
                        <p className={`text-xl font-medium transition-colors ${
                            isListening ? 'text-slate-900' : 
                            isSpeaking ? 'text-brand-600' :
                            'text-slate-500'
                        } animate-fade-in-up`}>
                            "{transcript}"
                        </p>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={isListening ? stopListening : startListening}
                            disabled={isProcessing || isSpeaking}
                            className={`w-full py-4 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 active:translate-y-0 ${
                                isListening 
                                ? 'bg-white text-red-600 border-2 border-red-100 hover:bg-red-50' 
                                : 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/20'
                            } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
                        >
                            {isListening ? 'Stop Listening' : isProcessing ? 'Processing...' : isSpeaking ? 'Listening...' : 'Tap to Speak'}
                        </button>

                        <button 
                            onClick={() => setAutoListen(!autoListen)}
                            className={`flex items-center justify-center gap-2 text-sm font-medium py-2 rounded-xl transition-colors ${autoListen ? 'text-brand-600 bg-brand-50' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <MessageCircle className="w-4 h-4" />
                            {autoListen ? 'Continuous Conversation On' : 'Enable Continuous Mode'}
                        </button>
                    </div>
                </div>
            </div>
        </Reveal>
      </div>
    </section>
  );
};