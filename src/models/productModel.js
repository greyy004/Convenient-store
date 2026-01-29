import pool from '../config/db.js';

    export const createProductTable = async () => {
        try {
            // Create Products Table
            const query = `
                CREATE TABLE IF NOT EXISTS products (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(100),
                    description TEXT,
                    price DECIMAL(10, 2),
                    stock_quantity INTEGER
                )
            `;
            await pool.query(query);
        } catch (err) {
            console.error('Error creating product table:', err);
        }
    };