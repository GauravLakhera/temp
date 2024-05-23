// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVE69yazDvEsm_QP0hhAOkNYhEOZJK7Qw",
  authDomain: "flipkart-6ffea.firebaseapp.com",
  projectId: "flipkart-6ffea",
  storageBucket: "flipkart-6ffea.appspot.com",
  messagingSenderId: "975436817321",
  appId: "1:975436817321:web:d2d1bcb356f72e31e3dab8",
  measurementId: "G-73Q5W6GHPC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
