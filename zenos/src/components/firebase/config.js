// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRWhaqxtdcUf2jMFyCsA_XUjgMfgW8cVc",
  authDomain: "zenos-33415.firebaseapp.com",
  projectId: "zenos-33415",
  storageBucket: "zenos-33415.appspot.com",
  messagingSenderId: "155862416923",
  appId: "1:155862416923:web:12a43250c0c12125b402be",
  measurementId: "G-CSSTX7KV8Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, getDocs };