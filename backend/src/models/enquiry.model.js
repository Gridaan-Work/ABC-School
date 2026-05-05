const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    site: {
      type: String,
      default: "tks",
      immutable: true // cannot be changed once set
    },

    academicYear: {
      type: String,
      enum: ["2026-2027"],
      default: "2026-2027"
    },

    board: {
      type: String,
      enum: ["cbse", "icse", "nios"],
      required: true,
      lowercase: true,
      trim: true
    },

    admissionFor: {
      type: String,
      enum: [
        "nur", "jr_kg", "sr_kg",
        "i","ii","iii","iv","v","vi","vii","viii","ix","x","xi","xii"
      ],
      required: true,
      lowercase: true,
      trim: true
    },

    childName: {
      type: String,
      required: true,
      trim: true
    },

    dateOfBirth: {
      type: Date,
      required: true
    },

    primaryContact: {
      type: String,
      enum: ["father", "mother", "guardian"],
      required: true,
      lowercase: true
    },

    parentName: {
      type: String,
      required: true,
      trim: true
    },

    mobileNumber: {
      type: String,
      required: true,
      match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"]
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
    },

    sourceOfEnquiry: {
      type: String,
      enum: [
        "newspaper",
        "online_enquiry",
        "website",
        "direct_mail",
        "word_of_mouth",
        "events",
        "friends",
        "walk_in",
        "sms",
        "others",
        "reference"
      ],
      lowercase: true
    },

    motherTongue: {
      type: String,
      lowercase: true,
      trim: true
    },

    address: {
      type: String,
      trim: true
    },

    comments: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Enquiry", enquirySchema);