const Point = require("./Point");
const Category = require("./Category");

Point.hasMany(Category);

function syncModel() {
  Point.sync({ force: true });
  Category.sync({ force: true });
}

//syncModel();
