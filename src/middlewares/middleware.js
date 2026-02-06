import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../models/userModel.js';

export const maxAge = 3 * 24 * 60 * 60; // 3 days

export const generateToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
};

// Registration validation
export const validateRegister = async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: "All fields required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: "Passwords do not match" });
    }

    if (password.length < 8) {
        return res.status(400).json({ message: "Password too short" });
    }

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
        return res.status(409).json({ message: "Email already registered" });
    }

    next();
};

// Login validation
export const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email & password required" });
    }

    next(); 
};

// JWT protection
export const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json({ message: "Invalid token" });
    }
};

// Admin guard
export const requireAdmin = (req, res, next) => {
    if (!req.user?.is_admin) {
        return res.status(403).json({ message: "Admin only" });
    }
    next();
};
