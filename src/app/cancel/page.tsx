// import React from "react";

// const CancelPage = () => {
//   return (
//     <div className="flex flex-col justify-center items-center h-screen bg-red-50 text-center px-6">
//       <h1 className="text-5xl font-extrabold text-red-700 mb-4">
//         Payment Failed!
//       </h1>
//       <p className="text-lg text-red-600">
//         Oops! Something went wrong. Please try again or contact support.
//       </p>
//     </div>
//   );
// };

// export default CancelPage;
'use client'
import React from "react";

const CancelPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-50 text-center px-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border-2 border-red-300 animate-shake">
        <h1 className="text-5xl font-extrabold text-red-700 mb-4">
          Payment Failed ❌
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Oops! Something went wrong. Please try again or contact support.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default CancelPage;