
import React from 'react';
import { ArrowRight, Mail, MapPin, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      {/* Subtle Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-cyan-100 rounded-full blur-[100px] opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:gap-16 items-center">
          <div>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
