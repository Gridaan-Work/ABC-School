const mongoose = require("mongoose");

const updateSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  link: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("LatestUpdate", updateSchema);
