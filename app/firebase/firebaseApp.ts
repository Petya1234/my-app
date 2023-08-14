// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkKiCOTNq4VWnSar29h-nLUMM2j85z3gY",
  authDomain: "petprojbase.firebaseapp.com",
  projectId: "petprojbase",
  storageBucket: "petprojbase.appspot.com",
  messagingSenderId: "139672217338",
  appId: "1:139672217338:web:8ef8c1d26ec71ad634cb43",
  measurementId: "G-K4JYBTHKYT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}