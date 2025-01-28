import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import mylogo from "../assets/mylogo.png";
import LanguageIcon from "@mui/icons-material/Language";
import { Link,Button } from "@mui/material";
import { FaBars, FaIcons, FaMoon, FaSun, FaUser, FaUserCircle } from "react-icons/fa";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationIcon from "@mui/icons-material/AddLocation";

const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);
const [dropdownMenu, setDropdownMenu] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
const togglemenu =()=>{
    setDropdownMenu(!dropdownMenu)
}
  return (
    <div className="flex border-gray-300 border-b-2 justify-between items-center px-4">
      <div className="">
        <Link to="/">
          <img src={mylogo} alt="" className="h-20 cursor-pointer w-40 p-2" />
        </Link>
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
        <button onClick={togglemenu} className="hover:bg-gray-100 m-3 cursor-pointer bg-white flex gap-2 border border-gray-300 rounded-full p-2">
          <FaBars className="mt-1" />
          <FaUser className="m-1" />
        </button>
      </div>
{dropdownMenu && (
    <div className="absolute w-72 top-20 right-10 bg-white shadow-lg rounded-lg p-8 z-60">
    <ul className="space-y-3">
        <li >
            <button className="cursor-pointer mb-2 hover:bg-gray-100 rounded px-4  w-full text-left">Login</button>
            <button className="cursor-pointer hover:bg-gray-100 rounded px-4  w-full text-left">Sigin</button>
        </li>
        <Divider />
        <li>
            <button className="cursor-pointer hover:bg-gray-100 rounded px-4 py-2 w-full text-left">List your Property</button>
        </li>
        <li>
            <button className="cursor-pointer hover:bg-gray-100 rounded px-4 py-1 w-full text-left">Help Center</button>
        </li>
       
    </ul>
    </div>
)}

      <div className="md:hidden flex items-center">
        <button
          onClick={toggleDropdown}
          className="hover:bg-gray-100 bg-white flex gap-2  border-gray-300 p-2"
        >
          <FaUserCircle className="mt-1 h-10 w-10" />
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
