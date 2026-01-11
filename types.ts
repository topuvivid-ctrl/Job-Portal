
export type Language = 'en' | 'bn';

export interface Translation {
  [key: string]: {
    en: string;
    bn: string;
  };
}

export type JobCategory = 'IT' | 'Banking' | 'NGO' | 'Marketing' | 'Garments' | 'Education' | 'Remote' | 'Part-time';

export interface Job {
  id: string;
  title: { en: string; bn: string };
  company: string;
  logo: string;
  location: { en: string; bn: string };
  salary: { en: string; bn: string };
  deadline: { en: string; bn: string };
  category: JobCategory;
  type: { en: string; bn: string };
  description: { en: string; bn: string };
  responsibilities: { en: string[]; bn: string[] };
  requirements: { en: string[]; bn: string[] };
  postedAt: string;
}

export interface Company {
  name: string;
  logo: string;
  industry: string;
}

export type LayoutVariation = 'modern' | 'compact' | 'visual' | 'minimalist';
