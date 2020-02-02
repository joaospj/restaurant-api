const pointRouter = require("./pointRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const sizeRouter = require("./sizeRouter");
const tableRouter = require("./tableRouter");

const allroutes = [
  pointRouter,
  categoryRouter,
  productRouter,
  sizeRouter,
  tableRouter
];

module.exports = allroutes;
