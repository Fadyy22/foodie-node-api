const express = require('express');

const {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  uploadRecipeImage,
  createFilterObject
} = require('../controllers/recipeController');

const {
  createRecipeValidator,
  getRecipesValidator,
  getRecipeValidator,
  updateRecipeValidator,
  deleteRecipeValidator
} = require('../utils/validators/recipeValidator');

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .post(uploadRecipeImage, createRecipeValidator, createRecipe)
  .get(createFilterObject, getRecipesValidator, getRecipes);

router
  .route('/:id')
  .get(getRecipeValidator, getRecipe)
  .put(uploadRecipeImage, updateRecipeValidator, updateRecipe)
  .delete(deleteRecipeValidator, deleteRecipe);

module.exports = router;
