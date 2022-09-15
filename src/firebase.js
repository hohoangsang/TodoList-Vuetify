// import { initializeApp } from "firebase/app";
import {firestore} from "firebase/app";
// import firebase from "firebase/app"
import "firebase/firebase-firestore";

var firebaseConfig = {
  apiKey: "AIzaSyC_NSnqcGYp2foear4N70ZgkfZFJotcwk0",
  authDomain: "todo-list-vuetify-99544.firebaseapp.com",
  projectId: "todo-list-vuetify-99544",
  storageBucket: "todo-list-vuetify-99544.appspot.com",
  messagingSenderId: "277893362495",
  appId: "1:277893362495:web:fb41f75bb6eb39680ed98a",
  measurementId: "G-ELKJ16XNE5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const db = firestore.settings({ timestampsInSnapshots: true })

export default db;