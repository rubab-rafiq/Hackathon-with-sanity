
// export default Brand;
import Image from 'next/image';
import img1 from "@/app/images/shop/brand1.png";
import img2 from "@/app/images/shop/brand2.png";
import img3 from "@/app/images/shop/brand3.png";
import img4 from "@/app/images/shop/brand4.png";
import img5 from "@/app/images/shop/brand5.png";
import img6 from "@/app/images/shop/brand6.png";

const Brand = () => {
  return (
    <div className="md:h-[175px] h-[1173px] relative bg-[#fafafa]">
      <div className="absolute top-[110px] md:top-[0px] flex flex-col md:flex-row lg:left-[195px] items-center justify-center md:justify-between gap-[60px] lg:gap-[30px] py-[50px] md:w-[1050px] w-full">
        {/* Image 1 */}
        <div className="group relative">
          <Image
            src={img1}
            alt="img1"
            className="w-[149px] h-[50px] md:w-[103px] md:h-[34px] transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-md"></div>
        </div>

        {/* Image 2 */}
        <div className="group relative">
          <Image
            src={img2}
            alt="img2"
            className="w-[139px] h-[99px] md:w-[83px] md:h-[59px] transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-md"></div>
        </div>

        {/* Image 3 */}
        <div className="group relative">
          <Image
            src={img3}
            alt="img3"
            className="w-[149px] h-[109px] md:w-[102px] md:h-[74.84px] transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-md"></div>
        </div>

        {/* Image 4 */}
        <div className="group relative">
          <Image
            src={img4}
            alt="img4"
            className="w-[149px] h-[60px] md:w-[151px] md:h-[42px] transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-indigo-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-md"></div>
        </div>

        {/* Image 5 */}
        <div className="group relative">
          <Image
            src={img5}
            alt="img5"
            className="w-[153px] h-[92px] md:w-[103.68px] md:h-[61.75px] transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-yellow-500 to-lime-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-md"></div>
        </div>

        {/* Image 6 */}
        <div className="group relative">
          <Image
            src={img6}
            alt="img6"
            className="w-[149px] h-[142px] md:w-[76px] md:h-[72px] transition duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-50 transition duration-300 rounded-md"></div>
        </div>
      </div>
  
    </div>
  );
};

export default Brand;
