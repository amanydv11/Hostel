import React,{useState,useEffect} from 'react'
import { CiSliderHorizontal } from "react-icons/ci";
import {FaAngleDown, FaSearch} from 'react-icons/fa'
import { FaRegMessage } from "react-icons/fa6";
import { RiHomeSmileLine } from "react-icons/ri";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { TiMessages } from "react-icons/ti";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link,useLocation } from 'react-router-dom';
import UnreadMessage from '../Components/UnreadMessage';
import AllMessage from '../Components/AllMessage'
import HostMessage from '../Components/host/HostMessage'
import TravelMessage from '../Components/TravelMessage'
import SupportMessage from '../Components/SupportMessage'
const UserMessages = () => {
  const location = useLocation();
  const [inbox_type, setInbox_type] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const inbox_typeFromUrl = urlParams.get("inbox_type");
    if (inbox_typeFromUrl) {
      setInbox_type(inbox_typeFromUrl);
    }
  }, [location.search]);
  return (
    <div className="flex mx-auto  h-screen">
    <div className="w-1/4 border-r border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Messages</h1>
            <div className="flex space-x-2">
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <FaSearch/>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                <CiSliderHorizontal />
                </button>
            </div>
        </div>
        <div className="flex space-x-2 mb-4">
        <Menu as='div' className="relative inline-block text-left">
    <div className="">
    <MenuButton  className="bg-black justify-center items-center cursor-pointer text-white flex gap-2 border border-gray-300 rounded-full p-2">
                <span>All</span>
                <FaAngleDown/>
    </MenuButton>
    </div>
    <MenuItems transition className="absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
    <div className="py-1 flex-col cursor-pointer  m-2 flex  p-2 gap-4">
    <MenuItem>
    <Link to='/guest/messages/'>
    <button active={inbox_type==="all"} className='cursor-pointer flex items-center gap-4  font-semibold hover:bg-gray-100 w-full text-left px-1 rounded-full py-1 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden'>
<FaRegMessage/>
      <span>All</span>
    </button>
    </Link>
      </MenuItem>
      <MenuItem>
      <Link to='/guest/messages?inbox_type=hosting'>
    <button active={inbox_type==="hosting"} className='flex cursor-pointer py-1 px-1 rounded-full hover:bg-gray-100 w-full text-left items-center gap-4'>
      <RiHomeSmileLine/>
      <span>Hosting</span>
    </button>
    </Link>
      </MenuItem>
      <MenuItem>
      <Link to='/guest/messages?inbox_type=travelling'>
    <button active={inbox_type==="travelling"} className='flex cursor-pointer py-1 px-1 rounded-full hover:bg-gray-100 w-full text-left items-center gap-4'>
      <FaPersonWalkingLuggage/>
      <span>Travelling</span>
    </button>
    </Link>
      </MenuItem>
      <MenuItem>
    <Link to='/guest/messages?inbox_type=support'>
    <button active={inbox_type==="support"} className='flex cursor-pointer py-1 px-1 rounded-full hover:bg-gray-100 w-full text-left items-center gap-4'>
      <BiSupport/>
      <span>Support</span>
    </button>
    </Link>
      </MenuItem>
      </div>
        </MenuItems>
          </Menu> 
          <Link to='/guest/messages?inbox_type=unread=' >
          <button  className="px-4 py-2 ml-2 bg-white text-black border border-gray-200 rounded-full">
                Unread
            </button>
          </Link>
            
        </div>
        <div className="flex flex-col items-center justify-center text-center">
      {inbox_type ==='/' && <AllMessage/>}
      {inbox_type ==='hosting'&& <HostMessage/>}
      {inbox_type ==='travelling'&& <TravelMessage/>}
      {inbox_type ==='support' && <SupportMessage/>}
      {inbox_type ==='unread' && <UnreadMessage/>}
    
        </div>
        
    </div>
    <div className="w-3/4">
        {/* Right side content */}
        <div className="border-t-1 mt-15 border-gray-300 "></div>
    </div>
</div>
  )
}

export default UserMessages
