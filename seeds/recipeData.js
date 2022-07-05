const { Recipe } = require("../models");

const recipedata = [
  {
    recipe_name: "Recipe1 cb1 breakfast",
    description: "description of Recipe1",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 1,
    user_id: 1,
  },
  {
    recipe_name: "Recipe2 cb1 mains",
    description: "description of Recipe2",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 2,
    user_id: 1,
  },
  {
    recipe_name: "Recipe3 cb1 sides",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 3,
    user_id: 1,
  },
  {
    recipe_name: "Recipe4 cb1 desserts",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 4,
    user_id: 1,
  },
  {
    recipe_name: "Recipe1 cb2 breakfast",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 1,
    user_id: 2,
  },
  {
    recipe_name: "Recipe2 cb2 mains",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 2,
    user_id: 2,
  },
  {
    recipe_name: "Recipe3 cb2 sides",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 3,
    user_id: 2,
  },
  {
    recipe_name: "Recipe4 cb2 desserts",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 4,
    user_id: 2,
  },
  {
    recipe_name: "Recipe1 cb3 breakfast",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 1,
    user_id: 3,
  },
  {
    recipe_name: "Recipe2 cb3 mains",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 2,
    user_id: 3,
  },
  {
    recipe_name: "Recipe3 cb3 sides",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 3,
    user_id: 3,
  },
  {
    recipe_name: "Recipe4 cb3 desserts",
    description: "description of Recipe3",
    ingredients: "ingredient 1, ingredient 2, ingredient 3",
    steps: "step 1, step 2, step 3",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
    category_id: 4,
    user_id: 3,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;
