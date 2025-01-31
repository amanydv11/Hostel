import React from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/image.svg";

const Notfound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen p-6">
      {/* Text Section */}
      <div className="flex-1 flex flex-col items-center text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl m-4 text-gray-800 font-semibold">
          Something is not right...
        </h1>
        <p className="text-lg lg:text-xl text-gray-500 m-2 max-w-md">
          The page you are trying to open does not exist. You may have mistyped
          the address, or the page has been moved to another URL. If you think
          this is an error, contact support.
        </p>
        <button
          onClick={() => navigate("/")}
          className="m-4 text-lg border-2 border-red-300 text-red-600 rounded-lg py-2 px-5 hover:bg-red-50 transition"
        >
          Get back to home
        </button>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={image}
          alt="Not Found"
          className="w-64 md:w-80 lg:w-96 max-h-80 object-contain"
        />
      </div>
    </div>
  );
};

export default Notfound;
