const express = require("express");
const pool = require("../utils/db");

const router = express.Router();

router.get("/", (req, res) => {
  pool.query("select * from `product`;", (err, data) => {
    if (err) console.log(err);
    else response.send(data);
  });
});

module.exports = router;
