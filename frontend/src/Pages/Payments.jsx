import { Divider } from '@mui/material'
import React,{useState} from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PaymentMethod from '../Components/PaymentMethod'
import Payout from '../Components/Payout'

const Payments = () => {
   const [selectedTab, setSelectedTab] = useState('guest');
  return (
   
      <div className="p-8  md:p-12">
                    <div className=" flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <span className='text-lg'>Account</span><FaChevronRight/> <span>Payments & payouts</span>
                    </div>
                    <h1 className="text-3xl font-semibold mb-6">Payments & payouts</h1>
                            <div className="flex">
                                <button  onClick={() => setSelectedTab('payment')}  className={`px-4 py-2 ${
              selectedTab === 'payment' ? 'text-black border-b-2 border-black' : 'text-gray-500'
            }`}>Payments</button>
                                <button  onClick={() => setSelectedTab('payout')}  className={`px-4 py-2 ${
              selectedTab === 'payout' ? 'text-black border-b-2 border-black' : 'text-gray-500'
            }`}>Payouts</button>
                            </div>
                            <Divider/> 
                    {selectedTab === 'payment' ? <PaymentMethod/>:<Payout/>  }
                </div>
                
  )
}

export default Payments
