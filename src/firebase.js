import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// const {
// REACT_APP_FIREBASE_API_KEY,
// REACT_APP_FIREBASE_AUTH_DOMAIN,
// REACT_APP_FIREBASE_PROJECT_ID,
// REACT_APP_FIREBASE_STORAGE_BUCKET,
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// REACT_APP_FIREBASE_APP_ID,

// } = import.meta.env


const firebaseConfig = {
  apiKey: "AIzaSyDKXugZskD7nxW-U3u4PCL9gH8qFeB9Glo",
  authDomain: "movie-app-flix-flex.firebaseapp.com" ,
  projectId: "movie-app-flix-flex" ,
  storageBucket: "movie-app-flix-flex.appspot.com"  ,
  messagingSenderId: "59016248834",
  appId:"1:59016248834:web:a8fe374c4505e4bb67f11b" 
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);