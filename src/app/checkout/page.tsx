

"use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import IProduct from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from "react-icons/cg";
// import { toast } from "react-toastify";
// import Navbar from "../Components/navbar2";
// import Footer from "../Components/footer";
// import { getCartItems } from "../functions/action";
// // export const getCartItems = (): IProduct[] => {
// //   return JSON.parse(localStorage.getItem("cart") || "[]");
// // };

// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     address: false,
//     city: false,
//     zipCode: false,
//     phone: false,
//     email: false,
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       address: !formValues.address,
//       city: !formValues.city,
//       zipCode: !formValues.zipCode,
//       phone: !formValues.phone,
//       email: !formValues.email,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   // const handlePlaceOrder = () => {
//   //   if (validateForm()) {
//   //     localStorage.removeItem("appliedDiscount");
//   //      toast.success("Order placed successfully!");
//   //   } else {
//   //       toast.error("Please fill in all the fields.");
//   //   }
//   // };
//   return (
//     <div className={`min-h-screen bg-gray-200 `}>
//       <Navbar/>
//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
//         <nav className="flex items-center gap-2 py-4 text-md font-semibold text-gray-500">
//           <Link href="/Cart" className="hover:text-gray-700">Cart</Link>
//           <CgChevronRight className="w-4 h-4" />
//           <span>Checkout</span>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Order Summary */}
//         <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
//           <h2 className="text-lg font-semibold border-b pb-4">Order Summary</h2>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item.slug}
//                 className="flex items-center gap-4 py-3 border-b last:border-none"
//               >
//                 <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
//                   {item.image && (
//                     <Image
//                       src={urlFor(item.image).url()}
//                       alt={item.title}
//                       width={64}
//                       height={64}
//                       className="object-cover w-full h-full"
//                     />
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-sm font-medium text-gray-700">{item.title}</h3>
//                   <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-800">
//                   ${item.price * item.quantity}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-gray-500">Your cart is empty.</p>
//           )}
//           <div className="text-right space-y-2">
//             <p className="text-md font-bold text-gray-700">
//               Subtotal: <span className="font-medium text-sm">${subtotal}</span>
//             </p>
//             {/* <p className="text-sm">
//               Discount: <span className="font-medium">-${discount}</span>
//             </p> */}
//             <p className="text-lg font-semibold">
//               Total: ${total.toFixed(2)}
//             </p>
//           </div>
//         </div>

//         {/* Billing Form */}
//         <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
//           <h2 className="text-lg font-semibold border-b pb-4">Billing Information</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
//               <input
//                 id="firstName"
//                 placeholder="Enter your first name"
//                 value={formValues.firstName}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.firstName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.firstName && (
//                 <p className="text-sm text-red-500 mt-1">First name is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
//               <input
//                 id="lastName"
//                 placeholder="Enter your last name"
//                 value={formValues.lastName}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.lastName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.lastName && (
//                 <p className="text-sm text-red-500 mt-1">Last name is required.</p>
//               )}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
//             <input
//               id="address"
//               placeholder="Enter your address"
//               value={formValues.address}
//               onChange={handleInputChange}
//               className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                 formErrors.address ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//               }`}
//             />
//             {formErrors.address && (
//               <p className="text-sm text-red-500 mt-1">Address is required.</p>
//             )}
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="city" className="block text-sm font-medium text-gray-600">City</label>
//               <input
//                 id="city"
//                 placeholder="Enter your city"
//                 value={formValues.city}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.city ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.city && (
//                 <p className="text-sm text-red-500 mt-1">City is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="zipCode" className="block text-sm font-medium text-gray-600">Zip Code</label>
//               <input
//                 id="zipCode"
//                 placeholder="Enter your zip code"
//                 value={formValues.zipCode}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.zipCode ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.zipCode && (
//                 <p className="text-sm text-red-500 mt-1">Zip code is required.</p>
//               )}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
//               <input
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.phone && (
//                 <p className="text-sm text-red-500 mt-1">Phone number is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//               <input
//                 id="email"
//                 placeholder="Enter your email address"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                     formErrors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//                 />
//             {formErrors.email && (
//                 <p className="text-sm text-red-500">Email is required.</p>
//               )}
//             </div>
//              <button
//               className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
//               // onClick={handlePlaceOrder}
//             >
//               Place Order
//             </button> 
           
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }







// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import IProduct from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from "react-icons/cg";

