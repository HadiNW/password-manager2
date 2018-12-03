import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

//Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxqKOAPIsuU5nNSYwkAji7bm2jqZVi2XA",
    authDomain: "password-manager-a53e4.firebaseapp.com",
    databaseURL: "https://password-manager-a53e4.firebaseio.com",
    projectId: "password-manager-a53e4",
    storageBucket: "password-manager-a53e4.appspot.com",
    messagingSenderId: "632003092890"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase