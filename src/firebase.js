import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCTdiP-J8mrj4ipBDYPiwiNrFOLHF28gV0",
  authDomain: "ecommerce-website-ff634.firebaseapp.com",
  projectId: "ecommerce-website-ff634",
  storageBucket: "ecommerce-website-ff634.appspot.com",
  messagingSenderId: "276124690576",
  appId: "1:276124690576:web:73f626ba644ab15e145015"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };