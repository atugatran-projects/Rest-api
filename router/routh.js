const express = require("express");
const router = express.Router();
require("../db/conn");
const {
    getAllProducts,
    getAllProductsTesting,
  } = require("./getAllProducts");
// const Product = require('../Schema/useSchema');
const update = require('../Data/productData');

// Root Request
router.get("/", (req, res) => {
    res.send(`Hello world from the server router.js`);
    update();
  });

// Get All Products
router.route("/api/products").get(getAllProducts);

// Testing Router
router.route("/api/products/testing").get(getAllProductsTesting);

  module.exports = router;