import express from 'express';
const router = express.Router();
import userController from '../controllers/userController.js';

//Get User Details
router.get('/user/profile', userController.getUserProfile);

//Update User Details
router.put('/user/profile', userController.updateUserProfile);

//Delete User
router.delete('/user/:id', userController.deleteUser);

export default router;