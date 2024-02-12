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
  apiKey: "AIzaSyDbESWaiM1sl52FYxaqlwdSaT7lvCRMxzM",
  authDomain: "bookzukbookzuk-242c3.firebaseapp.com",
  projectId: "bookzukbookzuk-242c3",
  storageBucket: "bookzukbookzuk-242c3.appspot.com",
  messagingSenderId: "590006620193",
  appId: "1:590006620193:web:2d003e89aa51a89c2a1360",
  measurementId: "G-Q877J3SWH7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);