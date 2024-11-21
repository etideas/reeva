// ShowContact.jsx
import { useFirebase } from '../Context/Firebase';  // Firebase hook
import { useEffect, useState } from 'react';  // React hooks

const ShowContact = () => {
  const { listAllContacts } = useFirebase();  // Destructure the listAllContacts from the context

  const [contactList, setContactList] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await listAllContacts();  // Fetch contact data
        const contacts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setContactList(contacts);  // Set fetched data to state
      } catch (error) {
        console.error("Error fetching contact data:", error.message);
      }
    };

    fetchContacts();
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us List</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {contactList.length > 0 ? (
          contactList.map(contact => (
            <div
              key={contact.id}
              className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-72 h-60 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-200 ease-in-out"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{contact.name}</h2>
                <p className="text-gray-600 mb-1"><strong>Email:</strong> {contact.email}</p>
                <div className="text-gray-600 max-h-40 overflow-y-auto">
                  <strong>Message:</strong> {contact.message}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center w-full">No contact data available</p>
        )}
      </div>
    </div>
  );
};

export default ShowContact;
