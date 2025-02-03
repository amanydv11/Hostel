import React, { useState } from 'react'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { MdMailOutline } from "react-icons/md";
import PhoneLogin from '../Components/auth/PhoneLogin';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { RxCross2 } from "react-icons/rx";
import EmailLogin from '../Components/auth/EmailLogin';
import OAuth from '../Components/auth/OAuth';
import Faceauth from '../Components/auth/Faceauth';
const Login = () => {
  const [selectedTab, setSelectedTab] = useState('guest');
    const [open ,setOpen] =useState(false);
      const handleOpen =()=> setOpen(true)
      const handleClose =()=> setOpen(false)
      const handleClick=()=>{
        setOpen(true);
        setOpen(false)
      }
  return (
    <div className='flex w-full justify-center'>
      <div className="bg-white  p-10 rounded-lg shadow-lg max-w-lg m-11 w-full">
                    <h1 className="text-2xl font-semibold mb-4">Welcome to MyHostel</h1>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">
                            Country/Region
                        </label>
                        <div>
                        <PhoneLogin/>
                    </div>
                        </div>
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
                    <a href='/emaillogin' className=" cursor-pointer w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
                       <div className="flex gap-11">
                                               <MdMailOutline className='mt-[5px]'/>
                                               Continue with email
                                               </div>
                    </a>
                    <Faceauth/>
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
          <EmailLogin/>
        </Box>
      </Modal>
    </div>
  )
}

export default Login
