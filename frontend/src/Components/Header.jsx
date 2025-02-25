import React, { useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import mylogo from "../assets/mylogo.png";
import LanguageIcon from "@mui/icons-material/Language";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaUser } from "react-icons/fa";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { Avatar } from "@mui/material";
import { signoutSuccess } from "../redux/user/userSlice";

const Header = () => {
  const [open, setOpen] = useState(false);
  const path = useLocation().pathname;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { theme } = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate("/login");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <div
      className={`${location.pathname.includes("/host") ? " invisible" : ""}`}
    >
      <div className="flex  bg-white border-gray-300 border-b-2 justify-between items-center px-4">
        <div>
          <Link to="/">
            <img src={mylogo} alt="" className="h-20 cursor-pointer w-40 p-2" />
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <form onSubmit={handleSubmit}>
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
                sx={{ ml: 1, flex: 1, width: "400px" }}
                placeholder="Search in your location"
                inputProps={{ "aria-label": "search google maps" }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <IconButton sx={{ p: "10px" }} aria-label="directions">
                <AddLocationIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </form>
        </div>

        <div className="flex items-center justify-end space-x-4">
          {currentUser ? (
            <button
              onClick={() => navigate("/create_your_property")}
              className="hidden md:block cursor-pointer from-neutral-800  hover:bg-gray-100 rounded-full border border-gray-300 px-4 py-2"
            >
              Your Listings
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden md:block cursor-pointer from-neutral-800 hover:bg-gray-100 rounded-full border border-gray-300 px-4 py-2"
            >
              List your property
            </button>
          )}

          <button className="cursor-pointer hover:bg-gray-100 rounded-full p-2">
            <LanguageIcon />
          </button>

          {currentUser ? (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="hover:bg-gray-100 m-2 cursor-pointer bg-white flex gap-2 border border-gray-300 rounded-full p-2">
                  <FaBars className="mt-1 h-4" />
                  <Avatar
                    alt="user"
                    sx={{ height: "25px", width: "25px" }}
                    src={currentUser.profilePicture}
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute font-thin  right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <Link to="/profile">
                      <button className="cursor-pointer font-semibold hover:bg-gray-100 w-full text-left block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Profile
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/guest/messages">
                      <button className=" w-full font-semibold text-left hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Messages
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/notification">
                      <button className="w-full font-semibold text-left hover:bg-gray-100  cursor-pointer block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Notifications
                      </button>
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Link to="/wishlist">
                      <button className="w-full text-left hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Wishlists
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/wishlist">
                      <button className="w-full text-left hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Trip history
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/wishlist">
                      <button className="w-full text-left hover:bg-gray-100 cursor-pointer block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Reservation List
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/account-setting">
                      <button className=" cursor-pointer w-full text-left hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Account
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/create_your_property">
                      <button className=" cursor-pointer w-full text-left hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Manage listings
                      </button>
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <Link to="/help">
                      <button className="cursor-pointer block w-full hover:bg-gray-100 px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Help center
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={handleSignout}
                      className=" cursor-pointer block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Log out
                    </button>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          ) : (
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="hover:bg-gray-100 m-3 cursor-pointer bg-white flex gap-2 border border-gray-300 rounded-full p-2">
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
                    <Link to="/login">
                      <button className=" cursor-pointer block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Login
                      </button>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link to="/signup">
                      <button className=" cursor-pointer block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden">
                        Signup
                      </button>
                    </Link>
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <a
                      href="/host/hostel"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
