
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiOutlineX, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="relative">
        {/* Navigation Wrapper */}
        <div className="w-full flex justify-center bg-white shadow-md">
          <div className="container max-w-screen-xl flex justify-between items-center px-4 md:px-6 py-3">
            {/* Brand Name */}
            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm font-bold text-[#737373] hover:text-blue-500">Home</Link>
              <Link href="/Product" className="text-sm font-bold text-[#737373] hover:text-blue-500">Product</Link>
              <Link href="/Pricing" className="text-sm font-bold text-[#737373] hover:text-blue-500">Pricing</Link>
              <Link href="/Contact" className="text-sm font-bold text-[#737373] hover:text-blue-500">Contact</Link>
            </div>

            {/* Account and Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-sm font-bold text-[#23A6F0]">Login</button>
              <button className='w-[214px] text-[14px] font-bold text-[#ffffff] h-[52px] bg-[#23A6F0] rounded-[5px] flex items-center justify-center space-x-2'>
                <span>Become a member</span>
                <HiOutlineArrowNarrowRight className="text-white text-lg" />
              </button>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center space-x-4">
              <button className="text-xl">
                <CiSearch />
              </button>
              <button className="text-xl flex items-center">
                <IoCartOutline />
                <span className="ml-1 text-sm">1</span>
              </button>
              <button
                className="text-2xl"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-white shadow-lg md:hidden z-10">
            <div className="flex flex-col items-center py-4 space-y-4">
              <Link href="/" className="text-lg font-normal text-[#737373] hover:text-blue-500">Home</Link>
              <Link href="/Product" className="text-lg font-normal text-[#737373] hover:text-blue-500">Product</Link>
              <Link href="/Pricing" className="text-lg font-normal text-[#737373] hover:text-blue-500">Pricing</Link>
              <Link href="/Contact" className="text-lg font-normal text-[#737373] hover:text-blue-500">Contact</Link>
            </div>
          </div>
        )}
      </div>

      {/* Dynamic Spacer */}
      <div
        style={{
          marginTop: menuOpen ? "200px" : "0px",
          transition: "margin-top 0.3s ease",
        }}
      ></div>
    </>
  );
};

export default Nav;
