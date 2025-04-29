// filepath: /home/adallapete/ardenconstructions/src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your configuration here
  apiKey: "AIzaSyA1khZOYNvgnUXg2A4Hcm8bWtxPEWyVQwE",
  authDomain: "ardenconstructions-13b15.firebaseapp.com",
  projectId: "ardenconstructions-13b15",
  storageBucket: "ardenconstructions-13b15.firebasestorage.app",
  messagingSenderId: "335114063199",
  appId: "1:335114063199:web:c1667ec6207d17a553faea",
  measurementId: "G-MRH6CC0V0L",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
