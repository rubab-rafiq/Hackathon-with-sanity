

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
 import IProduct from "@/types/page";
 import { urlFor } from "@/sanity/lib/image";
import { CgChevronRight } from "react-icons/cg";
import clerk from "@clerk/nextjs";
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
                // key={item.slug}
                key={typeof item.slug === 'object' ? item.slug.current : item.slug} 
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
















































// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";

// import Swal from "sweetalert2";

// import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from "react-icons/cg";
// import IProduct from "@/types/page";
// import { getCartItems } from "../functions/action";
// import { client } from "@/sanity/lib/client";

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
//   const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     setCartItems(getCartItems());
//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) setDiscount(Number(appliedDiscount));
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * (item.quantity || 1),
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({ ...formValues, [e.target.id]: e.target.value });
//   };

//   const validateForm = () => {
//     const errors: Record<string, boolean> = {};
//     Object.keys(formValues).forEach((key) => {
//       errors[key] = !formValues[key as keyof typeof formValues];
//     });
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handlePlaceOrder = async () => {
//     if (!validateForm()) {
//       Swal.fire("Error!", "Please fill in all required fields.", "error");
//       return;
//     }
//     Swal.fire({
//       title: "Processing your order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonText: "Proceed",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         localStorage.removeItem("appliedDiscount");
//         Swal.fire("Success!", "Your order has been successfully processed!", "success");
        
//       } else{
//         Swal.fire("Cancelled!", "Your order has not been processed.", "error");
//       }
//     });

//     const orderData = {
//       _type: "order",
//       firstName: formValues.firstName,
//       lastName: formValues.lastName,
//       address: formValues.address,
//       city: formValues.city,
//       zipCode: formValues.zipCode,
//       phone: formValues.phone,
//       email: formValues.email,
//       cartItems: cartItems.map((item)=> ({
//         type: "reference",
//         _ref: typeof item.slug === 'object' ? item.slug.current : item.slug, // Use slug instead of title
//       })
//   ),
//   total: total,
//   discout: discount,
//   orderDate: new Date().toISOString(),
//   status: "pending",
//     };

//     try {
//       await client.create(orderData);
//       localStorage.removeItem("appliedDiscount");

//   }catch (error) {
//       console.error("Error creating order:", error);
//   }
//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4">
//         <nav className="flex items-center gap-2 text-sm">
//           <Link href="/cart" className="text-gray-600 hover:text-black">Cart</Link>
//           <CgChevronRight className="w-4 h-4 text-gray-600" />
//           <span className="text-black">Checkout</span>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
//         {/* Order Summary */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-lg font-semibold border-b pb-4">Order Summary</h2>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div key={typeof item.slug === 'object' ? item.slug.current : item.slug} className="flex items-center gap-4 py-3 border-b last:border-none">
//                 <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
//                   {item.image && <Image src={urlFor(item.image).url()} alt={item.title} width={64} height={64} className="object-cover w-full h-full" />}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-sm font-medium">{item.title}</h3>
//                   <p className="text-xs text-gray-500">Quantity: {item.quantity || 1}</p>
//                 </div>
//                 <p className="text-sm font-medium">${item.price * (item.quantity || 1)}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-gray-500">Your cart is empty.</p>
//           )}
//           <div className="text-right pt-4">
//             <p className="text-sm">Subtotal: <span className="font-medium">${subtotal}</span></p>
//             <p className="text-sm">Discount: <span className="font-medium">-${discount}</span></p>
//             <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
//           </div>
//         </div>

//         {/* Billing Form */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {Object.keys(formValues).map((key) => (
//               <div key={key}>
//                 <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key.replace(/([A-Z])/g, ' $1')}</label>
//                 <input
//                   id={key}
//                   placeholder={`Enter your ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
//                   value={formValues[key as keyof typeof formValues]}
//                   onChange={handleInputChange}
//                   className="w-full border p-2 rounded-lg"
//                 />
//                 {formErrors[key] && <p className="text-sm text-red-500">{key.replace(/([A-Z])/g, ' $1')} is required.</p>}
//               </div>
//             ))}
//           </div>
//           <button className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg" onClick={handlePlaceOrder}>Place Order</button>
//         </div>
//       </div>
//     </div>
//   );







// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Swal from "sweetalert2";
// import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from "react-icons/cg";
// import IProduct from "@/types/page";
// import { getCartItems } from "../functions/action";
// import { client } from "@/sanity/lib/client";

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
//   const [formErrors, setFormErrors] = useState<Record<string, boolean>>({});

//   useEffect(() => {
//     async function fetchCart() {
//       const items = await getCartItems();
//       setCartItems(items);
//     }
//     fetchCart();

//     const appliedDiscount = localStorage.getItem("appliedDiscount");
//     if (appliedDiscount) setDiscount(Number(appliedDiscount));
//   }, []);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * (item.quantity || 1),
//     0
//   );
//   const total = Math.max(subtotal - discount, 0);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormValues({ ...formValues, [e.target.id]: e.target.value });
//   };

//   const validateForm = () => {
//     const errors: Record<string, boolean> = {};
//     Object.keys(formValues).forEach((key) => {
//       errors[key] = !formValues[key as keyof typeof formValues];
//     });
//     setFormErrors(errors);
//     return Object.values(errors).every((error) => !error);
//   };

//   const handlePlaceOrder = async () => {
//     if (!validateForm()) {
//       Swal.fire("Error!", "Please fill in all required fields.", "error");
//       return;
//     }

//     Swal.fire({
//       title: "Processing your order...",
//       text: "Please wait a moment.",
//       icon: "info",
//       showCancelButton: true,
//       confirmButtonText: "Proceed",
//     }).then(async (result) => {
//       if (!result.isConfirmed) {
//         Swal.fire("Cancelled!", "Your order has not been processed.", "error");
//         return;
//       }

//       const orderData = {
//         _type: "order",
//         firstName: formValues.firstName,
//         lastName: formValues.lastName,
//         address: formValues.address,
//         city: formValues.city,
//         zipCode: formValues.zipCode,
//         phone: formValues.phone,
//         email: formValues.email,
//         // cartItems: cartItems.map((item) => ({
//         //   _type: "reference",
//         //   _ref: typeof item.slug === "object" ? item.slug.current : item.slug, // Corrected slug reference
//         // })),
//         cartItems: cartItems.map((item) => ({
//           type: "reference",
//           _ref: typeof item.slug === 'object' ? item.slug.current : item.slug, 
//         })),
        
//         total: total,
//         discount: discount, // Fixed spelling
//         orderDate: new Date().toISOString(),
//         status: "pending",
//       };

//       // try {
//       //   await client.create(orderData);
//       //   localStorage.removeItem("appliedDiscount");
//       //   Swal.fire("Success!", "Your order has been successfully processed!", "success");
//       // } catch (error) {
//       //   console.error("Error creating order:", error);
//       //   Swal.fire("Error!", "Something went wrong. Please try again.", "error");
//       // }
//       try {
//         await client.create(orderData);
//         localStorage.removeItem("appliedDiscount");
//       } catch (error) {
//         console.error("Sanity Error:", error);
//         Swal.fire("Error!", "Failed to process the order. Please try again.", "error");
//       }
      
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4">
//         <nav className="flex items-center gap-2 text-sm">
//           <Link href="/cart" className="text-gray-600 hover:text-black">Cart</Link>
//           <CgChevronRight className="w-4 h-4 text-gray-600" />
//           <span className="text-black">Checkout</span>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
//         {/* Order Summary */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-lg font-semibold border-b pb-4">Order Summary</h2>
//           {cartItems.length > 0 ? (
//             cartItems.map((item) => (
//               <div key={typeof item.slug === "object" ? item.slug.current : item.slug} className="flex items-center gap-4 py-3 border-b last:border-none">
//                 <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
//                   {item.image && <Image src={urlFor(item.image).url()} alt={item.title} width={64} height={64} className="object-cover w-full h-full" />}
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-sm font-medium">{item.title}</h3>
//                   <p className="text-xs text-gray-500">Quantity: {item.quantity || 1}</p>
//                 </div>
//                 <p className="text-sm font-medium">${item.price * (item.quantity || 1)}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-gray-500">Your cart is empty.</p>
//           )}
//           <div className="text-right pt-4">
//             <p className="text-sm">Subtotal: <span className="font-medium">${subtotal}</span></p>
//             <p className="text-sm">Discount: <span className="font-medium">-${discount}</span></p>
//             <p className="text-lg font-semibold">Total: ${total.toFixed(2)}</p>
//           </div>
//         </div>

//         {/* Billing Form */}
//         <div className="bg-white shadow-md rounded-lg p-6">
//           <h2 className="text-lg font-semibold mb-4">Billing Information</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {Object.keys(formValues).map((key) => (
//               <div key={key}>
//                 <label htmlFor={key} className="block text-sm font-medium text-gray-700">{key.replace(/([A-Z])/g, " $1")}</label>
//                 <input
//                   id={key}
//                   placeholder={`Enter your ${key.replace(/([A-Z])/g, " $1").toLowerCase()}`}
//                   value={formValues[key as keyof typeof formValues]}
//                   onChange={handleInputChange}
//                   className="w-full border p-2 rounded-lg"
//                 />
//                 {formErrors[key] && <p className="text-sm text-red-500">{key.replace(/([A-Z])/g, " $1")} is required.</p>}
//               </div>
//             ))}
//           </div>
//           <button className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg" onClick={handlePlaceOrder}>
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }




































// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { CgChevronRight } from "react-icons/cg";
// import { client } from "@/sanity/lib/client";
// import Navbar from "../Components/navbar2";
// import Footer from "../Components/footer";
// import { getCartItems } from "../functions/action";
// import IProduct from "@/types/page";
// import { urlFor } from "@/sanity/lib/image";

// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string>("");

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

//   const handleCheckout = async (products: IProduct[]) => {
//     try {
//       setLoading(true);
//       setErrorMessage("");
//       const response = await fetch("/api/payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ products }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         window.location.href = data.url;
//       } else {
//         setErrorMessage(data.error || "Payment initiation failed.");
//         setLoading(false);
//       }
//     } catch (error: any) {
//       console.error("An unexpected error occurred:", error);
//       setErrorMessage("An unexpected error occurred. Please try again later.");
//       setLoading(false);
//     }
//   };
//   const handlePlaceOrder = async () => {
//     if (!cartItems.length) {
//       setErrorMessage("Your cart is empty.");
//       return;
//     }
//     if (validateForm()) {
//       await handleCheckout(cartItems);
  
//       const orderData = {
//         _type: "order",
//         firstName: formValues.firstName,
//         lastName: formValues.lastName,
//         address: formValues.address,
//         city: formValues.city,
//         zipCode: formValues.zipCode,
//         phone: formValues.phone,
//         email: formValues.email,
//         cartItems: cartItems.map((item) => ({
//           type: "reference",
//           _ref: typeof item.slug === 'object' ? item.slug.current : item.slug, // Use slug instead of title
//         })),
//         total: total,
//         discount: discount,
//         orderDate: new Date().toISOString(),
//       };
  
