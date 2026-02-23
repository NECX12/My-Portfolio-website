
import React from 'react';
import { 
  Database, 
  BrainCircuit, 
  Cpu, 
  MessageSquare, 
  Globe, 
  FileText
} from 'lucide-react';
import { Experience, SkillCategory, Achievement } from './types';

export const PERSONAL_INFO = {
  name: "Nwakpa Ejike Chukwuma",
  email: "ejikechukwuma99@gmail.com",
  phone: "+234 (0) 8084070637",
  location: "Lagos, Nigeria",
  github: "https://github.com/NECX12",
  linkedin: "https://www.linkedin.com/in/nwakpa-ejike",
  tagline: "AI/ML Engineer & Data Scientist specialized in Computer Vision, NLP, and Generative AI pipelines.",
  about: "Driven AI researcher and engineer with expertise in developing scalable machine learning solutions. From building AI-assisted sign language translation systems to optimizing CNNs for video analytics, I focus on bridging the gap between theoretical research and production-grade software."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Omivideo",
    role: "Data Scientist (AI Engineer)",
    location: "Canada (Remote)",
    period: "Feb 2025 - Present",
    type: "Full-time",
    highlights: [
      "Designing and implementing scalable AI/ML solutions for video analytics and recommendation systems.",
      "Developing deep learning models (CNN) for text-to-speech, AI talking avatars, and voiceover integration.",
      "Leading AI pipeline development for seamless backend integration.",
      "Collaborating with cross-functional teams to deploy high-performance models into production."
    ]
  },
  {
    company: "Omdena - São Paulo Chapter",
    role: "Data Scientist (Volunteer-Opensource)",
    location: "Brazil (Remote)",
    period: "Jan 2025 - Apr 2025",
    type: "Volunteer",
    highlights: [
      "Building an AI-Assisted Sign Language Translation System for healthcare communication.",
      "Preprocessing and annotating multilingual sign language datasets.",
      "Implementing real-time recognition using deep learning and NLP techniques.",
      "Working with an international team to refine model performance and usability."
    ]
  },
  {
    company: "DataVille Research Consultancy",
    role: "Research Analyst Intern",
    location: "Remote",
    period: "Oct 2024 - Dec 2024",
    type: "Internship",
    highlights: [
      "Executed data analysis projects across finance, healthcare, and business sectors.",
      "Applied statistical modeling to derive actionable insights from complex datasets.",
      "Presented structured findings to stakeholders for data-driven decision making."
    ]
  },
  {
    company: "9ja Youth Drive",
    role: "Python for Data Science Instructor",
    location: "Remote",
    period: "Jun 2025 - Present",
    type: "Teaching",
    highlights: [
      "Instructing youth on Python, Numpy, Pandas, and basic Machine Learning.",
      "Designing hands-on projects and curriculum to ensure knowledge retention.",
      "Mentoring students through coding evaluations and real-world project scenarios."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core AI/ML",
    skills: ["PyTorch", "Scikit-learn", "LangChain", "Hugging Face", "CNN", "Vision Transformers", "RAG"]
  },
  {
    title: "NLP & Conversational",
    skills: ["NLTK", "Gensim", "Hugging Face Transformers", "Conversational AI", "Vector Databases"]
  },
  {
    title: "Languages & Tools",
    skills: ["Python", "PostgreSQL", "MySQL", "Git", "VS Code", "Jupyter", "Replit", "Cursor"]
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "Numpy", "Power BI", "Excel", "Time Series Forecasting", "Statistical Modeling"]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "1st Place - Valeria Agberagba AI Innovation Challenge",
    description: "Co-winner for 'GoSmart Technologies site capturing', an Agentic system for agricultural robots that optimizes planting strategies using land analysis.",
    link: "https://github.com/NECX12"
  }
];

export const INTEREST_ICONS: Record<string, React.ReactNode> = {
  "Data Science": <Database className="w-5 h-5" />,
  "Conversational AI": <MessageSquare className="w-5 h-5" />,
  "Machine learning": <BrainCircuit className="w-5 h-5" />,
  "LLM": <Globe className="w-5 h-5" />,
  "Vector databases": <Database className="w-5 h-5" />,
  "Vision Transformers": <Cpu className="w-5 h-5" />,
  "RAG": <FileText className="w-5 h-5" />
};
