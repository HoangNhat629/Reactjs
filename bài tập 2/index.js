const express = require("express");
const homeRouter = require("./routers/homeRouter");
const categoryRouter = require("./routers/categoryRouter");
const orderRouter = require("./routers/orderRouter");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const app = express();

app.use("/", homeRouter);
app.use("/category", categoryRouter);
app.use("/order", orderRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);
const post = 9999;
app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`app listen at ${post}`);
});
