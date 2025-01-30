import React from 'react'

const AllMessage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
            <TiMessages className='h-10 w-10'/>
            <p className="text-lg font-semibold">You don’t have any messages</p>
            <p className="text-gray-500">When you receive a new message, it will appear here.</p>
        </div>
    </div>
  )
}

export default AllMessage
