import React from 'react'
import Footer from '@/app/Components/footer';
import Hero from '@/app/About/hero';
import Nav from '@/app/About/navbar';
import ProblemsSection from './problem';
import Customer from './customer';
import Brand from './brand';
import Team from './team';
import Image from './image';
import WorkwithUs from './workwithus';
const AboutPage = () => {
  return (
    <div>
      
      <Nav/> 
      <Hero/> 
      <ProblemsSection/>
      <Customer/>
      <Image/>
      <Team/>
      <Brand/>
      <WorkwithUs/>
      <Footer/>
    </div>
  )
}
export default AboutPage