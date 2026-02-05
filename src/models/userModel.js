import pool from '../config/db.js';

export const createUserTable = async () => {
    try {
        // Create Users Table
        const query = `
                CREATE TABLE IF NOT EXISTS users (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(100),
                    email VARCHAR(100) UNIQUE,
                    password VARCHAR(255),
                    is_admin BOOLEAN DEFAULT FALSE
                )
            `;
        await pool.query(query);
    } catch (err) {
        console.error('Error creating user table:', err);
    }
};

export const getUserByEmail = async (email) => {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return result.rows[0];
};
export const getUserByName = async (name)=>{
    const result = await pool.query(
        "SELECT * FROM users where name= $1",
        [name]);
    return result.rows[0];
};

export const createUser = async ({ name, email, password }) => {
    await pool.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)",
        [name, email, password]
    );
};
