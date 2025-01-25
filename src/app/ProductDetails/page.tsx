// "use client"; // Client Component declaration

// import React from "react";
// import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { IProduct } from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";


// const ProductDetails = ({ product }: { product: IProduct }) => {
//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     addToCart(product);
//     alert("Product added to cart successfully!");
//     console.log("Product added to cart successfully!");
//   };

//   return (
//     <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             <Image
//               src={urlFor(product.image).url()}
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
//           <p>Quantity: {product.quantity}</p>
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
//                   className="w-8 h-8 rounded-full border border-gray-300 transition transform hover:scale-105"
//                   style={{ backgroundColor: color }}
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
//                   className="px-6 py-2 text-lg font-semibold border border-gray-300 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart & Icons */}
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             <button
//               onClick={handleAddToCart}
//               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform"
//               aria-label="Add to Cart"
//             >
//               Add to Cart
//             </button>
//             <div className="flex space-x-4 justify-center lg:justify-start mt-6">
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="Add to Wishlist"
//               >
//                 <FaHeart className="text-gray-600" />
//               </button>
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="View Details"
//               >
//                 <FaEye className="text-gray-600" />
//               </button>
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="Add to Cart"
//               >
//                 <FaShoppingCart className="text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductDetails;

// 'use client'
// import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { IProduct } from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { addToCart } from "@/app/functions/page"; // Ensure this is being imported correctly

// const ProductDetails = ({ product }: { product: IProduct }) => {

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     addToCart(product);
//     alert("Product added to cart successfully!");
//     console.log(product);
    


//   };

//   return (
//     <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             <Image
//               src={urlFor(product.image).url()}
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
//           <p>Quantity: {product.quantity}</p>
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
//                   className="w-8 h-8 rounded-full border border-gray-300 transition transform hover:scale-105"
//                   style={{ backgroundColor: color }}
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
//                   className="px-6 py-2 text-lg font-semibold border border-gray-300 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart & Icons */}
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             <button
//               onClick={handleAddToCart}
//               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform"
//               aria-label="Add to Cart"
//             >
//               Add to Cart
//             </button>
//             <div className="flex space-x-4 justify-center lg:justify-start mt-6">
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="Add to Wishlist"
//               >
//                 <FaHeart className="text-gray-600" />
//               </button>
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="View Details"
//               >
//                 <FaEye className="text-gray-600" />
//               </button>
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="Add to Cart"
//               >
//                 <FaShoppingCart className="text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductDetails;







// 'use client'
// import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { IProduct } from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { addToCart } from "@/app/functions/page"; // Ensure this is being imported correctly

// const ProductDetails = ({ product }: { product: IProduct }) => {

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     addToCart(product);
//     alert("Product added to cart successfully!");
//     console.log(product);
//     // You might want to force a re-fetch of the cart here
//     // For example, call a state setter or re-fetch from localStorage to update the UI
//   };

//   return (
//     <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             <Image
//               src={urlFor(product.image).url()}
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
//           <p>Quantity: {product.quantity || 0}</p> {/* Handle null quantity gracefully */}
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
//                   className="w-8 h-8 rounded-full border border-gray-300 transition transform hover:scale-105"
//                   style={{ backgroundColor: color }}
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
//                   className="px-6 py-2 text-lg font-semibold border border-gray-300 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105"
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart & Icons */}
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             <button
//               onClick={handleAddToCart}
//               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform"
//               aria-label="Add to Cart"
//             >
//               Add to Cart
//             </button>
//             <div className="flex space-x-4 justify-center lg:justify-start mt-6">
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="Add to Wishlist"
//               >
//                 <FaHeart className="text-gray-600" />
//               </button>
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="View Details"
//               >
//                 <FaEye className="text-gray-600" />
//               </button>
//               <button
//                 className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                 aria-label="Add to Cart"
//               >
//                 <FaShoppingCart className="text-gray-600" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductDetails;




// 'use client';
// import { useState } from 'react';
// import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { IProduct } from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { addToCart } from "@/app/functions/page";

// const ProductDetails = ({ product }: { product: IProduct }) => {
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!selectedColor || !selectedSize) {
//       alert("Please select a color and size before adding to cart!");
//       return;
//     }
//     // Add selected size and color to product
//     addToCart({ ...product, colors: [selectedColor], sizes: [selectedSize] });
//   alert("Product added to cart successfully!");
// };

//   return (
//     <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             <Image
//               src={urlFor(product.image).url()}
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
//                   className={`w-8 h-8 rounded-full border ${
//                     selectedColor === color ? "border-blue-500" : "border-gray-300"
//                   } transition transform hover:scale-105`}
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
//                   className={`px-6 py-2 text-lg font-semibold border ${
//                     selectedSize === size ? "border-blue-500" : "border-gray-300"
//                   } rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//             {/* <button
//               onClick={handleAddToCart}
//               className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform"
//               aria-label="Add to Cart"
//             >
//               Add to Cart
//             </button> */}
//             <button
//   onClick={handleAddToCart}
//   disabled={isLoading || !selectedColor || !selectedSize}
//   className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md 
//     ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition transform"}
//   `}
//   aria-label="Add to Cart"
// >
//   {isLoading ? "Adding..." : "Add to Cart"}
// </button>

//           </div>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default ProductDetails;

// 'use client';
// import { useState } from 'react';
// import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { IProduct } from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import Image from "next/image";
// import { addToCart } from "@/app/functions/page";

// const ProductDetails = ({ product }: { product: IProduct }) => {
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(false); // Add loading state

//   const handleAddToCart = async (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!selectedColor || !selectedSize) {
//       alert("Please select a color and size before adding to cart!");
//       return;
//     }
    
//     setIsLoading(true);  // Set loading state to true while adding to cart

//     // Add selected size and color to product
//     await addToCart({ ...product, colors: [selectedColor], sizes: [selectedSize] });
    
//     setIsLoading(false);  // Reset loading state after action completes
//     alert("Product added to cart successfully!");
//   };

//   return (
//     <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//       <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//         {/* Product Image */}
//         <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//           <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//             <Image
//               src={urlFor(product.image).url()}
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
//               disabled={isLoading || !selectedColor || !selectedSize}
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



'use client';
import { useState } from 'react';

import { IProduct } from "@/types/page";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { addToCart } from "@/app/functions/page";

const ProductDetails = ({ product }: { product: IProduct }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Add loading state

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size before adding to cart!");
      addToCart(product); // `product` ko cart mein add karna
    
      return;
    }
  console.log('Product Name:', product.title, 'Product Image:', product.image);
    console.log('Adding to cart with color:', selectedColor, 'and size:', selectedSize);  // Debug log
  
    setIsLoading(true);
  
    await addToCart({ ...product, colors: [selectedColor], sizes: [selectedSize] });
  
    setIsLoading(false);
    alert("Product added to cart successfully!");
  };
  

  return (
    <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
        {/* Product Image */}
        <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
          <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
            <Image
              src={urlFor(product.image).url()}
              fill
              alt={product.title || "Product Image"}
              className="rounded-xl shadow-lg object-fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
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

          {/* Add to Cart Button */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            <button
              onClick={handleAddToCart}
              disabled={isLoading || !selectedColor || !selectedSize}
              className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md 
                ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:scale-105 transition transform"}`}
              aria-label="Add to Cart"
            >
              {isLoading ? "Adding..." : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProductDetails;
