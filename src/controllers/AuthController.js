import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserByEmail, createUser } from '../models/userModel.js';

const __dirname = path.resolve();

const authController = {
    // Handle user registration
    RegisterAuthentication: async (req, res) => {
        const { username, email, password, confirmPassword } = req.body;

       const existingUser = await getUserByEmail(email);
       if(existingUser) {
        return res.status(400).json({ message: 'User already exists' });
       }
       const hashedPassword = await bcrypt.hash(password, 10);
       await createUser({ name: username, email, password: hashedPassword });
       res.status(201).json({ message: 'User registered successfully' });
    },

    LoginAuthentication: async (req, res) => {
        // Handle user login
        const { email, password } = req.body;
        const existingUser = await getUserByEmail(email);
        if (!existingUser) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign(
            { id: existingUser.id, email: existingUser.email },
            process.env.JWT_SECRET
        );
        res.json({ token });
    }
};

export default authController;