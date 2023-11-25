const express = require('express');

const {
  createRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  uploadRecipeImage
} = require('../controllers/recipeController');

const {
  getRecipeValidator,
  createRecipeValidator,
  updateRecipeValidator,
  deleteRecipeValidator
} = require('../utils/validators/recipeValidator');

const router = express.Router();

router
  .route('/')
  .get(getRecipes)
  .post(uploadRecipeImage, createRecipeValidator, createRecipe);

router
  .route('/:id')
  .get(getRecipeValidator, getRecipe)
  .put(uploadRecipeImage, updateRecipeValidator, updateRecipe)
  .delete(deleteRecipeValidator, deleteRecipe);

module.exports = router;
