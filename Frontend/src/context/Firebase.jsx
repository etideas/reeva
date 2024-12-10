import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc} from 'firebase/firestore';

// Create a context for Firebase
const FirebaseContext = createContext(null);

// Firebase configuration object
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseApp);

// Custom hook to use Firebase in components
export const useFirebase = () => useContext(FirebaseContext);

// FirebaseProvider component to wrap the app and provide Firebase context
export const FirebaseProvider = (props) => {
  // Function to list all gallery items
  const listAllGallery = () => {
    return getDocs(collection(firestore, 'gallery'));
  };

  // Function to list all media items
  const listAllMedia = () => {
    return getDocs(collection(firestore, 'media'));
  };

  // Function to list all video items
  const listAllVideos = () => {
    return getDocs(collection(firestore, 'videos'));
  };

   // Function to store crew form data
   const storeCrewFormData = async (formData) => {
    try {
      // Add a new document to the 'crew' collection
      const docRef = await addDoc(collection(firestore, 'crew'), formData);
      console.log("Document written with ID: ", docRef.id);
      return docRef.id;  // Return the document ID if needed
    } catch (error) {
      console.error("Error adding document: ", error);
      throw error;  // Re-throw the error if you want to handle it in the component
    }
  };

  // Function to store contact form data
  const storeContactFormData = async (formData) => {
    try {
      // Add a new document to the 'contacts' collection
      const docRef = await addDoc(collection(firestore, 'contacts'), formData);
      console.log("Contact document written with ID: ", docRef.id);
      return docRef.id; // Return the document ID if needed
    } catch (error) {
      console.error("Error adding contact document: ", error);
      throw error; // Re-throw the error if you want to handle it in the component
    }
  };

  
  // Function to list all Blogs items
  const listAllBlogs = () => {
    return getDocs(collection(firestore, 'blogs'));
  };


  return (
    <FirebaseContext.Provider value={{
      listAllGallery,
      listAllMedia,
      listAllVideos,
      storeCrewFormData,
      storeContactFormData,
      listAllBlogs,
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};