//       try {
//         await client.create(orderData);  // This will save the order in Sanity
//         localStorage.removeItem("appliedDiscount");
//         console.log("Order placed successfully!");
//       } catch (error) {
//         console.error("Error creating order:", error);
//         setErrorMessage("Failed to place order.");
//       }
//     } else {
//       setErrorMessage("Please fill in all required fields.");
//     }
//   };
  

//   return (
//     <div className="min-h-screen bg-gray-200">
//       <Navbar />
//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
//         <nav className="flex items-center gap-2 py-4 text-md font-semibold text-gray-500">
//           <Link href="/Cart" className="hover:text-gray-700">
//             Cart
//           </Link>
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
//                 key={typeof item.slug === "object" ? item.slug.current : item.slug}
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
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-gray-500">Your cart is empty.</p>
//           )}
//           <div className="text-right space-y-2">
//             <p className="text-md font-bold text-gray-700">
//               Subtotal:{" "}
//               <span className="font-medium text-sm">${subtotal.toFixed(2)}</span>
//             </p>
//             <p className="text-lg font-semibold">
//               Total: ${total.toFixed(2)}
//             </p>
//           </div>
//         </div>

//         {/* Billing Form */}
//         <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
//           <h2 className="text-lg font-semibold border-b pb-4">Billing Information</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {/* Input Fields */}
//             {["firstName", "lastName", "address", "city", "zipCode", "phone", "email"].map((field) => (
//               <div key={field}>
//                 <label
//                   htmlFor={field}
//                   className="block text-sm font-medium text-gray-600"
//                 >
//                   {field.charAt(0).toUpperCase() + field.slice(1)}
//                 </label>
//                 <input
//                   id={field}
//                   placeholder={`Enter your ${field}`}
//                   value={formValues[field as keyof typeof formValues]}
//                   onChange={handleInputChange}
//                   className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                     formErrors[field as keyof typeof formErrors]
//                       ? "border-red-500 focus:ring-red-200"
//                       : "border-gray-300 focus:ring-blue-200"
//                   }`}
//                 />
//                 {formErrors[field as keyof typeof formErrors] && (
//                   <p className="text-sm text-red-500 mt-1">
//                     {`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Submit Button */}
//           <div className="text-right">
//             <button
//               onClick={handlePlaceOrder}
//               disabled={loading}
//               className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none disabled:bg-gray-400"
//             >
//               {loading ? "Processing..." : "Place Order"}
//             </button>
//             {errorMessage && (
//               <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
//             )}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
//  import IProduct from "@/types/page";
//  import { urlFor } from "@/sanity/lib/image";
// import { CgChevronRight } from "react-icons/cg";

