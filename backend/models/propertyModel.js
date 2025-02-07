import mongoose from "mongoose";
const propertySchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
address:{
type:String,
required:true
},
description:{
    type:String,
    required:true
},
typeOfProperty:{
    type:String
},
typeOfRoom:{
    type:String
},
room:{type:Number},
singleBed:{type:Number},
double:{type:Number},
genderallow:{
    type:String,
    required:true
},
priceSingleAc:{type:Number,
    required:true
},
priceDoubleAc:{type:Number,
    required:true
},
priceSingleNonAc:{type:Number,
    required:true
},
priceSingleAc:{type:Number,
    required:true
},
priceSingleAc:{type:Number,
    required:true
},
priceSingleAc:{type:Number,
    required:true
},
priceSingleAc:{type:Number,
    required:true
},
facility:{
type:String,
required:true
},
image:{
    type:String,
    required:true
},
date:{type:Number,
    required: true
}

})
const Property = mongoose.model("Property",propertySchema)
export default Property