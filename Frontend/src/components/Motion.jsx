import React from "react";
import img1 from "../assets/img/img1.jpg"; // Existing image import
import homeVideo from "../assets/HomeVid2.MP4"; // Import the local video file

const Motion = () => {
  return (
    <>
      {/* First Video Section with Text Overlay */}
      <section className="relative h-screen bg-fixed m-0 p-0 overflow-hidden">
        {/* Video */}
        <div>
          <video
            className="w-full h-full object-cover absolute top-0 left-0 transform scale-[1.44] translate-y-[-2rem] translate-x-[21rem] " // Zoom in (scale) and move to the right (translate-x)
            src={homeVideo} // Use the imported video file as the source
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute w-[80%] top-[43%] left-[4%] flex z-10">
          <div className="text-center text-white px-8">
            <h1 className="text-4xl md:text-[5rem] tracking-widest font-bold mb-10">
              The Reeva Life
            </h1>
            <p className="text-sm md:text-lg max-w-xl leading-relaxed">
              In 2022, we—Gaurav, Vaidehi, and Kaeya—left the traditional
              lifestyle behind and embraced a life at sea on a 42-foot sailboat.
              Believing in adventurous living, we sold everything we owned to
              travel the world, experiencing the beauty and challenges of life
              on the ocean.
            </p>
          </div>
        </div>
      </section>

      {/* First Text Section */}
      <section className="py-12 px-20 text-center bg-[#EEEBDD] text-[#630000] m-0 p-0">
        <h2 className="text-4xl font-bold">Enjoy With Reeva</h2>
        <p className="mt-4 text-lg ">
          We are Gaurav, Vaidehi, and Kaeya, a family of three from India. In
          2022, we moved away from the norm and adopted an alternate lifestyle—a
          life at sea...
        </p>
      </section>

      {/* Second Image Section */}
      <section
        className="pimg2 h-[42rem] bg-cover bg-center bg-fixed m-0 p-0"
        style={{ backgroundImage: "url('/images/PHOTO 2-1.jpg')" }}
      ></section>

      {/* Second Text Section */}
      <section className="py-12 px-20 text-center bg-[#F6F1F1] text-[#146C94] m-0 p-0">
        <h2 className="text-4xl font-bold">Sound Of Nature</h2>
        <p className="mt-4 text-lg text-[#146C94]">
          In the last few centuries, residents of our subcontinent have ignored
          the seas...
        </p>
      </section>

      {/* Third Image Section */}
      <section
        className="pimg3 h-[42rem] bg-cover bg-center bg-fixed m-0 p-0"
        style={{ backgroundImage: "url('/images/PHOTO 3.PNG')" }}
      ></section>

      {/* Third Text Section */}
      <section className="py-12 px-20 text-center bg-[#AFD3E2] text-[#146C94] m-0 p-0">
        <h2 className="text-4xl font-bold">Go With The Flow</h2>
        <p className="mt-4 text-lg text-[#146C94]">
          While we go along, we intend to contribute by spreading awareness...
        </p>
      </section>

      {/* Fourth Image Section */}
      <section
        className="pimg4 h-[42rem] bg-cover bg-center bg-fixed m-0 p-0"
        style={{ backgroundImage: `url(${img1})` }}
      ></section>

      {/* Fourth Text Section */}
      <section className="py-12 px-20 text-center bg-[#F6F1F1] text-[#146C94] m-0 p-0">
        <h2 className="text-4xl font-bold">Reeva Family</h2>
        <p className="mt-4 text-lg text-[#146C94]">
          This life at sea offers us freedom, simplicity, and a daily dose of
          adventure...
        </p>
      </section>
    </>
  );
};

export default Motion;
