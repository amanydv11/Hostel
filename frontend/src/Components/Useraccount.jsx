import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { FaIdCard } from 'react-icons/fa';
import { SiSpringsecurity } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import { LuBellRing } from "react-icons/lu";
import { GoGift } from "react-icons/go";
import { GoEye } from "react-icons/go";
import { MdOutlineBarChart } from "react-icons/md";
const Useraccount = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-4xl mx-auto p-4">
    <h1 className="text-4xl font-semibold mb-2">Account</h1>
    <p className="text-lg mb-6">As, <span className="font-semibold">{currentUser?.email}</span> · <Link to='/profile' className='underline' >Go to profile</Link></p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Link to='/account-setting/personal-info'>
      <div className="bg-white p-4 rounded-lg shadow-md items-start space-x-4">
    <FaIdCard className='h-8 w-8'/>
    <div className='mt-5'>
        <h2 className="text-lg text-gray-700 font-medium">Personal info</h2>
        <p className="text-gray-600 font-thin ">Provide personal details and how we can reach you</p>
    </div>
    
</div>
      </Link>
<Link to='/account-setting/security'>
<div className="bg-white p-4 rounded-lg shadow-md items-start space-x-4">
    <SiSpringsecurity className='h-8 w-8'/>
    <div className='mt-5'>
        <h2 className="text-lg text-gray-700 font-medium">Login & security</h2>
        <p className="text-gray-600 font-thin ">Update your password and secure your account</p>
    </div>
    
</div>
</Link>
<Link to='/account-setting/payments'>
<div className="bg-white p-4 rounded-lg shadow-md items-start space-x-4">
    <MdOutlinePayments className='h-8 w-8'/>
    <div className='mt-5'>
        <h2 className="text-lg text-gray-700 font-medium">Payments & payouts</h2>
        <p className="text-gray-600 font-thin ">Review payments, payouts, coupons and gift cards</p>
    </div>
    
</div>
</Link>
<Link to='/account-setting/tax'>
<div className="bg-white p-4 rounded-lg shadow-md items-start space-x-4">
    <CiFileOn className='h-8 w-8'/>
    <div className='mt-5'>
        <h2 className="text-lg text-gray-700 font-medium">Taxes</h2>
        <p className="text-gray-600 font-thin ">Manage taxpayer information and tax documents</p>
    </div>
    
</div>
</Link>
<Link to='/account-setting/notification'>
<div className="bg-white p-4 rounded-lg shadow-md items-start space-x-4">
    <LuBellRing className='h-8 w-8'/>
    <div className='mt-5'>
        <h2 className="text-lg text-gray-700 font-medium">Notifications</h2>
        <p className="text-gray-600 font-thin ">Choose notification preferences and how you want to be contacted</p>
    </div>
    
</div>
</Link>
<Link to='/account-setting/invite'>
<div className="bg-white p-4 rounded-lg shadow-md items-start space-x-4">
    <GoGift className='h-8 w-8'/>
    <div className='mt-5'>
        <h2 className="text-lg text-gray-700 font-medium">Referral credit & coupons </h2>
        <p className="text-gray-600 font-thin ">Your referral credits and coupon balance is Rs.0  Learn more.</p>
    </div>
    
</div>
</Link>
<Link to='/account-setting/privacy'>
<div className="bg-white p-4 rounded-lg shadow-md items-start space-x-4">
    <GoEye className='h-8 w-8'/>
    <div className='mt-5'>
        <h2 className="text-lg text-gray-700 font-medium">Privacy & sharing</h2>
        <p className="text-gray-600 font-thin ">Manage your personal data, connected services and data sharing settings</p>
    </div>
    
</div>
</Link>
<Link>
<div className="bg-white p-4 rounded-lg shadow-md items-start space-x-4">
    <MdOutlineBarChart className='h-8 w-8'/>
    <div className='mt-5'>
        <h2 className="text-lg text-gray-700 font-medium">Professional hosting tool</h2>
        <p className="text-gray-600 font-thin ">Get professional tools if you manage several properties on MyHostel</p>
    </div>
    
</div>
</Link>
    </div>
    <div className=" m-10 flex flex-col justify-center items-center">
    <h1 className='mb-2'>Need to deactivate your account ?</h1>
    <Link to='/account-delete/reason' className='underline text-sm font-semibold'>Take care of that now</Link>
    </div>
</div>
);
};
export default Useraccount
