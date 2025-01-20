import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"; // Assuming you're using Firebase
import Gallery from "react-image-gallery"; // Importing the react-image-gallery component
import "react-image-gallery/styles/css/image-gallery.css"; // Importing default styles
import "../styles/GalleryPage.css";

const GalleryPage = () => {
  const { listAllGallery } = useFirebase(); // Assuming you have a custom hook to fetch images
  const [imageInfo, setImageInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await listAllGallery();
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setImageInfo(data); // Set the image data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [listAllGallery]);

  // Convert Firebase data to match the react-image-gallery format
  const galleryImages = imageInfo.map((card) => ({
    original: card.imageURL, // URL for the full-size image
    thumbnail: card.imageURL, // URL for the thumbnail
    description: card.desc, // Optional description for each image
  }));

  // Custom left arrow
  const renderLeftNav = (onClick, disabled) => (
    <button
      className="custom-left-nav"
      onClick={onClick}
      disabled={disabled}
      aria-label="Previous Slide"
    >
      ❮
    </button>
  );

  // Custom right arrow
  const renderRightNav = (onClick, disabled) => (
    <button
      className="custom-right-nav"
      onClick={onClick}
      disabled={disabled}
      aria-label="Next Slide"
    >
      ❯
    </button>
  );

  // Custom slide renderer to display description under each image
  const renderItem = (item) => (
    <div>
      <img src={item.original} alt={item.description} className="w-full" />
      {item.description && (
        <p className="text-center text-gray-800 mt-0 pb-2 text-2xl bg-[#E4E3E1]">{item.description}</p>
      )}
    </div>
  );

  return (
    <div id="gallery" className="gallery-container min-h-screen px-4 pt-[9.5rem] pb-16">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
        Gallery
      </h2>
      {/* Centered and resized gallery */}
      <div className="flex justify-center ">
        <div className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-md ">
          <Gallery
            items={galleryImages}
            renderLeftNav={renderLeftNav}
            renderRightNav={renderRightNav}
            renderItem={renderItem} // Use custom slide renderer
            showPlayButton={false} // Disable the play button
            showFullscreenButton={false} // Disable the fullscreen button
            showNav={true} // Enable navigation controls
            autoPlay={true} // Enable autoplay
            slideDuration={800} // Set transition duration
            slideInterval={4000} // Set interval between slides
            thumbnailPosition="bottom" // Thumbnails at the bottom
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
