import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaSoundcloud,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#146C94] text-[#F6F1F1] py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Left Section: Copyright */}
        <div className="mb-4 md:mb-0 text-sm">
          <p className="text-[#F6F1F1]">
            &copy; 2024 THE REEVA. All rights reserved.
          </p>
        </div>

        {/* Center Section: Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src="/images/logo.png"
            alt="The Reeva Logo"
            className="w-20 h-auto mx-auto md:mx-0"
          />
        </div>

        {/* Right Section: Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="#"
            className="hover:text-[#19A7CE] transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="#"
            className="hover:text-[#19A7CE] transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-[#19A7CE] transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-[#19A7CE] transition duration-300"
            aria-label="Behance"
          >
            <FaBehance />
          </a>
          <a
            href="#"
            className="hover:text-[#19A7CE] transition duration-300"
            aria-label="SoundCloud"
          >
            <FaSoundcloud />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
