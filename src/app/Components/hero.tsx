
import React from 'react';
import Image from 'next/image';
import hero from "@/app/images/shop-hero.png";

const Hero = () => {
  return (
    <div className='lg:h-[716px] lg:w-auto relative h-[753px]'>
      <Image src={hero} alt="Hero" className='h-[716px] w-[1540px]' />
      <div className='lg:w-[1044px] lg:h-[651px] top-[48px] left-[197.5px] absolute gap-[80px] flex py-[112px] w-[414px] h-[705px]'>
        <div className='py-[48px] gap-[30px] flex flex-col h-[427px] w-[1044px]'>
          <div className='lg:w-[599px] lg:h-[331px] gap-[35px] text-[#FFFFFF] flex flex-col w-[419px] h-[560px]'>
            {/* Adjusting the "SUMMER 2020" text for mobile */}
            <p className='w-[300px] text-[16px] font-bold text-center lg:text-start'>
              SUMMER 2024
            </p>

            {/* New Collection Heading */}
            <h1 className='text-[58px] font-bold lg:text-start tracking-[0.2px] leading-[50px] text-center lg:leading-[80px] lg:h-[auto] lg:w-auto w-[268px] h-[100px]'>
              NEW COLLECTION
            </h1>

            {/* Description */}
            <h4 className='w-[291px] h-[90px] lg:w-[376px] text-center lg:h-[60px] text-[20px] leading-[30px] tracking-[0.2px] font-normal'>
              We know how large objects will act, but things on a small scale.
            </h4>

            {/* Shop Now Button */}
            <button className='w-[221px] h-[62px] py-[15px] px-[40px] gap-[10px] rounded font-semibold bg-[#2DC071] leading-[24px] tracking-[0.1px]'>
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
