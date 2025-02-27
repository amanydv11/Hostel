import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import Loader from '../Components/Loader'
import HostelCard from '../Components/host/HostelCard'
import { setProperties } from '../redux/user/userSlice'
const CategoryPage = () => {
  const { category } = useParams()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const {properties} = useSelector((state)=>state.properties)
const getFeedListings = async()=>{
  try {
    const res = await fetch(`/api/properties?category=${category}`,
      {
        method:"GET",
        credentials:"include",
      }
    )
    const data = await res.json()
    dispatch(setProperties({properties:data}))
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
          {properties.map((
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
