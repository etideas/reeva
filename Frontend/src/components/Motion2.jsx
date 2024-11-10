import React from "react";
import img1 from "../assets/img/img1.jpg"; // Existing image import
import homeVideo from "../assets/HomeVid2.MP4"; // Import the local video file
import Card from "./Card"; // Import the reusable Card component

const Motion = () => {
  // Card data array
  const cardData = [
    {
      imgSrc: "/images/PHOTO 2-1.jpg",
      altText: "Special Private Tour",
      title: "Special Private Tour",
      description:
        "In the last few centuries, residents of our subcontinent have ignored the seas. A fertile landscape and an abundance of natural resources domesticated us to an extent that we lost the urge to explore, to look beyond the shores. It’s time we changed that. It's time to take a leap of faith",
      reverse: false, // No reverse layout for this one
    },
    {
      imgSrc: "/images/PHOTO 3.PNG",
      altText: "Customized Group Hiking",
      title: "Customized Group Hiking",
      description:
        "While we go along, we intend to contribute by spreading awareness. Just sharing ideas about little changes in our lifestyle that can go a long way in making this world a better place. We intend to get in touch with the local communities and learn from them as we travel from country to country, island to island.",
      reverse: true, // Reverse layout for this one
    },
    {
      imgSrc: img1,
      altText: "Reeva Family",
      title: "Reeva Family",
      description:
        "This life at sea offers us freedom, simplicity, and a daily dose of adventure as we navigate challenges, while discovering offbeat destinations. With an overall plan to travel the world, one day, one island, one country at a time, we intend to share our experience with an intention of educating people back home. To be able show that it’s doable. All you need is a specific skill set and an ounce of nerve.",
      reverse: false, // No reverse layout for this one
    },
  ];

  return (
    <div id="home">
      {/* First Video Section with Text Overlay */}
      <section className="relative h-screen bg-fixed m-0 p-0 overflow-hidden">
        {/* Video */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-cover md:scale-[1.445] md:translate-y-[-2rem] md:translate-x-[21rem]"
            src={homeVideo} // Use the imported video file as the source
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute w-[90%] md:w-[80%] top-[20%] md:top-[43%] left-[5%] md:left-[10%] flex z-10">
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

      {/* Map over the card data array and render the Card component */}
      <div className="px-4 md:px-8 lg:px-16">
        {cardData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            altText={card.altText}
            title={card.title}
            description={card.description}
            reverse={card.reverse} // This controls the alternating layout
          />
        ))}
      </div>
    </div>
  );
};

export default Motion;
