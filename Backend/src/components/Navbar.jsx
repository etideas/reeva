import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { useFirebase } from "../Context/Firebase";  // Import Firebase context
import Home from './Home'

const NavBar = () => {
  const { currentUser, logoutUser, isLoggedIn } = useFirebase();  // Access Firebase context
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
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-white">Reeva AdminPanel</Link>
        <div className="space-x-4">
          <Link to="/Home" className="hover:text-gray-400">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/add/gallery" className="hover:text-gray-400">Add Gallery</Link>
              <Link to="/show/gallery" className="hover:text-gray-400">Show Gallery</Link>
              <Link to="/add/media" className="hover:text-gray-400">Add Media</Link>
              <Link to="/show/media" className="hover:text-gray-400">Show Media</Link>
              <Link to="/add/video" className="hover:text-gray-400">Add Video</Link>
              <Link to="/show/video" className="hover:text-gray-400">Show Video</Link>
              <Link to="/show/contact" className="hover:text-gray-400">Show Contact</Link>
              <button
                onClick={handleLogout}
                className="ml-4 px-3 py-1 border border-gray-500 rounded hover:bg-gray-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400">Login</Link>
              <Link to="/register" className="hover:text-gray-400">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
