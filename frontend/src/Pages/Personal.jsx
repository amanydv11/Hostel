import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import { MdOutlineLockPerson } from "react-icons/md";
import { FaEye } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../redux/profile/profileActions';

const Personal = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { userProfile } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  useEffect(() => {
      if(currentUser?._id){
    dispatch(fetchUserProfile())
    }
  }, [dispatch,currentUser?._id]);

  const profileDetails = userProfile?.data?.additionalDetails || {};

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="w-full md:w-2/3">
          <nav className="text-sm text-gray-600 mb-4">
            <Link to='/account-setting' className="hover:underline">Account</Link> &gt; <span>Personal info</span>
          </nav>
          <h1 className="text-3xl font-bold mb-6">Personal info</h1>
          
          <div className="space-y-6">
            {/* Profile Picture */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">Profile Picture</h2>
                <div className="mt-2">
                  <img 
                    src={currentUser?.profilePicture} 
                    alt="profile" 
                    className="w-24 h-24 rounded-full border"
                  />
                </div>
              </div>
            </div>
            <Divider />

            {/* User Details */}
            {[
              { label: "Username", value: currentUser?.username },
              { label: "Full Name", value: profileDetails?.firstName || profileDetails?.lastName ? `${profileDetails.firstName || ''} ${profileDetails.lastName || ''}` : 'Not set' },
              { label: "Date of Birth", value: profileDetails?.dateOfBirth || 'Not set' },
              { label: "Email address", value: currentUser?.email || 'Not set' },
              { label: "Phone number", value: profileDetails?.contactNumber || 'Not set' },
              { label: "Address", value: profileDetails?.address || 'Not set' },
              { label: "Emergency contact", value: profileDetails?.emergencyContact || 'Not set' }
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold">{item.label}</h2>
                    <p className="text-gray-500">{item.value}</p>
                  </div>
                </div>
                <Divider />
              </div>
            ))}

            {/* Identity Verification */}
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">Identity verification</h2>
                <p className="text-gray-500">Not started</p>
              </div>
            </div>
            <Divider />

            <div className="flex justify-center">
              <Link to='/account-setting/profile' className="underline">Edit your profile information?</Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3">
          <div className="bg-white border border-gray-300 p-6 rounded-lg shadow-md">
            {[
              { 
                icon: <MdOutlineLockPerson className='w-10 h-10' />,
                title: "Why isn’t my info shown here?",
                text: "We’re hiding some account details to protect your identity."
              },
              { 
                icon: <MdOutlineLockPerson className='w-10 h-10' />,
                title: "Which details can be edited?",
                text: "Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again."
              },
              { 
                icon: <FaEye className='w-10 h-10' />,
                title: "What info is shared with others?",
                text: "MyHostel only releases contact information for Hosts and guests after a reservation is confirmed."
              }
            ].map((item, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center gap-3">
                  {item.icon}
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                </div>
                <p className="text-gray-500 mt-2">{item.text}</p>
                {index !== 2 && <Divider className="mt-4" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
