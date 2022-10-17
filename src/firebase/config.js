import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBzrvDpqqzF7uPlL2NnjdJY2IbRmTfJ7iU",
    authDomain: "thedojosite-43301.firebaseapp.com",
    projectId: "thedojosite-43301",
    storageBucket: "thedojosite-43301.appspot.com",
    messagingSenderId: "206429427026",
    appId: "1:206429427026:web:e080487db9ba0a6223168b"
  };

  //Initiallize firebase
  firebase.initializeApp(firebaseConfig)

  //Initiallize the services
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()
  const projectStorage = firebase.storage()
  //Creating timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, projectStorage, timestamp }