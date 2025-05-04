import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";  // Use modular imports
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3tbGm2c-V6fJAB7KchpCLd94_UQx4u-w",
  authDomain: "gymhub-123.firebaseapp.com",
  projectId: "gymhub-123",
  storageBucket: "gymhub-123.firebasestorage.app",
  messagingSenderId: "469141698109",
  appId: "1:469141698109:web:3cdd116f91d9f58798dc54",
  measurementId: "G-JJHBZ67JT8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // 👈 Initialize Auth

export { auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, db };

