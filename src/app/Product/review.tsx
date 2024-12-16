
import React from "react";
import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Review = () => {
  return (
    <div className="bg-[#ffffff] lg:h-[442px]">
      <div className="py-[80px] flex gap-[96px] flex-col">
        <div className="flex flex-col gap-[30px] justify-center items-center text-center">
          <h2 className="font-bold leading-[50px] text-[40px] text-[#252B42] tracking-[0.2px] w-[332px] lg:w-[547px] h-[100px] lg:h-[50px]">
            Start your 14 days free trial
          </h2>
          <p className="font-normal leading-[20px] text-[14px] text-[#737373] tracking-[0.2px] w-[321px] h-[60px] lg:w-[411px] lg:h-[40px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
          </p>
          <button className="h-[52px] w-[186px] rounded bg-[#23A6F0] text-[#ffffff] font-bold text-[14px]">
            Try it free now
          </button>
          <div className="flex gap-[34px] w-[242px] h-[50px]">
            <FaTwitter size={30} color="#1DA1F2" />
            <FaFacebookSquare size={30} color="#1877F2" />
            <FaInstagram size={30} color="#000000" />
            <FaLinkedin size={30} color="#0077B5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
