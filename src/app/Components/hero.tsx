


import React from 'react';
import Image from 'next/image';
import hero from "@/app/images/shop-hero.png";

const Hero = () => {
  return (
    <div className="relative h-[753px] lg:h-[716px] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={hero}
        alt="Hero"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center px-6 lg:px-20">
        <div className="text-center lg:text-left max-w-[1044px] w-full">
          {/* "SUMMER 2024" Text */}
          <p className="text-[16px] font-bold text-white tracking-wider uppercase">
            SUMMER 2024
          </p>
          {/* "NEW COLLECTION" Heading */}
          <h1 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-white leading-tight mt-4">
            NEW COLLECTION
          </h1>
          {/* Description */}
          <h4 className="text-[16px] sm:text-[18px] lg:text-[22px] text-white max-w-[500px] mt-4">
            We know how large objects will act, but things on a small scale can be unpredictable.
          </h4>
          {/* "Shop Now" Button */}
          <div className="mt-6">
            <button className="w-[200px] sm:w-[221px] h-[50px] sm:h-[62px] bg-[#2DC071] text-white font-semibold rounded-lg hover:bg-[#25a05a] transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
