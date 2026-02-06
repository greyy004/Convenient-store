import express from 'express';
import {getAdminDash } from '../controllers/adminController.js';
const router = express.Router();

router.get('/dashboard', getAdminDash);

export default router;