const R = require('express').Router();
const parameterController = require('../controllers/parameter')

const {tryCatch} = require('../middlewares/errorHandle')

R.get('/list-category-id',
  tryCatch(parameterController.getAllCategoryId));

R.get('/list-product-id',
  tryCatch(parameterController.getAllProductId));
  
R.get('/list-order-id',
  tryCatch(parameterController.getAllOrderId));

module.exports = R;
