import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { setTripList } from "../redux/user/userSlice";
import HostelCard from "../Components/host/HostelCard";

const Trip = () => {
  const [loading, setLoading] = useState(false);
  const tripList = useSelector((state) => state.user.currentUser?.tripList);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser?._id;
  const dispatch = useDispatch();

  const getTripList = async () => {
    try {
      if (!userId) return;
      const res = await fetch(`/api/user/${userId}/trips`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      dispatch(setTripList(data));
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching trip list:", error);
    }
  };

  useEffect(() => {
    getTripList();
  }, [currentUser]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <h1 className="text-2xl font-serif sm:text-xl md:text-3xl font-semibold px-4 my-4  text-center text-gray-500">
        Your Trips
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 mb-5 sm:px-8 md:px-15  ">
        {tripList.map((trip) => (
          <div key={trip._id} className="w-full flex justify-center">
          <HostelCard
            propertyId={trip.propertyId._id}
            creator={trip.hostId._id}
            listingPhotoPaths={trip.propertyId.listingPhotoPaths}
            city={trip.propertyId.city}
            province={trip.propertyId.province}
            country={trip.propertyId.country}
            category={trip.propertyId.category}
            startDate={trip.startDate}
            endDate={trip.endDate}
            totalPrice={trip.totalPrice}
            booking={true}
          />
          </div>
        ))}
      </div>
    </>
  );
};

export default Trip;
