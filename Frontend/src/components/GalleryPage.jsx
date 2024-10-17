import React from "react";

// Import images manually from img1 to img16
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";
import img7 from "../assets/img/img7.jpg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";
import img10 from "../assets/img/img10.jpg";
import img11 from "../assets/img/img11.jpg";
import img12 from "../assets/img/img12.jpg";
import img13 from "../assets/img/img13.jpg";
import img14 from "../assets/img/img14.jpg";
import img15 from "../assets/img/img15.jpg";
import img16 from "../assets/img/img16.jpg";

const Gallery = () => {
  // Array of image titles and descriptions corresponding to each image
  const imageInfo = [
    {
      image: img1,
      description: "Serene beach landscape",
      title: "Beach Vibes",
    },
    {
      image: img2,
      description: "Mountain peak at sunset",
      title: "Mountain Majesty",
    },
    {
      image: img3,
      description: "Green meadow and flowers",
      title: "Spring Bloom",
    },
    {
      image: img4,
      description: "City skyline in the evening",
      title: "City Lights",
    },
    { image: img5, description: "Calm lake view", title: "Lake Serenity" },
    { image: img6, description: "Desert dunes", title: "Desert Wonders" },
    { image: img7, description: "Snow-covered forest", title: "Winter Woods" },
    { image: img8, description: "Golden wheat field", title: "Harvest Time" },
    { image: img9, description: "Deep blue sea", title: "Ocean Depths" },
    {
      image: img10,
      description: "Green pine trees",
      title: "Evergreen Forest",
    },
    {
      image: img11,
      description: "Foggy morning in the forest",
      title: "Misty Mornings",
    },
    { image: img12, description: "Bright city life", title: "Urban Pulse" },
    {
      image: img13,
      description: "Peaceful countryside",
      title: "Countryside Calm",
    },
    {
      image: img14,
      description: "Historical architecture",
      title: "Timeless Beauty",
    },
    {
      image: img15,
      description: "Sunset over the hills",
      title: "Golden Hour",
    },
    { image: img16, description: "Wildflower garden", title: "Garden Retreat" },
  ];

  return (
    <div className="flex justify-center items-center bg-[#F6F1F1] min-h-screen py-10 pt-44">
      {/* Gallery Grid Section */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-4">
        {imageInfo.map((card, index) => (
          <div
            key={index}
            className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 bg-[#AFD3E2]"
          >
            {/* Image Section */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[250px] object-cover rounded-t-lg"
            />
            {/* Overlay Section */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#146C94] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-[#F6F1F1] bg-opacity-90 backdrop-blur-sm shadow-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-b-lg">
              <h3 className="text-lg font-bold text-[#146C94]">{card.title}</h3>
              <p className="text-sm text-[#3C5B43] mt-2">{card.description}</p>
              <a
                href="#"
                className="inline-block mt-4 text-sm font-medium text-[#19A7CE] hover:text-[#146C94]"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
