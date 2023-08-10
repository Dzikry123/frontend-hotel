// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDH0EGOCiXJ-rxAhSTTIWB6sFMZrSE1Ycw",
  authDomain: "hotel-dc8de.firebaseapp.com",
  projectId: "hotel-dc8de",
  storageBucket: "hotel-dc8de.appspot.com",
  messagingSenderId: "667464084835",
  appId: "1:667464084835:web:7c745625dbefeb4cbc3756",
  measurementId: "G-K160G0758J"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

