import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Function to handle scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Hide navbar on scroll down
    } else {
      setIsVisible(true); // Show navbar on scroll up
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[50%] md:w-[50%] max-w-6xl text-[#EEEBDD] text-sm transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      {/* Main Container */}
      <div className="bg-black rounded-full shadow-lg md:py-2 pr-4 md:px-8 flex items-center justify-between md:justify-start md:gap-40 backdrop-blur-lg">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl md:text-3xl font-bold uppercase hover:text-[#AFD3E2] transition duration-300"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-14 rounded-full"
          />
        </a>

        {/* Toggle Button (only on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl md:hidden focus:outline-none text-[#EEEBDD]"
          aria-label="Toggle Menu"
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        {/* Mobile Nav Links */}
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } md:hidden flex-col absolute bottom-full left-0 w-full bg-black rounded-lg shadow-lg py-4 px-8 z-40 transform transition-all duration-300 ${
            isOpen ? "translate-y-[-1rem]" : "translate-y-0"
          }`}
        >
          <ul className="flex flex-col items-center uppercase font-medium space-y-4">
            <li>
              <a
                href="#home"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#youtube"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#media"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Media
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex flex-row items-center uppercase font-medium space-x-8">
            <li>
              <a
                href="#home"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#youtube"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#media"
                className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
              >
                Media
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
