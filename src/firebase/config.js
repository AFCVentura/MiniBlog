// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDtEtoCsMq0ahAgnv0-dU7Py0c7bWHu20",
  authDomain: "miniblog-9618c.firebaseapp.com",
  projectId: "miniblog-9618c",
  storageBucket: "miniblog-9618c.appspot.com",
  messagingSenderId: "204478046541",
  appId: "1:204478046541:web:204d05fc2217c859ffd704",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore is the db service of Firebase
const db = getFirestore(app);

export { db };


