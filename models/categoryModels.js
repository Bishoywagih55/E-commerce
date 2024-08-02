const mongoose = require('mongoose');


const categoryschema = new mongoose.Schema({
    name :{
        type: String,
        required: [true  , " Category required"],
        unique: [true , "category must be unique"],
        minlenght : [3 , "too short category name"],
        maxlenght : [32 , "too long category name"],
    },
    //A and b     shoping.com / a-and-b
    slug:{
        type: String,
        lowercase: true,
    },
    image:String,
},{timestamps: true})
//create model 
const Categorymodel = mongoose.model('Category' , categoryschema );

module.exports = Categorymodel ;