import React, { useState, useEffect } from "react";
import { useFirebase } from "../context/Firebase"; // Use the hook to access Firebase context
import LazyLoad from "react-lazyload";

const TipsTricks = () => {
  // State to store the blogs fetched from Firestore
  const [blogs, setBlogs] = useState([]);
  // State to manage the currently displayed blog
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Get the Firestore functions from the context
  const { listAllTips } = useFirebase();

  // Fetch blogs from Firestore
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await listAllTips(); // Use listAllBlogs function from Firebase context
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
  }, [listAllTips]);

  return (
    <div className="bg-[url('./assets/shell.jpg')] bg-cover">
      <div className="pt-5 md:pt-12 px-4 md:px-10 bg-black bg-opacity-20 text-[#752220] backdrop-blur-[4px] min-h-screen">
        <div className="flex flex-col md:flex-row bg-black bg-opacity-[15%] rounded-2xl">
          {/* Index Section */}
          <aside
            className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300 p-4 overflow-y-auto"
            style={{
              maxHeight: "40vh", // On mobile, limit height for scrolling
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <h2 className="text-lg font-bold mb-4">Chapters</h2>
            <ul className="space-y-2">
              {blogs.map((blog, index) => (
                <li
                  key={index}
                  className={`cursor-pointer p-2 rounded ${selectedBlog?.id === blog.id
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
            className="w-full md:w-3/4 p-4 md:p-8 pb-10 max-h-[55vh] md:max-h-[80vh] overflow-y-auto"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {selectedBlog ? (
              <>
                <h1 className="text-xl md:text-2xl font-bold mb-4">
                  {selectedBlog.title}
                </h1>
                <p className="text-gray-900 mb-6">{selectedBlog.description}</p>
                {selectedBlog.covers && selectedBlog.covers.length > 0 && (
                  <div className="flex flex-wrap justify-center">
                    {selectedBlog.covers.map((cover, idx) => (
                      <LazyLoad key={idx} height={200} offset={100}>
                        <img
                          src={cover}
                          alt={`Cover ${idx + 1}`}
                          className="w-full md:max-w-[500px] max-h-[300px] md:max-h-[500px] rounded p-2"
                        />
                      </LazyLoad>
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

export default TipsTricks;
