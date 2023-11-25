const uploadSingleImage = require('../middlewares/uploadImageMiddleware');
const factory = require('./handlersFactory');
const Recipe = require('../models/recipe');

exports.uploadRecipeImage = uploadSingleImage('recipes', 'image');

exports.createRecipe = factory.createOne(Recipe);

exports.getRecipes = factory.getAll(Recipe);

exports.getRecipe = factory.getOne(Recipe);

exports.updateRecipe = factory.updateOne(Recipe);

exports.deleteRecipe = factory.deleteOne(Recipe);
