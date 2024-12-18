

// export default GetInTouch;
import React from 'react'
import Image from 'next/image'
import HeroImage from "@/app/images/contact/hero.png";

import { FaTwitter, FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
const GetInTouch = () => {
    return (
        <div className='w-full h-full px-6 md:px-20 py-10 flex flex-col md:flex-row justify-between items-center'>
            {/* Left Side */}
            <div className='w-full md:w-[500px] flex flex-col justify-center text-center md:text-left items-center md:items-start gap-6'>
                <h5 className='text-sm font-bold tracking-wide text-[#252B42]'>Contact</h5>
                <h1 className='lg:text-[58px] font-bold text-[#252B42] leading-tight text-[50px]'>
                    Get in touch today!
                </h1>
                <h4 className='text-base font-normal text-[#737373]'>
                    We know how large objects will act,<br />
                    but things on a small scale
                </h4>
                <h3 className='text-lg font-bold text-[#252B42]'>
                    Phone: +451 215 215
                </h3>
                <h3 className='text-lg font-bold text-[#252B42]'>
                    Email: example@email.com
                </h3>
                <div className='flex gap-6 text-[#252B42]'>
                    <FaTwitter className='text-2xl' />
                    <FaFacebookSquare className='text-2xl' />
                    <FaInstagram className='text-2xl' />
                    <FaLinkedin className='text-2xl' />
                </div>
            </div>

            {/* Right Side */}
            <div className='w-full md:w-[600px]'>
                <Image
                    src={HeroImage}
                    alt='Hero Image'
                    className='w-full h-auto md:w-[600px] md:h-[600px] object-cover rounded-md'
                />
            </div>
        </div>
    );
};

export default GetInTouch;
