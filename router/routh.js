const express = require("express");
const router = express.Router();
require("../db/conn");
const {
  getAllProducts,
  getAllProductsTesting,
} = require("./getAllProducts");
const Product = require('../Schema/useSchema');
// const update = require('../Data/productData');

// Main Request
router.get("/", (req, res) => {
  res.status(200).render("index");
  // res.send(`Hello world from the server router.js`);
  // update();
});

// Add a Product
router.get("/api/create", (req, res) => {
  res.status(200).render("create");
});


router.post("/api/create", async (req, res) => {
  try {
    // Assuming the request body contains JSON data
    const requestData = await req.body;
    res.json(requestData);
    // If you want to save data to a database, uncomment the relevant code below:
    // const myData = new Product(requestData);
    // await myData.save();

    // res.json({ message: "This item has been saved to the database" });
  } catch (err) {
    res.status(400).json({ error: "Item was not saved to the database", details: err.message });
  }
});

// router.post("/api/create", async (req, res) => {
//   const response = await req.body;
//   res.json(response);
//   // res.jsonsend("this")

//   // var myData = new Product(req.body);
//   // res.send(myData.Pname);
//   // myData
//   //   .save()
//   //   .then(() => {
//   //     res.send("This item has been saved to the database");
//   //   })
//   //   .catch((err) => {
//   //     res.status(400).send("Item was not saved to the database  = "+ err);
//   //   });
// });



// Get All Products
router.route("/api/products").get(getAllProducts);



// Testing Router
// router.route("/api/products/testing").get(getAllProductsTesting);

module.exports = router;