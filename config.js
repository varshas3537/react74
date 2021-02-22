import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCNLw41VYIOSQQeiuUEs3auAdaWnoQka1I",
  authDomain: "willy-b8975.firebaseapp.com",
  databaseURL: "https://willy-b8975-default-rtdb.firebaseio.com",
  projectId: "willy-b8975",
  storageBucket: "willy-b8975.appspot.com",
  messagingSenderId: "665325715800",
  appId: "1:665325715800:web:b3684fc3e35c8e2d78252d"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();