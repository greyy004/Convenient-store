import express from 'express';
import path from 'path';

import indexRoutes from './src/routes/indexRoutes.js';
import authRoutes from './src/routes/authRoutes.js';

const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.resolve();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/auth', authRoutes);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});