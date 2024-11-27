const User = require('../models/authModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require('path');
const fs = require('fs');


// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '24h',
  });
};

// Register User
exports.register = async (req, res) => {

  try {
    const { name, email, contactNo, surname, address, designation, password } = req.body;
    console.log(password, email, contactNo,)
    const user = new User({ name, email, contactNo, surname, address, designation, password });
    await user.save();
    res.status(200).json({
      message: 'User registered successfully',
      user: {
        _id: user._id,
        username: user.name,
        email: user.email,
        contactNo: user.contactNo,
        surname: user.surname,
        designation: user.designation,
        password: user.password,
        address: user.address,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      }
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login User
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Debug: log the incoming credentials
    console.log("Login attempt with email:", email, "and password:", password);

    // Find user by email
    const user = await User.findOne({ email });

    // Debug: log the fetched user
    console.log("User found:", user);

    // Check if user exists and if the password is correct
    if (!user || !(await user.matchPassword(password))) {
      console.log("Invalid credentials, user not found or incorrect password");
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Return success response with user details and token
    res.json({
      message: 'User logged in successfully',
      token,
      role: user.designation,
      username: user.email,
      users: {
        _id: user._id,
        username: user.name,
        email: user.email,
        contactNo: user.contactNo,
        designation: user.designation,
        surname: user.surname,
        address: user.address,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
      }
    });
  } catch (error) {
    // Handle any errors
    console.log("Error during login:", error);
    res.status(400).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}