
      import Link from 'next/link';
      import React from 'react';
      import { IoGrid } from "react-icons/io5";
      import { TfiMenuAlt } from "react-icons/tfi";
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      import { faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
      import Image from 'next/image';
      import img1 from '@/app/images/shop/img1.png';
      import img2 from '@/app/images/shop/img2.png';
      import img3 from '@/app/images/shop/img3.png';
      import img4 from '@/app/images/shop/img4.png';
      import img5 from '@/app/images/shop/img5.png';
      
      const Hero = () => {
        return (
          <div>


            {/* Header Section */}
            <div className="bg-[#FAFAFA] py-6 lg:h-[92px] h-[202px] flex justify-center items-center lg:items-start">
        <div className="flex flex-col lg:flex-row lg:gap-[30px] w-[1049px] lg:h-[44px] h-full justify-between text-center lg:text-left">
          <h3 className="text-[#252B42] font-bold text-[24px] leading-[32px] tracking-[0.1px]">
            Shop
          </h3>

          <div className="flex items-center gap-2.5 lg:py-2.5 justify-center">
            <Link
              href="/"
              className="text-[#252B42] text-[14px] leading-[24px] tracking-[0.1px] font-bold"
            >
              Home
            </Link>

            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] h-3 w-3"
              />
            </div>

            <Link
              href="/"
              className="text-[#BDBDBD] text-[14px] leading-[24px] tracking-[0.1px] font-bold"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
            {/* Images Section */}
            <div className="py-6 bg-[#FAFAFA] flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-[1049px] px-4">
                <Image src={img1} alt="Product 1" className="w-full h-auto object-cover rounded" />
                <Image src={img2} alt="Product 2" className="w-full h-auto object-cover rounded" />
                <Image src={img3} alt="Product 3" className="w-full h-auto object-cover rounded" />
                <Image src={img4} alt="Product 4" className="w-full h-auto object-cover rounded" />
                <Image src={img5} alt="Product 5" className="w-full h-auto object-cover rounded" />
              </div>
            </div>
      
            {/* Filter Section */}
            <div className="bg-white py-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mx-auto max-w-[1049px] px-4">
                {/* Showing Results */}
                <h6 className="text-[#737373] font-bold text-[14px]">Showing all 12 results</h6>
      
                {/* Views */}
                <div className="flex items-center gap-4">
                  <p className="text-[#737373] font-bold text-[14px]">Views:</p>
                  <div className="flex gap-2">
                    <div className="flex justify-center items-center h-[46px] w-[46px] border border-[#ECECEC] rounded">
                      <IoGrid className="text-base" />
                    </div>
                    <div className="flex justify-center items-center h-[46px] w-[46px] border border-[#ECECEC] rounded">
                      <TfiMenuAlt className="text-base" />
                    </div>
                  </div>
                </div>
      
                {/* Buttons */}
                <div className="flex gap-4">
                  <button className="text-sm font-bold text-[#737373] border border-[#DDDDDD] rounded bg-[#F9F9F9] px-6 py-2">
                    Popularity
                  </button>
                  <button className="text-sm text-white bg-[#23A6F0] px-6 py-2 font-bold rounded">
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      };
      
      export default Hero;
      