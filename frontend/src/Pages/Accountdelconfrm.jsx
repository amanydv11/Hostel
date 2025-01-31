import React,{useState} from 'react'
import {useDispatch, useSelector } from "react-redux";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { signoutSuccess } from "../redux/user/userSlice";
const Accountdelconfrm = () => {
    const { currentUser } = useSelector((state) => state.user);
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const handleDeleteUser = async () => {
        try {
            const res = await fetch(`/api/user/delete/${currentUser._id}`,{
                method:'DELETE'
              });
            const data = await res.json();
            if (res.ok) {
               console.log("Account delete successfull")
               navigate('/')
               dispatch(signoutSuccess());
            }
            else{
              console.log("Error:", data.message)
            }
            
        } catch (error) {
            console.log(error.message);
        }
      };
  return (
    <div className='flex flex-col items-center justify-center m-10 bg-white'>
        <div className="w-full max-w-2xl p-6 bg-white shadow-md">
        <h1 className='text-4xl font-semibold'>Deativate account?</h1>
        <p className='text-gray-500 mb-4'>{currentUser.email}</p>
      <div className="flex gap-4 mb-5 mt-10 flex-col">
        <p className='text-lg font-thin gap-2 flex items-center'> <IoMdCheckmarkCircleOutline className='h-7 w-7'/> The profile and listing associated with this account will disappear.</p>
        <Divider/>
        <p className='text-lg font-thin gap-2 flex items-center'><IoMdCheckmarkCircleOutline className='h-7 w-7'/> You won't be able to access the account info or past reservations.</p>
      </div>
      <div className="flex items-center justify-between">
        <Link to='/account-delete/reason'>
        <button className='text-lg flex items-center font-semibold'><IoIosArrowBack/> <span>Back</span></button>
        </Link>
        <button onClick={handleDeleteUser} className='bg-pink-600 py-2 text-white rounded-lg px-4'>Deactivate account</button>
      </div>
    </div>
    </div>
  )
}

export default Accountdelconfrm
