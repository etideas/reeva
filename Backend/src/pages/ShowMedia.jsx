import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase"; // Import Firebase context
import { Card, Button, Container, Row, Col, Alert, Spinner } from "react-bootstrap"; // Import Bootstrap components

const ShowMedia = () => {
  const { listAllMedia, deleteItemMedia } = useFirebase(); // Access deleteItem function
  const [galleryItems, setGalleryItems] = useState([]); // State to store gallery items
  const [loading, setLoading] = useState(true); // Loading state for fetching items
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const querySnapshot = await listAllMedia(); // Fetch all media from Firestore
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
  }, [listAllMedia]); // Dependency array with listAllMedia

  const handleDelete = async (id) => {
    try {
      await deleteItemMedia(id);
      setGalleryItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (error) {
      setError("Error deleting item: " + error.message);
    }
  };
  
  return (
    <Container>
      <h1>Media Gallery</h1>
      {loading && <Spinner animation="border" />} {/* Show loading spinner while fetching */}
      {error && <Alert variant="danger">{error}</Alert>} {/* Error message */}

      <Row>
        {galleryItems.length > 0 ? (
          galleryItems.map(item => (
            <Col md={4} key={item.id}> {/* Set column width */}
              <Card className="mb-4" style={{ width: "18rem", height: "24rem" }}> {/* Set fixed width and height */}
                <Card.Img
                  variant="top"
                  src={item.imageURL}
                  alt={item.title}
                  style={{ objectFit: "cover", height: "12rem" }} // Fixed height for image with object-fit to maintain aspect ratio
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.desc}
                  </Card.Text>
                  <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button> {/* Delete button */}
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No items to display</p>
        )}
      </Row>
    </Container>
  );
};

export default ShowMedia;
