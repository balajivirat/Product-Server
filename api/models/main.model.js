const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mainSchema = new Schema({
  prodName: String,
  prodPrice: Number,
  prodDes: String,
  prodImage: String,
});

module.exports = mongoose.model("product", mainSchema);
