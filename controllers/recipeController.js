const uploadSingleImage = require('../middlewares/uploadImageMiddleware');
const factory = require('./handlersFactory');
const Recipe = require('../models/recipe');

exports.createFilterObject = (req, res, next) => {
  let filterObject = {};
  if (req.params.categoryId) {
    filterObject = { category: req.params.categoryId };
  } else if (req.params.subcategoryId) {
    filterObject = { subcategory: req.params.subcategoryId };
  }
  req.filterObject = filterObject;
  next();
};

exports.uploadRecipeImage = uploadSingleImage('recipes', 'image');

exports.createRecipe = factory.createOne(Recipe);

exports.getRecipes = factory.getAll(Recipe);

exports.getRecipe = factory.getOne(Recipe);

exports.updateRecipe = factory.updateOne(Recipe);

exports.deleteRecipe = factory.deleteOne(Recipe);
