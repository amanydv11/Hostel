
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "myhostel-330d1.firebaseapp.com",
  projectId: "myhostel-330d1",
  storageBucket: "myhostel-330d1.firebasestorage.app",
  messagingSenderId: "706208320998",
  appId: "1:706208320998:web:2d6155356118a4b79b1a27",
  measurementId: "G-ZGH3N9MJGY"
};
const app = initializeApp(firebaseConfig);
