import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// project root (two levels up from controllers)
const ROOT_DIR = path.resolve(__dirname, "../../");

const indexController = {
  getHomePage: (req, res) => {
    res.sendFile(path.join(ROOT_DIR, "public/html/index.html"));
  },

  getAboutPage: (req, res) => {
    res.sendFile(path.join(ROOT_DIR, "public/html/about.html"));
  },

  getContactPage: (req, res) => {
    res.sendFile(path.join(ROOT_DIR, "public/html/contact.html"));
  },

  getServicesPage: (req, res) => {
    res.sendFile(path.join(ROOT_DIR, "public/html/services.html"));
  },

  getLoginPage: (req, res) => {
    res.sendFile(path.join(ROOT_DIR, "public/html/login.html"));
  },

  getRegisterPage: (req, res) => {
    res.sendFile(path.join(ROOT_DIR, "public/html/register.html"));
  }
};

export default indexController;
