const express = require("express");
const router = express.Router();
const updateController = require("../controllers/update.controller");
const { uploadUpdateImage } = require("../config/multer");

// Public routes
router.get("/", updateController.getUpdates);

// Admin routes
router.post("/", uploadUpdateImage.single("image"), updateController.createUpdate);
router.put("/:id", uploadUpdateImage.single("image"), updateController.updateUpdate);
router.delete("/:id", updateController.deleteUpdate);

module.exports = router;
