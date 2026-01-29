import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

import indexRoutes from './src/routes/indexRoutes.js';
import authRoutes from './src/routes/authRoutes.js';
import initdb from './src/config/initdb.js';
import pool from './src/config/db.js';

const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

const startServer = async () => {
    try {
        // Initialize the database
        await initdb();
        // Test database connection
        await pool.query('SELECT NOW()');
        console.log('Database connected successfully!');
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Failed to start server:', err);
    }
};

startServer();