import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDAa-kNLrb4Jfsu_CuVIYQN0HV8LEQEuds",
  authDomain: "vita-auction.firebaseapp.com",
  projectId: "vita-auction",
  storageBucket: "vita-auction.appspot.com",
  messagingSenderId: "1071953973739",
  appId: "1:1071953973739:web:32e0b3e4d2909d9f0c09ae"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
