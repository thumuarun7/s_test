export interface NewsItem {
  id: string;
  heading: string;
  description: string;
  imageUrl: string | null;
  videoUrl: string | null;
  category: string;
  isBreaking: boolean;
  isActive: boolean;
  publishedAt: Date;
  author: string;
  location?: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}