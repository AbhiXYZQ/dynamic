// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFYJlesapJfWescCaHzW_ibLNoKUHqXV0",
  authDomain: "dynamic-data-1388c.firebaseapp.com",
  projectId: "dynamic-data-1388c",
  storageBucket: "dynamic-data-1388c.firebasestorage.app",
  messagingSenderId: "674515472884",
  appId: "1:674515472884:web:e2ed758a4261d7dfad29a1",
  measurementId: "G-P6P20525WY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
