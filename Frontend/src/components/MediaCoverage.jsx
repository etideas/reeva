import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFirebase } from "../context/Firebase";

const MediaCoverage = () => {
  const { listAllMedia } = useFirebase();
  const [newsArticles, setNewsArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediaArticles = async () => {
      try {
        const querySnapshot = await listAllMedia();
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title || "Untitled",
          imageURL: doc.data().imageURL || "/images/placeholder.jpg",
          date: doc.data().date || "Date not available", // Use the date string directly
          summary: doc.data().desc || "No description available",
        }));
        console.log("Fetched data:", data); // Check fetched data structure
        setNewsArticles(data);
      } catch (error) {
        console.error("Error fetching media articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaArticles();
  }, [listAllMedia]);

  if (loading) return <div>Loading...</div>;

  return (
    <div
      id="media"
      className="min-h-screen pt-12 p-8"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center  mb-8 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Latest News & Stories
        </motion.h1>
        <div
          className="space-y-8 max-h-[76vh] overflow-y-auto"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {newsArticles.map((article, index) => (
            <motion.div
              key={article.id}
              className="bg-[#F6F1F1] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/3">
                <motion.img
                  src={article.imageURL} // Access the image URL directly
                  alt={article.title || "News Image"}
                  className="rounded-lg w-full h-48 object-cover md:h-auto"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0 text-[#752220]">
                <h2 className="text-2xl font-semibold ">{article.title}</h2>
                <p className="text-sm ">
                  {article.date} {/* Display the date string directly */}
                </p>
                <p className="mt-4 ">{article.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
