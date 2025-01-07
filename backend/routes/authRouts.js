const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// POST route for user registration
router.post('/signup', registerUser);

// POST route for user login
router.post('/login', loginUser);



module.exports = router;