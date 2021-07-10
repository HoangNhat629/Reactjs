// để lên đầu tiên
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const pagination = require("./middlewares/pagination");
const cors = require("cors"); // npm i cors
const app = express();

// 1. middlewares ( bodyparser , ... )
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
    "Access-Control-Expose-Headers": "Content-Range",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200,
  })
); // cross origin resource sharing
var accessLogStream = rfs.createStream("access.log", {
  interval: "1d", // rotate daily
  path: path.join(__dirname, "log"),
});
app.use(morgan("combined", { stream: accessLogStream }));
app.use(pagination);
app.use((req, res, next) => {
  console.log("------------------------------------------------------");
  console.log("req", req.method, req.originalUrl);
  console.log("body: ", req.body);
  console.log("params: ", req.params);
  console.log("query: ", req.query);
  next();
});

// 2. router
const parameterRouter = require("./routers/parameter");
const categoryRouter = require("./routers/category");
const productRouter = require("./routers/product");
const orderRouter = require("./routers/order");
// const accountRouter = require('./routers/account')

app.use("/api/v1/parameter", parameterRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);
// app.use('/api/v1/account', accountRouter);

app.get("/api/v1/test-err", (req, res, next) => {
  next("Có lỗi 1");
});
app.get("/api/v1/test-err2", (req, res, next) => {
  throw Error("Có lỗi 2");
});

// 3. error handle middleware
const { errorHandle } = require("./middlewares/errorHandle");
app.use(errorHandle); // dam bao server khong bi chet vi loi gi do

// 4. listen
const PORT = 9999;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
});
