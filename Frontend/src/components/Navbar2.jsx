import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

<<<<<<< HEAD
  // Scroll behavior for showing/hiding the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

=======
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
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

<<<<<<< HEAD
  // Navigation links
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#gallery", label: "Gallery" },
    { href: "#youtube", label: "YouTube" },
    { href: "#contact", label: "Contact Us" },
    { href: "#media", label: "Media" },
    { href: "#crewform", label: "CrewForm" },
  ];

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] sm:w-[70%] md:w-[57%] max-w-6xl text-[#EEEBDD] text-sm transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <div className="bg-black rounded-full shadow-lg py-2 px-4 md:px-8 flex items-center justify-between md:justify-start md:gap-36 backdrop-blur-lg">
        {/* Logo Section */}
        <a
          href="#home"
          className="flex-shrink-0"
=======
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
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
        >
          <img
            src={logo}
            alt="Logo"
<<<<<<< HEAD
            className="h-12 md:h-14 rounded-full object-contain"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="text-xl md:hidden text-[#EEEBDD] focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
=======
            className="h-12 md:h-14 rounded-full"
          />
        </a>

        {/* Toggle Button (only on mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl md:hidden focus:outline-none text-[#EEEBDD]"
          aria-label="Toggle Menu"
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
        >
          {isOpen ? "✖️" : "☰"}
        </button>

<<<<<<< HEAD
        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden flex-col absolute bottom-full left-0 w-full bg-black rounded-lg shadow-lg py-4 px-8 z-40 mb-2`}
          >
            <ul className="flex flex-col items-center uppercase font-medium space-y-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
                    onClick={handleLinkClick} // Close menu on click
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-shrink-0 justify-end items-center space-x-8">
          <ul className="flex flex-row items-center uppercase font-medium space-x-8">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[#EEEBDD] hover:text-[#AFD3E2] py-2 transition duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
=======
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
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
