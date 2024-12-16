import React from 'react'
import Image from 'next/image'
import img from "@/app/images/about/image.png";
const WorkwithUs = () => {
  return (
    <div>
        <div className="w-screen  h-[636px] bg-[#2A7CC7] flex justify-center items-center relative">
      <div className="w-[70%]  md:w-screen flex justify-between items-center lg:flex-row gap-[30px] px-4 lg:px-0">

        {/* Text Section */}
        <div
          className=" md:absolute md:left-[15%] w-[350px] md:w-[538px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left">
          <h5 className="text-[16px] font-bold leading-[24px] text-[#FFFFFF]">
            WORK WITH US
          </h5>
          <h2 className="text-[40px] font-bold leading-[50px] lg:leading-[50px] text-[#FFFFFF]">
            Now Let&apos;s Grow Yours
          </h2>
          <h4 className="text-[14px] font-normal leading-[20px] lg:leading-[20px] text-[#FFFFFF]">
            The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th.
          </h4>
          <button
            className="w-[132px] h-[52px] text-[14px] text-bold text-[#FAFAFA] border-2 border-[#FAFAFA] rounded">
                Button
            </button>
        </div>

        {/* Image Section */}
        <div className="absolute hidden lg:flex right-0 w-[507px] h-[636px]">
          <Image
            src={img}
            alt="image"
            className="object-cover w-full h-full"/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WorkwithUs
