import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around md:grid-cols-3">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-white mb-4">
              Techno Geek
            </h3>
            <p className="text-gray-300 mb-4">Sector-11, Uttara, Dhaka</p>
            <p className="text-gray-300">Phone: +880 1234 5678 91</p>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Get to know about us
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  About Techno Geek
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4">
              Let us help you
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Manage Your Content and Devices
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Help
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-700 my-8" />
        <p className="text-center text-gray-300">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
