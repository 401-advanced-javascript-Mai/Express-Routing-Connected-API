'use strict';


const mongoose = require('mongoose');

const category = mongoose.Schema({
  categoryType: { type: String, required: true },
  
});
  
module.exports = mongoose.model('category', category);