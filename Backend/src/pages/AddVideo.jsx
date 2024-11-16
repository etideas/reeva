import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Context/Firebase';

const AddVideo = () => {
  const firebase = useFirebase();

  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validate YouTube URL format to ensure it's embeddable
      const embedUrl = convertToEmbedURL(videoURL);
      if (!embedUrl) {
        alert("Please enter a valid YouTube video URL.");
        return;
      }

      await firebase.handleCreateNewVideoListing(title, embedUrl);

      setTitle("");
      setVideoURL("");

      console.log("Video successfully added!");
      fetchVideos();
    } catch (error) {
      console.error("Error adding video:", error.message);
    }
  };

  const fetchVideos = async () => {
    try {
      const videoList = await firebase.listAllVideos();
      const videoData = videoList.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setVideos(videoData);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };

  const convertToEmbedURL = (url) => {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("youtube.com") || urlObj.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${urlObj.searchParams.get("v") || urlObj.pathname.split("/")[1]}`;
    }
    return null;
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-[#752220] text-center">Add New Video</h2>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
        
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">Video Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            id="title"
            placeholder="Enter video title"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
            required
          />
        </div>

        {/* Video URL Field */}
        <div>
          <label htmlFor="videoURL" className="block text-lg font-semibold text-gray-700 mb-2">Video URL</label>
          <input
            onChange={(e) => setVideoURL(e.target.value)}
            value={videoURL}
            type="url"
            id="videoURL"
            placeholder="Enter video URL"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#752220] text-white p-4 rounded-lg hover:bg-[#8c2b2f] transition-colors"
        >
          Create Video
        </button>
      </form>

      {/* Display the list of videos */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Saved Videos</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.length > 0 ? (
            videos.map((video) => (
              <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-2">{video.title}</h4>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={video.videoURL}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No videos saved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
