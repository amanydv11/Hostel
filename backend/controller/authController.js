import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs'
import crypto from 'crypto'
import{errorHandler} from '../utils/error.js'
import jwt from 'jsonwebtoken'
import { sendPasswordResetEmail,sendResetSuccessEmail } from "../email/emails.js";
import nodemailer from "nodemailer";

export const signup = async(req,res,next)=>{
const {username, email, password}= req.body;

if(!username
     || !email 
     || !password
      || username === ''
       || email === '' 
       || password === '')
       {
        next(errorHandler(400, 'All fields are required'));
}

const hashedPassword =await bcryptjs.hash(password,10);
 const newUser = new User({
    username,
    email,
    password:hashedPassword,
 })

 try {
    await newUser.save();
res.json({message:'user created'})
 } catch (error) {
    next(error);
}
 };

 export const signin = async(req,res,next)=>{
    const {email,password}= req.body;
    if(!email || !password || email ==='' || password === ''){
        next(errorHandler(400, 'All fields are required'));
    }
try {
    const validUser = await User.findOne({email});
    if(!validUser){
        next(errorHandler(400, 'Wrong Credentails'));
    }
    const validPassword = bcryptjs.compareSync(password,validUser.password);
    if(!validPassword){
        next(errorHandler(404, 'Wrong Credentails'));
    }
const token = jwt.sign(
    {id:validUser._id,isAdmin:validUser.isAdmin},process.env.JWT_SECRET
);

res.status(200).cookie('access_token',token,{
    httpOnly:true,
}).json(validUser)

} catch (error) {
    next(error)
}
 }

 export  const google =async (req,res,next)=>{
    const{email,name,googlePhotoURL}= req.body;
    try {
        const user = await User.findOne({email});
        if(user){
            const token =jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET);
            const{password, ...rest} = user._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(rest)
        }else{
            const generatedPassword = 
            Math.random().toString(36).slice(-8)+
            Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword,10);
            const newUser = new User({
                username:name.toLowerCase().split(' ').join('')+Math.random().toString(9).slice(-4),
                email,
                password:hashedPassword,
                profilePicture:googlePhotoURL,
            });
            await newUser.save();
            const token = jwt.sign({id:newUser._id,isAdmin:newUser.isAdmin},process.env.JWT_SECRET);
            const{password, ...rest} = user._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(rest)
        }
    } catch (error) {
        next(error)
    }
 }

export const facebook = async(req,res,next)=>{
    const { email, name, facebookPhotoURL } = req.body;

    try {
      let user = await User.findOne({ email });
  
      if (user) {
        // Generate a token for existing user
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT_SECRET
        );
        const { password, ...rest } = user._doc;
  
        return res.status(200).cookie('access_token', token, {
          httpOnly: true,
        }).json(rest);
      } else {
        // Create a new user
        const generatedPassword =
          Math.random().toString(36).slice(-8) +
          Math.random().toString(36).slice(-8);
        const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
  
        const newUser = new User({
          username: name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
          email,
          password: hashedPassword,
          profilePicture: facebookPhotoURL,
        });
  
        await newUser.save();
  
        // Generate a token for the new user
        const token = jwt.sign(
          { id: newUser._id, isAdmin: newUser.isAdmin },
          process.env.JWT_SECRET
        );
        const { password, ...rest } = newUser._doc;
  
        return res.status(200).cookie('access_token', token, {
          httpOnly: true,
        }).json(rest);
      }
    } catch (error) {
      next(error);
    }
}


 export const forgotpassword = async(req,res,next)=>{
    const {email}= req.body;

    try {
        const validUser = await User.findOne({email});
    if(!validUser){
        next(errorHandler(400, 'Wrong Credentails'));
    }
  const resetToken= crypto.randomBytes(20).toString("hex");
  const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;
validUser.resetPasswordToken = resetToken;
validUser.resetPasswordExpiresAt = resetTokenExpiresAt;
await validUser.save();
await sendPasswordResetEmail(validUser.email,`http://localhost:5173/reset/${resetToken}`);

res.status(200).json({success:true,message:"Password reset link has been sent to your email"});
    } catch (error) {
        next(error)
    }
    
 }
 export const resetPassword = async(req,res,next)=>{
    try {
        const {token}= req.params;
        const {password} = req.body;
        const validUser = await User.findOne({
            resetPasswordToken:token,
            resetPasswordExpiresAt:{$gt:Date.now()},
        });
        if(!validUser){
            return res.status(400).json({success :false , message:"Invalid or expired reset token"})
        }
        const hashedPassword = await bcryptjs.hash(password,10);
        validUser.password =hashedPassword;
        validUser.resetPasswordToken =undefined;
        validUser.resetPasswordExpiresAt = undefined;
        await validUser.save();

      await sendResetSuccessEmail(validUser.email);

      res.status(200).json({success:true,message:"Password reset successful"});
    } catch (error) {
        next(error)
    }
 }

 const transporter = nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASS
      }
    });

 export const sendVerifyOtp = async(req,res,next)=>{
  try {
    const {email} = req.body;
    const user = await User.findOne(email)
    if(user.isAccountVerified){
      return res.json({success:false,message:"Account already verified"})

    }
    const otp = String(Math.floor(100000 + Math.random()*900000));

    user.verifyOtp = otp;
    user.verifyOtpExpireAt = Date.now() + 1*60*60*1000

    await user.save()

    const mailOption = {
      from :process.env.EMAIL,
      to:user.email,
      subject:'Verify your email',
      text:`Your OTP is ${otp}. Verify your account using this OTP`
    }
await transporter.sendMail(mailOption);
res.json({success:true,message:'Verification OTP Sent on Email'})
  } catch (error) {
    res.json({success:false , message:error.message})
  }
 }

 export const verifyEmail = async(req,res)=>{
  const {email,otp}=req.body;
  if(!email||!otp){
    res.json({success:false , message:"missing details"})
  }
try {
  const user = await User.findOne(email);
  if(!email){
  return res.json({success:false , message:'User not found'})
  }
  if(user.verifyOtp === ''|| user.verifyOtp !== otp){
   return res.json({success:false , message:'Invalid OTP'})
  }
if(user.verifyOtpExpireAt < Date.now()){
 return res.json({success:false , message:'Otp Expire'})
}
user.isAccountVerified = true;
user.verifyOtp =''
user.verifyOtpExpireAt=0
await user.save();
return res.json({
  success:true , message:'Email verifeid successfully'
})

} catch (error) {
  res.json({success:false , message:error.message})
}
 }
