// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlRdurP3CJWWYQBFNDF-EKcwsaaIuaOGY",
  authDomain: "ecommerce-back-f101f.firebaseapp.com",
  projectId: "ecommerce-back-f101f",
  storageBucket: "ecommerce-back-f101f.appspot.com",
  messagingSenderId: "317867567246",
  appId: "1:317867567246:web:2958f43eee0359bc7a41df",
  measurementId: "G-BH4DP65WQH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);