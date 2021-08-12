import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOH2jijlHwsZ6OPhEK53NIFVxri_vIvGY",
  authDomain: "ultimi-vineti.firebaseapp.com",
  projectId: "ultimi-vineti",
  storageBucket: "ultimi-vineti.appspot.com",
  messagingSenderId: "851522661257",
  appId: "1:851522661257:web:b2fa732eb8ba85d953cf58",
  measurementId: "G-NJ89YR9X36",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
