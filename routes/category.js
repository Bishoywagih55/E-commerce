const express = require('express');
const {
    getCategory , 
    createCategory,
    getAllCategory,
    getoneCategory,
    upadteCategory,
    deleteCategory
} = require('../services/categoryServices');
const {
    getCategoryValidator,
    createCategoryValidator,
    updateCategoryValidator,
    deleteCategoryValidator
} = require("../validator/gategoryvalidator")
const subcategory = require('./subcategory')

const router = express.Router();
router.use('/:categoryId/subcategory' , subcategory)

router.post('/get'  , getCategory);
router.post('/post' ,createCategoryValidator, createCategory);
router.get('/all' , getAllCategory);
router.get('/:id' ,getCategoryValidator , getoneCategory);
router.patch('/:id' , updateCategoryValidator ,upadteCategory);
router.delete('/:id' , deleteCategoryValidator ,deleteCategory);
module.exports = router;