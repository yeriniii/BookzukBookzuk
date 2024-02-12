// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvPPvZM7SbufVKf37BnfCQg1C2oqky3Lc",
  authDomain: "bookzuk-react.firebaseapp.com",
  projectId: "bookzuk-react",
  storageBucket: "bookzuk-react.appspot.com",
  messagingSenderId: "601410179603",
  appId: "1:601410179603:web:ea815c125538853f70a5e6",
  measurementId: "G-NQNV3GVNML"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);