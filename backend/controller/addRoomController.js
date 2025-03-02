import Property from '../models/Property.js'
import User from '../models/User.js'
import dotenv from 'dotenv'
import {uploadImageToCloudinary} from '../utils/image.js'
dotenv.config()

  export const addRoom = async (req, res, next) => {
    try {
        const {
            creator,
            category,
            type,
            streetAddress,
            aptSuite,
            city,
            province,
            country,
            guestCount,
            bedroomCount,
            bedCount,
            bathroomCount,
            amenities,
            title,
            description,
            highlight,
            highlightDesc,
            price,
        } = req.body;

        if (!req.files || !req.files.listingPhotos) {
            return res.status(400).json({ message: "No image uploaded." });
        }

        const images = req.files.listingPhotos;
        const imageUploadPromises = [];
        let listingPhotoPaths = [];

        if (Array.isArray(images)) {
            images.forEach((image) => {
                imageUploadPromises.push(uploadImageToCloudinary(image, process.env.FOLDER_NAME_HOSTEL, 1000, 90));
            });
        } else {
            imageUploadPromises.push(uploadImageToCloudinary(images, process.env.FOLDER_NAME_HOSTEL, 1000, 90));
        }

        const uploadedImages = await Promise.all(imageUploadPromises);
        listingPhotoPaths = uploadedImages.map((img) => img.secure_url);

        const newListing = new Property({
            creator,
            category,
            type,
            streetAddress,
            aptSuite,
            city,
            province,
            country,
            guestCount,
            bedroomCount,
            bedCount,
            bathroomCount,
            amenities,
            listingPhotoPaths,
            title,
            description,
            highlight,
            highlightDesc,
            price,
        });

        await newListing.save();
        res.status(200).json(newListing);
    } catch (error) {
        res.status(409).json({ message: "Failed to create listing", error: error.message });
        console.log(error);
    }
};
export const getRooms = async (req, res, next) => {
  const qCategory = req.query.category;
  try {
   let properties;
   if(qCategory){
    properties = await Property.find({category:qCategory}).populate('creator');
   }else{
    properties = await Property.find().populate('creator');
   }
   res.status(200).json(properties);
  } catch (error) {
    res.status(404).json({message: "Properties not found",error:error.message});
    console.log(error);
}
}
export const getRoomById = async (req, res) => {
  try {
    const {propertyId} = req.params;
    const property = await Property.findById(propertyId).populate({
      path: "creator",
      select: "profilePicture additionalDetails",
      populate: {
        path: "additionalDetails",
        model:"Profile",
        select: "firstName",
      },
    });
    res.status(200).json(property);
  } catch (error) {
    res.status(404).json({message: "Property not found",error:error.message});
  }
}
export const searchRoom = async (req, res) => {
  const {search}=req.params
  try {
   let properties=[]
   if(search==="all"){
    properties=await Property.find({}).populate('creator')
   }else{
    const searchRegex = new RegExp(search, 'i');
      
    properties = await Property.find({
      $or: [
        { city: searchRegex },
        { province: searchRegex },
        { country: searchRegex },
        { amenities: searchRegex },
        { category: searchRegex },
        { type: searchRegex },
       
        {
          $or: [
            { price: !isNaN(search) ? Number(search) : null },
            { bedroomCount: !isNaN(search) ? Number(search) : null },
            { bedCount: !isNaN(search) ? Number(search) : null },
            { bathroomCount: !isNaN(search) ? Number(search) : null },
            { guestCount: !isNaN(search) ? Number(search) : null }
          ]
        }
      ]
    }).populate('creator');
   }
   res.status(200).json(properties)
  } catch (error) {
    res.status(404).json({message: "Properties not found",error:error.message});
    console.log(error);
}
}
export const removeRoom = async(req,res)=>{
  try {
    const { propertyId } = req.params;
    const { userId } = req.body;
    const property = await Property.findById(propertyId).populate('creator');
    if (!property) {
        return res.status(404).json({
            success: false,
            message: "Property not found"
        });
    }
    if (property.creator._id.toString() !== userId && !req.user.isAdmin) {
        return res.status(403).json({
            success: false,
            message: "Not authorized to delete this property"
        });
    }
    await Booking.deleteMany({ propertyId });
    for (const photoUrl of property.listingPhotoPaths) {
        const publicId = photoUrl.split('/').pop().split('.')[0];
        await cloudinary.uploader.destroy(publicId);
    }
    await Property.findByIdAndDelete(propertyId);

    res.status(200).json({
        success: true,
        message: "Property and related data deleted successfully"
    });

} catch (error) {
    console.error("Error in removing property:", error);
    res.status(500).json({
        success: false,
        message: "Failed to delete property",
        error: error.message
    });
}

}
