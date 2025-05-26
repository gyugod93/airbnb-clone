export interface Farm {
  id: string;
  imageURL: string;
  title: string;
  rating: number;
  distance: number;
  availableDates: string;
  content: string;
  price: number;
}

export interface FormData {
  title: string;
  price: string;
  imageURL: string;
  rating: number;
  distance: number;
  availableDates: string;
  content: string;
}
