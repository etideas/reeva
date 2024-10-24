import React from "react";

const YouTube = () => {
  // Latest videos array
  const latestVideos = [
    "https://www.youtube.com/embed/Ab7igi8z2zg?si=p-fGznZ9Cv9NBgWj",
    "https://www.youtube.com/embed/bl1pyv-k-VM?si=4OVnwguB-pHec7aV",
  ];

  // Other videos array
  const otherVideos = [
    "https://www.youtube.com/embed/qjFOprhpekA?si=Wr7bz78v3b115Si_",
    "https://www.youtube.com/embed/someOtherVideo1",
    "https://www.youtube.com/embed/someOtherVideo2",
  ];

  return (
    <div className="min-h-screen px-8 py-16 pt-44 bg-[#F6F1F1] text-[#752220]">
      {/* Latest Videos Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center text-[#752220] border-b-4 border-[#752220] inline-block pb-2 mb-12">
          Latest Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {latestVideos.map((url, index) => (
            <div
              key={index}
              className="w-full bg-[#F6F1F1] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <iframe
                width="100%"
                height="315"
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Latest Video ${index + 1}`}
                className="rounded-t-lg"
              ></iframe>
              <div className="p-4 bg-[#F6F1F1]">
                <h3 className="text-lg font-bold text-[#752220]">
                  Video {index + 1}
                </h3>
                <p className="text-sm text-[#752220] mt-2">
                  Latest video description goes here. Engage viewers with a
                  brief intro about the video content.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Videos Section */}
      <section>
        <h2 className="text-4xl font-bold text-center text-[#752220] border-b-4 border-[#752220] inline-block pb-2 mb-12">
          Other Videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {otherVideos.map((url, index) => (
            <div
              key={index}
              className="w-full bg-[#F6F1F1] rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <iframe
                width="100%"
                height="315"
                src={url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`Other Video ${index + 1}`}
                className="rounded-t-lg"
              ></iframe>
              <div className="p-4 bg-[#F6F1F1]">
                <h3 className="text-lg font-bold text-[#752220]">
                  Video {index + 1}
                </h3>
                <p className="text-sm text-[#752220] mt-2">
                  Brief description or additional information for the video.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default YouTube;
