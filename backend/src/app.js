const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// import routes
const enquiryRoutes = require('./routes/enquiry.routes');
const careerRoutes = require('./routes/careers.routes');
const alumniRoutes = require('./routes/alumni.routes');
const activityRoutes = require('./routes/activity.routes');
const updateRoutes = require('./routes/update.routes');

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
app.use('/api/alumni', alumniRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/updates', updateRoutes);

module.exports = app;