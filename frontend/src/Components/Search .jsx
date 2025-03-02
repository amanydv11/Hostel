import React,{useEffect,useState} from 'react'
import Loader from './Loader'
import { useParams } from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import HostelCard from './host/HostelCard'
import { setProperties } from '../redux/user/userSlice'
const Search  = () => {
  const [loading, setLoading] = useState(true)
  const { search } = useParams()
  const dispatch = useDispatch()
  const properties = useSelector((state) => state.user.properties);
  const getSearchListings = async () => {
    try {
      const response = await fetch(`/api/properties/search/${search}`, {
        method: "GET"
      })

      const data = await response.json()
      dispatch(setProperties({ properties: data }))
      setLoading(false)
    } catch (err) {
      console.log("Fetch Search List failed!", err.message)
    }
  }

  useEffect(() => {
    getSearchListings()
  }, [search])
  
  return loading ? (
    <Loader/>
  ) : (
    <>
    <h1 className='text-2xl font-serif sm:text-xl md:text-3xl font-semibold px-4 my-4  text-center text-gray-500'>{search} </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 mb-5 sm:px-8 md:px-15  ">
          {properties?.map((
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

export default Search 
