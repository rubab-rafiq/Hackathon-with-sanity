import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const TopNavbar = () => {
  return (
    <div className="w-full hidden h-12 bg-[#238560] font-bold text-white md:flex justify-between items-center px-6">
      {/* Left Section */}
      <div className="flex items-center space-x-6">
        {/* Phone Icon and Phone Number */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faPhoneAlt} className="h-5 w-5" />
          <span className="text-sm">(225) 555-0118</span>
        </div>
        
        {/* Address Icon and Address */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="h-5 w-5" />
          <span className="text-sm">michelle.rivera@example.com</span>
        </div>
      </div>

      {/* Center Section */}
      <div className="text-center text-sm font-medium">
        <span>Follow Us and get a chance to win 80% off</span>
      </div>

      {/* Right Section - Social Media Icons */}
      <div className="flex items-center space-x-4">
        <span className="text-sm">Follow Us:</span>
        {/* Facebook Icon */}
        <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5 hover:text-blue-600 cursor-pointer" />
        {/* Twitter Icon */}
        <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 hover:text-blue-400 cursor-pointer" />
        {/* Instagram Icon */}
        <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 hover:text-pink-600 cursor-pointer" />
        {/* YouTube Icon */}
        <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 hover:text-red-600 cursor-pointer" />
      </div>
    </div>
  );
};

export default TopNavbar;
