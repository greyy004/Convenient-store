import express from 'express';
const router = express.Router();
import authController from '../controllers/authController.js';

//Login Route
router.get('/login', authController.loginAuthentication);

//Register Routes
router.get('/register', authController.registerAuthentication);

export default router;  