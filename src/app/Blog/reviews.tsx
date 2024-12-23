
import React from 'react';
import Image from 'next/image';
import { AiOutlineRight } from "react-icons/ai";
import image from '@/app/images/blog/image.png';

const Reviews = () => {
  return (
    
    <div className="w-auto h-auto mb-10 bg-[#FFFFFF] p-6 rounded-lg shadow-md flex justify-center flex-col">
      <div className="h-[91px] flex justify-center font-semibold items-center gap-14">
        <p className="text-[14px] text-[#737373]">Description</p>
        <p className="text-[14px] text-[#737373]">Additional Information</p>
        <p className="text-[14px] text-[#737373]">Review <span className="text-[#23856D]">(0)</span></p>
      </div>
      <hr className="border text-[#737373]" />

      <div className="flex justify-center mt-[30px] gap-[30px] flex-col md:flex-row">
        {/* Image Section */}
        <div className="rounded-[9px] w-full md:w-[332px] lg:w-[337px] h-auto md:h-[292px] lg:h-[392px] border-gray-300 shadow-lg">
          <Image
            src={image}
            alt="image"
            className="rounded-[5.39px] w-full md:w-[321px] h-auto md:h-[271px] lg:w-[316px] lg:h-[372px]"
          />
        </div>

        {/* Text Section 1 */}
        <div className="rounded-[9px] pb-[25px] gap-[30px] w-full md:w-[332px] lg:w-[337px] h-auto md:h-[452px] lg:h-[392px] flex flex-col border-gray-300 shadow-md">
          <h3 className="font-bold text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">
            The quick fox jumps over
          </h3>
          <div className="text-[14px] text-[#737373] leading-[20px] tracking-[0.2px] font-normal gap-6 lg:gap-4 flex flex-col pr-10">
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </p>
          </div>
        </div>

        {/* Text Section 2 */}
        <div className="rounded-[9px] w-full md:w-[332px] lg:w-[337px] h-auto md:h-[377px] lg:h-[397px] flex flex-col gap-[30px] border-gray-300 shadow-lg">
          <div className="flex flex-col gap-[30px]">
            <h3 className="font-bold text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">
              The quick fox jumps over
            </h3>
            <div className="text-[14px] text-[#737373] leading-[24px] tracking-[0.2px] font-bold flex flex-col gap-[10px]">
              <h6 className="flex gap-[20px]">
                <AiOutlineRight className="text-2xl" />
                <span>The quick fox jumps over the lazy dog</span>
              </h6>
              <h6 className="flex gap-[20px]">
                <AiOutlineRight className="text-2xl" />
                <span>The quick fox jumps over the lazy dog</span>
              </h6>
              <h6 className="flex gap-[20px]">
                <AiOutlineRight className="text-2xl" />
                <span>The quick fox jumps over the lazy dog</span>
              </h6>
              <h6 className="flex gap-[20px]">
                <AiOutlineRight className="text-2xl" />
                <span>The quick fox jumps over the lazy dog</span>
              </h6>
            </div>

            <div className="flex flex-col gap-[30px]">
              <h3 className="font-bold text-[24px] text-[#252B42] leading-[32px] tracking-[0.1px]">
                The quick fox jumps over
              </h3>
              <div className="text-[14px] text-[#737373] leading-[24px] tracking-[0.2px] font-bold flex flex-col gap-[10px]">
                <h6 className="flex gap-[20px]">
                  <AiOutlineRight className="text-2xl" />
                  <span>The quick fox jumps over the lazy dog</span>
                </h6>
                <h6 className="flex gap-[20px]">
                  <AiOutlineRight className="text-2xl" />
                  <span>The quick fox jumps over the lazy dog</span>
                </h6>
                <h6 className="flex gap-[20px]">
                  <AiOutlineRight className="text-2xl" />
                  <span>The quick fox jumps over the lazy dog</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
