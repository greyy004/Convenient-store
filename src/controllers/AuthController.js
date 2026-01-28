import path from 'path';
const __dirname = path.resolve();

const authController = {
    getlogin: (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'login.html'));
    },

    getregister: (req, res) => {
        res.sendFile(path.join(__dirname, 'public', 'register.html'));
    }
};

export default authController;