import pool from '../config/db.js';

export const createProductTable = async () => {
    try {
        // Create Products Table
        const query = `
                CREATE TABLE IF NOT EXISTS products (
                    id SERIAL PRIMARY KEY,
                    product_name VARCHAR(100),
                    description TEXT,
                    price DECIMAL(10, 2)
                )
            `;
        await pool.query(query);
    } catch (err) {
        console.error('Error creating product table:', err);
    }
};


export const addProductByAdmin = async (product_name, description, price) => {
    const result = await pool.query(
        `INSERT INTO products(product_name, description, price) VALUES ($1,$2,$3)`,
        [product_name, description, price]
    );
};

export const ProductCount = async () => {
    const result = await pool.query(`
        SELECT COUNT(*) FROM products`
    );
    return result.rows[0].count;
}