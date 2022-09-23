// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYvnob8Nd3kZKOBE0x-6P0U0fuI7-tT0M",
  authDomain: "carrito-coder-7deb9.firebaseapp.com",
  projectId: "carrito-coder-7deb9",
  storageBucket: "carrito-coder-7deb9.appspot.com",
  messagingSenderId: "1070848923195",
  appId: "1:1070848923195:web:abc0d2a7285c9b26796e1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
