import express from 'express';
import {getAdminDash } from '../controllers/adminController.js';
const router = express.Router();
router.post('/dashboard', getAdminDash);

export default router;