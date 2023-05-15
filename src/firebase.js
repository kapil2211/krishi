// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPiU2y-AIPy5Abkb2_UkPOR1erOHU2LUs",
  authDomain: "krishi-b3b0e.firebaseapp.com",
  projectId: "krishi-b3b0e",
  storageBucket: "krishi-b3b0e.appspot.com",
  messagingSenderId: "721259592407",
  appId: "1:721259592407:web:1846672acfa70765ed0e92",
  measurementId: "G-P1GF5NMGG2"
};

const app = initializeApp(firebaseConfig);

const auth =getAuth();

export{app,auth};
