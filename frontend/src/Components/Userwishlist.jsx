import React from "react";
import { useSelector } from "react-redux";
import HostelCard from "./host/HostelCard";

const Userwishlist = () => {
  const { currentUser } = useSelector((state) => state.user);
  const wishlist = currentUser?.wishList;

  return (
    <div >
     
     <h1 className="text-2xl font-serif sm:text-xl md:text-3xl font-semibold px-4 my-4  text-center text-gray-500">
        Your Wishlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-4 mb-5 sm:px-6 md:px-15">
        {wishlist?.map(
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
    </div>
  );
};

export default Userwishlist;
