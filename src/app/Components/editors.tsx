


import React from 'react';
import Image from 'next/image';
import men from '@/app/images/men.png';
import women from '@/app/images/women.png';
import women2 from '@/app/images/women2.png';
import men2 from '@/app/images/men2.png';

const Editors = () => {
  return (
    <div className="h-[1300px] lg:h-[770px] w-full bg-[#FAFAFA] relative overflow-hidden">
      <div className="lg:w-[1050px] h-[1300px] lg:h-[770px] py-[40px] flex flex-col absolute left-[50%]  transform -translate-x-[50%] gap-[48px] justify-center items-center">
        {/* Section Title */}
        <div className="w-full h-auto flex flex-col gap-[10px] justify-center items-center text-center">
          <p className="text-[24px] sm:text-[28px] font-bold text-[#252B42] leading-[32px] tracking-[0.1px]">
            EDITOR’S PICK
          </p>
          <p className="text-[14px] sm:text-[16px] font-normal text-[#737373] tracking-[0.2px] max-w-[300px] sm:max-w-[500px]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Image Grid Section */}
        <div className="w-full gap-[20px] sm:gap-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* MEN Section */}
          <div className="bg-[#FFFFFF] w-full h-[300px] sm:h-[500px] relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={men}
              alt="men"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <h5 className="bg-[#FFFFFF] text-[#252B42] lg:py-2.5 text-[12px]  py-1.5 leading-[24px] font-bold tracking-[0.1px] lg:text-[16px] text-center absolute left-[50%] transform -translate-x-[50%] bottom-[20px] lg:w-[170px] w-[90px] shadow-lg">
              MEN
            </h5>
          </div>

          {/* WOMEN Section */}
          <div className="bg-[#FFFFFF] w-full h-[300px] sm:h-[500px] relative rounded-lg overflow-hidden shadow-md">
            <Image
              src={women}
              alt="women"
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <h5 className="bg-[#FFFFFF] text-[#252B42] lg:py-2.5 py-1.5 leading-[24px] font-bold tracking-[0.1px] lg:text-[16px] text-[12px] text-center absolute left-[50%] transform -translate-x-[50%] bottom-[20px] w-[136px] lg:w-[170px]  shadow-lg">
              WOMEN
            </h5>
          </div>

          {/* Accessories and Kids Section */}
          <div className="bg-[#FFFFFF] w-full h-auto flex flex-col gap-[16px]">
            {/* Accessories Image */}
            <div className="relative h-[190px] sm:h-[242px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={women2}
                alt="accessories"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <h5 className="bg-[#FFFFFF] text-[#252B42] py-1.5 lg:py-2.5px leading-[24px] font-bold tracking-[0.1px] lg:text-[16px] text-[12px] text-center absolute left-[50%] transform -translate-x-[50%] bottom-[10px] w-[140px] lg:w-[170px] shadow-lg">
                ACCESSORIES
              </h5>
            </div>
            {/* Kids Image */}
            <div className="relative h-[190px] sm:h-[242px] rounded-lg overflow-hidden shadow-md">
              <Image
                src={men2}
                alt="kids"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <h5 className="bg-[#FFFFFF] text-[#252B42] lg:py-2.5 p-1.5 leading-[24px] font-bold tracking-[0.1px] lg:text-[16px] text-center absolute left-[50%] transform -translate-x-[50%] bottom-[10px] lg:w-[120px] w-[90px] text-[12px] shadow-lg">
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
