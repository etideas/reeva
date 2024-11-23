import React from "react";
import img1 from "../assets/img/img1.jpg"; // Existing image import
import homeVideo from "../assets/HomeVid.mov"; // Import the local video file

const Motion = () => {
  // Image and text data array
  const cardData = [
    {
      imgSrc: "/images/PHOTO 2-1.jpg",
      altText: "Special Private Tour",
      title: "Special Private Tour",
      description:
        "In the last few centuries, residents of our subcontinent have ignored the seas. A fertile landscape and an abundance of natural resources domesticated us to an extent that we lost the urge to explore, to look beyond the shores. It’s time we changed that. It's time to take a leap of faith.",
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
        <div className="absolute w-[90%] md:w-[80%] top-[20%] md:top-[43%] left-[5%] md:left-[4%] flex z-10">
          <div className="text-center text-white px-4 md:px-8">
            <h1 className="text-4xl md:text-4xl lg:text-[5rem] tracking-widest font-bold mb-6 md:mb-10">
              The Reeva Life
            </h1>
            <p className="text-m md:text-sm lg:text-lg max-w-sm md:max-w-xl mx-auto leading-relaxed">
              In 2022, we—Gaurav, Vaidehi, and Kaeya—left the traditional
              lifestyle behind and embraced a life at sea on a 42-foot sailboat.
              Believing in adventurous living, we sold everything we owned to
              travel the world, experiencing the beauty and challenges of life
              on the ocean.
            </p>
          </div>
        </div>
      </section>
      {/* Vertically Stacked Images with Text */}
      <div className="flex flex-col items-center">
        {cardData.map(({ imgSrc, altText, title, description }, index) => (
          <section
            key={index}
            className="w-full"
          >
            {/* Responsive Image */}
            <img
              src={imgSrc}
              alt={altText}
              className="w-full h-[20vh] md:h-[75vh] object-cover"
            />
            {/* Text Section */}
            <div className="bg-gray-900 text-white py-6 px-4 md:py-8 md:px-16 text-center">
              <h2 className="text-lg md:text-2xl lg:text-4xl font-bold mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
                {description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Motion;
