import React from 'react';
import { Divider } from '@mui/material';
import { FaChevronRight, FaExclamationCircle, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import hostel from '../assets/hostel.png';
import cancel from '../assets/cancel.jpg';
import policy from '../assets/policy.png';
import safety from '../assets/safety.png';
import setupaccount from '../assets/setupaccount.jpg';
import stay from '../assets/stay.jpg';

const HelpGuest = () => {
  return (
    <div className="p-4">
      {/* Recommended Section */}
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-2xl font-semibold mb-4">Recommended for you</h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
          {/* Identity Verification */}
          <div className="border rounded-lg p-4">
            <div className="flex items-center text-red-600 mb-2">
              <FaExclamationCircle />
              <span className="font-semibold ml-2">ACTION REQUIRED</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">Your identity is not fully verified</h2>
            <p className="text-gray-600 mb-4">
              Identity verification helps us check that you’re really you. It’s one of the ways we keep Airbnb secure.
            </p>
            <Divider />
            <div className="flex flex-col space-y-2 mt-2">
              <Link to="#" className="flex justify-between items-center ">
                Check identity verification status
                <FaChevronRight />
              </Link>
              <Divider />
              <Link to="#" className="flex justify-between items-center ">
                Learn more
                <FaChevronRight />
              </Link>
            </div>
          </div>

          {/* Reservation Details */}
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-2">Finding your reservation details</h2>
            <p className="text-gray-600 mb-20">
              Your Trips tab has full details, receipts, and Host contact info for each of your reservations.
            </p>
            <Divider />
            <Link to="#" className="flex justify-between items-center  mt-2">
              Go to Trips
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <div className="container mx-auto max-w-5xl mt-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Guides for getting started</h1>
          <Link to="/help/all-topic" className="text-gray-500">Browse all topics &gt;</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[{ img: stay, text: "Finding a stay that's right for you" },
            { img: cancel, text: "Retired article 3122: How cancellations work" },
            { img: setupaccount, text: "Setting up your account" },
            { img: hostel, text: "HostelCover for guests" }]
            .map(({ img, text }, index) => (
              <div key={index} className="text-center">
                <img src={img} alt={text} className="rounded-lg w-full h-40 object-cover mb-2" />
                <p className="text-xl font-medium">{text}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Top Articles Section */}
      <div className="container mx-auto max-w-5xl mt-10">
        <h2 className="text-3xl font-bold mb-4">Top articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Check your reservation status as a guest", desc: "Your reservation status keeps you updated on all kinds of things, such as whether you’re..." },
            { title: "Deactivating or deleting your account", desc: "We’d hate to see you go, but if you’ve decided to leave Airbnb, you have a couple of options..." },
            { title: "Verify your phone number", desc: "Let’s connect! Make sure that the right people have your correct phone number. Hosts need..." },
            { title: "Editing a review you wrote", desc: "To encourage honest and impartial reviews, we..." },
            { title: "Instant Book", desc: "Want to book a place right away? Try..." },
          ].map(({ title, desc }, index) => (
            <div key={index} className="w-full md:w-[360px]">
              <a href="#" className="text-lg underline font-medium text-black">{title}</a>
              <p className="text-gray-500 mb-4">{desc}</p>
              <Divider />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black text-white flex flex-col items-center py-10 mt-10">
        <h1 className="text-3xl font-bold mb-6">Explore more</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {[{ img: policy, title: "Our community policies", desc: "How we build a foundation of trust." },
            { img: safety, title: "Safety tips and guidelines", desc: "Resources to help travellers stay safe." }]
            .map(({ img, title, desc }, index) => (
              <div key={index} className="bg-red-950 rounded-lg overflow-hidden shadow-lg w-80">
                <img src={img} alt={title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{title}</h2>
                  <p className="text-sm">{desc}</p>
                </div>
              </div>
            ))}
          <div className=" text-white rounded-lg p-6 shadow-lg text-center md:text-left w-80">
            <h2 className="text-2xl font-semibold mb-4">Need to get in touch?</h2>
            <p className="text-xl mb-4">We'll start with some questions and get <br /> you to the right place.</p>
            <button className="bg-white text-black w-full font-semibold py-2 px-4 rounded mb-4">Contact us</button>
            <p className="text-xl">You can also <a href="#" className="underline">give us feedback.</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpGuest;
