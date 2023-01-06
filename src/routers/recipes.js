const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

const { getAll, save, get, update, remove } = require("../controllers/recipes");

// router.get("/", getAll);
// router.post("/", save);
router.get("/:id", get);
router.put("/:id", update);
router.delete("/:id", remove);
router.route('/').get(getAll).post(auth.authenticate(), save);
// const {
//     deleteRecipe,
//     getAllRecipes,
//     getRecipe,
//     saveRecipe,
//     updateRecipe,
//    } = require('../controllers/recipe');

// router.route('/').get(getAllRecipes).post(saveRecipe);

// router.route('/:id').get(getRecipe).put(updateRecipe).delete(deleteRecipe);

module.exports = router;