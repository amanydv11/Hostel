import React, { useState } from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { RxCross2 } from "react-icons/rx";
import { Link,useNavigate } from 'react-router-dom';
import { FaApple, FaSpinner} from 'react-icons/fa'
import { IoMdPhonePortrait } from "react-icons/io";
import Login from '../../Pages/Login';
import OAuth from './OAuth';
import Faceauth from './Faceauth';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { signInStart,signInFailure,signInSuccess } from "../../redux/user/userSlice";
import ForgotPassword from './ForgotPassword';
const EmailLogin = () => {
  const[formData,setFormData] = useState({})
  const {loading,error:errorMessage} =useSelector(state=> state.user);
  const dispatch= useDispatch()
  const navigate= useNavigate();
  const handleChange =(e)=>{
      setFormData({...formData,[e.target.id]: e.target.value.trim() })
  }
const handleSubmit= async (e)=>{
  e.preventDefault()
  if(!formData.email || !formData.password){
   return dispatch(signInFailure('Please fill all the fields'))
  }
  try {
      dispatch(signInStart());
      const res= await fetch('/api/auth/signin',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(formData) 
      });
      const data = await res.json();
      if(data.success===false){
          dispatch(signInFailure(data.message))
      }
      if(res.ok){
        dispatch(signInSuccess(data))
          navigate('/')
      }
  } catch (error) {
      dispatch(signInFailure(error.message))
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
                        <input id='email' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="email" label='Email' onChange={handleChange} placeholder='Email' />
                        <input id='password' className='w-full py-2 px-1 border rounded border-gray-300' type="password" onChange={handleChange} placeholder='**********' />
                        <p className="text-xs text-gray-500 mb-4">
    We’ll call or text you to confirm your number. Standard message and data rates apply. <a href="#" className="text-black font-bold underline gap-1">Privacy Policy</a>
</p>
<button disabled={loading} type='submit' className=" cursor-pointer w-full bg-pink-600 text-white py-3 rounded-lg font-semibold mb-4">
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
        <Link to='/signup' className="text-blue-500">
        Sign Up</Link>
        </div>
        <div className="flex gap-2 text-sm mt-2">
        <button onClick={handleOpen} to='/forgot_pass' className="text-blue-500 underline cursor-pointer ">
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
                    <Link to='/login' >
                    <button  className=" cursor-pointer w-full flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
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
            bgcolor: "white",
            boxShadow:"4",
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

export default EmailLogin
