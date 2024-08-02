/* eslint-disable no-undef */
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const subCategorymodel = require('../models/subcategoryModels');

exports.setcategoryId = (req, res, next) => {
    if (!req.body.category) req.body.category = req.params.categoryId;
    next();
};

exports.createSubCategory =asyncHandler(async (req, res) =>{
    const {name , category} = req.body;
    const subcategory = await  subCategorymodel.create({
        name , 
        slug :slugify(name) ,
        category 
    });
    res.status(201).json({data: subcategory});
})


exports.getAllSubCategory =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    const subcategory = await  subCategorymodel.find({})                //شيل ال id 
    .skip(skip).limit(limit).populate({path : 'category' , select : 'name -_id'});
    res.status(201).json({ results :subcategory.length , data: subcategory});
})

//specfic  subcategory for category
exports.SpecAllSubCategory =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    let filterojected = {};
    if(req.params.categoryId) filterojected = {category : req.params.categoryId}
    console.log(req.params.categoryId);
    const subcategory = await  subCategorymodel.find(filterojected)                //شيل ال id 
    .skip(skip).limit(limit).populate({path : 'category' , select : 'name -_id'});
    res.status(201).json({ results :subcategory.length , data: subcategory});
})

exports.getoneSubCategory =asyncHandler(async (req, res) =>{
    const id = req.params.id;
    const subcategory = await  subCategorymodel.findById(id)
    .populate({path : 'category' , select : 'name -_id'});

    if(!subcategory){
        next(new ApiError({msg: 'Category not found'} , 400));
    }
    res.status(201).json({ data: subcategory});
})


exports.updateSubCategory =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const {name  , category }= req.body;
    const subcategory = await  subCategorymodel.findOneAndUpdate(
        {_id:id} ,
        {name ,   slug :slugify(name) , category} , 
        {new:true} , );
    if(!subcategory){
        next(new ApiError({msg: 'Category not found'} , 400));
    }
    res.status(201).json({ data: subcategory});
})

exports.deleteSubCategory =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const subcategory = await  subCategorymodel.findOneAndDelete({_id:id});
    if(!subcategory){
        next(new ApiError({msg: 'Category not found'} , 400));
    }
    res.status(201).json({msg : 'Category deleted'});
})


