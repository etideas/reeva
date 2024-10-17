import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./index.css"; // Assuming you have the global styles in this file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-6xl font-caveat">
      {/* Main Container */}
      <div className="bg-[#486b8c] text-[#EEEBDD] rounded-full shadow-lg py-4 px-10 md:px-16 flex items-center justify-between backdrop-blur-lg">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-3xl font-bold uppercase hover:text-[#AFD3E2] transition duration-300"
        >
          The Reeva
        </Link>

        {/* Toggle Button (for small screens) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`flex flex-col md:flex-row md:items-center absolute md:static top-[4.5rem] left-0 right-0 mx-auto md:mx-0 md:w-auto  rounded-lg md:rounded-none shadow-lg md:shadow-none py-6 md:py-0 px-8 md:px-0 transform md:transform-none transition-all duration-300 ${
            isOpen ? "flex" : "hidden"
          } md:flex`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-12 items-center text-lg md:text-xl uppercase font-medium">
            <li>
              <Link
                to="/"
                className="py-2 md:py-0 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="py-2 md:py-0 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/youtube"
                className="py-2 md:py-0 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                YouTube
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="py-2 md:py-0 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/media"
                className="py-2 md:py-0 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Media
              </Link>
            </li>
            <li>
              <Link
                to="/adminlogin"
                className="py-2 md:py-0 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                AdminPanel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
