import React from 'react'

import Slide from '../Components/Slide';
import Categories from '../Components/Categories';
import Listings from '../Components/host/Listings';
const Home = () => {
  return (
    <div className=''>
      <div   >
        <Slide/>
        <Categories/>
        <Listings/>
      </div>
    </div>
  )
}

export default Home
