const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Cookbook extends Model {}

Cookbook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "cookbook",
  }
);

module.exports = Cookbook;
