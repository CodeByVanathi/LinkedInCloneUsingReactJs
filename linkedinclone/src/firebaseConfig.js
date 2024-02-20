// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCllBvtmLTeq55q5QylE-6rBfmr4RDvnE4",
  authDomain: "linkedinclone-a336e.firebaseapp.com",
  projectId: "linkedinclone-a336e",
  storageBucket: "linkedinclone-a336e.appspot.com",
  messagingSenderId: "450024541867",
  appId: "1:450024541867:web:a69bedd26d0ee6cb96f1ee",
  measurementId: "G-TH5537DD3R"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);