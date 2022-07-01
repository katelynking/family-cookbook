const User = require("./User");
const Recipe = require("./Recipe");
const Comment = require("./Comment");
const Category = require("./Category");

User.hasMany(Recipe, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Recipe.hasMany(Comment, {
  foreignKey: "recipe_id",
  onDelete: "CASCADE",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Recipe.hasOne(Category, {
  foreignKey: "recipe_id",
  onDelete: "CASCADE",
});

module.exports = { User, Recipe, Comment, Category };
