const express = require("express");
const router = express.Router();
const activityController = require("../controllers/activity.controller");
const { uploadActivityImage } = require("../config/multer");

// Public routes
router.get("/", activityController.getActivities);

// Admin routes (assuming unprotected for now)
router.post("/", uploadActivityImage.single("image"), activityController.createActivity);
router.put("/:id", uploadActivityImage.single("image"), activityController.updateActivity);
router.delete("/:id", activityController.deleteActivity);

module.exports = router;
