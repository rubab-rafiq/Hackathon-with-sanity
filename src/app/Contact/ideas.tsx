
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { PiArrowBendRightDownBold } from "react-icons/pi";
const PricingPlans = () => {
  return (
    <div className="font-sans text-gray-700 bg-[#FFFFFF]">
    {/* Hero Section */}
  

    {/* Pricing Section */}
    <section className="container mx-auto px-6 py-16">
    <p className="text-center text-[#252b42] mb-6 font-bold">
      VISIT OUR OFFICE
      </p>
      <h2 className="text-center text-[40px]  font-bold text-gray-800 leading-[50px] mb-12">
      We help small businesses <br/>
      with big ideas
      </h2>
     

    <div className="flex justify-center items-center flex-col md:flex-row gap-10">
      {/* Phone Card */}
       
       <div className="border rounded-lg bg-[#white] p-6 text-center gap-3  text-[#252B42] flex flex-col shadow-md hover:shadow-lg transition-shadow h-[350px] w-[300px] mb-10">
        <FaPhoneAlt className="text-[#23A6F0]  mx-auto w-[72px] h-[72px] mb-2"/>
        <p className=" text-base font-bold mb-1">georgia.young@example.com</p>
        <p className=" text-base font-bold mb-6">georgia.young@ple.com</p>
        <p className=" text-lg font-bold mb-4">Get Started</p>
        <div className="flex justify-center items-center">
    <button className="border-[#23A6F0] border rounded-[37px] w-[189px] h-[54px] text-sky-500 font-bold">
      Get Support
    </button>
  </div></div>

      {/* Location Card */}
      <div className="border rounded-lg bg-[#252B42] p-6 text-center gap-3  text-white flex flex-col shadow-md hover:shadow-lg transition-shadow h-[350px] w-[300px] mb-10">
        <FaMapMarkerAlt className="text-[#23A6F0]  mx-auto w-[72px] h-[72px] mb-2"/>
        <p className=" text-base font-bold mb-1">georgia.young@example.com</p>
        <p className=" text-base font-bold mb-6">georgia.young@ple.com</p>
        <p className=" text-lg font-bold mb-4">Get Started</p>
        <div className="flex justify-center items-center">
    <button className="border-[#23A6F0] border rounded-[37px] w-[189px] h-[54px] text-sky-500 font-bold">
      Get Support
    </button>
  </div></div>

      {/* Address Card */}
      
      <div className="border rounded-lg bg-[#white] p-6 text-center gap-3 text-[#252B42] flex flex-col shadow-md hover:shadow-lg transition-shadow h-[350px] w-[300px] mb-10">
  <FaEnvelope className="text-[#23A6F0] mx-auto w-[72px] h-[72px] mb-2" />
  <p className="text-base font-bold mb-1">georgia.young@example.com</p>
  <p className="text-base font-bold mb-6">georgia.young@ple.com</p>
  <p className="text-lg font-bold mb-4">Get Started</p>
  <div className="flex justify-center items-center">
    <button className="border-[#23A6F0] border rounded-[37px] w-[189px] h-[54px] text-sky-500 font-bold">
      Get Support
    </button>
  </div>
</div>

    </div>
    </section>
    <div className="w-full flex justify-center items-center  py-10 bg-gray-50">
        <div className=" flex flex-col items-center gap-6">
          <PiArrowBendRightDownBold className="text-5xl md:text-6xl -rotate-12 text-[#23A6F0]" />
          <h5 className="text-sm font-bold text-[#252B42]">WE CAN&apos;T WAIT TO MEET YOU</h5>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#252B42]">Let&apos;s Talk</h2>
          <button className="text-sm font-bold hover:bg-white hover:text-[#23A6F0] text-white bg-[#23A6F0] px-10 py-3 rounded">
  Try it free now
</button>

        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
