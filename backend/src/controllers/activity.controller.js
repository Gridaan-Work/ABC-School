const Activity = require("../models/activity.model");

// Create a new activity
const createActivity = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ success: false, message: "Title is required" });
    }

    if (!req.file) {
      return res.status(400).json({ success: false, message: "Image is required" });
    }

    const newActivity = new Activity({
      title,
      image: req.file.path
    });

    await newActivity.save();
    res.status(201).json({ success: true, message: "Activity created successfully", data: newActivity });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all activities
const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: activities });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Update an activity
const updateActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };
    
    if (req.file) {
      updateData.image = req.file.path;
    }

    const updatedActivity = await Activity.findByIdAndUpdate(id, updateData, { new: true });
    
    if (!updatedActivity) {
      return res.status(404).json({ success: false, message: "Activity not found" });
    }

    res.status(200).json({ success: true, message: "Activity updated successfully", data: updatedActivity });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Delete an activity
const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedActivity = await Activity.findByIdAndDelete(id);

    if (!deletedActivity) {
      return res.status(404).json({ success: false, message: "Activity not found" });
    }

    res.status(200).json({ success: true, message: "Activity deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  createActivity,
  getActivities,
  updateActivity,
  deleteActivity
};
