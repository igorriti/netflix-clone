import { initializeApp } from "firebase/app";
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyD5DYHJA6_CINrZawTs9u0B0aPuSe23-As",
  authDomain: "netflix-f5a36.firebaseapp.com",
  projectId: "netflix-f5a36",
  storageBucket: "netflix-f5a36.appspot.com",
  messagingSenderId: "811817826051",
  appId: "1:811817826051:web:5f6aa1860bcc1df2e85b36",
  measurementId: "G-WT821KJ82Z"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;