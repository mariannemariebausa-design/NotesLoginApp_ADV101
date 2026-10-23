export interface Note {
  id: string;
  title: string;
  content: string;
  category: 'Personal' | 'Work' | 'Ideas';
  date: string;
}