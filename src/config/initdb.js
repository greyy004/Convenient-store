import {createOrderTable} from '../models/orderModel.js';
import {createProductTable} from '../models/productModel.js';
import {createUserTable} from '../models/userModel.js';

const initdb = async () => {
    try {
        await createUserTable();
        await createProductTable();
        await createOrderTable();
        console.log('User table created or already exists.');
    } catch (err) {
        console.error('Error creating tables:', err);
    }
};

export default initdb;