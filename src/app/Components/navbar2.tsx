

// 'use client';

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faBars, faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Solid icons
// import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'; // Regular icons
// import Link from 'next/link'; // Import Link from Next.js

// const Navbar = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
//   const [isMenuOpen, setMenuOpen] = useState(false); // Mobile menu state

//   // Toggle dropdown visibility
//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   // Toggle mobile menu visibility
//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
//       {/* Main Navbar with bottom shadow and hover effect */}
//       <div className="w-full h-[70px] bg-[#FFFFFF] text-[#737373] flex justify-between items-center px-6 overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:bg-[#F0F8FF] border-y-gray-300 border hover:text-[#1E90FF]"> {/* Added hover effect and transition */}
        
//         {/* Left Section: Logo */}
//         <div className="flex items-center space-x-8">
//           <a href="/" className="text-2xl font-bold text-[#252B42]">Bandage</a>
//         </div>

//         {/* Links for larger screens (hidden on mobile) */}
//         <div className="hidden lg:flex items-center space-x-6 text-[#737373] font-bold">
//           <Link href="/" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Home</Link>
//           <Link href="/About" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">About</Link>
          
//           {/* Shop Link with Dropdown */}
//           <div className="relative">
//             <span 
//               onClick={toggleDropdown} 
//               className="cursor-pointer flex items-center space-x-1 hover:text-[#1E90FF] transition-all duration-300"
//             >
//               <span className='text-[#252B42]'>Shop</span>
//               <FontAwesomeIcon icon={faChevronDown} />
//             </span>
//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute h-[100px] top-6 left-0 w-32 bg-gray-800 text-white p-2">
//                 <Link href="/Shop" className="cursor-pointer">Shop</Link>
//               </div>
//             )}
//           </div>
          
//           <Link href="/Blog" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Blog</Link>
//           <Link href="/Contact" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Contact</Link>
//           <Link href="/Product" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Pages</Link>
//         </div>
        
//         {/* Right Section: Icons for larger screens (hidden on mobile) */}
//         <div className="hidden md:flex items-center space-x-6">
//           {/* Login/Register */}
//           <div className="flex items-center space-x-2 cursor-pointer hover:text-[#1E90FF] transition-all duration-300">
//             <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-[#23A6F0]" />
//             <span className="text-sm text-[#23A6F0]">Login/Register</span>
//           </div>

//           {/* Search Icon */}
//           <FontAwesomeIcon icon={faSearch} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />

//           {/* Wishlist Icon */}
//           <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />

//           {/* Heart Icon */}
//           <FontAwesomeIcon icon={faHeart} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />
//         </div>

//         {/* Mobile Burger Icon */}
//         <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
//           <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-[#252B42]" />
//         </div>
//       </div>

//       {/* Mobile Menu (Dropdown) */}
//       {isMenuOpen && (
//         <div className="w-full bg-white text-[#737373] font-bold md:hidden flex flex-col items-center py-4 space-y-4">
//           {/* Navigation Links */}
//           <Link href="/" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Home</Link>
//           <Link href="/About" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">About</Link>
          
//           {/* Shop Link with Dropdown */}
//           <div className="relative">
//             <span
//               onClick={toggleDropdown}
//               className="cursor-pointer flex items-center space-x-1 hover:text-[#1E90FF] transition-all duration-300"
//             >
//               <span className="text-[#252B42]">Shop</span>
//               <FontAwesomeIcon icon={faChevronDown} />
//             </span>
//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute top-8 left-0 w-full bg-gray-800 text-white p-2">
//                 <Link href="/Shop" className="cursor-pointer">Shop</Link>
//               </div>
//             )}
//           </div>

//           <Link href="/Blog" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Blog</Link>
//           <Link href="/Contact" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Contact</Link>
//           <Link href="/Product" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Pages</Link>

//           {/* Icons Section */}
//           <div className="flex flex-col items-center space-y-2 mt-4">
//             <div className="flex items-center space-x-2 cursor-pointer hover:text-[#1E90FF] transition-all duration-300">
//               <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-[#23A6F0]" />
//               <span className="text-sm text-[#23A6F0]">Login/Register</span>
//             </div>
//             <FontAwesomeIcon icon={faSearch} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />
//             <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300"  />
//             <FontAwesomeIcon icon={faHeart} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'; // Solid icons
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'; // Regular icons
import Link from 'next/link'; // Import Link from Next.js


