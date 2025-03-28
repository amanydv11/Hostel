import React from 'react'
import { categories } from '../data'
import { Link } from 'react-router-dom'
import "./Categories.css"
const Categories = () => {
  return (
    <div className="categories">
    <h1 className='text-4xl font-bold mb-4 font-serif'>Explore Top Categories</h1>
    <p className='text-gray-600 mb-8 text-lg'>
      Explore our wide range of vacation rentals that cater to all types of
      travelers. Immerse yourself in the local culture, enjoy the comforts of
      home, and create unforgettable memories in your dream destination.
    </p>

    <div className="categories_list">
      {categories?.slice(1, 5).map((category, index) => (
        <Link key={index} to={`/properties/category/${category.label}`}>
          <div className="category " >
            <img src={category.img} alt={category.label} />
            <div className="overlay"></div>
            <div className="category_text">
              <div className="category_text_icon"><category.icon size={30}/></div>
              <p className=''>{category.label}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default Categories
