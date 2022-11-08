// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqTR1c4KzJ-5_moyiL_z1g7_mDbY8XW4A",
    authDomain: "photographer-with-node-mongodb.firebaseapp.com",
    projectId: "photographer-with-node-mongodb",
    storageBucket: "photographer-with-node-mongodb.appspot.com",
    messagingSenderId: "599989507775",
    appId: "1:599989507775:web:a014d15dcbc0aaaf3a180a"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app