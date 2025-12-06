import { GoogleGenerativeAI } from '@google/generative-ai';

export interface AIAnalysis {
  summary: string;
  sentiment: string;
  keyPoints: string[];
}

export async function analyzeArticle(title: string, content: string): Promise<AIAnalysis> {
  try {
    if (!process.env.GOOGLE_GEMINI_API_KEY) {
      throw new Error('API Key manquante');
    }

    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `Analyse cet article d'actualité en français:

TITRE: ${title}
CONTENU: ${content}

Fournis une analyse au format JSON avec:
{
  "summary": "Résumé en 2 phrases",
  "sentiment": "positif ou négatif ou neutre",
  "keyPoints": ["point 1", "point 2", "point 3"]
}

Réponds UNIQUEMENT avec du JSON valide.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Format invalide');
    }

    return JSON.parse(jsonMatch[0]);
  } catch (error) {
    console.error('AI Analysis Error:', error);
    
    return {
      summary: 'Analyse IA temporairement indisponible.',
      sentiment: 'neutre',
      keyPoints: ['Analyse en cours...'],
    };
  }
}