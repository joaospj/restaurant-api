const pointRouter = require("./pointRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const sizeRouter = require("./sizeRouter");
const tableRouter = require("./tableRouter");
const tabRouter = require("./tabRouter");

const allroutes = [
  pointRouter,
  categoryRouter,
  productRouter,
  sizeRouter,
  tableRouter,
  tabRouter
];

module.exports = allroutes;
