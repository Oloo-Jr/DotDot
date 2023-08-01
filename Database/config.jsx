// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARXPQRINgY7x1z2Xz-KKFnQ1EiuHjHnoU",
  authDomain: "r-dotdot.firebaseapp.com",
  projectId: "r-dotdot",
  storageBucket: "r-dotdot.appspot.com",
  messagingSenderId: "898739240332",
  appId: "1:898739240332:web:3a0e341766a068f4beeaa9",
  measurementId: "G-8YNTL1T8N5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();
export const storage = firebase.storage();
export const storageRef = storage.ref();
export const auth = firebase.auth()
