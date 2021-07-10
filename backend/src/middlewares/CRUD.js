const express = require('express')
const db = require('../utils/db')
const {tryCatch} = require('./errorHandle')

const CRUD = (
  _tableName,
  { GET, POST, PUT, DELETE } = { GET: false, POST: false, PUT: false, DELETE: false },
  _primaryKeyName,
  _fieldNames = [],
  _isDeleleFieldName = 'isDelete') => {
    
  const toQuestionMark = () => '?';
  const addComma = (prev, curr) => `${prev},${curr}`;
  const addBackQuote = (e) => `\`${e}\``;
  const mapBodyToParams = (req) => _fieldNames.map(e => req.body[e])

  const tableName = addBackQuote(_tableName);
  const primaryKeyName = addBackQuote(_primaryKeyName);
  const isDeleleFieldName = addBackQuote(_isDeleleFieldName);
  const fieldNames = _fieldNames.map(addBackQuote).reduce(addComma);
  const questionMark = _fieldNames.map(toQuestionMark).reduce(addComma);
  const isDeleleFieldName = addBackQuote(_isDeleleFieldName);
  
  const Router = express.Router();
  if (GET) {
    Router.get('/', tryCatch(async (req, res) => {
      const sql = `
      SELECT ${primaryKeyName},${fieldNames}
      FROM ${tableName}
      WHERE ${isDeleleFieldName} = 0
      LIMIT ? 
      OFFSET ?;`
      const countSql = `
      SELECT count(${primaryKeyName}) as total
      FROM ${tableName}
      WHERE ${isDeleleFieldName} = 0;`

      const { page, size } = req.query;
      const limit = parseInt(size) || 10;
      const offset = parseInt((page - 1) * size) || 0;

      const data = await db.queryMulti(sql,[limit, offset]);
      const { total } = await db.queryOne(countSql);
      res.send({
        status: 1,
        metadata: {
          length: data.length,
          total
        },
        data,
      });
    }));
    Router.get('/:id', async (req, res) => {
      const { id } = req.params;
      const sql = `
      SELECT ${fieldNames},${fieldNames}
      FROM ${tableName}
      WHERE ${isDeleleFieldName} = 0 
      AND ${primaryKeyName} = ?
      LIMIT 1;`
      const data = await db.queryOne(sql, [id]);  
      res.send({
        status: 1,
        data,
      });
    });
  }   
  if (POST) {
    Router.post('/', async (req, res) => {
      const sql = `
        INSERT INTO ${tableName} (${primaryKeyName},${fieldNames})
        VALUES (uuid(),${questionMark});`;
      await db.query(sql, mapBodyToParams(req));
      res.send({
        status: 1
      })
    });
  }
  if (PUT) {
    Router.put('/:id', async (req, res) => {
      const sql = `
      UPDATE ${tableName}
      SET 
      ${_fieldNames
        .map(e => `${addBackQuote(e)} = ?`)
        .reduce(addComma)
      }
      WHERE ${primaryKeyName} = ? AND ${isDeleleFieldName} = 0;`;
      await db.query(sql,[...mapBodyToParams(req),req.params.id]);
      res.send({
        status: 1,
      });  
    });
  }
  if (DELETE) {
    Router.delete('/:id', async (req, res) => {
      const sql = `
      UPDATE ${tableName}
      SET 
        ${isDeleleFieldName} = 1
      WHERE ${primaryKeyName} = ?`;
      await db.query(sql,req.params.id);
      res.send({
        status: 1,
      });  
    })
  }
  return Router;
};

module.exports = CRUD;