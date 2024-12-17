import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // Import the Navigation module
import "swiper/css";
import "swiper/css/navigation";

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
      className="min-h-screen px-8 py-16 pt-20 text-white "
    >
      {/* Latest Videos Section */}
      <section className="mb-10">
        <h2 className="text-4xl font-bold text-center text-white inline-block pb-2 mb-4">
          Our Latest
        </h2>
        <div className="px-40 flex justify-center items-center">
          {videos.slice(0, 1).map((video, index) => (
            // <div
            //   key={video.id}
            //   className="w-[80%] bg-[#F6F1F1] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            // >
            <iframe
              key={video.id}
              width="80%"
              height="450"
              src={video.videoURL || ""}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.title || `Latest Video ${index + 1}`}
              className="rounded-t-lg"
            ></iframe>
            // </div>
          ))}
        </div>
      </section>

      {/* Other Videos Section with Carousel */}
      <section>
        <h2 className="text-xl font-bold text-center inline-block pb-2 mb-2">
          Other Videos
        </h2>
        <Swiper
          modules={[Navigation]} // Add Navigation module
          navigation={true} // Enable navigation buttons
          spaceBetween={10}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {videos.slice(2).map((video, index) => (
            <SwiperSlide key={video.id}>
              <div className="w-[`100%] bg-[#F6F1F1] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <iframe
                  width="300"
                  height="150"
                  src={video.videoURL || ""}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title || `Other Video ${index + 1}`}
                  className="rounded-t-lg"
                ></iframe>
                <div className="p-2 bg-[#F6F1F1]">
                  <h3 className="text-sm font-bold text-[#752220]">
                    {video.title || `Video ${index + 3}`}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default YouTube;
