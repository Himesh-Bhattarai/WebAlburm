const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Use capitalized User for model (common convention)

// Register new User
const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body; 

  // Check if all fields are provided
  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "Please provide name, email, and password." });
  }

  try {
    // Check if the user already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password with bcrypt and add salt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({ fullname, email, password: hashedPassword });

    // Save the new user into the database
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { registerUser };

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body; // Destructure input from request body

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User not found, please enter a valid email" });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token for the user
    const token = jwt.sign(
      { userId: existingUser._id }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: '1h' } // Token expiration
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { loginUser, registerUser };
