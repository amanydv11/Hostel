import React from 'react';
import { Divider } from '@mui/material';
import { FaChevronRight, FaExclamationCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import policy from '../assets/policy.png';

const HelpHost = () => {
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
            <p className="text-gray-600 mb-6">
              Find all your reservations, news, and to-dos in the Today tab.
            </p>
            <Divider />
            <Link to="#" className="flex justify-between items-center  mt-2">
              Go to TodayTab
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <div className="container mx-auto max-w-5xl mt-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Guides for Hosts</h1>
          <Link to="/help/all-topic" className="text-gray-500">Browse all topics &gt;</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blta78895c23e1f5ec3/optimizing-your-online-listing-optimized.jpg",
              text: "Optimizing your listing",
            },
            {
              img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/bltc5b5fba2bdc0a264/getting-paid-optimized.jpg",
              text: "Getting paid",
            },
            {
              img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt897bd4f509190bff/achieving-your-hosting-goals-optimized.jpg",
              text: "Achieving your hosting goals",
            },
            {
              img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blt55fbbff760dc003d/changes-cancellations-refunds-optimized.jpg",
              text: "Changes, cancellations, and refunds for Hosts",
            },
          ].map(({ img, text }, index) => (
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
            { title: "If your guest cancels", desc: "It happens - plans change! If a guest needs to cancel their reservation, we're here to help you..." },
            { title: "Getting protected through HostelCover for Hosts", desc: "Sometimes accidents happen, which is why there's HostelCover for Hosts. HostelCover for Hosts is..." },
            { title: "Refund your guest", desc: "It can happen to the best of Hosts: The wifi is a no-show, or the water supply. If something..." },
            { title: "How a Host cancels a booking", desc: "MyHostel guests look forward to their stays, but we understand there are times when you may..." },
            { title: "Optimizing your listing", desc: "Check out this essential guide to help you update or fine-tune your listing. Here we are providing..." },
          ].map(({ title, desc }, index) => (
            <div key={index} className="w-full md:w-[360px]">
              <a href="#" className="text-lg underline font-medium text-black">{title}</a>
              <p className="text-gray-500 mb-4">{desc}</p>
              <Divider />
            </div>
          ))}
        </div>
      </div>

      {/* Explore More Section */}
      <div className="bg-black text-white flex flex-col items-center py-10 mt-10">
        <h1 className="text-3xl font-bold mb-6">Explore more</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { img: policy, title: "Our community policies", desc: "How we build a foundation of trust." },
            { img: "https://images.contentstack.io/v3/assets/bltec2ed8e3c4b1e16d/blte827c6d6cb6360b1/Airbnb-Resources-Web.png", title: "Safety tips and guidelines", desc: "Resources to help travelers stay safe." },
          ].map(({ img, title, desc }, index) => (
            <div key={index} className="bg-red-950 rounded-lg overflow-hidden shadow-lg w-80">
              <img src={img} alt={title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p className="text-sm">{desc}</p>
              </div>
            </div>
          ))}
          <div className="text-white rounded-lg p-6 shadow-lg text-center md:text-left w-80">
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

export default HelpHost;
