// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAzN0tC-G4NOE_vWk669jaonADBw6wdRnM",
  authDomain: "colne-2bc23.firebaseapp.com",
  projectId: "colne-2bc23",
  storageBucket: "colne-2bc23.appspot.com",
  messagingSenderId: "52241432561",
  appId: "1:52241432561:web:dd6e9c120547ad872c8e50",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
