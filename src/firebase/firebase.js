// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeO_X91UScwzOqNhP0TOKOVX7XPr7N2Ok",
  authDomain: "fitness-5ee62.firebaseapp.com",
  projectId: "fitness-5ee62",
  storageBucket: "fitness-5ee62.appspot.com",
  messagingSenderId: "631953310960",
  appId: "1:631953310960:web:959905e8b121974e612e35",
  measurementId: "G-L5QCP2TFQC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);