import pool from '../config/db.js';

    export const createOrderTable = async () => {
        try {
            // Create Orders Table
            const query = `
                CREATE TABLE IF NOT EXISTS orders (
                    id SERIAL PRIMARY KEY,
                    user_id INTEGER REFERENCES users(id),
                    product_id INTEGER REFERENCES products(id),
                    quantity INTEGER,
                    total_price DECIMAL(10, 2)
                )
            `;
            await pool.query(query);
        } catch (err) {
            console.error('Error creating order table:', err);
        }
    };