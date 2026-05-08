import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const inputClass =
  "w-full h-10 px-3 border border-gray-300 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400";

export default function AdmissionEnquiry() {

  const [formData, setFormData] = useState({
    site: "tks",
    academicYear: "2026-2027",
    board: "",
    admissionFor: "",
    childName: "",
    dateOfBirth: "",
    primaryContact: "",
    parentName: "",
    mobileNumber: "",
    email: "",
    sourceOfEnquiry: "",
    motherTongue: "",
    address: "",
    comments: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("FORM DATA:", formData);

  
  try {

    const response = await axios.post(
      "https://abc-school.onrender.com/api/enquiry",
      formData
    );

    console.log("SUCCESS:", response.data);

    alert("Enquiry submitted successfully!");

    setFormData({
      site: "tks",
      academicYear: "2026-2027",
      board: "",
      admissionFor: "",
      childName: "",
      dateOfBirth: "",
      primaryContact: "",
      parentName: "",
      mobileNumber: "",
      email: "",
      sourceOfEnquiry: "",
      motherTongue: "",
      address: "",
      comments: ""
    });

  } catch (error) {

    console.log("FULL ERROR:", error);

    console.log("ERROR RESPONSE:", error?.response);

    console.log("ERROR DATA:", error?.response?.data);

    alert(
      error?.response?.data?.message ||
      "Something went wrong"
    );
  }
};  

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-4xl bg-[#f3f3f3] border border-gray-300 shadow-xl">
        
        <div className="h-16 px-5 border-b border-gray-300 flex items-center gap-3">
          <svg width="34" height="34" viewBox="0 0 60 60" fill="none">
            <path
              d="M12 50 L30 12 L48 50"
              stroke="#84cc16"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <path
              d="M30 12 L12 50"
              stroke="#1e3a5f"
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="30" cy="12" r="5" fill="#f59e0b" />
          </svg>

          <Link
            to="/"
            className="font-bold text-lg hover:underline"
            style={{ color: "#167f64" }}
          >
            The Kalyani School
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="px-9 pt-4 pb-7">

          <h1
            className="text-center text-2xl font-semibold mb-6"
            style={{ color: "#333333" }}
          >
            Enquiry Form
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">

            {/* Site */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Site
              </label>

              <select
                className={inputClass}
                name="site"
                value={formData.site}
                onChange={handleChange}
              >
                <option value="tks">TKS</option>
              </select>
            </div>

            {/* Academic Year */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Academic Year
              </label>

              <select
                className={inputClass}
                name="academicYear"
                value={formData.academicYear}
                onChange={handleChange}
              >
                <option value="2026-2027">2026-2027</option>
              </select>
            </div>

            {/* Board */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Board
              </label>

              <select
                className={inputClass}
                name="board"
                value={formData.board}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="cbse">CBSE</option>
                <option value="icse">ICSE</option>
                <option value="nios">NIOS</option>
              </select>
            </div>

            {/* Admission For */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Admission for
              </label>

              <select
                className={inputClass}
                name="admissionFor"
                value={formData.admissionFor}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="nur">Nursery</option>
                <option value="jr_kg">Junior KG</option>
                <option value="sr_kg">Senior KG</option>
                <option value="i">Class 1</option>
                <option value="ii">Class 2</option>
                <option value="iii">Class 3</option>
                <option value="iv">Class 4</option>
                <option value="v">Class 5</option>
                <option value="vi">Class 6</option>
                <option value="vii">Class 7</option>
                <option value="viii">Class 8</option>
                <option value="ix">Class 9</option>
                <option value="x">Class 10</option>
                <option value="xi">Class 11</option>
                <option value="xii">Class 12</option>
              </select>
            </div>

            {/* Child Name */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Name of the Child
              </label>

              <input
                className={inputClass}
                placeholder="Child's Name"
                name="childName"
                value={formData.childName}
                onChange={handleChange}
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Date of Birth
              </label>

              <input
                className={inputClass}
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>

            {/* Primary Contact */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Primary Contact
              </label>

              <select
                className={inputClass}
                name="primaryContact"
                value={formData.primaryContact}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="guardian">Guardian</option>
              </select>
            </div>

            {/* Parent Name */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Parent/Guardian Name
              </label>

              <input
                className={inputClass}
                placeholder="Parent/Guardian Name"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Mobile No
              </label>

              <input
                className={inputClass}
                placeholder="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Email ID
              </label>

              <input
                className={inputClass}
                placeholder="Email ID"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Source Of Enquiry */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Source of Enquiry
              </label>

              <select
                className={inputClass}
                name="sourceOfEnquiry"
                value={formData.sourceOfEnquiry}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="website">Website</option>
                <option value="online_enquiry">Online Enquiry</option>
                <option value="friends">Friends</option>
                <option value="walk_in">Walk In</option>
                <option value="reference">Reference</option>
              </select>
            </div>

            {/* Mother Tongue */}
            <div>
              <label className="block text-sm mb-1 text-[#333]">
                Mother Tongue
              </label>

              <select
                className={inputClass}
                name="motherTongue"
                value={formData.motherTongue}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
                <option value="marathi">Marathi</option>
              </select>
            </div>

          </div>

          {/* Address */}
          <div className="mt-3">
            <label className="block text-sm mb-1 text-[#333]">
              Residential Address
            </label>

            <input
              className={inputClass}
              placeholder="Residential Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Comments */}
          <div className="mt-2">
            <label className="block text-sm mb-1 text-[#333]">
              Comments if any
            </label>

            <textarea
              className="w-full min-h-10 px-3 py-2 border border-gray-300 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400"
              placeholder="Comments if any"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-9 h-10 rounded bg-[#1f83d7] hover:bg-[#1775c4] text-white text-sm font-medium tracking-wide transition-colors"
          >
            SUBMIT QUERY
          </button>

        </form>
      </div>
    </div>
  );
}
