import React from "react";

const CancelPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-red-50 text-center px-6">
      <h1 className="text-5xl font-extrabold text-red-700 mb-4">
        Payment Failed!
      </h1>
      <p className="text-lg text-red-600">
        Oops! Something went wrong. Please try again or contact support.
      </p>
    </div>
  );
};

export default CancelPage;
