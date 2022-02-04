const express = require('express');
const ProductController = require('./controllers/ProductController');
const routes = express.Router();

require('./database');

routes.post('/product', ProductController.store);
routes.get('/products', ProductController.showProducts);
routes.get('/product/:id', ProductController.showProduct);
routes.put('/product/:id', ProductController.edit);
routes.delete('/product/:id', ProductController.delete);

module.exports = routes;