// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC80kR8VYDA9cf0mHusIH3Cz20Zm02XFqk",
  authDomain: "sparta-newsfeed-bookzukbookzuk.firebaseapp.com",
  projectId: "sparta-newsfeed-bookzukbookzuk",
  storageBucket: "sparta-newsfeed-bookzukbookzuk.appspot.com",
  messagingSenderId: "244712519556",
  appId: "1:244712519556:web:b5e13d7f50b2906cddcfd1",
  measurementId: "G-9XGSXYQZ70",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
