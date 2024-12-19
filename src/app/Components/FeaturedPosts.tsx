
'use client';
import React from 'react';
import Image from 'next/image';
import card from '@/app/images/card1.jpg'; 
import card2 from '@/app/images/card2.jpg';
import card3 from '@/app/images/card3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCommentAlt, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const FeaturedPosts = () => {
  return (
    <div className="flex justify-center items-center py-[112px]  overflow-hidden"> {/* Centering the container */}
      <div className="w-full max-w-[1050px] px-4"> {/* Adding max width for responsiveness */}
        
        {/* Header Section */}
        <div className="text-center mb-10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          
          {/* Card 1 */}
          <div className="w-full max-w-[328px] border border-[#E0E0E0] shadow-lg rounded-md">
            <Image src={card} alt="img1" className="w-full h-[300px] object-cover rounded-t-md" />
            <div className="px-[25px] py-[25px] flex flex-col">
              <div className="gap-[15px] flex text-[12px] font-normal leading-[16px] tracking-[0.2px]">
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
              <div className="flex justify-between py-[15px]">
                <div className="gap-[5px] flex">
                  <FontAwesomeIcon icon={faClock} className="text-[#8EC2F2] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">22 April 2021</p>
                </div>
                <div className="gap-[5px] flex">
                  <FontAwesomeIcon icon={faCommentAlt} className="text-[#2DC071] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">10 comments</p>
                </div>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-[16px] font-normal">Learn More</p>
                <FontAwesomeIcon icon={faAngleDown} className="text-[#8EC2F2] h-[14px] w-[14px]" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-full max-w-[328px] border border-[#E0E0E0] shadow-lg rounded-md">
            <Image src={card2} alt="img2" className="w-full h-[300px] object-cover rounded-t-md" />
            <div className="px-[25px] py-[25px] flex flex-col">
              <div className="gap-[15px] flex text-[12px] font-normal leading-[16px] tracking-[0.2px]">
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
              <div className="flex justify-between py-[15px]">
                <div className="gap-[5px] flex">
                  <FontAwesomeIcon icon={faClock} className="text-[#8EC2F2] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">22 April 2021</p>
                </div>
                <div className="gap-[5px] flex">
                  <FontAwesomeIcon icon={faCommentAlt} className="text-[#2DC071] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">10 comments</p>
                </div>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-[16px] font-normal">Learn More</p>
                <FontAwesomeIcon icon={faAngleDown} className="text-[#8EC2F2] h-[14px] w-[14px]" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-full max-w-[328px] border border-[#E0E0E0] shadow-lg rounded-md">
            <Image src={card3} alt="img3" className="w-full h-[300px] object-cover rounded-t-md" />
            <div className="px-[25px] py-[25px] flex flex-col">
              <div className="gap-[15px] flex text-[12px] font-normal leading-[16px] tracking-[0.2px]">
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
              <div className="flex justify-between py-[15px]">
                <div className="gap-[5px] flex">
                  <FontAwesomeIcon icon={faClock} className="text-[#8EC2F2] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">22 April 2021</p>
                </div>
                <div className="gap-[5px] flex">
                  <FontAwesomeIcon icon={faCommentAlt} className="text-[#2DC071] h-[16px] w-[16px]" />
                  <p className="font-normal text-[12px] leading-[16px] text-[#737373]">10 comments</p>
                </div>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <p className="text-[16px] font-normal">Learn More</p>
                <FontAwesomeIcon icon={faAngleDown} className="text-[#8EC2F2] h-[14px] w-[14px]" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
