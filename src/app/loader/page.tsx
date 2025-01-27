
import React from 'react';
import { Cloud } from 'lucide-react';

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white to-gray-50">
      <div className="relative">
        {/* Outer glowing spinning border */}
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-100 shadow-lg"></div>
        
        {/* Middle glowing soft ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-28 w-28 rounded-full bg-gradient-to-br from-blue-50 to-teal-50 opacity-50 blur-xl"></div>
        
        {/* Inner slower spinning border */}
        <div className="absolute top-0 left-0 h-32 w-32 rounded-full border-t-4 border-b-4 border-transparent animate-spin-slow border-teal-200"></div>

        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Cloud size={50} className="text-teal-400 animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
