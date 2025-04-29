// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPZRGGVjEUHGsXryk3cO3-G_zwCcGXnrU",
  authDomain: "netflixgpt-911.firebaseapp.com",
  projectId: "netflixgpt-911",
  storageBucket: "netflixgpt-911.firebasestorage.app",
  messagingSenderId: "333725990192",
  appId: "1:333725990192:web:0b8a82f2078f9e87c4dcf5",
  measurementId: "G-KYPVF2M4X7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();