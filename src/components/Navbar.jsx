import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

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

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.3 5.71L12 12.01 5.7 5.71 4.29 7.12 10.59 13.4 4.3 19.69 5.71 21.1 12 14.81 18.29 21.1 19.7 19.69 13.41 13.4 19.7 7.12z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          {/* <Link to="/login" className="text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Login</Link> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
          <Link to="/services" className="block text-gray-700 hover:text-blue-600">Services</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          {/* <Link to="/login" className="block text-white bg-blue-600 px-3 py-1 rounded hover:bg-blue-700">Login</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
