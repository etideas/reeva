import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/Firebase"; // Import Firebase context
import { Card, Button, Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components

const ShowGallery = () => {
  const { listAllGallery, deleteItem } = useFirebase(); // Access deleteItem function
  const [galleryItems, setGalleryItems] = useState([]); // State to store gallery items

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const querySnapshot = await listAllGallery(); // Fetch all books from Firestore
        const items = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(), // Map each document data
        }));
        setGalleryItems(items); // Set the fetched items to state
      } catch (error) {
        console.error("Error fetching gallery items:", error.message);
      }
    };

    fetchGalleryItems(); // Fetch gallery items when the component mounts
  }, [listAllGallery]); // Dependency array with listAllBooks

  // Function to handle deleting an item
  const handleDelete = async (id) => {
    try {
      await deleteItem(id);  // Call delete function from Firebase context
      setGalleryItems(prevItems => prevItems.filter(item => item.id !== id)); // Update state to remove the deleted item
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  return (
    <Container>
      <h1>Gallery</h1>
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

export default ShowGallery;
