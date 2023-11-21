const express = require('express');
const dotenv = require('dotenv');

const dbConnection = require('./config/database');
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');

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
app.use(categoryRoutes);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';
  const data = error.data || [];

  res.status(statusCode).json({
    message: message,
    data: data
  });
});

dbConnection(app);
