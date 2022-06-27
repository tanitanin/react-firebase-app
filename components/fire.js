// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwYTsT63x3aizozwxWXMBeAbXnDRikwHA",
  authDomain: "react-firebase-test-app-71373.firebaseapp.com",
  projectId: "react-firebase-test-app-71373",
  storageBucket: "react-firebase-test-app-71373.appspot.com",
  messagingSenderId: "480554834356",
  appId: "1:480554834356:web:f531af4901cccc0e72bae1",
  measurementId: "G-L6XVBJBLEE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);