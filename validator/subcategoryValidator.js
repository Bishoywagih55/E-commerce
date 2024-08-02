const {check} = require('express-validator')
const validator  = require("../middlewares/validator")

exports.getSubCategoryValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]

exports.createSubCategoryValidator = [
    check('name')
    .notEmpty().withMessage("category required ")
    .isLength({min : 3}).withMessage("category too short")
    .isLength({max : 32}).withMessage("category too long"),
    check('category').notEmpty().withMessage("subcategory most belong category")
    .isMongoId().withMessage("invalid category id "),
    validator
]

exports.updateSubCategoryValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]
exports.deleteSubCategoryValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]