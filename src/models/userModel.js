import pool from '../config/db.js';

    export const createUserTable = async () => {
        try {
            // Create Users Table
            const query = `
                CREATE TABLE IF NOT EXISTS users (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(100),
                    email VARCHAR(100) UNIQUE,
                    password VARCHAR(255)
                )
            `;
            await pool.query(query);
        } catch (err) {
            console.error('Error creating user table:', err);
        }
    };