export interface BlogArticle {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  date: string;
  author: string;
  categories: string[];
  image: string;
  readTime: number;
}
