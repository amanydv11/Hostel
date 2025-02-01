import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const Payout = () => {
  return (
    <div className="flex">
    <div className='flex-1'>
        <h2 className="mt-10 text-xl font-semibold mb-2">How you'll get paid</h2>
                            <p className="text-gray-700 mb-4">Add at least one payout method so we know where to send your money.</p>
                            <button className="bg-black text-white py-2 px-4 rounded">Set up payouts</button>
                            </div>
      <div className="p-4 mr-20 mt-10 w-xs h-48 border rounded-lg shadow-sm">
                            <h3 className="text-lg font-semibold mb-4">Need help?</h3>
                            <ul className="space-y-4">
                                <li className="flex justify-between items-center">
                                    <a href="#" className="underline">When you'll get your payout</a>
                                    <FaChevronRight/>
                                </li>
                                <li className="flex justify-between items-center">
                                    <a href="#" className="underline">How payouts work</a>
                                    <FaChevronRight/>
                                </li>
                                <li className="flex justify-between items-center">
                                    <a href="#" className="underline">Go to your transaction history</a>
                                    <FaChevronRight/>
                                </li>
                            </ul>
                        </div>
   
    </div>
  )
}

export default Payout
