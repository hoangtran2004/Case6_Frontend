// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBLnCl8NbeXFyDxSYHMcWUKgVoTG_h-GM",
    authDomain: "blogss-63a57.firebaseapp.com",
    projectId: "blogss-63a57",
    storageBucket: "blogss-63a57.appspot.com",
    messagingSenderId: "188827053355",
    appId: "1:188827053355:web:e479142f1c038f533b296e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)