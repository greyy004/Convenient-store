import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const __dirname = path.resolve();

const authController = {

    RegisterAuthentication: (req, res) => {
        const { username, email, password, confirmPassword } = req.body;
        // Add logic for handling registration
        const hashedPassword = bcrypt.hashSync(password, 8);
        try {
            const Insertuser = db.prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
            Insertuser.run(username, email, hashedPassword);
            res.status(201).send('User registered successfully');
        }
        catch (error) {
            console.error('Error during registration:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    LoginAuthentication: (req, res) => {
        const { email, password } = req.body;
        console.log(`Login attempt for email: ${email}`);
        console.log(`Password: ${password}`);
        res.sendStatus(201);
        // Add logic for handling login

    }
};

export default authController;