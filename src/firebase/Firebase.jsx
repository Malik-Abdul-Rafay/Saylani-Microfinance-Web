// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5q97k3mQHu3n1iod5ngTO3-zA5nRqT6Y",
  authDomain: "hakathone-7393e.firebaseapp.com",
  projectId: "hakathone-7393e",
  storageBucket: "hakathone-7393e.firebasestorage.app",
  messagingSenderId: "1070658491828",
  appId: "1:1070658491828:web:d282a6c22fbab8d3660ee1",
  measurementId: "G-SJWQNLCJN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)



export { db, auth };
