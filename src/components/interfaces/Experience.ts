export interface Experience {
  id: number;
  title: string;
  pricePerPerson: number;
  img: string;
  badge?: 'popular' | 'oferta';
  shortDescription: string;
  fullDescription: string;
  images: string[];
  duration: string;
  included: string[];
}