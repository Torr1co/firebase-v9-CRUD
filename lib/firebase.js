// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5lbV4-YjTYy6FlRMBvfU6R_VdhcT_XNQ",
  authDomain: "v9-with-nextjs.firebaseapp.com",
  projectId: "v9-with-nextjs",
  storageBucket: "v9-with-nextjs.appspot.com",
  messagingSenderId: "101019676328",
  appId: "1:101019676328:web:825d351df57f8e693b1c9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };
