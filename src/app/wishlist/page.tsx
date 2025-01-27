

"use client";

import Link from "next/link";
import IProduct from "@/types/page";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import Navbar from "../Components/navbar2";
import Footer from "../Components/footer";

// Helper function to get wishlist items from localStorage
const getWishlistFromLocalStorage = (): IProduct[] => {
  if (typeof window !== "undefined") {
    const wishlistItems = localStorage.getItem("wishlist");
    return wishlistItems ? JSON.parse(wishlistItems) : [];
  }
  return [];
};

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState<IProduct[]>([]);

  // Load wishlist items from localStorage when component mounts
  useEffect(() => {
    setWishlistItems(getWishlistFromLocalStorage());
  }, []);

  // Update localStorage whenever wishlistItems state changes
  const updateLocalStorage = (updatedWishlist: IProduct[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  const handleRemove = (title: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This item will be removed from your wishlist.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = wishlistItems.filter((item) => item.title !== title);
        setWishlistItems(updatedWishlist); // Update state immediately
        updateLocalStorage(updatedWishlist); // Update localStorage
        Swal.fire("Removed!", "Item has been removed from your wishlist.", "success");
      }
    });
  };

  return (
    <div>
      <Navbar  />
      <div className="p-10 bg-gradient-to-b from-blue-100 to-purple-100 min-h-screen">
        <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">Your Wishlist</h1>

        <div className="flex flex-col items-center space-y-6">
          {wishlistItems.length > 0 ? (
            wishlistItems.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl w-full max-w-sm"
              >
                <div className="flex flex-col items-center">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      className="w-32 h-32 object-cover rounded-full mb-4"
                      alt="image"
                      width={500}
                      height={500}
                    />
                  )}
                  <h2 className="text-xl font-bold text-gray-800 text-center mb-2">{item.title}</h2>
                  <p className="text-gray-600 mb-4">Price: ${item.discountPrice}</p>
                </div>
                <button
                  onClick={() => handleRemove(item.title)}
                  className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-96">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-800">Your wishlist is empty</h1>
              <p>
                <Link
                  href="/Shop"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg text-white font-bold text-xl shadow-lg hover:shadow-xl transition duration-300"
                >
                  Continue Shopping
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishlistPage;
