const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true, // As per requirements, image is needed
  }
}, { timestamps: true });

module.exports = mongoose.model("Activity", activitySchema);
