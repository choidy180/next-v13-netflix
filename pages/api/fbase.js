// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC24a8XCg4Wp4m4kM360yv5J5pK474w08s",
  authDomain: "react-netflix-99cda.firebaseapp.com",
  projectId: "react-netflix-99cda",
  storageBucket: "react-netflix-99cda.appspot.com",
  messagingSenderId: "326081780819",
  appId: "1:326081780819:web:6ac115f8b36de688237aa6",
  measurementId: "G-XDJPPP413K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);