

// export default FeaturedPosts;
'use client';
import React from 'react';
import Image from 'next/image';
import card from '@/app/images/card1.jpg'; 
import card2 from '@/app/images/card2.jpg';
import card3 from '@/app/images/card3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons'; // Changed dropdown icon to faAngleDown

const FeaturedPosts = () => {
  return (
    <div className="w-[1050px] h-[1044px] relative">
      <div className="w-[1050px] h-[1044px] absolute lg:left-[195px] py-[112px] gap-[80px] flex flex-col">
        
        {/* Header Section */}
        <div className="w-full max-w-[607px] h-[62px] lg:left-[195px] absolute flex flex-col gap-[10px] justify-center items-center text-center">
          <p className="leading-[24px] text-[14px] font-normal text-[#23A6F0] tracking-[0.2px]">
            Practice Advice
          </p>
          <p className="text-[40px] font-bold text-[#252B42] leading-[50px] tracking-[0.1px]">
            Featured Posts
          </p>
          <p className="leading-[20px] text-[14px] font-normal text-[#737373] tracking-[0.2px]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Cards Section */}
        <div className="w-[1045px] h-[606px] gap-[30px] grid grid-cols-1 absolute top-[308px] sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="w-[328px] h-[606px] border border-[#E0E0E0] shadow-lg rounded-md">
            <Image src={card} alt="img1" className="w-full h-[300px] object-cover rounded-t-md" />
            <div className="w-[348px] h-[308px] px-[25px] pt-[25px] pb-[35px] gap-2.5 flex flex-col">
              <div className="gap-[15px] flex h-[16px] w-[159px] text-[12px] font-normal leading-[16px] tracking-[0.2px]">
                <p className="text-[#8EC2F2]">Google</p>
                <p className="text-[#737373]">Trending</p>
                <p className="text-[#737373]">New</p>
              </div>
              <p className="font-normal text-[20px] leading-[30px] text-[#252B42] tracking-[0.2px]">
           Loudest &agrave; la Madison #1 (L&apos;integral)
           </p>

           <p className="w-[280px] h-[60px] text-[14px] font-normal leading-[20px] text-[#737373] tracking-[0.2px]">
         We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
      </p>

              <div className="flex justify-between py-[15px] w-[298px] h-[46px]">
                <div className="gap-[5px] flex">
                  {/* Clock Icon */}
                  <FontAwesomeIcon icon={faClock} className="text-[#8EC2F2] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">22 April 2021</p>
                </div>
                <div className="gap-[5px] flex">
                  {/* Comment Icon */}
                  <FontAwesomeIcon icon={faCommentAlt} className="text-[#2DC071] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">10 comments</p>
                </div>
              </div>
              {/* Learn More Button with Dropdown */}
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-[16px] font-normal">Learn More</p>
                <FontAwesomeIcon icon={faAngleDown} className="text-[#8EC2F2] h-[14px] w-[14px]" /> {/* Updated to faAngleDown */}
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[328px] h-[606px] border border-[#E0E0E0] shadow-lg rounded-md">
            <Image src={card2} alt="img2" className="w-full h-[300px] object-cover rounded-t-md" />
            <div className="w-[348px] h-[308px] px-[25px] pt-[25px] pb-[35px] gap-2.5 flex flex-col">
              <div className="gap-[15px] flex h-[16px] w-[159px] text-[12px] font-normal leading-[16px] tracking-[0.2px]">
                <p className="text-[#8EC2F2]">Google</p>
                <p className="text-[#737373]">Trending</p>
                <p className="text-[#737373]">New</p>
              </div>
              <p className="font-normal text-[20px] leading-[30px] text-[#252B42] tracking-[0.2px]">
           Loudest à la Madison #1 (L&apos;integral)
</p>

<p className="w-[280px] h-[60px] text-[14px] font-normal leading-[20px] text-[#737373] tracking-[0.2px]">
  We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
</p>

              <div className="flex justify-between py-[15px] w-[298px] h-[46px]">
                <div className="gap-[5px] flex">
                  {/* Clock Icon */}
                  <FontAwesomeIcon icon={faClock} className="text-[#8EC2F2] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">22 April 2021</p>
                </div>
                <div className="gap-[5px] flex">
                  {/* Comment Icon */}
                  <FontAwesomeIcon icon={faCommentAlt} className="text-[#2DC071] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">10 comments</p>
                </div>
              </div>
              {/* Learn More Button with Dropdown */}
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-[16px] font-normal">Learn More</p>
                <FontAwesomeIcon icon={faAngleDown} className="text-[#8EC2F2] h-[14px] w-[14px]" /> {/* Updated to faAngleDown */}
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[328px] h-[606px] border border-[#E0E0E0] shadow-lg rounded-md">
            <Image src={card3} alt="img3" className="w-full h-[300px] object-cover rounded-t-md" />
            <div className="w-[348px] h-[308px] px-[25px] pt-[25px] pb-[35px] gap-2.5 flex flex-col">
              <div className="gap-[15px] flex h-[16px] w-[159px] text-[12px] font-normal leading-[16px] tracking-[0.2px]">
                <p className="text-[#8EC2F2]">Google</p>
                <p className="text-[#737373]">Trending</p>
                <p className="text-[#737373]">New</p>
              </div>
              <p className="font-normal text-[20px] leading-[30px] text-[#252B42] tracking-[0.2px]">
  Loudest à la Madison #1 (L&apos;integral)
</p>

<p className="w-[280px] h-[60px] text-[14px] font-normal leading-[20px] text-[#737373] tracking-[0.2px]">
  We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
</p>

              <div className="flex justify-between py-[15px] w-[298px] h-[46px]">
                <div className="gap-[5px] flex">
                  {/* Clock Icon */}
                  <FontAwesomeIcon icon={faClock} className="text-[#8EC2F2] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">22 April 2021</p>
                </div>
                <div className="gap-[5px] flex">
                  {/* Comment Icon */}
                  <FontAwesomeIcon icon={faCommentAlt} className="text-[#2DC071] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">10 comments</p>
                </div>
              </div>
              {/* Learn More Button with Dropdown */}
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-[16px] font-normal">Learn More</p>
                <FontAwesomeIcon icon={faAngleDown} className="text-[#8EC2F2] h-[14px] w-[14px]" /> {/* Updated to faAngleDown */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
