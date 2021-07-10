const productService = require('../services/product')

const getAllProduct = async (req, res) => {
  const { data, metadata } = await productService.getAll(req.pagination);
  res.send({
    status: 1,
    metadata,
    data,
  }) 
}
const getProductById = async (req, res) => {
  const { id } = req.params;
  const { data } = await productService.getById(id);
   res.send({
    status: 1,
    data,
  }) 
}
const createProduct = async (req, res) => {
  await productService.create(req.body)
  res.send({
    status: 1,
  })
}
const updateProduct = async (req, res) => {
  const { id } = req.params;
  await productService.updateById(id, req.body);
  res.send({
    status: 1,
  })
}
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await productService.deleteById(id);
  res.send({
    status: 1,
  })
}

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}