
import React from "react";
import Image from "next/image";
import img1 from "@/app/images/about/img1.png";
import img2 from "@/app/images/about/img2.png";
import img3 from "@/app/images/about/img3.png";

// FontAwesome Icons Import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import  {faFacebook} from '@fortawesome/free-brands-svg-icons'
const Team = () => {
  return (
    <div className="bg-[#ffffff] py-10 lg:py-16">
      {/* Header Section */}
      <div className="text-center px-6">
        <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[40px] text-[#252B42] leading-[36px] md:leading-[44px] lg:leading-[50px]">
          Meet Our Team
        </h2>
        <p className="text-[#737373] font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] mt-4">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Team Members Section */}
      <div className="mt-12 flex flex-col lg:flex-row justify-center items-center gap-8 px-6 lg:px-16">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
          <div className="w-[316px] h-[231px] mb-4">
            <Image src={img1} alt="img1" />
          </div>
          <h3 className="text-[18px] font-bold text-[#252B42]">Username</h3>
          <p className="text-[14px] text-[#737373] font-bold">Profession</p>
          <div className="flex gap-4 mt-4">
                         {/* Facebook Icon */}
                       <FontAwesomeIcon icon={faFacebook} className="text-sky-500 w-[24px] h-[24px]  hover:text-blue-900 transition-colors duration-300" />
                        {/* Instagram Icon */}
                        <FontAwesomeIcon icon={faInstagram} className="text-sky-500 w-[24px] h-[24px]  hover:text-red-400 transition-colors duration-300" />
                        {/* Twitter Icon */}
                        <FontAwesomeIcon icon={faTwitter} className="text-sky-500 w-[24px] h-[24px]  hover:text-blue-500 transition-colors duration-300" />
           
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
          <div className="w-[316px] h-[231px] mb-4">
            <Image src={img2} alt="img2" />
          </div>
          <h3 className="text-[18px] font-bold text-[#252B42]">Username</h3>
          <p className="text-[14px] text-[#737373] font-bold">Profession</p>
          <div className="flex gap-4 mt-4">
                         {/* Facebook Icon */}
                            <FontAwesomeIcon icon={faFacebook} className="text-sky-500 w-[24px] h-[24px]  hover:text-blue-900 transition-colors duration-300" />
                        {/* Instagram Icon */}
                        <FontAwesomeIcon icon={faInstagram} className="text-sky-500 w-[24px] h-[24px]  hover:text-red-400 transition-colors duration-300" />
                        {/* Twitter Icon */}
                        <FontAwesomeIcon icon={faTwitter} className="text-sky-500 w-[24px] h-[24px]  hover:text-blue-500 transition-colors duration-300" />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105">
          <div className="w-[316px] h-[231px] mb-4">
            <Image src={img3} alt="img3" />
          </div>
          <h3 className="text-[18px] font-bold text-[#252B42]">Username</h3>
          <p className="text-[14px] text-[#737373] font-bold">Profession</p>
            <div className='flex gap-4  mt-4'>
                        {/* Facebook Icon */}
                        <FontAwesomeIcon icon={faFacebook} className="text-sky-500 w-[24px] h-[24px]  hover:text-blue-900 transition-colors duration-300" />
                        {/* Instagram Icon */}
                        <FontAwesomeIcon icon={faInstagram} className="text-sky-500 w-[24px] h-[24px]  hover:text-red-400 transition-colors duration-300" />
                        {/* Twitter Icon */}
                        <FontAwesomeIcon icon={faTwitter} className="text-sky-500 w-[24px] h-[24px]  hover:text-blue-500 transition-colors duration-300" />
                      </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
