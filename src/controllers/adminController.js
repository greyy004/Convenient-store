import path from 'path';
import { fileURLToPath } from 'url';
import {
    UserCount
} from '../models/userModel.js';
import {
    ProductCount
} from '../models/productModel.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getAdminDash = (req, res) => {
    res.sendFile(
        path.join(__dirname, '../../public/html/adminDashboard.html')
    );
};

export const getUserCount = async (req, res) => {
    try {
        const totalUsers = await UserCount();
        if (!totalUsers) {
            return res.status(400).json({ message: "total users not found" });
        }
        return res.status(200).json({totalUsers: totalUsers});
    } catch (err){
    return res.status(400).json({ message: "error in the database" });}
};




export const getProductCount = async (req, res) => {
     try {
        const totalProducts = await ProductCount();
        if (!totalProducts) {
            return res.status(400).json({ message: "total products not found" });
        }
        return res.status(200).json({totalProducts: totalProducts});
    } catch (err){
    return res.status(400).json({ message: "error in the database" });}
};