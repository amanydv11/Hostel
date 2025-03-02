import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HostelCard from "../Components/host/HostelCard";
import Loader from "../Components/Loader";
import { setPropertyList } from "../redux/user/userSlice";
const PropertyList = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser._id;
  const propertyList = useSelector(
    (state) => state.user.currentUser?.propertyList ||[]
  );
  const getPropertyList = async () => {
    try {
      const res = await fetch(`/api/user/${userId}/properties`, {
        method: "GET",
      });
      const data = await res.json();
      dispatch(setPropertyList(data));
      setLoading(false);
    } catch (error) {
      console.log("Fetch all properties failed", error.message);
    }
  };

  useEffect(() => {
    getPropertyList();
  }, [currentUser]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <h1 className="text-2xl font-serif sm:text-xl md:text-3xl font-semibold px-4 my-4  text-center text-gray-500">
        Your Property
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mb-5 sm:px-6 md:px-15">
        {propertyList?.map(
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
          }) => (
            <HostelCard
              key={_id}
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
    </>
  );
};

export default PropertyList;
