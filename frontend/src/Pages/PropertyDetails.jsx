

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../Components/Loader";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { facilities } from "../data";

const PropertyDetails = () => {
  const [loading, setLoading] = useState(true);
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);

  const getPropertyDetails = async () => {
    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();
      console.log("Full Property Data:", data);
      console.log("Creator Data:", data.creator);

      setProperty({ ...data, photos: data.listingPhotoPaths });
      setLoading(false);
    } catch (error) {
      console.log("Error in fetching property details", error.message);
    }
  };

  useEffect(() => {
    getPropertyDetails();
  }, []);

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const start = new Date(dateRange[0].startDate);
  const end = new Date(dateRange[0].endDate);
  const dayCount = Math.round((end - start) / (1000 * 60 * 60 * 24));

  const { currentUser } = useSelector((state) => state.user);
  const customerId = currentUser?._id;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const bookingForm = {
        customerId,
        propertyId: property._id,
        hostId: property.creator._id,
        startDate: dateRange[0].startDate.toDateString(),
        endDate: dateRange[0].endDate.toDateString(),
        totalPrice: property.price * dayCount,
      };

      const res = await fetch("/api/booking/create", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingForm),
      });

      if (res.ok) {
        navigate(`/${customerId}/trips`);
      }
    } catch (error) {
      console.log("Error in booking property", error.message);
    }
  };

  return loading || !property ? (
    <Loader />
  ) : (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Property Title & Host */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-start">
        <h1 className="text-3xl font-semibold">{property.title}</h1>
      </div>

      {/* Property Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {property.photos?.map((photo, index) => (
          <img
            className="w-full h-48 object-cover rounded-md"
            key={index}
            src={photo}
            alt={`property ${index + 1}`}
          />
        ))}
      </div>

      {/* Main Details */}
      <div className="mt-6 flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{property.type}</h2>
          <h2 className="text-lg font-semibold text-gray-700">
            {property.city}, {property.province}, {property.country}
          </h2>
          <p className="mt-2 text-gray-600">
            {property.guestCount} guests · {property.bedroomCount} bedroom(s) ·{" "}
            {property.bedCount} bed(s) · {property.bathroomCount} bathroom(s)
          </p>

          <hr className="mt-4" />

          {/* Host Information */}
          <div className="flex items-center gap-4 mt-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src={
                property.creator.profilePicture ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              alt=""
            />
            <h3 className="text-lg font-semibold">
              <span className="text-gray-500">Hosted by</span>{" "}
              {property.creator.additionalDetails?.firstName || "unknown host"}
            </h3>
          </div>

          <hr className="mt-4" />

          {/* Description */}
          <h3 className="text-2xl font-semibold mt-4">Description</h3>
          <p className="mt-2 text-gray-700">{property.description}</p>

          <hr className="mt-4" />

          {/* Amenities */}
          <h3 className="text-2xl font-semibold mt-4">What this place offers</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4 text-gray-600">
            {property.amenities[0].split(",").map((item, index) => {
              const facilityItem = facilities.find(
                (facility) => facility.name === item
              );
              return (
                <div key={index} className="flex items-center gap-2">
                  {facilityItem?.icon && <facilityItem.icon size={24} />}
                  <p>{item}</p>
                </div>
              );
            })}
          </div>

          <hr className="mt-4" />

          {/* Date Selection */}
          <h3 className="text-2xl font-semibold mt-4">
            Select your stay duration
          </h3>
          <div className="mt-4">
            <DateRange ranges={dateRange} onChange={handleSelect} />
          </div>
        </div>
        <div className="shadow-lg p-4 w-full md:w-96  md:h-[380px] sm:h-[300px] rounded-md mb-4">
          <div className="text-2xl font-semibold">
            ₹ {property.price} <span className="text-gray-500 text-sm">/month</span>
          </div>
          <div className="mt-4 border rounded-lg p-4">
            <div className="flex justify-between mb-2">
              <div>
                <span className="text-gray-500 text-sm block">CHECK-IN</span>
                <span className="text-gray-800 text-sm block">
                  {dateRange[0].startDate.toDateString()}
                </span>
              </div>
              <div>
                <span className="text-gray-500 text-sm block">CHECK-OUT</span>
                <span className="text-gray-800 text-sm block">
                  {dateRange[0].endDate.toDateString()}
                </span>
              </div>
            </div>
          </div>

        
          <button
            className="bg-red-500 w-full mt-4 text-xl text-white py-2 rounded-md"
            type="submit"
            onClick={handleSubmit}
          >
            Reserve
          </button>

          <p className="text-sm text-gray-500 mt-2 text-center">
            You won’t be charged yet
          </p>
   <div className='flex mt-5 items-center justify-between'>
 <div >
            {
                dayCount > 1 ?  
                (
                  <h2 className='ml-[10px] underline text text-black'>
                    ₹{property.price} x {dayCount} days
                  </h2>
                 ):( 
                    <h2 className='ml-[10px]'>
                    ₹{property.price} x {dayCount} days
                  </h2>
                )
              }
            </div>
            <div>
              <p>₹ {property.price * dayCount}</p>
            </div>
            </div>
            <hr className="mt-5 text-gray-300"/>
          <div className="flex justify-between mt-4 font-semibold">
            <p>Total before taxes</p>
            <p>₹ {property.price * dayCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
