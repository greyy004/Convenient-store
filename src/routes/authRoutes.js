import express from 'express';
const router = express.Router();
import {authLoginMiddleware, authRegisterMiddleware} from '../middlewares/middleware.js'
import {loginAuthentication, registerAuthentication}from '../controllers/authController.js';

//Login Route
router.post('/login', authLoginMiddleware ,loginAuthentication);

//Register Routes
router.post('/register', authRegisterMiddleware ,registerAuthentication);

export default router;  