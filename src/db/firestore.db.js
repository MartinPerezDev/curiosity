import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "curiosity-app-cec1f.firebaseapp.com",
  projectId: "curiosity-app-cec1f",
  storageBucket: "curiosity-app-cec1f.appspot.com",
  messagingSenderId: "189664894102",
  appId: process.env.APP_ID
};

export const db = getFirestore(initializeApp(firebaseConfig))