// import Navbar from "../Components/navbar2";
// import Footer from "../Components/footer";
// import { getCartItems } from "../functions/action";
// import { client } from "@/sanity/lib/client";

// export default function CheckoutPage() {
//   const [cartItems, setCartItems] = useState<IProduct[]>([]);
//   const [discount, setDiscount] = useState<number>(0);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [errorMessage, setErrorMessage] = useState<string>("");

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

//   const handleCheckout = async (products: IProduct[]) => {
//     try {
//       setLoading(true);
//       setErrorMessage("");
//       const response = await fetch("/api/payment", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ products }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // Optionally, clear cart here if checkout is successful
//         window.location.href = data.url;
//       } else {
//         setErrorMessage(data.error || "Payment initiation failed.");
//         setLoading(false);
//       }
//     } catch (error: any) {
//       console.error("An unexpected error occurred:", error);
//       setErrorMessage("An unexpected error occurred. Please try again later.");
//       setLoading(false);
//     }
//   };

//   const handlePlaceOrder = async() => {
//     if (!cartItems.length) {
//       setErrorMessage("Your cart is empty.");
//       return;
//     }
//     if (validateForm()) {
//       handleCheckout(cartItems);
//     } else {
//       setErrorMessage("Please fill in all required fields.");
//     }

//     const orderData = {
//        _type : "order",
//        firstName: formValues.firstName,
//        lastName: formValues.lastName,
//        address: formValues.address,
//        city: formValues.city,
//        zipCode: formValues.zipCode,
//        phone: formValues.phone,
//        email: formValues.email,
//        cartItems: cartItems.map(item=> ({
//         type: "reference",
//         _ref : item.title,
         
//        })),
//        total : total,
//        discount : discount,
//        orderDate : new Date().toISOString()
//   };

//   try {
//     await client.create(orderData);
//     localStorage.removeItem("appliedDiscount");
//     console.log("Order placed successfully!");
//   } catch (error) {
//     console.error("Error creating order:", error);
//   }
  
// }

