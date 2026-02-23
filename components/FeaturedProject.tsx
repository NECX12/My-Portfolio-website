
import React from 'react';
import { 
  Video, 
  Mic, 
  UserSquare2, 
  Type, 
  Cpu, 
  Layers, 
  Zap,
  ExternalLink
} from 'lucide-react';

const FeaturedProject: React.FC = () => {
  const features = [
    {
      title: "Generative Engines",
      description: "Implemented state-of-the-art Text-to-Video and Text-to-Image pipelines, enabling users to create high-fidelity visual content from simple natural language prompts.",
      icon: <Video className="w-6 h-6 text-cyan-600" />
    },
    {
      title: "Audio Intelligence",
      description: "Developed advanced audio processing modules featuring open-source noise reduction models and high-accuracy real-time Speech-to-Text transcription.",
      icon: <Mic className="w-6 h-6 text-cyan-600" />
    },
    {
      title: "Avatar System",
      description: "Seamlessly integrated Synthesia's API to power AI Talking Avatars, allowing for automated, lifelike video presentations with synchronized lip-syncing.",
      icon: <UserSquare2 className="w-6 h-6 text-cyan-600" />
    },
    {
      title: "Accessibility Engine",
      description: "Built an automated subtitling engine that generates real-time, multi-language captions, significantly improving global accessibility and user engagement.",
      icon: <Type className="w-6 h-6 text-cyan-600" />
    }
  ];

  const techStack = ["Python", "FastAPI", "OpenAI", "ElevenLabs", "Synthesia"];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">Featured <span className="gradient-text">Project</span></h2>
          <div className="w-20 h-1.5 accent-bg rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-bold mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Flagship Implementation
            </div>
            
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              OmiVideo: <span className="text-cyan-600">AI-Powered</span> Video Evolution
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              I architected the backend infrastructure to transform OmiVideo from a traditional video editor into a comprehensive, AI-first creative suite. By leveraging distributed processing and cutting-edge generative models, we redefined the boundaries of automated content creation.
            </p>

            <div className="flex flex-wrap gap-2 mb-10">
              {techStack.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-bold border border-slate-200">
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h4 className="text-slate-900 font-bold mb-2">{feature.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Background for Image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/10 to-indigo-500/10 rounded-3xl blur-2xl"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src="https://picsum.photos/seed/omivideo/1200/800" 
                  alt="OmiVideo Interface" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay Stats */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-4">
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                    <div className="text-cyan-600 font-bold text-xl">99.9%</div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Uptime</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                    <div className="text-indigo-600 font-bold text-xl">10x</div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Efficiency</div>
                  </div>
                  <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                    <div className="text-emerald-600 font-bold text-xl">AI</div>
                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">Driven</div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <div className="absolute -top-6 -right-6 p-4 bg-slate-900 text-white rounded-2xl shadow-2xl border border-slate-800 hidden md:block">
                <div className="flex items-center gap-3">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm font-bold">FastAPI Backend</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 p-4 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <Layers className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-bold">Microservices Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
