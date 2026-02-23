
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES, ACHIEVEMENTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const RESUME_CONTEXT = `
Context about Nwakpa Ejike Chukwuma:
- Role: AI/ML Engineer and Data Scientist.
- Contact: ${PERSONAL_INFO.email}, ${PERSONAL_INFO.phone}, ${PERSONAL_INFO.location}.
- Top Skills: ${SKILL_CATEGORIES.map(c => c.skills.join(', ')).join('. ')}.
- Key Achievements: ${ACHIEVEMENTS.map(a => a.title + ': ' + a.description).join('. ')}.
- Experience: ${EXPERIENCES.map(e => `${e.role} at ${e.company} (${e.period}). Highlights: ${e.highlights.join('; ')}`).join('\n')}.

Instructions: You are an AI assistant representing Nwakpa Ejike Chukwuma on his portfolio website. Answer questions about his experience, skills, and background professionally. Keep answers concise but insightful. If someone asks for a job, encourage them to reach out via email.
`;

export async function askResumeQuestion(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: RESUME_CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 500
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please try again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The AI assistant is currently taking a coffee break. Please reach out to Ejike directly via email!";
  }
}
