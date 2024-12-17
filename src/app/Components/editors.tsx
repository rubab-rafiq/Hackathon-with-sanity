

import React from 'react';
import Image from 'next/image';
import men from '@/app/images/men.png';
import women from '@/app/images/women.png';
import women2 from '@/app/images/women2.png';
import men2 from '@/app/images/men2.png';

const Editors = () => {
  return (
    <div className='h-[1850px] lg:h-[770px] w-full bg-[#FAFAFA] relative'>
      <div className='lg:w-[1050px] lg:h-[770px] py-[80px] flex flex-col absolute left-[50%] transform -translate-x-[50%] gap-[48px] justify-center items-center'>
        
        {/* Section Title */}
        <div className='w-full  h-[62px] flex flex-col gap-[10px] justify-center items-center text-center'>
        <p className="text-[20px] sm:text-[24px] font-bold text-[#252B42] leading-[32px] tracking-[0.1px]">
             EDITOR’S PICK
           </p>
         <p className="text-[12px] sm:text-[14px] font-normal text-[#737373] tracking-[0.2px]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Image Grid Section */}
        <div className='w-full gap-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          
          {/* MEN Section */}
          <div className='bg-[#FFFFFF] w-full h-[500px] relative'>
            <Image src={men} alt="men" className='w-full h-[500px] object-cover'/>
            <h5 className='bg-[#FFFFFF] text-[#252B42] py-2.5 leading-[24px] font-bold tracking-[0.1px] text-[16px] text-center absolute left-[50%] transform -translate-x-[50%] bottom-[20px] w-[170px]'>
              MEN
            </h5>
          </div>

          {/* WOMEN Section */}
          <div className='bg-[#FFFFFF] w-full h-[500px] relative'>
            <Image src={women} alt="women" className='w-full h-[500px] object-cover'/>
            <h5 className='bg-[#FFFFFF] text-[#252B42] py-2.5 leading-[24px] font-bold tracking-[0.1px] text-[16px] text-center absolute left-[50%] transform -translate-x-[50%] bottom-[20px] w-[170px]'>
              WOMEN
            </h5>
          </div>

          {/* Accessories and Kids Section */}
          <div className='bg-[#FFFFFF] w-full h-[500px] flex flex-col gap-[16px]'>
            {/* Accessories Image */}
            <div className='relative'>
              <Image src={women2} alt="accessories" className='w-full h-[242px] object-cover'/>
              <h5 className='bg-[#FFFFFF] text-[#252B42] py-2.5 leading-[24px] font-bold tracking-[0.1px] text-[16px] text-center absolute left-[50%] transform -translate-x-[50%] bottom-[20px] w-[170px]'>
                ACCESSORIES
              </h5>
            </div>
            {/* Kids Image */}
            <div className='relative'>
              <Image src={men2} alt="kids" className='w-full h-[242px] object-cover'/>
              <h5 className='bg-[#FFFFFF] text-[#252B42] py-2.5 leading-[24px] font-bold tracking-[0.1px] text-[16px] text-center absolute left-[50%] transform -translate-x-[50%] bottom-[20px] w-[120px]'>
                KIDS
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editors;
