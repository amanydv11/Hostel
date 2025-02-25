import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    hostId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    propertyId:{
        type:mongoose.Schema.Types.ObjectId,    
        ref:'Property',
    },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
    },
    totalPrice:{
        type:Number,
        required:true,
    },  
},
{timestamps:true}
)

const Booking = mongoose.model("Booking",BookingSchema);
export default Booking;
