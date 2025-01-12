import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/img1.jpg";
import homeVideo from "../assets/HomeVid.mov";

const motionSettings = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0, transition: { duration: 1.5, ease: "easeOut" } },
  viewport: { once: true, amount: 0.4 },
};

const Motion = () => {
  const cardData = [
    {
      imgSrc: "/images/PHOTO 2-1.jpg",
      altText: "Special Private Tour",
      title: "The Reeva Life",
      description: `In 2022, we—Gaurav, Vaidehi, and Kaeya—left the traditional
              lifestyle behind and embraced a life at sea on a 42-foot sailboat.
              Believing in adventurous living, we sold everything we owned to
              travel the world, experiencing the beauty and challenges of life
              on the ocean`,
    },
    {
      imgSrc: "/images/PHOTO 3.PNG",
      altText: "Customized Group Hiking",
      title: "Customized Group Hiking",
      description: "While we go along, we intend to contribute by spreading awareness. Just sharing ideas about little changes in our lifestyle that can go a long way in making this world a better place.",
    },
    {
      imgSrc: img1,
      altText: "Reeva Family",
      title: "Reeva Family",
      description: "This life at sea offers us freedom, simplicity, and a daily dose of adventure as we navigate challenges, while discovering offbeat destinations.",
    },
  ];

  return (
    <div id="home">
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

      <div className="bg-[url('./assets/bg5.gif')] bg-no-repeat bg-cover px-10">
        <div className="flex flex-col items-center pt-11">
          {cardData.map(({ imgSrc, altText, title, description }, index) => (
            <motion.section
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center justify-between w-full gap-10 py-10`}
            >
              <motion.img
                src={imgSrc}
                alt={altText}
                className={`w-[783px] md:w-2/2 h-[450px] object-cover rounded-lg shadow-lg ${index === 1
                    ? "border-t-[20px] border-b-[40px] border-l-[20px] border-blue-200" // Custom border for the second image
                    : "border-t-[13px] border-b-[30px] border-r-[13px] border-blue-200" // Default border for others
                  }`}
                {...motionSettings}
              />
              <motion.div
                className="text-white md:w-1/2 px-6 text-center"
                {...motionSettings}
              >
                {title && (
                  <h2 className="text-sm md:text-2xl lg:text-3xl font-bold mb-4">
                    {title}
                  </h2>
                )}
                <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                  {description}
                </p>
              </motion.div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Motion;
