// 'use client'
// import React from 'react'

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function SuccessPage() {
//   const router = useRouter();

//   useEffect(() => {
//     localStorage.removeItem("cart"); // LocalStorage se cart empty karein
//     router.refresh(); // Page refresh karein taake cart update ho jaye
//   }, []);


//   return (
//     <div className='flex justify-center bg-emerald-100 items-center h-screen text-3xl font-bold'>
//       Congratulation!
//       Payment Sucessfully
//     </div>
//   )
// }
'use client'
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("cart"); // Clear the cart from localStorage
    router.refresh(); // Refresh the page to update the cart
  }, []);

  const handleHomeRedirect = () => {
    router.push("/"); // Redirect to homepage
  };

  return (
    <div className="flex flex-col justify-center items-center bg-emerald-100 h-screen text-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full animate-bounce">
        <h1 className="text-4xl font-extrabold text-emerald-600 mb-4">Congratulations! 🎉</h1>
        <p className="text-xl text-gray-700 mb-6">Your payment was successful.</p>
        <button
          onClick={handleHomeRedirect}
          className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
