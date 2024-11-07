import React, { useEffect, useState } from 'react';
import { useFirebase } from '../Context/Firebase'; // Import Firebase context
import { Card, Container, Row, Col } from 'react-bootstrap';

const ShowContact = () => {
  const { listAllContact } = useFirebase(); // Access Firebase function to fetch contacts
  const [contacts, setContacts] = useState([]); // State to store contacts data

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const contactsSnapshot = await listAllContact(); // Fetch contacts from Firestore
        const contactList = contactsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactList); // Set contacts data in state
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts(); // Fetch contacts when the component mounts
  }, [listAllContact]);

  return (
    <Container>
      <h2>Contacts</h2>
      <Row>
        {contacts.length > 0 ? (
          contacts.map(contact => (
            <Col md={4} key={contact.id}>
              <Card className="mb-4" style={{ width: "18rem", height: "20rem" }}> {/* Card styling */}
                <Card.Body>
                  <Card.Title>{contact.name}</Card.Title>
                  <Card.Text>
                    <strong>Email:</strong> {contact.email}
                  </Card.Text>
                  <Card.Text style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    <strong>Message:</strong> {contact.message}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No contacts to display</p>
        )}
      </Row>
    </Container>
  );
};

export default ShowContact;
