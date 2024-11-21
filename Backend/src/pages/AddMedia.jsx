<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useFirebase } from "../Context/Firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
=======
import React, { useState, useEffect } from 'react';
import { useFirebase } from '../Context/Firebase';
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941

const AddMedia = () => {
  const firebase = useFirebase();
  const storage = getStorage(); // Initialize Firebase Storage

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [coverPic, setCoverPic] = useState(null);
<<<<<<< HEAD
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
=======
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
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
  }, [firebase]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
<<<<<<< HEAD
      await firebase.handleCreateNewListingMedia(title, desc, coverPic, date); // Pass the date along with other data
=======
      const newMedia = await firebase.handleCreateNewListingMedia(title, desc, coverPic, date);
      setMediaList((prevList) => [...prevList, newMedia]);
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941

      setTitle("");
      setDesc("");
      setCoverPic(null);
<<<<<<< HEAD
      setDate(""); // Clear the date field after submit

      console.log("Media successfully added!");

      // Re-fetch the gallery data
      const querySnapshot = await firebase.listAllGalleryMedia();
      const galleryItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setGalleryList(galleryItems.reverse());
=======
      setDate("");
      console.log("Media successfully added!");
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
    } catch (error) {
      console.error("Error adding media:", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await firebase.deleteItemMedia(id);
<<<<<<< HEAD
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
=======
      setMediaList(mediaList.filter(media => media.id !== id));
      console.log("Media successfully deleted!");
    } catch (error) {
      console.error("Error deleting media:", error.message);
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
    }
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-[#752220] text-center">Add New Media</h2>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-6">
<<<<<<< HEAD
        {/* Add Media Form Fields */}
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">
            Enter Picture Title
          </label>
=======
        <div>
          <label htmlFor="title" className="block text-lg font-semibold text-gray-700 mb-2">Enter Picture Title</label>
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
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
<<<<<<< HEAD
          <label htmlFor="desc" className="block text-lg font-semibold text-gray-700 mb-2">
            Picture Description
          </label>
=======
          <label htmlFor="desc" className="block text-lg font-semibold text-gray-700 mb-2">Picture Description</label>
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
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
<<<<<<< HEAD
          <label htmlFor="coverPic" className="block text-lg font-semibold text-gray-700 mb-2">
            Cover Pic
          </label>
=======
          <label htmlFor="coverPic" className="block text-lg font-semibold text-gray-700 mb-2">Cover Pic</label>
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
          <input
            type="file"
            id="coverPic"
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#752220] transition-all"
            onChange={(e) => setCoverPic(e.target.files[0])}
            required
          />
        </div>

        <div>
<<<<<<< HEAD
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
=======
          <button type="submit" className="w-full bg-[#752220] text-white p-4 rounded-lg hover:bg-[#8c2b2f] transition-colors">
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
            Create Media
          </button>
        </div>
      </form>

<<<<<<< HEAD
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
=======
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
>>>>>>> 5735fd3316db51ef7beecbac3f538beca84cb941
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
                  Update Cover Pic
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
