const Alumni = require("../models/alumni.model");

// Create an Alumni profile
const createAlumni = async (req, res) => {
  try {
    const { name, passingYear, school, college, major } = req.body;

    if (!name || !passingYear || !school || !college || !major) {
      return res.status(400).json({ success: false, message: "Please provide all required fields (name, passingYear, school, college, major)" });
    }

    const newAlumni = new Alumni({
      name,
      passingYear,
      school,
      college,
      major,
      image: req.file ? req.file.path : ""
    });

    await newAlumni.save();
    res.status(201).json({ success: true, message: "Alumni created successfully", data: newAlumni });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all Alumni profiles
const getAlumni = async (req, res) => {
  try {
    const alumni = await Alumni.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: alumni });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an Alumni profile
const updateAlumni = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedAlumni = await Alumni.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedAlumni) {
      return res.status(404).json({ success: false, message: "Alumni not found" });
    }

    res.status(200).json({ success: true, message: "Alumni updated successfully", data: updatedAlumni });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an Alumni profile
const deleteAlumni = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAlumni = await Alumni.findByIdAndDelete(id);

    if (!deletedAlumni) {
      return res.status(404).json({ success: false, message: "Alumni not found" });
    }

    res.status(200).json({ success: true, message: "Alumni deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createAlumni,
  getAlumni,
  updateAlumni,
  deleteAlumni
};
