import React from 'react'
import {useSelector} from 'react-redux'
import HostelCard from './host/HostelCard'
const Userwishlist = () => {
  const {currentUser} = useSelector((state)=>state.user)
  const wishlist = currentUser?.wishList
  return (
    <div>
      <h1 className='text-5xl text-gray-600 mt-[40px] ml-[100px] font-semibold font-serif'> Your Wish List</h1>
      <hr className=' ml-10 mr-10 mt-2 border-2 border-gray-300 ' />
      <div style={{
        padding: '0 100px 120px',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '25px',
      }} >
        {wishlist?.map(
          ({
            _id,
            creator,
            listingPhotoPaths,
            city,
            province,
            country,
            category,
            type,
            price,
            booking = false,
          })=>(
            <HostelCard
            listingId={_id}
            cr  eator={creator}
            listingPhotoPaths={listingPhotoPaths}
            city={city}
            province={province}
            country={country}
            category={category}
            type={type}
            price={price}
              booking={booking}
            />
        ))}
      </div>
    </div>
  )
}

export default Userwishlist
