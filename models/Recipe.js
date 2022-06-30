const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Painting extends Model {}

Painting.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    recipe_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ingredients: {
      type: DataTypes.STRING,
      default: [],
      allowNull: false,
    },
    img_name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
    cookbook_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'gallery',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'painting',
  }
);

module.exports = Painting;
