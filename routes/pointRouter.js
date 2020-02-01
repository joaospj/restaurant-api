const express = require("express");
const router = express.Router();

const pointController = require("../controllers/pointController");

router.get("/pontos", pointController.getAllPoints);

router.get("/ponto/:id", pointController.getPoint);

router.post("/ponto", pointController.addPoint);

router.delete("/ponto/:id", pointController.deletePoint);

module.exports = router;
