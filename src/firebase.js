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
  apiKey: "AIzaSyBAUyrZiMRGESBO9QR5t_YoEx5DsPai_Jg",
  authDomain: "project-bookzukbookzuk.firebaseapp.com",
  projectId: "project-bookzukbookzuk",
  storageBucket: "project-bookzukbookzuk.appspot.com",
  messagingSenderId: "657070721240",
  appId: "1:657070721240:web:4ebc704ef0941c3123afad",
  // measurementId: "G-Q877J3SWH7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
