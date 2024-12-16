import React from 'react';

const ProblemsSection = () => {
  return (
    <div className="w-screen px-4 py-12 md:px-20 lg:px-36  ">
      {/* Flexbox for Two Columns */}
      <div className="flex flex-col md:flex-row md:gap-12 lg:items-start text-center lg:text-start">
        
        {/* Left Column */}
        <div className="flex-1 ">
          <h6 className="text-red-500 text-sm font-semibold mb-2">Problems trying</h6>
          <h2 className="text-[#252B42] text-xl md:text-2xl font-bold leading-tight">
            Met minim Mollie non desert <br />
            Alamo est sit cliquey dolor do <br />
            met sent.
          </h2>
        </div>

        {/* Right Column */}
        <div className="flex-1 mt-4 md:mt-0 pt-10 ">
          <p className="text-gray-500 text-sm md:text-base leading-6 text-center lg:text-start">
            Problems trying to resolve the conflict between the two major realms of 
            Classical physics: Newtonian mechanics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProblemsSection;
