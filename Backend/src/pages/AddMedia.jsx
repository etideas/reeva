import React, { useState, useEffect } from "react";
import { useFirebase } from "../Context/Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const AddMedia = () => {
  const firebase = useFirebase();
  const storage = getStorage(); // Initialize Firebase Storage

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [coverPic, setCoverPic] = useState(null);
  const [date, setDate] = useState(""); // New state for date
  const [galleryList, setGalleryList] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);

  // Fetch gallery data from Firebase on component mount
  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const querySnapshot = await firebase.listAllGalleryMedia();
        const galleryItems = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGalleryList(galleryItems);
      } catch (error) {
        console.error("Error fetching media items:", error.message);
      }
    };

    fetchGallery();
  }, [firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await firebase.handleCreateNewListingMedia(title, desc, coverPic, date); // Pass the date along with other data

      setTitle("");
      setDesc("");
      setCoverPic(null);
      setDate(""); // Clear the date field after submit

      console.log("Media successfully added!");

      // Re-fetch the gallery data
      const querySnapshot = await firebase.listAllGalleryMedia();
      const galleryItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGalleryList(galleryItems.reverse());
    } catch (error) {
      console.error("Error adding media:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await firebase.deleteItemMedia(id);
      setGalleryList((prevItems) =>
        prevItems.filter((item) => item.id !== id)
      );
      console.log("Media item deleted!");
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  const handleEdit = (gallery) => {
    setSelectedGalleryItem(gallery);
    setTitle(gallery.title);
    setDesc(gallery.desc);
    setCoverPic(gallery.imageURL);
    setDate(gallery.date || ""); // Set date in the modal form (if available)
    setShowUpdateModal(true);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      let imageURL = coverPic;

      if (coverPic && coverPic instanceof File) {
        const fileRef = ref(storage, `media/${selectedGalleryItem.id}/${coverPic.name}`);
        await uploadBytes(fileRef, coverPic);
        imageURL = await getDownloadURL(fileRef);
      }

      await firebase.handleUpdateItemMedia(selectedGalleryItem.id, {
        title,
        desc,
        imageURL,
        date, // Include the date when updating
      });

      setShowUpdateModal(false);
      console.log("Media item updated!");

      // Re-fetch updated list
      const querySnapshot = await firebase.listAllGalleryMedia();
      const galleryItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGalleryList(galleryItems.reverse());
    } catch (error) {
      console.error("Error updating media item:", error.message);
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-[#752220] text-center">Add Media</h2>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
        {/* Add Media Form Fields */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
            Enter Picture Title
          </label>
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
          <label htmlFor="desc" className="block text-lg font-semibold text-gray-700 mb-2">
            Picture Description
          </label>
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
          <label htmlFor="coverPic" className="block text-lg font-semibold text-gray-700 mb-2">
            Cover Picture
          </label>
          <input
            type="file"
            id="coverPic"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
            onChange={(e) => setCoverPic(e.target.files[0])}
            required
          />
        </div>

        <div>
          <label htmlFor="date" className="block text-lg font-semibold text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-[#752220] text-white p-4 rounded-lg hover:bg-[#8c2b2f] transition-colors"
          >
            Add Media
          </button>
        </div>
      </form>

      <h3 className="text-2xl font-semibold mt-8 text-center">Media Collection</h3>
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
            <p className="text-sm text-gray-500 mt-2">{gallery.date}</p>
            <div className="flex gap-2 mt-4">
              <button
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={() => handleEdit(gallery)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white p-2 rounded-md"
                onClick={() => handleDelete(gallery.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Update Media Modal */}
      {showUpdateModal && selectedGalleryItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
            <h2 className="text-2xl font-bold mb-6">Update Media Item</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label htmlFor="updateTitle" className="block text-lg font-semibold text-gray-700 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="updateTitle"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="updateDesc" className="block text-lg font-semibold text-gray-700 mb-2">
                  Description
                </label>
                <input
                  type="text"
                  id="updateDesc"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="updateCoverPic" className="block text-lg font-semibold text-gray-700 mb-2">
                  Update Cover Picture
                </label>
                <input
                  type="file"
                  id="updateCoverPic"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
                  onChange={(e) => setCoverPic(e.target.files[0])}
                />
              </div>

              <div>
                <label htmlFor="updateDate" className="block text-lg font-semibold text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  id="updateDate"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowUpdateModal(false)}
                  className="bg-gray-500 text-white p-3 rounded-md"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-[#752220] text-white p-3 rounded-md"
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

export default AddMedia;
