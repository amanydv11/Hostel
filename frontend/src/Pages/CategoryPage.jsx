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
  const properties = useSelector((state) => state.user.properties);
  const getFeedListings = async () => {
try {
    const response = await fetch(`/api/properties?category=${category}` ,
        {
            method: "GET",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        },
        
    );
    const data = await response.json();
    dispatch(setProperties({properties:data}));
    setLoading(false);
} catch (error) {
    console.log("Error fetching listings",error.message);
}
  }
  useEffect(() => {
    getFeedListings();
  }, [category]);
  return loading ? (
    <Loader/>
  ) : (
    <>
    <h1 className='text-2xl font-serif sm:text-xl md:text-3xl font-semibold px-4 my-4  text-center text-gray-500'>{category} </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 mb-5 sm:px-8 md:px-15  ">
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
})=>( <div className="w-full flex justify-center">
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
        </div>
      ))}
    </div>
    </>
  )

}

export default CategoryPage
