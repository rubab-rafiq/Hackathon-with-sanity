


import { RxSwitch } from "react-icons/rx";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";  // FaCheckSquare import kiya gaya hai

export default function PricingPage() {
  return (
    <div className="font-sans text-gray-700 bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-100">
        <p className="font-bold text-[24px] text-[#737373]">PRICING</p>
        <h2 className="text-[58px] font-extrabold text-gray-800 mb-4 leading-[80px]">
          Simple Pricing
        </h2>

        <h6 className="text-sm font-bold flex items-center gap-2 justify-center">
          <Link href="/" className="text-[#252B42]">
            Home
          </Link>
          <IoIosArrowForward className="text-[#BDBDBD]" />
          <Link href="/Pricing" className="text-[#BDBDBD]">
            Pricing
          </Link>
        </h6>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-center text-3xl font-bold text-gray-800 mb-6">
          Pricing
        </h3>
        <p className="text-center text-gray-600 mb-12">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <h5 className="text-lg font-bold text-gray-800">Monthly</h5>
          <RxSwitch className="text-3xl text-blue-500" />
          <h5 className="text-lg font-bold text-gray-800">Yearly</h5>
          <button className="bg-[#B2E3FF] w-[109px] text-[#23A6F0] h-[44px] rounded-[37px]">Save 25%</button>
        </div>

        {/* Pricing Cards */}
        <div className="flex justify-center items-center flex-col md:flex-row ">
          {/* Free Plan */}
          <div className="border rounded-lg bg-white p-6 text-center gap-4 border-sky-500 flex flex-col shadow-md hover:shadow-lg transition-shadow h-[350px] w-[300px] mb-10">
            <h3 className="text-2xl font-bold text-[#252B42]">FREE</h3>
            <h5 className="text-base font-bold leading-6 text-[#737373] mt-2">
              Organize across all <br /> apps by hand
            </h5>
            <h2 className="text-[40px] leading-[50px] font-bold text-[#23A6F0] mt-4">
              0<span className="text-2xl">$</span>{" "}
            </h2>
            <p className="text-[#23A6F0]">Per Month</p>
            <p className="flex items-center justify-center text-green-500">
              <FaCheckCircle className="mr-2 text-green-500 text-2xl" /> Unlimited product updates
            </p>
          </div>

          {/* Standard Plan */}
          <div className="border  border-sky-500 rounded-lg bg-[#252842] text-white p-8 text-center shadow-lg hover:shadow-xl transition-shadow h-[450px] w-[350px] transform translate-y-[-20px]">
            <h4 className="text-2xl font-bold mb-6">STANDARD</h4>

            <h5 className="text-base font-bold leading-6 text-[white] mt-2">
              Organize across all <br /> apps by hand
            </h5>
            <h2 className="text-[40px] leading-[50px] font-bold text-[#23A6F0] m-4">
              9.99<span className="text-2xl">$</span>{" "}
            </h2>
            <p className="text-[#23A6F0]">Per Month</p>

            <p className="font-medium mb-4 mt-4 text-white flex items-center justify-center">
              <FaCheckCircle className="mr-2 text-green-500 text-2xl" /> Unlimited product updates
            </p>
            <p className="text-white font-medium mb-6 flex items-center justify-center">
              <FaCheckCircle className="mr-2 text-green-500 text-2xl" /> Unlimited product updates
            </p>
          </div>

          {/* Premium Plan */}
       
             <div className=" rounded-lg bg-white p-6 text-center gap-4 border border-sky-500 flex flex-col shadow-md hover:shadow-lg transition-shadow h-[350px] w-[300px] mb-10">
            <h3 className="text-2xl font-bold text-[#252B42]">PREMIUM</h3>
            <h5 className="text-base font-bold leading-6 text-[#737373] mt-2">
              Organize across all <br /> apps by hand
            </h5>
            <h2 className="text-[40px] leading-[50px] font-bold text-[#23A6F0] mt-4">
              19.99<span className="text-2xl">$</span>{" "}
            </h2>
            <p className="text-[#23A6F0]">Per Month</p>
            <p className="flex items-center justify-center text-green-500">
              <FaCheckCircle className="mr-2 text-green-500 text-2xl" /> Unlimited product updates
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
