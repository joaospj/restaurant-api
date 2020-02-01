const express = require("express");
const router = express.Router();

const sizeController = require("../controllers/sizeController");

//GET all Sizes
router.get("/tamanhos", sizeController.getAllSizes);

//GET Size by id
router.get("/tamanho/:id", sizeController.getSize);

//POST Size
router.post("/tamanho", sizeController.addSize);

//DELETE Size by id
router.delete("/tamanho/:id", sizeController.deleteSize);

module.exports = router;
