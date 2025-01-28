import React, { useState } from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { RxCross2 } from "react-icons/rx";
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoMdPhonePortrait } from "react-icons/io";
import Login from '../Pages/Login';
import OAuth from './OAuth';
import Faceauth from './Faceauth';
const Signup = () => {
    const [open ,setOpen] =useState(false);
      const handleOpen =()=> setOpen(true)
      const handleClose =()=> setOpen(false)
  return (
    <div>
      <div className='flex w-full  justify-center'>
        
      <div className="bg-white p-6 max-w-lg m-11 rounded-lg shadow-lg  w-full">
                    <h1 className="text-2xl font-semibold mb-4">Welcome to MyHostel</h1>
                        <form className='w-full'>
                        <input className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="text"  placeholder='Username' />
                        <input className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="email" label='Email' placeholder='Email' />
                        <input className='w-full py-2 px-1 border rounded border-gray-300' type="password" placeholder='**********' />
                        <p className="text-xs text-gray-500 mb-4">
    We’ll call or text you to confirm your number. Standard message and data rates apply. <a href="#" className="text-black font-bold underline gap-1">Privacy Policy</a>
</p>
<button type='submit' className=" cursor-pointer w-full bg-pink-600 text-white py-3 rounded-lg font-semibold mb-4">Continue</button>
                    </form>
                    <div className="flex items-center justify-center mb-4">
                        <hr className="w-full border-gray-300" />
                        <span className="px-2 text-gray-500">or</span>
                        <hr className="w-full border-gray-300" />
                    </div>
                    <OAuth/>
                    <button className="cursor-pointer w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
                        <div className="flex gap-11">
                                                <FaApple className='mt-[5px]' />
                                                Continue with Apple
                                                </div>
                    </button>
                    <a href='/login' className=" cursor-pointer w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
                       <div className="flex gap-11">
                                               <IoMdPhonePortrait className='mt-[5px]'/>
                                               Continue with Phone
                                               </div>
                    </a>
                    <Faceauth/>
                </div>
    </div>
    <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow:"24",
            p:2,
            borderRadius: "10px",
          }}
        ><div className="">
          <button className="cursor-pointer" onClick={handleClose} ><RxCross2/></button>
          <p className="flex items-center justify-center font-serif text-xl mb-4">Login or Signin</p>
        </div>
        <Divider/>
          <Login/>
        </Box>
      </Modal>
    </div>
  )
}

export default Signup
