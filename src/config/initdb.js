import {createOrderTable} from '../models/orderModel.js';
import {createProductTable} from '../models/productModel.js';
import {createUserTable} from '../models/userModel.js';

const initdb = async () => {
    try {
        await createUserTable();
        await createProductTable();
        await createOrderTable();
        console.log('Tables created successfully.');
    } catch (err) {
        console.error('Error creating tables:', err);
    }
};

export default initdb;