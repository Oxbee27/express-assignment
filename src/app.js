const express = require("express");

const app = express();

app.use(express.json());

const authRouter = require("./routes/auth.route.js");
const productRouter = require("./routes/product.route")
const logger = require("./middleware/logger");
const roleRouter = require("./routes/role.route");
const errorHandler = require("./middleware/errorHandler");
const { authLimiter } = require("./middleware/rateLimiter.js");

app.get("/", logger, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome, API is running",
  });
});

app.use("/api/auth", logger, authLimiter, authRouter);
app.use("/api/products", productRouter)
app.use("/role", logger, roleRouter);


app.use(errorHandler);


module.exports = app;