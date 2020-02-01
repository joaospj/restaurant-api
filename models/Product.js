const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING
    },
    unitMeasure: {
      type: DataTypes.STRING
    },
    inStock: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    img1Url: {
      type: DataTypes.STRING
    },
    img2Url: {
      type: DataTypes.STRING
    },
    img3Url: {
      type: DataTypes.STRING
    }
  },
  {
    paranoid: true
  }
);

module.exports = Product;
