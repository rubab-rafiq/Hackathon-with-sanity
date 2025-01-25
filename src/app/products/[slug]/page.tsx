
// import Navbar from '@/app/About/navbar';
// import Footer from '@/app/Components/footer';
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import React from 'react';
// import Image from "next/image";
// import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';

import Footer from "@/app/Components/footer";
import Navbar from "@/app/Components/navbar2";
import ProductDetails from "@/app/ProductDetails/page";
import { client } from "@/sanity/lib/client";

// export const revalidate = 60; // seconds

// // Generate static paths for dynamic routes
// export async function generateStaticParams() {
//   const query = `*[_type=='product']{
//     "slug":slug.current
//   }`;
//   const slugs = await client.fetch(query);
//   const slugRoutes = slugs.map((item: { slug: string }) => item.slug);

//   return slugRoutes.map((slug: string) => ({ slug }));
// }

// export default async function Page({ params: { slug } }: { params: { slug: string } }) {
//   const query = `*[_type=='product' && slug.current=="${slug}"]{
//     title, image, dept, price, discountPrice, slug, description, colors, sizes
//   }[0]`;

//   const product = await client.fetch(query);

//   if (!product) {
//     return (
//       <div className="text-center text-red-500 font-extrabold text-4xl p-10">
//         <h2>Product not found</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//         <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//           {/* Product Image */}
//           <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//             <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//               <Image
//                 src={urlFor(product.image).url()}
//                 fill
//                 alt={product.title || "Product Image"}
//                 className="rounded-xl shadow-lg object-fill"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="flex-1 lg:w-1/2 text-left space-y-6">
//             <h1 className="text-4xl lg:text-5xl font-extrabold text-dark dark:text-light tracking-tight">
//               {product.title}
//             </h1>
//             <p className="text-md text-gray-600 dark:text-gray-800 font-light leading-relaxed">
//               {product.description}
//             </p>
//             <div className="flex items-center space-x-6">
//               <p className="text-xl font-bold text-gray-900 dark:text-gray-600">
//                 <span className="line-through text-red-500">${product.price}</span>
//                 {product.discountPrice && (
//                   <span className="ml-2 text-green-600 text-2xl font-semibold">
//                     ${product.discountPrice}
//                   </span>
//                 )}
//               </p>
//             </div>
//             <hr className="border border-gray-300" />
//             {/* Color Options */}
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">Select Color:</h3>
//               <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
//                 {product.colors?.map((color: string, index: number) => (
//                   <button
//                     key={index}
//                     className="w-8 h-8 rounded-full border border-gray-300 transition transform hover:scale-105"
//                     style={{ backgroundColor: color }}
//                     aria-label={`Color ${color}`}
//                   ></button>
//                 ))}
//               </div>
//             </div>

//             {/* Size Options */}
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">Select Size:</h3>
//               <div className="flex space-x-4 mt-4">
//                 {product.sizes?.map((size: string, index: number) => (
//                   <button
//                     key={index}
//                     className="px-6 py-2 text-lg font-semibold border border-gray-300 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Add to Cart & Icons */}
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//               <button
//                 className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform"
//                 aria-label="Add to Cart"
//               >
//                 Add to Cart
//               </button>
//               <div className="flex space-x-4 justify-center lg:justify-start mt-6">
//                 <button
//                   className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                   aria-label="Add to Wishlist"
//                 >
//                   <FaHeart className="text-gray-600" />
//                 </button>
//                 <button
//                   className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                   aria-label="View Details"
//                 >
//                   <FaEye className="text-gray-600" />
//                 </button>
//                 <button
//                   className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                   aria-label="Add to Cart"
//                 >
//                   <FaShoppingCart className="text-gray-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>
//       <Footer />
//     </>
//   );
// }

// import Navbar from '@/app/About/navbar';
// import Footer from '@/app/Components/footer';
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import React from 'react';
// import Image from "next/image";
// import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';
// import { IProduct } from '@/types/page';
// import { addToCart } from '@/app/functions/page';

// export const revalidate = 60; // seconds

// // Generate static paths for dynamic routes
// export async function generateStaticParams() {
//   const query = `*[_type=='product']{
//     "slug":slug.current
//   }`;
//   const slugs = await client.fetch(query);
//   const slugRoutes = slugs.map((item: { slug: string }) => item.slug);

//   return slugRoutes.map((slug: string) => ({ slug }));
// }

