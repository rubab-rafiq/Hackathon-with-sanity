
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// Importing images
import img1 from '@/app/images/product/img1.png';
import img2 from '@/app/images/product/img2.png';
import img3 from '@/app/images/product/img3.png';
import img4 from '@/app/images/about/img3.png';
import img5 from '@/app/images/product/img5.png';
import img6 from '@/app/images/about/img1.png';
import img7 from '@/app/images/about/img2.png';
import img8 from '@/app/images/product/img8.png';
import img9 from '@/app/images/product/img9.png';

const Home = () => {
  // Sample Data: 9 images and icons for each card
  const data = [
    { src: img1, alt: 'img1' },
    { src: img2, alt: 'img2' },
    { src: img3, alt: 'img3' },
    { src: img4, alt: 'img4' },
    { src: img5, alt: 'img5' },
    { src: img6, alt: 'img6' },
    { src: img7, alt: 'img7' },
    { src: img8, alt: 'img8' },
    { src: img9, alt: 'img9' },
  ];

  return (
    // <div className="bg-[#ffffff] py-10 lg:py-16">
    <div className="bg-[#ffffff] py-10 lg:py-16 ">
  

      {/* Header Section */}
      <div className="text-center px-6">
        <h2 className="font-bold text-[28px] md:text-[36px] lg:text-[40px] text-[#252B42] leading-[36px] md:leading-[44px] lg:leading-[50px]">
          Meet Our Team
        </h2>
   
      </div>

      {/* Image Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 transition-transform transform hover:scale-105"
          >
            <div className="w-[316px] h-[231px] mb-4">
              <Image src={item.src} alt={item.alt} className="object-cover rounded-md" />
            </div>
            <h3 className="text-[18px] font-bold text-[#252B42]">Username</h3>
            <p className="text-[14px] text-[#737373] font-bold">Profession</p>
            <div className="flex gap-4 mt-4">
              {/* Facebook Icon */}
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-sky-500 w-[24px] h-[24px] hover:text-blue-900 transition-colors duration-300"
              />
              {/* Instagram Icon */}
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-sky-500 w-[24px] h-[24px] hover:text-red-400 transition-colors duration-300"
              />
              {/* Twitter Icon */}
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-sky-500 w-[24px] h-[24px] hover:text-blue-500 transition-colors duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
