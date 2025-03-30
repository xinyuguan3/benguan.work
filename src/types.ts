export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  sideImage?: string;
  category: 'Aethetics' | 'AI' | 'Tech' | 'Finance' | 'Sociology' ;
}
