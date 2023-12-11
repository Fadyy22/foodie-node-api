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
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: Schema.ObjectId,
    ref: 'SubCategory',
    required: true
  }
});


recipeSchema.pre(/^find/, async function (next) {
  this.populate({
    path: 'category subcategory',
    select: 'name description'
  });
  next();
});

module.exports = mongoose.model('Recipe', recipeSchema);
