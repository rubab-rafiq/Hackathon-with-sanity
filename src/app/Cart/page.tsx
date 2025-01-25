

// 'use client';
// import Image from 'next/image';
// import { IProduct } from '@/types/page';
// import { useState, useEffect } from 'react';
// import { removeFromCart } from '../functions/page';

// export default function Cart() {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);

//   useEffect(() => {
//     // Fetch cart items from localStorage
//     const cart = JSON.parse(localStorage.getItem('cart') || '[]');
//     setCartItems(cart);
//   }, []);

//   // Function to handle item removal
//   const handleRemove = (slug: string) => {
//     console.log("Removing item with slug:", slug);
//     removeFromCart(slug); // Call the remove function
  
//     const updatedCart = JSON.parse(localStorage.getItem('cart') || '[]'); // Fetch updated cart
//     console.log("Cart after removing item:", updatedCart);
//     setCartItems(updatedCart); // Update state
//   };

//   return (
//     <>
//       {cartItems.map((item, index) => (
//         <div
//           key={item.slug ? item.slug : `${item.slug}-${index}`} // Ensure key is unique
//           className="cart-item border p-4 m-2 flex gap-4 items-center"
//         >
//           <Image
//             src={item.image}
//             alt={item.title}
//             width={100}
//             height={100}
//             objectFit="cover"
//             className="rounded"
//           />
//           <div>
//             <h3 className="text-lg font-semibold">{item.title}</h3>
//             <p>Color: {item.colors?.join(', ')}</p>
//             <p>Size: {item.sizes?.join(', ')}</p>
//             <p>Quantity: {item.quantity}</p>
//             <p className="text-green-600 font-bold">
//               ${item.discountPrice ? item.discountPrice.toFixed(2) : '0.00'}
//             </p>
//           </div>
//           {/* Remove Button */}
//           <button
//             onClick={() => handleRemove(item.slug)}
//             className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
//           >
//             Remove
//           </button>
//         </div>
//       ))}
//     </>
//   );
// }

//     "use client";

// import { IProduct } from "@/types/page";
// import React, { useEffect, useState } from "react";
// import {
//   getCartItems,
//   removeFromCart,
//   updateCartQuantity,
// } from "@/app/functions/page";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2"; // Ensure you import Swal

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);

//   useEffect(() => {
//     const loadedCartItems = getCartItems().map((item: IProduct) => ({
//       ...item,
//       quantity: item.quantity || 1, // Ensure quantity is set to 1 if missing
//     }));
//     setCartItems(loadedCartItems);
//   }, []);
//   const handleRemove = (title: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to undo this action!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         removeFromCart(title); // Update local storage
//         setCartItems(getCartItems()); // Update state
//         Swal.fire("Removed!", "Item has been removed from your cart.", "success");
//       }
//     });
//   };
  
  

// "use client";

// import { IProduct } from "@/types/page";
// import React, { useEffect, useState } from "react";
// import {
  
//   getCartItems,
  
//   updateCartQuantity,
// } from "@/app/functions/page";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2";

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);

//   useEffect(() => {
//     // Ensure all cart items have a quantity set
//     const loadedCartItems = getCartItems().map((item: IProduct) => ({
//       ...item,
//       quantity: item.quantity || 1, // Set quantity to 1 if it's missing
//     }));
//     setCartItems(loadedCartItems);
//   }, []);

//   const handleRemove = (title: string) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to undo this action!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#d33",
//       cancelButtonColor: "#3085d6",
//       confirmButtonText: "Yes, remove it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const updatedCart = cartItems.filter((item) => item.title !== title);
//         setCartItems(updatedCart); // Update state to remove item
//         Swal.fire("Removed!", "Item has been removed from your cart.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (title: string, quantity: number) => {
//     const updatedCart = cartItems.map((item) =>
//       item.title === title ? { ...item, quantity } : item
//     ).filter((item) => item.quantity > 0); // Remove item if quantity is 0
//     setCartItems(updatedCart);
//   };

//   const handleIncrement = (title: string) => {
//     const product = cartItems.find((item) => item.title === title);
//     if (product) {
//       handleQuantityChange(title, product.quantity + 1); // Increase quantity
//     }
//   };

