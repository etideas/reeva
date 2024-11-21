import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useFirebase } from '../Context/Firebase';

const RegisterPage = () => {
  const firebase = useFirebase();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (firebase.isLoggedIn) {
      // navigate to home if already logged in
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signing up a user...");
    const result = await firebase.signupUserWithEmailAndPassword(
      email,
      password
    );
    console.log("Successfully signed up", result);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-extrabold text-center text-[#752220] mb-6">Create an Account</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#752220] focus:border-transparent"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#752220] focus:border-transparent"
            />
          </div>

          <button type="submit" className="w-full bg-[#752220] text-white py-2 px-4 rounded-md text-lg font-semibold hover:bg-[#9c4e45] focus:outline-none focus:ring-2 focus:ring-[#752220]">
            Create Account
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account? <a href="/login" className="text-[#752220] font-medium">Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
