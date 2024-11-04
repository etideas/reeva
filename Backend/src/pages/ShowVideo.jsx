import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase"; // Import Firebase context
import { Card, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap"; // Import Bootstrap components

const ShowVideo = () => {
  const { listAllVideos, deleteVideo } = useFirebase(); // Access deleteVideo and listAllVideos functions
  const [galleryItems, setGalleryItems] = useState([]); // State to store gallery items
  const [loading, setLoading] = useState(true); // Loading state for fetching items
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchGalleryItems = async () => {
      setLoading(true); // Set loading to true at the start
      setError(null); // Reset error state before fetching
      try {
        const querySnapshot = await listAllVideos(); // Fetch all videos from Firestore
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(), // Map each document data
        }));
        setGalleryItems(items); // Set the fetched items to state
      } catch (error) {
        setError("Error fetching gallery items: " + error.message);
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    fetchGalleryItems(); // Fetch gallery items when the component mounts
  }, [listAllVideos]); // Correct dependency array

  // Function to handle deleting a video
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this video?")) {
      try {
        await deleteVideo(id); // Call delete function from Firebase context
        setGalleryItems(prevItems => prevItems.filter(item => item.id !== id)); // Update state to remove the deleted video
      } catch (error) {
        setError("Error deleting video: " + error.message);
      }
    }
  };

  return (
    <Container>
      <h1>Video Gallery</h1>
      {loading && (
        <div className="text-center">
          <Spinner animation="border" /> {/* Show loading spinner */}
          <span> Loading videos...</span> {/* Loading message */}
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>} {/* Error message */}

      <Row>
        {galleryItems.length > 0 ? (
          galleryItems.map(item => (
            <Col md={4} key={item.id}> {/* Set column width */}
              <Card className="mb-4" style={{ width: "100%", height: "24rem" }}> {/* Set fixed width and height */}
                {item.videoURL.includes("youtube.com") || item.videoURL.includes("youtu.be") ? ( // Check if URL is a YouTube link
                  <iframe
                    title={item.title}
                    width="100%"
                    height="200rem"
                    src={item.videoURL.replace("watch?v=", "embed/").replace("youtu.be/", "embed/")} // Use embed URL for iframe
                    frameBorder="0"
                    allowFullScreen
                    style={{ borderRadius: '8px', overflow: 'hidden' }} // Style the iframe
                  ></iframe>
                ) : (
                  <video
                    controls
                    preload="metadata" // Preload video metadata
                    style={{ objectFit: "cover", height: "12rem", width: "100%" }} // Fixed height for video with object-fit
                    src={item.videoURL} // Use videoURL
                    onError={(e) => {
                      const errorMessage = `Error loading video at URL: ${item.videoURL}`;
                      console.error(errorMessage);
                      setError("Error loading video: Please check the URL or format.");
                      e.target.src = ""; // Clear the src to prevent repeated error events
                    }}
                  >
                    <p>Your browser does not support HTML5 video. Here is a <a href={item.videoURL}>link to the video</a> instead.</p>
                  </video>
                )}
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.desc || "No description available."} {/* Default text if desc is undefined */}
                  </Card.Text>
                  <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button> {/* Delete button */}
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <Col>
            <p>No items to display</p> {/* Message when there are no items */}
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ShowVideo; // Ensure correct export
