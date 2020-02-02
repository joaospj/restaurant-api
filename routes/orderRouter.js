const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

//GET all Orders
router.get("/pedidos", orderController.getAllOrders);

//GET Order by id
router.get("/pedido/:id", orderController.getOrder);

//POST Order
router.post("/pedido", orderController.addOrder);

//DELETE Order by id
router.delete("/pedido/:id", orderController.deleteOrder);

module.exports = router;
