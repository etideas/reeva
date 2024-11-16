import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword as firebaseSignIn, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,  // Import signOut
  onAuthStateChanged
} from 'firebase/auth';
import {getFirestore, collection, addDoc, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore';
import { getStorage, ref, uploadBytes ,getDownloadURL} from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';


// Create a context for Firebase
const FirebaseContext = createContext(null);

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
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);


const googleProvider = new GoogleAuthProvider();

// Custom hook to use Firebase in components
export const useFirebase = () => useContext(FirebaseContext);

// FirebaseProvider component to wrap the app and provide Firebase context
export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signupUserWithEmailAndPassword = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      return result;  // Success
    } catch (error) {
      console.error("Error during signup:", error.message);
      throw error;  // Propagate error
    }
  };

  const loginUserWithEmailAndPassword = async (email, password) => {
    try {
      const result = await firebaseSignIn(firebaseAuth, email, password);
      return result;
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      throw error;  // Propagate error
    }
  };

  const signinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      return result;  // Success
    } catch (error) {
      console.error("Error during Google sign-in:", error.message);
      throw error;  // Propagate error
    }
  };

  // Add logoutUser function
  const logoutUser = async () => {
    try {
      await signOut(firebaseAuth);
      setUser(null); // Clear user state after logout
    } catch (error) {
      console.error("Error during sign out:", error.message);
      throw error;
    }
  };


  const handleCreateNewListing = async (title, desc, cover) => {
    try {
      const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
      const uploadResult = await uploadBytes(imageRef, cover);
      
      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(uploadResult.ref);
      
      // Save the listing with the image's download URL in Firestore
      return await addDoc(collection(firestore, "gallery"), {
        title,
        desc,
        imageURL: downloadURL,  // Store the download URL
      });
    } catch (error) {
      console.error("Error uploading image and saving listing:", error.message);
      throw error;  // Propagate the error for handling
    }
  };

const listAllGallery = () =>{
  return getDocs(collection(firestore,'gallery'))
}

const deleteItem = async (id) => {
  try {
    const itemRef = doc(firestore, 'gallery', id);  // Get reference to the document by ID
    await deleteDoc(itemRef);  // Delete the document
    console.log("Item deleted successfully");
  } catch (error) {
    console.error("Error deleting item:", error.message);
    throw error;  // Propagate error
  }
};

//////////////////////////////MEDIA-------------------------------------
const handleCreateNewListingMedia = async (title, desc, cover, date) => {
  try {
    // Reference to Firebase storage for uploading the cover image
    const imageRef = ref(storage, `uploadsMedia/images/${Date.now()}-${cover.name}`);
    
    // Upload the image to Firebase storage
    const uploadResult = await uploadBytes(imageRef, cover);
    
    // Get the download URL of the uploaded image
    const downloadURL = await getDownloadURL(uploadResult.ref);
    
    // Save the listing (title, description, date, and image URL) in Firestore
    return await addDoc(collection(firestore, "media"), {
      title,
      desc,
      date,  // Include the date in the Firestore document
      imageURL: downloadURL,  // Store the download URL of the image
    });
  } catch (error) {
    console.error("Error uploading image and saving listing:", error.message);
    throw error;  // Propagate the error for handling
  }
};


const listAllMedia = () =>{
  return getDocs(collection(firestore,'media'))
}

const deleteItemMedia = async (id) => {
  try {
    console.log("Deleting item with ID:", id); // Log the ID to confirm it's correct
    const itemRef = doc(firestore, 'media', id); // Get reference to the document by ID
    await deleteDoc(itemRef); // Attempt to delete the document
    console.log("Media deleted successfully");
  } catch (error) {
    console.error("Error deleting media item:", error); // Log the full error message
    throw error; // Propagate error
  }
};



 // Function to handle video upload
 const handleCreateNewVideoListing = async (title, videoURL) => {
  try {
    console.log("Creating video listing with title:", title, "and videoURL:", videoURL);
    await addDoc(collection(firestore, "videos"), {
      title,
      videoURL,
    });
    console.log("Video listing created successfully!");
  } catch (error) {
    console.error("Error saving video listing:", error.message);
    throw error;  // Propagate the error for handling
  }
};



// List all video listings
const listAllVideos = () => {
  return getDocs(collection(firestore, 'videos'));
};
//delete all video
const deleteVideo = async (id) => {
  try {
    const videoRef = doc(firestore, 'videos', id);  // Get reference to the document by ID
    await deleteDoc(videoRef);  // Delete the document from Firestore
    console.log("Video deleted successfully");
  } catch (error) {
    console.error("Error deleting video:", error.message);
    throw error;  // Propagate error
  }
};
//display all contacts
const listAllContacts = () => {
  return getDocs(collection(firestore, 'contacts'));
};
//display all crew
const listAllCrew = () => {
  return getDocs(collection(firestore, 'crew'));
};
//delete crew
const deleteCrew = async (id) => {
  try {
    const crewRef = doc(firestore, 'crew', id);  // Get reference to the document by ID
    await deleteDoc(crewRef);  // Delete the document from Firestore
    console.log("Crew member deleted successfully");
  } catch (error) {
    console.error("Error deleting crew member:", error.message);
    throw error;  // Propagate error
  }
};


  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider value={{
      currentUser: user, // Provide current user state
      signupUserWithEmailAndPassword,
      loginUserWithEmailAndPassword,
      signinWithGoogle,
      logoutUser,  // Provide logout function
      isLoggedIn,
      handleCreateNewListing,
      listAllGallery,
      deleteItem,
      handleCreateNewListingMedia,
      listAllMedia,
      deleteItemMedia,
      handleCreateNewVideoListing,
      listAllVideos,
      deleteVideo,
      listAllContacts,
      listAllCrew,
      deleteCrew
     
    }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
