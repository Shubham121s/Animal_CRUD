const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  color: {
    type: String,  
    required: false
  },
  habitat: {
    type: String,  
    required: false
  },
  diet: {
    type: String,  
    required: false
  }
});

module.exports = mongoose.model('Animal', animalSchema);

