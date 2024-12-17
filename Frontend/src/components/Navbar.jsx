import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Scroll behavior for showing/hiding the navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
      setIsDropdownOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Navigation links
  const navLinks = [
    { href: "/#media", label: "Media" },
    { href: "/#contact", label: "Contact Us" },
    { href: "/crewform", label: "CrewForm", external: true }, // Open in a new tab
  ];

  const mobNavLinks = [
    { href: "/#gallery", label: "Gallery" },
    { href: "/#youtube", label: "YouTube" },
    { href: "/#media", label: "Media" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact Us" },
    { href: "/crewform", label: "CrewForm", external: true },
  ];

  const contentDropdownLinks = [
    { href: "/#gallery", label: "Gallery" },
    { href: "/#youtube", label: "YouTube" },
    { href: "/blog", label: "Blog" },
  ];

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-[50%] sm:w-[80%] md:w-[57%] max-w-6xl text-[#EEEBDD] text-sm transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-24"
      }`}
    >
      <div className="bg-black bg-opacity-80 border-white border-2  rounded-full shadow-lg md:pl-2 py-2 pr-6 sm:px-8 md:px-12 flex flex-wrap items-center justify-between">
        {/* Logo Section */}
        <HashLink
          to="/#home"
          smooth
          className="flex-shrink-0"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-12 md:h-14 rounded-full object-contain"
          />
        </HashLink>

        {/* Mobile Menu Toggle */}
        <button
          className="text-xl md:hidden text-[#EEEBDD] focus:outline-none"
          aria-label="Toggle Menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖️" : "☰"}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex-col absolute bottom-full left-0 w-full bg-black rounded-lg shadow-lg py-4 px-8 z-40 mb-2">
            <ul className="flex flex-col items-center uppercase font-medium space-y-4">
              {mobNavLinks.map(({ href, label, external }) => (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
                      onClick={handleLinkClick}
                    >
                      {label}
                    </a>
                  ) : (
                    <HashLink
                      to={href}
                      smooth
                      className="py-2 text-[#EEEBDD] hover:text-[#AFD3E2] transition duration-300"
                      onClick={handleLinkClick}
                    >
                      {label}
                    </HashLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-wrap items-center justify-end flex-grow space-x-4">
          <ul className="flex flex-wrap items-center uppercase font-medium space-x-6">
            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <span className="text-[#EEEBDD] hover:text-[#9C2B2B] py-2 cursor-pointer">
                Content
              </span>
              {isDropdownOpen && (
                <div className="absolute bottom-[140%] left-0 bg-black text-[#EEEBDD] shadow-lg rounded-lg py-2 w-40">
                  {contentDropdownLinks.map(({ href, label }) => (
                    <HashLink
                      key={href}
                      to={href}
                      smooth
                      className="block px-4 py-2 hover:bg-[#752220] transition duration-300"
                    >
                      {label}
                    </HashLink>
                  ))}
                </div>
              )}
            </li>
            {navLinks.map(({ href, label, external }) => (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#EEEBDD] hover:text-[#9C2B2B] py-2 transition duration-300"
                  >
                    {label}
                  </a>
                ) : (
                  <HashLink
                    to={href}
                    smooth
                    className="text-[#EEEBDD] hover:text-[#9C2B2B] py-2 transition duration-300"
                  >
                    {label}
                  </HashLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
