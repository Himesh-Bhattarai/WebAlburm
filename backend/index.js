const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database');  // Import your database connection
const authRoutes = require('./routes/authRouts');  // Import the auth routes

dotenv.config();  // Initialize dotenv to read .env variables
const app = express();  // Initialize Express

app.use(cors());  // Enable Cross-Origin Resource Sharing (CORS) for all origins
app.use(express.json());  // Middleware to parse incoming JSON requests

// Connect to MongoDB database
connectDB();

// Use routes (make sure routes are working for /api/auth)
app.use('/api/auth', authRoutes);  // Use authRoutes for /api/auth endpoints

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
