
import React from 'react';
import Image from 'next/image';
import img1 from '@/app/images/seller/img1.png';
import img2 from '@/app/images/seller/img2.png';
import img3 from '@/app/images/seller/img3.png';
import img4 from '@/app/images/seller/img4.png';
import img5 from '@/app/images/seller/img5.png';
import img6 from '@/app/images/seller/img6.png';
import img7 from '@/app/images/seller/img7.png';
import img8 from '@/app/images/seller/img8.png';

// Sample Product Data
const products = [
  { id: 1, image: img1, title: 'Graphic Design', dept: 'English Department', price: '$16.48', discountedPrice: '$6.48' },
  { id: 2, image: img2, title: 'UI/UX Design', dept: 'Art Department', price: '$18.99', discountedPrice: '$9.99' },
  { id: 3, image: img3, title: 'Web Development', dept: 'CS Department', price: '$25.00', discountedPrice: '$15.00' },
  { id: 4, image: img4, title: 'Digital Marketing', dept: 'Marketing Dept.', price: '$20.00', discountedPrice: '$10.00' },
  { id: 5, image: img5, title: 'SEO Optimization', dept: 'CS Department', price: '$19.99', discountedPrice: '$8.99' },
  { id: 6, image: img6, title: 'Data Science', dept: 'Math Department', price: '$30.00', discountedPrice: '$20.00' },
  { id: 7, image: img7, title: 'Mobile App', dept: 'IT Department', price: '$40.00', discountedPrice: '$25.00' },
  { id: 8, image: img8, title: 'Photography', dept: 'Art Department', price: '$50.00', discountedPrice: '$35.00' },
];

// ProductCard Component
const ProductCard = ({ image, title, dept, price, discountedPrice }:any) => {
  return (
    <div className="w-full bg-white shadow-lg hover:scale-105 transition-transform">
      <Image src={image} alt={title} className="w-full h-[427px] object-cover" />
      <div className="w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center">
        <h5 className="text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">{title}</h5>
        <p className="text-[14px] font-normal text-[#737373] leading-[24px] tracking-[0.2px]">{dept}</p>
        <p className="text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]">
          {price} <span className="text-[#238560]">{discountedPrice}</span>
        </p>
        <p className="flex gap-[6px] mt-2">
          <span className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></span>
          <span className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></span>
          <span className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></span>
          <span className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></span>
        </p>
      </div>
    </div>
  );
};

// Seller Component
const Seller = () => {
  return (
    <div className="w-full px-4 lg:px-0 h-auto lg:h-[1652px] relative overflow-hidden">
      <div className="w-full lg:w-[1124px] mx-auto flex-col py-[80px] gap-[80px] flex relative text-center justify-center items-center">
        {/* Section Title */}
        <div className="w-full max-w-[607px] flex flex-col gap-[10px] justify-center items-center text-center">
          <p className="leading-[30px] text-[20px] font-normal text-[#737373] tracking-[0.2px]">Featured Products</p>
          <p className="text-[24px] font-bold text-[#252B42] leading-[32px] tracking-[0.1px]">BESTSELLER <br className='md:hidden'/>PRODUCTS</p>
          <p className="leading-[20px] text-[14px] font-normal text-[#737373] tracking-[0.2px]">
            Problems trying to resolve the <br className='md:hidden'/> conflict between
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seller;
