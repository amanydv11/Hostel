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
    properties = await Property.find({}).populate('creator');
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
    const property = await Property.findById(propertyId).populate('creator');
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
    properties=await Property.find({
      $or:[
        {city:{$regex:search,$options:"i"}},
        {province:{$regex:search,$options:"i"}},
        {country:{$regex:search,$options:"i"}},
        {amenities:{$regex:search,$options:"i"}},
        {price:{$regex:search,$options:"i"}},
        {bedroomCount:{$regex:search,$options:"i"}},
        {bedCount:{$regex:search,$options:"i"}},
        {bathroomCount:{$regex:search,$options:"i"}},
        {guestCount:{$regex:search,$options:"i"}},
        {creator:{$regex:search,$options:"i"}},
        {category:{$regex:search,$options:"i"}},
        {type:{$regex:search,$options:"i"}},
      ]
     }).populate('creator')
   }
   res.status(200).json(properties)
  } catch (error) {
    res.status(404).json({message: "Properties not found",error:error.message});
    console.log(error);
}
}
