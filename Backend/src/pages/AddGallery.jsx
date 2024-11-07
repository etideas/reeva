import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from '../Context/Firebase';

const AddGallery = () => {
  const firebase = useFirebase();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [coverPic, setCoverPic] = useState(null); // File should be handled as an object, not a string

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      

      // Submitting data to Firebase
      await firebase.handleCreateNewListing(title, desc, coverPic);

      // Clear form fields after successful submission
      setTitle("");
      setDesc("");
      setCoverPic(null); // Reset file input

      console.log("Gallery successfully added!");

    } catch (error) {
      console.error("Error adding gallery:", error.message);
    }
  };

  return (
    <div className="container mt-5 ">
      <h2>Add New Gallery</h2>
      <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Picture Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Title"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Picture Description</Form.Label>
            <Form.Control
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
              type="text"
              placeholder="Description"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Cover Pic</Form.Label>
            <Form.Control
              onChange={(e) => setCoverPic(e.target.files[0])} // Handle file input correctly
              type="file"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddGallery;
