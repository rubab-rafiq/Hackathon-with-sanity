import React from 'react'
import Image from 'next/image';
import Classicproduct from '@/app/images/classicproduct.png';


const ProductSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#23856D] text-white px-6 md:px-20 pt-48 lg:pt-[0]">
      {/* Content Section */}
      <div className="flex-1 max-w-md text-center md:text-left space-y-8 ">
        <p className="text-sm uppercase tracking-wide">Summer 2023</p>
        <h1 className="text-[40px] md:text-[58px] font-bold leading-tight">
          Vita Classic Product
        </h1>
        <p className="text-base md:text-[14px] leading-relaxed  lg:w-[341px] lg:h-[40px]">
        We know how large objects <br className='lg:hidden'/> will act,but things <br className='lg:hidden'/> on a small scale
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
          <p className="text-2xl font-semibold">$16.48</p>
          <button className="w-[184px] h-[52px] text-[14px] px-6 py-2 text-white bg-[#2DC071] font-semibold rounded-lg shadow-md hover:bg-gray-100 hover:text-[#23856D] transition">
            ADD TO CART
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 max-w-sm md:max-w-md pt-6 mt-3">
        <Image
          src={Classicproduct}
          alt="Product"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ProductSection;
