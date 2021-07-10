const orderService = require('../services/order')

const getAllOrder = async (req, res) => {
  console.log(req.query);
  const { data, metadata } = await orderService.getAll(req.pagination) 
  res.send({
    status: 1,
    data,
    metadata,
  })
}

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const { data } = await orderService.getById(id);
  res.send({
      status: 1,
      data
    })
}
const createOrder = async (req, res) => {
  await orderService.create(req.body)
  res.send({
    status: 1,
  })
}
const updateOrder = async (req, res) => {
  const { id } = req.params;
  await orderService.updateById(id, req.body)
  res.send({
    status: 1,
  })
}
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  await orderService.deleteById(id)
  res.send({
    status: 1,
  })
}

module.exports = {
  getAllOrder,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder
}