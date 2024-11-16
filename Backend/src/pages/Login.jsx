import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useFirebase } from "../Context/Firebase";

const LoginPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in a user...");
    try {
      const result = await firebase.loginUserWithEmailAndPassword(email, password);
      console.log("Successful login", result);
    } catch (error) {
      console.error("Error during sign-in:", error);
      if (error.code === 'auth/too-many-requests') {
        alert("Too many attempts. Please try again later.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
        <h2 className="text-3xl font-extrabold text-center text-[#752220] mb-6">Login to Your Account</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4">
            <Form.Label className="text-gray-700">Email address</Form.Label>
            <Form.Control
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email"
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#752220]"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-gray-700">Password</Form.Label>
            <Form.Control
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#752220]"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-full py-3 mb-4 bg-[#752220] hover:bg-[#9e2a47] text-white rounded-lg">
            Login
          </Button>
        </Form>

        <div className="text-center mb-4">
          <h1 className="text-gray-500">OR</h1>
        </div>

       

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account? <a href="/register" className="text-[#752220] hover:underline">Register</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
