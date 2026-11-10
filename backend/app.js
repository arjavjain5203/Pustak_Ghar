// Load environment variables
require('dotenv').config();

// Import required modules
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middlewares/errorHandler');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// Routes
app.get('/', (req, res) => {
  res.send('Pustak Ghar Backend is running!');
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));

// Error Handler (must be last middleware)
app.use(errorHandler);

// Export the configured app (without starting server)
module.exports = app;