import express from 'express';
import { getUserDash } from '../controllers/UserController.js';
const router = express.Router();
router.get('/dashboard', getUserDash);
export default router;