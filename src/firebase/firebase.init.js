//! Danger !!!!!!!!!!!
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfhsHC3NLjVlwaeVZ1mGtpXGtLFdszIJM",
  authDomain: "react-firebase-auth-ade8e.firebaseapp.com",
  projectId: "react-firebase-auth-ade8e",
  storageBucket: "react-firebase-auth-ade8e.firebasestorage.app",
  messagingSenderId: "1081943033993",
  appId: "1:1081943033993:web:85e999cde756f893db1e58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);