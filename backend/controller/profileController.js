import Profile from '../models/profileModel.js'
import User from '../models/userModel.js'
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
            emergencyContact="",
            gender = "",
            address="",
          } = req.body;
          const id= req.user.id;
          const userDetails = await User.findById(id);
          const profile = await Profile.findById(userDetails.additionalDetails);
          await profile.save();
          profile.firstName = firstName || profile.firstName;
          profile.lastName = lastName || profile.lastName;
          profile.dateOfBirth = dateOfBirth || profile.dateOfBirth;
          profile.address = address || profile.address;
          profile.contactNumber = contactNumber || profile.contactNumber;
          profile.emergencyContact = emergencyContact || profile.emergencyContact;
          profile.gender = gender || profile.gender;
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

    export const updateProfilePicture = async (req, res) => {
      try {
        console.log("Files received:", req.files)
          if (!req.files || !req.files.profilePicture) {
              return res.status(400).json({ success: false,
                 message: "No image uploaded" });
          }

          const displayPicture = req.files.profilePicture;  
          const userId = req.user.id;
  
          const result = await uploadImageToCloudinary(
              displayPicture,
              process.env.FOLDER_NAME,
              1000,
              90
          );
  
          if (!result.secure_url) {
              return res.status(500).json({ success: false, message: "Image upload failed" });
          }
  
          const updatedProfile = await User.findByIdAndUpdate(
              userId, 
              {
                $set: {
                  profilePicture: result.secure_url,
                },
              },
              {     
                new: true,
                runValidators: true
              } 
          ).select("-password");
  
          if (!updatedProfile) {
            return res.status(500).json({ success: false, message: "Profile update failed" });
          }
          res.status(200).json({
              success: true,
              message: "Image updated successfully",
              data: updatedProfile,
          });
      } catch (error) {
          res.status(500).json({ success: false, message: error.message });
      }
  };
  