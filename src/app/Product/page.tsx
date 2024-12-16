
import Nav from "../About/navbar";
import React from 'react'
import Team from "./Team";
import Hero from "./hero";
import Review from "./review";
import Footer from "@/app/Components/footer"
const ProductPage = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
     <Team/>
     <Review/>
     <Footer/>
    </div>
  )
}

export default ProductPage
