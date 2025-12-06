import axios from 'axios';

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  publishedAt: string;
  source: string;
  url: string;
  views: number;
}

export async function fetchNews(category: string = 'general'): Promise<Article[]> {
  try {
    const categoryMap: Record<string, string> = {
      general: 'general',
      politique: 'politics',
      finance: 'business',
      digital: 'technology',
    };

    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: process.env.NEWSAPI_KEY,
        category: categoryMap[category] || 'general',
        language: 'fr',
        pageSize: 20,
      },
    });

    return response.data.articles.map((article: any, index: number) => ({
      id: `news-${index}-${Date.now()}`,
      title: article.title || 'Titre non disponible',
      description: article.description || 'Description non disponible',
      image: article.urlToImage || `https://picsum.photos/800/600?random=${index}`,
      category,
      publishedAt: article.publishedAt,
      source: article.source.name || 'Source',
      url: article.url,
      views: Math.floor(Math.random() * 10000),
    }));
  } catch (error) {
    console.error('NewsAPI Error:', error);
    
    // Données de démonstration si l'API échoue
    return Array.from({ length: 6 }, (_, i) => ({
      id: `demo-${i}`,
      title: `Actualité ${i + 1} : Titre de démonstration`,
      description: 'Ceci est une description de démonstration en attendant la configuration de votre clé API NewsAPI.',
      image: `https://picsum.photos/800/600?random=${i}`,
      category,
      publishedAt: new Date().toISOString(),
      source: 'Demo Source',
      url: '#',
      views: Math.floor(Math.random() * 10000),
    }));
  }
}