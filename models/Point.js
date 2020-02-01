const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Point = sequelize.define(
  "Point",
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
    }
  },
  {
    paranoid: true
  }
);

module.exports = Point;
