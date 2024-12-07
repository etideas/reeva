import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import img1 from "../assets/img/img1.jpg"; // Existing image import
import homeVideo from "../assets/HomeVid.mov"; // Import the local video file

const Motion = () => {
  // Image and text data array
  const cardData = [
    {
      imgSrc: "/images/PHOTO 2-1.jpg",
      altText: "Special Private Tour",
      // title: "Special Private Tour",
      // description:
      //   "In the last few centuries, residents of our subcontinent have ignored the seas. A fertile landscape and an abundance of natural resources domesticated us to an extent that we lost the urge to explore, to look beyond the shores. It’s time we changed that. It's time to take a leap of faith.",
    },
    {
      imgSrc: "/images/PHOTO 3.PNG",
      altText: "Customized Group Hiking",
      title: "Customized Group Hiking",
      description:
        "While we go along, we intend to contribute by spreading awareness. Just sharing ideas about little changes in our lifestyle that can go a long way in making this world a better place.",
    },
    {
      imgSrc: img1,
      altText: "Reeva Family",
      title: "Reeva Family",
      description:
        "This life at sea offers us freedom, simplicity, and a daily dose of adventure as we navigate challenges, while discovering offbeat destinations.",
    },
  ];

  return (
    <div id="home">
      {/* Video Section */}
      <section className="relative h-screen bg-fixed m-0 p-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover md:scale-[1.45] md:translate-y-[-2rem] md:translate-x-[15rem]"
            src={homeVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      <div className="bg-[url('./assets/bg5.gif')] bg-no-repeat bg-cover">
        {/* "The Reeva Life" Section with Animation */}
        <div className="text-white py-44  text-center ">
          <div>
            <motion.h1
              className="tracking-widest font-bold mb-6 md:mb-10 text-center"
              initial={{ fontSize: "1rem", opacity: 0 }} // Start with a smaller font size on mobile
              animate={{ fontSize: "5rem", opacity: 1 }} // Animate to a larger font size
              transition={{
                duration: 2, // Duration for title to pop out
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.4 }}
              style={{
                fontSize: "clamp(2rem, 8vw, 5rem)", // This ensures font size is responsive with animation
              }}
            >
              The Reeva Life
            </motion.h1>

            <motion.p
              className="text-m md:text-sm lg:text-lg max-w-sm md:max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 2, // Slight delay for the paragraph to appear
                duration: 4, // Double the time of title animation
                ease: "easeOut",
              }}
            >
              In 2022, we—Gaurav, Vaidehi, and Kaeya—left the traditional
              lifestyle behind and embraced a life at sea on a 42-foot sailboat.
              Believing in adventurous living, we sold everything we owned to
              travel the world, experiencing the beauty and challenges of life
              on the ocean.
            </motion.p>
          </div>
        </div>

        {/* Vertically Stacked Images with Text and Animation */}
        <div className="flex flex-col items-center ">
          {cardData.map(({ imgSrc, altText, title, description }, index) => (
            <motion.section
              key={index}
              className="w-full relative"
              viewport={{ once: false, amount: 0.4 }} // Trigger animation when 40% of the section is in view
            >
              {/* Text Section Animation */}
              <motion.div
                className="text-white py-6 px-4 md:py-8 md:px-16 text-center relative z-10"
                initial={{ opacity: 0, y: 100 }} // Start below
                whileInView={{
                  opacity: 1,
                  y: 0, // Slide up to its position
                  transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 24, // Bouncy effect
                    duration: 2.5,
                  },
                }}
                viewport={{ once: true, amount: 0.4 }} // Trigger animation when 40% of the section is in view
              >
                <h2 className="text-lg md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4">
                  {title}
                </h2>
                <p className="text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
                  {description}
                </p>
              </motion.div>

              {/* Image Section Animation */}
              <motion.img
                src={imgSrc}
                alt={altText}
                className="w-full h-[20vh] md:h-[75vh] object-cover mt-4"
                initial={{ opacity: 0, marginTop: 100 }} // Image starts hidden
                whileInView={{
                  opacity: 1, // Image appears as text moves up
                  marginTop: 0, // Move up to its position
                  transition: {
                    duration: 1.5, // Same duration as text
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true, amount: 0.3 }} // Trigger animation when 40% of the section is in view
              />
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Motion;
