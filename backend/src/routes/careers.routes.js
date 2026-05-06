const express = require("express");
const router = express.Router();
const careerController  = require("../controllers/career.controller");
const { uploadResume, uploadCareerImage } = require("../config/multer");

// Public
router.get("/", careerController.getVacancies);
router.post("/:vacancyId/apply", uploadResume.single("resume"), careerController.applyForVacancy);

// Admin
router.post("/admin/create", uploadCareerImage.single("image"), careerController.createVacancy);

module.exports = router;