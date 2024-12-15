import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useFirebase } from "../Context/Firebase"; // Import Firebase context
import logo from '../assets/reeva_logo.png';


const NavBar = () => {
  const { currentUser, logoutUser, isLoggedIn } = useFirebase(); // Access Firebase context
  const navigate = useNavigate(); // Initialize navigate function

  const handleLogout = async () => {
    try {
      await logoutUser();
      console.log("Successfully logged out!");
      navigate("/"); // Redirect to home page after logout
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="bg-[#752220]">
      <nav className="px-2 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Reeva Logo" className="h-[4.5rem]" />
          </Link>

          <div className="flex items-center space-x-6">
            {isLoggedIn ? (
              <>
                <Link to="/add/gallery" className="text-white hover:text-gray-300 transition duration-300">Gallery</Link>

                <Link to="/add/media" className="text-white hover:text-gray-300 transition duration-300">Media</Link>
                <Link to="/add/video" className="text-white hover:text-gray-300 transition duration-300">Video</Link>

                <Link to="/show/contact" className="text-white hover:text-gray-300 transition duration-300">Contact</Link>
                <Link to="/show/crew" className="text-white hover:text-gray-300 transition duration-300">Crew</Link>
                <Link to="/add/blog" className="text-white hover:text-gray-300 transition duration-300">Blog</Link>

                <button onClick={handleLogout} className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
                  Logout
                </button>
              </>
            ) : (
            
              <>

              
             
                <Link to="/login" className="text-white hover:text-gray-300 transition duration-300">Login</Link>
                <Link to="/register" className="text-white hover:text-gray-300 transition duration-300">Register</Link>
                
                
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
