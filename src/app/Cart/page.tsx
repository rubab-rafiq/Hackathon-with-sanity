

// "use client";

// import Link from "next/link";
// import IProduct from "@/types/page";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2";
// import Navbar from "../Components/navbar2";
// import Footer from "../Components/footer";

// // Helper function to get cart items from localStorage
// const getCartFromLocalStorage = (): IProduct[] => {
//   if (typeof window !== "undefined") {
//     const cartItems = localStorage.getItem("cart");
//     return cartItems ? JSON.parse(cartItems) : [];
//   }
//   return [];
// };

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);

//   // Load cart items from localStorage when component mounts
//   useEffect(() => {
//     setCartItems(getCartFromLocalStorage());
//   }, []);

//   // Update localStorage whenever cartItems state changes
//   const updateLocalStorage = (updatedCart: IProduct[]) => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };

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
//         setCartItems(updatedCart); // Immediately update state
//         updateLocalStorage(updatedCart); // Update localStorage
//         Swal.fire("Removed!", "Item has been removed from your cart.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (title: string, quantity: number) => {
//     const updatedCart = cartItems
//       .map((item) =>
//         item.title === title ? { ...item, quantity } : item
//       )
//       .filter((item) => item.quantity > 0);

//     setCartItems(updatedCart); // Immediately update state
//     updateLocalStorage(updatedCart); // Update localStorage
//   };

//   const handleIncrement = (title: string) => {
//     const product = cartItems.find((item) => item.title === title);
//     if (product) {
//       handleQuantityChange(title, product.quantity + 1);
//     }
//   };

//   const handleDecrement = (title: string) => {
//     const product = cartItems.find((item) => item.title === title);
//     if (product && product.quantity > 1) {
//       handleQuantityChange(title, product.quantity - 1);
//     } else {
//       handleRemove(title); // Remove the item if quantity reaches 0
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
//         updateLocalStorage([]); // Clear the cart from localStorage
//       }
//     });
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
//       <Navbar />
//       <div className="p-6">
//         <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Shopping Cart</h1>

//         <div className="space-y-6">
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
//               >
//                 <div className="flex flex-col sm:flex-row items-center">
//                   {item.image && (
//                     <Image
//                       src={urlFor(item.image).url()}
//                       className="w-32 h-32 object-cover rounded-md border-2 border-gray-300"
//                       alt="image"
//                       width={500}
//                       height={500}
//                     />
//                   )}
//                   <div className="sm:ml-4 mt-4 sm:mt-0">
//                     <h2 className="text-lg font-bold text-gray-700 text-center sm:text-left">{item.title}</h2>
//                     <p className="text-gray-500 text-center sm:text-left">Price: ${item.discountPrice}</p>
//                     <div className="flex items-center mt-3 gap-2 justify-center sm:justify-start">
//                       <button
//                         onClick={() => handleDecrement(item.title)}
//                         className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                       >
//                         -
//                       </button>
//                       <span className="font-bold text-gray-700">{item.quantity}</span>
//                       <button
//                         onClick={() => handleIncrement(item.title)}
//                         className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(item.title)}
//                   className="mt-4 sm:mt-0 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div className="flex flex-col items-center justify-center h-96">
//               <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
//               <Link
//                 href="/Shop"
//                 className="mt-4 bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
//               >
//                 Continue Shopping
//               </Link>
//             </div>
//           )}
//         </div>

//         {cartItems.length > 0 && (
//           <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-bold">Total:</h2>
//               <p className="text-xl font-extrabold text-gray-800">
//                 ${calculateTotal().toFixed(2)}
//               </p>
//             </div>
//             <button
//               onClick={handleProceed}
//               className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow hover:from-green-500 hover:to-green-700"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CartPage;








// "use client";

// import Link from "next/link";
// import IProduct from "@/types/page";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2";
// import Navbar from "../Components/navbar2";
// import Footer from "../Components/footer";

// // Helper function to get cart items from localStorage
// const getCartFromLocalStorage = (): IProduct[] => {
//   if (typeof window !== "undefined") {
//     const cartItems = localStorage.getItem("cart");
//     return cartItems ? JSON.parse(cartItems) : [];
//   }
//   return [];
// };

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);

//   // Load cart items from localStorage when component mounts
//   useEffect(() => {
//     setCartItems(getCartFromLocalStorage());
//   }, []);

//   // Update localStorage whenever cartItems state changes
//   const updateLocalStorage = (updatedCart: IProduct[]) => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };

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
//         setCartItems(updatedCart); // Immediately update state
//         updateLocalStorage(updatedCart); // Update localStorage
//         Swal.fire("Removed!", "Item has been removed from your cart.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (title: string, quantity: number) => {
//     const updatedCart = cartItems
//       .map((item) =>
//         item.title === title ? { ...item, quantity } : item
//       )
//       .filter((item) => item.quantity > 0);

