const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
//const bcrypt = require('bcrypt'); // For password hashing
const cors = require('cors'); // Add cors for enabling CORS
//const someModule = require('someModule');


// Database connection details (replace with your actual credentials)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'tarot_db',
  port:4000
});

const app = express();

// Apply CORS middleware with appropriate configuration (adjust as needed)
app.use(cors({
  origin: 'http://localhost:2244/', // Replace with the origin of your front-end application
  credentials: true // Enable cookies for cross-origin requests (if necessary)
}));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '.')));

//serve static files from other directory
app.use(express.static(path.join(__dirname, 'frontend')));

// Configure body parser to handle form data
app.use(bodyParser.urlencoded({ extended: false }));

// Routes for registration and login

// Registration route
app.post('/register', async (req, res) => {
  const { mobilenumber, email, password } = req.body;

  // Hash password using bcrypt before storing
  const saltRounds = 10; // Adjust salt rounds as needed (higher = more secure)
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const sql = `INSERT INTO users (mobilenumber, email, password) VALUES (?, ?, ?)`;
  connection.query(sql, [mobilenumber, email, hashedPassword], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Registration failed!');  // Handle errors appropriately
    } else {
      res.redirect('/login/login.html?message=Registration+successful!');
      // res.send('Registration successful!');
    }
  });
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Fetch user by email
  const sql = `SELECT * FROM users WHERE email = ?`;
  connection.query(sql, [email], async (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).send('Login failed!');  // Handle errors appropriately
    } else if (user.length === 0) {
      res.send('user not found');  // User not found
    } else {
      // Compare hashed passwords using bcrypt
      const isPasswordValid = await bcrypt.compare(password, user[0].password);

      if (isPasswordValid) {
        // Login successful (redirect or send success message)
        res.redirect('/home/home.html?message=login+successful!');
        // res.send('Login successful!');
      } else {
        res.send('Invalid password');  // Password mismatch
      }
    }
  });
});

app.listen(2244, () => console.log('Server listening on port 2244'));



