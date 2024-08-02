const mongoose = require('mongoose');


const Productschema = new mongoose.Schema({
    title :{
        type: String,
        trim : true,
        required: [true  , " Product required"],
        unique: [true , "Product must be unique"],
        minlenght : [3 , "too short Product name"],
        maxlenght : [32 , "too long Product name"],
    },
    //A and b     shoping.com / a-and-b
    slug:{
        type: String,
        required: true, 
        lowercase: true,
    },
    description:{
        type: String,
        required: [true  , " description required"],
        minlenght : [3 , "too short description name"],
    },
    quantity:{
        type: Number,
        required : [true , "quantity required"],

    },
    sold : {
        type:Number,
        default: 0,
    },
    price: {
        type: Number,
        required : [true , " price required"],
        trim : true,
        max : [200000 , "too long Product price"],
    },
    priceAfterDiscount: {
        type: Number,
        trim : true,
        max : [200000 , "too long priceAfterDiscount"],
    },
    
    imageCover :{
        type: String,
        required : [true , " image cover required"],
    },
    color:[String],
    image: [String],
    category:{
        type:mongoose.Schema.ObjectId,
        ref: 'Category',
        required:[true , "Category must be required"]
    },
    subcategory: {
        type:mongoose.Schema.ObjectId,
        ref: 'subCategory',
    },
    Brand : {
        type:mongoose.Schema.ObjectId,
        ref: 'Brand',
    },
    rating : {
        type: Number,
        min : [1 , 'rating must be above or equal 1.0'],
        max : [5 , 'rating must be below or equal 5.0'],
    },
    ratingcount : {
        type: Number,
        default : 0,
    }
},{timestamps: true})
//create model 
const Productmodel = mongoose.model('Product' , Productschema );

// quantity price / after price / sold/ color / quantity / image cover 


module.exports = Productmodel ;