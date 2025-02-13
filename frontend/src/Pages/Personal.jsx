import React from 'react'
import {Link} from 'react-router-dom'
import { Divider } from '@mui/material';
import { MdOutlineLockPerson } from "react-icons/md";
import { FaEye } from 'react-icons/fa';
import { useSelector } from "react-redux";
const Personal = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-7xl mx-auto p-6">
    <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
            <nav className="text-sm text-gray-600 mb-4">
                <a href="#" className="hover:underline">Account</a> &gt; <span>Personal info</span>
            </nav>
            <h1 className="text-3xl font-bold mb-6">Personal info</h1>
            <div className="space-y-6">
            <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Profile Picture</h2>
                        <div className="">
                        <div className="text-gray-500">
                            <div className="">
                                <img src={currentUser?.profilePicture} alt="profile" className="w-full h-40 rounded-full" />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Divider/>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">First name</h2>
                        <p>Aman Yadav</p>
                    </div>
                   
                </div>
                <Divider/>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold"> Last name *(optional)</h2>
                        <p className="text-gray-500">Not provided</p>
                    </div>
                  
                </div>
                <Divider/>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Date of Birth</h2>
                        <p>Aman Yadav</p>
                    </div>
                   
                </div>
                <Divider/>

                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Email address</h2>
                        <p>{currentUser?.email}</p>
                    </div>
                </div>
                <Divider/>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Phone number</h2>
                        <p className="text-gray-500">Add a number so confirmed guests and Airbnb can get in touch. You can add other numbers and choose how they’re used.</p>
                    </div>
                </div>
                <Divider/>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Identity verification</h2>
                        <p className="text-gray-500">Not started</p>
                    </div>
                    
                </div>
                <Divider/>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Address</h2>
                        <p className="text-gray-500">Not provided</p>
                    </div>
                   
                </div>
                <Divider/>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold">Emergency contact</h2>
                        <p className="text-gray-500">Not provided</p>
                    </div>
                </div>
                <div className="flex justify-center">
                <Link to='/account-setting/profile' className='underline'>Edit your profile information?</Link>
                </div>
            </div>
        </div>
        
        <div className="w-full h-screen md:w-1/3 mt-8 md:mt-0 md:pl-8">
            <div className="bg-white border mt-10 border-gray-300 p-6 rounded-lg shadow-md">
                <div className="flex gap-2 items-center  mb-4">
                <MdOutlineLockPerson className='w-20  h-20' />
                <h2 className="text-lg mt-10 font-semibold">Why isn’t my info shown here?</h2>
                </div>
                <p className="text-gray-500 mb-6">We’re hiding some account details to protect your identity.</p>
                <Divider/>
                <div className="flex mt-2 gap-2  items-center mb-4">
                <MdOutlineLockPerson className='w-20 h-20' />
                    <h2 className="text-lg mt-10 font-semibold">Which details can be edited?</h2>
                </div>
                <p className="text-gray-500 mb-6">Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book – or to continue hosting.</p>
                <Divider/>
                <div className="flex mt-2 gap-2  items-center mb-4">
                <FaEye className='w-18 h-18' />
                    <h2 className="text-lg mt-10 font-semibold">What info is shared with others?</h2>
                </div>
                <p className="text-gray-500 mb-6">MyHostel only release contact information for Hosts and guests after a reservation is confirmed.</p>
                
            </div>
        </div>
    </div>
</div>
  )
}

export default Personal
