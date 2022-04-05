// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyBurI_DU0hIlSr0-hTd4rEypzBgw3tkkIg",
    authDomain: "bookshop-2b614.firebaseapp.com",
    projectId: "bookshop-2b614",
    storageBucket: "bookshop-2b614.appspot.com",
    messagingSenderId: "49282049877",
    appId: "1:49282049877:web:3126e85ddf2fa0b872b1dc",
    measurementId: "G-N459CHSV24"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export default DB