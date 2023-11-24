const path = require('path');

const express = require('express');
const dotenv = require('dotenv');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const authRoutes = require('./routes/authRoute');
const categoryRoutes = require('./routes/categoryRoute');
const subCategoryRoutes = require('./routes/subCategoryRoute');
const dbConnection = require('./config/database');
const errorHelper = require('./utils/error');
const globalError = require('./middlewares/errorMiddleware');

dotenv.config({ path: 'config.env' });

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg'
    || file.mimetype === 'image/jpeg') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(express.json());
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(authRoutes);
app.use('/categories', categoryRoutes);
app.use('/subcategories', subCategoryRoutes);

app.all('*', () => {
  errorHelper('404 Not found', 404);
});

app.use(globalError);

dbConnection(app);
