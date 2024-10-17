import React from "react";
import { motion } from "framer-motion";

// Static data for the news articles
const newsArticles = [
  {
    title: "Article 1",
    createdAt: "2024-08-01",
    summary: "This is a summary of article 1.",
    image: "/images/wave.jpg",
  },
  {
    title: "Article 2",
    createdAt: "2024-08-05",
    summary: "This is a summary of article 2.",
    image: "/images/boat3.jpg",
  },
  {
    title: "Article 3",
    createdAt: "2024-08-10",
    summary: "This is a summary of article 3.",
    image: "/images/boat4.jpg",
  },
];

const MediaCoverage = () => {
  return (
    <div className="min-h-screen bg-[#F6F1F1] pt-44 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-[#146C94] mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Latest News & Stories
        </motion.h1>
        <div className="space-y-8">
          {newsArticles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-[#AFD3E2] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="md:w-1/3">
                <motion.img
                  src={article.image} // Use static path for images
                  alt={article.title}
                  className="rounded-lg w-full h-48 object-cover md:h-auto"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
                <h2 className="text-2xl font-semibold text-[#146C94]">
                  {article.title}
                </h2>
                <p className="text-sm text-[#3C5B43]">
                  {new Date(article.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-4 text-[#146C94]">{article.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;
