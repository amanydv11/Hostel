import mongoose from "mongoose";
const propertySchema = new mongoose.Schema({
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    
name:{
    type:String,
    required:true
},
address:{
type:String,
required:true
},
pincode:{
    type:Number,
    required:true
},
country:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},
city:{
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
   
},
priceDoubleAc:{type:Number,
    
},
priceSingleNonAc:{type:Number,
    
},
priceDoubleNonAc:{type:Number,
    
},
priceSingleCooler:{type:Number,
  
},
priceDoubleCooler:{type:Number,
   
},
priceof1bhk:{type:Number,
    
},
priceof2bhk:{type:Number,
    
},
priceof3bhk:{type:Number,
    
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