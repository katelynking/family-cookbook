const router = require('express').Router();
const { Recipe, Category, Tag, ProductTag } = require('../../models');



// get all recipes
router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
    //   include: [{ model: Category }, { model: Tag}],
    });
    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get one recipe
router.get('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
    //   include: [{ model: Category }, { model: Tag}],
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with that id!' });
      return;
    }

    res.status(200).json(recipeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // create new recipe
// router.post('/', (req, res) => {
//   /* req.body should look like this...
//     {
//       recipe_name: "Basketball",
//       price: 200.00,
//       stock: 3,                 ???????? Don't know what this model has yet.
//       tagIds: [1, 2, 3, 4]
//     }
//   */
//   Recipe.create(req.body)
//     .then((recipe) => {
     
//       if (req.body.tagIds.length) {
//         const recipeTagIdArr = req.body.tagIds.map((tag_id) => {
//           return {
//             product_id: product.id,
//             tag_id,
//           };
//         });
//         return ProductTag.bulkCreate(productTagIdArr);
//       }
//       // if no product tags, just respond
//       res.status(200).json(product);
//     })
//     .then((productTagIds) => res.status(200).json(productTagIds))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });

// update product
// router.put('/:id', (req, res) => {
//   // update product data
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((product) => {
//       // find all associated tags from ProductTag
//       return ProductTag.findAll({ where: { product_id: req.params.id } });
//     })
//     .then((productTags) => {
//       // get list of current tag_ids
//       const productTagIds = productTags.map(({ tag_id }) => tag_id);
//       // create filtered list of new tag_ids
//       const newProductTags = req.body.tagIds
//         .filter((tag_id) => !productTagIds.includes(tag_id))
//         .map((tag_id) => {
//           return {
//             product_id: req.params.id,
//             tag_id,
//           };
//         });
//       // figure out which ones to remove
//       const productTagsToRemove = productTags
//         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         ProductTag.destroy({ where: { id: productTagsToRemove } }),
//         ProductTag.bulkCreate(newProductTags),
//       ]);
//     })
//     .then((updatedProductTags) => res.json(updatedProductTags))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });

router.delete('/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!recipeData) {
      res.status(404).json({ message: 'No recipe found with that id!' });
      return;
    }

    res.status(200).json("Deletion was a success");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
