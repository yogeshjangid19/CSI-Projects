// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCG0gBHy9VkaHKXM_ACP-dW3WZStiR1QCA",
  authDomain: "ecommerce-dbcb6.firebaseapp.com",
  projectId: "ecommerce-dbcb6",
  storageBucket: "ecommerce-dbcb6.appspot.com",
  messagingSenderId: "945937319636",
  appId: "1:945937319636:web:a3f12e9a25cf52253e5d41"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}