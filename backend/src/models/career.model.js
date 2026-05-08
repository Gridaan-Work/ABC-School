const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: {          
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },
  phone: {
    type: String,
    required: true,
    match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"]
  },
  specialization: {
    type: String,
    required: true,
    trim: true
  },
  resume: {
    type: String,   // file path / URL store for uploaded resume
    default: ""
  }
});

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,   //  vacancy image path / URL
    default: ""
  },
  isActive: {
    type: Boolean,
    default: true
  },
  postedOn: {
    type: Date,
    default: Date.now
  },
  applications: [applicationSchema]
}, { timestamps: true });

const Career = mongoose.model("Career", careerSchema);
module.exports = Career;