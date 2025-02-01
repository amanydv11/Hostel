import React from 'react'
import { Divider } from '@mui/material';
import {FaChevronCircleRight, FaChevronRight, FaExclamation, FaExclamationCircle, FaSearch} from 'react-icons/fa'
import {useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import hostel from '../assets/hostel.png'
import cancel from '../assets/cancel.jpg'
import policy from '../assets/policy.png'
import safety from '../assets/safety.png'
import setupaccount from '../assets/setupaccount.jpg'
import stay from '../assets/stay.jpg'
const HelpGuest = () => {
  return (
    <div>
       <div className="container mx-auto p-8 w-5xl ">
                    
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
                    <div className="container mx-auto p-4">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold">Guides for getting started</h1>
                        <Link to="/help/all-topic" className="text-gray-500">Browse all topics &gt;</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                        <div className="text-center">
                            <img src={stay} alt="Person using a laptop at a dining table" className="rounded-lg mb-2"/>
                            <p className='text-xl font-medium'>Finding a stay that's right for you</p>
                        </div>
                        <div className="text-center">
                            <img src={cancel} alt="Person using a phone and laptop" className="rounded-lg mb-2"/>
                            <p className='text-xl font-medium'>Retired article 3122: How cancellations work</p>
                        </div>
                        <div className="text-center">
                            <img src={setupaccount} alt="People setting up their account" className="rounded-lg mb-2"/>
                            <p className='text-xl font-medium'>Setting up your account</p>
                        </div>
                        <div className="text-center">
                            <img src={hostel} alt="HostelCover logo" className="rounded-lg w-full h-50 mb-2"/>
                            <p className='text-xl font-medium'>HostelCover for guests</p>
                        </div>
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Top articles</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className='w-[360px]'>
                            <a href="#" className="text-lg underline font-medium text-black">Check your reservation status as a guest</a>
                            <p className="text-gray-500 mb-4">Your reservation status keeps you updated on all kinds  of things, such as whether you’re...</p>
                            <Divider/>
                        </div >
                        <div className='w-[360px]'>
                            <a href="#" className="text-lg underline font-medium text-black">Deactivating or deleting your account</a>
                            <p className="text-gray-500 mb-4">We’d hate to see you go, but if you’ve decided to leave Airbnb, <br /> you have a couple of options...</p>
                            <Divider/>
                        </div>
                        <div className='w-[360px]'>
                            <a href="#" className="text-lg underline font-medium text-black">Verify your phone number</a>
                            <p className="text-gray-500 mb-4">Let’s connect! Make sure that the right people have your <br /> correct phone number. Hosts need...</p>
                            <Divider/>
                        </div>
                        <div className='w-[360px]'>
                            <a href="#" className="text-lg underline font-medium text-black">Editing a review you wrote</a>
                            <p className="text-gray-500 mb-4">To encourage honest and impartial reviews, we...</p>
                            <Divider/>
                        </div>
                        <div className='w-[360px]'>
                            <a href="#" className="text-lg underline font-medium text-black">Instant Book</a>
                            <p className="text-gray-500 mb-6">Want to book a place right away? Try...</p>
                            <Divider/>
                        </div>
                    </div>
                </div>

                <div className="flex text-white flex-col bg-black justify-center items-center py-10">
                    <h1 className="text-3xl font-bold mb-8">Explore more</h1>
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                        <div className="bg-red-950 rounded-lg overflow-hidden shadow-lg">
                            <img src={policy} alt="A man and a woman talking happily in front of a house" className="w-full h-64 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">Our community policies</h2>
                                <p className="text-sm">How we build a foundation of trust.</p>
                            </div>
                        </div>
                        <div className="bg-red-950 rounded-lg overflow-hidden shadow-lg">
                            <img src={safety} alt="A man and a child wearing safety gear" className="w-full h-64 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">Safety tips and guidelines</h2>
                                <p className="text-sm">Resources to help travellers stay safe.</p>
                            </div>
                        </div>
                        <div className=" text-white  rounded-lg p-6 shadow-lg text-center md:text-left">
                            <h2 className="text-2xl font-semibold mb-4">Need to get in touch?</h2>
                            <p className=" text-xl mb-4">We'll start with some questions  and get <br /> you to the right place.</p>
                            <button className="bg-white text-black w-full font-semibold py-2 px-4 rounded mb-4">Contact us</button>
                            <p className="text-xl">You can also <a href="#" className=" underline">give us feedback.</a></p>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default HelpGuest
