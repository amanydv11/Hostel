import React, { useState } from 'react'
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa'
import { MdMailOutline } from "react-icons/md";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
const PhoneLogin = () => {
    const [value,setValue]=useState(0)
  return (
    
     <div className='rounded-lg  max-w-md w-full'>
      
      <PhoneInput
      className='py-1 px-1 border rounded border-gray-300 overflow-auto text-2xl text-gray-600'
  international
  defaultCountry="IN"
  value={value}
  onChange={setValue}/>
  <p className="text-xs text-gray-500 mb-4">
    We’ll call or text you to confirm your number. Standard message and data rates apply. <a href="#" className="text-black font-bold underline gap-1">Privacy Policy</a>
</p>
<button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold mb-4">Continue</button>
    </div>
  )
}

export default PhoneLogin
