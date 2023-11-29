const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  ingredients: [{
    type: String,
    required: true
  }],
  prep_time: Number,
  calories: Number,
  vegetarian: {
    type: Boolean,
    required: true
  },
  diet: String,
  category: {
    type: Schema.ObjectId,
    required: true
  },
  subcategory: {
    type: Schema.ObjectId,
    required: true
  }
});

module.exports = mongoose.model('Recipe', recipeSchema);