// export default async function Page({ params: { slug } }: { params: { slug: string } }) {
//   const query = `*[_type=='product' && slug.current=="${slug}"]{
//     title, image, dept, price, discountPrice, slug, description, colors, sizes
//   }[0]`;

//   const product = await client.fetch(query);

//   if (!product) {
//     return (
//       <div className="text-center text-red-500 font-extrabold text-4xl p-10">
//         <h2>Product not found</h2>
//       </div>
//     );
//   }
  

//   const handleAddToCart = (e: React.MouseEvent, product: IProduct) => {
//    e.preventDefault()
//    addToCart(product);
//    alert("Product added to cart successfully!");
//    console.log(product);
//   }
//   return (
//     <>
//       <Navbar />
//       <article className="mt-12 mb-24 px-4 lg:px-24 flex flex-col gap-y-12 items-center justify-center text-center">
//         <div className="flex flex-col lg:flex-row items-center gap-8 w-full">
//           {/* Product Image */}
//           <div className="flex-1 relative w-full max-w-[500px] md:ml-20">
//             <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] max-w-[400px]">
//               <Image
//                 src={urlFor(product.image).url()}
//                 fill
//                 alt={product.title || "Product Image"}
//                 className="rounded-xl shadow-lg object-fill"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               />
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="flex-1 lg:w-1/2 text-left space-y-6">
//             <h1 className="text-4xl lg:text-5xl font-extrabold text-dark dark:text-light tracking-tight">
//               {product.title}
//             </h1>
//             <p className="text-md text-gray-600 dark:text-gray-800 font-light leading-relaxed">
//               {product.description}
//             </p>
//             <div className="flex items-center space-x-6">
//               <p className="text-xl font-bold text-gray-900 dark:text-gray-600">
//                 <span className="line-through text-red-500">${product.price}</span>
//                 {product.discountPrice && (
//                   <span className="ml-2 text-green-600 text-2xl font-semibold">
//                     ${product.discountPrice}
//                   </span>
//                 )}
//               </p>
//             </div>
//             <hr className="border border-gray-300" />
//             {/* Color Options */}
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">Select Color:</h3>
//               <div className="flex space-x-4 mt-4 justify-center lg:justify-start">
//                 {product.colors?.map((color: string, index: number) => (
//                   <button
//                     key={index}
//                     className="w-8 h-8 rounded-full border border-gray-300 transition transform hover:scale-105"
//                     style={{ backgroundColor: color }}
//                     aria-label={`Color ${color}`}
//                   ></button>
//                 ))}
//               </div>
//             </div>

//             {/* Size Options */}
//             <div className="mt-8">
//               <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-600">Select Size:</h3>
//               <div className="flex space-x-4 mt-4">
//                 {product.sizes?.map((size: string, index: number) => (
//                   <button
//                     key={index}
//                     className="px-6 py-2 text-lg font-semibold border border-gray-300 rounded-md text-gray-700 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-transform hover:scale-105"
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Add to Cart & Icons */}
//             <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
//               <button onClick={(e) => handleAddToCart(e, product)}
//                 className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 transition transform"
//                 aria-label="Add to Cart"
//               >
//                 Add to Cart
//               </button>
//               <div className="flex space-x-4 justify-center lg:justify-start mt-6">
//                 <button
//                   className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                   aria-label="Add to Wishlist"
//                 >
//                   <FaHeart className="text-gray-600" />
//                 </button>
//                 <button
//                   className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                   aria-label="View Details"
//                 >
//                   <FaEye className="text-gray-600" />
//                 </button>
//                 <button
//                   className="bg-gray-100 p-4 rounded-full shadow-md hover:bg-gray-200 transition"
//                   aria-label="Add to Cart"
//                 >
//                   <FaShoppingCart className="text-gray-600" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </article>
//       <Footer />
//     </>
//   );
// }


export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  // Ensure the params are awaited before usage
  const { slug } = await params; // Await the params to resolve the Promise; // Check if it logs correctly

  const query = `*[_type=='product' && slug.current=="${slug}"]{
    title, image, price, discountPrice, slug, description, colors, sizes, quantity
  }[0]`;

  const product = await client.fetch(query);

  if (!product) {
    return (
      <div className="text-center text-red-500 font-extrabold text-4xl p-10">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ProductDetails product={product} />
      <Footer />
    </>
  );
}
