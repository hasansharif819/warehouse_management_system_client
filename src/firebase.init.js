// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvsvdbW2rWkT0Kf4z-Mr9mNT0I_hdja1U",
  authDomain: "smart-zone-819.firebaseapp.com",
  projectId: "smart-zone-819",
  storageBucket: "smart-zone-819.appspot.com",
  messagingSenderId: "910438343582",
  appId: "1:910438343582:web:72834a96b8a4bc05b6ac8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;