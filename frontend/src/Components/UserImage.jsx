import React, { useEffect, useState, useRef } from "react";
import { AlertTitle, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProfilePictureSuccess, updateProfilePictureFailure, updateProfilePictureStart } from "../redux/user/userSlice";
import { useDispatch } from "react-redux";

const UserImage = () => {
  const filePickerRef = useRef();
  const navigate = useNavigate(); 
  const { currentUser, loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  const handleFileUpload = async (e) => {
    e.preventDefault();
   

    if (!imageFile) {
        dispatch(updateProfilePictureFailure("Please select an image to upload."));
        return;
    }

    setImageFileUploading(true);
    setImageFileUploadError(null);
    dispatch(updateProfilePictureStart());

    try {
        const formData = new FormData();
        formData.append("profilePicture", imageFile);

        const res = await fetch("/api/profile/update-image", {
            method: "PUT",
            body: formData,
            credentials: "include", 
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Upload failed");
        
        }
        if (data.success) {
          dispatch(updateProfilePictureSuccess(data.data));
          setImageFileUrl(data.data.profilePicture);
          navigate("/account-setting/profile");
      }
    } catch (error) {
        console.log(error.message)
        dispatch(updateProfilePictureFailure(error.message || "Upload failed"));  
        setImageFileUploadError(error.message || "Upload failed");
    } finally {
        setImageFileUploading(false);
    }
  };
useEffect(()=>{
return () => {
      if (imageFileUrl) {
        URL.revokeObjectURL(imageFileUrl);
      }
    };
},[imageFileUrl]);
  return (
    <div className="flex w-full items-end">
      <div>
        <input
          type="file"
          accept="image/*"
          ref={filePickerRef}
          onChange={handleImageChange}
          hidden
        />
      </div>
      <div
        className="relative w-34 h-34 cursor-pointer shadow-md overflow-hidden rounded-full"
        onClick={() => filePickerRef.current?.click()}
      >
        {imageFileUploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-50">
            <CircularProgress />
          </div>
        )}
        <img
          src={imageFileUrl || currentUser?.profilePicture}
          alt="user"
          className={`rounded-full w-full h-full object-cover border-8 border-[lightgray] ${
            imageFileUploading ? "opacity-60" : " "
          }`}
        />
      </div>
      <button
       onClick={handleFileUpload}
        disabled={loading}
        className="border h-9 py-1 text-white bg-green-500 border-gray-200 px-2 rounded"
      >
        {loading ? "Loading..." : "Upload"}
      </button>

      {imageFileUploadError && <AlertTitle color="error">{imageFileUploadError}</AlertTitle>}
    </div>
  );
};

export default UserImage;
