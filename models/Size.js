const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Size = sequelize.define(
  "Size",
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
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },

    default: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  },
  {
    paranoid: true
  }
);

module.exports = Size;
