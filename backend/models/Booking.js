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
        get: (date) => date.toISOString().split('T')[0]
    },
    endDate:{
        type:Date,
        required:true,
        get: (date) => date.toISOString().split('T')[0]
    },
    totalPrice:{
        type:Number,
        required:true,
    },  
    status:{
        type:String,
        enum:['pending','confirmed','cancelled'],
        default:'pending',
    },
},
{timestamps:true}
)

const Booking = mongoose.model("Booking",BookingSchema);
export default Booking;
