const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// import routes
const enquiryRoutes = require('./routes/enquiry.routes');
const careerRoutes = require('./routes/careers.routes');

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use("/uploads", express.static("uploads")); 
// mount routes
app.use('/api', enquiryRoutes);
app.use('/api/careers', careerRoutes);

module.exports = app;