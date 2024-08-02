const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const Categorymodel = require('../models/categoryModels');

exports.getCategory = (req, res ) => {
    const {name} = req.body;
    console.log(name);
    const newcategory =  new Categorymodel({name});
    newcategory.save().then((doc)=> {
        res.json(doc);
    })
    .catch((err) => {
        res.json(err);
    })
}



exports.createCategory =asyncHandler(async (req, res) =>{
    const {name} = req.body;
    const category = await  Categorymodel.create({name , slug :slugify(name) });
    res.status(201).json({data: category});
})

exports.getAllCategory =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    const category = await  Categorymodel.find({}).skip(skip).limit(limit);
    res.status(201).json({ results :category.length , data: category});
})

exports.getoneCategory =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const category = await  Categorymodel.findById(id);
    if(!category){
        next(new ApiError({msg: 'Category not found'} , 400));
    }
    res.status(201).json({ data: category});
})

exports.upadteCategory =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const {name }= req.body;
    const category = await  Categorymodel.findOneAndUpdate({_id:id} , {name} , {new:true});
    if(!category){
        next(new ApiError({msg: 'Category not found'} , 400));
    }
    res.status(201).json({ data: category});
})

exports.deleteCategory =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const category = await  Categorymodel.findOneAndDelete({_id:id});
    if(!category){
        res.status(404).json({msg : 'Category not found'});
    }
    res.status(201).json({msg : 'Category deleted'});
})


