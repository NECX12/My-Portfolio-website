
import React from 'react';
import { Trophy, ExternalLink, Award } from 'lucide-react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Key <span className="gradient-text">Accomplishments</span></h2>
          <div className="w-20 h-1.5 accent-bg rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((item, idx) => (
            <div key={idx} className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-premium overflow-hidden transition-all hover:shadow-xl">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Trophy className="w-24 h-24 text-cyan-600" />
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-50 text-yellow-700 border border-yellow-100 text-xs font-bold mb-6">
                  <Award className="w-3 h-3 mr-2" />
                  AWARD WINNER
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-cyan-700 transition-colors">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-8 font-medium">
                  {item.description}
                </p>

                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-bold transition-colors"
                  >
                    View Project Details
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl flex flex-col justify-center border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold gradient-text mb-1">5+</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">AI Models Deployed</div>
            </div>
            <div className="bg-white p-6 rounded-2xl flex flex-col justify-center border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold gradient-text mb-1">100+</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Students Mentored</div>
            </div>
            <div className="bg-white p-6 rounded-2xl flex flex-col justify-center border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold gradient-text mb-1">RAG</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Research Expert</div>
            </div>
            <div className="bg-white p-6 rounded-2xl flex flex-col justify-center border border-slate-100 shadow-sm">
              <div className="text-3xl font-bold gradient-text mb-1">CNN</div>
              <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">CV Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
