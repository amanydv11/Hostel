import Profile from '../models/profileModel'
import User from '../models/userModel'
import {uploadImageToCloudinary} from '../utils/image.js'
import dotenv from "dotenv";
dotenv.config()

export const updateProfile = async(req,res)=>{
    try {
        const {
            firstName = "",
            lastName = "",
            dateOfBirth = "",
            contactNumber = "",
            emergencyNumber="",
            gender = "",
            address="",
          } = req.body;
          const id= req.user.id;
          const userDetails = await User.findById(id);
          const profile = await Profile.findById(userDetails.additionalDetails);
          const user = await User.findByIdAndUpdate(id, {
            username,
          });
          await user.save();
          profile.firstName = firstName;
          profile.lastName = lastName;
          profile.dateOfBirth = dateOfBirth;
          profile.address = address;
          profile.contactNumber = contactNumber;
          profile.emergencyNumber = emergencyNumber;
          profile.gender = gender;
          await profile.save();
          const updatedUserDetails = await User.findById(id)
          .populate("additionalDetails")
          .exec();
    
        return res.json({
          success: true,
          message: "Profile updated successfully",
          updatedUserDetails,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
          success: false,
          error: error.message,
        });
      }
    }

    export const updateProfilePicture =async(req,res)=>{
        try {
            const displayPicture = req.files.displayPicture
            const userId = req.user.id
            const image = await uploadImageToCloudinary(
              displayPicture,
              process.env.FOLDER_NAME,
              1000,
              1000
            )
            
            console.log(image)
          
            const updatedProfile = await User.findByIdAndUpdate(
              { _id: userId },
              { profilePicture: image.secure_url },
              { new: true }
            )
            res.send({
              success: true,
              message: `Image Updated successfully`,
              data: updatedProfile,
            })
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
              })
        }
    }