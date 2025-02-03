import React, { useState } from 'react'
import { FaSpinner } from 'react-icons/fa';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { RxCross2 } from "react-icons/rx";
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoMdPhonePortrait } from "react-icons/io";
import { Link,useNavigate } from 'react-router-dom';
import Login from '../../Pages/Login';
import OAuth from '../../Components/auth/OAuth';
import Faceauth from './Faceauth';
import { useDispatch, useSelector } from "react-redux";
import {signInSuccess } from "../../redux/user/userSlice";
import { Alert } from '@mui/material';
import ForgotPassword from './ForgotPassword';
const Signup = () => {
    const[formData,setFormData] = useState({})
    const[errorMessage,setErrorMessage] =useState(null)
    const[loading,setLoading] = useState(false)
    const navigate= useNavigate();
    const dispatch= useDispatch()
    const handleChange =(e)=>{
        setFormData({...formData,[e.target.id]: e.target.value.trim() })
    }
const handleSubmit= async (e)=>{
    e.preventDefault()
    if(!formData.username || !formData.email || !formData.password){
     return setErrorMessage('Please fill all fields')
    }
    try {
        setLoading(true);
        setErrorMessage(null);
        const res= await fetch('/api/auth/signup',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData) 
        });
        const data = await res.json();
        if(data.success===false){
            return setErrorMessage(data.message);
        }
        setLoading(false);
        if(res.ok){
            navigate('/emaillogin')
            
        }
    } catch (error) {
        setErrorMessage(error.message)
        setLoading(false);
    }
    
}
    const [open ,setOpen] =useState(false);
      const handleOpen =()=> setOpen(true)
      const handleClose =()=> setOpen(false)
  return (
    <div>
      <div className='flex w-full  justify-center'>
        
      <div className="bg-white p-6 max-w-lg m-11 rounded-lg shadow-lg  w-full">
                    <h1 className="text-2xl font-semibold mb-4">Welcome to MyHostel</h1>
                        <form onSubmit={handleSubmit} className='w-full'>
                        <input id='username' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="text" onChange={handleChange}  placeholder='Username' />
                        <input id='email' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="email" onChange={handleChange} label='Email' placeholder='Email' />
                        <input id='password' className='w-full py-2 px-1 border rounded border-gray-300' type="password" onChange={handleChange} placeholder='**********' />
                        <p className="text-xs text-gray-500 mb-4">
    We’ll call or text you to confirm your number. Standard message and data rates apply. <a href="#" className="text-black font-bold underline gap-1">Privacy Policy</a>
</p>
<button type='submit' disabled={loading} className=" cursor-pointer w-full bg-pink-600 text-white py-3 rounded-lg font-semibold mb-4">
{
                  loading ? (
                      <>
                      
                      <span className="pl-3" >Loading...</span>
                      </>
                  ): 'Continue'
              }

</button>
                    </form>
                    <div className="flex justify-between">
        <div className="flex gap-2 text-sm mt-2">
        <span>Don't Have an account?</span>
        <Link to='/emaillogin' className="text-blue-500">
        Log In</Link>
        </div>
        <div className="flex gap-2 text-sm mt-2">
        <button onClick={handleOpen} to='/forgot_pass' className="text-blue-500 cursor-pointer underline ">
        Forgot Password</button>
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
                    <Link to='/login'>
                    <button className=" cursor-pointer w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
                       <div className="flex gap-11">
                                               <IoMdPhonePortrait className='mt-[5px]'/>
                                               Continue with Phone
                                               </div>
                    </button>
                    </Link>
                   
                    <Faceauth/>
                    {
          errorMessage && (
              <Alert className="mt-5"color="failure" >{errorMessage}</Alert>
          )
        }
                </div>
    </div>
    <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow:"24",
            p:2,
            borderRadius: "10px",
          }}
        ><div className="flex justify-end">
          <button className="cursor-pointer" onClick={handleClose} ><RxCross2/></button>
          </div>
          <ForgotPassword/>
        </Box>
      </Modal>
    </div>
  )
}

export default Signup
