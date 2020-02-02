const Point = require("./Point");
const Category = require("./Category");
const Product = require("./Product");
const Size = require("./Size");
const Table = require("./Table");
const Tab = require("./Tab");
const Order = require("./Order");

Point.hasMany(Category, { foreignKey: { allowNull: false } });
Category.belongsTo(Point, { foreignKey: { allowNull: false } });

Category.hasMany(Product, { foreignKey: { allowNull: false } });
Product.belongsTo(Category, { foreignKey: { allowNull: false } });

Product.hasMany(Size, { foreignKey: { allowNull: false } });
Size.belongsTo(Product, { foreignKey: { allowNull: false } });

Table.hasMany(Tab, { foreignKey: { allowNull: false } });
Tab.belongsTo(Table, { foreignKey: { allowNull: false } });

Tab.hasMany(Order, { foreignKey: { allowNull: false } });
Size.hasMany(Order, { foreignKey: { allowNull: false } });

Order.belongsTo(Tab);
Order.belongsTo(Size);

function syncModel() {
  //Point.sync({ force: true });
  //Category.sync({ force: true });
  // Product.sync({ force: true });
  //Table.sync({ force: true });
  Size.sync({ force: true });
  Tab.sync({ force: true });
  Order.sync({ force: true });
}

//Descomentar syncModel para poder alterar qualquer mudança nas tabelas
// Aviso: Isso apagará todos os dados cadastrados

//syncModel();
