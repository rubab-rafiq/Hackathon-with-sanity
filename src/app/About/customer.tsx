import React from 'react';

const Customer = () => {
  return (
    <div className="w-screen px-4 py-12 md:px-20 lg:px-36">
      {/* Flex Container */}
      <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
        
        {/* Single Stat */}
        <div className="flex flex-col items-center">
          <h2 className="text-[#252B42] text-4xl md:text-5xl font-bold">15K</h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">Happy Customers</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[#252B42] text-4xl md:text-5xl font-bold">150K</h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">Monthly Visitors</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[#252B42] text-4xl md:text-5xl font-bold">15</h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">Countries Worldwide</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-[#252B42] text-4xl md:text-5xl font-bold">100+</h2>
          <p className="text-gray-500 text-sm md:text-base mt-2">Top Partners</p>
        </div>
        
      </div>
    </div>
  );
};

export default Customer;
