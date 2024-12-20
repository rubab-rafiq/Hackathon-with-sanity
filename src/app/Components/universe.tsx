
import React from 'react';
import Image from 'next/image';
import universe from '@/app/images/universe.png';




const ProductSection = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse items-center justify-center min-h-screen bg-[#FFFFFF] text-[#252B42] px-6 md:px-20 gap-[30px] pt-48 lg:pt-[0]">
      {/* Content Section */}
      <div className="flex-1 max-w-md text-center md:text-left space-y-8">
        <p className="text-sm uppercase tracking-wide text-[#737373]">
          Summer 2023
        </p>
        <h1 className="text-[40px] font-bold leading-tight">
          Part of the Neural Universe
        </h1>
        <p className="text-base md:text-[14px] leading-relaxed text-[#737373]">
          We know how large <br className='lg:hidden'/> objects will act, but <br/> things on a small scale.
        </p>
        <div className="flex flex-col md:flex-row items-center lg:h-[60px] lg:w-[376px] gap-4 mt-4">
          <p className="text-[14px] font-semibold p-4 bg-[#23A6F0] lg:bg-[#23A670] rounded-lg w-[156px] h-[52px] text-center text-white">
            Buy NOW
          </p>
          <button className="w-[156px] h-[52px] text-[14px] px-6 py-2 text-[#23A6F0] lg:text-[#23A670] border border-[#23A6F0] lg:border-[#23A670] font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:text-[#23856D] transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-sm md:max-w-md pt-6 mt-3">
        <Image
          src={universe}
          alt="Product"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ProductSection;