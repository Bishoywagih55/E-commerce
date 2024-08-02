const express = require('express');
const {
    createSubCategory,
    getAllSubCategory,
    updateSubCategory,
    deleteSubCategory,
    getoneSubCategory,
    SpecAllSubCategory,
    setcategoryId
} = require('../services/subcategoryServices');
const {
    createSubCategoryValidator,
    getSubCategoryValidator,
} = require("../validator/subcategoryValidator")


const router = express.Router({mergeParams: true});

router.get('/AllSub' ,getAllSubCategory )
router.route('/')
                .post(setcategoryId ,createSubCategoryValidator, createSubCategory)
                .get(SpecAllSubCategory)
router.route('/:id')
                    .get(SpecAllSubCategory)
                    .patch(getSubCategoryValidator ,updateSubCategory)
                    .delete(getSubCategoryValidator ,deleteSubCategory)
                    .get(getSubCategoryValidator,getoneSubCategory)

module.exports = router;