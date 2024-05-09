export interface Drug {
  id: number;
  name: string;
  price: number;
  image?: string;
}

export interface DrugsPageProps {
  drugs: { data: Drug[] };
  currentPage: number;
  totalPages: number;
}
