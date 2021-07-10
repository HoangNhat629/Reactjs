const Route = require("express").Router();
const user = require("../controllers/account");
const { tryCatch } = require("../middleware/errorHandle");
Route.get("/", tryCatch(user.getAll));
Route.get("/:id", tryCatch(user.getById));
Route.post("/", tryCatch(user.create));
Route.put("/:id", tryCatch(user.updateById));
Route.delete("/:id", tryCatch(user.deleteById));

module.exports = Route;
