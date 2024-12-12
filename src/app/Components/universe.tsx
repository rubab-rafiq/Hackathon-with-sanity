
import React from 'react';
import Image from 'next/image';
import universe from '@/app/images/universe.png';

const Universe = () => {
  return (
    <div className='lg:h-[716px] lg:w-auto relative h-[1366px]  bg-white '>

    <div className='lg:w-[1036px] lg:h-[711px] lg:left-[209px]  left-[30px] absolute gap-[80px]  py-[112px] w-[414px] h-[1252px]'>
      <div className=' gap-[30px]   h-[1238px] w-[1049px]  grid grid-flow-cols-1 lg:grid-cols-2'>
      <div className=' w-[443px] h-[635px]'>
         <Image src={universe} alt="Classicproduct" className='w-[443px] h-[635px]' />
        </div>
        <div className='lg:w-[509px] lg:h-[432px] lg:gap-[30px]  h-[429px] gap-[35px] text-[#252B42] flex flex-col'>
          {/* Adjusting the "SUMMER 2020" text for mobile */}
          <p className='w-[300px] text-[16px] font-normal text-center lg:text-start'>
            SUMMER 2024
          </p>

          {/* New Collection Heading */}
          <h1 className='text-[58px] font-bold lg:text-start tracking-[0.2px]  leading-[50px] text-center lg:leading-[80px] lg:h-[auto] lg:w-auto w-[268px] h-[100px]'>
          Vita Classic Product
          </h1>

          {/* Description */}
          <h4 className='w-[291px] h-[90px] pt-[30px] lg:pt-[0] lg:w-[376px]  lg:h-[60px] text-[20px] leading-[30px] tracking-[0.2px] font-normal'>
          We know how large objects will act, We know how are objects will act, We know
          </h4>

          {/* Shop Now Button */}
          <button className=' pt-[30px] lg:pt-[0] w-[295px] grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-[10px] h-[52px] text-[24px] rounded fon-bold  leading-[24px] tracking-[0.1px]'>
          $16.48 <span className="bg-[skyblue] py-3 text-[14px] h-[52px] w-full lg:w-[184px] rounded inline-block">
                  ADD TO CART
                </span>
          </button>
        </div>


      </div>
    </div>
  </div>
  )
}
export default Universe;
