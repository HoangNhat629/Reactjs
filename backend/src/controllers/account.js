const account = require("../services/account");

const getAll = async (req, res) => {
  try {
    const { data, metadata } = await account.getAll(req.pagination);
    res.send({
      data,
      metadata,
    });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const getById = async (req, res) => {
  try {
    const { data } = await account.getById(req.params.id);
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const create = async (req, res) => {
  try {
    const { data } = await account.create(req.body);
    res.send("Account created!");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const updateById = async (req, res) => {
  try {
    const { data } = await account.updateById(req.params.id, req.body);
    res.send("Account updated!");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const deleteById = async (req, res) => {
  try {
    const { data } = await account.deleteById(req.params.id);
    res.send("Account deleted!");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
