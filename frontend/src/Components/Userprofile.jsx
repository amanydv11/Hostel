import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import GenderCheckBox from './GenderCheckBox';
import UserImage from './UserImage';
import { profileUpdateStart, profileUpdateSuccess, profileUpdateFailure } from '../redux/profile/profileSlice';

const Userprofile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const { currentUser, loading } = useSelector((state) => state.user);
  const [publishError, setPublishError] = useState(null);
  const dispatch = useDispatch();

  const handleCheckboxChange = (gender) => {
    setFormData({ ...formData, gender });
  };

  const handleChange = (e) => {
    if (typeof e === "string") {
      setFormData((prev) => ({ ...prev, contactNumber: e }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  };

  useEffect(() => {
    if (currentUser?.additionalDetails) {
      setFormData({
        firstName: currentUser.additionalDetails.firstName || '',
        lastName: currentUser.additionalDetails.lastName || '',
        dateOfBirth: currentUser.additionalDetails.dateOfBirth || '',
        contactNumber: currentUser.additionalDetails.contactNumber || '',
        emergencyContact: currentUser.additionalDetails.emergencyContact || '',
        gender: currentUser.additionalDetails.gender || '',
        address: currentUser.additionalDetails.address || '',
      });
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(profileUpdateStart());
    try {
      const res = await fetch('/api/profile/update-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(profileUpdateFailure(data.message));
        setPublishError(data.message);
        return;
      }
      dispatch(profileUpdateSuccess(data));
      setPublishError(null);
      navigate('/profile');
    } catch (error) {
      dispatch(profileUpdateFailure(error.message));
      setPublishError('Something went wrong');
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <nav className="text-sm text-gray-600 mb-4">
        <Link to="/account-setting" className="hover:underline">Account</Link> &gt; <span>Personal info</span>
      </nav>

      <div className="flex justify-center">
        <UserImage />
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 sm:p-6 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input disabled className="w-full mt-1 p-2 border rounded border-gray-300 bg-gray-100" placeholder={currentUser?.username} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input id="firstName" value={formData.firstName} onChange={handleChange} className="w-full mt-1 p-2 border rounded border-gray-300" type="text" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input id="lastName" value={formData.lastName} onChange={handleChange} className="w-full mt-1 p-2 border rounded border-gray-300" type="text" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <input id="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="w-full mt-1 p-2 border rounded border-gray-300" type="date" />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <PhoneInput
              value={formData.contactNumber || ""}
              onChange={(value) => setFormData((prev) => ({ ...prev, contactNumber: value }))}
              className="w-full mt-1 p-2 border rounded border-gray-300"
              international
              defaultCountry="IN"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <textarea id="address" value={formData.address} onChange={handleChange} className="w-full mt-1 p-2 border rounded border-gray-300" placeholder="Enter your permanent address" />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Emergency Contact (optional)</label>
            <PhoneInput
              value={formData.emergencyContact || ""}
              onChange={(value) => setFormData((prev) => ({ ...prev, emergencyContact: value }))}
              className="w-full mt-1 p-2 border rounded border-gray-300"
              international
              defaultCountry="IN"
            />
          </div>

          <div className="col-span-2">
            <GenderCheckBox id="gender" onCheckboxChange={handleCheckboxChange} selectedGender={formData.gender} />
          </div>
        </div>

        <div className="mt-6">
          <button type="submit" disabled={loading} className="w-full py-2 text-white bg-red-600 border border-gray-200 px-4 rounded hover:bg-red-700 transition">
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>

        {publishError && (
          <Alert className="mt-4" severity="error">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Userprofile;
