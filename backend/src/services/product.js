const db = require('../utils/db')

const getAll = async ({ limit, offset }) => {
  const sql = `
  SELECT productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at
  FROM product
  WHERE isDelete = 0
  LIMIT ? 
  OFFSET ?;`
  const data = await db.queryMulti(sql, [limit, offset]);

  const countSql = `
  SELECT count(productId) as total
  FROM product;`;
  const { total } = await db.queryOne(countSql);

  return {
    data,
    metadata: {
      length: data.length,
      total
    }
  }
}

const getById = async (id) => {
  const sql = `
  SELECT productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, created_at, updated_at
  FROM product
  WHERE isDelete = 0 AND productId = ?;`
  const data = await db.queryOne(sql, [id]);
  return {
    data
  }
}
const create = async ({display, provider,description, imageUrl,priceIn, priceOut, priceSale,shipday, instock, status, categoryId }) => {
  const sql = `
  INSERT INTO product(productId, display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId) 
  VALUES(uuid(),?,?,?,?,?,?,?,?,?,?,?);`
  await db.query(sql,[display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId])
}
const updateById = async (
  productId,
  { display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId }) => {
  const sql = `
  UPDATE product 
  SET 
    display = ?, 
    provider = ?, 
    description = ?,
    imageUrl = ?, 
    priceIn = ?, 
    priceOut = ?,
    priceSale = ?,
    shipday = ?,
    instock  = ?, 
    status = ?,
    categoryId  = ?
  WHERE productId = ? AND isDelete = 0;
  ;`;
  await db.query(sql,[display, provider, description, imageUrl, priceIn, priceOut, priceSale, shipday, instock, status, categoryId, productId])
}
const deleteById = async (id) => {
  const sql = `
  UPDATE product
  SET 
    isDelete = 1
  WHERE productId = ?;`;
  await db.query(sql, [id]);
}

const getAllId = async () => {
  const sql = `
  SELECT productId, display
  FROM product
  WHERE isDelete = 0`
  const data = await db.queryMulti(sql);
  // db.queryMulti(sql).then(data => {
    
  // }).catch(err => {
    
  // })
  return {
    data,
    metadata: {
      length: data.length,
    }
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getAllId
}
