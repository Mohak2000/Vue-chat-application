import firebase from "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyB-0G4YeZQlCkwskV-UtragWUYscxBEAKA",
  authDomain: "vue-auth-235bf.firebaseapp.com",
  databaseURL: "https://vue-auth-235bf-default-rtdb.firebaseio.com",
  projectId: "vue-auth-235bf",
  storageBucket: "vue-auth-235bf.appspot.com",
  messagingSenderId: "37133484801",
  appId: "1:37133484801:web:27958da05bd2f2c0d15100",
  measurementId: "G-HZ4WT9CDN8"
};

const db = firebase.initializeApp(config);
export default db;