// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7IU3MUAfibj_UBaPM0Iy-taKj78fBD6U",
  authDomain: "ec463-miniprojec.firebaseapp.com",
  projectId: "ec463-miniprojec",
  storageBucket: "ec463-miniprojec.appspot.com",
  messagingSenderId: "859617849276",
  appId: "1:859617849276:web:6c1948765d23239befc5b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
