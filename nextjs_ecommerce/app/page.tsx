import React from 'react'
import Hero from '../Components/home/Hero'
import CategorySection from '../Components/home/CategorySections'
import ProductSection from '../Components/home/ProductSection'
const HomePage = () => {
  return (
    <div>
      <Hero/>
      <CategorySection/>
      <ProductSection title="Featured Products"/>
      <ProductSection title="Best Selling Products"/>
      <ProductSection title="New Arrivals"/>
    </div>
  )
}

export default HomePage
