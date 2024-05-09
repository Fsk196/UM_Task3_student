import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBF5jweiRXeuqNbmx5r93W_HhGPmklgBw0",
  authDomain: "stud-teacher.firebaseapp.com",
  projectId: "stud-teacher",
  storageBucket: "stud-teacher.appspot.com",
  messagingSenderId: "966779641632",
  appId: "1:966779641632:web:cb278691a364b2f67c0145",
  measurementId: "G-M8KCJ2F1D7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
