
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";
import hero1 from "@/app/images/product/hero1.png";
import hero2 from "@/app/images/product/hero2.png";
import hero3 from "@/app/images/product/hero3.png";
import hero4 from "@/app/images/product/hero4.png";
import hero5 from "@/app/images/product/hero5.png";
const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='relative w-screen justify-center text-center py-[50px] top-[50px] h-[200px] sm:h-[240px] flex flex-col z-10'>
        <p className='text-[#737373] font-bold leading-6 tracking-[0.1px] text-[16px]'>
          WHAT WE DO
        </p>
        <h1 className='lg:text-[58px] text-[40px] font-bold text-[#252B42]'>
          Innovation tailored for you
        </h1>
        <div className="flex justify-center items-center w-full gap-[16px]">
          <h6 className="text-sm font-bold flex items-center gap-2">
            <Link href="/" className="text-[#252B42]">Home</Link>
            <IoIosArrowForward className="text-[#BDBDBD]" />
            <Link href="/" className="text-[#BDBDBD]">Shop</Link>
          </h6>
        </div>
      </div>

      {/* Image Section */}
      <div className='lg:h-[560px] h-[890px] flex flex-col lg:flex-row pt-12 justify-center'>
        {/* First Image */}
        <div className='lg:w-[700px] w-full h-[530px] flex justify-center'>
          <Image src={hero1} alt="hero1" layout="intrinsic" className="object-cover w-full h-full" />
        </div>

        {/* Image Grid */}
        <div className='lg:w-[730px] w-full flex flex-col justify-between h-[530px]'>
          {/* Top row of images */}
          <div className='w-full h-[260px] flex'>
            <Image src={hero2} className='w-[50%] h-full object-cover p-1' alt="hero2" />
            <Image src={hero3} className='w-[50%] h-full object-cover p-1' alt="hero3" />
          </div>

          {/* Bottom row of images */}
          <div className='w-full h-[260px] flex'>
            <Image src={hero4} className='w-[50%] h-full object-cover p-1' alt="hero2" />
            <Image src={hero5} className='w-[50%] h-full object-cover p-1' alt="hero3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
