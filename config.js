import firebase from 'firebase';
require ('@firebase/firestore');

 var firebaseConfig = {
    apiKey: "AIzaSyC_121LW8pxofhshO9wqp9qTY8UUEQ3Zzk",
    authDomain: "barter-system-app-8989e.firebaseapp.com",
    projectId: "barter-system-app-8989e",
    databaseURL:'https://barter-system.firebaseio.com/',
    storageBucket: "barter-system-app-8989e.appspot.com",
    messagingSenderId: "918683641037",
    appId: "1:918683641037:web:2a28b4d0bb22c953fe3584"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.firestore();s