const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Table = sequelize.define(
  "Table",
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
    imgUrl: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    paranoid: true
  }
);

module.exports = Table;
