import React, {useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setProperties } from '../../redux/user/userSlice'
import Loader from '../Loader'
import HostelCard from './HostelCard'
import { categories } from '../../data'

const Listings = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const properties = useSelector((state) => state.user.properties);
  const getFeedListings = async () => {
try {
    const response = await fetch(
        selectedCategory !== "All" ? `/api/properties?category=${selectedCategory}` : `/api/properties`,
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
  }, [selectedCategory]);
  return (
    <div>
      <div style={{display:"flex",gap:"60px", flexWrap:"wrap",justifyContent:"center",padding:"50px 80px"}} >
        {categories?.map((category,index) => (
            <div style={{
              cursor: 'pointer', transition: '0.2s ease',
              backgroundColor: category.label === selectedCategory ? 'lightgray' : 'white'
             }} key={index} className={`flex flex-col items-center cursor-pointer hover:bg-gray-100 rounded-md p-2 ${category.label === selectedCategory ? "selected" : ""}`}
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
          {properties && properties.map(
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
              key={_id}
                propertyId={_id}
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
