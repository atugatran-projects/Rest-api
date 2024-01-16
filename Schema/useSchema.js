const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  Pname: {
    type: String,
    required: true,
  },
  Pprice: {
    type: Number,
    required: [true, "price must be provided"],
  },
  Pfeatured: {
    type: Boolean,
    default: false,
  },
  Prating: {
    type: Number,
    default: 4.9,
  },
  PcreatedAt: {
    type: Date,
    default: Date.now(),
  },
  Pcompany: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "mi", "assus"],
      message: `{VALUE} is not supported`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);