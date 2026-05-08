const express = require("express");
const router = express.Router();
const alumniController = require("../controllers/alumni.controller");
const { uploadAlumniImage } = require("../config/multer");

// Public routes
router.get("/", alumniController.getAlumni);

// Admin routes (assuming they are protected in a real app, currently unprotected like career routes)
router.post("/", uploadAlumniImage.single("image"), alumniController.createAlumni);
router.put("/:id", uploadAlumniImage.single("image"), alumniController.updateAlumni);
router.delete("/:id", alumniController.deleteAlumni);

module.exports = router;