//     setCartItems(updatedCart); // Immediately update state
//     updateLocalStorage(updatedCart); // Update localStorage
//   };

//   const handleIncrement = (title: string) => {
//     const product = cartItems.find((item) => item.title === title);
//     if (product) {
//       handleQuantityChange(title, product.quantity + 1);
//     }
//   };

//   const handleDecrement = (title: string) => {
//     const product = cartItems.find((item) => item.title === title);
//     if (product && product.quantity > 1) {
//       handleQuantityChange(title, product.quantity - 1);
//     } else {
//       handleRemove(title); // Remove the item if quantity reaches 0
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
//         updateLocalStorage([]); // Clear the cart from localStorage
//       }
//     });
//   };

//   return (
//     <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
//       <Navbar />
//       <div className="p-6">
//         <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Shopping Cart</h1>

//         <div className="space-y-6">
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item.title}
//                 className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
//               >
//                 <div className="flex flex-col sm:flex-row items-center">
//                   {item.image && (
//                     <Image
//                       src={urlFor(item.image).url()}
//                       className="w-32 h-32 object-cover rounded-md border-2 border-gray-300"
//                       alt="image"
//                       width={500}
//                       height={500}
//                     />
//                   )}
//                   <div className="sm:ml-4 mt-4 sm:mt-0">
//                     <h2 className="text-lg font-bold text-gray-700 text-center sm:text-left">{item.title}</h2>
//                     <p className="text-gray-500 text-center sm:text-left">Price: ${item.discountPrice}</p>
//                     <div className="flex items-center mt-3 gap-2 justify-center sm:justify-start">
//                       <button
//                         onClick={() => handleDecrement(item.title)}
//                         className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
//                       >
//                         -
//                       </button>
//                       <span className="font-bold text-gray-700">{item.quantity}</span>
//                       <button
//                         onClick={() => handleIncrement(item.title)}
//                         className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
//                       >
//                         +
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(item.title)}
//                   className="mt-4 sm:mt-0 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))
//           ) : (
//             <div className="flex flex-col items-center justify-center h-96">
//               <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
//               <Link
//                 href="/Shop"
//                 className="mt-4 bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
//               >
//                 Continue Shopping
//               </Link>
//             </div>
//           )}
//         </div>

//         {cartItems.length > 0 && (
//           <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
//             <div className="flex justify-between items-center">
//               <h2 className="text-2xl font-bold">Total:</h2>
//               <p className="text-xl font-extrabold text-gray-800">
//                 ${calculateTotal().toFixed(2)}
//               </p>
//             </div>
//             <button
//               onClick={handleProceed}
//               className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow hover:from-green-500 hover:to-green-700"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default CartPage;










'use client';

import Link from "next/link";
import IProduct from "@/types/page";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import Navbar from "../Components/navbar2";
import Footer from "../Components/footer";
import { useRouter } from "next/navigation";

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
        //  updateLocalStorage(updatedCart); // Update localStorage
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
  const router = useRouter();
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
       router.push("/checkout");
        setCartItems([]); // Clear the cart after order is processed
        // updateLocalStorage([]); // Clear the cart from localStorage
      }
    });
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Shopping Cart</h1>

        <div className="space-y-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              >
                <div className="flex flex-col sm:flex-row items-center">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      className="w-32 h-32 object-cover rounded-md border-2 border-gray-300"
                      alt="image"
                      width={500}
                      height={500}
                    />
                  )}
                  <div className="sm:ml-4 mt-4 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-700 text-center sm:text-left">{item.title}</h2>
                    <p className="text-gray-500 text-center sm:text-left">Price: ${item.discountPrice}</p>
                    <div className="flex items-center mt-3 gap-2 justify-center sm:justify-start">
                      <button
                        onClick={() => handleDecrement(item.title)}
                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        -
                      </button>
                      <span className="font-bold text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.title)}
                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(item.title)}
                  className="mt-4 sm:mt-0 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-96">
              <h2 className="text-2xl font-bold text-gray-700">Your cart is empty</h2>
              <Link
                href="/Shop"
                className="mt-4 bg-blue-500 text-white px-6 py-3 rounded shadow hover:bg-blue-600"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Total:</h2>
              <p className="text-xl font-extrabold text-gray-800">
                ${calculateTotal().toFixed(2)}
              </p>
            </div>
            <button
              onClick={handleProceed}
              className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow hover:from-green-500 hover:to-green-700"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;







// 'use client';

// import Link from "next/link";
// import IProduct from "@/types/page";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Swal from "sweetalert2";
// import Navbar from "../Components/navbar2";
// import Footer from "../Components/footer";
// import { useRouter } from "next/navigation";

