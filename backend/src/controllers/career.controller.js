const Career = require("../models/career.model");

// Apply for a vacancy 
const applyForVacancy = async (req, res) => {
  try {
    const { vacancyId } = req.params;
    const { name, email, phone, specialization } = req.body;

    if (!name || !email || !phone || !specialization) {
      return res.status(400).json({
        success: false,
        message: "name, email, phone, specialization"
      });
    }

    const vacancy = await Career.findById(vacancyId);
    if (!vacancy) return res.status(404).json({ success: false, message: "Vacancy not found" });
    if (!vacancy.isActive) return res.status(400).json({ success: false, message: "Vacancy আর active নেই" });

    const application = {
      name,
      email,
      phone,
      specialization,
      resume: req.file ? req.file.path : ""
    };

    vacancy.applications.push(application);
    await vacancy.save();

    res.status(201).json({ success: true, message: "Application submitted", data: application });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Create vacancy
const createVacancy = async (req, res) => {
  try {
    const { title, description, isActive = true } = req.body;

    if (!title || !description) {
      return res.status(400).json({ success: false, message: "title আর description দাও" });
    }

    const vacancy = new Career({
      title,
      description,
      isActive,
      image: req.file ? req.file.path : ""
    });

    await vacancy.save();
    res.status(201).json({ success: true, message: "Vacancy created", data: vacancy });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all vacancies
const getVacancies = async (req, res) => {
  try {
    const vacancies = await Career.find().select("-applications");
    res.status(200).json({ success: true, data: vacancies });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


module.exports = {
  applyForVacancy,
  createVacancy,
  getVacancies
};