import React, { useRef,useState,useEffect } from 'react'
import { useSelector } from 'react-redux';
import {Alert, AlertTitle, CircularProgress} from '@mui/material'
import { getCircularProgressUtilityClass } from '@mui/material'
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import GenderCheckBox from './GenderCheckBox';
const Userprofile = () => {
  const [formData, setFormData] = useState({});
  const filePickerRef =useRef()
  const { currentUser ,error,loading} = useSelector((state) => state.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(null);
  const handleCheckboxChange = (gender)=>{
    setFormData({...formData, gender})
      }
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file))
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);
const uploadImage =async()=>{
  setImageFileUploadError(null);
}

  const handleChange =(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return (
    <div className='max-w-lg m-3 mx-auto p-3 w-full'>

       <nav className="text-sm text-gray-600 mb-4">
                <Link to="/account-setting" className="hover:underline">Account</Link> &gt; <span>Personal info</span>
            </nav>
            <div className="flex justify-center  py-2 px-2">
      <form onSubmit={handleSubmit} className="w-full ">
        <div className="mt-2 mb-4">
         
        <input
          type="file"
          accept="image/*"
          ref={filePickerRef}
          onChange={handleImageChange}
          hidden
        />
        </div>
      <div className="relative w-34 h-34  cursor-pointer shadow-md overflow-hidden rounded-full"
      onClick={()=>filePickerRef.current?.click()}
      >
{
imageFileUploadProgress && (
  <CircularProgress value={imageFileUploadProgress || 0}
  text={`${imageFileUploadProgress}%`}
  strokeWidth={5}
  style={{
    root: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    },
    path: {
      stroke: `rgba(62,152,199,${imageFileUploadProgress / 100})`,
    },
  }}
  />
)}
<img src={imageFileUrl || currentUser.profilePicture} alt="user"
className={`rounded-full w-full h-full object-cover border-8 border-[lightgray]
${
  imageFileUploadProgress && 
  imageFileUploadProgress<100 &&
  "opacity-60"
}`}
/> </div>
{
  imageFileUploadError &&(
    <AlertTitle color='failure'>{imageFileUploadError}</AlertTitle>
  )}
  <div className="flex flex-col mt-2">
  <span>Username</span>
  <input onChange={handleChange} id='first' disabled className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="text" placeholder={currentUser?.username} />
</div>
<div className="flex flex-col mt-2">
  <span>First name</span>
  <input onChange={handleChange} id='first' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="text" placeholder='' />
</div>
        <div className="flex flex-col mt-2">
          <span>Last name </span>
        <input onChange={handleChange} id='last' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="text" placeholder='' />
        </div>
        <div className="flex flex-col mt-2">
          <span>Date of birth</span>
        <input onChange={handleChange} id='dateofbirth' className='w-full mb-2 py-2 px-1 border rounded border-gray-300' type="date" />
        </div>
        
        <div className="flex flex-col mt-2">
          <span>Phone number</span>
          <PhoneInput
          id='phone'
          onChange={handleChange}
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
  onChange={handleChange}
      className='py-1 mb-2 px-1 border rounded border-gray-300 overflow-auto text-2xl text-gray-600'
  international
  id='emergency'
  defaultCountry="IN"
 />
</div>
<div className="mt-2 mb-5">
<GenderCheckBox
           onCheckboxChange={handleCheckboxChange}
          selectedGender={formData.gender} />
</div>
<button type='submit' disabled={loading || imageFileUploading}  className='border py-2 text-white bg-red-600 border-gray-200 px-4 rounded'>{loading ? 'Loading...' : 'Submit'}</button>
      </form>
      </div>
    </div>
  )
}

export default Userprofile
