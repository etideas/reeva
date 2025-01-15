import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/img17.jpg";
import homeVideo from "../assets/HomeVid.mov";

const motionSettings = {
  initial: { opacity: 0, x: -100 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut" },
  },
  viewport: { once: true, amount: 0.4 },
};

const Motion = () => {
  return (
    <div id="home">
      <section className="relative h-screen bg-fixed m-0 p-0 overflow-hidden">
        {/* Video Background */}
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

        {/* Text Overlay */}
        <div className="absolute top-[25rem] left-10 flex flex-col justify-center items-center text-center text-white z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            The Reeva Project
          </h1>
        </div>

        {/* Buy Me a Coffee Link */}
        <div className="absolute bottom-5 right-5 z-20">
          <a
            href="https://www.buymeacoffee.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F6F1F1] text-black font-bold text-sm px-4 py-2 rounded-full shadow-lg hover:bg-[#FFC933] transition duration-200"
          >
            Buy Me a Coffee ☕
          </a>
        </div>
      </section>

      <div className="bg-[url('./assets/bg5.gif')] bg-no-repeat bg-cover px-10">
        <div className="flex flex-col items-center pt-[7rem]">
          {/* First Card */}
          <motion.section
            className="flex flex-col md:flex-row items-center justify-between w-full gap-8 py-8"
            {...motionSettings}
          >
            <motion.img
              src="/images/PHOTO 2-1.jpg"
              alt="Special Private Tour"
              className="w-[800px] md:w-2/2 h-[450px] object-cover rounded-lg shadow-lg border-t-[10px] border-b-[28px] border-r-[10px] border-white"
              {...motionSettings}
            />
            <motion.div
              className="text-white md:w-1/2 px-6 text-center"
              {...motionSettings}
            >
              <h2 className="text-sm md:text-2xl lg:text-3xl font-bold mb-4">
                The Reeva Life
              </h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                We are Kaeya, Vaidehi and Gaurav, a family of three, who have
                decided to move away from the normal and adopt an alternate
                lifestyle. A life at sea. We always believed that all that we
                buy/acquire comes at a cost far greater than the MRP. A price
                that is being paid by this beautiful planet of ours. We thus
                quit our jobs sold everything that we owned and moved to live on
                a 42 foot sail boat, to explore cultures, cuisines and that too
                on a shoestring budget. This is the story of our adventures as
                we cross oceans, and laugh our way through the thick and thin of
                a liveaboard lifestyle.
              </p>
            </motion.div>
          </motion.section>

          {/* Second Card */}
          <motion.section
            className="flex flex-col md:flex-row-reverse items-center justify-between w-full gap-8 py-8 pt-14"
            {...motionSettings}
          >
            <motion.img
              src="/images/PHOTO 3.PNG"
              alt="Customized Group Hiking"
              className="w-[800px] md:w-2/2 h-[450px] rounded-lg shadow-lg border-t-[10px] border-b-[28px] border-l-[10px] border-white"
              {...motionSettings}
            />
            <motion.div
              className="text-white md:w-1/2 px-6 text-center"
              {...motionSettings}
            >
              <h2 className="text-sm md:text-2xl lg:text-3xl font-bold mb-4">
                Customized Group Hiking
              </h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                This lifestyle gives us the freedom to travel around the world
                while we use renewable energy for all our needs. As we go from
                island to island, country to country we like to interact with
                local communities; learning, sharing, improving. All this with
                an aim to gradually be able to further reduce our carbon
                footprint and educate those we meet about environmental
                conservation.
              </p>
            </motion.div>
          </motion.section>

          {/* Third Card */}
          <motion.section
            className="flex flex-col md:flex-row items-center justify-between w-full gap-8 py-8"
            {...motionSettings}
          >
            <motion.img
              src={img1}
              alt="Reeva Family"
              className="w-[800px] md:w-2/2 h-[450px] rounded-lg shadow-lg border-t-[10px] border-b-[28px] border-r-[10px] border-white"
              {...motionSettings}
            />
            <motion.div
              className="text-white md:w-1/2 px-6 text-center"
              {...motionSettings}
            >
              <h2 className="text-sm md:text-2xl lg:text-3xl font-bold mb-4">
                About our boat
              </h2>
              <p className="text-sm md:text-base lg:text-lg leading-relaxed">
                Reeva is a 1988 built, Tayana V 42. It’s an aft cockpit canoe
                stern design and was custom built for living onboard while
                sailing in all-weather conditions. She was Hull No. 156 of the
                168 boat that were built with this design and most are still in
                use. They are so versatile and capable that you will be
                surprised to find them in some of the remotest islands around
                the world. She might not be fast, but, she is sure.
              </p>
            </motion.div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Motion;
