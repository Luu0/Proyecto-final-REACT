// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvBZ6G5j-kQ4gtQnIUuAPHnT545YXf48Q",
  authDomain: "ecomerce-gimnasio-coderhouse.firebaseapp.com",
  projectId: "ecomerce-gimnasio-coderhouse",
  storageBucket: "ecomerce-gimnasio-coderhouse.appspot.com",
  messagingSenderId: "785967324565",
  appId: "1:785967324565:web:9ac7eda866b9dce82b2a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app