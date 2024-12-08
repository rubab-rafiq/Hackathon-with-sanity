
'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHeart, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; // For dropdown
import Link from 'next/link'; // Import Link from Next.js

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Main Navbar */}
      <div className="w-full h-[70px] bg-[#FFFFFF] text-[#737373] flex justify-between items-center px-6">
        
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-8">
          <div className="text-lg font-bold text-[28px] text-[#252B42]">Bandage</div>
        </div>

        {/* Links for larger screens (hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link href="/About" className="cursor-pointer">About</Link>
          
          {/* Shop Link with Dropdown */}
          <div className="relative">
            <span 
              onClick={toggleDropdown} 
              className="cursor-pointer flex items-center space-x-1"
            >
              <span className='text-[#252B42]'>Shop</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute h-[100px] top-6 left-0 w-32 bg-gray-800 text-white p-2">
                <Link href="/category1" className="block py-1">Category 1</Link>
                <Link href="/category2" className="block py-1">Category 2</Link>
                <Link href="/category3" className="block py-1">Category 3</Link>
              </div>
            )}
          </div>
          
          <Link href="/contact" className="cursor-pointer">Contact</Link>
          <Link href="/faq" className="cursor-pointer">Faq</Link>
          <Link href="/blog" className="cursor-pointer">Blog</Link>
        </div>
        
        {/* Right Section: Icons for larger screens (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Login/Register */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-[#23A6F0]" />
            <span className="text-sm text-[#23A6F0]">Login/Register</span>
          </div>

          {/* Search Icon */}
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5 cursor-pointer text-[#23A6F0]" />

          {/* Wishlist Icon */}
          <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 cursor-pointer text-[#23A6F0]" />

          {/* Heart Icon */}
          <FontAwesomeIcon icon={faHeart} className="h-5 w-5 cursor-pointer text-[#23A6F0]" />
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-[#252B42]" />
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="w-full bg-white text-black md:hidden flex flex-col items-center py-4 space-y-4">
          <Link href="/" className="cursor-pointer">Home</Link>
          <Link href="/about" className="cursor-pointer">About</Link>
          
          {/* Shop Link with Dropdown */}
          <div className="relative">
            <span
              onClick={toggleDropdown}
              className="cursor-pointer flex items-center space-x-1"
            >
              <span className="text-[#252B42]">Shop</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 w-full bg-gray-800 text-white p-2">
                <Link href="/category1" className="block py-1">Category 1</Link>
                <Link href="/category2" className="block py-1">Category 2</Link>
                <Link href="/category3" className="block py-1">Category 3</Link>
              </div>
            )}
          </div>

          <Link href="/blog" className="cursor-pointer">Blog</Link>
          <Link href="/contact" className="cursor-pointer">Contact</Link>
          <Link href="/pages" className="cursor-pointer">Pages</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
