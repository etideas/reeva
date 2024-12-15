import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase"; // Use the hook to access Firebase context

const BlogPage = () => {
  // State to store the blogs fetched from Firestore
  const [blogs, setBlogs] = useState([]);
  // State to manage the currently displayed blog
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Get the Firestore functions from the context
  const { listAllBlogs } = useFirebase();

  // Fetch blogs from Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await listAllBlogs(); // Use listAllBlogs function from Firebase context
        const blogsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogsData);
        setSelectedBlog(blogsData[0]); // Set the first blog as the default selected blog
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [listAllBlogs]);

  return (
    <div className="bg-[url('./assets/shell.jpg')] bg-cover">
      <div className="pt-12 px-10 bg-black bg-opacity-20 text-[#752220] backdrop-blur-[4px] min-h-screen">
        <div className="flex bg-black bg-opacity-[15%] rounded-2xl">
          {/* Index Section */}
          <aside
            className="w-1/4 border-r border-gray-300 p-4 overflow-y-auto"
            style={{
              maxHeight: "80vh",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <h2 className="text-lg font-bold mb-4">Chapter</h2>
            <ul className="space-y-2">
              {blogs.map((blog, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded ${
                    selectedBlog?.id === blog.id
                      ? "bg-[#752220] text-white"
                      : "hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedBlog(blog)}
                >
                  {blog.title}
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content Section */}
          <main
            className="w-3/4 p-8 pb-10 max-h-[80vh] overflow-y-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {selectedBlog ? (
              <>
                <h1 className="text-2xl font-bold mb-4">{selectedBlog.title}</h1>
                <p className="text-gray-900 mb-6">{selectedBlog.description}</p>
                {selectedBlog.covers && selectedBlog.covers.length > 0 && (
                  <div className="flex justify-center">
                    {selectedBlog.covers.map((cover, idx) => (
                      <img
                        key={idx}
                        src={cover}
                        alt={`Cover ${idx + 1}`}
                        className="max-w-full max-h-[500px] rounded"
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <p>Loading...</p>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
