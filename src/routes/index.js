const express = require('express');
const router = express.Router();
const websiteController = require('../controllers/WebsiteController');

router.get('/', websiteController.getHomePage);
router.get('/about', websiteController.getAboutPage);
router.get('/contact', websiteController.getContactPage);

module.exports = router;  