import React, { useRef,useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import {Alert} from '@mui/material'
import { Link,useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import GenderCheckBox from './GenderCheckBox';
import UserImage from './UserImage';
import { useDispatch } from 'react-redux';
import { profileUpdateStart, profileUpdateSuccess, profileUpdateFailure } from '../redux/profile/profileSlice';
const Userprofile = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({});
  const { currentUser,loading} = useSelector((state) => state.user);
  const [publishError, setPublishError] = useState(null);
  const dispatch = useDispatch();
  const handleCheckboxChange = (gender)=>{
    setFormData({...formData, gender})
      }
  const handleChange =(e)=>{
    if (typeof e === "string") {
      setFormData((prev) => ({ ...prev, contactNumber: e }));
    } else {
      setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    }
  }
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

  const handleSubmit =async (e)=>{
    e.preventDefault()
    dispatch(profileUpdateStart());
    try {
      const res = await fetch('/api/profile/update-profile',{
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        credentials:'include',
        body:JSON.stringify(formData),
      });
      const data= await res.json();
      if(!res.ok){
        dispatch(profileUpdateFailure(data.message));
setPublishError(data.message)
return;
      }
      if(res.ok){
        dispatch(profileUpdateSuccess(data));
        setPublishError(null)
        navigate('/')
      }
    } catch (error) {
      dispatch(profileUpdateFailure(error.message));
      setPublishError('Something went wrong');
    }
  }
  return (
    <div className='max-w-lg m-3 mx-auto p-3 w-full'>
       <nav className="text-sm text-gray-600 mb-4">
                <Link to="/account-setting" className="hover:underline">Account</Link> &gt; <span>Personal info</span>
            </nav>
            <UserImage/>
            <div className="flex justify-center  py-2 px-2">
              
              <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="w-full ">
  <div className="flex flex-col mt-2">
  <span>Username</span>
  <input disabled className='w-full mb-2 py-2 px-1 border rounded border-gray-300' placeholder={currentUser?.username} />
</div>
<div className="flex flex-col mt-2">
  <span>First name</span>
  <input onChange={handleChange} id='firstName' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="text" placeholder='' />
</div>
        <div className="flex flex-col mt-2">
          <span>Last name </span>
        <input onChange={handleChange} id='lastName' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="text" placeholder='' />
        </div>
        <div className="flex flex-col mt-2">
          <span>Date of birth</span>
        <input onChange={handleChange} id='dateOfBirth' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="date" />
        </div>
        
        <div className="flex flex-col mt-2">
          <span>Phone number</span>
          <PhoneInput
        value={formData.contactNumber || ""}
        onChange={(value) => setFormData((prev) => ({ ...prev, contactNumber: value }))}
      className='py-1 px-1 border rounded border-gray-300 overflow-auto text-2xl text-gray-600'
  international
  defaultCountry="IN"
 />
         </div>


<div className="flex flex-col mt-2">
  <span>Address:</span>
<textarea onChange={handleChange} id='address' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="text" placeholder='Enter your permanent address' />
</div>

<div className="flex flex-col mt-2">
  <span>Emergency Contact *(optional)</span>
  <PhoneInput
  value={formData.emergencyContact || ""}
  onChange={(value) => setFormData((prev) => ({ ...prev, emergencyContact: value }))}
      className='py-1 mb-2 px-1 border rounded border-gray-300 overflow-auto text-2xl text-gray-600'
  international

  defaultCountry="IN"
 />
</div>
<div className="mt-2 mb-5">
<GenderCheckBox id='gender'
           onCheckboxChange={handleCheckboxChange}
          selectedGender={formData.gender} />
</div>
<button type='submit' disabled={loading}  className='border py-2 text-white bg-red-600 border-gray-200 px-4 cursor-pointer rounded'>{loading ? 'Loading...' : 'Submit'}</button>
{publishError && (
          <Alert className='mt-5' color='failure'>
            {publishError}
          </Alert>
        )}
      </form>
      </div>
      </div>
    </div>
  )
}

export default Userprofile
