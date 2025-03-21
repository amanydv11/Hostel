import { errorHandler } from "../utils/error.js"
import bcryptjs from 'bcryptjs';
import User from '../models/User.js';
import Property from '../models/Property.js';
import Booking from '../models/Booking.js';
export const updateUser =async(req, res,next)=>{
    if(req.user.id !== req.params.userId){
        return next(errorHandler(403,'You are not allow to update'));
    }
    if(req.body.password){
        if(req.body.password.length <6){
            return next(errorHandler(400,'Use strong passsword'))
        }
        req.body.password = bcryptjs.hashSync(req.body.password,10);
    }
    if(req.body.username){
        if(req.body.username.length <7 || req.body.username.length >20){
            return next(errorHandler(400,'USername must be between 7-20 characters'));
        }
        if(req.body.username.includes(' ')){
            return next(errorHandler(400,'Username cannot contain spaces'));
        }
        if(req.body.username !== req.body.username.toLowerCase()){
            return next(errorHandler(400,'Username must be lower'));
        }
        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
            return next(errorHandler(400,'Username only contain number and letters '));
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.userId,{
                $set:{
                    username:req.body.username,
                    email:req.body.email,
                    profilePicture:req.body.profilePicture,
                    password:req.body.password
                },
            },{new:true});
            const {password,...rest}= updatedUser._doc;
            res.status(200).json(rest);
        } catch (error) {
            next(error)
        }
    }
    };

export const deleteUser = async(req,res,next)=>{
        if(!req.user.isAdmin && req.user.id !== req.params.userId){
            return next(errorHandler(403,'You are not allowed to delete the account'))
        }
        try {
            await User.findByIdAndDelete(req.params.userId);
            res.status(200).json('User has been deleted')
        } catch (error) {
            next(error)
        }
    }
export const signout = async (req,res,next)=>{
    try {
        res.clearCookie('access_token').status(200).json('User has been signed out')
    } catch (error) {
        next(error)
    }
}
export const getUsers = async (req, res, next) => {
    if (!req.user.isAdmin) {
      return next(errorHandler(403, 'You are not allowed to see all users'));
    }
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.sort === 'asc' ? 1 : -1;
  
      const users = await User.find()
        .sort({ createdAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const usersWithoutPassword = users.map((user) => {
        const { password, ...rest } = user._doc;
        return rest;
      });
  
      const totalUsers = await User.countDocuments();
  
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
      const lastMonthUsers = await User.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        users: usersWithoutPassword,
        totalUsers,
        lastMonthUsers,
      });
    } catch (error) {
      next(error);
    }
  };
  export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return next(errorHandler(404, 'User not found'));
      }
      const { password, ...rest } = user._doc;
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };
export const addWishList = async (req, res, next) => {
try {
  const {userId,propertyId} = req.params;
  const user = await User.findById(userId);
  if (!user.wishList) {
    user.wishList = [];
  }
  const property = await Property.findById(propertyId).populate('creator');
  const favoriteProperty = user.wishList.find((item)=>item._id.toString() === propertyId);
  if(favoriteProperty){
    user.wishList = user.wishList.filter((item)=>item._id.toString() !== propertyId);
    await user.save();
    return res.status(200).json({message:"Property removed from wishlist", wishList: user.wishList});
  }else{
    user.wishList.push(property);
    await user.save();
    return res.status(200).json({message:"Property added to wishlist", wishList: user.wishList});
  }
  
}catch (error) {
  console.log(error);
  res.status(404).json({error:error.message});
}
  }
  export const getTripList = async (req,res)=>{
try {
  const {userId} = req.params;
  const trips = await Booking.find({customerId:userId}).populate("customerId hostId propertyId")
  res.status(200).json(trips);
} catch (error) {
  console.log(error);
  res.status(404).json({message: "Can not find trips!", error: error.message });
}
  }

  export const propertyList = async (req,res)=>{
    try {
      const {userId} = req.params;
      const properties = await Property.find({creator:userId}).populate("creator");
      res.status(200).json(properties);
    } catch (error) {
      console.log(error);
      res.status(404).json({message: "Can not find properties!", error: error.message });
    }
  }

  export const reservationList = async (req,res)=>{
    try {
      const {userId} = req.params;
      const reservations = await Booking.find({hostId:userId}).populate("customerId hostId propertyId");
      res.status(200).json(reservations);
    } catch (error) {
      console.log(error);
      res.status(404).json({message: "Can not find reservations!", error: error.message });
    }
  }
