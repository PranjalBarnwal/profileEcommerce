import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_CgzBJqwRfdItTxQF5VHPdsVC4KgYuSs",
  authDomain: "ecom-e14de.firebaseapp.com",
  projectId: "ecom-e14de",
  storageBucket: "ecom-e14de.appspot.com",
  messagingSenderId: "704671022168",
  appId: "1:704671022168:web:8be2772576fd9e22dbde2d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
