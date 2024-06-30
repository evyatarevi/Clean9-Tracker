import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

interface firebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: firebaseConfig = {
  apiKey: "AIzaSyDmXPkM6xq4a2d-OBVo1aAeNx9PkiE3eos",
  authDomain: "clean9-app-23913.firebaseapp.com",
  projectId: "clean9-app-23913",
  storageBucket: "clean9-app-23913.appspot.com",
  messagingSenderId: "868306793259",
  appId: "1:868306793259:web:96c643c6090f8373a7cb6e",
  measurementId: "G-F76D6GMPXN",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
