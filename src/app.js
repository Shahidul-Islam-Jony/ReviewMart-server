const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
    ],
    credentials: true,
  })
);
app.use(express.json());

// Router integration
const products = require('./routes/ProductsApi/productsRoute');


// calling Router
app.use(products);




app.get("/", (req, res) => {
  res.send("ReviewMart server is running smoothly");
});

app.all("*", (req, res, next) => {
  const error = new Error(`The requested URL is invalid : [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    message: err.message,
  });
});

module.exports = app;