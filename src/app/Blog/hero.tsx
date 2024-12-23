
"use client";
import { FaStar, FaRegStar } from "react-icons/fa";
import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";
import Product1 from "@/app/images/blog/product1..png";
import Product2 from "@/app/images/blog/product2.jpg.png";

const ProductPage = () => {
  // State to track which image is currently displayed
  const [currentImage, setCurrentImage] = useState(Product1);

  // Function to handle image switching
  const handlePrevClick = () => {
    setCurrentImage(Product1); // Switch to the first image
  };

  const handleNextClick = () => {
    setCurrentImage(Product2); // Switch to the second image
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="bg-[#FAFAFA] py-6 lg:h-[92px] h-[202px] flex justify-start items-center lg:items-start">
          <div className="flex items-center gap-2.5 lg:py-2.5 ml-10">
            <Link
              href="/"
              className="text-[#252B42] text-[14px] leading-[24px] tracking-[0.1px] font-bold"
            >
              Home
            </Link>

            <div className="flex items-center gap-1">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="text-[#BDBDBD] h-3 w-3"
              />
            </div>

            <Link
              href="/Shop"
              className="text-[#BDBDBD] text-[14px] leading-[24px] tracking-[0.1px] font-bold"
            >
              Shop
            </Link>
          </div>
        </div>

        {/* Product Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div>
              <div className="relative">
                {/* Display the current image */}
                <Image
                  src={currentImage} // Use the state for current image
                  alt="Modern Wing Phone"
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={handlePrevClick} // Handle left arrow click
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  <FaChevronLeft className="text-gray-600" />
                </button>
                <button
                  onClick={handleNextClick} // Handle right arrow click
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200"
                >
                  <FaChevronRight className="text-gray-600" />
                </button>
              </div>
              {/* Thumbnail Section */}
              <div className="flex space-x-4 mt-4">
                <Image
                  src={Product2}
                  alt="Thumbnail 1"
                  className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
                  onClick={() => setCurrentImage(Product2)} // Thumbnail click
                />
                <Image
                  src={Product1}
                  alt="Thumbnail 2"
                  className="w-16 h-16 rounded-lg border border-gray-300 cursor-pointer"
                  onClick={() => setCurrentImage(Product1)} // Thumbnail click
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="gap-6 flex flex-col">
              <h4 className="text-2xl font-normal text-gray-800 mt-4">
                Floating Phone
              </h4>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {/* Display 4 filled stars */}
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
                  <FaStar className="text-yellow-400" />
  
                  {/* Display 1 unfilled star */}
                  <FaRegStar className="text-yellow-400" />
                </div>

                <span className="text-[#737373] text-[14px] font-bold ml-2">10 Reviews</span>
              </div>
              <p className="text-xl font-bold text-[#252B42] mt-4">
                $1,139.33
              </p>
              <p className="text-[#737373] text-[14px] font-bold mt-2">Availability : <span className="text-[#23A6F0]">In Stock</span></p>
              <p className="text-[#858585] mt-4 font-normal">
                Met minim Mollie non desert Alamo est sit cliquey dolor do<br className=" hidden lg:flex"/> met
                sent. RELIT official consequent door ELINI RELIT Mollie.<br className=" hidden lg:flex"/>
                Excitation venial consequent sent nostrum met.
              </p>
              <div className="mt-4">
                <hr className="border border-[#BDBDBD]" />
                <div className="flex space-x-4 mt-12">
                  <button className="w-8 h-8 bg-blue-500 rounded-full border border-gray-300"></button>
                  <button className="w-8 h-8 bg-green-500 rounded-full border border-gray-300"></button>
                  <button className="w-8 h-8 bg-orange-500 rounded-full border border-gray-300"></button>
                  <button className="w-8 h-8 bg-black rounded-full border border-gray-300"></button>
                </div>
              </div>
              <div className="flex space-x-4 mt-14">
                <button className="bg-[#23A6F0] text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700">
                  Select Options
                </button>
                <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
                  <FaHeart className="text-gray-600" />
                </button>
               
                <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
                  <FaShoppingCart className="text-gray-600" />
                </button>
                <button className="bg-gray-100 p-3 rounded-[50%] shadow-md hover:bg-gray-200">
                  <FaEye className="text-gray-600" /> {/* Eye icon added */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
