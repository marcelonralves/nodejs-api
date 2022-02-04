const Product = require('../models/Product');

module.exports = {
    async store(req, res) {
        const { name, price } = req.body;
        
        const product = await Product.create({ name, price });
        
        return res.json(product);
    },

    async showProducts(req, res) {
        const listProducts = await Product.findAll();
        return res.json(listProducts);
    },

    async showProduct(req, res) {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if(!product) {
            return res.status(400).json({message: 'product not found'});
        }

        return res.json(product);
    },

    async edit(req, res) {
        const { id } = req.params;
        const { name, price } = req.body;
        const product = await Product.findByPk(id);

        if(!product) {
           return res.status(400).json({message: 'product not found'});
        }

        product.name = name;
        product.price = price;

        product.save();

        return res.json(product);
    },

    async delete(req, res) {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if(!product) {
          return res.status(400).json({message: 'product not found'});
        }
        
        product.destroy();

        return res.json('product deleted');
    }
}