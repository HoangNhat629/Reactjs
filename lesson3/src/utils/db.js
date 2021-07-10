// import module mysql
const mysql = require("mysql");
// declare config
const config = {
  host: "codedidungso.me",
  port: 3306, //default = 3306
  user: "root",
  password: "123456",
  database: "shopese",
};

// module.exports = config;//exports sang index.js //exports 1 thằng
// module.exports = {
//   config,
//   a: 10,
// }; // exports nhiều thằng

//create pool
const pool = mysql.createPool(config);
// mysql.createConnection(config)
module.exports = pool;
