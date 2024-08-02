const mongoose = require('mongoose');


const Brandschema = new mongoose.Schema({
    name :{
        type: String,
        required: [true  , " Brand required"],
        unique: [true , "Brand must be unique"],
        minlenght : [3 , "too short Brand name"],
        maxlenght : [32 , "too long Brand name"],
    },
    //A and b     shoping.com / a-and-b
    slug:{
        type: String,
        lowercase: true,
    },
    image:String,
},{timestamps: true})
//create model 
const Brandmodel = mongoose.model('Brand' , Brandschema );




module.exports = Brandmodel ;