const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Dropdown state
  const [isMenuOpen, setMenuOpen] = useState(false); // Mobile menu state
  
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
      {/* Main Navbar with bottom shadow and hover effect */}
      <div className="w-full h-[70px] bg-[#FFFFFF] text-[#737373] flex justify-between items-center px-6 overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:bg-[#F0F8FF] border-y-gray-300 border hover:text-[#1E90FF]">
        
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-8">
          <a href="/" className="text-2xl font-bold text-[#252B42]">Bandage</a>
        </div>

        {/* Links for larger screens (hidden on mobile) */}
        <div className="hidden lg:flex items-center space-x-6 text-[#737373] font-bold">
          <Link href="/" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Home</Link>
          <Link href="/About" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">About</Link>
          
          {/* Shop Link with Dropdown */}
          <div className="relative">
            <span 
              onClick={toggleDropdown} 
              className="cursor-pointer flex items-center space-x-1 hover:text-[#1E90FF] transition-all duration-300"
            >
              <span className='text-[#252B42]'>Shop</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute h-[100px] top-6 left-0 w-32 bg-gray-800 text-white p-2">
                <Link href="/Shop" className="cursor-pointer">Shop</Link>
              </div>
            )}
          </div>
          
          <Link href="/Blog" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Blog</Link>
          <Link href="/Contact" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Contact</Link>
          <Link href="/Product" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Pages</Link>
        </div>
        
        {/* Right Section: Icons for larger screens (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Login/Register */}
          <div className="flex items-center space-x-2 cursor-pointer hover:text-[#1E90FF] transition-all duration-300">
            <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-[#23A6F0]" />
            <span className="text-sm text-[#23A6F0]">Login/Register</span>
          </div>

          {/* Search Icon */}
          <FontAwesomeIcon icon={faSearch} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />

          
          {/* Cart Icon */}
      <Link href="/Cart">
      <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />
      </Link>
          {/* Heart Icon */}
          <FontAwesomeIcon icon={faHeart} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />
        </div>

        {/* Mobile Burger Icon */}
        <div className="md:hidden flex items-center cursor-pointer" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="h-6 w-6 text-[#252B42]" />
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="w-full bg-white text-[#737373] font-bold md:hidden flex flex-col items-center py-4 space-y-4">
          {/* Navigation Links */}
          <Link href="/" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Home</Link>
          <Link href="/About" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">About</Link>
          
          {/* Shop Link with Dropdown */}
          <div className="relative">
            <span
              onClick={toggleDropdown}
              className="cursor-pointer flex items-center space-x-1 hover:text-[#1E90FF] transition-all duration-300"
            >
              <span className="text-[#252B42]">Shop</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-8 left-0 w-full bg-gray-800 text-white p-2">
                <Link href="/Shop" className="cursor-pointer">Shop</Link>
              </div>
            )}
          </div>

          <Link href="/Blog" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Blog</Link>
          <Link href="/Contact" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Contact</Link>
          <Link href="/Product" className="cursor-pointer hover:text-[#1E90FF] transition-all duration-300">Pages</Link>

          {/* Icons Section */}
          <div className="flex flex-col items-center space-y-2 mt-4">
            <div className="flex items-center space-x-2 cursor-pointer hover:text-[#1E90FF] transition-all duration-300">
              <FontAwesomeIcon icon={faUser} className="h-5 w-5 text-[#23A6F0]" />
              <span className="text-sm text-[#23A6F0]">Login/Register</span>
            </div>
            <FontAwesomeIcon icon={faSearch} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />
            <Link href="/Cart">
  <FontAwesomeIcon icon={faShoppingCart} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />
</Link>

            <FontAwesomeIcon icon={faHeart} className="h-5 w-5 cursor-pointer text-[#23A6F0] hover:text-[#1E90FF] transition-all duration-300" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;