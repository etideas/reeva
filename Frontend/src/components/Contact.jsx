import React from "react";
import { ImPhone, ImEnvelop } from "react-icons/im";
import { IoLocation } from "react-icons/io5";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      {/* <div
        className="antialiased bg-cover bg-center min-h-screen"
        style={{
          backgroundImage:
            "url('images/grunge-paper-background_1048-10026.png')",
        }}
      > */}
      <div className="flex w-full min-h-screen justify-center items-center relative">
        <div className="flex flex-col md:flex-row bg-[#146C94] w-full max-w-4xl p-8 rounded-xl shadow-lg text-[#F6F1F1] mt-[200px] relative z-10">
          {/* Contact Details Section */}
          <div className="flex flex-col space-y-8 justify-between md:w-1/2">
            <div>
              <h1 className="font-bold text-4xl tracking-wide text-[#F6F1F1]">
                Contact Us
              </h1>
            </div>
            <div className="text-[#AFD3E2] pt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur, molestias, nesciunt
              laudantium eius quidem totam explicabo id culpa harum.
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2">
                <ImPhone className="text-[#AFD3E2] text-xl" />
                <span className="text-[#AFD3E2]"> (+91) 7001213173</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <ImEnvelop className="text-[#AFD3E2] text-xl" />
                <span className="text-[#AFD3E2]">abc@gmail.com</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <IoLocation className="text-[#AFD3E2] text-xl" />
                <span className="text-[#AFD3E2]">KOLKATA, 31/4 B.B.Str</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="inline-flex items-center space-x-2">
              <a href="#">
                <FaFacebookSquare className="text-2xl text-[#19A7CE] hover:text-[#AFD3E2] transition duration-200" />
              </a>
              <a href="#">
                <FaXTwitter className="text-2xl text-[#19A7CE] hover:text-[#AFD3E2] transition duration-200" />
              </a>
              <a href="#">
                <CiYoutube className="text-2xl text-[#19A7CE] hover:text-[#AFD3E2] transition duration-200" />
              </a>
              <a href="#">
                <FaInstagramSquare className="text-2xl text-[#19A7CE] hover:text-[#AFD3E2] transition duration-200" />
              </a>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-[#F6F1F1] shadow-lg rounded-xl p-8 text-[#146C94] md:w-1/2">
            <form
              action=""
              className="flex flex-col space-y-4"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="ring ring-1 ring-[#355E75] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#19A7CE] mt-2"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email address"
                  className="ring ring-1 ring-[#355E75] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#19A7CE] mt-2"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  className="ring ring-1 ring-[#355E75] w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#19A7CE] mt-2 h-32"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#146C94] text-[#F6F1F1] rounded-md px-4 py-2 hover:bg-[#19A7CE] transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Contact;
