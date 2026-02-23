
import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, MapPin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { GoogleGenAI } from "@google/genai";

const Hero: React.FC = () => {
  const [headshotUrl, setHeadshotUrl] = useState<string>("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop");
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const generateHeadshot = async () => {
      if (process.env.GEMINI_API_KEY) {
        setIsGenerating(true);
        try {
          const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-image',
            contents: {
              parts: [
                {
                  text: 'A high-quality, professional studio headshot of a young Black man with a short haircut and a well-groomed beard, smiling warmly, wearing a black professional textured shirt. Neutral grey background, professional studio lighting, 4k resolution, highly detailed.',
                },
              ],
            },
            config: {
              imageConfig: {
                aspectRatio: "1:1",
              },
            },
          });

          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              setHeadshotUrl(`data:image/png;base64,${part.inlineData.data}`);
              break;
            }
          }
        } catch (error) {
          console.error("Error generating headshot:", error);
        } finally {
          setIsGenerating(false);
        }
      }
    };

    generateHeadshot();
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Subtle Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium mb-6">
              <Terminal className="w-4 h-4 mr-2" />
              <span>Available for high-impact AI roles</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6 text-slate-900">
              Hi, I'm <br />
              <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center text-slate-500 font-medium">
                <MapPin className="w-4 h-4 mr-2 text-cyan-600" />
                {PERSONAL_INFO.location}
              </div>
              <div className="flex items-center text-slate-500 font-medium">
                <Mail className="w-4 h-4 mr-2 text-cyan-600" />
                {PERSONAL_INFO.email}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#experience" 
                className="inline-flex items-center px-8 py-4 accent-bg text-white rounded-xl font-bold transition-all shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-1"
              >
                View Experience
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="inline-flex items-center px-8 py-4 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-900 rounded-xl font-bold transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 mb-12 lg:mb-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Rings */}
              <div className="absolute inset-0 -m-4 rounded-full border border-slate-100 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-cyan-100 animate-[spin_30s_linear_infinite_reverse]"></div>
              
              {/* Headshot Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 p-2 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden border-4 border-white relative">
                  {isGenerating && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100/80 z-10">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
                    </div>
                  )}
                  <img 
                    src={headshotUrl} 
                    alt={PERSONAL_INFO.name}
                    className={`w-full h-full object-cover transition-all duration-700 ${isGenerating ? 'blur-sm grayscale' : 'hover:grayscale-0 grayscale'}`}
                  />
                </div>
                
                {/* Floating Tech Badge */}
                <div className="absolute -bottom-4 -right-4 md:bottom-2 md:right-2 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg accent-bg flex items-center justify-center text-white">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Focusing on</div>
                    <div className="text-sm font-bold text-slate-900">Generative AI & CV</div>
                  </div>
                </div>
              </div>

              {/* Code Snippet Overlay (Desktop Only) */}
              <div className="hidden lg:block absolute -top-8 -left-20 p-4 bg-slate-900 rounded-xl border border-slate-800 shadow-2xl transform -rotate-3">
                <div className="flex gap-1 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                </div>
                <pre className="font-mono text-[10px] text-cyan-400">
{`class AIEngineer:
  def __init__(self):
    self.name = "Ejike"
    self.role = "Innovator"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
