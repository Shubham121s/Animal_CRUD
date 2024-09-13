const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const animalRoutes = require('./routes/animalRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Use animal routes
app.use('/api', animalRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
