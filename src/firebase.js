// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkZqzwKrKeRfY2L8kXt0YOxMTyYex1uOk",
  authDomain: "react-chat-53e8d.firebaseapp.com",
  projectId: "react-chat-53e8d",
  storageBucket: "react-chat-53e8d.appspot.com",
  messagingSenderId: "821940203597",
  appId: "1:821940203597:web:48c74711cde904f912ac04",
  measurementId: "G-QXDR7QGXX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);