import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'
import Testimonials from '../components/Testimonals'
import ShopAd from '../components/ShopAd'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <ShopAd/>
      <LatestCollection/>
      <BestSeller/>
      <Testimonials/>
      <OurPolicy/>
      <NewsLetterBox/>

    </div>
  )
}

export default Home