import { GoogleGenAI, Modality } from "@google/genai";

// Ensure API key is present
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

/**
 * Sends a text message to the Gemini model (Chat).
 * Uses gemini-2.5-flash for speed and efficiency.
 */
export const sendChatMessage = async (history: ChatMessage[], newMessage: string): Promise<string> => {
  if (!apiKey) throw new Error("API Key missing");

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: "You are PADH.AI, a warm, encouraging, and highly intelligent tutor. Your goal is to help students learn complex topics simply. Keep responses concise (under 80 words) and conversational. Use emojis sparingly but effectively to be friendly.",
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I'm thinking...";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having a little trouble connecting to my knowledge base right now. Try again in a moment.";
  }
};

/**
 * Process audio input for the Voice Assistant and return a text response.
 * Tuned for extremely fast, human-like responses.
 */
export const processVoiceInput = async (audioBase64: string, mimeType: string): Promise<string> => {
    if (!apiKey) throw new Error("API Key missing");

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: {
                parts: [
                    {
                        inlineData: {
                            mimeType: mimeType,
                            data: audioBase64
                        }
                    },
                    {
                        text: "You are a human tutor named PADH.AI. The user is talking to you. Reply immediately, warmly, and naturally. Do NOT sound robotic. Keep your answer under 20 words so you can reply fast. Be encouraging."
                    }
                ]
            }
        });
        return response.text || "I didn't quite catch that.";
    } catch (error) {
        console.error("Voice Processing Error:", error);
        return "I'm having trouble hearing you right now.";
    }
}

/**
 * Generates speech from text using the TTS model.
 * Uses gemini-2.5-flash-preview-tts.
 */
export const generateSpeech = async (text: string): Promise<AudioBuffer | null> => {
  if (!apiKey) throw new Error("API Key missing");

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            // Using 'Kore' for a warm, teacher-like voice
            prebuiltVoiceConfig: { voiceName: 'Kore' }, 
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    
    if (!base64Audio) return null;

    // Decode audio
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
    const audioBuffer = await decodeAudioData(
      decode(base64Audio),
      audioContext,
      24000,
      1
    );
    
    return audioBuffer;

  } catch (error) {
    console.error("TTS Error:", error);
    return null;
  }
};

// Helper to decode base64
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Helper to decode audio data to buffer
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}