export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  sideImage?: string;
  category: 'Experience' | 'AI' | 'Tech' | 'Finance' | 'Sociology' ;
}
