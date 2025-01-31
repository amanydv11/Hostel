import { Divider } from '@mui/material';
import React from 'react'
import {FaChevronCircleRight, FaChevronRight, FaExclamation, FaExclamationCircle, FaSearch} from 'react-icons/fa'
import {useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
const Help = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='h-screen'>
      <div className="flex flex-col items-center p-4">
        <h1 className='text-5xl mb-10 font-semibold'>Hi {currentUser.username}, how can we help?</h1>
                    <div className="relative w-full max-w-md mb-8">
                        <input
                            type="text"
                            placeholder="Search how-tos and more"
                            className="w-full py-4 pl-4 pr-10 border rounded-full focus:outline-none"
                        />
                        <button className="absolute top-0 right-0 mt-[5px] mr-2 text-white py-4 px-4 rounded-full bg-pink-600">
                            <FaSearch/>
                        </button>
                    </div>
                    </div>
                    <div className="w-4xl ">
                    <div className="flex  justify-center w-full mb-8">
                        <nav className="flex space-x-4">
                            <a href="#" className="text-black border-b-2 border-black">Guest</a>
                            <a href="#" className="text-gray-500">Host</a>
                            <a href="#" className="text-gray-500">Experience Host</a>
                        </nav>
                    </div>
                    <h1 className="ml-3 p-2 text-2xl font-semibold">Recommended for you</h1>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="m-4 border rounded-lg">
                            <div className="flex items-center m-2 text-red-600">
                                <FaExclamationCircle/>
                                <span className="font-semibold m-2">ACTION REQUIRED</span>
                            </div>
                            <h2 className=" text-lg m-4 font-semibold">Your identity is not fully verified</h2>
                            <p className="m-4  text-gray-600">
                                Identity verification helps us check that you’re really you. It’s one of the ways we keep Airbnb secure.
                            </p>
                            <Divider/>
                            <div className="flex flex-col space-y-2">
                                <Link href="#" className="flex items-center m-4 justify-between ">
                                    Check identity verification status
                                    <FaChevronRight/>
                                </Link>
                                <Divider/>
                                <Link href="#" className="flex items-center m-4 justify-between ">
                                    Learn more
                                    <FaChevronRight/>
                                </Link>
                            </div>
                        </div>
                        <div className="m-4 border rounded-lg">
                            <div className="flex items-center m-2 text-gray-600">
                                <i className="fas fa-link mr-2"></i>
                                <span className="font-semibold">QUICK LINK</span>
                            </div>
                            <h2 className="m-4 text-lg font-semibold">Finding your reservation details</h2>
                            <p className="m-4 mb-20 text-gray-600">
                                Your Trips tab has full details, receipts, and Host contact info for each of your reservations.
                            </p>
                            <Divider/>
                            <a href="#" className="flex m-4  items-center justify-between ">
                                Go to Trips
                                <FaChevronRight/>
                            </a>
                        </div>
                    </div>
                    </div>
    </div>
  )
}
export default Help