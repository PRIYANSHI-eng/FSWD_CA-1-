const express = require('express');
const router = express.Router();

router.post('/signup', (req, res) => {
  const { username, email, password, dateOfBirth } = req.body;

  // Input validation
  if (!username) {
    return res.status(400).json({ error: 'Username cannot be empty' });
  }
  if (!email) {
    return res.status(400).json({ error: 'Email cannot be empty' });
  }
  if (!password) {
    return res.status(400).json({ error: 'Password cannot be empty' });
  }
  if (password.length < 8 || password.length > 16) {
    return res.status(400).json({
      error: 'Password length should be greater than 8 or less than or equal to 16',
    });
  }

  // Simulate saving user
  const newUser = {
    username,
    email,
    password,
    dateOfBirth,
  };

  console.log('User registered:', newUser);
  res.status(200).json({ message: 'User registered successfully', user: newUser });
});

module.exports = router;
