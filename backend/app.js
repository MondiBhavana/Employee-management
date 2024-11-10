const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

// Use Routes

app.use('/api/auth', authRoutes);
app.use('/api/employees', employeeRoutes);
app.get('/', (req, res) => {
  console.log("HI.. This is the Employee Management System API");
  res.send("HI.. This is the Employee Management System API");
});

module.exports = app;