//   return (
//     <div className="min-h-screen bg-gray-200">
//       <Navbar />
//       {/* Breadcrumb */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
//         <nav className="flex items-center gap-2 py-4 text-md font-semibold text-gray-500">
//           <Link href="/Cart" className="hover:text-gray-700">
//             Cart
//           </Link>
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
//                 // key={item.slug}
//                 key={typeof item.slug === 'object' ? item.slug.current : item.slug} 
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
//                   <h3 className="text-sm font-medium text-gray-700">
//                     {item.title}
//                   </h3>
//                   <p className="text-xs text-gray-500">
//                     Quantity: {item.quantity}
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-800">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//             ))
//           ) : (
//             <p className="text-sm text-gray-500">Your cart is empty.</p>
//           )}
//           <div className="text-right space-y-2">
//             <p className="text-md font-bold text-gray-700">
//               Subtotal:{" "}
//               <span className="font-medium text-sm">${subtotal.toFixed(2)}</span>
//             </p>
//             <p className="text-lg font-semibold">
//               Total: ${total.toFixed(2)}
//             </p>
//           </div>
//         </div>

//         {/* Billing Form */}
//         <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
//           <h2 className="text-lg font-semibold border-b pb-4">
//             Billing Information
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 First Name
//               </label>
//               <input
//                 id="firstName"
//                 placeholder="Enter your first name"
//                 value={formValues.firstName}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.firstName
//                     ? "border-red-500 focus:ring-red-200"
//                     : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.firstName && (
//                 <p className="text-sm text-red-500 mt-1">
//                   First name is required.
//                 </p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Last Name
//               </label>
//               <input
//                 id="lastName"
//                 placeholder="Enter your last name"
//                 value={formValues.lastName}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.lastName
//                     ? "border-red-500 focus:ring-red-200"
//                     : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.lastName && (
//                 <p className="text-sm text-red-500 mt-1">
//                   Last name is required.
//                 </p>
//               )}
//             </div>
//           </div>
//           <div>
//             <label
//               htmlFor="address"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Address
//             </label>
//             <input
//               id="address"
//               placeholder="Enter your address"
//               value={formValues.address}
//               onChange={handleInputChange}
//               className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                 formErrors.address
//                   ? "border-red-500 focus:ring-red-200"
//                   : "border-gray-300 focus:ring-blue-200"
//               }`}
//             />
//             {formErrors.address && (
//               <p className="text-sm text-red-500 mt-1">
//                 Address is required.
//               </p>
//             )}
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="city"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 City
//               </label>
//               <input
//                 id="city"
//                 placeholder="Enter your city"
//                 value={formValues.city}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.city
//                     ? "border-red-500 focus:ring-red-200"
//                     : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.city && (
//                 <p className="text-sm text-red-500 mt-1">
//                   City is required.
//                 </p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="zipCode"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Zip Code
//               </label>
//               <input
//                 id="zipCode"
//                 placeholder="Enter your zip code"
//                 value={formValues.zipCode}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.zipCode
//                     ? "border-red-500 focus:ring-red-200"
//                     : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.zipCode && (
//                 <p className="text-sm text-red-500 mt-1">
//                   Zip code is required.
//                 </p>
//               )}
//             </div>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Phone
//               </label>
//               <input
//                 id="phone"
//                 placeholder="Enter your phone number"
//                 value={formValues.phone}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.phone
//                     ? "border-red-500 focus:ring-red-200"
//                     : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.phone && (
//                 <p className="text-sm text-red-500 mt-1">
//                   Phone number is required.
//                 </p>
//               )}
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-600"
//               >
//                 Email
//               </label>
//               <input
//                 id="email"
//                 placeholder="Enter your email address"
//                 value={formValues.email}
//                 onChange={handleInputChange}
//                 className={`mt-1 w-full p-2 border rounded-lg focus:outline-none focus:ring-2 ${
//                   formErrors.email
//                     ? "border-red-500 focus:ring-red-200"
//                     : "border-gray-300 focus:ring-blue-200"
//                 }`}
//               />
//               {formErrors.email && (
//                 <p className="text-sm text-red-500 mt-1">
//                   Email is required.
//                 </p>
//               )}
//             </div>
//           </div>
//           {errorMessage && (
//             <p className="text-red-500 text-sm">{errorMessage}</p>
//           )}
//           <button
//             className={`w-full h-12 ${
//               loading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-700"
//             } text-white rounded-lg`}
//             onClick={handlePlaceOrder}
//             disabled={loading}
//           >
//             {loading ? "Processing..." : "Place Order"}
//           </button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }














