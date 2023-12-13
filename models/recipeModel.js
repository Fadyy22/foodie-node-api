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
  ratingsAverage: {
    type: Number,
    min: 1,
    max: 5
  },
  ratingsQuantity: {
    type: Number,
    default: 0
  },
  category: {
    _id: {
      type: Schema.ObjectId,
      ref: 'Category',
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  subcategory: {
    _id: {
      type: Schema.ObjectId,
      ref: 'SubCategory',
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

recipeSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'recipe'
});

module.exports = mongoose.model('Recipe', recipeSchema);
