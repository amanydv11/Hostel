export const createBooking = async (req,res,next)=>{
    try {
        const {customerId,hostId,propertyId,startDate,endDate,totalPrice} = req.body;
        const newBooking = new Booking({
            customerId,
            hostId,
            propertyId,
            startDate,
            endDate,
            totalPrice,
        })
        await newBooking.save();
        res.status(201).json(newBooking);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Fail to create a new Booking!", error: error.message })
    }
}
