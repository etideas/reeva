import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Create a context for Firebase
const FirebaseContext = createContext(null);

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAWMcVxRYc9QwYhBNaYQfaI3cwi_eFeLfA",
  authDomain: "reevaadmin-781c5.firebaseapp.com",
  projectId: "reevaadmin-781c5",
  storageBucket: "reevaadmin-781c5.appspot.com",
  messagingSenderId: "682620285467",
  appId: "1:682620285467:web:48637531c8fc241e727ebe",
  measurementId: "G-7811J3NT3W"
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

  return (
    <FirebaseContext.Provider value={{
      listAllGallery,
      listAllMedia,
      listAllVideos,
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
