import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC2kgZh5kFFxqC1LzO0WLwkxy6s8HnCf2I",
  authDomain: "newteck-9e9cd.firebaseapp.com",
  projectId: "newteck-9e9cd",
  storageBucket: "newteck-9e9cd.appspot.com",
  messagingSenderId: "223463616280",
  appId: "1:223463616280:web:a8b8cf6974ae4ad6a8f86d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app