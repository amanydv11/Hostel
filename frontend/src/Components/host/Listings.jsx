import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setListings } from '../../redux/user/userSlice'
import Loader from '../Loader'
import HostelCard from './HostelCard'
import { categories } from '../../data'

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const listings = useSelector((state) => state.listings);
  const getFeedListings = async () => {
try {
    const response = await fetch(
        selectedCategory === "All" ? `/api/properties?category=${selectedCategory}` : `/api/properties`,
        {
            method: "GET",
            credentials: "include",
        }
    );
    const data = await response.json();
    dispatch(setListings({listings:data}));
    setLoading(false);
} catch (error) {
    console.log("Error fetching listings",error.message);
}
  }
  useEffect(() => {
    getFeedListings();
  }, [selectedCategory]);
  
  return (
    <div>
      <div style={{display:"flex",gap:"60px", flexWrap:"wrap",justifyContent:"center",padding:"50px 80px"}} >
        {categories?.map((category,index) => (
            <div key={index} className={`flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-md p-2 ${category.label === selectedCategory ? "selected" : ""}`}
            onClick={() => setSelectedCategory(category.label)} >
                <div className="text-2xl"><category.icon size={20} /></div>
                <p className='text-[18px] font-semibold'>{category.label}</p>
               
            </div>
        ))}
      </div>

      {loading ? (
        <Loader />
      ) : (
        <div style={{display:"flex",gap:"6px", flexWrap:"wrap",justifyContent:"center",padding:"0 60px 120px"}} >
          {listings && listings.map(
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
              booking=false
            }) => (
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
            )
          )}
        </div>
      )}
    </div>
  )
}

export default Listings
