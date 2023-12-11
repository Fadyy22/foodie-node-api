const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  title: {
    type: String
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  recipe: {
    type: Schema.ObjectId,
    ref: 'Recipe',
    required: true
  }
});

reviewSchema.pre(/^find/, function (next) {
  this.populate({ path: 'user', select: 'name' });
  next();
});

module.exports = mongoose.model('Review', reviewSchema);
