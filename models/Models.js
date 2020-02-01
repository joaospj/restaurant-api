const Point = require("./Point");
const Category = require("./Category");
const Product = require("./Product");
const Size = require("./Size");

Point.hasMany(Category);
Category.hasMany(Product);
Product.hasMany(Size);

function syncModel() {
  Point.sync({ force: true });
  Category.sync({ force: true });
  Product.sync({ force: true });
  Size.sync({ force: true });
}

//syncModel();
