import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { title, language } = req.body;
  if (!title || !language) return res.status(400).json({ error: "Title and language required" });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Generate social media content in ${language} for: "${title}"`,
      config: { temperature: 0.7, thinkingConfig: { thinkingBudget: 0 } },
    });

    const content = response.text || response.output_text || response.outputs?.[0]?.content?.[0]?.text;

    res.status(200).json({ content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Gemini generation failed" });
  }
}
