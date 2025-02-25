import React from 'react'
import {useSelector} from 'react-redux'
import HostelCard from './host/HostelCard'
const Userwishlist = () => {
  const wishlist = useSelector((state)=>state.user.wishlist)
  return (
    <div>
      <h1 className='text-2xl m-[40px] font-bold'> Your Wish List</h1>
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
