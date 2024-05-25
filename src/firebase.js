// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAssWYhs3DSA5S0BE0qOPQxaQAJFj6zPEI",
  authDomain: "webfolio-4b72f.firebaseapp.com",
  projectId: "webfolio-4b72f",
  storageBucket: "webfolio-4b72f.appspot.com",
  messagingSenderId: "402124998402",
  appId: "1:402124998402:web:d754e54dc6774df3e7e41b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };