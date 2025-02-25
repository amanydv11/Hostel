import { useState } from "react";
import {
  ArrowForwardIos,
  ArrowBackIosNew,
  Favorite,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setWishList } from "../../redux/user/userSlice";

const HostelCard = ({
  propertyId,
  creator,
  listingPhotoPaths,
  city,
  province,
  country,
  category,
  type,
  price,
  startDate,
  endDate,
  totalPrice,
  booking,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + listingPhotoPaths.length) % listingPhotoPaths.length
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % listingPhotoPaths.length);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {currentUser} = useSelector((state) => state.user);
  const wishList = currentUser?.wishList || [];

  const isLiked = wishList?.find((item) => item?._id === propertyId);

  const patchWishList = async () => {
    if (currentUser?._id !== creator._id) {
    const response = await fetch(
      `api/user/${currentUser?._id}/${propertyId}`,
      {
        method: "PATCH",
        header: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    dispatch(setWishList(data.wishList));
  } else { return }
  };

  return (
    <div
      className="relative cursor-pointer p-[18px] rounded-md hover:shadow-md "
      onClick={() => {
        navigate(`/properties/${propertyId}`);
      }}
    >
      <div className="w-[300px] mb-[10px] border overflow-hidden rounded-md">
        <div
          style={{ transform: `translateX(-${currentIndex * 100}%)`,display:"flex",transition:"transform 0.5s ease" }}
        >
          {listingPhotoPaths?.map((photo, index) => (
            <div key={index} className="relative w-full h-[270px] items-center flex ">
              <img
              style={{width:"100%",height:"100%",filter:"brightness(85%)",objectFit:"cover"}}
                src={`/api/${photo?.replace("public", "")}`}
                alt={`photo ${index + 1}`}
              />
              <div
                className="absolute p-[6px] rounded-lg border-none cursor-pointer top-1/2 transform-translate-y-[-50%]   flex items-center justify-center bg-[rgba(255,255,255,0.7)] z-9999"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevSlide(e);
                }}
              >
                <ArrowBackIosNew sx={{ fontSize: "15px" }} />
              </div>
              <div
                className="absolute p-[6px] rounded-lg border-none cursor-pointer top-1/2 transform-translate-y-[-50%] right-2 flex items-center justify-center bg-[rgba(255,255,255,0.7)] z-9999"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextSlide(e);
                }}
              >
                <ArrowForwardIos sx={{ fontSize: "15px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <h3 className="text-[18px] font-semibold">
        {city}, {province}, {country}
      </h3>
      <p className="text-[14px] text-gray-600">{category}</p>

      {!booking ? (
        <>
          <p className="text-[14px] text-gray-600">{type}</p>
          <p className="text-[14px] text-gray-600">
            <span>${price}</span> per night
          </p>
        </>
      ) : (
        <>
          <p className="text-[14px] text-gray-600">
            {startDate} - {endDate}
          </p>
          <p className="text-[14px] text-gray-600">
            <span>${totalPrice}</span> total
          </p>
        </>
      )}

      <button
        style={{
          position:"absolute",
          top:"20px",
          right:"20px",
          background:"none",
          border:"none",
          cursor:"pointer",
          fontSize:"20px",
          zIndex:"9999",
         
        }}
        onClick={(e) => {
          e.stopPropagation();
          patchWishList();
        }}
        disabled={!currentUser}
      >
        {isLiked ? (
          <Favorite sx={{ color: "red" }} />
        ) : (
          <Favorite sx={{ color: "white" }} />
        )}
      </button>
    </div>
  );
};

export default HostelCard;