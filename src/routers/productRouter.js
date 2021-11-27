const { Router} = require('express');
const ProductController = require('../controllers/productController');

class ProductRouter {

    constructor () {
        this.router = Router();
        this.config();
 
    }

    config() {
        //Crear el objeto ProductController
        let productC = new ProductController;
        //Configurar/Crear rutas
        this.router.post('/product', productC.create); // create sin las () porque solo se referencia
        this.router.get('/product', productC.get);
        this.router.get('/product/user', productC.getByUser);
        this.router.put('/product', productC.update);
        this.router.delete('/product', productC.delete);
    }
}

module.exports = ProductRouter;