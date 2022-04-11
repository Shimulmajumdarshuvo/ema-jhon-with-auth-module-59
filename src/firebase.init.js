// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe3BOzb360KRpZ7avfpy3tyLwU-3vBXIo",
    authDomain: "ema-jhon-simple-70952.firebaseapp.com",
    projectId: "ema-jhon-simple-70952",
    storageBucket: "ema-jhon-simple-70952.appspot.com",
    messagingSenderId: "3310677089",
    appId: "1:3310677089:web:f4878d37d3b39d7aa78e20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;