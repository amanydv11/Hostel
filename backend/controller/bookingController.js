import Booking from "../models/Booking.js";

export const createBooking = async (req,res)=>{
    try {
        const {customerId,hostId,propertyId,startDate,endDate,totalPrice} = req.body;
        if(!customerId || !hostId || !propertyId || !startDate || !endDate || !totalPrice){
            return res.status(400).json({ success:false, message:"All fields are required"});
        }
        const start = new Date(startDate);
        const end = new Date(endDate);
        if(start >= end){
            return res.status(400).json({ success:false, message:"Invalid date range"});
            
        }
        const existingBooking = await Booking.findOne({
            propertyId,
            $or:[
                {startDate:{$lte:endDate},endDate:{$gte:startDate}},
                
            ]
        })
        if(existingBooking){
            return res.status(400).json({ success:false, message:"Property is already booked for the selected dates"});
        }
        const newBooking = new Booking({
            customerId,
            hostId,
            propertyId,
            startDate,
            endDate,
            totalPrice,
            status:'confirmed',
        })
        await newBooking.save();
        res.status(201).json({ success:true, message:"Booking created successfully", booking:newBooking});
    } catch (error) {
        console.log("Error in creating booking:",error);
        res.status(400).json({ success:false, message: "Fail to create a new Booking!", error: error.message })
    }
}
