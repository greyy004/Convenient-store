import express from 'express';
const router = express.Router();
import authController from '../controllers/authController.js';

//Login Route
router.post('/login', authController.LoginAuthentication);

//Register Routes
router.post('/register', authController.RegisterAuthentication);

export default router;  