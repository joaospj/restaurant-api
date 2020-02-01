const Point = require("./Point");
const Category = require("./Category");
const Product = require("./Product");
const Size = require("./Size");
const Table = require("./Table");
const Tab = require("./Tab");
const Order = require("./Order");

Point.hasMany(Category);
Category.belongsTo(Point);

Category.hasMany(Product);
Product.belongsTo(Category);

Product.hasMany(Size);
Size.belongsTo(Product);

Table.hasMany(Tab);
Tab.belongsTo(Table);

Tab.belongsToMany(Size, { through: Order });
Size.belongsToMany(Tab, { through: Order });

function syncModel() {
  Point.sync({ force: true });
  Category.sync({ force: true });
  Product.sync({ force: true });
  Size.sync({ force: true });
  Table.sync({ force: true });
  Tab.sync({ force: true });
  Order.sync({ force: true });
}

//Descomentar syncModel para poder alterar qualquer mudança nas tabelas
// Aviso: Isso apagará todos os dados cadastrados

//syncModel();