//   const handleDecrement = (title: string) => {
//     const product = cartItems.find((item) => item.title === title);
//     if (product && product.quantity > 1) {
//       handleQuantityChange(title, product.quantity - 1); // Decrease quantity
//     } else {
//       handleRemove(title); // Remove item if quantity reaches 0
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * (item.quantity || 1),
//       0
//     );
//   };

//   const handleProceed = () => {
//     Swal.fire({
//       title: "Processing your order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Proceed",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         Swal.fire("Success!", "Your order has been successfully processed!", "success");
//         setCartItems([]); // Clear the cart after order is processed
//       }
//     });
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

//       <div className="space-y-6">
//         {cartItems.length > 0 ? (
//           cartItems.map((item) => (
//             <div
        
//               key={item.title}
//               className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
//             >
//               <div className="flex items-center">
//                 {item.image && (
//                   <Image
//                     src={urlFor(item.image).url()}
//                     className="w-16 h-16 object-cover rounded-lg"
//                     alt="image"
//                     width={500}
//                     height={500}
//                   />
//                 )}
//                 <div className="ml-4">
//                   <h2 className="text-lg font-semibold">{item.title}</h2>
//                   <p className="text-gray-500">Price: ${item.price}</p>
//                   <div className="flex items-center mt-2">
//                     <button
//                       onClick={() => handleDecrement(item.title)}
//                       className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
//                     >
//                       -
//                     </button>
//                     <span className="mx-2">{item.quantity}</span>
//                     <button
//                       onClick={() => handleIncrement(item.title)}
//                       className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <button
//                   onClick={() => handleRemove(item.title)}
//                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                 >
//                   Remove
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-600 text-center">Your cart is empty.</p>
//         )}
//       </div>

//       {cartItems.length > 0 && (
//         <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
//           <div className="flex justify-between items-center">
//             <h2 className="text-xl font-semibold">Total:</h2>
//             <p className="text-xl font-bold text-gray-800">
//               ${calculateTotal().toFixed(2)}
//             </p>
//           </div>
//           <button
//             onClick={handleProceed}
//             className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//           >
//             Proceed
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;
"use client";

import { IProduct } from "@/types/page";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import Navbar from "../Components/navbar2";

// Helper function to get cart items from localStorage
const getCartFromLocalStorage = (): IProduct[] => {
  if (typeof window !== "undefined") {
    const cartItems = localStorage.getItem("cart");
    return cartItems ? JSON.parse(cartItems) : [];
  }
  return [];
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  // Load cart items from localStorage when component mounts
  useEffect(() => {
    setCartItems(getCartFromLocalStorage());
  }, []);

  // Update localStorage whenever cartItems state changes
  const updateLocalStorage = (updatedCart: IProduct[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleRemove = (title: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCart = cartItems.filter((item) => item.title !== title);
        setCartItems(updatedCart); // Immediately update state
        updateLocalStorage(updatedCart); // Update localStorage
        Swal.fire("Removed!", "Item has been removed from your cart.", "success");
      }
    });
  };

  const handleQuantityChange = (title: string, quantity: number) => {
    const updatedCart = cartItems
      .map((item) =>
        item.title === title ? { ...item, quantity } : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart); // Immediately update state
    updateLocalStorage(updatedCart); // Update localStorage
  };

  const handleIncrement = (title: string) => {
    const product = cartItems.find((item) => item.title === title);
    if (product) {
      handleQuantityChange(title, product.quantity + 1);
    }
  };

  const handleDecrement = (title: string) => {
    const product = cartItems.find((item) => item.title === title);
    if (product && product.quantity > 1) {
      handleQuantityChange(title, product.quantity - 1);
    } else {
      handleRemove(title); // Remove the item if quantity reaches 0
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your order has been successfully processed!", "success");
        setCartItems([]); // Clear the cart after order is processed
        updateLocalStorage([]); // Clear the cart from localStorage
      }
    });
  };

  return (
    
    <div className="p-6 bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item.title)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrement(item.title)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item.title)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
