
import React from 'react';
import Image from 'next/image';
import hero from "@/app/images/shop-hero.png";

const Hero = () => {
  return (
    <div className="relative h-[753px] lg:h-[716px] w-full">
      {/* Background Image */}
      <Image
        src={hero}
        alt="Hero"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-[48px] left-1/2 transform -translate-x-1/2 flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[1044px] px-4 lg:px-0 gap-[40px] py-[112px]">
        <div className="flex flex-col gap-[30px]">
          {/* "SUMMER 2024" Text */}
          <p className="text-[16px] font-bold text-[#FFFFFF] tracking-wider">
            SUMMER 2024
          </p>
          {/* "NEW COLLECTION" Heading */}
          <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-bold text-[#FFFFFF] leading-tight">
            NEW COLLECTION
          </h1>
          {/* Description */}
          <h4 className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#FFFFFF] max-w-[350px] sm:max-w-[450px] mx-auto lg:mx-0">
            We know how large objects will act, but things on a small scale.
          </h4>
          {/* "Shop Now" Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="w-[200px] sm:w-[221px] h-[50px] sm:h-[62px] bg-[#2DC071] text-white font-semibold rounded-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
