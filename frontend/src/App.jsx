import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ParentPortal from "./pages/ParentPortal";
import AdmissionEnquiry from "./pages/AdmissionEnquiry";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/parent-portal" element={<ParentPortal />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/admission-enquiry" element={<AdmissionEnquiry />} />
      </Routes>
    </BrowserRouter>
  );
}
