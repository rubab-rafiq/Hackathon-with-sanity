
export default interface IProduct {
  imageUrl: string;
  title: string;
  slug: string | { current: string };
  price: number;
  discountPrice: number;
  description: string;
  image: string;
  colors?: string[];
  sizes?: string[];
  quantity: number; // Add this
}
export type Tproduct= {
  [x: string]: any;
  title: string;
  description: string;
  discountedprice: number;
  price: number;
  imageUrl: string;
  id:number;
  category?:string;
}