// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Using the MongoDB URI from the .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;