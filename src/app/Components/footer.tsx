
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    
     <div className='h-[1342px] w-[1342px] bg-[#FFFFFF] lg:w-[auto] lg:h-[488px] relative  overflow-hidden'>
      <br/>
      <br/>
       <div className='w-auto h-[173px] bg-[#FAFAFA] lg:w-[full] lg:h-[142px] relative'>
         <div className=' w-[325px] h-[175.5px]  pt-10 pb-10 lg:w-[1050px] lg:absolute lg:left-[195px] lg:h-[138px]'>
           <div className='w-[243px] h-[93.5px] left-[44px]  text-center absolute mb-[11.5px] gap-[11.5px] flex flex-col lg:flex-row lg:gap-[577.5px] lg:justify-between'>
          
             <div className='flex flex-col lg:flex-row '>
               <h1 className='w-[236px] h-[58px] gap-2.5  flex font-bold leading-[32px] text-[24px] text-[#252B42] tracking-[0.1px]'>
                 Bandage
               </h1>

            </div>
   

            {/* Social Media Icons Section */}
            <div className='flex gap-4  '>
              {/* Facebook Icon */}
              <FontAwesomeIcon icon={faFacebook} className="text-sky-500 w-[24px] h-[24px]  hover:text-blue-900 transition-colors duration-300" />
              {/* Instagram Icon */}
              <FontAwesomeIcon icon={faInstagram} className="text-sky-500 w-[24px] h-[24px]  hover:text-red-400 transition-colors duration-300" />
              {/* Twitter Icon */}
              <FontAwesomeIcon icon={faTwitter} className="text-sky-500 w-[24px] h-[24px]  hover:text-blue-500 transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    



<footer className="bg-[#FFFFFF] h-[1071px] top-[173px] lg:w-[1440px] lg:h-[272px] lg:top-[142px] ">
    <div className="mx-auto w-full max-w-screen-xl relative">
      <div className="grid grid-cols-1  gap-[30px]  justify-between 
       lg:py-[50px]  py-[70px] md:grid-cols-3 lg:grid-cols-5  lg:gap-[0px] absolute lg:left-[46px] lg:[195px]">
        <div className='w-[148px] h-[170px] gap-5 flex flex-col '>
        
           <h5 className='font-bold leading-[24px] tracking-[0.1px] text-[16px]'>Company Info</h5>
            <ul className='text-[#737373] leading-6 tracking-[0.2px] font-bold text-[14px] flex flex-col gap-2.5 '>
                <li className=' hover:text-blue-400 transition-colors duration-300'>About Us</li>
                <li className=' hover:text-blue-400 transition-colors duration-300'>Carrier</li>
                <li className=' hover:text-blue-400 transition-colors duration-300'>We are hiring</li>
                <li className=' hover:text-blue-400 transition-colors duration-300'>Blog</li>
            </ul>
        </div>
        <div className='w-[148px] h-[170px] gap-5 flex flex-col '>
        
        <h5 className='font-bold leading-[24px[ tracking-[0.1px] text-[16px]'>Legal</h5>
         <ul className='text-[#737373] leading-6 tracking-[0.2px] font-bold text-[14px] flex flex-col gap-2.5'>
                 <li className=' hover:text-blue-400 transition-colors duration-300'>About Us</li>
                <li className=' hover:text-blue-400 transition-colors duration-300'>Carrier</li>
                <li className=' hover:text-blue-400 transition-colors duration-300'>We are hiring</li>
                <li className=' hover:text-blue-400 transition-colors duration-300'>Blog</li>
         </ul>
     </div>
       
     <div className='w-[148px] h-[170px] gap-5 flex flex-col '>
        
        <h5 className='font-bold leading-[24px[ tracking-[0.1px] text-[16px]'>Features</h5>
         <ul className='text-[#737373] leading-6 tracking-[0.2px] font-bold text-[14px] flex flex-col gap-2.5'>
             <li className=' hover:text-blue-400 transition-colors duration-300'>Business Marketing</li>
             <li className=' hover:text-blue-400 transition-colors duration-300'>User Analytic</li>
             <li className=' hover:text-blue-400 transition-colors duration-300'>Live Chat</li>
             <li className=' hover:text-blue-400 transition-colors duration-300'>Unlimited Support</li>
         </ul>
     </div>
     <div className='w-[148px] h-[170px] gap-5 flex flex-col '>
        
        <h5 className='font-bold leading-[24px[ tracking-[0.1px] text-[16px]'>Resources</h5>
         <ul className='text-[#737373] leading-6 tracking-[0.2px] font-bold text-[14px] flex flex-col gap-2.5'>
             <li className=' hover:text-blue-400 transition-colors duration-300'>IOS & Android</li>
             <li className=' hover:text-blue-400 transition-colors duration-300'>Watch a Demo</li>
             <li className=' hover:text-blue-400 transition-colors duration-300'>Customers</li>
             <li className=' hover:text-blue-400 transition-colors duration-300'>API</li>
         </ul>
     </div>
  

    <div className='w-[321px] h-[131px] gap-5 flex flex-col '>
        
        <h5 className='font-bold leading-[24px[ tracking-[0.1px] text-[16px]'>Get In Touch</h5>
         <div className='h-[58px] w-[321px] flex bg-[#F9F9F9] border rounded border-[#E6E6E6] relative'>
        <input type="text" placeholder="Your Email" className='tracking-[0.2px] leading-[28px] absolute left-[20px]  top-[15px] text-[14px] font-normal text-[#737373]'/>
        <button className='bg-[#23A6F0] w-[117px] h-[58px] rounded-tr-[5px] rounded-br-[5px] text-[#E6E6E6] text-[14px] font-bold leading-[28px] tracking-[0.2px] absolute left-[204px] border'>Send</button>
        <p className='absolute left-[2px] top-[59px] text-[#737373] text-[12px] font-normal leading-[28px] tracking-[0.2px] '>Lore imp sum dolor Amit</p>
         </div>

     </div>
    </div>

      </div>
  
</footer>





<div className='w-[1550px] h-[74px] bg-[#FAFAFA] absolute lg:top-[414px]'>
<div className='relative '>
<p className='w-[193px] h-[48px] lg:w-[1050px] lg:[74px] left-[113px] text-center  pt-[25px] pb-[25px] flex gap-[213px] absolute text-[#737373] text-[14px] font-bold leading-[24px] tracking-[0.2px]'>
Made With Love By Finland All Right Reserved 
</p>
</div>
</div>
</div>


  )
}

export default Footer
