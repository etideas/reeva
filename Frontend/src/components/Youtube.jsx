import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase"; // Adjust the import based on your file structure

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  const { listAllVideos } = useFirebase();

  // Function to convert standard YouTube URL to embed URL
  const convertToEmbedURL = (url) => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : url;
  };

  // Function to fetch videos from Firestore
  const fetchVideos = async () => {
    try {
      const querySnapshot = await listAllVideos();
      const videoData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        videoURL: convertToEmbedURL(doc.data().videoURL), // Convert to embed URL
      }));
      console.log("Fetched video data:", videoData); // Debugging line
      setVideos(videoData);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  // Fetch videos when the component mounts
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div
      id="youtube"
      className="min-h-screen px-8 py-16 pt-44 bg-gray-900 text-white"
    >
      {/* Latest Videos Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-white border-b-4 border-[#752220] inline-block pb-2 mb-12">
          Latest Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {videos.slice(0, 2).map((video, index) => (
            <div
              key={video.id}
              className="w-full bg-[#F6F1F1] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <iframe
                width="100%"
                height="315"
                src={video.videoURL || ""}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title || `Latest Video ${index + 1}`}
                className="rounded-t-lg"
              ></iframe>
              <div className="p-4 bg-[#F6F1F1]">
                <h3 className="text-lg font-bold text-[#752220]">
                  {video.title || `Video ${index + 1}`}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Videos Section */}
      <section>
        <h2 className="text-4xl font-bold text-center  border-b-4 border-[#752220] inline-block pb-2 mb-12">
          Other Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {videos.slice(2).map((video, index) => (
            <div
              key={video.id}
              className="w-full bg-[#F6F1F1] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <iframe
                width="100%"
                height="315"
                src={video.videoURL || ""}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={video.title || `Other Video ${index + 1}`}
                className="rounded-t-lg"
              ></iframe>
              <div className="p-4 bg-[#F6F1F1]">
                <h3 className="text-lg font-bold text-[#752220]">
                  {video.title || `Video ${index + 3}`}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YouTube;
