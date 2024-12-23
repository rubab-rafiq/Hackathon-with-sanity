import React from 'react'
import TopNavbar from '../Shop/navbar1'
import Navbar from '../Components/navbar2'
import Hero from './hero'
import Review from './reviews'
import Sellerproduct from './seller-product'
import Brand from '@/app/Shop/brand'
import Footer from '@/app/Components/footer'
const BlogPage = () => {
  return (
    <div>
      <TopNavbar/>
      <Navbar/>
      <Hero/>
      <Review/>
      <Sellerproduct/>
      <Brand/>
      <Footer/>
    </div>
  )
}

export default BlogPage
