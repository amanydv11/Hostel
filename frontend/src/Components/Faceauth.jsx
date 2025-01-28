import {  FaFacebook } from 'react-icons/fa'
import { FacebookAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice";

const Faceauth = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFacebookClick = async () => {
    const provider = new FacebookAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const resultsFromFacebook = await signInWithPopup(auth, provider);
      const res = await fetch("api/auth/facebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromFacebook.user.displayName,
          email: resultsFromFacebook.user.email,
          facebookPhotoURL: resultsFromFacebook.user.photoURL,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.error("Facebook login error:", error);
    }
  };

  return (

    <button type="button" onClick={handleFacebookClick} className="w-full gap-8 cursor-pointer flex items-center justify-center border border-gray-300 py-3 rounded-lg mb-2">
                       <FaFacebook/>
                        <span>Continue with Facebook</span>
                    </button>
    
  );
};

export default Faceauth;
