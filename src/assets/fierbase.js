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
  apiKey: "AIzaSyAMffVN5qASPwIw6OA209OUG02YE7oi9oU",
  authDomain: "book-review-90449.firebaseapp.com",
  projectId: "book-review-90449",
  storageBucket: "book-review-90449.appspot.com",
  messagingSenderId: "287087590037",
  appId: "1:287087590037:web:cf253566a41845b580f99c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
