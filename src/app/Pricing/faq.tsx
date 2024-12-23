
import React from 'react'
import { AiOutlineRight } from "react-icons/ai";


const PricingFAQ = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-full md:w-[1056px] flex flex-col items-center py-10 gap-10">
        {/* Title Section */}
        <div className="text-center w-[90%] md:w-[607px]">
          <h2 className="font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[50px] text-[#252B42]">
            Pricing FAQs
          </h2>
          <p className="font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical physics.
          </p>
        </div>

        {/* FAQ Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center md:items-start gap-2 p-4 md:p-[25px] bg-white rounded-lg"
            >
              <h3 className="text-base font-bold leading-6 flex items-center text-[#252B42]">
                <AiOutlineRight className='text-blue-400 pr-2 text-2xl' /> The quick fox jumps over the lazy dog
              </h3>
              <p className="text-sm text-[#737373] leading-5">
                Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet
                sent. Reelit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-xl font-bold leading-7 text-[#737373]">
            Haven&apos;t got your answer? Contact our support
          </h3>
        </div>

        

      </div>
    </div>
  );
};

export default PricingFAQ;
