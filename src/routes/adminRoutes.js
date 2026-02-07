import express from 'express';
import { requireAdmin, requireAuth } from '../middlewares/middleware.js';
import {getAdminDash,getUserCount, getProductCount } from '../controllers/adminController.js';
const router = express.Router();

router.get('/dashboard', requireAuth, requireAdmin, getAdminDash);
router.get('/users/count',requireAuth, requireAdmin, getUserCount);
router.get('/products/count',requireAuth, requireAdmin, getProductCount);

export default router;