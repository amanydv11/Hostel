import Profile from '../models/Profile.js'
import User from '../models/User.js'
import {uploadImageToCloudinary} from '../utils/image.js'
import dotenv from "dotenv";
dotenv.config()

export const updateProfile = async(req, res) => {
  try {
      const {
          firstName = "",
          lastName = "",
          dateOfBirth = "",
          contactNumber = "",
          emergencyContact = "",
          gender = "",
          address = "",
      } = req.body;

      // Validate required fields
      if(!firstName || !lastName || !dateOfBirth || !contactNumber || !gender || !address) {
          return res.status(400).json({
              success: false,
              message: "All fields are required"
          });
      }

      const id = req.user.id;
      // Use findById instead of findByIdAndUpdate here
      const userDetails = await User.findById(id);

      if(!userDetails) {
          return res.status(404).json({
              success: false,
              message: "User not found"
          });
      }

      let profile;
      // If no profile exists, create new one
      if(!userDetails.additionalDetails) {
          profile = await Profile.create({
              firstName,
              lastName,
              dateOfBirth,
              contactNumber,
              emergencyContact,
              gender,
              address,
          });
          
          // Update user with new profile reference
          userDetails.additionalDetails = profile._id;
          await userDetails.save();
      } else {
          // If profile exists, update it
          profile = await Profile.findByIdAndUpdate(
              userDetails.additionalDetails,
              {
                  firstName,
                  lastName,
                  dateOfBirth,
                  contactNumber,
                  emergencyContact,
                  gender,
                  address,
              },
              { new: true } // Return updated document
          );

          // If profile was somehow deleted but reference exists
          if (!profile) {
              profile = await Profile.create({
                  firstName,
                  lastName,
                  dateOfBirth,
                  contactNumber,
                  emergencyContact,
                  gender,
                  address,
              });
              
              userDetails.additionalDetails = profile._id;
              await userDetails.save();
          }
      }

      // Get updated user details with populated profile
      const updatedUserDetails = await User.findById(id)
          .populate("additionalDetails")
          .exec();

      return res.status(200).json({
          success: true,
          message: "Profile updated successfully",
          updatedUserDetails,
      });

  } catch (error) {
      console.log(error);
      return res.status(500).json({
          success: false,
          message: error.message
      });
  }
};

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



  
  export const getProfile = async(req,res)=>{
    try {
        const userId = req.user.id;
        const userDetails = await User.findById(userId)
        .populate("additionalDetails")
        .exec();
        if(!userDetails){
            return res.status(404).json({success:false,message:"User not found"})
        }
        return res.status(200).json({
            success:true,
            message:"Profile fetched successfully",
            data:userDetails,
        })
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})

    }
  }
