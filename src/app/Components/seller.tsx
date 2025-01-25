
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";
// import { urlFor } from "@/sanity/lib/image";  // Assuming urlFor is correctly defined

// // Fetch Product Data from Sanity
// export const getProductData = async () => {
//   const response = await client.fetch(
//     `*[_type=='product']{
//       image{asset->{url}}, 
//       title, 
//       dept, 
//       price, 
//       discountPrice,
//       slug
//     }`
 
//   );
//   return response;
// };

// // Product Interface
// interface IProduct {
//   image: { asset: { url: string } };
//   title: string;
//   dept: string;
//   price: string;
//   discountPrice: string;
//   slug: { current: string };
// }

// const Seller = async () => {
//   const data: IProduct[] = await getProductData();

//   return (
//     <div className="w-full px-4 lg:px-0 h-auto relative overflow-hidden">
//       <div className="w-full lg:w-[1124px] mx-auto flex-col py-[80px] gap-[80px] flex relative text-center justify-center items-center">
//         {/* Section Title */}
//         <div className="w-full max-w-[607px] flex flex-col gap-[10px] justify-center items-center text-center">
//           <p className="leading-[30px] text-[20px] font-normal text-[#737373] tracking-[0.2px]">Featured Products</p>
//           <p className="text-[24px] font-bold text-[#252B42] leading-[32px] tracking-[0.1px]">
//             BESTSELLER <br className="md:hidden" />PRODUCTS
//           </p>
//           <p className="leading-[20px] text-[14px] font-normal text-[#737373] tracking-[0.2px]">
//             Problems trying to resolve the <br className="md:hidden" /> conflict between
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg hover:scale-105 transition-transform"
//             >
//               {/* Product Image */}
//               <Link href={`/products/${item.slug.current}`}>
//                 <Image
//                   src={urlFor(item.image).url()}  // Use the urlFor function to generate the image URL
//                   alt={item.title}
//                   width={380}
//                   height={427}
//                   className="w-full h-[427px] object-cover rounded-t"
//                 />
//               </Link>

//               {/* Product Details */}
//               <div className="w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center">
//                 <h5 className="text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">
//                   <Link href={`/products/${item.slug.current}`}>{item.title}</Link>
//                 </h5>
//                 <p className="text-[14px] font-normal text-[#737373] leading-[24px] tracking-[0.2px]">
//                   {item.dept}
//                 </p>
//                 <p className="text-[16px] font-bold text-[#BDBDBD] leading-[24px] tracking-[0.1px]">
//                   {item.price}{" "}
//                   {item.discountPrice && (
//                     <span className="text-[#238560]">{item.discountPrice}</span>
//                   )}
//                 </p>
//               </div>

//               {/* Colored Circles Below */}
//               <div className="flex gap-[6px] mb-4 mt-auto justify-center">
//                 <span className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></span>
//                 <span className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></span>
//                 <span className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></span>
//                 <span className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Seller;
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image"; // Ensure this function is defined and works properly

// Fetch Product Data from Sanity
export const getProductData = async () => {
  const response = await client.fetch(
    `*[_type=='product']{
      image{asset->{url}}, 
      title, 
      price, 
      discountPrice,
      slug,
      colors
    }`
  );
  return response;
};

// Product Interface
interface IProduct {
  image: { asset: { url: string } };
  title: string;
  price: string;
  discountPrice?: string;
  slug: { current: string };
  colors?: string[];
}

const Seller = async () => {
  const data: IProduct[] = await getProductData();

  return (
    <div className="w-full px-4 lg:px-0 h-auto relative overflow-hidden">
      <div className="w-full lg:w-[1124px] mx-auto flex-col py-[80px] gap-[80px] flex relative text-center justify-center items-center">
        {/* Section Title */}
        <div className="w-full max-w-[607px] flex flex-col gap-[10px] justify-center items-center text-center">
          <p className="leading-[30px] text-[20px] font-normal text-[#737373] tracking-[0.2px]">
            Featured Products
          </p>
          <p className="text-[24px] font-bold text-[#252B42] leading-[32px] tracking-[0.1px]">
            BESTSELLER <br className="md:hidden" />
            PRODUCTS
          </p>
          <p className="leading-[20px] text-[14px] font-normal text-[#737373] tracking-[0.2px]">
            Problems trying to resolve the <br className="md:hidden" /> conflict
            between
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg hover:scale-105 transition-transform"
            >
              {/* Product Image */}
              <Link href={`/products/${item.slug.current}`}>
                <Image
                  src={item.image.asset.url} // Directly accessing the URL
                  alt={item.title}
                  width={380}
                  height={427}
                  className="w-full h-[427px] object-cover rounded-t"
                />
              </Link>

              {/* Product Details */}
              <div className="w-full px-[25px] pt-[25px] pb-[35px] flex flex-col items-center">
                <h5 className="text-[16px] font-bold text-[#252B42] leading-[24px] tracking-[0.1px]">
                  <Link href={`/products/${item.slug.current}`}>
                    {item.title}
                  </Link>
                </h5>
                <p className="text-[18px] font-bold text-[#BDBDBD]  leading-[24px] tracking-[0.1px]">
                <span className="line-through">${item.price}</span>{" "}
                  {item.discountPrice && (
                    <span className="text-[#238560] ">
                      ${item.discountPrice}
                    </span>
                  )}
                </p>
              </div>

              {/* Colored Circles Below */}
              <div className="flex gap-[6px] mb-4 justify-center">
                {item.colors?.map((color, colorIndex) => (
                  <button
                    key={colorIndex}
                    className="w-6 h-6 rounded-full border border-gray-300"
                    style={{ backgroundColor: color }}
                    aria-label={`Color ${color}`}
                  ></button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seller;
