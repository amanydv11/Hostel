import { Divider } from '@mui/material'
import React from 'react'
import { SiContactlesspayment } from "react-icons/si";
const PaymentMethod = () => {
  return (
    <div className='flex'>
      <div className="max-w-4xl mx-auto p-4">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold mb-2">Your payments</h2>
                            <p className="text-gray-600 mb-4">Keep track of all your payments and refunds.</p>
                            <button className="bg-black text-white py-2 px-4 rounded">Manage payments</button>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-2">Payment methods</h2>
                        <p className="text-gray-600 mb-4">Add a payment method using our secure payment system, then start planning your next trip.</p>
                        <hr className="border-gray-300"/>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Coupons</h2>
                        <Divider/>
                        <div className="flex mt-5 justify-between">
                            <p>Your coupons</p>
                            <p>0</p>
                        </div>
                        <button className="bg-black text-white py-2 mt-5 px-4 rounded">Add coupon</button>
                    </div>
                </div>
                <div className="flex-1 mt-4 md:mt-0">
                            <div className="border w-82 m-10 h-56 p-4 rounded">
                                <div className="flex items-center mb-2">
                                   <SiContactlesspayment className='w-12 h-12'/>
                                    <h3 className="text-lg font-bold">Make all payments through MyHostel</h3>
                                </div>
                                <p className="text-gray-600 mb-2">
                                    Always pay and communicate through MyHostel to ensure you're protected under our 
                                    <a href="#" className="text-black underline">Terms of Service</a>, 
                                    <a href="#" className="text-black underline">Payments Terms of Service</a>, 
                                    cancellation, and other safeguards. 
                                    <a href="#" className="text-black underline">Learn more</a>
                                </p>
                            </div>
                        </div>
    </div>
  )
}

export default PaymentMethod
