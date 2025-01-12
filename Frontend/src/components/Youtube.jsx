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
      className="min-h-screen px-8 py-16 pt-20 text-white flex flex-col md:flex-row gap-20"
    >
      {/* Latest Videos Section */}
      <section className="md:w-9/10 w-full mb-10 md:mb-0 pr-4">
        <h2 className="text-4xl font-bold text-center text-white inline-block pb-2 mb-4">
          Our Latest
        </h2>
        <div className="flex justify-center items-center">
          {videos.slice(0, 1).map((video, index) => (
            <iframe
              key={video.id}
              width="100%"
              height="450"
              src={video.videoURL || ""}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title || `Latest Video ${index + 1}`}
              className="rounded-lg"
            ></iframe>
          ))}
        </div>
      </section>

      {/* Other Videos Section */}
      <section className="md:w-[30%] flex flex-col">
        <h2 className="text-xl font-bold text-center inline-block pb-2 mb-4">
          Other Videos
        </h2>
        <div
          className="overflow-hidden overflow-y-scroll scrollbar-hide "
          style={{
            maxHeight: "55vh", // On mobile, limit height for scrolling
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <Swiper
            direction="vertical"
            spaceBetween={10}
            slidesPerView="auto"
            loop={true}
            className=""
          >
            {videos.slice(1).map((video, index) => (
              <SwiperSlide key={video.id}>
                <div className=" rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                  <iframe
                    width=""
                    height=""
                    src={video.videoURL || ""}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.title || `Other Video ${index + 1}`}
                    className="rounded-t-lg"
                  ></iframe>
                  {/* <div className="p-2 bg-[#F6F1F1]">
                    <h3 className="text-sm font-bold text-[#752220]">
                      {video.title || `Video ${index + 2}`}
                    </h3>
                  </div> */}
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
