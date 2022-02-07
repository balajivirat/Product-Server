const mongoose = require("mongoose");
const mainModel = require("../models/main.model");

exports.getProduct = async (req, res) => {
  try {
    const product = await mainModel.find({});
    res.status(200).json({
      status: 1,
      message: "products obtained successfully",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "error getting products",
      error: err,
    });
  }
};

exports.createProduct = async (req, res) => {
  console.log(req);
  try {
    let product = await new mainModel(req.body);
    await product.save();
    res.status(201).json({
      status: 1,
      message: "product Created",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Failed To Create",
      error: err,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    let product = await mainModel.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(201).json({
      status: 1,
      message: "Product Updated",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Failed To Update",
      error: err,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  console.log(req.params);
  try {
    let product = await mainModel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: 1,
      message: "Product Deleted",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      status: 0,
      message: "Failed To Delete",
      error: err,
    });
  }
};
