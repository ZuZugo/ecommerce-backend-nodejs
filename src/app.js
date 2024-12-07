require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

// init middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(compression());

// init db
require("./dbs/init.mongodb");
//require("./helpers/check.connect").checkOverLoad();

// init routes
app.get("/", (req, res, next) => {
  const strCompress = "Hello JS";
  return res.status(200).json({
    message: "Hello World",
    metadata: strCompress.repeat(10000),
  });
});
// handling error

module.exports = app;
