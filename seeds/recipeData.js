const { Recipe } = require("../models");

const recipedata = [
  {
    recipe_name: "Pancakes",
    description: "fluffly, golden, delicous pancakes, just like you remember on weekends as a kid",
    ingredients: "2 C four, 2 eggs, 1/2 C milk",
    steps: "mix ingredients, pour 1/4 C batter onto hot griddle, flip when bubbles appear. For an extra indulgent weekend, add 1/4 C chocolate chips to batter - you've earned it.",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657044864/pancakes_gvcpbj.jpg",
    category_id: 1,
    user_id: 1,
  },
  {
    recipe_name: "Baked Beans",
    description: "perfect for July 4 BBQ, the oft-overlooked yet mighty baked bean is an excellent source of protein and flavor",
    ingredients: "2 cans pinto beans, 1/2 lb diced bacon, 1 C baked bean sauce",
    steps: "fry bacon, combine ingredients, bake at 350 for one hour",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657045009/baked-beans_csozrv.jpg",
    category_id: 3,
    user_id: 1,
  },
  {
    recipe_name: "Cole Slaw",
    description: "you either tolerate it or hate it. Restaurants usually serve it as a low-cost afterthought. It pairs with anything",
    ingredients: "1 head cabbage shredded, 1lb carrots shredded, 3 TBSP vinegar, 2 C mayo, 1/3 C sugar",
    steps: "mix all ingredients together, let sit for 4 hours or overnight",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657045085/coleslaw_atapgk.jpg",
    category_id: 3,
    user_id: 1,
  },
  {
    recipe_name: "Brownies",
    description: "put them on ice cream, cover them in hot fudge, or just eat them plain. Edge pieces are the best.",
    ingredients: "1 C flour, 1/4 C cocoa powder, 2 eggs, 1/2 C Vegetable Oil",
    steps: "mix all ingredients and stir until there are no lumps, pour into 8 1/2\" greased pan, bake at 350 for 18 minutes until toothpick comes out clean",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657045207/brownies_zi5axm.avif",
    category_id: 4,
    user_id: 1,
  },
  {
    recipe_name: "Basic Italian Meatballs",
    description: "serve as an appetizer, with spaghetti, or on a sandwich.",
    ingredients: "1lb ground beef, 1 egg, 1/2C breadcrumbs, 1/2C grated parmesan cheese, 1/4 C chopped italian parsley, 1 small onion minced, 3 cloves garlic minced",
    steps: "combine ingredients in mixing bowl, form into 1 inch balls, fry in shallow layer of oil until browned on all sides, simmer in marinara sauce until fully cooked",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657046330/Easy-Meatball-Recipe-3-1_py9scd.jpg",
    category_id: 2,
    user_id: 1,
  },
  {
    recipe_name: "Chicken Picatta",
    description: "these thin cutlets of chicken served in a light lemony sauce will make weekenight meals feel upscale in minutes",
    ingredients: "1 lb boneless skinless chicken breasts cutlets, flour (for dredging), white wine, butter, juice of 3 lemons",
    steps: "season chicken with salt and pepper on both sides, dredge chicken in flour, sautee in olive oil until golden brown about 4 minutes per side, transfer chicken to a plate, in the same pan add 3 tbsp butter\, lemon juice\, and wine\, and reduce slightly, add chicken back into pan until warm",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657046690/Chicken-Picatta-8_l3o34m.webp",
    category_id: 2,
    user_id: 1,
  },
  {
    recipe_name: "Maple Flavored Bacon",
    description: "chewy or crispy, it's not breakfast without bacon",
    ingredients: "1lb thick cut bacon, maple syrup",
    steps: "place bacon slices on baking rack on sheet pan, drizzle with maple syrup, bake at 400 until desired cripiness",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657046869/bacon-in-oven-square-_qpx4vz.jpg",
    category_id: 1,
    user_id: 1,
  },
  {
    recipe_name: "Strawberry Shortcake",
    description: "Great as dessert on a hot summer day, or just have it for dinner!",
    ingredients: "shortcake, strawberries, milk or whipped cream",
    steps: "Mix ingredients and pile high with whipped cream. Nobody's judging.",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657047586/05STRAWSHORTCAKE-articleLarge_oievkg.jpg",
    category_id: 4,
    user_id: 1,
  },
  {
    recipe_name: "Collard Greens",
    description: "Cooked greens are all the rage now. A favorite of your southern Grandma with a side of sweet tea, or for your hipster friends in Brooklyn with a bourbon on the rocks",
    ingredients: "1 large bunch collard greens \, chopped, 1.5 TBSP extra-virgin-olive oil, sea salt and cracked black pepper, lemon wedges for serving",
    steps: "heat oil in large skillet over medium heat, add greens and stir to coat, Continue stirring in 30-second intervals until the greens are wilted\, dark green\, and some are starting to turn browns on the edges (this is delicious)",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657048546/quick-collard-greens-recipe-1_jaxj2v.jpg",
    category_id: 3,
    user_id: 1,
  },
  {
    recipe_name: "Cheese Quesadillas",
    description: "Like grilled cheese, but better. goes great with margaritas, or perfect for late-night munchies.",
    ingredients: "flour tortillas, shredded cheese (pepperjack is awesome), butter",
    steps: "melt 1 TBSP butter on skillet over medium heat, put as much cheese as you want between 2 tortillas and then grill on skillet, flipping once the first side starts to brown and cheese melts, garnish with cilantro if you don't think it tastes like soap",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657048901/quesadillas_hbt1x2.jpg",
    category_id: 2,
    user_id: 1,
  },
  {
    recipe_name: "Caprese Salad",
    description: "Because tomatoes, basil, mozzarella, and balsamic were made to go together",
    ingredients: "1 pint cherry tomatoes cut in half lengthwise, mozzarella balls, chopped basil, pesto, balsamic vinegar, olive oil",
    steps: "mix all ingredients together according to taste",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657053133/Pesto-Caprese-Salad-CentslessMeals-1_pgweys.jpg",
    category_id: 3,
    user_id: 1,
  },
  {
    recipe_name: "Rice Krispy Treats",
    description: "the OG picnic snack.",
    ingredients: "6 Cups Rice Krispies, 3 TBSP butter, 1 bag mini-marshmallows",
    steps: "melt butter in large non-stick pot over low heat, add marshmallows and stir until melted, add rice krispies and mix to coat well, press into greased pan and cut into squares",
    img_name:
      "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657053378/recip_img-7547527_recip_img-7547527_u18bwm.jpg",
    category_id: 4,
    user_id: 1,
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipedata);

module.exports = seedRecipes;
