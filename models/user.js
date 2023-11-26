const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  collections: [{
    name: {
      type: String,
      required: true,
    },
    recipes: [{
      type: Schema.ObjectId,
      ref: 'Recipe'
    }]
  }]
});

module.exports = mongoose.model('User', userSchema);
