import mongoose from "mongoose";
const profileSchema = new mongoose.Schema({
    firstName:{
        type:String,
        true:true
    },
    lastName:{
type:String,
    },
    gender:{
        type:String
    },
    dateOfBirth:{
        type:String
    },
    address:{
        type:String
    },
    contactNumber:{
        type:Number,
        trim:true
    },
    emergencyContact:{
        type:Number,
        trim:true
    }
});
 const Profile = mongoose.model("Profile", profileSchema);
export default Profile  