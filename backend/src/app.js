const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// import routes
const enquiryRoutes = require('./routes/enquiry.routes');

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// mount routes
app.use('/api', enquiryRoutes);

module.exports = app;