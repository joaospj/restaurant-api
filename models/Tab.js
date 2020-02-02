const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Tab = sequelize.define(
  "Tab",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    open: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    },
    closed: {
      type: DataTypes.DATE
    },
    totalValue: {
      type: DataTypes.FLOAT
    },
    tipValue: {
      type: DataTypes.FLOAT
    },
    qtyPeople: {
      type: DataTypes.INTEGER
    }
  },
  {
    paranoid: true
  }
);

module.exports = Tab;
