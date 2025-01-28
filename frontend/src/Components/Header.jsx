import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useSelector, useDispatch } from "react-redux";
import mylogo from "../assets/mylogo.png";
import LanguageIcon from "@mui/icons-material/Language";
import { Link} from "@mui/material";
import Login from '../Pages/Login'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { RxCross2 } from "react-icons/rx";
import { FaBars, FaCross, FaIcons, FaMoon, FaSun, FaUser, FaUserCircle } from "react-icons/fa";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import PhoneLogin from "./PhoneLogin";

const Header = () => {
  const [open ,setOpen] =useState(false);
  const handleOpen =()=> setOpen(true)
  const handleClose =()=> setOpen(false)
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex  bg-white border-gray-300 border-b-2 justify-between items-center px-4">
      <div className="">
        <a href="/">
          <img src={mylogo} alt="" className="h-20 cursor-pointer w-40 p-2" />
        </a>
      </div>
      <div className="flex justify-center items-center">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: "400px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 , width:"400px" }}
            placeholder="Search in your location"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton sx={{ p: "10px" }} aria-label="directions">
            <AddLocationIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-end space-x-4">
        <button className="cursor-pointer hover:bg-gray-100 rounded-full px-4 py-2">
          List your property
        </button>
        <button className="cursor-pointer hover:bg-gray-100 rounded-full p-2">
          <LanguageIcon />
        </button>
        
        <Menu as='div' className="relative inline-block text-left">
        <div className="">
        <MenuButton  className="hover:bg-gray-100 m-3 cursor-pointer bg-white flex gap-2 border border-gray-300 rounded-full p-2">
          <FaBars className="mt-1" />
          <FaUser className="m-1" />
        </MenuButton>
        </div>
        <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
        
            <MenuItem>
              <a
              href="/login"
                className=" cursor-pointer block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
               Login
              
              </a>
            </MenuItem>
            <MenuItem>
            <a
            href="/signup"
                className="cursor-pointer block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Signup
              </a>
            </MenuItem>
            <Divider />
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              List your property
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Help center
            </a>
          </MenuItem> 
        </div>
      </MenuItems>

        </Menu>
        
      </div>
      {/*
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            bgcolor: "background.paper",
            boxShadow:"24",
            p:2,
            borderRadius: "10px",
          }}
        ><div className="">
          <button className="cursor-pointer" onClick={handleClose} ><RxCross2/></button>
          <p className="flex items-center justify-center font-serif text-xl mb-4">Login or Signin</p>
        </div>
        <Divider/>
          <Login/>
        </Box>
      </Modal>
      */}
      
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleDropdown}
          className="hover:bg-gray-100 bg-white flex gap-2  border-gray-300 p-2"
        >
          <FaUserCircle className=" cursor-pointer mt-1 h-10 w-10" />
        </button>
      </div>
      {dropdownOpen && (
        <div className="absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4 z-50">
          <ul className="space-y-4">
            <li>
              <button className="cursor-pointer hover:bg-gray-100 rounded-full px-4 py-2 w-full text-left">
                List your property
              </button>
            </li>
            <li>
              <button className="cursor-pointer hover:bg-gray-100 rounded-full px-4 py-2 w-full text-left">
                <LanguageIcon />
                Change Language
              </button>
            </li>
            <li>
              <button className="cursor-pointer hover:bg-gray-100 rounded-full px-4 py-2 w-full text-left">
                <FaUser className="inline mr-2" />
                Profile
              </button>
            </li>
          </ul>
        </div>
      )}
       
    </div>
  );
};

export default Header;
