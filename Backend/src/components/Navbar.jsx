import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useFirebase } from "../Context/Firebase";  // Import Firebase context

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
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to="/add/gallery">Add Gallery</Nav.Link>
                <Nav.Link as={Link} to="/show/gallery">Show Gallery</Nav.Link>
                <Nav.Link as={Link} to="/add/media">Add Media</Nav.Link>
                <Nav.Link as={Link} to="/show/media">Show Media</Nav.Link>
                <Nav.Link as={Link} to="/add/video">Add Video</Nav.Link>
                <Nav.Link as={Link} to="/show/video">Show video</Nav.Link>
                
                <Button variant="outline-light" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
