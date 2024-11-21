import React, { useState, useEffect } from "react";
import { useFirebase } from "../Context/Firebase";

const ShowCrew = () => {
  const { listAllCrew, deleteCrew } = useFirebase();
  const [loading, setLoading] = useState(true);
  const [crewData, setCrewData] = useState([]);
  const [selectedCrew, setSelectedCrew] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchCrewData = async () => {
      try {
        const snapshot = await listAllCrew();
        const crewList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setCrewData(crewList);
      } catch (error) {
        console.error("Error fetching crew data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCrewData();
  }, [listAllCrew]);

  const handleKnowMore = (crew) => {
    setSelectedCrew(crew);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCrew(null);
  };

  const handleDeleteCrew = async (id) => {
    try {
      await deleteCrew(id);
      // Remove the deleted crew from the local state
      setCrewData((prevData) => prevData.filter((crew) => crew.id !== id));
    } catch (error) {
      console.error("Error deleting crew member:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-[#752220] border-dotted rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">Crew Form</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {crewData.map((crew, index) => (
          <div key={crew.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold text-[#752220]">{`Crew Member ${index + 1}`}</h2>
            <p className="mt-2">
              <strong>Can Swim:</strong> {crew.canSwim || "N/A"}
            </p>
            <p>
              <strong>Sailing Experience:</strong> {crew.sailingExperience || "N/A"}
            </p>
            <p>
              <strong>Dietary Preference:</strong> {crew.dietaryPreference || "N/A"}
            </p>
            <button
              onClick={() => handleKnowMore(crew)}
              className="mt-4 px-4 py-2 bg-[#752220] text-white rounded hover:bg-[#5c1a1a] transition"
            >
              Know More
            </button>
            {/* Delete Button */}
            <button
              onClick={() => handleDeleteCrew(crew.id)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black transition text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Crew Member Details</h2>
            {selectedCrew && (
              <div className="space-y-3">
                {Object.entries(selectedCrew).map(([key, value]) => (
                  <div key={key}>
                    <strong>{key.replace(/([A-Z])/g, " $1").toUpperCase()}:</strong>
                    <p className="text-gray-700">{value || "N/A"}</p>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowCrew;
