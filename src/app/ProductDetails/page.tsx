

// 'use client';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';

// import  IProduct  from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { addToCart } from "@/app/functions/action";

// const ProductDetails = ({ product }: { product: IProduct }) => {
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();

//     if (!selectedColor || !selectedSize) {
//       toast.error("Please select a color and size before adding to cart!");
//       return;
//     }

//     console.log('Product Name:', product.title, 'Product Image:', product.image);
//     console.log('Adding to cart with color:', selectedColor, 'and size:', selectedSize);

//     setIsLoading(true);

//     try {
//       await addToCart({ ...product, colors: [selectedColor], sizes: [selectedSize] });
//       toast.success("Product added to cart successfully!");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("Failed to add product to cart!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       {/* Toast Container */}
//       <ToastContainer />

//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             <Image
//               // src={urlFor(product.image).url()}
//               src={product?.image || "/default-image.jpg"}
//               fill
//               alt={product.title || "Product Image"}
//               className="rounded-xl shadow-lg object-fill"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 lg:w-1/2 text-left space-y-6">
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-dark dark:text-light tracking-tight">
//             {product.title}
//           </h1>
//           <p className="text-md text-gray-600 dark:text-gray-800 font-light leading-relaxed">
//             {product.description}
//           </p>
//           <div className="flex items-center space-x-6">
//             <p className="text-xl font-bold text-gray-900 dark:text-gray-600">
//               <span className="line-through text-red-500">${product.price}</span>
//               {product.discountPrice && (
//                 <span className="ml-2 text-green-600 text-2xl font-semibold">
//                   ${product.discountPrice}
//                 </span>
//               )}
//             </p>
//           </div>
//           <hr className="border border-gray-300" />
          
//           {/* Color Options */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
//               Select Color:
//             </h3>
//             <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
//               {product.colors?.map((color: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-blue-500" : "border-gray-300"} transition transform hover:scale-105`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setSelectedColor(color)}
//                   aria-label={`Color ${color}`}
//                 ></button>
//               ))}
//             </div>
//           </div>

//           {/* Size Options */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
//               Select Size:
//             </h3>
//             <div className="flex space-x-4 mt-4">
//               {product.sizes?.map((size: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`px-6 py-2 text-lg font-semibold border ${selectedSize === size ? "border-blue-500" : "border-gray-300"} rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             <button
//               onClick={handleAddToCart}
//               disabled={isLoading}
//               className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md 
//                 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition transform"}`}
//               aria-label="Add to Cart"
//             >
//               {isLoading ? "Adding..." : "Add to Cart"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductDetails;


// 'use client';
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
// import { addToWishlist } from '@/app/functions/action';
// import  IProduct  from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { addToCart } from "@/app/functions/action";
// import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';


// const ProductDetails = ({ product }: { product: IProduct }) => {
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();

//     if (!selectedColor || !selectedSize) {
//       toast.error("Please select a color and size before adding to cart!");
//       return;
//     }

//     console.log('Product Name:', product.title, 'Product Image:', product.image);
//     console.log('Adding to cart with color:', selectedColor, 'and size:', selectedSize);

//     setIsLoading(true);

//     try {
//       await addToCart({ ...product, colors: [selectedColor], sizes: [selectedSize] });
//       toast.success("Product added to cart successfully!");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("Failed to add product to cart!");
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
  

//   return (
//     <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       {/* Toast Container */}
//       <ToastContainer />

//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             <Image
//               src={product?.image ? urlFor(product.image).url() : "/default-image.jpg"} // Updated this line
//               fill
//               alt={product.title || "Product Image"}
//               className="rounded-xl shadow-lg object-fill"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 lg:w-1/2 text-left space-y-6">
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-dark dark:text-light tracking-tight">
//             {product.title}
//           </h1>
//           <p className="text-md text-gray-600 dark:text-gray-800 font-light leading-relaxed">
//             {product.description}
//           </p>
//           <div className="flex items-center space-x-6">
//             <p className="text-xl font-bold text-gray-900 dark:text-gray-600">
//               <span className="line-through text-red-500">${product.price}</span>
//               {product.discountPrice && (
//                 <span className="ml-2 text-green-600 text-2xl font-semibold">
//                   ${product.discountPrice}
//                 </span>
//               )}
//             </p>
//           </div>
//           <hr className="border border-gray-300" />
          
