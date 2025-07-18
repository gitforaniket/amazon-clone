import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBmK6xkvc9oqDf-PlJN4KVWOyl_SSzS-cs",
    authDomain: "clone-d6cee.firebaseapp.com",
    projectId: "clone-d6cee",
    storageBucket: "clone-d6cee.appspot.com",
    messagingSenderId: "123181319078",
    appId: "1:123181319078:web:50f28fe38b0a3a80c04567",
    measurementId: "G-MDQX5GHK2X"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };