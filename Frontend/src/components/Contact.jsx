import React, { useState } from "react";
import { useFirebase } from "../context/Firebase"; // Adjust the path accordingly

const Contact = () => {
  const { saveContact } = useFirebase();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && message) {
      await saveContact(name, email, message);
      setName("");
      setEmail("");
      setMessage("");
      alert("Message sent successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="flex w-full min-h-screen justify-center items-center relative">
      <div className="flex flex-col md:flex-row bg-[#752220] w-full max-w-4xl p-8 rounded-xl shadow-lg text-[#F6F1F1] mt-[100px] relative z-10">
        {/* Contact Details Section */}
        {/* ... */}
        {/* Form Section */}
        <div className="bg-[#F6F1F1] shadow-lg rounded-xl p-8 text-[#752220] md:w-1/2">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
              <label htmlFor="name" className="text-sm">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="ring ring-1 ring-[#752220] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#752220] mt-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email address"
                className="ring ring-1 ring-[#752220] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#752220] mt-2"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="ring ring-1 ring-[#752220] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#752220] mt-2 h-32"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#752220] text-[#F6F1F1] rounded-md px-4 py-2 hover:bg-[#AFD3E2] transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
