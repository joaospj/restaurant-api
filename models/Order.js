const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    qty: {
      type: DataTypes.INTEGER
    },
    price: {
      type: DataTypes.FLOAT
    },
    totalValue: {
      type: DataTypes.FLOAT
    },
    open: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    },
    closed: {
      type: DataTypes.DATE
    },
    status: {
      type: DataTypes.STRING
    }
  },
  {
    paranoid: true
  }
);

module.exports = Order;
