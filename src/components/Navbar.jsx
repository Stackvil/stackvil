import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left section: Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.jpeg"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <h1 className="text-xl font-bold text-blue-700">Stackvil Solutions</h1>
        </div>

        {/* Right section: Navigation Links */}
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          {/* Uncomment for login button:
          <Link to="/login" className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">
            Login
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
