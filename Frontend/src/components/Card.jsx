import React, { useState } from "react";

const Card = ({
  imgSrc,
  altText,
  title,
  description,
  views,
  likes,
  price,
  priceInfo,
  reverse,
}) => {
  // State to manage whether the description is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expansion of the text
  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="py-12 px-20 bg-white">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8`}
      >
        <div className="w-full md:w-1/2">
          <img
            src={imgSrc}
            alt={altText}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>

          {/* Conditionally render the description based on isExpanded state */}
          <p className="text-xl mb-6">
            {isExpanded ? description : `${description.substring(0, 100)}...`}
          </p>

          <button
            onClick={toggleDescription}
            className="px-4 py-2 bg-[#752220] text-white rounded-lg"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
