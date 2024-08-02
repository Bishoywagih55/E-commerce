const asyncHandler = require('express-async-handler');
const slugify = require('slugify');
const Brandmodel = require('../models/BrandModels');

exports.getBrand = (req, res ) => {
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



exports.createBrand =asyncHandler(async (req, res) =>{
    const {name} = req.body;
    const Brand = await  Brandmodel.create({name , slug :slugify(name) });
    res.status(201).json({data: Brand});
})

exports.getAllBrand =asyncHandler(async (req, res) =>{
    const page = 1;
    const limit = 5 ;
    const skip = (page -1 ) * limit;
    const Brand = await  Brandmodel.find({}).skip(skip).limit(limit);
    res.status(201).json({ results :Brand.length , data: Brand});
})

exports.getoneBrand =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const Brand = await  Brandmodel.findById(id);
    if(!Brand){
        next(new ApiError({msg: 'Brand not found'} , 400));
    }
    res.status(201).json({ data: Brand});
})

exports.updateBrand =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const {name }= req.body;
    const Brand = await  Brandmodel.findOneAndUpdate({_id:id} , {name} , {new:true});
    if(!Brand){
        next(new ApiError({msg: 'Brand not found'} , 400));
    }
    res.status(201).json({ data: Brand});
})

exports.deleteBrand =asyncHandler(async (req, res) =>{
    const {id} = req.params;
    const Brand = await  Brandmodel.findOneAndDelete({_id:id});
    if(!Brand){
        res.status(404).json({msg : 'Brand not found'});
    }
    res.status(201).json({msg : 'Brand deleted'});
})


