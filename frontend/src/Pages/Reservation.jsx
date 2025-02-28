import React, { useState, useEffect } from "react";
import Loader from "../Components/Loader";
import { useDispatch, useSelector } from "react-redux";
import HostelCard from "../Components/host/HostelCard";
import { setReservationList } from "../redux/user/userSlice";
const Reservation = () => {
  const [loading, setLoading] = useState(true);
  const { currentUser } = useSelector((state) => state.user);
  const userId = currentUser._id;
  const reservationList = useSelector(
    (state) => state.user.currentUser?.reservationList
  );
  const dispatch = useDispatch();
  const getReservationList = async () => {
    try {
      const res = await fetch(`/api/user/${userId}/reservation`, {
        method: "GET",
      });
      const data = await res.json();
      dispatch(setReservationList(data));
      setLoading(false);
    } catch (error) {
      console.log("Fetch Reservation List failed!", error.message);
    }
  };
  useEffect(() => {
    getReservationList();
  }, []);
  return loading ? (
    <Loader />
  ) : (
    <>
      <h1 className="text-2xl font-serif sm:text-xl md:text-3xl font-semibold px-4 my-4  text-center text-gray-500">Your Reservation</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 mb-5 sm:px-8 md:px-15 ">
        {reservationList?.map((reservation) => (
          <HostelCard
            propertyId={reservation.propertyId._id}
            creator={reservation.hostId._id}
            listingPhotoPaths={reservation.propertyId.listingPhotoPaths}
            city={reservation.propertyId.city}
            province={reservation.propertyId.province}
            country={reservation.propertyId.country}
            category={reservation.propertyId.category}
            startDate={reservation.startDate}
            endDate={reservation.endDate}
            totalPrice={reservation.totalPrice}
            booking={true}
          />
        ))}
      </div>
    </>
  );
};

export default Reservation;
