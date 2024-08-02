/* eslint-disable no-undef */
const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const Productmodel = require('../models/ProductModels');


exports.createProduct =asyncHandler(async (req, res) =>{
    req.body.slug = slugify(req.body.title);
    const Product = await  Productmodel.create(req.body);
    res.status(201).json({data: Product});
})



exports.getAllProduct =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    const Product = await  Productmodel.find({}).skip(skip).limit(limit);
    res.status(201).json({ results :Product.length , data: Product});
})





exports.getAllProduct =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    const Product = await  Productmodel.find({}).skip(skip).limit(limit);
    res.status(201).json({ results :Product.length , data: Product});
})



exports.getAllProduct =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    const Product = await  Productmodel.find({}).skip(skip).limit(limit);
    res.status(201).json({ results :Product.length , data: Product});
})



exports.getAllProduct =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    const Product = await  Productmodel.find({}).skip(skip).limit(limit);
    res.status(201).json({ results :Product.length , data: Product});
})



exports.getAllProduct =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    const Product = await  Productmodel.find({}).skip(skip).limit(limit);
    res.status(201).json({ results :Product.length , data: Product});
})

exports.getoneProduct =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const Product = await  Productmodel.findById(id);
    if(!Product){
        next(new ApiError({msg: 'Product not found'} , 400));
    }
    res.status(201).json({ data: Product});
})

exports.updateProduct =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    req.body.slug = slugify(req.body.title);
    const Product = await  Productmodel.findOneAndUpdate({_id:id} , req.body , {new:true});
    if(!Product){
        next(new ApiError({msg: 'Product not found'} , 400));
    }
    res.status(201).json({ data: Product});
})

exports.deleteProduct =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const Product = await  Productmodel.findOneAndDelete({_id:id});
    if(!Product){
        res.status(404).json({msg : 'Product not found'});
    }
    res.status(201).json({msg : 'Product deleted'});
})