//           {/* Color Options */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
//               Select Color:
//             </h3>
//             <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
//               {product.colors?.map((color: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-blue-500" : "border-gray-300"} transition transform hover:scale-105`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setSelectedColor(color)}
//                   aria-label={`Color ${color}`}
//                 ></button>
//               ))}
//             </div>
//           </div>

//           {/* Size Options */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
//               Select Size:
//             </h3>
//             <div className="flex space-x-4 mt-4">
//               {product.sizes?.map((size: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`px-6 py-2 text-lg font-semibold border ${selectedSize === size ? "border-blue-500" : "border-gray-300"} rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <div className="flex gap-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             <button
//               onClick={handleAddToCart}
//               disabled={isLoading}
//               className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md 
//                 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition transform"}`}
//               aria-label="Add to Cart"
//             >
//               {isLoading ? "Adding..." : "Add to Cart"}
//             </button>
//              <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
//                               <FaHeart className="text-gray-600" />
//                             </button>
                           
//                             <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
//                               <FaShoppingCart className="text-gray-600" />
//                             </button>
//                             <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
//                               <FaEye className="text-gray-600" /> {/* Eye icon added */}
//                             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductDetails;








// 'use client';
// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useState } from 'react';
// import { addToWishlist, addToCart } from '@/app/functions/action';
// import IProduct from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';

// const ProductDetails = ({ product }: { product: IProduct }) => {
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();

//     if (!selectedColor || !selectedSize) {
//       toast.error("Please select a color and size before adding to cart!");
//       return;
//     }

//     console.log('Product Name:', product.title, 'Product Image:', product.image);
//     console.log('Adding to cart with color:', selectedColor, 'and size:', selectedSize);

//     setIsLoading(true);

