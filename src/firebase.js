// const firebaseConfig = {
//     apiKey: "AIzaSyA-6hOAY6Y5fGz-JCDYbFxhF_8P7BUduV0",
//     authDomain: "netflix-e81e2.firebaseapp.com",
//     projectId: "netflix-e81e2",
//     storageBucket: "netflix-e81e2.appspot.com",
//     messagingSenderId: "900240744955",
//     appId: "1:900240744955:web:d01827e6bfc0f7f6502b5e"
//   };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-6hOAY6Y5fGz-JCDYbFxhF_8P7BUduV0",
  authDomain: "netflix-e81e2.firebaseapp.com",
  projectId: "netflix-e81e2",
  storageBucket: "netflix-e81e2.appspot.com",
  messagingSenderId: "900240744955",
  appId: "1:900240744955:web:d01827e6bfc0f7f6502b5e",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default db;
// Initialize Firebase
