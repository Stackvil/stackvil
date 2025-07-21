// src/firebase.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB3pjJ8-uDU7ZuRBjBy7YcTDTJOrNDTOi4",
  authDomain: "stackvil-8b113.firebaseapp.com",
  projectId: "stackvil-8b113",
  storageBucket: "stackvil-8b113.appspot.com",
  messagingSenderId: "your-sender-id",         // optional for auth
  appId: "your-app-id",                         // optional unless using FCM
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
