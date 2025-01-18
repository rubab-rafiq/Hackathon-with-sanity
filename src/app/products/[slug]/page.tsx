
import Navbar from '@/app/About/navbar';
import Footer from '@/app/Components/footer';
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from 'react';
import Image from "next/image";
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';

export const revalidate = 60; // seconds

// Generate static paths for dynamic routes
export async function generateStaticParams() {
  const query = `*[_type=='product']{
    "slug":slug.current
  }`;
  const slugs = await client.fetch(query);
  const slugRoutes = slugs.map((item: { slug: string }) => item.slug);

  return slugRoutes.map((slug: string) => ({ slug }));
}

// Static page for dynamic routes
export default async function Page({ params: { slug } }: { params: { slug: string } }) {
  const query = `*[_type=='product' && slug.current=="${slug}"]{
    title, image, dept, price, discountPrice, slug, description
  }[0]`;

  const product = await client.fetch(query);

  // Check if product exists
  if (!product) {
    return (
      <div className="text-center text-red-500">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <article className="mt-12 mb-24 px-4 lg:px-24 lg:mx-10 flex flex-col gap-y-12">
        {/* Product Image and Text Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">

          {/* Image on the Left */}
          <div className="flex-1 lg:w-1/2 mx-11">
            <Image
              src={urlFor(product.image).url()}
              width={400} // Smaller width for the image
              height={300} // Adjust height proportionally
              alt={product.title || "Product Image"}
              className="rounded-lg shadow-lg w-full h-auto object-contain" // Ensure it fits well
            />
          </div>

          {/* Text Content on the Right */}
          <div className="flex-1 lg:w-1/2 mr-11">
            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dark dark:text-light text-center">
              {product.title}
            </h1>

            {/* Product Department */}
            <section className="mt-4 text-center">
              <h2 className="text-lg text-dark font-bold dark:text-light">
                Description: <span className="font-semibold text-gray-600">{product.description}</span>
              </h2>
            </section>

            {/* Product Price */}
            <section className="mt-4 text-center">
              <p className="text-xl font-semibold text-dark dark:text-light">
                Price: <span className="text-xl text-accentDarkPrimary">{product.price}</span>
              </p>
              {product.discountPrice && (
                <p className="text-lg font-bold text-green-600 my-4">
                  Discount Price: {product.discountPrice}
                </p>
              )}
            </section>

            {/* Color Options */}
            <div className="mt-4">
              <hr className="border border-[#BDBDBD]" />
              <div className="flex space-x-4 mt-12 justify-center">
                <button className="w-8 h-8 bg-blue-500 rounded-full border border-gray-300"></button>
                <button className="w-8 h-8 bg-green-500 rounded-full border border-gray-300"></button>
                <button className="w-8 h-8 bg-orange-500 rounded-full border border-gray-300"></button>
                <button className="w-8 h-8 bg-black rounded-full border border-gray-300"></button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mt-8 justify-center">
              <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
                Select Options
              </button>
              <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
                <FaHeart className="text-gray-600" />
              </button>
              <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
                <FaShoppingCart className="text-gray-600" />
              </button>
              <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
                <FaEye className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
}
