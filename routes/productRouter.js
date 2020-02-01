const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

//GET all Categories
router.get("/produtos", productController.getAllProducts);

//GET Product by id
router.get("/produto/:id", productController.getProduct);

//POST Product
router.post("/produto", productController.addProduct);

//DELETE Product by id
router.delete("/produto/:id", productController.deleteProduct);

module.exports = router;
