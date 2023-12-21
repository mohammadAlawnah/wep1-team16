import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyDV618IR5DDwVQNLvMfxRm0hwC5IJat8mU",
  authDomain: "evnents.firebaseapp.com",
  projectId: "evnents",
  storageBucket: "evnents.appspot.com",
  messagingSenderId: "784455122958",
  appId: "1:784455122958:web:bdcaa690d69c42f5043c5f",
  measurementId: "G-0R0MBTRGNG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

