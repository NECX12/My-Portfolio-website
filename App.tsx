
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import { Github, Mail, Linkedin, MapPin, Phone } from 'lucide-react';
import { PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedProject />
        <Experience />
        <Skills />
        <Achievements />
      </main>

      <footer className="py-16 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <span className="text-xl font-bold text-slate-900 mb-6 block">
                Ejike <span className="gradient-text">Chukwuma</span>
              </span>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                Designing the future through scalable engineering and high-impact machine learning research.
              </p>
            </div>
            
            <div>
              <h4 className="text-slate-900 font-bold mb-6">Contact</h4>
              <div className="space-y-4">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-slate-500 hover:text-cyan-600 transition-colors text-sm font-medium">
                  <Mail className="w-4 h-4 mr-3 text-cyan-600" />
                  {PERSONAL_INFO.email}
                </a>
                <div className="flex items-center text-slate-500 text-sm font-medium">
                  <Phone className="w-4 h-4 mr-3 text-cyan-600" />
                  {PERSONAL_INFO.phone}
                </div>
                <div className="flex items-center text-slate-500 text-sm font-medium">
                  <MapPin className="w-4 h-4 mr-3 text-cyan-600" />
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-6">Explore</h4>
              <ul className="space-y-4">
                <li><a href="#projects" className="text-slate-500 hover:text-cyan-600 text-sm transition-colors font-medium">Featured Project</a></li>
                <li><a href="#experience" className="text-slate-500 hover:text-cyan-600 text-sm transition-colors font-medium">Professional Journey</a></li>
                <li><a href="#skills" className="text-slate-500 hover:text-cyan-600 text-sm transition-colors font-medium">Technical Stack</a></li>
                <li><a href="#achievements" className="text-slate-500 hover:text-cyan-600 text-sm transition-colors font-medium">Accomplishments</a></li>
                <li><a href={PERSONAL_INFO.github} className="text-slate-500 hover:text-cyan-600 text-sm transition-colors font-medium">GitHub Repository</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-slate-900 font-bold mb-6">Connect</h4>
              <div className="flex space-x-4">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 hover:text-blue-600 hover:shadow-md border border-slate-100 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 hover:text-slate-900 hover:shadow-md border border-slate-100 transition-all">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">
              © {new Date().getFullYear()} Nwakpa Ejike Chukwuma • All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
