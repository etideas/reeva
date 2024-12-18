// src/GalleryPage.jsx
import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"; // Assuming you're using Firebase for image fetching
import Gallery from "react-image-gallery"; // Importing the react-image-gallery component
import "react-image-gallery/styles/css/image-gallery.css"; // Importing default styles

const GalleryPage = () => {
  const { listAllGallery } = useFirebase(); // Assuming you have a custom hook to fetch images from Firebase
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

  // Convert the Firebase data to match the format required by react-image-gallery
  const galleryImages = imageInfo.map((card) => ({
    original: card.imageURL, // URL for the full-size image
    thumbnail: card.imageURL, // URL for the thumbnail image
    description: card.desc, // Optional description for each image
  }));

  return (
    <div
      id="gallery"
      className="gallery-container px-4 pt-12"
    >
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-12">
        Gallery
      </h2>
      {/* Centered and resized gallery */}
      <div className="flex justify-center">
        <div className="w-full max-w-2xl">
          {" "}
          {/* Restricts width and keeps the gallery centered */}
          <Gallery
            items={galleryImages}
            showPlayButton={false} // Disable the play button (autoplay)
            showFullscreenButton={false} // Disable the fullscreen button
            showNav={true} // Enable navigation (prev/next) controls
            autoPlay={true} // Enable autoplay
            slideDuration={800} // Optional: Set transition duration (default: 450ms)
            slideInterval={4000} // Set interval between slides in autoplay (2 seconds)
            thumbnailPosition="bottom" // Thumbnail position at the bottom
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
