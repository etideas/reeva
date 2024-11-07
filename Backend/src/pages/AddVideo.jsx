import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useFirebase } from '../Context/Firebase';

const AddVideo = () => {
  const firebase = useFirebase();

  const [title, setTitle] = useState("");
  const [videoURL, setVideoURL] = useState(""); // State for video URL

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Submitting data to Firebase with video URL
      await firebase.handleCreateNewVideoListing(title, videoURL); // Pass the video URL to the upload function

      // Clear form fields after successful submission
      setTitle(""); // Reset title input
      setVideoURL(""); // Reset video URL input

      console.log("Video successfully added!");

    } catch (error) {
      console.error("Error adding video:", error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add New Video</h2>
      <div className="container mt-5">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicTitle">
            <Form.Label>Enter Video Title</Form.Label>
            <Form.Control
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Title"
              required // Make title a required field
            />
          </Form.Group>

          {/* Input for Video URL */}
          <Form.Group className="mb-3" controlId="formVideoURL">
            <Form.Label>Video URL</Form.Label>
            <Form.Control
              onChange={(e) => setVideoURL(e.target.value)} // Handle video URL input
              value={videoURL}
              type="url" // Use URL input type
              placeholder="Enter video URL"
              required // Make video URL a required field
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

export default AddVideo;
