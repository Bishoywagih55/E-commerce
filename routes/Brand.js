const express = require('express');
const {
    getBrand , 
    createBrand,
    getAllBrand,
    getoneBrand,
    updateBrand,
    deleteBrand
} = require('../services/BrandServices');
const {
    getBrandValidator,
    createBrandValidator,
    updateBrandValidator,
    deleteBrandValidator
} = require("../validator/BrandValidator")
const subcategory = require('./subcategory')

const router = express.Router();
router.use('/:categoryId/subcategory' , subcategory)

router.post('/get'  , getBrand);
router.post('/post' ,createBrandValidator, createBrand);
router.get('/all' , getAllBrand);
router.get('/:id' ,getBrandValidator , getoneBrand);
router.patch('/:id' , updateBrandValidator ,updateBrand);
router.delete('/:id' , deleteBrandValidator ,deleteBrand);
module.exports = router;