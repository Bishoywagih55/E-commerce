const {check} = require('express-validator')
const validator  = require("../middlewares/validator")

exports.getCategoryValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]

exports.createCategoryValidator = [
    check('name')
    .notEmpty().withMessage("category required ")
    .isLength({min : 3}).withMessage("category too short")
    .isLength({max : 32}).withMessage("category too long"),
    validator
]
exports.updateCategoryValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]
exports.deleteCategoryValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]