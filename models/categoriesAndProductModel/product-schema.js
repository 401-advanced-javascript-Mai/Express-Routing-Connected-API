'use strict' ;


const mongoose = require('mongoose');

const product = mongoose.Schema({
  categoryType: {type: String , required: true},
  thePrice: {type: Number , required :true},
  type: { type:String},
});
  
module.exports = mongoose.model('product', product);