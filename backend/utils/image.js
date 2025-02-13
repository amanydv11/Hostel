import cloudinary from 'cloudinary'

export const uploadImageToCloudinary = async(file, folder , height, quality)=>{

    try {
        if (!file || !file.tempFilePath) {
            throw new Error("No file or invalid file provided");
        }

        const options = {
            folder,
            resource_type: "auto",
        };

        if (height) {
            options.height = height;
        }

        if (quality) {
            options.quality = quality;
        }

        const result = await cloudinary.v2.uploader.upload(file.tempFilePath, options);
        return result;
    } catch (error) {
        console.error("Error in uploadImageToCloudinary:", error);
        throw error;
    }
}