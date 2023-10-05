// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAinuUkJPQQkd0zbV3S7ANo4BCJbxO4xlY",
  authDomain: "react-dragon-news-auth2.firebaseapp.com",
  projectId: "react-dragon-news-auth2",
  storageBucket: "react-dragon-news-auth2.appspot.com",
  messagingSenderId: "126079027007",
  appId: "1:126079027007:web:1a2cc773c9804ba66ff58a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;