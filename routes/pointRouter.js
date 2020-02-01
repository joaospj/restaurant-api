const express = require("express");
const router = express.Router();

const pointController = require("../controllers/pointController");

//GET all Points
router.get("/pontos", pointController.getAllPoints);

//GET Point by id
router.get("/ponto/:id", pointController.getPoint);

//POST Point
router.post("/ponto", pointController.addPoint);

//DELETE Point by id
router.delete("/ponto/:id", pointController.deletePoint);

module.exports = router;
