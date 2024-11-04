// src/Gallery.js
import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"; // Import useFirebase hook
import img1 from "../assets/img/img1.jpg"; // Import a default image if needed

const Gallery = () => {
  const { listAllGallery } = useFirebase(); // Use the context to get listAllGallery function
  const [imageInfo, setImageInfo] = useState([]); // State to hold image data
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await listAllGallery(); // Use the context function
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id, // Get document ID
          ...doc.data(), // Spread document data
        }));
        setImageInfo(data); // Set the imageInfo state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchData(); // Call fetchData function
  }, [listAllGallery]); // Add listAllGallery as a dependency

  if (loading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  return (
    <div className="flex justify-center items-center bg-[#F6F1F1] min-h-screen py-10 pt-44">
      {/* Gallery Grid Section */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-4">
        {imageInfo.map((card) => (
          <div
            key={card.id}
            className="relative group rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 bg-[#AFD3E2]"
          >
            <img
              src={card.imageURL} // This should now contain the full URL of the uploaded image
              alt={card.title}
              className="w-[200px] h-[250px] object-cover rounded-t-lg"
            />
            {/* Overlay Section */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#146C94] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-[#F6F1F1] bg-opacity-90 backdrop-blur-sm shadow-md transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-b-lg">
              <h3 className="text-lg font-bold text-[#146C94]">{card.title}</h3>
              <p className="text-sm text-[#3C5B43] mt-2">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
