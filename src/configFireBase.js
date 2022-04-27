import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDnQa03SLVwQYiuPi_hkAN-N4-TEWbCxP8",
  authDomain: "tesst-d9965.firebaseapp.com",
  databaseURL:
    "https://tesst-d9965-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tesst-d9965",
  storageBucket: "tesst-d9965.appspot.com",
  messagingSenderId: "759683837478",
  appId: "1:759683837478:web:e8da1676c34091e926c0e7",
  measurementId: "G-FTHGSBL8PT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const auth = getAuth(app);
export const firebase = { analytics, database, auth };
