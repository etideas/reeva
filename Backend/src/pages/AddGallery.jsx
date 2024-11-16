import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Context/Firebase';

const AddGallery = () => {
  const firebase = useFirebase();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [coverPic, setCoverPic] = useState(null);
  const [galleryList, setGalleryList] = useState([]);  // State to store all gallery items

  // Fetch gallery data from Firebase on component mount
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const querySnapshot = await firebase.listAllGallery();
        const galleryItems = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setGalleryList(galleryItems);
      } catch (error) {
        console.error("Error fetching gallery items:", error.message);
      }
    };

    fetchGallery();
  }, [firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submit data to Firebase
      await firebase.handleCreateNewListing(title, desc, coverPic);

      // Clear form fields
      setTitle("");
      setDesc("");
      setCoverPic(null);

      console.log("Gallery successfully added!");

      // Re-fetch the gallery data to update the list with the new item
      const querySnapshot = await firebase.listAllGallery();
      const galleryItems = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // Reverse the array to show the latest items first
      setGalleryList(galleryItems.reverse());

    } catch (error) {
      console.error("Error adding gallery:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await firebase.deleteItem(id); // Call delete function from Firebase context
      setGalleryList(prevItems => prevItems.filter(item => item.id !== id)); // Update state to remove the deleted item
      console.log("Gallery item deleted!");
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-[#752220] text-center">Add New Gallery</h2>

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
            Create Gallery
          </button>
        </div>
      </form>

      {/* Gallery Collection */}
      <h3 className="text-2xl font-semibold mt-8 text-center">Gallery Collection</h3>
      <div className="gallery-list mt-3 flex flex-wrap gap-6 justify-center">
        {galleryList.map((gallery) => (
          <div
            key={gallery.id}
            className="p-4 border border-gray-300 rounded-lg shadow-md w-[250px] h-[250px] flex flex-col items-center justify-between hover:shadow-xl transition-shadow"
          >
            <h4 className="text-md font-medium text-center">{gallery.title}</h4>
            <p className="text-sm text-gray-600 text-center">{gallery.desc}</p>
            {gallery.imageURL && (
              <img
                src={gallery.imageURL}
                alt={gallery.title}
                className="w-[120px] h-[120px] rounded-md object-cover mt-2"
              />
            )}
            {/* Delete Button */}
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors"
              onClick={() => handleDelete(gallery.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddGallery;
