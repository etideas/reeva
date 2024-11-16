import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Context/Firebase';

const AddMedia = () => {
  const firebase = useFirebase();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [coverPic, setCoverPic] = useState(null);
  const [date, setDate] = useState("");
  const [mediaList, setMediaList] = useState([]);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const mediaSnapshot = await firebase.listAllMedia();
        const mediaData = mediaSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setMediaList(mediaData);
      } catch (error) {
        console.error("Error fetching media:", error.message);
      }
    };

    fetchMedia();
  }, [firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMedia = await firebase.handleCreateNewListingMedia(title, desc, coverPic, date);
      setMediaList((prevList) => [...prevList, newMedia]);

      setTitle("");
      setDesc("");
      setCoverPic(null);
      setDate("");
      console.log("Media successfully added!");
    } catch (error) {
      console.error("Error adding media:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await firebase.deleteItemMedia(id);
      setMediaList(mediaList.filter(media => media.id !== id));
      console.log("Media successfully deleted!");
    } catch (error) {
      console.error("Error deleting media:", error.message);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-[#752220] text-center">Add New Media</h2>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">Enter Picture Title</label>
          <input
            type="text"
            id="title"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            placeholder="Title"
            required
          />
        </div>

        <div>
          <label htmlFor="desc" className="block text-lg font-semibold text-gray-700 mb-2">Picture Description</label>
          <input
            type="text"
            id="desc"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            placeholder="Description"
            required
          />
        </div>

        <div>
          <label htmlFor="coverPic" className="block text-lg font-semibold text-gray-700 mb-2">Cover Pic</label>
          <input
            type="file"
            id="coverPic"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
            onChange={(e) => setCoverPic(e.target.files[0])}
            required
          />
        </div>

        <div>
          <button type="submit" className="w-full bg-[#752220] text-white p-4 rounded-lg hover:bg-[#8c2b2f] transition-colors">
            Create Media
          </button>
        </div>
      </form>

      <h3 className="mt-5 text-2xl font-semibold text-center">Media Collection</h3>
      <div className="gallery-list mt-3 flex flex-wrap gap-6 justify-center">
        {mediaList.map((media) => (
          <div
            key={media.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md w-[250px] h-[250px] flex flex-col items-center justify-between hover:shadow-xl transition-shadow"
          >
            <h4 className="text-md font-medium text-center">{media.title}</h4>
            <p className="text-sm text-gray-600 text-center">{media.desc}</p>
            {media.imageURL && (
              <img
                src={media.imageURL}
                alt={media.title}
                className="w-[120px] h-[120px] rounded-md object-cover mt-2"
              />
            )}
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
              onClick={() => handleDelete(media.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddMedia;
