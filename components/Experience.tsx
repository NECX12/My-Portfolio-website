
import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCES } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Professional <span className="gradient-text">Journey</span></h2>
          <div className="w-20 h-1.5 accent-bg rounded-full"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 border-l-2 border-slate-200 hover:border-cyan-500/50 transition-colors">
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all border border-slate-100 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                    <div className="flex items-center text-cyan-600 font-bold mt-1">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col text-sm text-slate-500 md:text-right font-medium">
                    <div className="flex items-center md:justify-end mb-1">
                      <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                      {exp.period}
                    </div>
                    <div className="flex items-center md:justify-end">
                      <MapPin className="w-4 h-4 mr-2 text-slate-400" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start text-slate-600 leading-relaxed font-medium">
                      <span className="inline-block w-2 h-2 accent-bg rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
