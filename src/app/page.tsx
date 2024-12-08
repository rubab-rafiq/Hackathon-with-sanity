import React from 'react'
import Footer from './Components/footer';
import Hero from './Components/hero';
import Editors from './Components/editors';
import Seller from './Components/seller';
import TopNavbar from './Components/navbar1';
import Navbar2 from './Components/navbar2';
import ClassicProduct from './Components/classicproduct';
import Universe from './Components/universe';
import FeaturedPosts from './Components/FeaturedPosts';
const Home = () => {
  return (
    <div>
      <TopNavbar/>
      <Navbar2/>
      <Hero/>
      <Editors/>
      <Seller/>
      <ClassicProduct/>
      <Universe/>
      <FeaturedPosts/>
      <Footer/>
    </div>
  )
}

export default Home
