
// import React from 'react';
// import Image from 'next/image';

// // Static data for title, department, and price
// const productInfo = {
//   title: 'Graphic Design',
//   department: 'English Department',
//   price: '$16.48',
//   discountPrice: '$6.48',
//   colors: [
//     { bgColor: '#23A6F0' },
//     { bgColor: '#23856D' },
//     { bgColor: '#E77C40' },
//     { bgColor: '#252B42' },
//   ],
// };

// // Import images directly
// import img1 from '@/app/images/card/img1.png';
// import img2 from '@/app/images/card/img2.png';
// import img3 from '@/app/images/card/img3.png';
// import img4 from '@/app/images/card/img4.png';
// import img5 from '@/app/images/card/img5.png';
// import img6 from '@/app/images/card/img6.png';
// import img7 from '@/app/images/card/img7.png';
// import img8 from '@/app/images/card/img8.png';
// import img9 from '@/app/images/card/img9.png';
// import img10 from '@/app/images/card/img10.png';
// import img11 from '@/app/images/card/img11.png';
// import img12 from '@/app/images/card/img12.png';

// // Image data array with the imported image variables
// export const imageData = [
//   { src: img1, alt: 'img1' },
//   { src: img2, alt: 'img2' },
//   { src: img3, alt: 'img3' },
//   { src: img4, alt: 'img4' },
//   { src: img5, alt: 'img5' },
//   { src: img6, alt: 'img6' },
//   { src: img7, alt: 'img7' },
//   { src: img8, alt: 'img8' },
//   { src: img9, alt: 'img9' },
//   { src: img10, alt: 'img10' },
//   { src: img11, alt: 'img11' },
//   { src: img12, alt: 'img12' },
// ];

// const ShopPage = () => {
//   return (
//     <div className="w-full px-4 lg:px-0 h-auto lg:h-auto relative">
//       {/* Main Container */}
//       <div className="w-full lg:w-[1124px] mx-auto py-[80px] flex-col gap-[80px] flex relative">
//         {/* Grid Section for Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
//           {imageData.map((image, index) => (
//             <div key={index} className="w-full bg-[#FFFFFF] shadow-lg rounded-lg overflow-hidden group">
//               <div className="relative overflow-hidden">
//                 {/* Image */}
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   width={238} // Fixed width for images
//                   height={488} // Fixed height for images
//                   className="w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-105"
//                 />
//               </div>

//               {/* Product Info */}
//               <div className="w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center">
//                 <h5 className="text-[16px] font-bold text-[#252B42]">{productInfo.title}</h5>
//                 <p className="text-[14px] font-bold text-[#737373]">{productInfo.department}</p>
//                 <p className="text-[16px] font-bold text-[#BDBDBD]">
//                   {productInfo.price}{' '}
//                   <span className="text-[#238560]">{productInfo.discountPrice}</span>
//                 </p>

//                 {/* Color Options */}
//                 <p className="flex gap-[6px]">
//                   {productInfo.colors.map((color, colorIndex) => (
//                     <span
//                       key={colorIndex}
//                       className="w-[16px] h-[16px] rounded-full"
//                       style={{ backgroundColor: color.bgColor }}
//                     ></span>
//                   ))}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="w-full flex justify-center items-center pb-20">
//         <div className="w-[300px] h-[75px] flex justify-between items-center rounded-[7px] border-[1.35px] border-[#BDBDBD]">
//           <div className="flex justify-center items-center w-[84px] h-[74px]">
//             <h2 className="text-sm font-bold leading-6 p-[25px] text-[#BDBDBD] bg-[#F3F3F3] border-[#BDBDBD] border-y-[1px] border-r-[1px] rounded-l-[7px]">
//               First
//             </h2>
//           </div>

//           <div className="flex justify-center items-center w-[46px] h-[74px]">
//             <h2 className="text-sm font-bold leading-6 py-[25px] px-5 text-[#23A6F0] border-[#BDBDBD] border-r-[1px]">
//               1
//             </h2>
//           </div>

//           <div className="flex justify-center items-center w-[46px] h-[74px]">
//             <h2 className="text-sm font-bold leading-6 py-[25px] px-5 text-[#FFFFFF] bg-[#23A6F0] border-[#BDBDBD] border-x-[1px]">
//               2
//             </h2>
//           </div>

//           <div className="flex justify-center items-center w-[46px] h-[74px]">
//             <h2 className="text-sm font-bold leading-6 py-[25px] px-5 text-[#23A6F0] border-[#BDBDBD] border-r-[1px]">
//               3
//             </h2>
//           </div>

//           <div className="flex justify-center items-center w-[84px] h-[74px]">
//             <h2 className="text-sm font-bold leading-6 p-[25px] text-[#23A6F0]">Next</h2>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

// Fetch Product Data from Sanity
export const getProductData = async () => {
  const response = await client.fetch(
    `*[_type=='product']{
      image{asset->{url}}, 
      title, 
      dept, 
      price, 
      discountPrice,
      slug
    }`
  );
  return response;
};

// Product Interface
interface IProduct {
  image: { asset: { url: string } };
  title: string;
  dept: string;
  price: string;
  discountPrice: string;
  slug: { current: string };
}

const Seller = async () => {
  const data: IProduct[] = await getProductData();

  return (
    <div className="w-full px-4 lg:px-0 h-auto relative overflow-hidden my-10">
      <div className="w-full lg:w-[1124px] mx-auto py-[80px] flex flex-col gap-[80px] justify-center items-center">

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] md:gap-[30px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:scale-105 transition-all ease-in-out duration-300 rounded-lg overflow-hidden transform hover:shadow-xl"
            >
              {/* Product Image */}
              <Link href={`/products/${item.slug.current}`}>
                <Image
                  src={urlFor(item.image).url()}  // Use the urlFor function to generate the image URL
                  alt={item.title}
                  width={380}
                  height={427}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-t-lg"
                />
              </Link>

              {/* Product Details */}
              <div className="w-full px-[20px] pt-[15px] pb-[25px] flex flex-col items-center text-center">
                <h5 className="text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px] hover:text-[#23A6F0]">
                  <Link href={`/products/${item.slug.current}`}>{item.title}</Link>
                </h5>
                <p className="text-[14px] font-normal text-[#737373] leading-[24px] tracking-[0.2px] mt-1">
                  {item.dept}
                </p>
                <p className="text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px] mt-2">
                  {item.price}{" "}
                  {item.discountPrice && (
                    <span className="text-[#238560] line-through ml-2 text-[14px]">{item.discountPrice}</span>
                  )}
                </p>
              </div>

              {/* Colored Circles Below */}
              <div className="flex gap-[6px] mb-4 mt-auto justify-center pb-[15px]">
                <span className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></span>
                <span className="w-[16px] h-[16px] bg-[#23856D] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></span>
                <span className="w-[16px] h-[16px] bg-[#E77C40] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></span>
                <span className="w-[16px] h-[16px] bg-[#252B42] rounded-full cursor-pointer hover:opacity-80 transition-opacity"></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seller;
