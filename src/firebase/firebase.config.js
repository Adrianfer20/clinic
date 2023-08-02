import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACf2zvPUQb7ALzr2V3qiv4Qnq3oq3r9PU",
  authDomain: "clinic-monsanto.firebaseapp.com",
  projectId: "clinic-monsanto",
  storageBucket: "clinic-monsanto.appspot.com",
  messagingSenderId: "636596334478",
  appId: "1:636596334478:web:0079c8c7e603999958fedf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Check if Firebase is initialized correctly
if (app.name === "[DEFAULT]") {
  console.log("Firebase esta inicializado correctamente.");
} else {
  console.error("Firebase fallo al inicializarse.");
}

// Export Firebase Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app);