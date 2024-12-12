

import React from 'react';
import Image from 'next/image';
import img1 from '@/app/images/seller/img1.png';
import img2 from '@/app/images/seller/img2.png';
import img3 from '@/app/images/seller/img3.png';
import img4 from '@/app/images/seller/img4.png';
import img5 from '@/app/images/seller/img5.png';
import img6 from '@/app/images/seller/img6.png';
import img7 from '@/app/images/seller/img7.png';
import img8  from '@/app/images/seller/img8.png';

const Seller = () => {
  return (
    <div className='w-full px-4 lg:px-0 h-auto lg:h-[1652px] relative'>
      <div className='w-full lg:w-[1124px] mx-auto flex-col py-[80px] gap-[80px] flex relative'>
        {/* Section Title */}
        <div className='w-full max-w-[607px] h-[62px] flex flex-col gap-[10px] justify-center items-center text-center'>
          <p className='leading-[30px] text-[20px] font-normal text-[#737373] tracking-[0.2px]'>
            Featured Products
          </p>
          <p className='text-[24px] font-bold text-[#252B42] leading-[32px] tracking-[0.1px]'>
            BESTSELLER PRODUCTS
          </p>
          <p className='leading-[20px] text-[14px] font-normal text-[#737373] tracking-[0.2px]'>
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
          {/* Product 1 */}
          <div className='w-full bg-[#FFFFFF]'>
            <Image src={img1} alt="img1" className='w-full h-auto lg:h-[427px] object-cover' />
            <div className='w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center'>
              <h5 className='text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]'>Graphic Design</h5>
              <p className='text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]'>English Department</p>
              <p className='text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]'>$16.48 <span className='text-[#238560]'>$6.48</span></p>
              <p className='flex gap-[6px]'>
                <span className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></span>
              </p>
            </div>
          </div>

          {/* Product 2 */}
          <div className='w-full bg-[#FFFFFF]'>
            <Image src={img2} alt="img2" className='w-full h-auto lg:h-[427px] object-cover' />
            <div className='w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center'>
              <h5 className='text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]'>Graphic Design</h5>
              <p className='text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]'>English Department</p>
              <p className='text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]'>$16.48 <span className='text-[#238560]'>$6.48</span></p>
              <p className='flex gap-[6px]'>
                <span className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></span>
              </p>
            </div>
          </div>

          {/* Product 3 */}
          <div className='w-full bg-[#FFFFFF]'>
            <Image src={img3} alt="img3" className='w-full h-auto lg:h-[427px] object-cover' />
            <div className='w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center'>
              <h5 className='text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]'>Graphic Design</h5>
              <p className='text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]'>English Department</p>
              <p className='text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]'>$16.48 <span className='text-[#238560]'>$6.48</span></p>
              <p className='flex gap-[6px]'>
                <span className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></span>
              </p>
            </div>
          </div>

          {/* Product 4 */}
          <div className='w-full bg-[#FFFFFF]'>
            <Image src={img4} alt="img4" className='w-full h-auto lg:h-[427px] object-cover' />
            <div className='w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center'>
              <h5 className='text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]'>Graphic Design</h5>
              <p className='text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]'>English Department</p>
              <p className='text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]'>$16.48 <span className='text-[#238560]'>$6.48</span></p>
              <p className='flex gap-[6px]'>
                <span className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></span>
              </p>
            </div>
          </div>
        </div>

        {/* Grid Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]'>
          {/* Product 1 */}
          <div className='w-full bg-[#FFFFFF]'>
            <Image src={img5} alt="img5" className='w-full h-auto lg:h-[427px] object-cover' />
            <div className='w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center'>
              <h5 className='text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]'>Graphic Design</h5>
              <p className='text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]'>English Department</p>
              <p className='text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]'>$16.48 <span className='text-[#238560]'>$6.48</span></p>
              <p className='flex gap-[6px]'>
                <span className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></span>
              </p>
            </div>
          </div>

          {/* Product 2 */}
          <div className='w-full bg-[#FFFFFF]'>
            <Image src={img6} alt="img6" className='w-full h-auto lg:h-[427px] object-cover' />
            <div className='w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center'>
              <h5 className='text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]'>Graphic Design</h5>
              <p className='text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]'>English Department</p>
              <p className='text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]'>$16.48 <span className='text-[#238560]'>$6.48</span></p>
              <p className='flex gap-[6px]'>
                <span className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></span>
              </p>
            </div>
          </div>

          {/* Product 3 */}
          <div className='w-full bg-[#FFFFFF]'>
            <Image src={img7} alt="img7" className='w-full h-auto lg:h-[427px] object-cover' />
            <div className='w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center'>
              <h5 className='text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]'>Graphic Design</h5>
              <p className='text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]'>English Department</p>
              <p className='text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]'>$16.48 <span className='text-[#238560]'>$6.48</span></p>
              <p className='flex gap-[6px]'>
                <span className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></span>
              </p>
            </div>
          </div>

          {/* Product 4 */}
          <div className='w-full bg-[#FFFFFF]'>
            <Image src={img8} alt="img8" className='w-full h-auto lg:h-[427px] object-cover' />
            <div className='w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center'>
              <h5 className='text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]'>Graphic Design</h5>
              <p className='text-[14px] font-bold text-[#737373] leading-[24px] tracking-[0.2px]'>English Department</p>
              <p className='text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]'>$16.48 <span className='text-[#238560]'>$6.48</span></p>
              <p className='flex gap-[6px]'>
                <span className='w-[16px] h-[16px] bg-[#23A6F0] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#23856D] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#E77C40] rounded-full'></span>
                <span className='w-[16px] h-[16px] bg-[#252B42] rounded-full'></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
