import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_m1DwSSREXLWnBL7Af6u1c79EEjTAVLI",
  authDomain: "atento-salud-auth.firebaseapp.com",
  projectId: "atento-salud-auth",
  storageBucket: "atento-salud-auth.appspot.com",
  messagingSenderId: "117952810984",
  appId: "1:117952810984:web:9a219e17358c572c585e5d",
  measurementId: "G-XGXWJBLRZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();