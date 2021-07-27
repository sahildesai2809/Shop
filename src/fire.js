import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGCAJSyR4Y1lqriqpZddhz8Mw7tewVQJk",
  authDomain: "e-comm-acd8e.firebaseapp.com",
  projectId: "e-comm-acd8e",
  storageBucket: "e-comm-acd8e.appspot.com",
  messagingSenderId: "334430035543",
  appId: "1:334430035543:web:1ab5f735d53a65a6b30d12",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
