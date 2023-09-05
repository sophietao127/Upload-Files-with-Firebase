// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjZQuvg5iGjfHNufThpKxbCyl_PLAEr10",
  authDomain: "uploadingfile-3e493.firebaseapp.com",
  projectId: "uploadingfile-3e493",
  storageBucket: "uploadingfile-3e493.appspot.com",
  messagingSenderId: "1083789441138",
  appId: "1:1083789441138:web:7bba8c8ca8051126906aeb",
  measurementId: "G-V4J030HC6G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);