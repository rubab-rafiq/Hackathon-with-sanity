
export interface IProduct {
  title: string;
  slug: string;
  price: number;
  discountPrice?: number;
  description: string;
  image: string;
  colors: string[];
  sizes: string[];
  quantity: number; // Add this
}
