// server.js
const express = require('express');
const connectDB = require('./config/database');
const dotenv = require('dotenv');

// Initialize dotenv to read .env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running!');
});


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
