
import React from 'react';
import Image from 'next/image';
import Videocard from '@/app/images/about/Video card.png';

const ImageComponent = () => {
  return (
    <div className="w-full h-auto my-10  bg-[#ffffff] relative  flex justify-center items-center py-10">
      <div className="w-full max-w-[1050px] h-auto px-4">
        <Image src={Videocard} alt="VideoCard" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ImageComponent;
