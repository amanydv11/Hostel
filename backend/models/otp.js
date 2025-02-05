import mongoose from "mongoose";
const tempUserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    verifyOtp: { type: String, required: true },
    verifyOtpExpireAt: { type: Date, required: true },
  });
  
  const TempUser = mongoose.model("TempUser", tempUserSchema);
export default TempUser  