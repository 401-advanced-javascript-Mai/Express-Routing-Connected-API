
'use strict';

// our install depandecies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// our route required 
const categoriesReadyRoutes= require('../routes/categories-route.js')
const ProductReadyRoutes =require('../routes/product-route.js')

// Prepare the express app
const app = express();

app.use(cors());
app.use(morgan('dev'));



app.use('/api/v1', categoriesReadyRoutes);
app.use('/api/v1' , ProductReadyRoutes)


module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 3000;
      app.listen(PORT, () => console.log(` I am a live : ${PORT}`));
    }
  }