const pointRouter = require("./pointRouter");
const categoryRouter = require("./categoryRouter");
const productRouter = require("./productRouter");
const sizeRouter = require("./sizeRouter");

const allroutes = [pointRouter, categoryRouter, productRouter, sizeRouter];

module.exports = allroutes;
