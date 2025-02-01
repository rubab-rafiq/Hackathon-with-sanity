
'use client'
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faChevronDown, faShoppingCart, faUser, faHeart } from "@fortawesome/free-solid-svg-icons"; // Solid icons
import Link from "next/link"; // Import Link from Next.js
import Search from "./search";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  return (
    <>
      <div className="w-full h-[70px] bg-white text-gray-700 flex justify-between items-center px-8 py-4 shadow-lg hover:bg-blue-50 transition-all duration-300 ease-in-out">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-6">
          <Link href="/" className=" text-2xl font-bold text-[#252B42] hover:text-blue-600 transition-colors duration-300">Bandage</Link>
        </div>

        {/* Main Navbar Links (Desktop View) */}
        <div className="hidden lg:flex items-center space-x-8 text-base font-semibold text-gray-700 hover:text-blue-600 transition-all duration-300">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/About" className="hover:text-blue-600">About</Link>
          <div className="relative">
            <span onClick={toggleDropdown} className="flex items-center space-x-1 cursor-pointer hover:text-blue-600">
              <span className="text-blue-900">Shop</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-blue-900" />
            </span>
            {isDropdownOpen && (
              <div className="absolute top-6 left-0 w-32 bg-gray-800 text-white p-2 rounded-md shadow-lg">
                <Link href="/Shop" className="block hover:text-blue-400">Shop</Link>
              </div>
            )}
          </div>
          <Link href="/Blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/Contact" className="hover:text-blue-600">Contact</Link>
        </div>

        {/* Right Section: Icons (Desktop View) */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
            <FontAwesomeIcon icon={faUser} className="h-4 w-4 text-blue-500 hover:text-blue-400" />
            <span className="text-sm text-blue-500">Login/Register</span>
          </div>
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5 cursor-pointer text-blue-500 hover:text-blue-400" onClick={toggleSearch} />
          <Link href="/Cart">
            <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 cursor-pointer text-blue-500 hover:text-blue-400" />
          </Link>
          <Link href="/wishlist">
            <FontAwesomeIcon icon={faHeart} className="h-5 w-5 cursor-pointer text-blue-500 hover:text-blue-400" />
          </Link>
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="h-7 w-7 text-blue-900" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="w-full bg-white text-gray-700 font-semibold md:hidden flex flex-col items-center py-4 space-y-4 shadow-lg">
          <Link href="/" className="cursor-pointer hover:text-blue-600">Home</Link>
          <Link href="/About" className="cursor-pointer hover:text-blue-600">About</Link>
          <div className="relative">
            <span onClick={toggleDropdown} className="cursor-pointer flex items-center space-x-1 hover:text-blue-600">
              <span className="text-blue-900">Shop</span>
              <FontAwesomeIcon icon={faChevronDown} className="text-blue-900" />
            </span>
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 w-full bg-gray-800 text-white p-2 rounded-md">
                <Link href="/Shop" className="block hover:text-blue-400">Shop</Link>
              </div>
            )}
          </div>
          <Link href="/Blog" className="cursor-pointer hover:text-blue-600">Blog</Link>
          <Link href="/Contact" className="cursor-pointer hover:text-blue-600">Contact</Link>

          {/* Mobile Icons for Login, Search, Cart, and Wishlist */}
          <div className="flex flex-col items-center space-y-4 mt-6">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600">
              <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-blue-500 hover:text-blue-400" />
              <span className="text-sm text-blue-500">Login/Register</span>
            </div>
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 cursor-pointer text-blue-500 hover:text-blue-400" onClick={toggleSearch} />
            <Link href="/Cart">
              <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 cursor-pointer text-blue-500 hover:text-blue-400" />
            </Link>
            <Link href="/wishlist">
              <FontAwesomeIcon icon={faHeart} className="h-5 w-5 cursor-pointer text-blue-500 hover:text-blue-400" />
            </Link>
          </div>
        </div>
      )}

      {/* Show Search Bar in Mobile View */}
      {showSearch && <Search />}
    </>
  );
};

export default Navbar;
