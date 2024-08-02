const express = require('express');
const {
    createProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    getoneProduct,
} = require('../services/ProductServices');
const {
    createProductValidator,
    getProductValidator,
} = require("../validator/ProductValidator")


const router = express.Router();

router.get('/AllProduct' ,getAllProduct );
router.route('/post')
                .post(createProductValidator, createProduct);
router.route('/:id')
                    .patch(getProductValidator ,updateProduct)
                    .delete(getProductValidator ,deleteProduct)
                    .get(getProductValidator,getoneProduct);

module.exports = router;