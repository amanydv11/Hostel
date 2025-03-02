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

export const cancelBooking = async(req,res)=>{
    try {
        const { bookingId } = req.params;
        const booking = await Booking.findById(bookingId);
        if (!booking) {
            return res.status(404).json({
                success: false,
                message: "Booking not found"
            });
        }
        if (booking.customerId.toString() !== req.user.id && 
            booking.hostId.toString() !== req.user.id) {
            return res.status(403).json({
                success: false,
                message: "You are not authorized to cancel this booking"
            });
        }
        if (booking.status === 'cancelled') {
            return res.status(400).json({
                success: false,
                message: "Booking is already cancelled"
            });
        }
        booking.status = 'cancelled';
        booking.cancelledAt = new Date();
        booking.cancelledBy = req.user.id;

        await booking.save();

        res.status(200).json({
            success: true,
            message: "Booking cancelled successfully",
            booking: booking
        });

    } catch (error) {
        console.error("Error in cancelling booking:", error);
        res.status(500).json({
            success: false,
            message: "Failed to cancel booking",
            error: error.message
        });
    }
}