//     try {
//       await addToCart({ ...product, colors: [selectedColor], sizes: [selectedSize] });
//       toast.success("Product added to cart successfully!");
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       toast.error("Failed to add product to cart!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAddToWishlist = () => {
//     try {
//       addToWishlist(product);
//       toast.success("Product added to wishlist successfully!");
//     } catch (error) {
//       console.error("Error adding to wishlist:", error);
//       toast.error("Failed to add product to wishlist!");
//     }
//   };

//   return (
//     <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       {/* Toast Container */}
//       <ToastContainer />

//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             <Image
//               src={urlFor(product.image).url() } // Updated this line
//               fill
//               alt={product.title || "Product Image"}
//               className="rounded-xl shadow-lg object-fill"
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 lg:w-1/2 text-left space-y-6">
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-dark dark:text-light tracking-tight">
//             {product.title}
//           </h1>
//           <p className="text-md text-gray-600 dark:text-gray-800 font-light leading-relaxed">
//             {product.description}
//           </p>
//           <div className="flex items-center space-x-6">
//             <p className="text-xl font-bold text-gray-900 dark:text-gray-600">
//               <span className="line-through text-red-500">${product.price}</span>
//               {product.discountPrice && (
//                 <span className="ml-2 text-green-600 text-2xl font-semibold">
//                   ${product.discountPrice}
//                 </span>
//               )}
//             </p>
//           </div>
//           <hr className="border border-gray-300" />
          
//           {/* Color Options */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
//               Select Color:
//             </h3>
//             <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
//               {product.colors?.map((color: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-blue-500" : "border-gray-300"} transition transform hover:scale-105`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setSelectedColor(color)}
//                   aria-label={`Color ${color}`}
//                 ></button>
//               ))}
//             </div>
//           </div>

//           {/* Size Options */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
//               Select Size:
//             </h3>
//             <div className="flex space-x-4 mt-4">
//               {product.sizes?.map((size: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`px-6 py-2 text-lg font-semibold border ${selectedSize === size ? "border-blue-500" : "border-gray-300"} rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart & Wishlist Buttons */}
//           <div className="flex gap-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             <button
//               onClick={handleAddToCart}
//               disabled={isLoading}
//               className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md 
//                 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition transform"}`}
//               aria-label="Add to Cart"
//             >
//               {isLoading ? "Adding..." : "Add to Cart"}
//             </button>
//             <button
//               onClick={handleAddToWishlist}
//               className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200"
//               aria-label="Add to Wishlist"
//             >
//               <FaHeart className="text-gray-600" />
//             </button>
//             <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200" aria-label="View Product">
//               <FaEye className="text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductDetails;




// 'use client';
// import React, { useState } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { addToWishlist, addToCart } from '@/app/functions/action';
// import IProduct from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { FaEye, FaHeart,  FaShoppingCart } from 'react-icons/fa';
// const ProductDetails = ({ product }: { product: IProduct }) => {
//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();

//     if (!selectedColor || !selectedSize) {
//       toast.error("Please select a color and size before adding to cart!");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       await addToCart({ ...product, colors: [selectedColor], sizes: [selectedSize] });
//       toast.success("Product added to cart successfully!");
//     } catch (error) {
//       toast.error("Failed to add product to cart!");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleAddToWishlist = () => {
//     try {
//       addToWishlist(product);
//       toast.success("Product added to wishlist successfully!");
//     } catch (error) {
//       toast.error("Failed to add product to wishlist!");
//     }
//   };

//   return (
//     <article className="mt-12 mb-24 px-6 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       {/* Toast Container */}
//       <ToastContainer />

//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             {product.image ? (
//               <Image
//                 src={urlFor(product.image).url() || '/default-image.jpg'}
//                 fill
//                 alt={product.title || "Product Image"}
//                 className="rounded-xl shadow-lg object-fill"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             ) : (
//               <div className="h-full w-full bg-gray-300 flex items-center justify-center text-white rounded-xl">
//                 No Image Available
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 lg:w-1/2 text-left space-y-6">
//           <h1 className="text-4xl lg:text-5xl font-extrabold text-dark dark:text-light tracking-tight">
//             {product.title}
//           </h1>
//           <p className="text-md text-gray-600 dark:text-gray-800 font-light leading-relaxed">
//             {product.description}
//           </p>
//           <div className="flex items-center space-x-6">
//             <p className="text-xl font-bold text-gray-900 dark:text-gray-600">
//               <span className="line-through text-red-500">${product.price}</span>
//               {product.discountPrice && (
//                 <span className="ml-2 text-green-600 text-2xl font-semibold">
//                   ${product.discountPrice}
//                 </span>
//               )}
//             </p>
//           </div>
//           <hr className="border border-gray-300" />
//           {/* Remaining details */}

//                      {/* Color Options */}
//            <div className="mt-8">
//              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
//               Select Color:
//             </h3>
//              <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
//            {product.colors?.map((color: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-blue-500" : "border-gray-300"} transition transform hover:scale-105`}
//                   style={{ backgroundColor: color }}
//                   onClick={() => setSelectedColor(color)}
//                   aria-label={`Color ${color}`}
//                 ></button>
//               ))}
//             </div>
//           </div>

//           {/* Size Options */}
//           <div className="mt-8">
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
//               Select Size:
//             </h3>
//             <div className="flex space-x-4 mt-4">
//               {product.sizes?.map((size: string, index: number) => (
//                 <button
//                   key={index}
//                   className={`px-6 py-2 text-lg font-semibold border ${selectedSize === size ? "border-blue-500" : "border-gray-300"} rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart & Wishlist Buttons */}
//           <div className="flex gap-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             <button
//               onClick={handleAddToCart}
//               disabled={isLoading}
//               className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md 
//                 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition transform"}`}
//               aria-label="Add to Cart"
//             >
//               {isLoading ? "Adding..." : "Add to Cart"}
//             </button>
//             <button
//               onClick={handleAddToWishlist}
//               className="bg-gray-100 p-4 rounded-[50%] shadow-md hover:bg-gray-200"
//               aria-label="Add to Wishlist"
//             >
//               <FaHeart className="text-gray-600" />
//             </button>
//             <button className="bg-gray-100 p-4 rounded-[50%] shadow-md hover:bg-gray-200" aria-label="View Product">
//               <FaEye className="text-gray-600" />
//             </button>
//             <button className="bg-gray-100 p-4 rounded-[50%] shadow-md hover:bg-gray-200" aria-label="View Product">
//               <FaShoppingCart className="text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

//   export default ProductDetails


'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToWishlist, addToCart } from '@/app/functions/action';
import IProduct from "@/types/page";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductDetails = ({ product }: { product: IProduct }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!selectedColor || !selectedSize) {
      toast.error("Please select a color and size before adding to cart!");
      return;
    }

    setIsLoading(true);

    try {
      await addToCart({ ...product, colors: [selectedColor], sizes: [selectedSize] });
      toast.success("Product added to cart successfully!");
    } catch (error) {
      toast.error("Failed to add product to cart!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToWishlist = () => {
    try {
      addToWishlist(product);
      toast.success("Product added to wishlist successfully!");
    } catch (error) {
      toast.error("Failed to add product to wishlist!");
    }
  };

  return (
    <article className="mt-12 mb-24 px-6 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
      {/* Toast Container */}
      <ToastContainer />

      <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
        {/* Product Image */}
        <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
            {product.image ? (
              <Image
                src={urlFor(product.image).url() || '/default-image.jpg'}
                fill
                alt={product.title || "Product Image"}
                className="rounded-xl shadow-lg object-fill"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="h-full w-full bg-gray-300 flex items-center justify-center text-white rounded-xl">
                No Image Available
              </div>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 lg:w-1/2 text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-dark dark:text-light tracking-tight">
            {product.title}
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-800 font-light leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center space-x-6">
            <p className="text-xl font-bold text-gray-900 dark:text-gray-600">
              <span className="line-through text-red-500">${product.price}</span>
              {product.discountPrice && (
                <span className="ml-2 text-green-600 text-2xl font-semibold">
                  ${product.discountPrice}
                </span>
              )}
            </p>
          </div>
          <hr className="border border-gray-300" />
          {/* Remaining details */}

          {/* Color Options */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
              Select Color:
            </h3>
            <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
              {product.colors?.map((color: string, index: number) => (
                <button
                  key={index}
                  className={`w-8 h-8 rounded-full border ${selectedColor === color ? "border-blue-500" : "border-gray-300"} transition transform hover:scale-105`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Color ${color}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">
              Select Size:
            </h3>
            <div className="flex space-x-4 mt-4">
              {product.sizes?.map((size: string, index: number) => (
                <button
                  key={index}
                  className={`px-6 py-2 text-lg font-semibold border ${selectedSize === size ? "border-blue-500" : "border-gray-300"} rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart & Wishlist Buttons */}
          <div className="flex gap-4 sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <button
              onClick={handleAddToCart}
              disabled={isLoading}
              className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md 
                ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition transform"}`}
              aria-label="Add to Cart"
            >
              {isLoading ? "Adding..." : "Add to Cart"}
            </button>
            <button
              onClick={handleAddToWishlist}
              className="bg-gray-100 p-4 rounded-[50%] shadow-md hover:bg-gray-200"
              aria-label="Add to Wishlist"
            >
              <FaHeart className="text-gray-600" />
            </button>
            <button className="bg-gray-100 p-4 rounded-[50%] shadow-md hover:bg-gray-200" aria-label="View Product">
              <FaEye className="text-gray-600" />
            </button>
            <button className="bg-gray-100 p-4 rounded-[50%] shadow-md hover:bg-gray-200" aria-label="View Product">
              <FaShoppingCart className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
