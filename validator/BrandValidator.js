const {check} = require('express-validator')
const validator  = require("../middlewares/validator")

exports.getBrandValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]

exports.createBrandValidator = [
    check('name')
    .notEmpty().withMessage("category required ")
    .isLength({min : 3}).withMessage("category too short")
    .isLength({max : 32}).withMessage("category too long"),
    validator
]
exports.updateBrandValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]
exports.deleteBrandValidator =  [
    check('id').isMongoId().withMessage("invalid categiry id "),
    validator
]