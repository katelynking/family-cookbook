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
<<<<<<< HEAD
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    exhibition_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    filename: {
=======
    recipe_name: {
>>>>>>> 41fac65323a1d08a4576f87002fb6ff41bac7c30
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
<<<<<<< HEAD
    gallery_id: {
=======
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
>>>>>>> 41fac65323a1d08a4576f87002fb6ff41bac7c30
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
