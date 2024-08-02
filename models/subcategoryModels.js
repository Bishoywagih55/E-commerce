const mongoose = require('mongoose');


const subcategoryschema = new mongoose.Schema({
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
    category:{
        type:mongoose.Schema.ObjectId,
        ref: 'Category',
        required:[true , "Category must be required"]
    }
},{timestamps: true})
//create model 
const subCategorymodel = mongoose.model('subCategory' , subcategoryschema );

module.exports = subCategorymodel ;