const multer = require("multer");
const path = require("path");
const fs = require("fs");

const createStorage = (folder) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      const dir = `uploads/${folder}`;
      fs.mkdirSync(dir, { recursive: true }); 
      cb(null, dir);
    },
    filename: (req, file, cb) => {
      const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      cb(null, `${unique}${path.extname(file.originalname)}`);
    }
  });

// Resume
 const uploadResume = multer({
  storage: createStorage("resumes"),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = /pdf|msword|vnd.openxmlformats-officedocument.wordprocessingml.document/;
    allowed.test(file.mimetype)
      ? cb(null, true)
      : cb(new Error("Only PDF/DOC/DOCX files allowed for resume"));
  }
});

// Career image
 const uploadCareerImage = multer({
  storage: createStorage("career-images"),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    const allowed = /image\/(jpeg|jpg|png|webp)/;
    allowed.test(file.mimetype)
      ? cb(null, true)
      : cb(new Error("Only JPEG/PNG/WEBP images allowed"));
  }
});

// Alumni image
 const uploadAlumniImage = multer({
  storage: createStorage("alumni-images"),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    const allowed = /image\/(jpeg|jpg|png|webp)/;
    allowed.test(file.mimetype)
      ? cb(null, true)
      : cb(new Error("Only JPEG/PNG/WEBP images allowed"));
  }
});

// Activity image
 const uploadActivityImage = multer({
  storage: createStorage("activity-images"),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    const allowed = /image\/(jpeg|jpg|png|webp)/;
    allowed.test(file.mimetype)
      ? cb(null, true)
      : cb(new Error("Only JPEG/PNG/WEBP images allowed"));
  }
});

// Latest Update image
 const uploadUpdateImage = multer({
  storage: createStorage("update-images"),
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB
  fileFilter: (req, file, cb) => {
    const allowed = /image\/(jpeg|jpg|png|webp)/;
    allowed.test(file.mimetype)
      ? cb(null, true)
      : cb(new Error("Only JPEG/PNG/WEBP images allowed"));
  }
});

module.exports = { uploadResume, uploadCareerImage, uploadAlumniImage, uploadActivityImage, uploadUpdateImage };