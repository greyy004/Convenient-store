import {getUserByEmail, getUserByName} from '../models/userModel.js'; // Import User model
import jwt from 'jsonwebtoken';

export const authRegisterMiddleware = async (req, res, next) => {
    const {name, email, password, confirmPassword}= req.body;
    // --- Validation ---
    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).send("invalid fields");
    }

    if (password !== confirmPassword) {
        return res.status(400).send("passwords do not match");
    }
    if (!terms) {
        return res.status(400).send("You must agree to the Terms & Conditions");
    }
    try {
        const existUser = await getUserByName('name');
        if(!existUser)
        {
            return res.status(400).send("username already exists");
        }
        const existEmail = await getUserByEmail('email');
        if(!existEmail)
        {
            return res.status(400).send("email already exists");
        }
        next();
    }catch(err)
    {
        res.status(400).send('server error during validation');
    }
    }

export const authLoginMiddleware = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send("error: enter email and password");
    }
    if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email)) {
        return res.status(400).send('Please enter a valid email address.');
    }
    if (password.length < 8) {
        return res.status(400).send('Password must be at least 8 characters long.');
    }
    next();
}

export const maxAge = 3*24*60*60;
export const generateToken =(userData)=> {
return jwt.sign(userData, process.env.JWT_SECRET ,{
    expiresIn: maxAge
});
}

