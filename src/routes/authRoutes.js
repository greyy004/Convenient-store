import express from 'express';
const router = express.Router();
import authController from '../controllers/authController.js';

//Login Route
router.get('/login', authController.getlogin);

//Register Routes
router.get('/register', authController.getregister);

export default router;  