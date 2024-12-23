

import React from 'react'
import Image from 'next/image'
import img1 from '@/app/images/blog/img1.png'
import img2 from '@/app/images/blog/img2.png'
import img3 from '@/app/images/blog/img3.png'
import img4 from '@/app/images/blog/img4.png'
import img5 from '@/app/images/blog/img5.png'
import img6 from '@/app/images/blog/im6.png'

const Sellerproduct = () => {
  return (
    <div className='bg-[#FAFAFA] w-full h-auto relative z-10 py-[48px]'>
      <div className='px-[20px] lg:px-[195px] xl:px-[250px] xxl:px-[300px]'>
        {/* Heading */}
        <div className='text-[24px] text-[#252B42] font-bold mb-[16px]'>
          BESTSELLER PRODUCTS
        </div>
        <hr className='border-[#737373] mb-[24px]' />

        {/* Product Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]'>
          {/* Product Cards */}
          {[img1, img2, img3, img4, img5, img6, img1, img2].map((img, index) => (
            <div
              key={index}
              className='bg-[#FFFFFF] rounded-[9px] shadow-lg overflow-hidden'
            >
              <Image src={img} alt={`Product ${index + 1}`} className='w-full h-[280px]' />
              <div className='py-[25px] px-[35px] gap-[10px] flex flex-col'>
                <h5 className='text-[16px] text-[#252B42] font-bold'>
                  Graphic Design
                </h5>
                <p className='text-[14px] text-[#737373] font-normal'>
                  English Department
                </p>
                <p className='px-[3px] py-[5px] gap-[5px] flex text-[16px] text-[#BDBDBD] font-bold'>
                  $16.48<span className='text-[#23856D]'>$6.48</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sellerproduct
