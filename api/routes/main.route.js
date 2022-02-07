const express = require("express");
const router = express.Router();
const mainController = require("../controllers/main.controller");

// router.get("/", featureController.get_all_features);
// router.post("/", featureController.create_feature);
// router.get("/:id", featureController.get_feature);
// router.put("/:id", featureController.update_feature);
// router.delete("/:id", featureController.delete_feature);

router
  .get("/product", mainController.getProduct)
  .post("/product/new", mainController.createProduct)
  .put("/product/:id", mainController.updateProduct)
  .delete("/product/:id", mainController.deleteProduct);

module.exports = router;
