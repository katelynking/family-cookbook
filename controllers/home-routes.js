const router = require("express").Router();
const {
  User,
  Cookbook,
  Recipe,
  Comment,
  UserCookbook,
  Category,
} = require("../models");
// Import the custom middleware
const withAuth = require("../utils/auth");

router.get("/cookbooks", withAuth, async (req, res) => {
  try {
    const cbData = await Cookbook.findAll({
      // include: [{ model: Category }, { model: Comment }],
    });
    const books = cbData.map((r) => r.get({ plain: true }));
    res.render("homepage-cb", { books });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    res.render("homepage", { loggedIn: req.session.loggedIn });
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
    res.render("recipes", { recipes, loggedIn: req.session.loggedIn });
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
  console.log("==================POSTING=======================");

  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Set up sessions with a 'loggedIn' variable set to `true`
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
