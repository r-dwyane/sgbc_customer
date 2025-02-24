import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHIi7OYYBaHMLD59-k-N5V0my6_x6iaLo",
  authDomain: "sgbc-5fe4a.firebaseapp.com",
  projectId: "sgbc-5fe4a",
  storageBucket: "sgbc-5fe4a.firebasestorage.app",
  messagingSenderId: "161866640019",
  appId: "1:161866640019:web:f39e9b4cd83e701195fb66",
  measurementId: "G-YCFXSV2867"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
