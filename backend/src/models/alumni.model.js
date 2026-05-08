const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  passingYear: {
    type: Number,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  }
}, { timestamps: true });

module.exports = mongoose.model("Alumni", alumniSchema);
