import path from 'path';
const __dirname = path.resolve();

const authController = {
    LoginAuthentication: (req, res) => {
        const { email, password } = req.body;
        // Add logic for handling login

    },

    RegisterAuthentication: (req, res) => {
        const { username, email, password, confirmPassword } = req.body;
        // Add logic for handling registration
    }
};

export default authController;