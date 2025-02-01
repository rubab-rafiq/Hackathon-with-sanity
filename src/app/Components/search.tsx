
// "use client";

// import { useRouter } from "next/navigation";
// import { client } from "@/sanity/lib/client";
// import React, { useEffect, useState } from "react";
// import { CiSearch } from "react-icons/ci";
// import Image from "next/image"; // Import next/image
// import Iproduct from "@/types/page";
// import { urlFor } from "@/sanity/lib/image"; // Ensure urlFor is correctly imported

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [showInput, setShowInput] = useState(false);
//   const [products, setProducts] = useState<Iproduct[]>([]);
//   const [filteredProducts, setFilteredProducts] = useState<{
//     title: string;
//     imageUrl: string;
//     slug: string;
//   }[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchData = async () => {
//       const fetchedProducts = await client.fetch(
//         `*[_type == "product"]{
//           slug,
//           title,
//           image
//         }`
//       );
//       setProducts(fetchedProducts);
//     };

//     fetchData();
//   }, []);

//   const handleSearch = (e: any) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     if (term.trim() === "") {
//       setFilteredProducts([]);
//       return;
//     }

//     const results = products.filter((product) =>
//       product.title.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredProducts(
//       results.map((product) => ({
//         title: product.title,
//         imageUrl: product.image,
//         slug: product.slug.current, // Use the slug to navigate
//       }))
//     );
//   };

//   const handleProductClick = (slug: string) => {
//     router.push(`/products/${slug}`); // Navigate using slug
//   };

//   return (
//     <div className="relative flex justify-center items-center">
//       {/* Search Icon Button with Hover Effect */}
//       <button
//         className="text-xs flex justify-center items-center cursor-pointer p-2 rounded-full transition-all duration-300 hover:bg-gray-200"
//         onClick={() => setShowInput(!showInput)}
//       >
//         <CiSearch className="text-3xl" />
//       </button>

//       {/* Show input inside the search icon when clicked */}
//       {showInput && (
//         <div className="absolute top-0 left-0 flex justify-center items-center w-full z-50">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={handleSearch}
//             className="w-80 h-10 px-4 py-2 mt-2 outline-none rounded-md border border-gray-300 shadow-md transition-all duration-300 focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//       )}

//       {/* Display search results */}
//       {filteredProducts.length > 0 && (
//         <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-xs md:max-w-md bg-white shadow-lg max-h-60 overflow-y-auto rounded-md border z-50">
//           <ul>
//             {filteredProducts.map((product, index) => (
//               <li
//                 key={index}
//                 className="p-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer transition-all"
//                 onClick={() => handleProductClick(product.slug)} // Use slug for the route
//               >
//                 {product.imageUrl ? (
//                   <div className="relative w-10 h-10">
//                     <Image
//                       src={product.imageUrl ? urlFor(product.imageUrl).url() : '/default-image.jpg'} // Add fallback here
//                       alt={product.title || "Product Image"}
//                       layout="fill"
//                       objectFit="cover"
//                       className="rounded"
//                     />
//                   </div>
//                 ) : (
//                   <div className="w-10 h-10 bg-gray-200 rounded"></div> // Default placeholder image
//                 )}
//                 <span className="text-sm">{product.title}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;

"use client";

import { useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image"; // Import next/image
import Iproduct from "@/types/page";
import { urlFor } from "@/sanity/lib/image"; // Ensure urlFor is correctly imported

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<{
    title: string;
    imageUrl: string;
    slug: string;
  }[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await client.fetch(
        `*[_type == "product"]{
          slug,
          title,
          image
        }`
      );
      setProducts(fetchedProducts);
    };

    fetchData();
  }, []);
  const handleSearch = (e: any) => {
    const term = e.target.value;
    setSearchTerm(term);
  
    if (term.trim() === "") {
      setFilteredProducts([]);
      return;
    }
  
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(
      results.map((product) => ({
        title: product.title,
        imageUrl: product.image,
        slug: typeof product.slug === "object" ? product.slug.current : product.slug, // Check if it's an object and use .current
      }))
    );
  };
  
  const handleProductClick = (slug: string) => {
    router.push(`/products/${slug}`); // Navigate using slug
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* Search Icon Button with Hover Effect */}
      <button
        className="text-xs flex justify-center items-center cursor-pointer p-2 rounded-full transition-all duration-300 hover:bg-gray-200"
        onClick={() => setShowInput(!showInput)}
      >
        <CiSearch className="text-3xl" />
      </button>

      {/* Show input inside the search icon when clicked */}
      {showInput && (
        <div className="absolute top-0 left-0 flex justify-center items-center w-full z-50">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-80 h-10 px-4 py-2 mt-2 outline-none rounded-md border border-gray-300 shadow-md transition-all duration-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Display search results */}
      {filteredProducts.length > 0 && (
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-xs md:max-w-md bg-white shadow-lg max-h-60 overflow-y-auto rounded-md border z-50">
          <ul>
            {filteredProducts.map((product, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-200 flex items-center gap-2 cursor-pointer transition-all"
                onClick={() => handleProductClick(product.slug)} // Use slug for the route
              >
                {product.imageUrl ? (
                  <div className="relative w-10 h-10">
                    <Image
                      src={product.imageUrl ? urlFor(product.imageUrl).url() : '/default-image.jpg'} // Add fallback here
                      alt={product.title || "Product Image"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-gray-200 rounded"></div> // Default placeholder image
                )}
                <span className="text-sm">{product.title}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
