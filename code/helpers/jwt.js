const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = async (payload) => {
  try {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '3h',
      algorithm: 'HS256',
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = generateToken;