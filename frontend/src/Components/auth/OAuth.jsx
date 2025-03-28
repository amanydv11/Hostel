
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import {app} from "../../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../../redux/user/userSlice";
const OAuth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    
    <button
      type="button"
      onClick={handleGoogleClick}
      className="w-full cursor-pointer gap-8 flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2"
    >
      <FaGoogle/>
      <span>Continue with Google</span>
    </button>

  );
};

export default OAuth;
