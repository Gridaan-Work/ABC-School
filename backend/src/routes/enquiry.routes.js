const express = require("express");
const router = express.Router();
const Enquiry = require("../models/enquiry.model");

// POST /api/enquiry
router.post("/enquiry", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    const savedEnquiry = await enquiry.save();

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: savedEnquiry
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Validation or save error",
      error: error.message
    });
  }
});

module.exports = router;