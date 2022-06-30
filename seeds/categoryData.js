const { Category } = require("../models");

const Categorydata = [
  {
    category_name: "Category1",
  },
  {
    category_name: "Category2",
  },
  {
    category_name: "Category3",
  },
];

const seedCategory = () => Category.bulkCreate(Categorydata);

module.exports = seedCategory;
