const express = require("express");
const router = express.Router();

const tableController = require("../controllers/tableController");

//GET all Tables
router.get("/mesas", tableController.getAllTables);

//GET Table by id
router.get("/mesa/:id", tableController.getTable);

//POST Table
router.post("/mesa", tableController.addTable);

//DELETE Table by id
router.delete("/mesa/:id", tableController.deleteTable);

module.exports = router;
