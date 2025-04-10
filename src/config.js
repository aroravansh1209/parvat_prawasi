import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set,remove } from "firebase/database";
import { getStorage } from "firebase/storage"; // Add storage service
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX3Ebay57V0k8s9ZqyCdmv4oqf5wLgX9Y",
  authDomain: "travel-9e441.firebaseapp.com",
  databaseURL: "https://travel-9e441-default-rtdb.firebaseio.com",
  projectId: "travel-9e441",
  storageBucket: "travel-9e441.firebasestorage.app",
  messagingSenderId: "421996631179",
  appId: "1:421996631179:web:459b26d16acace6de4b08e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();



export { database, ref, onValue, set, storage, auth, provider ,remove};
