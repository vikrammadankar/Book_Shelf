// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth, getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyAlM0KHMJvhP8U1wQK6inZXE0ekHL9qmuQ",

    authDomain: "firecommerce-87edd.firebaseapp.com",

    projectId: "firecommerce-87edd",

    storageBucket: "firecommerce-87edd.appspot.com",

    messagingSenderId: "116559726527",

    appId: "1:116559726527:web:bcb92f61080756aa1c830a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export default DB