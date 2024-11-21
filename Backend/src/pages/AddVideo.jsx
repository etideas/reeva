<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useFirebase } from "../Context/Firebase";
=======
import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Context/Firebase';
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941

const AddVideo = () => {
  const firebase = useFirebase();

  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const [videos, setVideos] = useState([]);
<<<<<<< HEAD
  const [editVideoId, setEditVideoId] = useState(null); // To track the video being edited
  const [isModalOpen, setIsModalOpen] = useState(false); // To manage modal visibility
=======
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
<<<<<<< HEAD
      // Only convert the URL if it's not already in the embed format
      const embedUrl = videoURL.includes("https://www.youtube.com/embed/")
        ? videoURL
        : convertToEmbedURL(videoURL);

      if (!embedUrl) {
        alert("Please enter a valid YouTube video URL.");
        return;
      }

      if (editVideoId) {
        // Edit existing video
        await firebase.handleUpdateVideo(editVideoId, { title, videoURL: embedUrl });
        console.log("Video successfully updated!");
      } else {
        // Create a new video
        await firebase.handleCreateNewVideoListing(title, embedUrl);
        console.log("Video successfully added!");
      }

      setTitle("");
      setVideoURL("");
      setEditVideoId(null);
      setIsModalOpen(false); // Close modal after updating
=======
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
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
      fetchVideos();
    } catch (error) {
      console.error("Error handling video:", error.message);
    }
  };

  const fetchVideos = async () => {
    try {
      const videoList = await firebase.listAllVideos();
<<<<<<< HEAD
      const videoData = videoList.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
=======
      const videoData = videoList.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
      }));
      setVideos(videoData);
    } catch (error) {
      console.error("Error fetching videos:", error.message);
    }
  };

  const convertToEmbedURL = (url) => {
<<<<<<< HEAD
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes("youtube.com")) {
        const videoId = urlObj.searchParams.get("v");
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }
      if (urlObj.hostname.includes("youtu.be")) {
        const videoId = urlObj.pathname.split("/")[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
      }
      return null;
    } catch (error) {
      console.error("Invalid URL provided:", url);
      return null;
    }
  };

  const deleteVideo = async (id) => {
    try {
      await firebase.deleteVideo(id);
      console.log("Video successfully deleted!");
      fetchVideos(); // Refresh the video list
    } catch (error) {
      console.error("Error deleting video:", error.message);
    }
  };

  const editVideo = (video) => {
    setTitle(video.title);
    setVideoURL(video.videoURL);
    setEditVideoId(video.id);
    setIsModalOpen(true); // Open modal
=======
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("youtube.com") || urlObj.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${urlObj.searchParams.get("v") || urlObj.pathname.split("/")[1]}`;
    }
    return null;
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-[#752220] text-center">Add New Video</h2>

<<<<<<< HEAD
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6"
      >
        {/* Title Field */}
        <div>
          <label
            htmlFor="title"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Video Title
          </label>
=======
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
        
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">Video Title</label>
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
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
<<<<<<< HEAD
          <label
            htmlFor="videoURL"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Video URL
          </label>
=======
          <label htmlFor="videoURL" className="block text-lg font-semibold text-gray-700 mb-2">Video URL</label>
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
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
<<<<<<< HEAD
          {editVideoId ? "Update Video" : "Create Video"}
=======
          Create Video
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
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
<<<<<<< HEAD
                  <div className="flex justify-between mt-4">
                    <button
                      onClick={() => editVideo(video)}
                      className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteVideo(video.id)}
                      className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
=======
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No videos saved yet.</p>
          )}
        </div>
      </div>

      {/* Modal for Edit Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4 text-[#752220]">Edit Video</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="editTitle"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Video Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  id="editTitle"
                  placeholder="Enter video title"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
                  required
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="editVideoURL"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Video URL
                </label>
                <input
                  onChange={(e) => setVideoURL(e.target.value)}
                  value={videoURL}
                  type="url"
                  id="editVideoURL"
                  placeholder="Enter video URL"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
                  required
                />
              </div>

              <div className="flex justify-end space-x-4 mt-6">
                <button
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                  className="bg-gray-500 text-white p-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#752220] text-white p-2 rounded-lg hover:bg-[#8c2b2f] transition-colors"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddVideo;
