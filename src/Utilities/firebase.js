import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV42_EOCNtJrFUmWGYu4YSxoZwPBxFA0c",
  authDomain: "netflix-gpt-a5334.firebaseapp.com",
  projectId: "netflix-gpt-a5334",
  storageBucket: "netflix-gpt-a5334.firebasestorage.app",
  messagingSenderId: "47467902385",
  appId: "1:47467902385:web:e77f96e46d5a752e12f990",
  measurementId: "G-96LS5N0PC1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();