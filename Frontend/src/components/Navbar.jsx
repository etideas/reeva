import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // If user is scrolling down, hide the navbar
      setIsVisible(false);
    } else {
      // If user is scrolling up, show the navbar
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[53%] max-w-6xl text-[#EEEBDD] text-sm transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      {/* Main Container */}
      <div className="bg-black rounded-full shadow-lg py-2 px-8 flex items-center gap-48 backdrop-blur-lg">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl md:text-3xl font-bold uppercase hover:text-[#AFD3E2] transition duration-300"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-10 rounded-full"
          />
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
          <ul className="flex flex-col md:flex-row md:space-x-12 items-center md:text-sm uppercase font-medium">
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
                to="/CrewForm"
                className="py-2 md:py-0 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Crew
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
