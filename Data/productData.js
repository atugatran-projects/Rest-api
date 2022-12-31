require("../db/conn");
const Product = require("../Schema/useSchema");
const ProductJson = require("./Project.json");

const update = async () => {
  try {
    await Product.deleteMany();
    await Product.create(ProductJson);
    console.log("success");
  } catch (error) {
    console.log("Error :- " + error);
  }
};

module.exports = update;