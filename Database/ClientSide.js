// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const otherfirebaseConfig = firebase.initializeApp( {
  apiKey: "AIzaSyA35tDTwqfgVjq5B9ImzQT9s9i1v15ZkvE",
  authDomain: "rekebishaapp.firebaseapp.com",
  databaseURL: "https://rekebishaapp-default-rtdb.firebaseio.com",
  projectId: "rekebishaapp",
  storageBucket: "rekebishaapp.appspot.com",
  messagingSenderId: "869728077538",
  appId: "1:869728077538:web:5dd2a2de285dd6fb1740bb"
},'otherfirebaseConfig');


// Initialize Cloud Firestore and get a reference to the service
export const dbc = otherfirebaseConfig.firestore();
export const storagec = otherfirebaseConfig.storage();
export const storageRefc = storagec.ref();
export const authc = otherfirebaseConfig.auth()