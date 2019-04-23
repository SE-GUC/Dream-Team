// import { model } from "mongoose";

const firebase = require("firebase/app");
var storageFire = require("firebase/storage");
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCT2dsHnPv7Uuq_yAH2iqCaPmg6QZ5DLQ4",
  authDomain: "sepdf-7b33a.firebaseapp.com",
  databaseURL: "https://sepdf-7b33a.firebaseio.com",
  projectId: "sepdf-7b33a",
  storageBucket: "sepdf-7b33a.appspot.com",
  messagingSenderId: "425449498627"
};
firebase.initializeApp(config);
const storage = firebase.storage();
module.exports = storage;
// export default { storage, firebase };
// export default firebase;
