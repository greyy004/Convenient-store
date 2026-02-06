import bcrypt from 'bcrypt';
import pool from './src/config/db.js'; // your database connection

const createAdmin = async () => {
    try {
        const name = 'admin';               // Admin name
        const email = 'admin@example.com';  // Admin email
        const password = 'admin1029';       // Admin password
        const password_hash = await bcrypt.hash(password, 10);

        // Insert into users table
        const result = await pool.query(
            `INSERT INTO users (name, email, password, is_admin)
             VALUES ($1, $2, $3, $4)
             RETURNING id, name, email, is_admin`,
            [name, email, password_hash, true]
        );

        console.log('Admin user created:', result.rows[0]);
        process.exit(0);
    } catch (err) {
        console.error('Error creating admin:', err);
        process.exit(1);
    }
};

createAdmin();