// import Navbar from "../Components/navbar2";
// import Footer from "../Components/footer";
// import { getCartItems } from "../functions/action";
// // export const getCartItems = (): IProduct[] => {
// //   return JSON.parse(localStorage.getItem("cart") || "[]");
// // };

// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [formValues, setFormValues] = useState({
//     firstName: "",
//     lastName: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     email: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     firstName: false,
//     lastName: false,
//     address: false,
//     city: false,
//     zipCode: false,
//     phone: false,
//     email: false,
//   });

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) {
//       setDiscount(Number(appliedDiscount));
//     }
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({
//       ...formValues,
//       [e.target.id]: e.target.value,
//     });
//   };

//   const validateForm = () => {
//     const errors = {
//       firstName: !formValues.firstName,
//       lastName: !formValues.lastName,
//       address: !formValues.address,
//       city: !formValues.city,
//       zipCode: !formValues.zipCode,
//       phone: !formValues.phone,
//       email: !formValues.email,
//     };
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handleCheckout = async (products: any) => {
//     const response = await fetch("/api/payment", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json', 
//         },
//         body: JSON.stringify({ products }), 
//     });

//     const data = await response.json();
//           window.location.href = data.url
//           console.log(data);
//     };
//   return (
//     <div className={`min-h-screen bg-gray-200 `}>
//       <Navbar/>
//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
//         <nav className="flex items-center gap-2 py-4 text-md font-semibold text-gray-500">
//           <Link href="/Cart" className="hover:text-gray-700">Cart</Link>
//           <CgChevronRight className="w-4 h-4" />
//           <span>Checkout</span>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Order Summary */}
//         <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
//           <h2 className="text-lg font-semibold border-b pb-4">Order Summary</h2>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div
//                 key={item.slug}
//                 className="flex items-center gap-4 py-3 border-b last:border-none"
//               >
//                 <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
//                   {item.image && (
//                     <Image
//                       src={urlFor(item.image).url()}
//                       alt={item.title}
//                       width={64}
//                       height={64}
//                       className="object-cover w-full h-full"
//                     />
//                   )}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-sm font-medium text-gray-700">{item.title}</h3>
//                   <p className="text-xs text-gray-500">Quantity: {item.quantity}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-800">
//                   ${item.price * item.quantity}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-gray-500">Your cart is empty.</p>
//           )}
//           <div className="text-right space-y-2">
//             <p className="text-md font-bold text-gray-700">
//               Subtotal: <span className="font-medium text-sm">${subtotal}</span>
//             </p>
//             {/* <p className="text-sm">
//               Discount: <span className="font-medium">-${discount}</span>
//             </p> */}
//             <p className="text-lg font-semibold">
//               Total: ${total.toFixed(2)}
//             </p>
//           </div>
//         </div>

//         {/* Billing Form */}
//         <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
//           <h2 className="text-lg font-semibold border-b pb-4">Billing Information</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">First Name</label>
//               <input
//                 id="firstName"
//                 placeholder="Enter your first name"
//                 value={formValues.firstName}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.firstName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.firstName && (
//                 <p className="text-sm text-red-500 mt-1">First name is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-medium text-gray-600">Last Name</label>
//               <input
//                 id="lastName"
//                 placeholder="Enter your last name"
//                 value={formValues.lastName}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.lastName ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.lastName && (
//                 <p className="text-sm text-red-500 mt-1">Last name is required.</p>
//               )}
//             </div>
//           </div>
//           <div>
//             <label htmlFor="address" className="block text-sm font-medium text-gray-600">Address</label>
//             <input
//               id="address"
//               placeholder="Enter your address"
//               value={formValues.address}
//               onChange={handleInputChange}
//               className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                 formErrors.address ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//               }`}
//             />
//             {formErrors.address && (
//               <p className="text-sm text-red-500 mt-1">Address is required.</p>
//             )}
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="city" className="block text-sm font-medium text-gray-600">City</label>
//               <input
//                 id="city"
//                 placeholder="Enter your city"
//                 value={formValues.city}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.city ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.city && (
//                 <p className="text-sm text-red-500 mt-1">City is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="zipCode" className="block text-sm font-medium text-gray-600">Zip Code</label>
//               <input
//                 id="zipCode"
//                 placeholder="Enter your zip code"
//                 value={formValues.zipCode}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.zipCode ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.zipCode && (
//                 <p className="text-sm text-red-500 mt-1">Zip code is required.</p>
//               )}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
//               <input
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.phone && (
//                 <p className="text-sm text-red-500 mt-1">Phone number is required.</p>
//               )}
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//               <input
//                 id="email"
//                 placeholder="Enter your email address"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                     formErrors.phone ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
//                 }`}
//                 />
//             {formErrors.email && (
//                 <p className="text-sm text-red-500">Email is required.</p>
//               )}
//             </div>
//              <button
//               className="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white"
//               onClick={() => handleCheckout(cartItems)}
//             >
//               Place Order
//             </button> 
           
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import IProduct from "@/types/page";
import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";

import Navbar from "../Components/navbar2";
import Footer from "../Components/footer";
import { getCartItems } from "../functions/action";

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    address: false,
    city: false,
    zipCode: false,
    phone: false,
    email: false,
  });

  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const total = Math.max(subtotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      address: !formValues.address,
      city: !formValues.city,
      zipCode: !formValues.zipCode,
      phone: !formValues.phone,
      email: !formValues.email,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handleCheckout = async (products: IProduct[]) => {
    try {
      setLoading(true);
      setErrorMessage("");
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products }),
      });

      const data = await response.json();

      if (response.ok) {
        // Optionally, clear cart here if checkout is successful
        window.location.href = data.url;
      } else {
        setErrorMessage(data.error || "Payment initiation failed.");
        setLoading(false);
      }
    } catch (error: any) {
      console.error("An unexpected error occurred:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
      setLoading(false);
    }
  };

  const handlePlaceOrder = () => {
    if (!cartItems.length) {
      setErrorMessage("Your cart is empty.");
      return;
    }
    if (validateForm()) {
      handleCheckout(cartItems);
    } else {
      setErrorMessage("Please fill in all required fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <nav className="flex items-center gap-2 py-4 text-md font-semibold text-gray-500">
          <Link href="/Cart" className="hover:text-gray-700">
            Cart
          </Link>
          <CgChevronRight className="w-4 h-4" />
          <span>Checkout</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-semibold border-b pb-4">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.slug}
                className="flex items-center gap-4 py-3 border-b last:border-none"
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-700">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
          <div className="text-right space-y-2">
            <p className="text-md font-bold text-gray-700">
              Subtotal:{" "}
              <span className="font-medium text-sm">${subtotal.toFixed(2)}</span>
            </p>
            <p className="text-lg font-semibold">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Billing Form */}
        <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
          <h2 className="text-lg font-semibold border-b pb-4">
            Billing Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                id="firstName"
                placeholder="Enter your first name"
                value={formValues.firstName}
                onChange={handleInputChange}
                className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.firstName
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formErrors.firstName && (
                <p className="text-sm text-red-500 mt-1">
                  First name is required.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                id="lastName"
                placeholder="Enter your last name"
                value={formValues.lastName}
                onChange={handleInputChange}
                className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.lastName
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formErrors.lastName && (
                <p className="text-sm text-red-500 mt-1">
                  Last name is required.
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              id="address"
              placeholder="Enter your address"
              value={formValues.address}
              onChange={handleInputChange}
              className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                formErrors.address
                  ? "border-red-500 focus:ring-red-200"
                  : "border-gray-300 focus:ring-blue-200"
              }`}
            />
            {formErrors.address && (
              <p className="text-sm text-red-500 mt-1">
                Address is required.
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                id="city"
                placeholder="Enter your city"
                value={formValues.city}
                onChange={handleInputChange}
                className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.city
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formErrors.city && (
                <p className="text-sm text-red-500 mt-1">
                  City is required.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-600"
              >
                Zip Code
              </label>
              <input
                id="zipCode"
                placeholder="Enter your zip code"
                value={formValues.zipCode}
                onChange={handleInputChange}
                className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.zipCode
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formErrors.zipCode && (
                <p className="text-sm text-red-500 mt-1">
                  Zip code is required.
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-600"
              >
                Phone
              </label>
              <input
                id="phone"
                placeholder="Enter your phone number"
                value={formValues.phone}
                onChange={handleInputChange}
                className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.phone
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formErrors.phone && (
                <p className="text-sm text-red-500 mt-1">
                  Phone number is required.
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email address"
                value={formValues.email}
                onChange={handleInputChange}
                className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.email
                    ? "border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:ring-blue-200"
                }`}
              />
              {formErrors.email && (
                <p className="text-sm text-red-500 mt-1">
                  Email is required.
                </p>
              )}
            </div>
          </div>
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
          <button
            className={`w-full h-12 ${
              loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-700"
            } text-white rounded-lg`}
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? "Processing..." : "Place Order"}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
