import path from 'path';

// Replace __dirname for ES Modules
const __dirname = path.resolve();

const indexController = {
    getHomePage: (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    },

    getAboutPage: (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'about.html'));
    },

    getContactPage: (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'contact.html'));
    },

    getServicesPage: (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'services.html'));
    },

    getLoginPage: (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'login.html'));
    },

    getRegisterPage: (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'register.html'));
    }
};

export default indexController;
