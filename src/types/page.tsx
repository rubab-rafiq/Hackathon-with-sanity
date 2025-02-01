
export default interface IProduct {
  imageUrl: string;
  title: string;
  slug: any;
  price: number;
  discountPrice: number;
  description: string;
  image: string;
  colors?: string[];
  sizes?: string[];
  quantity: number; // Add this
}
