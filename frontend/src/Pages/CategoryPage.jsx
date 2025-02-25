import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {setListings} from '../redux/listingsSlice'
import Loader from '../Components/Loader'
import HostelCard from '../Components/host/HostelCard'


const CategoryPage = () => {
  const { category } = useParams()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const {listings} = useSelector((state)=>state.listings)
const getFeedListings = async()=>{
  try {
    const res = await fetch(`/api/properties?category=${category}`,
      {
        method:"GET",
        credentials:"include",
      }
    )
    const data = await res.json()
    dispatch(setListings({listings:data}))
    setLoading(false)
  } catch (error) {
    console.log("fetch listing failed",error.message)
  }
}

  useEffect(()=>{
    getFeedListings()
  },[category])
  return loading ? (
    <Loader/>
  ) : (
    <>
    <h1 className='text-2xl font-bold'>{category} listings</h1>
    <div className="">
      {listings.map((
{
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
              creator={creator}
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
    </>
  )

}

export default CategoryPage
