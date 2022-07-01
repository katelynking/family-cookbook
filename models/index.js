const User = require("./User");
const Cookbook = require("./Cookbook");
const Recipe = require("./Recipe");
const Comment = require("./Comment");
const UserCookbook = require("./UserCookbook");
const Category = require("./Category");

User.belongsToMany(Cookbook, {
  through: {
    model: UserCookbook,
    unique: false,
  },
});

Cookbook.belongsToMany(User, {
  through: {
    model: UserCookbook,
    unique: false,
  },
});

Cookbook.hasMany(Recipe, {
  foreignKey: "cookbook_id",
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

module.exports = { User, Cookbook, Recipe, Comment, UserCookbook, Category };
