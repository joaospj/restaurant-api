const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categoryController");

//GET all Categories
router.get("/categorias", categoryController.getAllCategories);

//GET Category by id
router.get("/categoria/:id", categoryController.getCategory);

//POST Category
router.post("/categoria", categoryController.addCategory);

//DELETE Category by id
router.delete("/categoria/:id", categoryController.deleteCategory);

module.exports = router;
