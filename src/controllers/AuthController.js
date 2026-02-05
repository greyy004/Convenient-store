import path from 'path';
import bcrypt from 'bcrypt';
import { generateToken} from '../middlewares/middleware.js'
import { getUserByEmail, createUser } from '../models/userModel.js';
import { maxAge } from '../middlewares/middleware.js';

const __dirname = path.resolve();

    // Handle user registration
    export const registerAuthentication= async (req, res) => {
        const { username, email, password, confirmPassword } = req.body;

       const existingUser = await getUserByEmail(email);
       if(existingUser) {
        return res.status(400).json({ message: 'User already exists' });
       }
       const hashedPassword = await bcrypt.hash(password, 10);
       await createUser({username,email,hashedPassword });
       res.status(201).json({ message: 'User registered successfully' });
    }

    export const loginAuthentication= async (req, res) => {
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
        const token = generateToken({id: existingUser.id, is_admin: existingUser.is_admin});
        res.cookie("jwt", token , {
            httpOnly: true,
            maxAge: maxAge*1000
        });
        res.status(200).send({id: existingUser.id});
    }

