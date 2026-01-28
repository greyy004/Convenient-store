import express from 'express';
const router = express.Router();
import productController from '../controllers/productController.js';

//Add Product
router.post('/product/add', productController.addProduct);

//Get Product by ID
router.get('/product/:id', productController.getProductById);

//Delete Product
router.delete('/product/:id', productController.deleteProduct);

//Update Product
router.put('/product/:id', productController.updateProduct);

export default router;