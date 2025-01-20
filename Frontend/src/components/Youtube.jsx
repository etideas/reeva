import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const YouTube = () => {
  const [videos, setVideos] = useState([]);
  const { listAllVideos } = useFirebase();

  const convertToEmbedURL = (url) => {
    const videoIdMatch = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^&\n]{11})/
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : url;
  };

  const fetchVideos = async () => {
    try {
      const querySnapshot = await listAllVideos();
      const videoData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        videoURL: convertToEmbedURL(doc.data().videoURL),
      }));
      setVideos(videoData);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div
      id="youtube"
      className="min-h-screen px-4 pt-[9.5rem] text-white flex  flex-col gap-12 md:flex-row md:gap-32"
    >
      {/* Latest Videos Section */}
      <section className="w-full md:w-[70%]">
        <h2 className="text-2xl md:text-2xl font-bold md:text-left text-center mb-6">
          Our Latest
        </h2>
        <div className="flex justify-center items-center bg-white pt-[1rem] pr-[1rem] pl-[1rem] pb-[2rem] rounded-lg">
          {videos.slice(0, 1).map((video) => (
            <iframe
              key={video.id}
              className="rounded-lg w-full aspect-video"
              src={video.videoURL || ""}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title || "Latest Video"}
            ></iframe>
          ))}
        </div>
      </section>

      {/* Other Videos Section */}
      <section className="sm:w-full md:w-auto">
        <h2 className="text-2xl md:text-2xl font-bold text-center mb-6">
          Other Videos
        </h2>
        <div
          className="overflow-hidden overflow-y-scroll custom-scrollbar"
          style={{ maxHeight: "72vh" }}
        >
          <Swiper
            direction="vertical"
            spaceBetween={10}
            slidesPerView="auto"
            loop={false}
          >
            {videos.slice(1).map((video) => (
              <SwiperSlide key={video.id}>
                <div className="bg-white w-[300px] p-2 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <iframe
                    className="rounded-t-lg w-full aspect-video"
                    src={video.videoURL || ""}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title || "Other Video"}
                  ></iframe>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default YouTube;
