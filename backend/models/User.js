import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        
        unique:true

    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        
        unique:true

    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Profile" ,
    },

    isAccountVerified:{
        type:Boolean,
        default:false
    },
    profilePicture:{
        type:String,
        default:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    verifytoken:{
        type:String,
    },
    resetPasswordToken:String,
    resetPasswordExpiresAt:Date,
    verificationToken:String,
    verificationTokenExpiresAt:Date,
    tripList: {
        type: Array,
        default: [],
      },
      wishList: {
        type: Array,
        default: [],
      },
      propertyList: {
        type: Array,
        default: [],
      },
      reservationList: {
        type: Array,
        default: [],
      }
},
 {timestamps:true}
)
const User = mongoose.model('User',userSchema) 
export default User;