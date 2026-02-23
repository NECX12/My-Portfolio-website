
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Technical <span className="gradient-text">Expertise</span></h2>
          <div className="w-20 h-1.5 accent-bg rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-premium hover:shadow-lg transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center border-b border-slate-50 pb-4">
                <span className="w-2 h-2 accent-bg rounded-full mr-3"></span>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-bold rounded-lg border border-slate-100 hover:border-cyan-200 hover:bg-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
