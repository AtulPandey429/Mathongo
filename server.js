const express = require('express');
const connectDB = require('./config/db');
const listRoutes = require('./routes/listRoutes');
const userRoutes = require('./routes/userRoutes');
const emailRoutes = require('./routes/emailRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());
app.use('/api/lists', listRoutes);
app.use('/api/lists', userRoutes);
app.use('/api/email', emailRoutes);

// Error Handler
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
