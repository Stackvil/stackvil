import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// 🔐 Import AdminLogin route but DO NOT show in Navbar
import AdminLogin from "./pages/AdminLogin";
import CustomerLogin from "./pages/CustomerLogin";
import Dashboard from "./pages/Dashboard";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      {/* ✅ Navbar does NOT include Admin Login link */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* ✅ Admin and Customer login pages are accessible via direct link only */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/customer-login" element={<CustomerLogin />} />

        {/* ✅ Dashboard (should be protected if not already) */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* ✅ Redirect old /login route to /admin-login */}
        <Route path="/login" element={<Navigate to="/admin-login" />} />

        {/* ❌ 404 fallback */}
        <Route path="*" element={<h1 className="text-center p-10 text-2xl">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
