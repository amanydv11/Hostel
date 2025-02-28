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
      console.log(data);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 mb-5 sm:px-8 md:px-15 ">
      {Array.isArray(propertyList) && propertyList.length > 0 ? (
          propertyList.map((property) => (
            <HostelCard
              key={property.propertyId._id}
              propertyId={property.propertyId._id}
              creator={property.hostId._id}
              listingPhotoPaths={property.propertyId.listingPhotoPaths}
              city={property.propertyId.city}
              province={property.propertyId.province}
              country={property.propertyId.country}
              category={property.propertyId.category}
              startDate={property.startDate}
              endDate={property.endDate}
              totalPrice={property.totalPrice}
              booking={true}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No properties found.
          </p>
        )}
      </div>
    </>
  );
};

export default PropertyList;
