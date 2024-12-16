

import Image from "next/image";
import HeroImage from '@/app/images/about/hero.png';

const Hero = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center  relative'>
      <div className='absolute inset-0'>
        <Image
          src={HeroImage}
          alt='image'
          className='w-screen h-full object-cover'
        />
      </div>
      <div className='absolute w-[300px] h-[550px] md:w-[599px] md:h-[331px] items-center lg:items-start flex flex-col justify-center text-center md:text-left gap-[35px] text-[#252B42] md:top-40 md:left-56 sm:bottom-10'>
        <h5 className='text-sm md:text-base font-bold leading-6 tracking-[0.01em]'>ABOUT COMPANY</h5>
        <h1 className='text-[40px] md:text-[58px] font-bold leading-20 tracking-[0.02em]'>ABOUT US</h1>
        <h4 className='text-[16px] md:text-xl font-normal leading-[30px] tracking-[0.02em] text-[#737373]'>
          We know how large objects will act, <br />
          but things on a small scale
        </h4>
        <button className='w-[195px] h-[52px] text-[14px] font-bold bg-[#23A6F0] text-center rounded text-[#ffffff]'>
          Get Quote Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
