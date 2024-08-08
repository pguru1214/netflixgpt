// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA79jnh0uZDUikQcgXgUH3WoHHsKJ6SXJg",
  authDomain: "gptnetflix-81efe.firebaseapp.com",
  projectId: "gptnetflix-81efe",
  storageBucket: "gptnetflix-81efe.appspot.com",
  messagingSenderId: "209355837205",
  appId: "1:209355837205:web:91605471d6cba122b1231c",
  measurementId: "G-GQ9Y992P0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();