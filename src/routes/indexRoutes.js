import express from 'express' ;
const router = express.Router();
import indexcontroller from '../controllers/indexController.js';

router.get('/',indexcontroller.getHomePage);

router.get('/about',indexcontroller.getAboutPage);

router.get('/contact',indexcontroller.getContactPage);

router.get('/services',indexcontroller.getServicesPage);


export default router;