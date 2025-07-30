const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Validation
  const errors = [];
  if (!firstName) errors.push('First name is required');
  if (!lastName) errors.push('Last name is required');
  if (!email) errors.push('Email is required');
  if (!password) errors.push('Password is required');
  if (password !== confirmPassword) errors.push('Passwords do not match');

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    // Check if admin exists
    const [existingAdmin] = await db.query('SELECT * FROM admins WHERE email = ?', [email]);
    
    if (existingAdmin.length > 0) {
      return res.status(409).json({ 
        message: 'Admin already exists',
        errorType: 'duplicate_email'
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin (no email verification)
    await db.query(
      'INSERT INTO admins (first_name, last_name, email, password, is_verified) VALUES (?, ?, ?, ?, ?)',
      [firstName, lastName, email, hashedPassword, true] // Set is_verified to true
    );

    res.status(201).json({ 
      success: true,
      message: 'Registration successful! Please login.'
    });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ 
      message: 'Server Error',
      error: process.env.NODE_ENV === 'development' ? err.message : null
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const [admins] = await db.query('SELECT * FROM admins WHERE email = ?', [email]);
    
    if (admins.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const admin = admins[0];

    // Compare passwords
    const isMatch = await bcrypt.compare(password, admin.password);
    
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ 
      message: 'Login successful',
      token,
      admin: {
        id: admin.id,
        firstName: admin.first_name,
        lastName: admin.last_name,
        email: admin.email
      }
    });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

// Forgot Password
const forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const [admins] = await db.query('SELECT * FROM admins WHERE email = ?', [email]);
    
    if (admins.length === 0) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const admin = admins[0];
    const resetToken = uuidv4();
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

    await db.query(
      'UPDATE admins SET reset_token = ?, reset_token_expiry = ? WHERE id = ?',
      [resetToken, resetTokenExpiry, admin.id]
    );

    // Send reset email (for now just with token, later can implement link)
    const emailSent = await sendEmail(
      email,
      'Password Reset Request',
      `Your password reset token is: ${resetToken}`
    );

    if (!emailSent) {
      return res.status(500).json({ message: 'Failed to send reset email' });
    }

    res.status(200).json({ message: 'Password reset instructions sent to your email' });
  } catch (err) {
    console.error('Forgot Password Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Logout (client-side should remove token)
const logout = (req, res) => {
  res.status(200).json({ message: 'Logout successful' });
};
const getAllAdmins = async (req, res) => {
  try {
    const [admins] = await db.query('SELECT * FROM admins');
    res.status(200).json(admins);
  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};
const getAdminById = async (req, res) => {
  const { id } = req.params;
  
  if (!id || isNaN(id)) {
    return res.status(400).json({ message: 'Invalid member ID' });
  }

  try {
    const [results] = await db.query(
      'SELECT *, DATE_FORMAT(created_at, "%Y-%m-%d") as formatted_date FROM admins WHERE id = ?', 
      [id]
    );

    if (results.length === 0) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    const admin = results[0];
    
    // Parse payments if stored as JSON string
    if (admin.payments && typeof admin.payments === 'string') {
      admin.payments = JSON.parse(admin.payments);
    }

    res.status(200).json(admin);

  } catch (err) {
    console.error('Database Error:', err);
    res.status(500).json({ 
      message: 'Server Error',
      error: err.message 
    });
  }
};


module.exports = {
  signup,
  login,
  forgotPassword,
  logout,
  getAllAdmins,
  getAdminById
};