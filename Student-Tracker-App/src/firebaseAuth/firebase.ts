// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZK1b8f1NyEDOaoCzGadrLHFq9LyNW6pA",
  authDomain: "studenttarcker-42761.firebaseapp.com",
  projectId: "studenttarcker-42761",
  storageBucket: "studenttarcker-42761.firebasestorage.app",
  messagingSenderId: "729167225342",
  appId: "1:729167225342:web:2b9100f483d0f79c2fe0af",
  measurementId: "G-GL6HBMHR1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);