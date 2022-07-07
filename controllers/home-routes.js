const router = require("express").Router();
const {
  User,

  Recipe,
  Comment,

  Category,
} = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

router.get("/cookbook", withAuth, async (req, res) => {
  try {
    const cbData = await Recipe.findAll({
      // include: [{ model: Category }, { model: Comment }],
      where: {
        user_id: req.session.user,
      },
    });
    const books = cbData.map((r) => r.get({ plain: true }));
    res.render("homepage-cb", { books, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    console.log(req.session.loggedIn);
    if (req.session.loggedIn) {
      console.log(req.session.user);
      const loggedInUser = await User.findOne({
        where: {
          id: req.session.user,
        },
      });
      res.render("homepage", { loggedInUser, loggedIn: req.session.loggedIn });
    } else {
      res.render("homepage", { loggedIn: req.session.loggedIn });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/add-recipe", withAuth, async (req, res) => {
  try {
    res.render("add-recipe", { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/recipes", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      // include: [{ model: Category }, { model: Comment }],
    });

    const recipes = recipeData.map((r) => r.get({ plain: true }));
    console.log(recipes);
    res
      .status(200)
      .render("recipes", { recipes, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/add-recipe", async (req, res) => {
  try {
    if (req.body.img_name == "") {
      const recipe = await Recipe.create({
        recipe_name: req.body.recipe_name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        img_name:
          "https://res.cloudinary.com/rutgers-coding-bootcamp-group-3/image/upload/v1657043328/upload_photo_placeholder_enoyit.webp",
        category_id: req.body.category_id,
        user_id: req.session.user,
      });
      res.status(200).json(recipe);
    } else {
      const recipe = await Recipe.create({
        recipe_name: req.body.recipe_name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        steps: req.body.steps,
        img_name: req.body.img_name,
        category_id: req.body.category_id,
        user_id: req.session.user,
      });
      res.status(200).json(recipe);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get recipe by category

router.get("/categories/:id", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        category_id: req.params.id,
      },
    });
    if (!recipeData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/breakfast", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        category_id: 1,
        user_id: req.session.user,
      },
    });
    if (!recipeData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }
    const recipes = recipeData.map((r) => r.get({ plain: true }));
    res
      .status(200)
      .render("recipes", { recipes, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/mains", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        category_id: 2,
        user_id: req.session.user,
      },
    });
    if (!recipeData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    const recipes = recipeData.map((r) => r.get({ plain: true }));

    res
      .status(200)
      .render("recipes", { recipes, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/sides", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        category_id: 3,
        user_id: req.session.user,
      },
    });
    if (!recipeData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    const recipes = recipeData.map((r) => r.get({ plain: true }));

    res
      .status(200)
      .render("recipes", { recipes, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/desserts", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {
        category_id: 4,
        user_id: req.session.user,
      },
    });
    if (!recipeData) {
      res.status(404).json({ message: "No category found with that id!" });
      return;
    }

    const recipes = recipeData.map((r) => r.get({ plain: true }));

    res
      .status(200)
      .render("recipes", { recipes, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get recipe by id
router.get("/recipes/:id", withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {});
    if (!recipeData) {
      res.status(404).json({ message: "No recipe found with that id!" });
      return;
    }
    const recipe = recipeData.get({ plain: true });
    console.log(recipe);
    res.render("singlerecipe", { recipe, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.post("/login", async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    // console.log(dbUserData);
    // console.log(dbUserData.dataValues.id);
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData.dataValues.id;

      res
        .status(200)
        .json({ user: dbUserData, message: "You are now logged in!" });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/users", async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = dbUserData.dataValues.id;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
