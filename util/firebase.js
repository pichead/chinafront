// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgOl0FL6If5qPP63GIhTHRU1X-sle4nhk",
  authDomain: "ecom-cargo.firebaseapp.com",
  projectId: "ecom-cargo",
  storageBucket: "ecom-cargo.appspot.com",
  messagingSenderId: "821021641142",
  appId: "1:821021641142:web:364d2904dc6419b6de1917",
  measurementId: "G-8R13LX5JHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
