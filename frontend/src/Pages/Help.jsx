import { Divider } from '@mui/material';
import React from 'react'
import {FaChevronCircleRight, FaChevronRight, FaExclamation, FaExclamationCircle, FaSearch} from 'react-icons/fa'
import {useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import HelpGuest from '../Components/HelpGuest';
import HelpHost from '../Components/HelpHost';
const Help = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='min-h-full'>
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
                    <div className="flex  text-xl justify-center w-full mb-8">
                                            <nav className="flex space-x-4">
                                                <Link href="#" className="text-black border-b-2 border-black">Guest</Link>
                                                <Link href="#" className="text-gray-500">Host</Link>
                                            </nav>
                                        </div>
                   <HelpGuest/>
                   <HelpHost/>
    </div>
  )
}
export default Help