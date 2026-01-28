import express from 'express';
const router = express.Router();
import orderController from '../controllers/orderController.js';

//Create Order
router.get('/order/create', orderController.createOrder);

//Get Order by ID
router.get('/order/:id', orderController.getOrderById);

export default router;