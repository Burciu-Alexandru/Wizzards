// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwpliN7rSMXFkJzviuH050Vm5ebmw029k",
  authDomain: "proiect-e8fb7.firebaseapp.com",
  projectId: "proiect-e8fb7",
  storageBucket: "proiect-e8fb7.appspot.com",
  messagingSenderId: "582152149720",
  appId: "1:582152149720:web:e8d8f88ec9ebbd8ac555ad",
  measurementId: "G-G83L2MK68V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default firebaseConfig ;