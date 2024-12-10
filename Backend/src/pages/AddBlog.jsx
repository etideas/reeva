import React, { useState, useEffect } from "react";
import { storage, firestore } from "../Context/Firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [uploadedImageURLs, setUploadedImageURLs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [expandedDescription, setExpandedDescription] = useState(false);  // State to handle description toggle

  const fetchBlogs = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  const uploadImages = async () => {
    const uploadedURLs = [];
    for (const image of images) {
      const storageRef = ref(storage, `blogs/${Date.now()}-${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          null,
          (error) => {
            console.error("Upload failed:", error);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            uploadedURLs.push(downloadURL);
            resolve();
          }
        );
      });
    }
    return uploadedURLs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const imageURLs = await uploadImages();
      setUploadedImageURLs(imageURLs);

      if (editingBlog) {
        const blogDocRef = doc(firestore, "blogs", editingBlog.id);
        await updateDoc(blogDocRef, {
          title,
          description,
          covers: imageURLs,
          updatedAt: new Date(),
        });
        alert("Blog updated successfully!");
      } else {
        await addDoc(collection(firestore, "blogs"), {
          title,
          description,
          covers: imageURLs,
          createdAt: new Date(),
        });
        alert("Blog added successfully!");
      }

      setTitle("");
      setDescription("");
      setImages([]);
      setUploadedImageURLs([]);
      setEditingBlog(null);

      fetchBlogs();
    } catch (error) {
      console.error("Error adding/updating blog:", error);
      alert("Failed to add/update blog. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (blogId) => {
    try {
      const blogDocRef = doc(firestore, "blogs", blogId);
      await deleteDoc(blogDocRef);
      setBlogs(blogs.filter(blog => blog.id !== blogId));
      alert("Blog deleted successfully!");
    } catch (error) {
      console.error("Error deleting blog:", error);
      alert("Failed to delete blog. Please try again.");
    }
  };

  const handleEdit = (blog) => {
    setTitle(blog.title);
    setDescription(blog.description);
    setUploadedImageURLs(blog.covers || []);
    setEditingBlog(blog);
    setExpandedDescription(false);  // Reset the description toggle when editing
  };

  // Toggle description visibility
  const toggleDescription = () => {
    setExpandedDescription(!expandedDescription);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl text-black font-bold mb-4">{editingBlog ? "Edit Blog" : "Add Blog"}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium mb-1">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded"
            rows="5"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block text-sm font-medium mb-1">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            multiple
            onChange={handleFileChange}
            className="block w-full text-sm"
          />
        </div>

        <div className="mb-4 flex flex-wrap gap-4">
          {uploadedImageURLs.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Uploaded ${index + 1}`}
              className="w-24 h-24 object-cover rounded-lg"
            />
          ))}
        </div>

        <button
          type="submit"
          className={`w-full px-4 py-2 bg-[#752220] text-white rounded ${loading ? "opacity-50" : ""}`}
          disabled={loading}
        >
          {loading ? "Submitting..." : editingBlog ? "Update Blog" : "Add Blog"}
        </button>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">All Blogs</h2>
        {blogs.length > 0 ? (
          <div className="space-y-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="border-b pb-4 mb-4">
                <h3 className="text-xl font-semibold">{blog.title}</h3>
                <p className="mt-2">
                  {expandedDescription ? blog.description : `${blog.description.substring(0, 100)}...`}
                  <button
                    onClick={toggleDescription}
                    className="text-[#752220] font-bold ml-2"
                  >
                    {expandedDescription ? "Show Less" : "Show More"}
                  </button>
                </p>
                <div className="mt-4 flex gap-4">
                  {blog.covers?.map((cover, idx) => (
                    <img
                      key={idx}
                      src={cover}
                      alt={`Cover ${idx + 1}`}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    Edit Blog
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete Blog
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default AddBlog;
