// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAS-1WyAyXtiLEwv8tMU8LJ0DBbodNdRXo",
  authDomain: "netflixgpt-28ffd.firebaseapp.com",
  projectId: "netflixgpt-28ffd",
  storageBucket: "netflixgpt-28ffd.appspot.com",
  messagingSenderId: "898668932330",
  appId: "1:898668932330:web:cd2aef159a6e94afc73b93",
  measurementId: "G-V0BPP0ZCG9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
