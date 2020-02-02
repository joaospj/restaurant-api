const express = require("express");
const router = express.Router();

const tabController = require("../controllers/tabController");

//GET all Tabs
router.get("/comandas", tabController.getAllTabs);

//GET Tab by id
router.get("/comanda/:id", tabController.getTab);

//POST Tab
router.post("/comanda", tabController.addTab);

//DELETE Tab by id
router.delete("/comanda/:id", tabController.deleteTab);

module.exports = router;