// // Helper function to get cart items from localStorage
// const getCartFromLocalStorage = (): IProduct[] => {
//   if (typeof window !== "undefined") {
//     const cartItems = localStorage.getItem("cart");
//     return cartItems ? JSON.parse(cartItems) : [];
//   }
//   return [];
// };

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);

//   // Load cart items from localStorage when component mounts
//   useEffect(() => {
//     setCartItems(getCartFromLocalStorage());
//   }, []);

//   // Update localStorage whenever cartItems state changes
//   const updateLocalStorage = (updatedCart: IProduct[]) => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//     }
//   };

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
//         setCartItems(updatedCart); // Immediately update state
//         //  updateLocalStorage(updatedCart); // Update localStorage
//         Swal.fire("Removed!", "Item has been removed from your cart.", "success");
//       }
//     });
//   };

//   const handleQuantityChange = (title: string, quantity: number) => {
//     const updatedCart = cartItems
//       .map((item) =>
//         item.title === title ? { ...item, quantity } : item
//       )
//       .filter((item) => item.quantity > 0);

//     setCartItems(updatedCart); // Immediately update state
//     updateLocalStorage(updatedCart); // Update localStorage
//   };

//   const handleIncrement = (title: string) => {
//     const product = cartItems.find((item) => item.title === title);
//     if (product) {
//       handleQuantityChange(title, product.quantity + 1);
//     }
//   };

//   const handleDecrement = (title: string) => {
//     const product = cartItems.find((item) => item.title === title);
//     if (product && product.quantity > 1) {
//       handleQuantityChange(title, product.quantity - 1);
//     } else {
//       handleRemove(title); // Remove the item if quantity reaches 0
//     }
//   };

//   const calculateTotal = () => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * (item.quantity || 1),
//       0
//     );
//   };
//   const router = useRouter();
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
//        router.push("/checkout");
//         setCartItems([]); // Clear the cart after order is processed
//         // updateLocalStorage([]); // Clear the cart from localStorage
//       }
//     });
//   };
// return (
//   <div className="bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 min-h-screen">
//     <Navbar />
//     <div className="p-6">
//       <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
//         Shopping Cart
//       </h1>

//       <div className="space-y-6">
//         {cartItems.length > 0 ? (
//           cartItems.map((item) => (
//             <div
//               key={item.title}
//               className="flex flex-col sm:flex-row items-center sm:justify-between bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
//             >
//               <div className="flex flex-col sm:flex-row items-center">
//                 {item.image && (
//                   <Image
//                     src={urlFor(item.image).url()}
//                     className="w-32 h-32 object-cover rounded-md border-2 border-gray-300"
//                     alt="image"
//                     width={500}
//                     height={500}
//                   />
//                 )}
//                 <div className="sm:ml-4 mt-4 sm:mt-0">
//                   <h2 className="text-lg font-bold text-gray-700 text-center sm:text-left">
//                     {item.title}
//                   </h2>
//                   <p className="text-gray-500 text-center sm:text-left">
//                     Price: ${item.discountPrice}
//                   </p>
//                   <div className="flex items-center mt-3 gap-2 justify-center sm:justify-start">
//                     <button
//                       onClick={() => handleDecrement(item.title)}
//                       className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all duration-200"
//                     >
//                       -
//                     </button>
//                     <span className="font-bold text-gray-700">{item.quantity}</span>
//                     <button
//                       onClick={() => handleIncrement(item.title)}
//                       className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-all duration-200"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <button
//                 onClick={() => handleRemove(item.title)}
//                 className="mt-4 sm:mt-0 px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-all duration-200"
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         ) : (
//           <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-r from-purple-50 via-pink-100 to-red-50 rounded-lg shadow-lg p-10">
//             <h2 className="text-2xl font-bold text-gray-700">
//               Your cart is empty
//             </h2>
//             <Link
//               href="/Shop"
//               className="mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded shadow hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
//             >
//               Continue Shopping
//             </Link>
//           </div>
//         )}
//       </div>

//       {cartItems.length > 0 && (
//         <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
//           <div className="flex justify-between items-center">
//             <h2 className="text-2xl font-bold">Total:</h2>
//             <p className="text-xl font-extrabold text-gray-800">
//               ${calculateTotal().toFixed(2)}
//             </p>
//           </div>
//           <button
//             onClick={handleProceed}
//             className="mt-4 w-full px-4 py-3 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow hover:from-green-500 hover:to-green-700 transition-all duration-300"
//           >
//             Proceed to Checkout
//           </button>
//         </div>
//       )}
//     </div>
//     <Footer />
//   </div>
// );

  
  
// };