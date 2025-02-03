import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import OtpInput from 'react-otp-input';
import { auth} from "../../firebase";
import { RecaptchaVerifier,signInWithPhoneNumber } from 'firebase/auth';
const PhoneLogin = () => {
    const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [user, setUser] = useState(null);
    const sendOtp = async () => {
      e.preventDefault()
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "recaptcha-container",
          {
            size: "invisible",
          },
          auth
        );
  
        const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
        setVerificationId(confirmation.verificationId);
        alert("OTP Sent!");
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    };
    const verifyOtp = async () => {
      try {
        const credential = window.confirmationResult || verificationId;
        const result = await credential.confirm(otp);
        setUser(result.user);
        const res = await fetch("/api/auth/phone", {
          method:'POST',
          phone: result.user.phoneNumber,
          uid: result.user.uid,
        });
  
        console.log("User authenticated:", res.data);
      } catch (error) {
        console.error("Error verifying OTP:", error);
      }
    };
  return (
    <div>
     <form className='rounded-lg  max-w-md w-full'>
      <PhoneInput
      className='py-1 px-1 border rounded border-gray-300 overflow-auto text-2xl text-gray-600'
  international
  defaultCountry="IN"
  value={phone}
  onChange={setPhone}/>
  <p className="text-xs text-gray-500 mb-4">
    We’ll call or text you to confirm your number. Standard message and data rates apply. <a href="/policy" className="text-black font-bold underline gap-1">Privacy Policy</a>
</p>
<button onClick={sendOtp} className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold mb-4">Continue</button>
    </form>
   </div>
  )
}

export default PhoneLogin
