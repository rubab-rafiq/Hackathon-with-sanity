import React from 'react'
import Nav from '../About/navbar'
import Hero from './hero'
import Brand from '@/app/Shop/brand'
import Faq from './faq'
import Review from '@/app/Product/review'
import Footer from '@/app/Components/footer'
const PricingPage = () => {
  return (
    <div className=' overflow-hidden'>
      <Nav/>
      <Hero/>
      <Brand/>
      <Faq/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default PricingPage
