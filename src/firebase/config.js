import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYvnob8Nd3kZKOBE0x-6P0U0fuI7-tT0M",
  authDomain: "carrito-coder-7deb9.firebaseapp.com",
  projectId: "carrito-coder-7deb9",
  storageBucket: "carrito-coder-7deb9.appspot.com",
  messagingSenderId: "1070848923195",
  appId: "1:1070848923195:web:abc0d2a7285c9b26796e1e",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
