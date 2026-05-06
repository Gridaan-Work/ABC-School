const LatestUpdate = require("../models/update.model");

// Create a new latest update
const createUpdate = async (req, res) => {
  try {
    const { title, description, link } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const newUpdate = new LatestUpdate({
      title,
      description: description || "",
      link: link || "",
      image: req.file.path
    });

    await newUpdate.save();
    res.status(201).json({ success: true, message: "Latest Update created successfully", data: newUpdate });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all latest updates
const getUpdates = async (req, res) => {
  try {
    const updates = await LatestUpdate.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: updates });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update a latest update
const updateUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedDoc = await LatestUpdate.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedDoc) {
      return res.status(404).json({ success: false, message: "Latest Update not found" });
    }

    res.status(200).json({ success: true, message: "Latest Update updated successfully", data: updatedDoc });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete a latest update
const deleteUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDoc = await LatestUpdate.findByIdAndDelete(id);

    if (!deletedDoc) {
      return res.status(404).json({ success: false, message: "Latest Update not found" });
    }

    res.status(200).json({ success: true, message: "Latest Update deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createUpdate,
  getUpdates,
  updateUpdate,
  deleteUpdate
};
