const {check} = require('express-validator')
const validator  = require("../middlewares/validator")
const Category  = require("../models/categoryModels")
const Brand = require ("../models/BrandModels")
const subcategory = require("../models/subcategoryModels")

exports.createProductValidator = [
    check('title')
    .notEmpty().withMessage("Product required ")
    .isLength({min : 3}).withMessage("Product too short")
    .isLength({max : 32}).withMessage("Product too long"),
    check('description')
    .notEmpty().withMessage("description required")
    .isLength({max : 32}).withMessage("Product too long"),
    check('quantity')
    .notEmpty().withMessage("quantity required")
    .isNumeric().withMessage("Product quantity must be a number"),
    check('sold')
    .optional()
    .isNumeric().withMessage("Product sold must be a number"),

    check('price')
    .notEmpty().withMessage("price required")
    .isNumeric().withMessage("Product price must be a number")
    .isLength({max : 20}).withMessage("Product too long"),

    check('priceAfterDiscount')
    .optional()
    .toFloat()
    .isNumeric().withMessage("price After Discount must be a number")
    .custom((value , {req})=> {
        if(value > req.body.price) {
            throw new Error("price after Discount must be lower than product price")
        }
        return true;
    }),
    check('color')
    .optional()
    .isArray().withMessage("available color shoud be array of string "),
    check('imageCover')
    .notEmpty().withMessage("Product image cover must be required"),
    check('image')
    .optional()
    .isArray().withMessage("image shoud be array of string "),
    check('rating')
    .optional()
    .isNumeric().withMessage("price After Discount must be a number")
    .isLength({min : 1}).withMessage("rating must be above or equal 1.0")
    .isLength({max : 5}).withMessage("rating must be below or equal 5.0"),
    check('ratingcount')
    .optional()
    .isNumeric().withMessage("price After Discount must be a number"),
    check('category')
    .notEmpty().withMessage("product must be long category")
    .isMongoId().withMessage("error here invalid id format category")
    .custom((categoryId)=> 
        Category.findById(categoryId).then((Cate)=> {
                if(!Cate){
                    return Promise.reject(
                        new Error(`no category for this id ${categoryId}`)
            )}
        })
    ),
    check('subcategory')
    .optional()
    .isMongoId().withMessage("invalid id format subcategory")
    .custom((subcategoryId)=> 
        subcategory.findById(subcategoryId).then((sub)=> {
                if(!sub){
                    return Promise.reject(
                        new Error(`no subcategory for this id ${subcategoryId}`)
            )}
        })
    )
    .custom((val , {req}) => 
    // eslint-disable-next-line no-shadow
    subcategory.find({category : req.params.category}).then((subcategory) => {
        console.log(subcategory);
        
    })),
    check('Brand')
    .optional()
    .isMongoId().withMessage("invalid id format Brand")
    .custom((BrandId)=> 
        Brand.findById(BrandId).then((brand)=> {
                if(!brand){
                    return Promise.reject(
                        new Error(`no Brand for this id ${BrandId}`)
            )}
        })
    ),
    validator
]
exports.getProductValidator =  [
    check('id').isMongoId().withMessage("invalid Product id "),
    validator
]
exports.updateProductValidator =  [
    check('id').isMongoId().withMessage("invalid Product id "),
    validator
]
exports.deleteProductValidator =  [
    check('id').isMongoId().withMessage("invalid Product id "),
    validator
]