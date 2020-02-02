const pointRouter = require("./pointRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const sizeRouter = require("./sizeRouter");
const tableRouter = require("./tableRouter");
const tabRouter = require("./tabRouter");
const orderRouter = require("./orderRouter");

const allroutes = [
  pointRouter,
  categoryRouter,
  productRouter,
  sizeRouter,
  tableRouter,
  tabRouter,
  orderRouter
];

module.exports = allroutes;
