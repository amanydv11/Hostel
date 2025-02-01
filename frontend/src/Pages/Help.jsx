import { Divider } from '@mui/material';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import HelpGuest from '../Components/HelpGuest';
import HelpHost from '../Components/HelpHost';

const Help = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [selectedTab, setSelectedTab] = useState('guest');

  return (
    <div className="min-h-full">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-5xl mb-10 font-semibold">
          Hi {currentUser.username}, how can we help?
        </h1>
        <div className="relative w-full max-w-md mb-8">
          <input
            type="text"
            placeholder="Search how-tos and more"
            className="w-full py-4 pl-4 pr-10 border rounded-full focus:outline-none"
          />
          <button className="absolute top-0 right-0 mt-[5px] mr-2 text-white py-4 px-4 rounded-full bg-pink-600">
            <FaSearch />
          </button>
        </div>
      </div>
      
      <div className="flex text-xl justify-center w-full mb-8">
        <nav className="flex space-x-4">
          <button
            className={`px-4 py-2 ${
              selectedTab === 'guest' ? 'text-black border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setSelectedTab('guest')}
          >
            Guest
          </button>
          <button
            className={`px-4 py-2 ${
              selectedTab === 'host' ? 'text-black border-b-2 border-black' : 'text-gray-500'
            }`}
            onClick={() => setSelectedTab('host')}
          >
            Host
          </button>
        </nav>
      </div>
      {selectedTab === 'guest' ? <HelpGuest /> : <HelpHost />}
    </div>
  );
};

export default Help;
