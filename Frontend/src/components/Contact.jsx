import React, { useState } from "react";
import { ImEnvelop } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { useFirebase } from '../context/Firebase';

const Contact = () => {
  const { storeContactFormData } = useFirebase();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await storeContactFormData(formData);
      setSubmissionStatus("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } catch (error) {
      setSubmissionStatus("Failed to send your message. Please try again.");
    }
  };

  return (
    <div id="contact" className="flex w-full min-h-screen justify-center items-center relative px-4 sm:px-8 py-8">
      <div className="flex flex-col md:flex-row bg-[#752220] w-full max-w-4xl p-6 sm:p-8 rounded-xl shadow-lg text-[#F6F1F1] mt-8 sm:mt-[100px] relative z-10 space-y-6 md:space-y-0 md:space-x-6">
        <div className="flex flex-col space-y-6 justify-between md:w-1/2">
          {/* Contact Details Section */}
          <div>
            <h1 className="font-bold text-3xl md:text-4xl tracking-wide text-[#F6F1F1]">Contact Us</h1>
          </div>
          <div className="text-[#F6F1F1] pt-2 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur, molestias, nesciunt laudantium eius quidem totam explicabo id culpa harum.
          </div>
          <div className="flex flex-col space-y-4">
            <div className="inline-flex items-center space-x-2">
              <ImEnvelop className="text-[#F6F1F1] text-lg md:text-xl" />
              <span className="text-[#F6F1F1]">abc@gmail.com</span>
            </div>
            <div className="inline-flex items-center space-x-2">
              <IoLocation className="text-[#F6F1F1] text-lg md:text-xl" />
              <span className="text-[#F6F1F1]">Floating Away</span>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 pt-4">
            <a href="#"><FaFacebookSquare className="text-2xl text-[#AFD3E2] hover:text-[#F6F1F1] transition duration-200" /></a>
            <a href="#"><FaXTwitter className="text-2xl text-[#AFD3E2] hover:text-[#F6F1F1] transition duration-200" /></a>
            <a href="#"><CiYoutube className="text-2xl text-[#AFD3E2] hover:text-[#F6F1F1] transition duration-200" /></a>
            <a href="#"><FaInstagramSquare className="text-2xl text-[#AFD3E2] hover:text-[#F6F1F1] transition duration-200" /></a>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-[#F6F1F1] shadow-lg rounded-xl p-6 sm:p-8 text-[#752220] md:w-1/2">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-sm">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="ring ring-1 ring-[#752220] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#752220] mt-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="text-sm">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email address"
                value={formData.email}
                onChange={handleChange}
                className="ring ring-1 ring-[#752220] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#752220] mt-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea
                id="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleChange}
                className="ring ring-1 ring-[#752220] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#752220] mt-2 h-32"
              />
            </div>

            <div>
              <button
                type="submit"
                className="bg-[#752220] text-[#F6F1F1] rounded-md px-4 py-2 hover:bg-[#AFD3E2] transition duration-200 w-full sm:w-auto"
              >
                Send Message
              </button>
            </div>
            {submissionStatus && <p className="text-sm text-center mt-4">{submissionStatus}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
