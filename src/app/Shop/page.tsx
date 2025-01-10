
import React from 'react';
import Navbar from '@/app/Shop/navbar1';
import Navbar2 from '@/app/Components/navbar2';
import Hero from '@/app/Shop/hero';
import Footer from '@/app/Components/footer';
import Brand from "@/app/Shop/brand";
import Card from '@/app/Shop/card';


const Shoppage = () => {
  return (
    <div className=' overflow-hidden'>
      <Navbar/>
      <Navbar2/>
      <Hero/>
      <Card/>
      <Brand/>
      <Footer/>
    </div>
  );
};

export default Shoppage;
