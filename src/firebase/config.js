import firebase from 'firebase';
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyBvFuqL9ABCduMlK9a-8l3darGiVaTyj7Q",
    authDomain: "react-raya.firebaseapp.com",
    projectId: "react-raya",
    storageBucket: "react-raya.appspot.com",
    messagingSenderId: "295877626780",
    appId: "1:295877626780:web:0ab067d17a0696c9e81659",
    measurementId: "G-CYGHHB33GQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const myDatabase = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp
  const provider = new firebase.auth.GoogleAuthProvider();
  const authentication = firebase.auth()
  const myStorage = firebase.storage()

  export {myDatabase,timestamp,provider,authentication,myStorage}