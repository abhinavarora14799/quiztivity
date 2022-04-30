import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from "firebase/auth";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { Firestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp6wxBpHECZunpgQDu0hp3UO4qzOmdm_Y",
  authDomain: "quiz-fc02f.firebaseapp.com",
  projectId: "quiz-fc02f",
  storageBucket: "quiz-fc02f.appspot.com",
  messagingSenderId: "286025587314",
  appId: "1:286025587314:web:8b3995734a8d4e491a80eb",
  measurementId: "G-YLNNVCB2KT"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = firebase.firestore();

export default db;
