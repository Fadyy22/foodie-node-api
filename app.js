const express = require('express');
const dotenv = require('dotenv');

const dbConnection = require('./config/database');
const authRoutes = require('./routes/auth');

dotenv.config({ path: 'config.env' });

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());

app.use(authRoutes);

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    message: error.message,
    data: error.data
  });
});

dbConnection(app);
