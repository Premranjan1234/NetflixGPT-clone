// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPXH1vMybJOcRAS35kimcOdtgHcQWjkWo",
  authDomain: "netflixgpt-c4298.firebaseapp.com",
  projectId: "netflixgpt-c4298",
  storageBucket: "netflixgpt-c4298.appspot.com",
  messagingSenderId: "889563436347",
  appId: "1:889563436347:web:c4ea32a382b24ad5fb531e",
  measurementId: "G-M7JP0GS6XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();