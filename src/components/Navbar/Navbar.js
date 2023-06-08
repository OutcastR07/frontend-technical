import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-xl">
              Dashboard
            </Link>
          </div>
          <div className="flex">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-1 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
            <div>
              <img
                src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
                alt="Profile"
                className="rounded-full w-8 h-8 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
