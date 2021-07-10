const express = require("express");
const router = express.Router;
router.get("/", (req, res) => {
  let data = "homepage";
  res.send(data);
});
module.exports = router;
