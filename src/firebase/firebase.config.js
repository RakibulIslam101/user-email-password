// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9VuZuzoFGwD9KxqtSyX1_RpeDRuWLJUA",
  authDomain: "user-email-password-4b92c.firebaseapp.com",
  projectId: "user-email-password-4b92c",
  storageBucket: "user-email-password-4b92c.appspot.com",
  messagingSenderId: "838897322829",
  appId: "1:838897322829:web:856a89eeb19cb57a358504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;