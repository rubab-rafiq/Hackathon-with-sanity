

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[#FFFFFF]">
      {/* Top Section */}
      <div className="bg-[#FAFAFA] py-8">
        <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
          {/* Brand Section */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-2xl font-bold text-[#252B42] tracking-tight">
              Bandage
            </h1>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-6">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-gray-600 w-6 h-6 hover:text-blue-600 transition duration-300"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-600 w-6 h-6 hover:text-pink-500 transition duration-300"
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-600 w-6 h-6 hover:text-sky-500 transition duration-300"
            />
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <footer className="bg-[#FFFFFF] py-12">
        <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5 px-4">
          {/* Company Info */}
          <div>
            <h5 className="font-bold text-lg mb-4">Company Info</h5>
            <ul className="space-y-2 text-gray-600 text-sm font-semibold">
              <li className="hover:text-blue-400 transition-colors duration-300">
                About Us
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                Careers
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                We Are Hiring
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                Blog
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h5 className="font-bold text-lg mb-4">Legal</h5>
            <ul className="space-y-2 text-gray-600 text-sm font-semibold">
              <li className="hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                Disclaimer
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h5 className="font-bold text-lg mb-4">Features</h5>
            <ul className="space-y-2 text-gray-600 text-sm font-semibold">
              <li className="hover:text-blue-400 transition-colors duration-300">
                Business Marketing
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                User Analytics
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                Live Chat
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                Unlimited Support
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="font-bold text-lg mb-4">Resources</h5>
            <ul className="space-y-2 text-gray-600 text-sm font-semibold">
              <li className="hover:text-blue-400 transition-colors duration-300">
                iOS & Android
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                Watch a Demo
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                Customers
              </li>
              <li className="hover:text-blue-400 transition-colors duration-300">
                API
              </li>
            </ul>
          </div>


          <div className='w-[321px] h-[131px] gap-5 flex flex-col '>
        
                 <h5 className='font-bold leading-[24px[ tracking-[0.1px] text-[16px]'>Get In Touch</h5>
                  <div className='h-[58px] w-[321px] flex bg-[#F9F9F9] border shadow-gray shadow-xl rounded border-[#E6E6E6] relative'>
                 <input type="text" placeholder="Your Email" className='outline-none tracking-[0.2px] leading-[28px]  absolute left-[20px]  top-[15px] text-[14px] font-normal text-[#737373] bg-[#F9F9F9]'/>
                 <button className='bg-[#23A6F0] w-[117px] h-[58px] rounded-tr-[5px] rounded-br-[5px] text-[#E6E6E6] text-[14px] font-bold leading-[28px] tracking-[0.2px] absolute left-[204px] border'>Send</button>
                <p className='absolute left-[2px] top-[59px] text-[#737373] text-[12px] font-normal leading-[28px] tracking-[0.2px] '>Lore imp sum dolor Amit</p>
                  </div>
        
              </div>
             </div>
      </footer>

      {/* Bottom Section */}
      <div className="bg-[#FAFAFA] py-4">
        <div className="max-w-screen-lg mx-auto text-center text-gray-600 text-sm font-bold">
          Made With Love By Finland | All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
